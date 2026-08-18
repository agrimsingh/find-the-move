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
          Two people bought the last seat. Both requests saw “one left.” Both
          wrote. Two confirmations.
        </p>
        <p>
          I let a frontier model wander. It checked the count, then it wrote.
          That is the bug. The second request still saw one.
        </p>
        <p>
          Forty minutes later I had the path: taking the seat and checking the
          seat are the same step. The second buyer gets nothing. That bill
          bought me the path. I had not kept the path.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>I let it wander</H1>
        <div className="scene">
          <p>
            Two people bought the last seat. Both requests saw “one left.”
            Both wrote. Two confirmations.
          </p>
          <p>
            I let a frontier model wander. It checked the count, then it
            wrote.
          </p>
          <p>That is the bug. The second request still saw one.</p>
          <p>
            Forty minutes later I had the path: taking the seat and checking
            the seat are the same step. The second buyer gets nothing.
          </p>
          <p>That bill bought me the path. I had not kept the path.</p>
        </div>
      </div>
    )
  },
  {
    id: "new-chat",
    note: (
      <Notes>
        <p>Same bug. New chat. Frontier again.</p>
        <p>
          It checked the count, then it wrote. Two seats sold again.
        </p>
        <p>
          I paid a second time for the same step. The first run was still
          sitting in the old transcript.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>I opened a new chat</H1>
        <div className="scene">
          <p>Same bug. New chat. Frontier again.</p>
          <p>
            It checked the count, then it wrote. Two seats sold again.
          </p>
          <p>
            I paid a second time for the same step. The first run was still
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
        <p>The failure is paying to find the same move again.</p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>Thesis</H1>
        <div className="scene">
          <p>The failure is paying to find the same move again.</p>
        </div>
      </div>
    )
  },
  {
    id: "skill-stops-paying",
    note: (
      <Notes>
        <p>
          I already know what a skill is. I used one so the next chat does not
          buy that wander again.
        </p>
        <p>
          A cheaper model, clean window, reads this first. It does not spend
          frontier tokens rediscovering “check the count, then write.”
        </p>
        <p>
          The file is not the lesson. Frontier found this once. I do not pay
          to find it again.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame compact code-slide">
        <H1>The skill is how I stop paying</H1>
        <div className="scene tight">
          <p>
            I already know what a skill is. I used one so the next chat does
            not buy that wander again.
          </p>
          <p>
            A cheaper model, clean window, reads this first. It does not
            spend frontier tokens rediscovering “check the count, then
            write.”
          </p>
        </div>
        <pre className="code-fill">{`when two people buy the last seat
1. take the seat and check it in one step — not check, then write
2. the second buyer gets nothing
3. stop if two buys can still make two seats`}</pre>
        <p className="sub">
          The file is not the lesson. Frontier found this once. I do not pay
          to find it again.
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
            <pre className="code-fill">{`checked the count, then wrote — two seats
take and check in one step — one seat
second buyer gets nothing
do not drop the “one seat” check`}</pre>
          </div>
          <div>
            <Kicker>the skill</Kicker>
            <pre className="code-fill">{`take and check in one step
second buyer gets nothing
stop if two buys still make two seats`}</pre>
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
          A cheaper model can go green by deleting the “one seat” check, or by
          hiding the buy button. Then I cannot tell if two buyers still get
          two seats. I am back on frontier.
        </p>
        <p>
          The lock is a token move. The cheap model cannot edit this check.
          If I cannot trust green, I pay again.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame compact code-slide">
        <H1>I locked the test so green means the path held</H1>
        <div className="scene tight">
          <p>
            A cheaper model can go green by deleting the “one seat” check, or
            by hiding the buy button. Then I cannot tell if two buyers still
            get two seats. I am back on frontier.
          </p>
        </div>
        <pre className="code-fill">{`two buys on the last seat
seats taken == 1`}</pre>
        <p className="sub">
          The lock is a token move. The cheap model cannot edit this check.
          If I cannot trust green, I pay again.
        </p>
      </div>
    )
  },
  {
    id: "deleted-the-skill",
    note: (
      <Notes>
        <p>
          I had an old skill that said: if count is above zero, write. The
          cheap model listened. Both buyers passed the check. Two seats
          again. Then I opened frontier to get out.
        </p>
        <p>
          A leftover recipe in the repo is not free. It spends the next run.
        </p>
        <p>
          I kept one landmine: take and check in one step. I cut “check the
          count, then write.”
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>I deleted the skill that made me pay twice</H1>
        <div className="scene">
          <p>
            I had an old skill that said: if count is above zero, write. The
            cheap model listened. Both buyers passed the check. Two seats
            again. Then I opened frontier to get out.
          </p>
          <p>
            A leftover recipe in the repo is not free. It spends the next
            run.
          </p>
          <p>
            I kept one landmine: take and check in one step. I cut “check
            the count, then write.”
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
          If I cannot tell the cheap run went green because two buys still
          make one seat, I will pay to find the move again.
        </p>
        <p>A person saying wait is a check.</p>
        <p>
          A check the agent rewrote so two seats is “fine” is not.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>I don&apos;t merge it</H1>
        <div className="scene">
          <p>
            If I cannot tell the cheap run went green because two buys still
            make one seat, I will pay to find the move again.
          </p>
          <p>A person saying wait is a check.</p>
          <p>
            A check the agent rewrote so two seats is “fine” is not.
          </p>
        </div>
      </div>
    )
  }
];

export const slideCount = slides.length;
