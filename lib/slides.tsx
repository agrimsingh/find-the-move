import type { ReactNode } from "react";

import { H1, Kicker, Sub, type SlideDef } from "../components/Slide";

function Notes({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

export const slides: SlideDef[] = [
  {
    id: "title",
    note: (
      <Notes>
        <p>Name and handle. The claim is later.</p>
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
          Two people bought the last seat. Both requests saw “one left.” Both
          wrote. Two confirmations.
        </p>
        <p>
          I let a frontier model wander. It checked the count, then it wrote.
          That is the bug. The second request still saw one.
        </p>
        <p>
          Forty minutes later I had the path: taking the seat and checking the
          seat are the same step. The second buyer gets nothing. That bill
          bought me the path. I had not kept the path.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>I let it wander</H1>
        <div className="scene">
          <p>Two people bought the last seat. Both got it.</p>
        </div>
      </div>
    )
  },
  {
    id: "new-chat",
    note: (
      <Notes>
        <p>Same bug. New chat. Frontier again.</p>
        <p>
          It checked the count, then it wrote. Two seats sold again.
        </p>
        <p>
          I paid a second time for the same step. The first run was still
          sitting in the old transcript.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>I opened a new chat</H1>
        <div className="scene">
          <p>Same bug. New chat. Paid again.</p>
        </div>
      </div>
    )
  },
  {
    id: "thesis",
    note: (
      <Notes>
        <p>The failure is paying to find the same move again.</p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>The failure is paying to find the same move again.</H1>
      </div>
    )
  },
  {
    id: "chart",
    note: (
      <Notes>
        <p>
          I paid forty minutes to find the move. I paid forty minutes again
          because I had not kept the path. The third run is cheap because the
          skill was there.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>Same bug, twice.</H1>
        <div className="time-chart" aria-label="Three runs by time">
          <div className="time-row">
            <div className="time-label">
              run 1 — find the move — 40 min
            </div>
            <div className="time-track">
              <div className="time-bar full" />
            </div>
          </div>
          <div className="time-row">
            <div className="time-label">
              run 2 — same bug, no skill — 40 min
            </div>
            <div className="time-track">
              <div className="time-bar full" />
            </div>
          </div>
          <div className="time-row">
            <div className="time-label">
              run 3 — skill, cheaper model — a cheap run
            </div>
            <div className="time-track">
              <div className="time-bar cheap" />
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "the-move",
    note: (
      <Notes>
        <p>
          This is the path frontier found. A leftover “check the count, then
          write” is the bug.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame compact code-slide">
        <H1>The move</H1>
        <pre className="code-fill">{`-- both see 1
SELECT remaining FROM seats WHERE id = ?;
UPDATE seats SET taken = true WHERE id = ?;

-- one step. rowcount 0 → second buyer gets nothing
UPDATE seats SET taken = true WHERE id = ? AND taken = false;
`}</pre>
        <p className="sub">Take and check in the same step.</p>
      </div>
    )
  },
  {
    id: "copied-the-run",
    note: (
      <Notes>
        <p>
          Harvest the bill. Skills are not docs I author. They are an artifact
          from a bill I already paid.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame peak">
        <H1>I copied the expensive run</H1>
        <div className="scene">
          <p>
            The expensive run already wrote the skill. I just didn’t save it.
          </p>
        </div>
        <div className="code-split">
          <div>
            <Kicker>the log</Kicker>
            <pre className="code-fill">{`checked the count, then wrote — two seats
take and check in one step — one seat`}</pre>
          </div>
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
    id: "deleted-the-skill",
    note: (
      <Notes>
        <p>
          A leftover recipe spends the next run. I do not call the good rule a
          landmine. The leftover recipe is the landmine.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>I deleted the skill that made me pay twice</H1>
        <div className="scene">
          <p>The old skill was the bug.</p>
          <p>
            It said check the count, then write. The cheap model listened. Two
            seats again.
          </p>
        </div>
      </div>
    )
  },
  {
    id: "close",
    note: (
      <Notes>
        <p>
          A person saying wait is a check. A check the agent rewrote is not.
          That is spoken. The slide ends strong.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame close">
        <div className="close-stack">
          <p>Frontier finds the move once.</p>
          <p>Never pay for it twice.</p>
          <p>Keep the path.</p>
        </div>
        <Sub>Agrim Singh · @agrimsingh</Sub>
      </div>
    )
  }
];

export const slideCount = slides.length;
