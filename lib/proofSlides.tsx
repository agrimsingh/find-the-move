import type { ReactNode } from "react";

import { H1, Kicker, Sub, type SlideDef } from "../components/Slide";

function Notes({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

export const proofSlides = [
  {
    id: "lock",
    note: (
      <Notes>
        <p>
          A passing regression test protects what users observe. It does not
          necessarily protect the design that makes the next change safe.
        </p>
        <p>
          Lock both: one held-out behavior check and one structural invariant.
          Keep them in CI or a separate harness. Give the agent the command and
          the result, but not permission to rewrite the checks.
        </p>
        <p>[Sources]</p>
        <ul>
          <li>https://arxiv.org/abs/2603.24755</li>
          <li>https://x.com/dexhorthy/status/2080697380379427275</li>
        </ul>
      </Notes>
    ),
    content: (
      <div className="slide-frame compact">
        <Kicker>03 · Lock</Kicker>
        <H1>Run one check for the result and one for the method.</H1>
        <div className="code-split">
          <div>
            <Kicker>What users see</Kicker>
            <pre className="code-fill">
              {[
                "two buyers",
                "one remaining seat",
                "",
                "expect confirmations == 1"
              ].join("\n")}
            </pre>
          </div>
          <div>
            <Kicker>How the fix works</Kicker>
            <pre className="code-fill">
              {[
                "claim + check happen",
                "in one database step",
                "",
                "no separate read → decide → write"
              ].join("\n")}
            </pre>
          </div>
        </div>
        <Sub>Keep both checks in CI or a separate harness, outside the agent's workspace.</Sub>
      </div>
    )
  },
  {
    id: "replay",
    note: (
      <Notes>
        <p>
          Now test whether the move survived the transcript. Start a clean chat
          with a cheaper model. Give it the task, the move card, and commands
          that run the protected checks outside its workspace.
        </p>
        <p>
          If it passes, the move transferred. If it fails, either the card is
          incomplete or the new case contains uncertainty worth escalating.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame compact">
        <Kicker>04 · Replay</Kicker>
        <H1>Give a fresh chat only what it should need.</H1>
        <div className="def-list">
          <div className="def-item accent">
            <strong>01</strong>
            <span>Give it the task, the move card, and commands that run the checks.</span>
          </div>
          <div className="def-item">
            <strong>02</strong>
            <span>Keep the old chat, old code, and check files out of reach.</span>
          </div>
          <div className="def-item">
            <strong>03</strong>
            <span>If both tests pass, the move survived.</span>
          </div>
        </div>
      </div>
    )
  }
] satisfies readonly SlideDef[];
