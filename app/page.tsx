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
  const hideChrome = slide.id === "thesis" || slide.id === "demo";
  const pageClass =
    slide.id === "demo"
      ? "audience-page demo-backdrop"
      : slide.id === "thesis"
        ? "audience-page bare"
        : "audience-page";

  return (
    <main className={pageClass} onClick={onClickNav}>
      <div key={slide.id} className="slide-enter slide-shell">
        {slide.content}
      </div>
      {hideChrome ? null : <DeckChrome index={index} />}
    </main>
  );
}
