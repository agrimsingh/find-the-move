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
          I am going to tell you what I did. Not a framework. Fifteen minutes.
          If you already know the ending, stay for the part where I admit I
          paid anyway.
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
          I had a failing test. I let the agent wander. It opened the route
          file. Then another file that was also wrong. Forty minutes later
          auth.spec.ts was green.
        </p>
        <p>
          I had paid to learn that the bug was in session.ts. That hour is
          tuition. I keep the receipt.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>I let it wander</H1>
        <Sub>
          I had a failing test. I let the agent wander. It opened the route
          file. Then another file that was also wrong. Forty minutes later
          auth.spec.ts was green. I had paid to learn that the bug was in
          session.ts.
        </Sub>
      </div>
    )
  },
  {
    id: "opened-a-new-chat",
    note: (
      <Notes>
        <p>
          Same kind of failure. I opened a new chat. It opened the route file
          again. The path was sitting in the last transcript. The repo still
          only had the test.
        </p>
        <p>I paid to find the same move.</p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>I opened a new chat</H1>
        <Sub>
          Same kind of failure. New chat. It opened the route file again. The
          path was in the last transcript. The repo still only had the test.
        </Sub>
      </div>
    )
  },
  {
    id: "thesis",
    note: (
      <Notes>
        <p>That is the dumb default. Paying to find the same move again.</p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>The failure is paying to find the same move again.</H1>
      </div>
    )
  },
  {
    id: "steps-in-a-file",
    note: (
      <Notes>
        <p>
          Whatever worked has to leave the chat. I wrote the steps that
          actually worked into a file the next chat reads first. That file is
          a skill. The next chat starts here. It does not have to wander.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame code-slide">
        <H1>The steps, in a file</H1>
        <Sub>
          I wrote the steps that actually worked into a file the next chat
          reads first. That file is a skill. The next chat starts here. It
          does not have to wander.
        </Sub>
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
    id: "the-test-stays",
    note: (
      <Notes>
        <p>
          The agent will edit auth.spec.ts until the test is green. That is it
          marking its own homework. I left the test in the repo and told it it
          cannot touch that file.
        </p>
        <p>
          If I let it rewrite the assertion, I froze a diary entry.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame code-slide">
        <H1>The test stays</H1>
        <Sub>
          The agent will edit auth.spec.ts until the test is green. That is it
          marking its own homework. I left the test in the repo and told it it
          cannot touch that file.
        </Sub>
        <pre className="code-fill">{`// auth.spec.ts — committed. agent cannot edit.
test("expired session returns 401", async () => {
  const res = await request("/api/me", { cookie: expired })
  expect(res.status).toBe(401)
})`}</pre>
      </div>
    )
  },
  {
    id: "same-path-in-the-repo",
    note: (
      <Notes>
        <p>
          I also gave the next chat a name to type, /fix-auth-test, so it
          opens that recipe. The command it must run is just pnpm test
          auth.spec.ts. AGENTS.md is two lines that point at those files: read
          the skill, do not edit the test.
        </p>
        <p>
          None of this is a new idea. It is the path, sitting where a new chat
          can find it.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>Same path, in the repo</H1>
        <Sub>
          I also gave the next chat a name to type, /fix-auth-test, so it
          opens that recipe. The command it must run is just pnpm test
          auth.spec.ts. AGENTS.md is two lines that point at those files: read
          the skill, do not edit the test. None of this is a new idea. It is
          the path, sitting where a new chat can find it.
        </Sub>
      </div>
    )
  },
  {
    id: "copied-from-the-chat",
    note: (
      <Notes>
        <p>
          The good run already said this. Opened the route — wrong. Opened
          session.ts — right. Ran the test — green. Do not edit the test.
        </p>
        <p>
          I did not invent a skill. I copied those lines into the file.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame compact">
        <H1>I copied it from the chat</H1>
        <Sub>
          The good run already said this. I did not invent a skill. I copied
          those lines into the file on slide 5.
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
    id: "deleted-the-recipe",
    note: (
      <Notes>
        <p>
          I had an old file that said start in the route. The new chat
          listened and went there again. That is how you pay twice with a
          recipe in the repo.
        </p>
        <p>
          I kept one landmine: open session.ts, do not edit the test. I cut
          the rest.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>I deleted the recipe that sent it to the route file</H1>
        <Sub>
          I had an old file that said start in the route. The new chat
          listened and went there again. That is how you pay twice with a
          recipe in the repo. I kept one landmine: open session.ts, do not
          edit the test. I cut the rest.
        </Sub>
      </div>
    )
  },
  {
    id: "dont-merge",
    note: (
      <Notes>
        <p>
          A cheap model can make auth.spec.ts green by editing auth.spec.ts.
          If I cannot tell it went green because session.ts is fixed, I
          don&apos;t merge.
        </p>
        <p>
          A person saying wait is a check. A test the agent rewrote is not.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>I don&apos;t merge it</H1>
        <Sub>
          A cheap model can make auth.spec.ts green by editing auth.spec.ts.
          If I cannot tell it went green because session.ts is fixed, I
          don&apos;t merge. A person saying wait is a check. A test the agent
          rewrote is not.
        </Sub>
      </div>
    )
  }
];

export const slideCount = slides.length;
