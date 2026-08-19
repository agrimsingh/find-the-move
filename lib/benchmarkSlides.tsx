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
          The first discovery prompt asked each model to design a multi-tenant
          credit ledger for payment webhooks that can arrive twice, arrive out
          of order, or run concurrently. The second asked for a 60-second lease
          protocol for a worker that sends email and may crash before or after
          the provider accepts the message.
        </p>
        <p>
          The replay prompt changed the domain to warehouse shipping labels. I
          gave cheaper models the extracted lease-and-idempotency skill, then
          checked whether they could apply it without seeing the earlier email
          answer.
        </p>
        <p>
          I reran all three prompts through Cursor&apos;s headless CLI. Each receipt
          included duration plus input, cache-write, cache-read, and output
          tokens. Cost is the sum of those token categories multiplied by the
          model&apos;s published per-million rates.
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
        <Kicker>05 · Route · pilot design</Kicker>
        <H1>We ran two discovery tasks, then replayed one skill on a third task.</H1>
        <div className="def-list benchmark-list">
          <div className="def-item accent">
            <strong>Discovery A · credits</strong>
            <span>Design a ledger where duplicate, out-of-order, and concurrent payment webhooks cannot corrupt a tenant&apos;s credit balance.</span>
          </div>
          <div className="def-item">
            <strong>Discovery B · email</strong>
            <span>Design a leased worker that avoids duplicate email after lease expiry or a crash before or after provider acceptance.</span>
          </div>
          <div className="def-item">
            <strong>Replay · shipping</strong>
            <span>Use the skill to lease a fulfillment job, buy a shipping label, record its tracking number, and recover from a crash without buying it twice.</span>
          </div>
          <div className="def-item">
            <strong>Five-check rubrics</strong>
            <span>Credits tested duplicates, ordering, tenant isolation, retries, and races. Email tested stale workers, two crash windows, clock skew, and the impossible guarantee.</span>
          </div>
        </div>
        <Sub>We recorded receipt time, token-priced cost, and checks passed for six discovery runs and four replay attempts. We inspected the answers, but did not execute them.</Sub>
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
            <h2>Credits · payment webhooks</h2>
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
            <h2>Email · leased worker</h2>
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
          2.5 cost 1.63 cents in one clean CLI run, which also rounds to 1.6 cents.
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
          Composer 2.5 passed in one clean CLI run for 1.63 cents and took
          131.5 seconds. Composer 2.5 Fast passed in 18 seconds for 11.4 cents.
          Cost, time, and intelligence point to different winners, so the route
          depends on which constraint matters now.
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
            <span>It passed in one clean run after 131.5 seconds and 1.63¢.</span>
          </div>
          <div className="def-item">
            <strong>Composer 2.5 Fast · fast</strong>
            <span>It passed on attempt 1 after 18.0 seconds and 11.4¢.</span>
          </div>
        </div>
        <Sub>Cost per successful task includes every revised answer and retry.</Sub>
      </div>
    )
  }
] satisfies readonly SlideDef[];
