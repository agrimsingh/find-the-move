import type { ReactNode } from "react";

import { H1, Kicker, Sub, type SlideDef } from "../components/Slide";

function Notes({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

export const ritualSlides = [
  {
    id: "skill-filter",
    note: (
      <Notes>
        <p>
          Not every answer deserves a skill. Make one when the task was hard,
          the useful decision was not obvious, the situation will recur, and
          you can test the result without asking the model whether it is right.
        </p>
        <p>
          This is how hard work compounds: the frontier model discovers the
          move once, then the skill carries that judgment into cheaper runs.
        </p>
        <p>[Sources]</p>
        <ul>
          <li>https://www.latent.space/p/modal2026</li>
          <li>https://www.latent.space/p/dreamer</li>
        </ul>
      </Notes>
    ),
    content: (
      <div className="slide-frame compact">
        <H1>When a hard task ends, ask whether it earned a skill.</H1>
        <div className="def-list">
          <div className="def-item accent">
            <strong>It was hard</strong>
            <span>The answer took several attempts or genuinely stronger reasoning.</span>
          </div>
          <div className="def-item">
            <strong>The move was not obvious</strong>
            <span>You learned something that the next agent would otherwise rediscover.</span>
          </div>
          <div className="def-item">
            <strong>It will recur</strong>
            <span>The same failure shape can appear in another feature or repository.</span>
          </div>
          <div className="def-item">
            <strong>You can test it</strong>
            <span>A check outside the chat can tell you whether the skill worked.</span>
          </div>
        </div>
        <Sub>If one of these is missing, keep a note. If all four hold, make the skill.</Sub>
      </div>
    )
  },
  {
    id: "ritual",
    note: (
      <Notes>
        <p>
          This takes five minutes after a hard run: find the decision, put it
          in a small skill, lock the proof, replay it cold, then route the next
          attempt with evidence.
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
            <span>Write the skill.</span>
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
          This is a real skill, not a transcript summary. Its description tells
          the agent when to load it. The body names the move, points to the
          deterministic check, and says when to stop and escalate.
        </p>
        <p>
          References can hold the longer explanation and scripts can make the
          safe path repeatable. If the skill cannot stand on its own in a fresh
          chat, it is not ready.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame compact code-slide">
        <Kicker>02 · Distill</Kicker>
        <H1>Write a skill the next agent can use.</H1>
        <pre className="code-fill">
          {[
            "name: claim-one-seat",
            "use when: competing requests can claim one item",
            "",
            "move: claim the item and check the result atomically",
            "",
            "verify: run scripts/check-last-seat.sh",
            "",
            "escalate when: storage cannot make both actions atomic"
          ].join("\n")}
        </pre>
        <Sub>Keep the explanation in references and the deterministic work in scripts.</Sub>
      </div>
    )
  }
] satisfies readonly SlideDef[];
