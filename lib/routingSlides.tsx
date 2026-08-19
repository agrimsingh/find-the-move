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
          The one-line SQL task was too small, so I ran two harder protected-
          check prompts in clean Cursor chats. The credit-ledger task included
          concurrent duplicates, refund-before-success, tenant isolation, crash
          recovery, and an atomic balance path. Composer took twenty seconds,
          Sol twenty-three, and Grok eighty; all three passed by inspection.
        </p>
        <p>
          The leased-email task required a fencing token, database time, stable
          provider idempotency, and an honest impossibility boundary. Sol took
          nine seconds, Composer fourteen, and Grok twenty-nine; all passed.
          Composer then reused the distilled move on a shipping-label variant
          in fourteen seconds. This is still a pilot: one clean run per cell,
          inspected against the checks rather than executed in a harness.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame compact">
        <Kicker>05 · Route · harder pilot</Kicker>
        <H1>On harder tasks, the fastest model changed with the task.</H1>
        <div className="def-list benchmark-list">
          <div className="def-item accent">
            <strong>Credit ledger</strong>
            <span>Composer 20s · Sol 23s · Grok 80s. All passed five checks.</span>
          </div>
          <div className="def-item">
            <strong>Leased email</strong>
            <span>Sol 9s · Composer 14s · Grok 29s. All found the hard boundary.</span>
          </div>
          <div className="def-item">
            <strong>Skill replay</strong>
            <span>Composer 14s. The same move transferred to shipping labels.</span>
          </div>
          <div className="def-item">
            <strong>What this supports</strong>
            <span>Route by protected checks and task shape, not one stopwatch result.</span>
          </div>
        </div>
        <Sub>Pilot benchmark: one clean run per cell; answers inspected, not executed.</Sub>
      </div>
    )
  },
  {
    id: "price-parity",
    note: (
      <Notes>
        <p>
          Here is price parity using the variants from the pilot. Hold the token
          footprint constant at one hundred thousand input tokens and ten
          thousand output tokens, then apply Cursor's published list rates.
          Composer Fast costs forty-five cents, Grok Fast fifty-two, and Sol
          eighty. Composer standard would cost 7.5 cents at the same footprint,
          but that slower variant was not part of the pilot.
        </p>
        <p>
          Those numbers are not a quality ranking. Price parity means the
          cheaper route reaches the same protected checks. Count every failed
          attempt because retries multiply both the token bill and the time.
        </p>
        <p>[Source] https://cursor.com/docs/models-and-pricing</p>
      </Notes>
    ),
    content: (
      <div className="slide-frame compact">
        <Kicker>Price parity · pilot variants</Kicker>
        <H1>Normalize the token footprint before you compare price.</H1>
        <div className="def-list price-list">
          <div className="def-item accent">
            <strong>Composer Fast · 45¢</strong>
            <span>100k × $3.00/M in + 10k × $15.00/M out</span>
          </div>
          <div className="def-item">
            <strong>Grok 4.6 Fast · 52¢</strong>
            <span>100k × $4.00/M in + 10k × $12.00/M out</span>
          </div>
          <div className="def-item">
            <strong>GPT-5.6 Sol · 80¢</strong>
            <span>100k × $5.00/M in + 10k × $30.00/M out</span>
          </div>
          <div className="def-item">
            <strong>Composer standard · 7.5¢</strong>
            <span>Cheaper replay option; this variant was not in the pilot.</span>
          </div>
        </div>
        <Sub>List rates before temporary discounts. Parity requires the same checks to pass; count every retry.</Sub>
      </div>
    )
  },
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
