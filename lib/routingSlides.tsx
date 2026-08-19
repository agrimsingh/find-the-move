import type { ReactNode } from "react";

import { H1, Kicker, type SlideDef } from "../components/Slide";

function Notes({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

export const routingSlides = [
  {
    id: "frontier-rule",
    note: (
      <Notes>
        <p>
          This is Swyx's agent-lab idea made local: you are the routing and
          evaluation layer. Use frontier reasoning to discover an unknown move,
          then let the skill and held-out checks earn a cheaper model the repeat.
        </p>
        <p>
          Repeated, well-understood work may not need a general model at all.
          Use a specialist model or automate it. When a mistake has serious
          consequences, keep a human in the review even if the tests pass.
        </p>
        <p>[Sources]</p>
        <ul>
          <li>https://docs.cursor.com/account/pricing</li>
          <li>https://cursor.com/changelog/composer-2-5</li>
          <li>https://www.latent.space/p/dreamer</li>
        </ul>
      </Notes>
    ),
    content: (
      <div className="slide-frame compact">
        <Kicker>Route rule</Kicker>
        <H1>Use a frontier model when you still need to discover the move.</H1>
        <div className="def-list">
          <div className="def-item accent">
            <strong>The move is unknown</strong>
            <span>Use a frontier model to discover it and explain why it works.</span>
          </div>
          <div className="def-item">
            <strong>The skill and checks are ready</strong>
            <span>Start with the cheapest model that has passed the same bar.</span>
          </div>
          <div className="def-item">
            <strong>The task is narrow and repeated</strong>
            <span>Try a specialist model or remove the model from the path.</span>
          </div>
          <div className="def-item">
            <strong>The cheaper route fails</strong>
            <span>Escalate with the failed check as evidence, then improve the skill.</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "next-hard-fix",
    note: (
      <Notes>
        <p>
          Screenshot this. After the next hard fix, take five minutes and
          answer these five questions before closing the chat.
        </p>
        <p>
          The outcome is practical: a move card, protected proof, one clean
          replay, and a model-routing decision for the next occurrence.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame compact">
        <H1>Before you close the next hard fix:</H1>
        <div className="def-list">
          <div className="def-item">
            <strong>01</strong>
            <span>What did we learn only after failing?</span>
          </div>
          <div className="def-item">
            <strong>02</strong>
            <span>Does this recur often enough to earn a skill?</span>
          </div>
          <div className="def-item">
            <strong>03</strong>
            <span>What trigger, move, and stop condition belong in the skill?</span>
          </div>
          <div className="def-item">
            <strong>04</strong>
            <span>What protected checks prove the result and the method?</span>
          </div>
          <div className="def-item accent">
            <strong>05</strong>
            <span>Which cheaper model reaches the same bar, after how many attempts?</span>
          </div>
        </div>
      </div>
    )
  }
] satisfies readonly SlideDef[];
