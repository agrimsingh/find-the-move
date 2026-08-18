import type { ReactNode } from "react";

import { H1, Kicker, Sub, type SlideDef } from "../components/Slide";

function Notes({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

export const slides: SlideDef[] = [
  {
    id: "title",
    note: (
      <Notes>
        <p>
          Name and handle. That is the whole card. I am not going to put the
          claim up here. The room already knows what a skill is.
        </p>
        <p>
          Stay for the token move — the part where I paid twice because I did
          not keep the path.
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
    id: "wander",
    note: (
      <Notes>
        <p>
          I had a failing test. auth.spec.ts. Expired session should return
          401. It did not.
        </p>
        <p>
          I let a frontier model wander. It opened src/routes/auth.ts. Then
          another wrong file. Forty minutes later the test was green. The bug
          was in src/lib/session.ts.
        </p>
        <p>
          That bill bought me a path. I had not kept the path. That hour is
          tuition. I keep the receipt.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>I let it wander</H1>
        <div className="scene">
          <p>
            I had a failing test. auth.spec.ts. Expired session should return
            401. It did not.
          </p>
          <p>
            I let a frontier model wander. It opened src/routes/auth.ts. Then
            another wrong file.
          </p>
          <p>
            Forty minutes later the test was green. The bug was in
            src/lib/session.ts.
          </p>
          <p>That bill bought me a path. I had not kept the path.</p>
        </div>
      </div>
    )
  },
  {
    id: "new-chat",
    note: (
      <Notes>
        <p>Same failure. New chat. Frontier again.</p>
        <p>It opened src/routes/auth.ts again.</p>
        <p>
          I paid a second time for session.ts. The first run was still sitting
          in the old transcript. The repo still only had the test.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>I opened a new chat</H1>
        <div className="scene">
          <p>Same failure. New chat. Frontier again.</p>
          <p>It opened src/routes/auth.ts again.</p>
          <p>
            I paid a second time for session.ts. The first run was still
            sitting in the old transcript.
          </p>
        </div>
      </div>
    )
  },
  {
    id: "thesis",
    note: (
      <Notes>
        <p>
          That is the failure. Not the first wander. The first wander is how I
          learn the repo.
        </p>
        <p>The failure is paying to find the same move again.</p>
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
          I already know what a skill is. I used one so the next chat does not
          buy the wander again.
        </p>
        <p>
          A cheaper model, clean window, reads this first. It starts on
          session.ts. It does not spend frontier tokens finding the route
          file.
        </p>
        <p>
          The file is not the lesson. The lesson is: frontier found this once.
          I do not pay frontier to find it again. Osman mines traces into
          skills — that is the same harvest, written down.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame compact code-slide">
        <H1>The skill is how I stop paying</H1>
        <div className="scene tight">
          <p>
            I already know what a skill is. I used one so the next chat does
            not buy the wander again.
          </p>
          <p>
            A cheaper model, clean window, reads this first. It starts on
            session.ts. It does not spend frontier tokens finding the route
            file.
          </p>
        </div>
        <pre className="code-fill">{`# .cursor/skills/fix-auth-test/SKILL.md
when auth.spec.ts fails
1. open src/lib/session.ts — not the route file
2. run \`pnpm test auth.spec.ts\`
3. do not edit auth.spec.ts
4. stop if it is still red`}</pre>
        <p className="sub">
          The file is not the lesson. The lesson is: frontier found this once.
          I do not pay frontier to find it again.{" "}
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
          The first wander already wrote the skill. I just failed to save it.
          Left is the log. Right is the file.
        </p>
        <p>Harvest the bill. Do not re-run it.</p>
      </Notes>
    ),
    content: (
      <div className="slide-frame compact">
        <H1>I copied the expensive run into that file</H1>
        <div className="scene tight">
          <p>
            The first wander already wrote the skill. I just failed to save
            it.
          </p>
        </div>
        <div className="code-split">
          <div>
            <Kicker>the log</Kicker>
            <pre className="code-fill">{`opened src/routes/auth.ts — wrong
opened src/lib/session.ts — right
ran pnpm test auth.spec.ts — green
do not edit auth.spec.ts`}</pre>
          </div>
          <div>
            <Kicker>the skill</Kicker>
            <pre className="code-fill">{`# .cursor/skills/fix-auth-test/SKILL.md
when auth.spec.ts fails
1. open src/lib/session.ts — not the route file
2. run \`pnpm test auth.spec.ts\`
3. do not edit auth.spec.ts
4. stop if it is still red`}</pre>
          </div>
        </div>
        <p className="sub">Harvest the bill. Do not re-run it.</p>
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
          actually fixed.
        </p>
        <p>
          The lock is a token move. If I cannot trust green, I am back on
          frontier.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame compact code-slide">
        <H1>I locked the test so green means the path held</H1>
        <div className="scene tight">
          <p>
            A cheaper model can go green by editing auth.spec.ts. Then I will
            pay for another wander, because I cannot tell if session.ts is
            actually fixed.
          </p>
        </div>
        <pre className="code-fill">{`// auth.spec.ts — committed. agent cannot edit.
test("expired session returns 401", async () => {
  const res = await request("/api/me", { cookie: expired })
  expect(res.status).toBe(401)
})`}</pre>
        <p className="sub">
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
        </p>
        <p>
          A leftover recipe in the repo is not free. It spends the next run.
          swyx: delete your skills — frozen junk eats the window.
        </p>
        <p>
          I kept one landmine: session.ts, do not edit the test. I cut the
          rest.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>I deleted the skill that made me pay twice</H1>
        <div className="scene">
          <p>
            I had an old skill that said start in the route. The cheap model
            listened and went there. Then I opened frontier again to get out.
          </p>
          <p>
            A leftover recipe in the repo is not free. It spends the next
            run.
          </p>
          <p>
            I kept one landmine: session.ts, do not edit the test. I cut the
            rest.
          </p>
        </div>
      </div>
    )
  },
  {
    id: "dont-merge",
    note: (
      <Notes>
        <p>
          If I cannot tell the cheap run went green because session.ts is
          fixed, I will pay to find the move again.
        </p>
        <p>
          A person saying wait is a check. A test the agent rewrote is not.
          Parakhin wants more spend on review than generation. That review is
          a person saying wait, not the agent marking its own homework.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>I don&apos;t merge it</H1>
        <div className="scene">
          <p>
            If I cannot tell the cheap run went green because session.ts is
            fixed, I will pay to find the move again.
          </p>
          <p>A person saying wait is a check.</p>
          <p>A test the agent rewrote is not.</p>
        </div>
      </div>
    )
  }
];

export const slideCount = slides.length;
