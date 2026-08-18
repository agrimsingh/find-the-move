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
    id: "second-chat",
    note: (
      <Notes>
        <p>
          I have a failing test. I let the agent wander. Forty minutes. Two
          wrong files. Then green.
        </p>
        <p>
          I open a new chat. Same kind of failure. It opens the same wrong
          files again.
        </p>
        <p>
          I paid to learn the path. I threw the path away. That is the scene.
          Not a different ticket. The same kind of failure, a clean window, and
          I start over.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>The second chat starts over</H1>
        <div className="scene">
          <p>
            You have a failing test. You let the agent wander. Forty minutes,
            two wrong files, then green.
          </p>
          <p>
            You open a new chat. Same kind of failure. It opens the wrong files
            again.
          </p>
          <p>You paid to learn the path. You threw the path away.</p>
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
    id: "leave-these",
    note: (
      <Notes>
        <p>
          I am going to leave these in the repo. A skill is a short recipe the
          next agent reads before it starts. A slash command is the name I type
          to run that recipe. A script is the command itself, not a paragraph
          about it. A locked test is a check the agent is not allowed to edit.
          AGENTS.md is two lines that point at those files.
        </p>
        <p>If it only lives in the chat, I will pay again.</p>
      </Notes>
    ),
    content: (
      <div className="slide-frame compact">
        <H1>Leave these in the repo</H1>
        <div className="repo-list">
          <p>
            A skill — a short recipe the next agent reads before it starts.
          </p>
          <p>A slash command — a name you type to run that recipe.</p>
          <p>A script — the command itself, not a paragraph about it.</p>
          <p>A locked test — a check the agent is not allowed to edit.</p>
          <p>A short AGENTS.md — two lines that point at those files.</p>
        </div>
        <p className="sub">If it only lives in the chat, you will pay again.</p>
      </div>
    )
  },
  {
    id: "skill-file",
    note: (
      <Notes>
        <p>
          This is the whole skill. The next agent reads this first. When auth
          tests flake, reproduce with that command. Do not edit the test. Stop
          if it is still red.
        </p>
        <p>
          If this file does not exist, I do not have a skill. I have a memory.
          Osman mines traces into skills. I do not need a tool for that. I need
          this file.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame code-slide">
        <H1>The next agent reads this first</H1>
        <pre className="code-fill">{`# .cursor/skills/fix-flaky-auth/SKILL.md
when auth tests flake
1. reproduce with \`pnpm test auth.spec.ts\`
2. do not edit auth.spec.ts
3. stop if the test is still red`}</pre>
        <p className="sub">
          If this file does not exist, you do not have a skill. You have a
          memory.
        </p>
      </div>
    )
  },
  {
    id: "lock-the-test",
    note: (
      <Notes>
        <p>
          This test is committed. The agent cannot edit it. Expired session
          returns 401. That is the check.
        </p>
        <p>
          If the agent can rewrite this until it is green, it is not a check. I
          froze a diary entry.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame code-slide">
        <H1>Lock the test</H1>
        <pre className="code-fill">{`// auth.spec.ts — committed. agent cannot edit.
test("expired session returns 401", async () => {
  const res = await request("/api/me", { cookie: expired })
  expect(res.status).toBe(401)
})`}</pre>
        <p className="sub">
          If the agent can rewrite this until it is green, it is not a check.
        </p>
      </div>
    )
  },
  {
    id: "copy-out-of-chat",
    note: (
      <Notes>
        <p>
          Left is already in the log. I touched session.ts. I ran the test. I
          proved the 401.
        </p>
        <p>
          Right is the skill. Those three lines are the skill. They are already
          in the log. Put them in a file.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame compact">
        <H1>Copy it out of the chat</H1>
        <div className="code-split">
          <div>
            <Kicker>the log</Kicker>
            <pre className="code-fill">{`touched src/lib/session.ts
ran pnpm test auth.spec.ts
proved expired session returns 401`}</pre>
          </div>
          <div>
            <Kicker>the skill</Kicker>
            <pre className="code-fill">{`# .cursor/skills/fix-flaky-auth/SKILL.md
when auth tests flake
1. reproduce with \`pnpm test auth.spec.ts\`
2. do not edit auth.spec.ts
3. stop if the test is still red`}</pre>
          </div>
        </div>
        <p className="sub">
          Those three lines are the skill. They are already in the log. Put
          them in a file.
        </p>
      </div>
    )
  },
  {
    id: "delete-ones-that-fight",
    note: (
      <Notes>
        <p>
          Then I delete the ones that fight. A leftover skill sits in context
          and pulls the next run off the path.
        </p>
        <p>
          I keep the landmine. The folder people miss. The file the agent must
          not touch.
        </p>
        <p>
          I cut the ten-step lecture the model already knows. swyx says delete
          your skills. Frozen junk eats the window. If I keep every recipe I
          ever wrote, I have built a second context problem and called it
          process.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>Delete the ones that fight</H1>
        <div className="scene">
          <p>
            A leftover skill sits in context and pulls the next run off the
            path.
          </p>
          <p>
            Keep the landmine: the folder people miss, the file the agent must
            not touch.
          </p>
          <p>Cut the ten-step lecture the model already knows.</p>
        </div>
      </div>
    )
  },
  {
    id: "freeze-a-check",
    note: (
      <Notes>
        <p>
          If the plan is a senior on every diff, I will skip it when I am busy.
          I have lived that queue. Parakhin wants more spend on review than
          generation. Orosz: PRs got faster, review did not.
        </p>
        <p>
          So I put the check in the skill. Run this command. Stop if it is red.
          Do not edit the test.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame code-slide">
        <H1>Freeze a check you will run</H1>
        <div className="scene tight">
          <p>
            If the plan is a senior on every diff, you will skip it when you
            are busy.
          </p>
          <p>
            Put the check in the skill: run this command, stop if it is red.
          </p>
        </div>
        <pre className="code-fill">{`pnpm test auth.spec.ts
# red → stop. do not edit the test.`}</pre>
      </div>
    )
  },
  {
    id: "dont-merge",
    note: (
      <Notes>
        <p>
          If I cannot tell whether the cheap run did the thing, I will pay
          again.
        </p>
        <p>
          A person saying wait is a check. A test the agent wrote to approve
          itself is not.
        </p>
        <p>
          If the check is not in the repo, I do not have a workflow. I do not
          merge unread.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>Don&apos;t merge it</H1>
        <div className="scene">
          <p>
            If you cannot tell whether the cheap run did the thing, you will
            pay again.
          </p>
          <p>A person saying wait is a check.</p>
          <p>A test the agent wrote to approve itself is not.</p>
          <p>If the check is not in the repo, you do not have a workflow.</p>
        </div>
      </div>
    )
  }
];

export const slideCount = slides.length;
