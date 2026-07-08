"use client";

import { DeckChrome } from "../components/DeckChrome";
import { useDeckNavigation } from "../hooks/useDeckNavigation";
import { slides } from "../lib/slides";

export default function AudiencePage() {
  const { index, onClickNav, syncState, partyHost } = useDeckNavigation({
    role: "follower",
    enableClickNav: true
  });
  const slide = slides[index];
  const following = Boolean(partyHost) && syncState === "live";

  return (
    <main className="audience-page" onClick={following ? undefined : onClickNav}>
      <div key={slide.id} className="slide-enter slide-shell">
        {slide.content}
      </div>
      <DeckChrome index={index} />
    </main>
  );
}
