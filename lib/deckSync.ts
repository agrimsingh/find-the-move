const storageKey = "aiewf-learning-deck-index";
const channelName = "aiewf-learning-deck-sync";

type DeckSyncDetail = {
  index: number;
  sourceId: string;
};

export function clampIndex(value: number, count: number) {
  if (!Number.isFinite(value)) return 0;
  return Math.min(Math.max(value, 0), count - 1);
}

export function createDeckSourceId() {
  return Math.random().toString(36).slice(2);
}

export function readStoredIndex() {
  if (typeof window === "undefined") return 0;
  const stored = Number(window.localStorage.getItem(storageKey));
  return Number.isFinite(stored) ? stored : 0;
}

export function publishDeckIndex(index: number, sourceId: string) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(storageKey, String(index));
  window.dispatchEvent(new CustomEvent(channelName, { detail: { index, sourceId } }));
}

export function subscribeDeckSync(callback: (detail: DeckSyncDetail) => void) {
  function onSync(event: Event) {
    callback((event as CustomEvent<DeckSyncDetail>).detail);
  }
  window.addEventListener(channelName, onSync);
  return () => window.removeEventListener(channelName, onSync);
}
