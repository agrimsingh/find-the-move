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
          claim up here.
        </p>
        <p>
          If you already know where this goes, stay for the part where I show
          you the file.
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
          I let the agent wander. It opened src/routes/auth.ts. Then another
          file that was also wrong. Forty minutes later the test was green.
          The bug was in src/lib/session.ts.
        </p>
        <p>
          I had paid to learn which file to open and which command to run.
          That is the scene. Not a different ticket. One failing auth test.
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
            I let the agent wander. It opened src/routes/auth.ts. Then another
            file that was also wrong.
          </p>
          <p>
            Forty minutes later the test was green. The bug was in
            src/lib/session.ts.
          </p>
          <p>
            I had paid to learn which file to open and which command to run.
          </p>
        </div>
      </div>
    )
  },
  {
    id: "new-chat",
    note: (
      <Notes>
        <p>
          Same kind of failure. New chat. Empty context. It opened
          src/routes/auth.ts again.
        </p>
        <p>
          The path was sitting in the last transcript: session.ts, pnpm test
          auth.spec.ts, do not edit the test.
        </p>
        <p>
          The repo still only had auth.spec.ts. Nothing for the new chat to
          read. I paid to find the move, then I threw the move away.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>I opened a new chat</H1>
        <div className="scene">
          <p>Same kind of failure. New chat. Empty context.</p>
          <p>It opened src/routes/auth.ts again.</p>
          <p>
            The path was sitting in the last transcript: session.ts, pnpm test
            auth.spec.ts, do not edit the test.
          </p>
          <p>
            The repo still only had auth.spec.ts. Nothing for the new chat to
            read.
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
    id: "wrote-the-steps",
    note: (
      <Notes>
        <p>
          I took the run that went green and wrote the steps into a file the
          next chat reads first. That file is a skill: a short recipe, not a
          memory in my head.
        </p>
        <p>
          The next chat starts here. It does not have to open the route file.
          Osman mines traces into skills —{" "}
          <a
            className="cite"
            href="https://x.com/TheAhmadOsman/status/2089532183455084569"
            rel="noreferrer"
            target="_blank"
          >
            https://x.com/TheAhmadOsman/status/2089532183455084569
          </a>
          . I do not need a tool for that. I need this file.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame compact code-slide">
        <H1>I wrote the steps that worked</H1>
        <div className="scene tight">
          <p>
            I took the run that went green and wrote the steps into a file the
            next chat reads first.
          </p>
          <p>
            That file is a skill: a short recipe, not a memory in my head.
          </p>
          <p>
            The next chat starts here. It does not have to open the route
            file.
          </p>
        </div>
        <pre className="code-fill">{`# .cursor/skills/fix-auth-test/SKILL.md
when auth.spec.ts fails
1. open src/lib/session.ts — not the route file
2. run \`pnpm test auth.spec.ts\`
3. do not edit auth.spec.ts
4. stop if it is still red`}</pre>
      </div>
    )
  },
  {
    id: "name-to-type",
    note: (
      <Notes>
        <p>
          I do not want to paste that recipe every time. I made a slash
          command, /fix-auth-test, that opens this skill.
        </p>
        <p>
          I type the name. The new chat starts on session.ts, not on the
          route. swyx&apos;s compound tool is the same idea — the larger model
          writes a name the next run can type:{" "}
          <a
            className="cite"
            href="https://x.com/swyx/status/2089499493083529476"
            rel="noreferrer"
            target="_blank"
          >
            https://x.com/swyx/status/2089499493083529476
          </a>
          .
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>I gave the next chat a name to type</H1>
        <div className="scene tight">
          <p>I do not want to paste that recipe every time.</p>
          <p>
            I made a slash command, /fix-auth-test, that opens this skill.
          </p>
          <p>
            I type the name. The new chat starts on session.ts, not on the
            route.
          </p>
        </div>
        <p className="command-name">/fix-auth-test</p>
      </div>
    )
  },
  {
    id: "command-is-the-command",
    note: (
      <Notes>
        <p>
          The check is not a paragraph about testing. It is one line the skill
          already runs: pnpm test auth.spec.ts.
        </p>
        <p>
          If that is red, stop. Do not edit the test to make it green. Dex&apos;s
          ralph loop is a cheap model walking a written command in the files,
          not rediscovering it inside a fat window:{" "}
          <a
            className="cite"
            href="https://x.com/dexhorthy/status/2085072621578944733"
            rel="noreferrer"
            target="_blank"
          >
            https://x.com/dexhorthy/status/2085072621578944733
          </a>
          .
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame code-slide">
        <H1>The command is the command</H1>
        <div className="scene tight">
          <p>The check is not a paragraph about testing.</p>
          <p>It is one line the skill already runs:</p>
        </div>
        <pre className="code-fill one-line">{`pnpm test auth.spec.ts`}</pre>
        <p className="sub">
          If that is red, stop. Do not edit the test to make it green.
        </p>
      </div>
    )
  },
  {
    id: "locked-the-test",
    note: (
      <Notes>
        <p>
          The agent will edit auth.spec.ts until the assertion passes. That is
          it marking its own homework.
        </p>
        <p>
          I left the test in the repo and told the agent it cannot touch that
          file. If the cheap run goes green because it rewrote this, that is
          not a fix.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame compact code-slide">
        <H1>I locked the test</H1>
        <div className="scene tight">
          <p>
            The agent will edit auth.spec.ts until the assertion passes. That
            is it marking its own homework.
          </p>
          <p>
            I left the test in the repo and told the agent it cannot touch
            that file.
          </p>
        </div>
        <pre className="code-fill">{`// auth.spec.ts — committed. agent cannot edit.
test("expired session returns 401", async () => {
  const res = await request("/api/me", { cookie: expired })
  expect(res.status).toBe(401)
})`}</pre>
        <p className="sub">
          If the cheap run goes green because it rewrote this, that is not a
          fix.
        </p>
      </div>
    )
  },
  {
    id: "two-lines",
    note: (
      <Notes>
        <p>
          AGENTS.md is not a novel about how I think. It is two lines the next
          chat sees.
        </p>
        <p>
          Same path as the skill. Sitting where a new chat can find it. If
          those two lines are not in the repo, I still only have a memory.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame code-slide">
        <H1>Two lines that point at those files</H1>
        <div className="scene tight">
          <p>AGENTS.md is not a novel about how I think.</p>
          <p>It is two lines the next chat sees:</p>
        </div>
        <pre className="code-fill">{`auth tests: read .cursor/skills/fix-auth-test/SKILL.md
do not edit auth.spec.ts`}</pre>
        <p className="sub">
          Same path. Sitting where a new chat can find it.
        </p>
      </div>
    )
  },
  {
    id: "copied-from-chat",
    note: (
      <Notes>
        <p>
          I did not invent a skill. The good run already said this. Left is
          the log. Right is the file.
        </p>
        <p>
          Those four lines are the skill. I copied them into a file. Osman
          again: traces become skills —{" "}
          <a
            className="cite"
            href="https://x.com/TheAhmadOsman/status/2089532183455084569"
            rel="noreferrer"
            target="_blank"
          >
            https://x.com/TheAhmadOsman/status/2089532183455084569
          </a>
          .
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame compact">
        <H1>I copied it from the chat</H1>
        <div className="scene tight">
          <p>I did not invent a skill. The good run already said this.</p>
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
        <p className="sub">
          Those four lines are the skill. I copied them into a file.
        </p>
      </div>
    )
  },
  {
    id: "deleted-the-recipe",
    note: (
      <Notes>
        <p>
          I had an old skill that said start in the route file. The new chat
          listened and went there again. That is how you pay twice with a
          recipe already in the repo.
        </p>
        <p>
          I kept one landmine: open session.ts, do not edit the test. I cut
          the rest. swyx: delete your skills — frozen junk eats the window:{" "}
          <a
            className="cite"
            href="https://x.com/swyx/status/2086505938144616810"
            rel="noreferrer"
            target="_blank"
          >
            https://x.com/swyx/status/2086505938144616810
          </a>
          .
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame compact code-slide">
        <H1>I deleted the recipe that sent it to the route</H1>
        <div className="scene tight">
          <p>
            I had an old skill that said start in the route file. The new
            chat listened and went there again.
          </p>
          <p>
            That is how you pay twice with a recipe already in the repo.
          </p>
          <p>
            I kept one landmine: open session.ts, do not edit the test. I cut
            the rest.
          </p>
        </div>
        <div className="code-split">
          <div>
            <Kicker>deleted</Kicker>
            <pre className="code-fill">{`# old skill
when auth.spec.ts fails
1. start in src/routes/auth.ts`}</pre>
          </div>
          <div>
            <Kicker>kept</Kicker>
            <pre className="code-fill">{`# .cursor/skills/fix-auth-test/SKILL.md
open src/lib/session.ts
do not edit auth.spec.ts`}</pre>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "dont-merge",
    note: (
      <Notes>
        <p>
          A cheaper model can make auth.spec.ts green by editing auth.spec.ts.
          If I cannot tell it went green because session.ts is fixed, I
          don&apos;t merge.
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
            A cheaper model can make auth.spec.ts green by editing
            auth.spec.ts.
          </p>
          <p>
            If I cannot tell it went green because session.ts is fixed, I
            don&apos;t merge.
          </p>
          <p>A person saying wait is a check.</p>
          <p>A test the agent rewrote is not.</p>
        </div>
      </div>
    )
  }
];

export const slideCount = slides.length;
