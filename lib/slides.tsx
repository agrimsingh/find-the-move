import type { ReactNode } from "react";

import { H1, Kicker, Sub, type SlideDef } from "../components/Slide";

function Notes({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

function WanderRace() {
  return (
    <svg
      className="diagram wander-race"
      viewBox="0 0 380 340"
      role="img"
      aria-label="Two request lanes both read one left and both write taken"
    >
      <text x="88" y="20" textAnchor="middle" className="diagram-kicker">
        A
      </text>
      <text x="268" y="20" textAnchor="middle" className="diagram-kicker">
        B
      </text>
      <line x1="88" y1="32" x2="88" y2="286" />
      <line x1="268" y1="32" x2="268" y2="286" />

      <circle cx="88" cy="68" r="3.25" />
      <text x="104" y="72">
        read: 1 left
      </text>

      <circle cx="268" cy="112" r="3.25" />
      <text x="284" y="116">
        read: 1 left
      </text>

      <circle cx="88" cy="176" r="3.25" />
      <text x="104" y="180">
        write: taken
      </text>

      <circle cx="268" cy="220" r="3.25" />
      <text x="284" y="224">
        write: taken
      </text>

      <polyline className="diagram-ok" points="76,302 86,314 106,290" />
      <polyline className="diagram-ok" points="256,302 266,314 286,290" />
    </svg>
  );
}

function SpendAxis() {
  return (
    <svg
      className="diagram spend-axis"
      viewBox="0 0 520 80"
      role="img"
      aria-label="Spend to find versus spend to re-find"
    >
      <line x1="36" y1="36" x2="484" y2="36" />
      <circle cx="48" cy="36" r="5" fill="var(--accent)" />
      <circle cx="472" cy="36" r="5" fill="var(--danger-dim)" />
      <text x="48" y="18" textAnchor="middle">
        spend to find
      </text>
      <text x="472" y="18" textAnchor="middle">
        spend to re-find
      </text>
      <text x="48" y="62" textAnchor="middle">
        run 1
      </text>
      <text x="472" y="62" textAnchor="middle">
        run 2
      </text>
    </svg>
  );
}

function HarvestArrow() {
  return (
    <svg
      className="harvest-arrow"
      viewBox="0 0 64 24"
      aria-hidden="true"
      focusable="false"
    >
      <line className="diagram-arrow" x1="2" y1="12" x2="50" y2="12" />
      <polyline className="diagram-arrow" points="42,5 54,12 42,19" />
    </svg>
  );
}

function PaidChart() {
  return (
    <svg
      className="diagram paid-chart"
      viewBox="0 0 640 280"
      role="img"
      aria-label="Wall-clock minutes: find 40, re-find 40, a cheap run"
    >
      <line x1="72" y1="36" x2="248" y2="36" className="diagram-bracket" />
      <line x1="72" y1="36" x2="72" y2="48" className="diagram-bracket" />
      <line x1="248" y1="36" x2="248" y2="48" className="diagram-bracket" />
      <text x="160" y="26" textAnchor="middle">
        same information, bought twice
      </text>

      <rect x="70" y="64" width="36" height="156" className="chart-bar-accent" />
      <line x1="88" y1="28" x2="88" y2="64" className="chart-whisker" />
      <line x1="80" y1="28" x2="96" y2="28" className="chart-whisker" />
      <text x="88" y="240" textAnchor="middle">
        find
      </text>
      <text x="88" y="258" textAnchor="middle">
        40 min
      </text>

      <rect x="194" y="64" width="36" height="156" className="chart-bar-danger" />
      <text x="212" y="240" textAnchor="middle">
        re-find
      </text>
      <text x="212" y="258" textAnchor="middle">
        40 min
      </text>

      <rect x="340" y="196" width="36" height="24" className="chart-bar-accent" />
      <text x="358" y="240" textAnchor="middle">
        a cheap run
      </text>

      <text x="16" y="148" className="diagram-kicker">
        minutes
      </text>
      <text x="400" y="72" className="diagram-caption">
        same task can vary up to 30× — the wander is a gamble,
      </text>
      <text x="400" y="88" className="diagram-caption">
        the skill kills the variance
      </text>
    </svg>
  );
}

function DepreciationCurve() {
  return (
    <svg
      className="diagram dep-curve"
      viewBox="0 0 320 220"
      role="img"
      aria-label="Value over time rises, plateaus, then crosses zero after the world moved"
    >
      <line x1="24" y1="118" x2="300" y2="118" />
      <path
        d="M28 168 C 70 40, 120 28, 168 36 S 210 70, 228 118"
        className="diagram-curve"
        fill="none"
      />
      <path
        d="M228 118 C 248 160, 268 186, 296 200"
        className="diagram-curve-danger"
        fill="none"
      />
      <line x1="228" y1="24" x2="228" y2="204" className="diagram-dash" />
      <text x="234" y="20">
        the world moved
      </text>
    </svg>
  );
}

export function stepSpoken(from: number, dir: 1 | -1): number {
  let i = from + dir;
  while (i >= 0 && i < slides.length) {
    if (!slides[i].holding) return i;
    i += dir;
  }
  return from;
}

export function firstHoldingIndex(): number {
  return slides.findIndex((slide) => slide.holding);
}

export const slides: SlideDef[] = [
  {
    id: "title",
    note: (
      <Notes>
        <p>
          Name and handle. The room already knows what a skill is; no primer.
        </p>
        <p>
          &ldquo;Stay for the part where I paid twice because I did not keep
          the path.&rdquo;
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>Find the move.</H1>
        <Sub>Agrim Singh · @agrimsingh</Sub>
      </div>
    )
  },
  {
    id: "wander",
    note: (
      <Notes>
        <p>
          Two requests saw &ldquo;one left.&rdquo; Both wrote. Two
          confirmations. I let a frontier model wander on it. It checked the
          count, then it wrote — that&apos;s the bug; the second request still
          saw one. Forty minutes and a real bill later I had the path: taking
          the seat and checking the seat are the same step. The second buyer
          gets nothing. That bill bought me the path. I had not kept the path.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <div className="split wander-split">
          <div>
            <H1>I let it wander</H1>
            <p className="scene-line">
              Two people bought the last seat. Both got it.
            </p>
          </div>
          <WanderRace />
        </div>
      </div>
    )
  },
  {
    id: "new-chat",
    note: (
      <Notes>
        <p>
          Same bug, new chat, frontier again. It checked the count, then it
          wrote. Two seats sold again. I paid a second time for the same step
          — while the first run sat in the old transcript with the answer
          already in it.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>I opened a new chat</H1>
        <p className="scene-line">Same bug. Paid again.</p>
      </div>
    )
  },
  {
    id: "thesis",
    note: (
      <Notes>
        <p>
          That&apos;s the whole talk. Everything after this is what I do about
          it.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame thesis-bleed">
        <H1>The failure is paying to find the same move again.</H1>
      </div>
    )
  },
  {
    id: "two-maxes",
    note: (
      <Notes>
        <p>
          compounding-correctness regime — spend big to DISCOVER is correct,
          once. Failure is paying the discovery price for information you
          already own. Value-maxing is token-maxing with a memory.
        </p>
        <p>https://12gramsofcarbon.com/p/agentics-tech-things-tokenmaxxing</p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>Token-maxing was the right call. Once.</H1>
        <div className="stack-lines">
          <p>The wander was a token-max run. Fine. Discovery costs.</p>
          <p>Value-maxing is token-maxing with a memory.</p>
        </div>
        <SpendAxis />
        <p className="evidence">
          &ldquo;compounding correctness&rdquo; — 12gramsofcarbon.com, Jun
          2026
        </p>
      </div>
    )
  },
  {
    id: "the-move",
    note: (
      <Notes>
        <p>
          Check-then-write is two steps; between them the world changes.
          Conditional update is one step; the row count IS the answer. Forty
          frontier minutes to get here. Two lines to keep.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame compact code-slide">
        <H1>The move, in two lines</H1>
        <pre className="code-fill sql-block">
          <span className="cm">
            -- the wander: check, then write (both buyers pass)
          </span>
          {"\n"}
          <span className="kw">SELECT</span> remaining{" "}
          <span className="kw">FROM</span> seats{" "}
          <span className="kw">WHERE</span> id = ?;{"\n"}
          <span className="kw">UPDATE</span> seats{" "}
          <span className="kw">SET</span> taken = true{" "}
          <span className="kw">WHERE</span> id = ?;{"\n\n"}
          <span className="cm">-- the move: take and check in one step</span>
          {"\n"}
          <span className="kw">UPDATE</span> seats{" "}
          <span className="kw">SET</span> taken = true{"\n"}{" "}
          <span className="kw">WHERE</span> id = ?{" "}
          <span className="kw">AND</span> taken = false;{"\n"}
          <span className="cm">
            -- rowcount 0 → the second buyer gets nothing
          </span>
        </pre>
      </div>
    )
  },
  {
    id: "skill-file",
    note: (
      <Notes>
        <p>
          Cheaper model, clean window, reads this file first. The file is the
          receipt for a lesson already paid for.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame compact">
        <H1>The skill is how I stop paying</H1>
        <div className="file-block">
          <div className="file-tab">last-seat-race/SKILL.md</div>
          <pre className="code-fill">{`---
when two people buy the last seat:
1. take the seat and check it in one step — never check, then write
2. the second buyer gets nothing
3. stop if two buys can still produce two seats`}</pre>
        </div>
        <p className="sub">
          Frontier found this once. I do not pay to find it again.
        </p>
      </div>
    )
  },
  {
    id: "copied-the-run",
    note: (
      <Notes>
        <p>
          I didn&apos;t write that skill. The wander wrote it. Diff is
          deletion, not authorship.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame compact">
        <H1>The expensive run already wrote this file</H1>
        <div className="code-split harvest-split">
          <div>
            <Kicker>the log</Kicker>
            <pre className="code-fill">{`checked the count, then wrote — two seats
take and check in one step — one seat`}</pre>
          </div>
          <HarvestArrow />
          <div>
            <Kicker>the skill</Kicker>
            <pre className="code-fill">{`take and check in one step
second buyer gets nothing`}</pre>
          </div>
        </div>
        <p className="sub">Harvest the bill. Do not re-run it.</p>
      </div>
    )
  },
  {
    id: "demo",
    note: (
      <Notes>
        <p>
          cheap model, fresh chat. Reproduce double-sell. Point at SKILL.md +
          failing test. One prompt: &ldquo;fix the seat bug.&rdquo; Green. Say
          real costs if known. Do not fabricate.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame demo-hold">
        <H1>cheap model · clean window · reads the file first</H1>
      </div>
    )
  },
  {
    id: "demo-fallback",
    holding: true,
    note: (
      <Notes>
        <p>
          Gated fallback if the live window fails. Presenter d jumps here.
          Three stills, then continue the spoken arc.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame compact fallback-stills demo-hold">
        <pre className="code-fill">{`$ two-buyer test · check-then-write
FAIL  seats taken == 2`}</pre>
        <pre className="code-fill">{`cheap model · "fix the seat bug"
read  last-seat-race/SKILL.md
apply UPDATE … WHERE taken = false`}</pre>
        <pre className="code-fill">{`$ two-buyer test
GREEN  seats taken == 1`}</pre>
      </div>
    )
  },
  {
    id: "the-chart",
    note: (
      <Notes>
        <p>How Do AI Agents Spend Your Money?</p>
        <p>
          Q&amp;A only: SAGE +8.9% / −59% —
          https://o-mega.ai/articles/self-improving-ai-agents-the-2026-guide
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame compact">
        <H1>What I actually paid</H1>
        <PaidChart />
        <p className="evidence">
          token variance &amp; cost-accuracy: arxiv.org/abs/2604.22750
        </p>
      </div>
    )
  },
  {
    id: "locked-the-test",
    note: (
      <Notes>
        <p>
          A cheap model can go green by deleting the check — or hiding the buy
          button. If I cannot trust green, I pay again.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame compact code-slide">
        <H1>I locked the test so green means the path held</H1>
        <p className="scene-line">
          A cheap model can go green by deleting the check — or hiding the buy
          button.
        </p>
        <pre className="code-fill">{`two buys on the last seat
seats taken == 1`}</pre>
        <p className="sub">If I cannot trust green, I pay again.</p>
      </div>
    )
  },
  {
    id: "depreciation",
    note: (
      <Notes>
        <p>
          What Should a Skill Remember? Quality–Cost Trade-offs in Cost-Aware
          Skill Rewriting
        </p>
        <p>Foil only: https://every.to/guides/compound-engineering</p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <div className="split wander-split">
          <div>
            <H1>Compounding works on debt too.</H1>
            <div className="stack-lines">
              <p>
                My old skill said: if count &gt; 0, write. The cheap model
                obeyed. Two seats. Again.
              </p>
              <p>
                A stale skill isn&apos;t neutral. It spends every future run.
              </p>
            </div>
          </div>
          <DepreciationCurve />
        </div>
        <p className="evidence">
          skill content as a cost trade-off: arxiv.org/abs/2606.09421
        </p>
      </div>
    )
  },
  {
    id: "close",
    note: (
      <Notes>
        <p>
          Frontier finds moves. Skills keep them found. Tests prove it&apos;s
          still the move. Deletion stops a dead move from spending. Thank you.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>Find the move once. Never pay for it twice.</H1>
        <Sub>Keep the path. · @agrimsingh</Sub>
      </div>
    )
  }
];

export const spokenSlides = slides.filter((slide) => !slide.holding);
export const spokenCount = spokenSlides.length;
export const slideCount = slides.length;

export function chromeLabel(index: number) {
  if (slides[index]?.holding) {
    return `d/${String(spokenCount).padStart(2, "0")}`;
  }
  const spokenIndex = slides
    .slice(0, index + 1)
    .filter((slide) => !slide.holding).length;
  return `${String(spokenIndex).padStart(2, "0")}/${String(spokenCount).padStart(2, "0")}`;
}

export function spokenProgress(index: number) {
  const spokenIndex = Math.max(
    1,
    slides.slice(0, index + 1).filter((slide) => !slide.holding).length
  );
  return (spokenIndex / spokenCount) * 100;
}

export function spokenNumber(index: number) {
  return slides.slice(0, index + 1).filter((slide) => !slide.holding).length;
}
