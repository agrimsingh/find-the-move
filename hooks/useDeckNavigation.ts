"use client";

import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";
import {
  clampIndex,
  createDeckSourceId,
  publishDeckIndex,
  readStoredIndex,
  subscribeDeckSync
} from "../lib/deckSync";
import { slideCount } from "../lib/slides";

type Options = {
  enableClickNav?: boolean;
};

export function useDeckNavigation(options: Options = {}) {
  const { enableClickNav = false } = options;
  const sourceId = useRef(createDeckSourceId()).current;
  const [index, setIndexState] = useState(0);

  const applyIndex = useCallback(
    (next: number, broadcast: boolean) => {
      const clamped = clampIndex(next, slideCount);
      setIndexState(clamped);
      if (broadcast) publishDeckIndex(clamped, sourceId);
    },
    [sourceId]
  );

  const setIndex = useCallback(
    (next: number | ((current: number) => number)) => {
      setIndexState((current) => {
        const resolved = typeof next === "function" ? next(current) : next;
        const clamped = clampIndex(resolved, slideCount);
        publishDeckIndex(clamped, sourceId);
        return clamped;
      });
    },
    [sourceId]
  );

  useEffect(() => {
    applyIndex(readStoredIndex(), false);
    return subscribeDeckSync(({ index: remoteIndex, sourceId: remoteSource }) => {
      if (remoteSource === sourceId) return;
      applyIndex(remoteIndex, false);
    });
  }, [applyIndex, sourceId]);

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

  return { index, setIndex, onClickNav, slideCount };
}
