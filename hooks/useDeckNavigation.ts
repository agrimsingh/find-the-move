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
  enableClickNav?: boolean;
  /** When true, push local index on WebSocket connect (phone remote). */
  publishOnConnect?: boolean;
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
  const { enableClickNav = false, publishOnConnect = false } = options;
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
      const socket = socketRef.current;
      if (!socket || socket.readyState !== WebSocket.OPEN) return;
      const payload: DeckWireMessage = {
        type: "index",
        index: nextIndex,
        sourceId
      };
      socket.send(JSON.stringify(payload));
    },
    [sourceId]
  );

  const applyIndex = useCallback((next: number, broadcast: boolean) => {
    const clamped = clampIndex(next, slideCount);
    indexRef.current = clamped;
    setIndexState(clamped);
    writeStoredIndex(clamped);
    if (broadcast) publishRemote(clamped);
  }, [publishRemote]);

  const setIndex = useCallback(
    (next: number | ((current: number) => number)) => {
      setIndexState((current) => {
        const resolved = typeof next === "function" ? next(current) : next;
        const clamped = clampIndex(resolved, slideCount);
        indexRef.current = clamped;
        writeStoredIndex(clamped);
        publishRemote(clamped);
        return clamped;
      });
    },
    [publishRemote]
  );

  useEffect(() => {
    const nextRoom = resolveDeckRoom(window.location.search);
    setRoom(nextRoom);
    applyIndex(readStoredIndex(), false);
  }, [applyIndex]);

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
        if (publishOnConnect) {
          publishRemote(indexRef.current);
        }
      });

      socket.addEventListener("message", (event) => {
        if (typeof event.data !== "string") return;
        try {
          const data = JSON.parse(event.data) as Partial<DeckWireMessage>;
          if (data.type !== "index") return;
          if (typeof data.index !== "number" || !Number.isFinite(data.index)) return;
          if (data.sourceId === sourceId) return;
          applyIndex(data.index, false);
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
  }, [applyIndex, partyHost, publishOnConnect, publishRemote, room, sourceId]);

  useEffect(() => {
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
  }, [setIndex]);

  const onClickNav = enableClickNav
    ? (event: MouseEvent<HTMLElement>) => {
        const x = event.clientX / window.innerWidth;
        setIndex((current) => (x > 0.33 ? current + 1 : current - 1));
      }
    : undefined;

  return { index, setIndex, onClickNav, slideCount, room, syncState, partyHost };
}
