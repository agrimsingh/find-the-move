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
  /** Presenter owns the deck. Audience only follows. */
  role?: "controller" | "follower";
  /** Audience-only local click advance when sync is offline. */
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

export function useDeckNavigation(options: Options = {}) {
  const { role = "controller", enableClickNav = false } = options;
  const isController = role === "controller";
  const sourceId = useRef(createDeckSourceId()).current;
  const socketRef = useRef<WebSocket | null>(null);
  const indexRef = useRef(0);
  const reconnectTimer = useRef<number | null>(null);
  const [index, setIndexState] = useState(0);
  const [room, setRoom] = useState("talk");
  const [syncState, setSyncState] = useState<"offline" | "connecting" | "live">("offline");

  const partyHost = useMemo(() => getPartyKitHost(), []);

  const publishRemote = useCallback(
    (nextIndex: number) => {
      if (!isController) return;
      const socket = socketRef.current;
      if (!socket || socket.readyState !== WebSocket.OPEN) return;
      const payload: DeckWireMessage = {
        type: "index",
        index: nextIndex,
        sourceId
      };
      socket.send(JSON.stringify(payload));
    },
    [isController, sourceId]
  );

  const applyLocalIndex = useCallback(
    (next: number) => {
      const clamped = clampIndex(next, slideCount);
      indexRef.current = clamped;
      setIndexState(clamped);
      writeStoredIndex(clamped);
      publishRemote(clamped);
    },
    [publishRemote]
  );

  const setIndex = useCallback(
    (next: number | ((current: number) => number)) => {
      if (!isController) return;
      setIndexState((current) => {
        const resolved = typeof next === "function" ? next(current) : next;
        const clamped = clampIndex(resolved, slideCount);
        indexRef.current = clamped;
        writeStoredIndex(clamped);
        publishRemote(clamped);
        return clamped;
      });
    },
    [isController, publishRemote]
  );

  useEffect(() => {
    const nextRoom = resolveDeckRoom(window.location.search);
    setRoom(nextRoom);
    const stored = clampIndex(readStoredIndex(), slideCount);
    indexRef.current = stored;
    setIndexState(stored);
  }, []);

  useEffect(() => {
    if (!partyHost) {
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
        // Controllers push their current slide once; followers wait for room state.
        if (isController) {
          publishRemote(indexRef.current);
        }
      });

      socket.addEventListener("message", (event) => {
        // Presenter never gets yanked by the room — only the phone advances itself.
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
  }, [isController, partyHost, publishRemote, room, sourceId]);

  useEffect(() => {
    if (!isController) return;

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
  }, [isController, setIndex]);

  // Followers with live sync stay hands-off. Offline, click-nav is a local fallback.
  const allowClickNav = enableClickNav && (!partyHost || syncState === "offline");
  const onClickNav = allowClickNav
    ? (event: MouseEvent<HTMLElement>) => {
        const x = event.clientX / window.innerWidth;
        applyLocalIndex(indexRef.current + (x > 0.33 ? 1 : -1));
      }
    : undefined;

  return { index, setIndex, onClickNav, slideCount, room, syncState, partyHost };
}
