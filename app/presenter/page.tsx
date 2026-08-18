"use client";

import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import type { SlideDef } from "../../components/Slide";
import { SlidePreview } from "../../components/SlidePreview";
import { formatElapsed, useElapsedTimer } from "../../hooks/useElapsedTimer";
import { useDeckNavigation } from "../../hooks/useDeckNavigation";
import { slides, spokenCount, spokenNumber, stepSpoken } from "../../lib/slides";

const slideTitles: Record<string, string> = {
  title: "Find the move.",
  wander: "I let it wander",
  "new-chat": "I opened a new chat",
  thesis: "The failure is paying to find the same move again.",
  "two-maxes": "Token-maxing was the right call. Once.",
  "the-move": "The move, in two lines",
  "skill-file": "The skill is how I stop paying",
  "copied-the-run": "The expensive run already wrote this file",
  demo: "cheap model · clean window · reads the file first",
  "demo-fallback": "demo fallback",
  "the-chart": "What I actually paid",
  "locked-the-test": "I locked the test so green means the path held",
  depreciation: "Compounding works on debt too.",
  close: "Find the move once. Never pay for it twice."
};

function presenterTitle(slide: SlideDef) {
  return slideTitles[slide.id] ?? slide.kicker ?? slide.id.replace(/-/g, " ");
}

function previewSummary(slide: SlideDef, index: number, label: string) {
  return (
    <div className="mobile-preview-card">
      <div className="mobile-preview-topline">
        <span>{label}</span>
        <span>{spokenNumber(index)} / {spokenCount}</span>
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
  const nextIndex = stepSpoken(index, 1);
  const nextSlide = nextIndex !== index ? slides[nextIndex] : null;
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
            <span>{spokenNumber(index)} / {spokenCount}</span>
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
            disabled={stepSpoken(index, -1) === index}
            onClick={() => setIndex((current) => stepSpoken(current, -1))}
            type="button"
          >
            <ChevronLeft size={20} strokeWidth={2.4} />
          </button>
          <div className="timer">{formatElapsed(elapsed)}</div>
          <button
            aria-label="Next slide"
            disabled={stepSpoken(index, 1) === index}
            onClick={() => setIndex((current) => stepSpoken(current, 1))}
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
