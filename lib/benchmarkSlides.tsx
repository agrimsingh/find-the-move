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
          The learned move then ran on Luna Medium, Composer 2.5, and Composer
          2.5 Fast. Luna needed a second attempt before it passed.
        </p>
        <p>
          Cost is the sum of each token category multiplied by that model&apos;s
          published per-million rate. Intelligence is whether the answer
          passed the prompt&apos;s protected checks by inspection. The reported
          dataset is a directional ten-attempt pilot, not a statistical
          benchmark, and the answers were not executed in a harness. Cost per
          successful task includes every attempt needed to clear the checks.
        </p>
        <p>[Source] https://cursor.com/docs/models-and-pricing</p>
      </Notes>
    ),
    content: (
      <div className="slide-frame compact">
        <Kicker>Pilot method · ten reported attempts</Kicker>
        <H1>For each reported run, we measured cost, time, and intelligence.</H1>
        <div className="def-list benchmark-list">
          <div className="def-item accent">
            <strong>Tasks</strong>
            <span>We tried two unknown concurrency problems, then replayed one learned move.</span>
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
            <span>Each hard-task answer faced five checks, while each replay faced the move-card checks.</span>
          </div>
        </div>
        <Sub>We inspected six hard-task runs and four replay attempts, but we did not execute them.</Sub>
      </div>
    )
  },
  {
    id: "ledger-results",
    note: (
      <Notes>
        <p>
          On the credit ledger, Composer Fast passed in 30.9 seconds for an
          estimated 13.5 cents, Sol passed in 35.4 seconds for 20.4 cents, and
          Grok passed in 105.9 seconds for 18.6 cents.
        </p>
        <p>
          These are list-price estimates from the measured token receipts.
          Grok&apos;s temporary launch discount would reduce its billed amount,
          but the list rate keeps the comparison reproducible after the
          promotion ends. Each answer passed all five checks by inspection.
        </p>
        <p>[Source] https://cursor.com/docs/models-and-pricing</p>
      </Notes>
    ),
    content: (
      <div className="slide-frame compact">
        <Kicker>Unknown task · multi-tenant credit ledger</Kicker>
        <H1>Composer Fast was cheapest on the ledger task in this pilot.</H1>
        <div className="def-list price-list">
          <div className="def-item accent">
            <strong>Composer 2.5 Fast</strong>
            <span>It passed 5/5 checks in 30.9 seconds for 13.5¢.</span>
          </div>
          <div className="def-item">
            <strong>GPT-5.6 Sol Medium</strong>
            <span>It passed 5/5 checks in 35.4 seconds for 20.4¢.</span>
          </div>
          <div className="def-item">
            <strong>Cursor Grok 4.6 High Fast</strong>
            <span>It passed 5/5 checks in 105.9 seconds for 18.6¢.</span>
          </div>
        </div>
        <Sub>These are list-price estimates from measured tokens, and they exclude Grok&apos;s temporary discount.</Sub>
      </div>
    )
  },
  {
    id: "email-results",
    note: (
      <Notes>
        <p>
          On the leased-email task, Composer Fast passed in 24.8 seconds for an
          estimated 9.2 cents, Sol passed in 27.4 seconds for 19.2 cents, and
          Grok passed in 34.8 seconds for 15.3 cents.
        </p>
        <p>
          All three answers found the important impossibility boundary: the
          database can reject stale workers, but safe recovery after provider
          acceptance still depends on provider idempotency or lookup. Each
          answer passed all five checks by inspection.
        </p>
        <p>[Source] https://cursor.com/docs/models-and-pricing</p>
      </Notes>
    ),
    content: (
      <div className="slide-frame compact">
        <Kicker>Unknown task · leased email worker</Kicker>
        <H1>Composer Fast was cheapest on the email task in this pilot.</H1>
        <div className="def-list price-list">
          <div className="def-item accent">
            <strong>Composer 2.5 Fast</strong>
            <span>It passed 5/5 checks in 24.8 seconds for 9.2¢.</span>
          </div>
          <div className="def-item">
            <strong>GPT-5.6 Sol Medium</strong>
            <span>It passed 5/5 checks in 27.4 seconds for 19.2¢.</span>
          </div>
          <div className="def-item">
            <strong>Cursor Grok 4.6 High Fast</strong>
            <span>It passed 5/5 checks in 34.8 seconds for 15.3¢.</span>
          </div>
        </div>
        <Sub>These are list-price estimates from measured tokens, and they exclude Grok&apos;s temporary discount.</Sub>
      </div>
    )
  },
  {
    id: "skill-replay-results",
    note: (
      <Notes>
        <p>
          I gave three cheaper routes the move card for the leased-worker
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
        <Kicker>Known move · shipping-label replay</Kicker>
        <H1>Luna cost 1.6¢, but it needed two attempts to pass.</H1>
        <div className="def-list price-list">
          <div className="def-item">
            <strong>GPT-5.6 Luna Medium</strong>
            <span>It passed on attempt 2 after 39.3 seconds and 1.6¢.</span>
          </div>
          <div className="def-item accent">
            <strong>Composer 2.5</strong>
            <span>It passed after a reconnect, taking 147.4 seconds and 1.6¢.</span>
          </div>
          <div className="def-item">
            <strong>Composer 2.5 Fast</strong>
            <span>It passed on attempt 1 after 18.0 seconds and 11.4¢.</span>
          </div>
        </div>
        <Sub>Cost per successful task includes every revised answer, retry, and reconnect.</Sub>
      </div>
    )
  }
] satisfies readonly SlideDef[];
