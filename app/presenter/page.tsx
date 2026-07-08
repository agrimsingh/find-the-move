"use client";

import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import type { SlideDef } from "../../components/Slide";
import { SlidePreview } from "../../components/SlidePreview";
import { formatElapsed, useElapsedTimer } from "../../hooks/useElapsedTimer";
import { useDeckNavigation } from "../../hooks/useDeckNavigation";
import { slides } from "../../lib/slides";

const slideTitles: Record<string, string> = {
  title: "Agents are leaving the demo phase.",
  frame: "You adopt an operating model.",
  "three-questions": "Answer these three.",
  "sdlc-thesis": "Optimize the loop, not the diff.",
  "sdlc-dialectic": "Factory throughput vs orchestra craft.",
  "sdlc-boundary": "Inner loop vs outer loop.",
  "sdlc-how": "Design the loop before the agent.",
  "sdlc-metrics": "Measure the loop, not the demo.",
  "sdlc-tension": "Harness raises the floor, not ownership.",
  "sdlc-breakout": "Pick one loop an agent could own.",
  "harness-thesis": "The controlled run is the product.",
  "harness-how": "A harness is five jobs.",
  "harness-tokens": "Tokens are not gas. Give them jobs.",
  "harness-checklist": "Six questions before real data.",
  "harness-risk": "Weak verifiers train the wrong behavior.",
  "harness-breakout": "Design the cage.",
  "context-thesis": "Bigger windows do not solve remembering.",
  "context-harness": "Memory is a write / manage / read loop.",
  "context-how": "Route state by lifespan and trust.",
  "context-policy": "Permission, provenance, expiry.",
  "context-breakout": "Write a memory policy.",
  surfaces: "Same cage, different surfaces.",
  "unconference-plan": "Every room produces an operating rule.",
  close: "Can we operate the agents we are building?"
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
  const { index, setIndex, slideCount, room, syncState, partyHost } = useDeckNavigation({
    role: "controller"
  });
  const elapsed = useElapsedTimer();
  const slide = slides[index];
  const nextSlide = index < slides.length - 1 ? slides[index + 1] : null;
  const audienceHref = `/?room=${encodeURIComponent(room)}`;
  const syncLabel =
    !partyHost ? "sync off" : syncState === "live" ? "sync live" : "sync…";

  return (
    <div className="presenter-page">
      <header className="presenter-header">
        <div>
          <div className="presenter-label">Presenter view</div>
          <div className="presenter-meta">
            <span>{index + 1} / {slideCount}</span>
            <span className={`sync-pill sync-pill-${syncState}${partyHost ? "" : " sync-pill-offline"}`}>
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
        <span>You drive · room {room}</span>
        <span className="faint">
          &nbsp; Projector opens Audience and only follows
        </span>
      </footer>
    </div>
  );
}
