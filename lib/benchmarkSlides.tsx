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
        <H1>Two tasks tested discovery, and a third tested whether the skill transferred.</H1>
        <div className="def-list benchmark-list">
          <div className="def-item accent">
            <strong>Discovery A · credits</strong>
            <span>Handle duplicate, out-of-order, and concurrent payment webhooks without corrupting a tenant&apos;s balance.</span>
          </div>
          <div className="def-item">
            <strong>Discovery B · email</strong>
            <span>Send one email even when leases expire or workers crash before or after provider acceptance.</span>
          </div>
          <div className="def-item">
            <strong>Replay · shipping</strong>
            <span>Reuse the email skill to buy one label, save its tracking number, and recover without buying it twice.</span>
          </div>
          <div className="def-item">
            <strong>Five-check rubrics</strong>
            <span>Credits tested duplicates, ordering, isolation, retries, and races. Email tested stale workers, crash windows, clock skew, and the impossible guarantee.</span>
          </div>
        </div>
        <Sub>Ten attempts measured time, token-priced cost, and checks passed. We inspected the answers, but did not execute them.</Sub>
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
        <p>
          Composer Fast passed both discovery tasks for less money than the
          frontier routes. This pilot does not support using a frontier model
          by default. It supports escalation when a cheaper answer fails the
          checks or cannot explain the move.
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
        <H1>The cheapest replay cost about one-tenth of discovery in this small pilot.</H1>
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
        <Sub>The tasks differed. The larger value is avoiding another search, review cycle, or production mistake.</Sub>
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
          first answer did not store the version number needed to stop an older
          worker from saving over a newer one. Its second answer fixed that and
          passed. Counting both attempts, Luna took 39.3 seconds and cost 1.6 cents.
        </p>
        <p>
          Composer 2.5 passed in one clean CLI run for 1.63 cents and took
          131.5 seconds. Composer 2.5 Fast passed in 18 seconds for 11.4 cents.
          Cost, time, and intelligence point to different winners, so the route
          depends on which constraint matters now.
        </p>
        <p>
          The transferred skill said that only the newest worker may save the
          result. Every retry must reuse the same purchase ID so the label
          company returns the first result instead of charging twice. The new
          task was to buy one shipping label, store its tracking number, and
          recover from a crash without buying it twice.
        </p>
        <p>[Source] https://cursor.com/docs/models-and-pricing</p>
      </Notes>
    ),
    content: (
      <div className="slide-frame compact skill-replay-slide">
        <Kicker>05 · Route · skill replay</Kicker>
        <H1>We asked cheaper models to transfer the email move to shipping labels.</H1>
        <div className="skill-transfer" aria-label="The transferred skill and the new shipping-label task">
          <div>
            <strong>The skill</strong>
            <span>Only the newest worker can save the result. Every retry uses the same purchase ID so the label company does not charge twice.</span>
          </div>
          <div>
            <strong>The new task</strong>
            <span>Buy one shipping label, store its tracking number, and recover from a crash without buying it twice.</span>
          </div>
        </div>
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
        <Sub>These are directional receipts, not a model ranking. Cost includes every revised answer and retry.</Sub>
      </div>
    )
  }
] satisfies readonly SlideDef[];
