export const DEFAULT_DECK_ROOM = "talk";

const storageKey = "aiewf-learning-deck-index";
const roomStorageKey = "aiewf-learning-deck-room";

export type DeckSyncDetail = {
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

export function writeStoredIndex(index: number) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(storageKey, String(index));
}

export function readStoredRoom() {
  if (typeof window === "undefined") return DEFAULT_DECK_ROOM;
  return window.localStorage.getItem(roomStorageKey) ?? DEFAULT_DECK_ROOM;
}

export function writeStoredRoom(room: string) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(roomStorageKey, room);
}

export function resolveDeckRoom(search: string | null | undefined) {
  if (!search) return readStoredRoom();
  const params = new URLSearchParams(search.startsWith("?") ? search.slice(1) : search);
  const room = params.get("room")?.trim();
  if (room) {
    writeStoredRoom(room);
    return room;
  }
  return readStoredRoom();
}

export function getPartyKitHost() {
  return process.env.NEXT_PUBLIC_PARTYKIT_HOST?.trim() || null;
}
