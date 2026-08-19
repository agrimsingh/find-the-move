import type { ReactNode } from "react";

import { H1, Kicker, Sub, type SlideDef } from "../components/Slide";

function Notes({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

export const benchmarkSlides = [
  {
    id: "pilot-method",
    note: (
      <Notes>
        <p>
          I reran the pilot through Cursor&apos;s headless CLI so every attempt
          returned the same receipt: duration plus input, cache-write,
          cache-read, and output tokens. The two hard tasks ran once on
          Composer 2.5 Fast, GPT-5.6 Sol Medium, and Cursor Grok 4.6 High Fast.
          The skill then ran on Luna Medium, Composer 2.5, and Composer 2.5
          Fast. Luna needed a second attempt before it passed.
        </p>
        <p>
          Cost is the sum of each token category multiplied by that model&apos;s
          published per-million rate. Intelligence is whether the answer
          passed the prompt&apos;s protected checks by inspection.
        </p>
        <p>
          The ledger checks covered duplicate delivery, out-of-order refunds,
          tenant isolation, crash-safe retries, and a race-free balance path.
          The email checks covered stale workers, crashes before and after the
          provider call, clock skew, and the guarantee that is impossible
          without provider idempotency.
        </p>
        <p>
          The reported dataset is a directional ten-attempt pilot, not a
          statistical benchmark, and the answers were not executed in a
          harness. Cost per successful task includes every attempt needed to
          clear the checks.
        </p>
        <p>[Source] https://cursor.com/docs/models-and-pricing</p>
      </Notes>
    ),
    content: (
      <div className="slide-frame compact">
        <Kicker>05 · Route · pilot method</Kicker>
        <H1>For each reported run, we measured cost, time, and intelligence.</H1>
        <div className="def-list benchmark-list">
          <div className="def-item accent">
            <strong>Tasks</strong>
            <span>We tried two unknown concurrency problems, then replayed one skill.</span>
          </div>
          <div className="def-item">
            <strong>Time</strong>
            <span>We used Cursor&apos;s duration receipt, from prompt submission to final answer.</span>
          </div>
          <div className="def-item">
            <strong>Cost</strong>
            <span>We multiplied each token category by the model&apos;s published list rate.</span>
          </div>
          <div className="def-item">
            <strong>Intelligence</strong>
            <span>Ledger checks covered duplicates, ordering, tenant isolation, retries, and races. Email checks covered stale workers, two crash windows, clock skew, and the impossible case.</span>
          </div>
        </div>
        <Sub>We inspected six hard-task runs and four replay attempts, but we did not execute them.</Sub>
      </div>
    )
  },
  {
    id: "hard-task-results",
    note: (
      <Notes>
        <p>
          The credit-ledger task and leased-email task were both unknown-task
          discovery runs. Composer Fast produced the cheapest passing answer on
          both. The timing gap was narrow on email and much wider on the ledger.
        </p>
        <p>
          The model-role labels are relative to this pilot: Composer Fast was
          the fast route, while Sol and Grok were the frontier routes. Every
          answer passed five predefined checks by inspection. Grok&apos;s temporary
          launch discount is excluded from the list-price estimates.
        </p>
        <p>[Source] https://cursor.com/docs/models-and-pricing</p>
      </Notes>
    ),
    content: (
      <div className="slide-frame compact">
        <Kicker>05 · Route · unknown tasks</Kicker>
        <H1>Composer Fast produced the cheapest passing answer on both hard tasks.</H1>
        <div className="task-comparison">
          <section className="task-column">
            <h2>Credit ledger</h2>
            <div className="result-row accent">
              <div><strong>Composer 2.5 Fast</strong><span>Fast route</span></div>
              <div><strong>30.9s · 13.5¢</strong><span>Passed 5/5 checks</span></div>
            </div>
            <div className="result-row">
              <div><strong>GPT-5.6 Sol Medium</strong><span>Frontier route</span></div>
              <div><strong>35.4s · 20.4¢</strong><span>Passed 5/5 checks</span></div>
            </div>
            <div className="result-row">
              <div><strong>Cursor Grok 4.6 High Fast</strong><span>Frontier route</span></div>
              <div><strong>105.9s · 18.6¢</strong><span>Passed 5/5 checks</span></div>
            </div>
          </section>
          <section className="task-column">
            <h2>Leased email</h2>
            <div className="result-row accent">
              <div><strong>Composer 2.5 Fast</strong><span>Fast route</span></div>
              <div><strong>24.8s · 9.2¢</strong><span>Passed 5/5 checks</span></div>
            </div>
            <div className="result-row">
              <div><strong>GPT-5.6 Sol Medium</strong><span>Frontier route</span></div>
              <div><strong>27.4s · 19.2¢</strong><span>Passed 5/5 checks</span></div>
            </div>
            <div className="result-row">
              <div><strong>Cursor Grok 4.6 High Fast</strong><span>Frontier route</span></div>
              <div><strong>34.8s · 15.3¢</strong><span>Passed 5/5 checks</span></div>
            </div>
          </section>
        </div>
        <Sub>These list-price estimates come from measured tokens and exclude Grok&apos;s temporary discount.</Sub>
      </div>
    )
  },
  {
    id: "cost-contrast",
    note: (
      <Notes>
        <p>
          Across the six passing hard-task answers, the average list-price
          estimate was 16.0 cents. The cheapest successful skill replay cost
          1.55 cents after two Luna attempts, displayed as 1.6 cents. Composer
          2.5 cost 1.64 cents in one CLI run, which also rounds to 1.6 cents.
          The lowest route is almost exactly ten times cheaper than discovery
          in this small pilot.
        </p>
        <p>
          The discovery tasks and replay task were different, so this is a
          directional result rather than a causal benchmark. The useful move
          is the measurement: compare cost per successful task on your own
          workload, with retries included.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame compact">
        <Kicker>05 · Route · cost per successful task</Kicker>
        <H1>The passing discovery runs cost about 10× more than the lowest skill-replay cost.</H1>
        <div className="cost-contrast" aria-label="Average discovery cost compared with the lowest successful skill-replay cost">
          <div>
            <span>Discovery average</span>
            <strong>16.0¢</strong>
            <small>Six passing hard-task answers</small>
          </div>
          <div className="cost-arrow" aria-hidden="true">→</div>
          <div className="accent">
            <span>Replay with the skill</span>
            <strong>1.6¢</strong>
            <small>Luna route, including both attempts</small>
          </div>
        </div>
        <Sub>The tasks differed, so treat this as a directional result and measure your own workload.</Sub>
      </div>
    )
  },
  {
    id: "skill-replay-results",
    note: (
      <Notes>
        <p>
          I gave three cheaper routes the skill for the leased-worker
          pattern, then changed the domain to warehouse shipping labels. Luna&apos;s
          first answer omitted the fence column it later said the operation
          update required. Its second answer fixed that and passed. Counting
          both attempts, Luna took 39.3 seconds and cost 1.6 cents.
        </p>
        <p>
          Composer 2.5 passed in one CLI run for 1.6 cents, but a reconnect made
          the wall time 147.4 seconds. Composer 2.5 Fast passed in 18 seconds
          for 11.4 cents. Cost, time, and intelligence point to different
          winners, so the route depends on which constraint matters now.
        </p>
        <p>[Source] https://cursor.com/docs/models-and-pricing</p>
      </Notes>
    ),
    content: (
      <div className="slide-frame compact">
        <Kicker>05 · Route · skill replay</Kicker>
        <H1>Two cheap routes both rounded to 1.6¢, but they got there differently.</H1>
        <div className="def-list price-list">
          <div className="def-item accent">
            <strong>GPT-5.6 Luna Medium · cheap</strong>
            <span>It passed on attempt 2 after 39.3 seconds and 1.55¢.</span>
          </div>
          <div className="def-item accent">
            <strong>Composer 2.5 · cheap</strong>
            <span>It passed after a reconnect, taking 147.4 seconds and 1.64¢.</span>
          </div>
          <div className="def-item">
            <strong>Composer 2.5 Fast · fast</strong>
            <span>It passed on attempt 1 after 18.0 seconds and 11.4¢.</span>
          </div>
        </div>
        <Sub>Cost per successful task includes every revised answer, retry, and reconnect.</Sub>
      </div>
    )
  }
] satisfies readonly SlideDef[];
