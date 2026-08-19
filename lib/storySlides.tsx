import type { ReactNode } from "react";

import { H1, Sub, type SlideDef } from "../components/Slide";

function Notes({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

export const storySlides = [
  {
    id: "title",
    note: (
      <Notes>
        <p>Agrim Singh, @agrimsingh.</p>
        <p>
          This is about the part of an expensive agent run worth keeping: the
          move that made the problem tractable.
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
    id: "last-seat",
    note: (
      <Notes>
        <p>
          Two people tried to buy the last seat at the same time. Both
          requests read “one left,” then both wrote a purchase. We confirmed
          one seat twice.
        </p>
        <p>
          I gave the bug to a frontier model. It wandered through transactions,
          retries, locks, and the application code for forty minutes.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame visual-slide">
        <img
          alt="Two blank confirmation tickets being offered for one blue theater seat"
          className="visual-image"
          src="/visuals/last-seat-double-confirmation.webp"
        />
        <div className="visual-copy">
          <H1>Two people bought the last seat.</H1>
          <Sub>Only one seat remained, but we sent two confirmations. The frontier run took 40 minutes.</Sub>
        </div>
      </div>
    )
  },
  {
    id: "one-move",
    note: (
      <Notes>
        <p>
          The answer was not a pile of concurrency theory. It was one move:
          take the seat and check that you got it in the same database step.
        </p>
        <p>
          The first buyer changes one row. The second changes zero rows and
          gets nothing. That is the path the expensive run discovered.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame compact code-slide">
        <H1>The fix was one move.</H1>
        <pre className="code-fill">
          {["take the seat", "where seats_left > 0", "", "if rows_changed == 0", "  the second buyer gets nothing"].join("\n")}
        </pre>
        <Sub>Take the seat and check the seat in the same step.</Sub>
      </div>
    )
  },
  {
    id: "paid-again",
    note: (
      <Notes>
        <p>
          Weeks later, the same class of bug appeared. I opened a clean chat
          and paid a frontier model to rediscover the same move.
        </p>
        <p>
          The first run had succeeded, but its useful result was trapped in a
          transcript. Success had not made the next run any cheaper.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame visual-slide">
        <img
          alt="The same traveler paying at two identical toll gates on one looping road"
          className="visual-image"
          src="/visuals/pay-twice-same-path.webp"
        />
        <div className="visual-copy">
          <H1>Then I paid to find it again.</H1>
          <Sub>A new chat followed the same path and charged me again.</Sub>
        </div>
      </div>
    )
  },
  {
    id: "finished-run",
    note: (
      <Notes>
        <p>
          A fixed bug is one successful run. The expensive model should leave
          behind a capability that makes every similar run cheaper and more
          reliable.
        </p>
        <p>
          So I changed my definition of done: the move has to survive the chat
          as a skill, and the skill needs proof that it still works.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>A frontier run should leave behind a capability you can reuse.</H1>
      </div>
    )
  }
] satisfies readonly SlideDef[];
