"use client";

import { DeckChrome } from "../components/DeckChrome";
import { useDeckNavigation } from "../hooks/useDeckNavigation";
import { slides } from "../lib/slides";

export default function AudiencePage() {
  const { index, onClickNav } = useDeckNavigation({
    role: "controller",
    enableClickNav: true
  });
  const slide = slides[index];

  return (
    <main className="audience-page" onClick={onClickNav}>
      <div key={slide.id} className="slide-enter slide-shell">
        {slide.content}
      </div>
      <DeckChrome index={index} />
    </main>
  );
}
