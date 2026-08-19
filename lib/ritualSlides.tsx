import type { ReactNode } from "react";

import { H1, Kicker, type SlideDef } from "../components/Slide";

function Notes({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

export const ritualSlides = [
  {
    id: "ritual",
    note: (
      <Notes>
        <p>
          This takes five minutes after a hard run: find the decision, distill
          it into a move card, lock the proof, replay it cold, then route the
          next attempt with evidence.
        </p>
        <p>
          Each step leaves something concrete behind. The audience can use the
          exact prompts and templates on the next difficult task they finish.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame compact">
        <H1>Take five minutes before you close the run.</H1>
        <div className="role-strip">
          <div className="role accent">
            <strong>01 · Find</strong>
            <span>Ask what changed.</span>
          </div>
          <div className="role">
            <strong>02 · Distill</strong>
            <span>Save the decision.</span>
          </div>
          <div className="role">
            <strong>03 · Lock</strong>
            <span>Run the tests outside its workspace.</span>
          </div>
          <div className="role">
            <strong>04 · Replay</strong>
            <span>Try it in a clean chat.</span>
          </div>
          <div className="role">
            <strong>05 · Route</strong>
            <span>Let the result choose the next model.</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "find",
    note: (
      <Notes>
        <p>
          Do this before ending the expensive chat. The useful artifact is not
          the final patch; it is the smallest decision that made the patch
          possible.
        </p>
        <p>
          Ask for the failed assumptions so the answer does not collapse into
          a generic summary of the work.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame compact code-slide">
        <Kicker>01 · Find</Kicker>
        <H1>Before you close the chat, ask what changed.</H1>
        <pre className="code-fill">
          {[
            "1. What failed?",
            "",
            "2. What did the failure teach us?",
            "",
            "3. What should the next chat know before it starts?"
          ].join("\n")}
        </pre>
      </div>
    )
  },
  {
    id: "distill",
    note: (
      <Notes>
        <p>
          Copy this template. The trigger keeps the move from becoming vague
          advice. The mechanism lets the next agent adapt it. The stop
          condition prevents confident reuse when the situation has changed.
        </p>
        <p>
          Do not save the transcript. If the move card cannot stand on its own
          in a fresh chat, it is not distilled yet.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame compact code-slide">
        <Kicker>02 · Distill</Kicker>
        <H1>Save the decision, not the transcript.</H1>
        <pre className="code-fill">
          {[
            "WHEN   two requests can claim the last item",
            "",
            "MOVE   claim it and check the result in one step",
            "",
            "WHY    only one request can change the row",
            "",
            "STOP   if the database cannot do both atomically"
          ].join("\n")}
        </pre>
      </div>
    )
  }
] satisfies readonly SlideDef[];
