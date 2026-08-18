import type { ReactNode } from "react";

import { H1, Sub, type SlideDef } from "../components/Slide";

function Notes({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

export const slides: SlideDef[] = [
  {
    id: "title",
    note: (
      <Notes>
        <p>
          I am going to tell you what I did. Fifteen minutes. Same failing
          auth test the whole way. I am not here to define a skill. I am here
          to show you where I stopped buying the same path.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>Find the move.</H1>
        <Sub>Agrim Singh · @agrimsingh</Sub>
      </div>
    )
  },
  {
    id: "let-it-wander",
    note: (
      <Notes>
        <p>
          I had a failing test. auth.spec.ts. Expired session should return
          401. It did not. I let a frontier model wander. It opened
          src/routes/auth.ts. Then another wrong file.
        </p>
        <p>
          Forty minutes later the test was green. The bug was in
          src/lib/session.ts. That bill bought me a path. I had not kept the
          path. The hour is tuition. The receipt is session.ts, not the green
          test.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>I let it wander</H1>
        <Sub>
          I had a failing test. auth.spec.ts. Expired session should return
          401. It did not. I let a frontier model wander. It opened
          src/routes/auth.ts. Then another wrong file. Forty minutes later
          the test was green. The bug was in src/lib/session.ts. That bill
          bought me a path. I had not kept the path.
        </Sub>
      </div>
    )
  },
  {
    id: "opened-a-new-chat",
    note: (
      <Notes>
        <p>
          Same failure. New chat. Frontier again. It opened
          src/routes/auth.ts again. I paid a second time for session.ts. The
          first run was still sitting in the old transcript.
        </p>
        <p>
          I did not lose the path. I left it in a window I then closed.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>I opened a new chat</H1>
        <Sub>
          Same failure. New chat. Frontier again. It opened
          src/routes/auth.ts again. I paid a second time for session.ts. The
          first run was still sitting in the old transcript.
        </Sub>
      </div>
    )
  },
  {
    id: "thesis",
    note: (
      <Notes>
        <p>
          That is the whole card. Say it and sit. The first wander is
          allowed. Paying frontier to find session.ts a second time is the
          failure.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>The failure is paying to find the same move again.</H1>
      </div>
    )
  },
  {
    id: "skill-stops-paying",
    note: (
      <Notes>
        <p>
          I already know what a skill is. The room does too. I used one so
          the next chat does not buy the wander again. A cheaper model,
          clean window, reads this first. It starts on session.ts. It does
          not spend frontier tokens finding the route file.
        </p>
        <p>
          The file is not the lesson. Frontier found this once. I do not pay
          frontier to find it again. /fix-auth-test opens this. That is the
          only hook I need.
        </p>
        <p>
          swyx, 17 Aug 2026:{" "}
          <a href="https://x.com/swyx/status/2089499493083529476">
            https://x.com/swyx/status/2089499493083529476
          </a>
          . Larger model writes the deterministic tool. Smaller model cannot
          screw the move up. Dex, 5 Aug:{" "}
          <a href="https://x.com/dexhorthy/status/2085072621578944733">
            https://x.com/dexhorthy/status/2085072621578944733
          </a>
          . The trajectory leaves the window and lands in the repo.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame code-slide">
        <H1>The skill is how I stop paying</H1>
        <Sub>
          I already know what a skill is. I used one so the next chat does
          not buy the wander again. A cheaper model, clean window, reads
          this first. It starts on session.ts. It does not spend frontier
          tokens finding the route file.
        </Sub>
        <pre className="code-fill">{`# .cursor/skills/fix-auth-test/SKILL.md
when auth.spec.ts fails
1. open src/lib/session.ts — not the route file
2. run \`pnpm test auth.spec.ts\`
3. do not edit auth.spec.ts
4. stop if it is still red`}</pre>
        <p className="code-note">
          The file is not the lesson. The lesson is: frontier found this
          once. I do not pay frontier to find it again.{" "}
          <code className="mono">/fix-auth-test</code> opens this.
        </p>
      </div>
    )
  },
  {
    id: "copied-the-run",
    note: (
      <Notes>
        <p>
          The first wander already wrote the skill. I just failed to save
          it. Left is the expensive run. Right is the file. Harvest the
          bill. Do not re-run it.
        </p>
        <p>
          Ahmad Osman, 18 Aug:{" "}
          <a href="https://x.com/TheAhmadOsman/status/2089532183455084569">
            https://x.com/TheAhmadOsman/status/2089532183455084569
          </a>
          . Traces to skills. I did the harvest by hand.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame compact">
        <H1>I copied the expensive run into that file</H1>
        <Sub>
          The first wander already wrote the skill. I just failed to save
          it. Harvest the bill. Do not re-run it.
        </Sub>
        <div className="code-split">
          <div>
            <pre className="code-fill">{`opened src/routes/auth.ts — wrong
opened src/lib/session.ts — right
ran pnpm test auth.spec.ts — green
do not edit auth.spec.ts`}</pre>
          </div>
          <div>
            <pre className="code-fill">{`# .cursor/skills/fix-auth-test/SKILL.md
when auth.spec.ts fails
1. open src/lib/session.ts — not the route file
2. run \`pnpm test auth.spec.ts\`
3. do not edit auth.spec.ts
4. stop if it is still red`}</pre>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "locked-the-test",
    note: (
      <Notes>
        <p>
          A cheaper model can go green by editing auth.spec.ts. Then I will
          pay for another wander, because I cannot tell if session.ts is
          actually fixed. The lock is a token move. If I cannot trust green,
          I am back on frontier.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame code-slide">
        <H1>I locked the test so green means the path held</H1>
        <Sub>
          A cheaper model can go green by editing auth.spec.ts. Then I will
          pay for another wander, because I cannot tell if session.ts is
          actually fixed.
        </Sub>
        <pre className="code-fill">{`// auth.spec.ts — committed. agent cannot edit.
test("expired session returns 401", async () => {
  const res = await request("/api/me", { cookie: expired })
  expect(res.status).toBe(401)
})`}</pre>
        <p className="code-note">
          The lock is a token move. If I cannot trust green, I am back on
          frontier.
        </p>
      </div>
    )
  },
  {
    id: "deleted-the-skill",
    note: (
      <Notes>
        <p>
          I had an old skill that said start in the route. The cheap model
          listened and went there. Then I opened frontier again to get out.
          A leftover recipe in the repo is not free. It spends the next run.
        </p>
        <p>
          I kept one landmine: session.ts, do not edit the test. I cut the
          rest. swyx, 9 Aug:{" "}
          <a href="https://x.com/swyx/status/2086505938144616810">
            https://x.com/swyx/status/2086505938144616810
          </a>
          . Delete the skills that eat the next window.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>I deleted the skill that made me pay twice</H1>
        <Sub>
          I had an old skill that said start in the route. The cheap model
          listened and went there. Then I opened frontier again to get out.
          A leftover recipe in the repo is not free. It spends the next run.
          I kept one landmine: session.ts, do not edit the test. I cut the
          rest.
        </Sub>
      </div>
    )
  },
  {
    id: "dont-merge",
    note: (
      <Notes>
        <p>
          If I cannot tell the cheap run went green because session.ts is
          fixed, I will pay to find the move again. A person saying wait is
          a check. A test the agent rewrote is not.
        </p>
        <p>
          Gergely Orosz, 17 Aug:{" "}
          <a href="https://x.com/GergelyOrosz/status/2089478614848840145">
            https://x.com/GergelyOrosz/status/2089478614848840145
          </a>
          . Reviews will not hold. The review I can afford is the check I
          froze.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>I don&apos;t merge it</H1>
        <Sub>
          If I cannot tell the cheap run went green because session.ts is
          fixed, I will pay to find the move again. A person saying wait is
          a check. A test the agent rewrote is not.
        </Sub>
      </div>
    )
  }
];

export const slideCount = slides.length;
