import type { MouseEvent, ReactNode } from "react";

import { H1, Kicker, Sub, type SlideDef } from "../components/Slide";

function Notes({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

function Cite({
  href,
  children
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      className="cite"
      href={href}
      rel="noreferrer"
      target="_blank"
      onClick={(event: MouseEvent<HTMLAnchorElement>) => event.stopPropagation()}
    >
      {children}
    </a>
  );
}

export const slides: SlideDef[] = [
  {
    id: "title",
    note: (
      <Notes>
        <p>
          I am going to tell you what I did last Tuesday. Not a framework.
          Fifteen minutes. If you already know the ending, stay for the part
          where I admit I paid anyway.
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
    id: "paid-tuesday-twice",
    note: (
      <Notes>
        <p>
          Last Tuesday I already knew the path. I opened a new agent anyway.
          Frontier prices, same hour, same ticket. I am not confessing a
          secret. I am describing the default.
        </p>
        <p>
          The room laughs because they did it this morning. I did it this
          morning. That laugh is the talk.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>I paid Tuesday twice</H1>
        <Sub>
          Last Tuesday I already knew how to do the task. I opened a new agent
          anyway. Frontier prices, same path, same hour. The room laughs
          because they did it this morning.
        </Sub>
      </div>
    )
  },
  {
    id: "week-that-was-work",
    note: (
      <Notes>
        <p>
          The first wander is not the failure. That week is tuition. I am
          paying to learn how this task is done in this repo. I have sat in
          that week. A student in this room has sat in that week.
        </p>
        <p>
          I keep the receipt. If I throw the chat away, I will buy the lesson
          again, at the same price, and call it exploration.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>The week that was actually work</H1>
        <Sub>
          The first wander is tuition. You are paying to learn how this task
          is done in this repo. Keep the receipt. If you throw it away, you
          will buy the lesson again.
        </Sub>
      </div>
    )
  },
  {
    id: "six-accounts",
    note: (
      <Notes>
        <p>
          Dex, Hyper Engineering chat. Six Claude Code accounts, maxed every
          five-hour window so the tokens never sit idle. He calls that token
          harder.
        </p>
        <p>
          I have felt that number in my chest. It feels like a win. It is a
          slot machine. The machine is the window, not the repo.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>Six accounts, every five hours</H1>
        <Sub>
          Dex, Hyper Engineering chat: six Claude Code accounts, maxed every
          five-hour window so the tokens never sit idle. He calls that token
          harder. The number feels like a win. It is a slot machine.
        </Sub>
      </div>
    )
  },
  {
    id: "thesis",
    note: (
      <Notes>
        <p>
          That is the dumb default. Paying frontier prices next Tuesday to
          find the same move again.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>
          The failure is paying frontier prices to find the same move again
          next Tuesday.
        </H1>
      </div>
    )
  },
  {
    id: "write-the-path",
    note: (
      <Notes>
        <p>
          Whatever worked has to leave the chat. I do not mean a blog post. I
          mean a skill, a slash command, a script, a test that goes red if
          the move is wrong.
        </p>
        <p>
          swyx&apos;s freeze: the larger model writes a compound tool so the
          smaller one cannot invent a new path. Tonight I freeze one.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>Write the path down</H1>
        <Sub>
          Whatever worked has to leave the chat. A skill. A slash command. A
          script. A test that goes red if the move is wrong. Tonight,{" "}
          <Cite href="https://x.com/swyx/status/2089499493083529476">
            freeze one
          </Cite>{" "}
          — a compound tool.
        </Sub>
      </div>
    )
  },
  {
    id: "code-not-paragraph",
    note: (
      <Notes>
        <p>
          This is the whole card. A locked Cursor skill. Reproduce the flake.
          Do not edit the test. Fix the source. Stop when it is green.
        </p>
        <p>
          If it is still a paragraph in my notes app, I have not frozen
          anything.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame code-slide">
        <pre className="code-fill">{`# /fix-flaky-auth

1. Reproduce with \`pnpm test auth.spec.ts\`
2. Do not edit \`auth.spec.ts\`
3. Fix the source, not the assertion
4. Stop when the locked test is green`}</pre>
      </div>
    )
  },
  {
    id: "session-disposable",
    note: (
      <Notes>
        <p>
          Session disposable. Repo is not. I can close the chat. I cannot
          close the repo and still have a product.
        </p>
        <p>
          Dex&apos;s ralph loop is a cheap model walking a written loop in
          the files, not rediscovering it inside a fat window. That is the
          whole gloss. I will not make you a glossary slide.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>The session is disposable</H1>
        <Sub>
          Session disposable. Repo is not. Leave a{" "}
          <Cite href="https://x.com/dexhorthy/status/2085072621578944733">
            written loop
          </Cite>{" "}
          in the files.
        </Sub>
      </div>
    )
  },
  {
    id: "good-run-has-skill",
    note: (
      <Notes>
        <p>
          Osman: traces become skills. The good run already has the skill
          sitting in it. I am not waiting for a better model. I am mining the
          session I already paid for.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>The good run already has the skill</H1>
        <Sub>
          <Cite href="https://x.com/TheAhmadOsman/status/2089532183455084569">
            Traces → skills
          </Cite>
          .
        </Sub>
      </div>
    )
  },
  {
    id: "delete-most",
    note: (
      <Notes>
        <p>
          Then I delete most of it. swyx again: DELETE your skills. Frozen
          junk eats the window. If I keep every recipe I ever wrote, I have
          built a second context problem and called it process.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>Then delete most of it</H1>
        <Sub>
          <Cite href="https://x.com/swyx/status/2086505938144616810">
            DELETE your skills
          </Cite>
          . Frozen junk eats the window.
        </Sub>
      </div>
    )
  },
  {
    id: "check-you-will-run",
    note: (
      <Notes>
        <p>
          Parakhin wants more spend on review than generation. Orosz: PRs got
          faster, review did not. I have lived that queue.
        </p>
        <p>
          If my check is a senior on every diff, Tuesday I skip it. The only
          check that counts is the one I will actually run when I am tired.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>A check you will actually run</H1>
        <Sub>
          Parakhin generate vs review. Orosz: PRs faster, review not. If the
          check is a senior on every diff, Tuesday you skip it.
        </Sub>
      </div>
    )
  },
  {
    id: "wander-vs-frozen",
    note: (
      <Notes>
        <p>
          Same Tuesday. Left is what I did. Three Opus agents, one ticket,
          someone rewrote the test, somebody said it works, nothing in the
          repo except the pull request.
        </p>
        <p>
          Right is what should have been left: the skill, and a locked test
          the agent cannot edit. If those two disagree, I froze a diary
          entry.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame compact">
        <div className="code-split">
          <div>
            <Kicker>the wander</Kicker>
            <pre className="code-fill">{`14:02  three Opus agents, one ticket
14:11  one rewrites the test until green
14:40  "works"
repo   nothing frozen except the PR`}</pre>
          </div>
          <div>
            <Kicker>frozen</Kicker>
            <pre className="code-fill">{`# /fix-flaky-auth
do not edit auth.spec.ts

// auth.spec.ts  — agent cannot edit
test("session survives refresh", async () => {
  await signIn()
  await page.reload()
  expect(await page.getByTestId("home")).toBeVisible()
})`}</pre>
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
          A person in review saying don&apos;t merge yet is a check. A test
          the agent wrote so it could approve itself is not.
        </p>
        <p>
          If I cannot tell whether the cheap run did the thing, I will pay
          for the wander every time. I do not merge unread.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>Don&apos;t merge it</H1>
        <Sub>
          A person saying don&apos;t merge yet is a check. A test the agent
          wrote to approve itself is not.
        </Sub>
      </div>
    )
  }
];

export const slideCount = slides.length;
