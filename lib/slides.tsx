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
      <line x1="2" y1="12" x2="50" y2="12" />
      <polyline points="42,5 54,12 42,19" />
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
      <div className="slide-frame">
        <H1>The failure is paying to find the same move again.</H1>
      </div>
    )
  },
  {
    id: "two-maxes",
    note: (
      <Notes>
        <p>
          There&apos;s a live position right now that says we&apos;ve entered
          a compounding-correctness regime — the more tokens you spend on a
          task, the better the outcome, so spend big. I half agree. Spending
          big to DISCOVER is correct. The wander was worth every token —
          once. The failure mode isn&apos;t the spend; it&apos;s paying the
          discovery price for information you already own. So I don&apos;t
          think token-maxing and value-maxing are opposite camps. Value-maxing
          is what token-maxing becomes when you keep the residue.
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
          Engineers in the room have already named this bug in their heads —
          good, that&apos;s the point, nitpick away. Check-then-write is two
          steps; between them the world changes. The conditional update is one
          step; the row count IS the answer. Forty frontier minutes to get
          here. Two lines to keep.
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
          A cheaper model, clean window, reads this file first. It does not
          spend frontier tokens rediscovering check-then-write. The file is
          not the lesson — the file is the receipt for a lesson already paid
          for.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame compact">
        <H1>The skill is how I stop paying</H1>
        <div className="file-block">
          <div className="file-tab">last-seat-race/SKILL.md</div>
          <pre className="code-fill">{`when two people buy the last seat:
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
          This is the beat to slow down on — it&apos;s the aha of the talk. I
          didn&apos;t write that skill. The wander wrote it; I just failed to
          save it the first time. Left is the log, right is the file — the
          diff between them is deletion, not authorship. Skills are not
          documentation you write. They&apos;re an artifact you harvest from a
          bill you already paid.
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
          Live Cursor demo. Cheap model, clean window, reads
          last-seat-race/SKILL.md first. (Full demo script not in the brief —
          keep notes this short until the rest arrives.)
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame demo-slide">
        <H1>cheap model · clean window · reads the file first</H1>
      </div>
    )
  }
  // TODO slides 10–13 + demo-fallback — waiting on locked copy
];

export const slideCount = slides.length;
