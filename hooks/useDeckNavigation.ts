"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type MouseEvent } from "react";
import {
  clampIndex,
  createDeckSourceId,
  getPartyKitHost,
  readStoredIndex,
  resolveDeckRoom,
  writeStoredIndex
} from "../lib/deckSync";
import { slideCount } from "../lib/slides";

type Options = {
  /** Presenter owns the deck when sync is on. Audience only follows. */
  role?: "controller" | "follower";
  enableClickNav?: boolean;
};

type DeckWireMessage = {
  type: "index";
  index: number;
  sourceId: string;
};

function deckSocketUrl(host: string, room: string) {
  const trimmed = host.replace(/^https?:\/\//, "").replace(/\/$/, "");
  const protocol = trimmed.includes("localhost") || trimmed.startsWith("127.") ? "ws" : "wss";
  return `${protocol}://${trimmed}/?room=${encodeURIComponent(room)}`;
}

function syncEnabledFromSearch(search: string) {
  const params = new URLSearchParams(search.startsWith("?") ? search.slice(1) : search);
  return params.get("sync") === "1";
}

export function useDeckNavigation(options: Options = {}) {
  const { role = "controller", enableClickNav = false } = options;
  const isController = role === "controller";
  const sourceId = useRef(createDeckSourceId()).current;
  const socketRef = useRef<WebSocket | null>(null);
  const indexRef = useRef(0);
  const reconnectTimer = useRef<number | null>(null);
  const [index, setIndexState] = useState(0);
  const [room, setRoom] = useState("talk");
  const [syncEnabled, setSyncEnabled] = useState(false);
  const [syncState, setSyncState] = useState<"offline" | "connecting" | "live">("offline");

  const partyHost = useMemo(() => getPartyKitHost(), []);
  const syncActive = syncEnabled && Boolean(partyHost);

  const publishRemote = useCallback(
    (nextIndex: number) => {
      if (!isController || !syncActive) return;
      const socket = socketRef.current;
      if (!socket || socket.readyState !== WebSocket.OPEN) return;
      const payload: DeckWireMessage = {
        type: "index",
        index: nextIndex,
        sourceId
      };
      socket.send(JSON.stringify(payload));
    },
    [isController, sourceId, syncActive]
  );

  const setIndex = useCallback(
    (next: number | ((current: number) => number)) => {
      // Manual control always works for controllers. Followers only navigate when sync is off.
      if (!isController && syncActive) return;
      setIndexState((current) => {
        const resolved = typeof next === "function" ? next(current) : next;
        const clamped = clampIndex(resolved, slideCount);
        indexRef.current = clamped;
        writeStoredIndex(clamped);
        publishRemote(clamped);
        return clamped;
      });
    },
    [isController, publishRemote, syncActive]
  );

  useEffect(() => {
    const search = window.location.search;
    setRoom(resolveDeckRoom(search));
    setSyncEnabled(syncEnabledFromSearch(search));
    const stored = clampIndex(readStoredIndex(), slideCount);
    indexRef.current = stored;
    setIndexState(stored);
  }, []);

  useEffect(() => {
    if (!syncActive) {
      setSyncState("offline");
      return;
    }

    let closed = false;
    let attempt = 0;

    function clearReconnect() {
      if (reconnectTimer.current !== null) {
        window.clearTimeout(reconnectTimer.current);
        reconnectTimer.current = null;
      }
    }

    function connect() {
      if (closed) return;
      clearReconnect();
      setSyncState("connecting");

      const socket = new WebSocket(deckSocketUrl(partyHost!, room));
      socketRef.current = socket;

      socket.addEventListener("open", () => {
        attempt = 0;
        setSyncState("live");
        if (isController) {
          publishRemote(indexRef.current);
        }
      });

      socket.addEventListener("message", (event) => {
        if (isController) return;
        if (typeof event.data !== "string") return;
        try {
          const data = JSON.parse(event.data) as Partial<DeckWireMessage>;
          if (data.type !== "index") return;
          if (typeof data.index !== "number" || !Number.isFinite(data.index)) return;
          if (data.sourceId === sourceId) return;
          const clamped = clampIndex(data.index, slideCount);
          if (clamped === indexRef.current) return;
          indexRef.current = clamped;
          setIndexState(clamped);
          writeStoredIndex(clamped);
        } catch {
          // ignore malformed payloads
        }
      });

      socket.addEventListener("close", () => {
        if (socketRef.current === socket) socketRef.current = null;
        if (closed) return;
        setSyncState("connecting");
        const delay = Math.min(1000 * 2 ** attempt, 8000);
        attempt += 1;
        reconnectTimer.current = window.setTimeout(connect, delay);
      });

      socket.addEventListener("error", () => {
        socket.close();
      });
    }

    connect();

    return () => {
      closed = true;
      clearReconnect();
      socketRef.current?.close();
      socketRef.current = null;
    };
  }, [isController, partyHost, publishRemote, room, sourceId, syncActive]);

  useEffect(() => {
    // Keys drive the deck whenever this view is allowed to control itself.
    if (!isController && syncActive) return;

    function onKey(event: KeyboardEvent) {
      if (event.key === "ArrowRight" || event.key === " " || event.key === "j") {
        event.preventDefault();
        setIndex((current) => current + 1);
      } else if (event.key === "ArrowLeft" || event.key === "k") {
        event.preventDefault();
        setIndex((current) => current - 1);
      } else if (event.key === "Home") {
        setIndex(0);
      } else if (event.key === "End") {
        setIndex(slideCount - 1);
      } else if (/^[1-9]$/.test(event.key)) {
        setIndex(Number(event.key) - 1);
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isController, setIndex, syncActive]);

  const onClickNav = enableClickNav && (isController || !syncActive)
    ? (event: MouseEvent<HTMLElement>) => {
        const x = event.clientX / window.innerWidth;
        setIndex((current) => current + (x > 0.33 ? 1 : -1));
      }
    : undefined;

  return {
    index,
    setIndex,
    onClickNav,
    slideCount,
    room,
    syncState,
    partyHost,
    syncEnabled
  };
}
