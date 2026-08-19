"use client";

import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import type { SlideDef } from "../../components/Slide";
import { SlidePreview } from "../../components/SlidePreview";
import { formatElapsed, useElapsedTimer } from "../../hooks/useElapsedTimer";
import { useDeckNavigation } from "../../hooks/useDeckNavigation";
import { slides } from "../../lib/slides";

const slideTitles: Record<string, string> = {
  title: "Find the move.",
  "last-seat": "Two people bought the last seat.",
  "one-move": "The fix was one move.",
  "paid-again": "Then I paid to find it again.",
  "finished-run": "A frontier run should leave behind a reusable capability.",
  "skill-filter": "Ask whether the hard task earned a skill.",
  ritual: "Take five minutes before you close the run.",
  find: "Before you close the chat, ask what changed.",
  distill: "Write a skill the next agent can use.",
  lock: "Run one check for the result and one for the method.",
  replay: "Give a fresh chat only what it should need.",
  "pilot-method": "For each reported run, we measured cost, time, and intelligence.",
  "ledger-results": "Composer Fast was cheapest on the ledger task in this pilot.",
  "email-results": "Composer Fast was cheapest on the email task in this pilot.",
  "skill-replay-results": "Luna cost 1.6 cents, but it needed two attempts to pass.",
  "frontier-rule": "Use a frontier model when you still need to discover the move.",
  "next-hard-fix": "Before you close the next hard fix."
};

function presenterTitle(slide: SlideDef) {
  return slideTitles[slide.id] ?? slide.kicker ?? slide.id.replace(/-/g, " ");
}

function previewSummary(slide: SlideDef, index: number, label: string) {
  return (
    <div className="mobile-preview-card">
      <div className="mobile-preview-topline">
        <span>{label}</span>
        <span>{index + 1} / {slides.length}</span>
      </div>
      <div className="mobile-preview-section">
        {slide.kicker ?? slide.id.replace(/-/g, " ")}
      </div>
      <div className="mobile-preview-title">{presenterTitle(slide)}</div>
    </div>
  );
}

export default function PresenterPage() {
  const { index, setIndex, slideCount, room, syncState, partyHost, syncEnabled } =
    useDeckNavigation({
      role: "controller"
    });
  const elapsed = useElapsedTimer();
  const slide = slides[index];
  const nextSlide = index < slides.length - 1 ? slides[index + 1] : null;
  const audienceHref = syncEnabled
    ? `/?room=${encodeURIComponent(room)}&sync=1`
    : "/";
  const syncLabel = !syncEnabled
    ? "manual"
    : !partyHost
      ? "sync off"
      : syncState === "live"
        ? "sync live"
        : "sync…";

  return (
    <div className="presenter-page">
      <header className="presenter-header">
        <div>
          <div className="presenter-label">Presenter view</div>
          <div className="presenter-meta">
            <span>{index + 1} / {slideCount}</span>
            <span
              className={`sync-pill ${
                syncEnabled
                  ? `sync-pill-${syncState}${partyHost ? "" : " sync-pill-offline"}`
                  : "sync-pill-offline"
              }`}
            >
              {syncLabel}
            </span>
            <Link className="audience-link" href={audienceHref} target="_blank">
              Audience <ExternalLink size={13} strokeWidth={2.2} />
            </Link>
          </div>
        </div>
        <div className="presenter-controls" aria-label="Presenter controls">
          <button
            aria-label="Previous slide"
            disabled={index === 0}
            onClick={() => setIndex((current) => current - 1)}
            type="button"
          >
            <ChevronLeft size={20} strokeWidth={2.4} />
          </button>
          <div className="timer">{formatElapsed(elapsed)}</div>
          <button
            aria-label="Next slide"
            disabled={index === slideCount - 1}
            onClick={() => setIndex((current) => current + 1)}
            type="button"
          >
            <ChevronRight size={20} strokeWidth={2.4} />
          </button>
        </div>
      </header>

      <div className="presenter-main">
        <aside className="preview-column">
          <SlidePreview
            label="Current"
            mobileSummary={previewSummary(slide, index, "Current")}
          >
            {slide.content}
          </SlidePreview>
          {nextSlide ? (
            <SlidePreview
              label="Next"
              mobileSummary={previewSummary(nextSlide, index + 1, "Next")}
            >
              {nextSlide.content}
            </SlidePreview>
          ) : (
            <div className="slide-preview">
              <div className="slide-preview-label">Next</div>
              <div className="slide-preview-summary">
                <div className="mobile-preview-card">
                  <div className="mobile-preview-topline">
                    <span>Next</span>
                    <span>End</span>
                  </div>
                  <div className="mobile-preview-title">Final slide</div>
                </div>
              </div>
              <div className="notes-body">Final slide</div>
            </div>
          )}
        </aside>

        <section className="notes-card">
          <div className="notes-card-header">
            <div className="notes-card-kicker">Speaker notes</div>
            <div className="notes-card-title">{slide.kicker ?? presenterTitle(slide)}</div>
          </div>
          <div className="notes-body">{slide.note ?? "No notes for this slide."}</div>
        </section>
      </div>

      <footer className="presenter-footer">
        <span>Notes view · room {room}</span>
        <span className="faint">
          &nbsp; Add ?sync=1 to phone + projector only when you want remote control
        </span>
      </footer>
    </div>
  );
}
