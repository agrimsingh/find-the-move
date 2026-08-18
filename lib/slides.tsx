import type { MouseEvent, ReactNode } from "react";

import { H1, type SlideDef } from "../components/Slide";

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
          I am going to burn tokens this week. That is allowed. The thing I will
          not do is pay frontier prices next Tuesday to find the same move
          again. That is the dumb default in this room.
        </p>
        <p>
          Fifteen minutes. Five cards. Then I run the same task two ways. Then
          we stop. I am not here to tell you to be cheap. I keep watching people
          rent a search and call it a workflow.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>
          You will burn tokens finding the move.
          <br />
          <span className="lead">
            The failure is paying frontier prices to find the same move again
            next Tuesday.
          </span>
        </H1>
        <p className="sub">Agrim Singh · @agrimsingh</p>
      </div>
    )
  },
  {
    id: "find-the-move",
    note: (
      <Notes>
        <p>
          First time through a hard thing, I am paying to learn how it is done.
          The tokens are the work. That week can look messy and still be the
          right week.
        </p>
        <p>
          I have sat in that week. A student in this room has sat in that week.
          You stay with a frontier model until the path shows up. swyx&apos;s
          point is that people at the edge see the next loop first, because they
          are the ones paying to find it.
        </p>
        <p>
          I will not apologize for that bill. I will also not confuse it with
          the product. The spend taught me the move. The spend is not what I
          ship.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>find the move</H1>
        <p className="sub">
          The first time, the tokens are the work. You are paying to learn how
          the thing is done. That spend is not the product.
        </p>
      </div>
    )
  },
  {
    id: "dont-pay-twice",
    note: (
      <Notes>
        <p>
          Tuesday. Same shape of ticket. If I open the frontier model again and
          wander until it &quot;works,&quot; I rented a search. I did not ship a
          workflow.
        </p>
        <p>
          Dex, Hyper Engineering: six Claude accounts maxed every five hours.
          That optimizes the node. It does not optimize the ship. Three agents
          on one ticket with no locked check is a slot machine. The room name
          for the debugging version is thrashmaxxing.
        </p>
        <p>
          I am not mad at the first expensive week. I am mad at pretending the
          second one is still exploration.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>don&apos;t pay to find it twice</H1>
        <p className="sub">
          Same task shows up next Tuesday. If you burn the frontier model to
          discover the same path again, you rented a search. You did not ship a
          workflow.
        </p>
      </div>
    )
  },
  {
    id: "freeze-it",
    note: (
      <Notes>
        <p>
          When a sequence actually works, I write it down. Freeze it — put the
          path in the repo so a cheaper model can walk it without inventing a
          new one.
        </p>
        <p>
          swyx, 17 August: the larger model writes a compound tool, a
          deterministic script, so the smaller model cannot screw the move up.
          Muscle memory. Dex, 5 August: a ralph loop is a cheap model walking a
          written loop in the repo, not rediscovering it inside a fat window.
          The trajectory leaves the context and lands in the files.
        </p>
        <p>
          In Cursor that looks boring on purpose. A skill, a short recipe the
          agent reads before it starts. A slash command. A script. A committed
          failing test the agent is not allowed to edit. A short AGENTS.md that
          points at the real file. Frontier writes it once. Composer or Auto
          walks it.
        </p>
        <p>
          Ahmad Osman, 18 August: Autoresearcher sitting on session traces,
          writing skills from the things you keep doing. The tool is not the
          point. Trace to skill is. Then you prune. swyx again, 9 August: delete
          your skills. Frozen junk eats the window.
        </p>
        <p>
          Parakhin wants serial depth, more spend on review than generation.
          Orosz says human PR review will not hold. The review I can afford is
          the check I froze. I am not being cheap. I found the move. I am trying
          to keep the muscle from going soft.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>freeze it</H1>
        <p className="sub">
          Write down the move that actually worked. A{" "}
          <Cite href="https://x.com/TheAhmadOsman/status/2089532183455084569">skill</Cite>, a{" "}
          <Cite href="https://x.com/dexhorthy/status/2085072621578944733">path</Cite>, a{" "}
          <Cite href="https://x.com/swyx/status/2089499493083529476">
            check a cheaper model can follow
          </Cite>
          . Forgetting is not always the bug. Searching again is.
        </p>
      </div>
    )
  },
  {
    id: "same-task-two-ways",
    note: (
      <Notes>
        <p>
          Same recurring task. I run the expensive wander. I run the frozen
          path. If they do not land in the same place, I froze a story about the
          move, not the move.
        </p>
        <p>
          I want you to see it, not hear a framework. Next card is the session,
          then the skill it should have left behind. The second run can cost
          less and still be the serious one.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>same task two ways</H1>
        <p className="sub">
          Run the expensive wander and the frozen path. If they do not land in
          the same place, you froze a story about the move, not the move.
        </p>
      </div>
    )
  },
  {
    id: "same-task-visual",
    note: (
      <Notes>
        <p>
          This is a Tuesday I have actually had. Three Opus agents on one flake.
          One of them rewrites the test until it is green. Somebody says it
          works. Nothing in the repo except the pull request.
        </p>
        <p>
          What should have been left: a skill the next agent reads first, a
          locked test it cannot edit, a cheaper model in a clean window walking
          the file I already wrote down.
        </p>
        <p>
          If the wander and the frozen path disagree, I do not get to call the
          skill done. I froze a diary entry.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame compact">
        <div className="split deep-split">
          <div>
            <div className="kicker">the wander</div>
            <div className="evidence-list">
              <div className="evidence-item">
                <div className="evidence-talk">14:02</div>
                <div className="evidence-point">
                  three Opus agents on the same ticket
                </div>
              </div>
              <div className="evidence-item">
                <div className="evidence-talk">14:11</div>
                <div className="evidence-point">
                  one rewrites the test until green
                </div>
              </div>
              <div className="evidence-item">
                <div className="evidence-talk">14:40</div>
                <div className="evidence-point">it &quot;works&quot;</div>
              </div>
              <div className="evidence-item">
                <div className="evidence-talk">repo</div>
                <div className="evidence-point">
                  nothing frozen except the pull request
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="kicker">what it should have left</div>
            <div className="evidence-list">
              <div className="evidence-item">
                <div className="evidence-talk">skill</div>
                <div className="evidence-point">
                  <code className="mono">/fix-flaky-auth</code> — recipe the
                  next agent reads first
                </div>
              </div>
              <div className="evidence-item">
                <div className="evidence-talk">check</div>
                <div className="evidence-point">
                  <code className="mono">auth.spec.ts</code> committed, agent
                  cannot edit
                </div>
              </div>
              <div className="evidence-item">
                <div className="evidence-talk">second run</div>
                <div className="evidence-point">
                  Composer, clean window, walks the file you already wrote
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "no-check-no-merge",
    note: (
      <Notes>
        <p>
          If I cannot tell whether the cheap run did the thing, I will pay for
          the wander every time. That is the whole card.
        </p>
        <p>
          A person in review saying do not merge yet is a check. A test the
          agent wrote so it could approve itself is not.
        </p>
        <p>
          If I cannot freeze a check, I do not have a tool yet. I have a vibe. I
          do not merge unread.
        </p>
      </Notes>
    ),
    content: (
      <div className="slide-frame">
        <H1>no check, no merge</H1>
        <p className="sub">
          If you cannot tell whether the cheap run did the thing, you will pay
          for the wander every time. A person saying don&apos;t merge yet is a
          check. A test the agent wrote to approve itself is not.
        </p>
      </div>
    )
  }
];

export const slideCount = slides.length;
