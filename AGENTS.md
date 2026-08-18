## Learned User Preferences

- Real source is allowed on exactly two slides: `the-move` (SQL) and `skill-file` (verbatim SKILL.md). Structured English everywhere else.
- Copy in `lib/slides.tsx` is locked to the 19 Aug 2026 spec. Do not restyle claims as taxonomies, glossaries, or two-camps tables.
- Prefer a Vercel-like cool-black dark theme with Geist (Sans/Mono), spare blue signal accent, and restrained chrome—not warm charcoal/orange product UI.
- Dim red (`--danger-dim`) is allowed only for: chart bar 2, two-maxes run-2 dot, and the depreciation line below zero.
- Avoid forced card/box grids and taxonomies. First person. No primer. Title slide is name + handle only. No other people's names on slides.
- Evidence lives in speaker notes or a tiny `.evidence` footnote (`two-maxes`, `the-chart`, `depreciation` only). Never a citation block.
- Every scene slide: at most ONE on-screen sentence. The story is spoken. Exceptions: `two-maxes` and `depreciation` are two short stacked lines as written.
- Title slide credits Agrim Singh / @agrimsingh. No AIEWF kicker.
- All diagrams are hand-authored inline SVG. Zero images.

## Learned Workspace Facts

- This workspace is a Next.js slide deck + presenter view (`find-the-move`) for Agrim Singh's 15-minute talk.
- The example is the last-seat race: two people bought the last seat; both requests saw one left; both wrote. The path is taking the seat and checking the seat in the same step. The second buyer gets nothing.
- Spoken arc is exactly 13 slides: `title`, `wander`, `new-chat`, `thesis`, `two-maxes`, `the-move`, `skill-file`, `copied-the-run`, `demo`, `the-chart`, `locked-the-test`, `depreciation`, `close`. One gated holding slide: `demo-fallback`. `slides.filter(s => !s.holding).length === 13`.
- Thesis card H1 is “The failure is paying to find the same move again.” Title slide is only “Find the move.” plus byline. Close is “Find the move once. Never pay for it twice.”
- Chart units are wall-clock minutes (wander 40, re-find 40, replay labeled “a cheap run”). Do not invent dollars or token counts. `[??]` blocks the build.
- Next/prev skip holding slides. Key `d`/`D` jumps to the first holding slide, or off it to the next spoken.
- PartyKit / multiplayer stays inert. `localStorage` slide index is enough. `npm run dev` / `start` are pinned to hostname `127.0.0.1`.
