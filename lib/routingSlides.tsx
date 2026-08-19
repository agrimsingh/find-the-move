import type { ReactNode } from "react";

import { H1, Kicker, Sub, type SlideDef } from "../components/Slide";

function Notes({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

export const routingSlides = [
  {
    id: "route",
    note: (
      <Notes>
        <p>
          I ran this exact replay in four clean Cursor chats. GPT-5.6 Sol took
          one second, Composer 2.5 Fast took two, Kimi K3 Max took thirteen,
          and Cursor Grok 4.6 High Fast took forty-nine.
        </p>
        <p>
          All four returned the same atomic conditional update on their first
          attempt. I inspected each answer against the two checks; I did not run
          a database benchmark. Kimi wrote much more than the task needed. Grok
          searched unrelated local context before answering.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame compact">
        <Kicker>05 · Route</Kicker>
        <H1>Four models found the same move. They took 1 to 49 seconds.</H1>
        <div className="def-list">
          <div className="def-item accent">
            <strong>GPT-5.6 Sol Medium</strong>
            <span>1 second. Correct, concise, and no tool work.</span>
          </div>
          <div className="def-item">
            <strong>Composer 2.5 Fast</strong>
            <span>2 seconds. Correct, concise, and no tool work.</span>
          </div>
          <div className="def-item">
            <strong>Kimi K3 Max</strong>
            <span>13 seconds. Correct, but longer than the task needed.</span>
          </div>
          <div className="def-item">
            <strong>Cursor Grok 4.6 High Fast</strong>
            <span>49 seconds. Correct, after searching unrelated context.</span>
          </div>
        </div>
        <Sub>Same prompt. Clean chats. One answer each. Inspected, not benchmarked.</Sub>
      </div>
    )
  },
  {
    id: "cost-receipt",
    note: (
      <Notes>
        <p>
          A low token price does not rescue a wrong answer or three failed
          attempts. First make every model pass the same held-out tests. Then
          compare how long the run took, how much extra work it did, and what
          Cursor charged for the usage.
        </p>
        <p>
          Cursor charges agent usage at each model's API rate. The dashboard is
          the source of truth for the exact dollar amount, so copy that number
          into the receipt instead of estimating it from the answer.
        </p>
        <p>[Source] https://docs.cursor.com/account/pricing</p>
      </Notes>
    ),
    content: (
      <div className="slide-frame compact">
        <Kicker>Compare the run</Kicker>
        <H1>A cheap answer is only cheap after it passes.</H1>
        <div className="def-list">
          <div className="def-item accent">
            <strong>01</strong>
            <span>Run the same held-out tests against every answer.</span>
          </div>
          <div className="def-item">
            <strong>02</strong>
            <span>Count every attempt, including the ones that failed.</span>
          </div>
          <div className="def-item">
            <strong>03</strong>
            <span>Record the elapsed time and any unnecessary tool work.</span>
          </div>
          <div className="def-item">
            <strong>04</strong>
            <span>Copy the exact usage charge from Cursor's dashboard.</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "frontier-rule",
    note: (
      <Notes>
        <p>
          Model choice follows the work left to do. If the move is known and
          the tests are clear, start with the fastest model that already passed.
          If you are still trying to understand the failure, pay for more
          reasoning.
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
        </ul>
      </Notes>
    ),
    content: (
      <div className="slide-frame compact">
        <Kicker>Route rule</Kicker>
        <H1>Use a frontier model when you still need to discover the move.</H1>
        <div className="def-list">
          <div className="def-item accent">
            <strong>You know the move</strong>
            <span>Start with the fastest model that has passed your tests.</span>
          </div>
          <div className="def-item">
            <strong>You repeat the task</strong>
            <span>Try a specialist model or automate the job.</span>
          </div>
          <div className="def-item">
            <strong>You do not understand the failure</strong>
            <span>Use a frontier reasoning model to find the move.</span>
          </div>
          <div className="def-item">
            <strong>A mistake would hurt</strong>
            <span>Use the stronger model and keep a human in the review.</span>
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
            <span>Can the next chat use the move without this transcript?</span>
          </div>
          <div className="def-item">
            <strong>03</strong>
            <span>What test proves the result?</span>
          </div>
          <div className="def-item">
            <strong>04</strong>
            <span>What test protects how the fix works?</span>
          </div>
          <div className="def-item accent">
            <strong>05</strong>
            <span>Which model earned the next try?</span>
          </div>
        </div>
      </div>
    )
  }
] satisfies readonly SlideDef[];
