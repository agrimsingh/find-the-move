## Learned User Preferences

- Keep presentation rigor via a claim, a scene, and the how on the card. Do not turn cards into taxonomies, glossaries, or two-camps tables.
- Prefer humanized, opinionated slide and speaker-note copy. Claim is already the slide. Do not add a subtitle that restates it, a takeaway footer, or a recap landing.
- Prefer a Vercel-like cool-black dark theme with Geist (Sans/Mono), spare blue signal accent, and restrained chrome—not warm charcoal/orange product UI.
- Avoid forced card/box grids; de-card or use layout patterns that do not feel like dashboard tiles unless the card earns its keep.
- Title slide should credit Agrim Singh / @agrimsingh. No AIEWF kicker. First person. No other people's names on slides. Evidence lives in notes / a `.evidence` footnote, never a citation block.
- The room already knows what a skill is. Do not add slash-command or primer slides. Meat is the token move.
- Copy is re-locked to the 13-slide spec. Scene slides: at most ONE on-screen sentence. Story lives in notes, never mirrored. Exceptions: `two-maxes` and `depreciation` are two short stacked lines as written.
- Real source is allowed on EXACTLY two slides: `the-move` (SQL) and `skill-file` (verbatim SKILL.md). Structured English everywhere else. `locked-the-test` may show the two-line English check — that is structured English, not a `.ts` file.
- One accent: the existing blue. Dim red (`--danger-dim`) ONLY for: `two-maxes` run-2 dot, `the-chart` bar 2 / paid-twice, `depreciation` line below zero.
- All diagrams are hand-authored SVG in JSX. Zero images. No `<img>`, no generated images.
- Spoken arc is 13 slides (title through close). `demo-fallback` is gated (`holding: true`), not a spoken beat. Presenter `d` jumps to/past fallbacks. Default next/prev never lands on a holding slide.
- The only real number we already have is forty minutes. No invented dollar amounts or token counts. `[??]` blocks the build.

## Learned Workspace Facts

- This workspace is a Next.js slide deck + presenter view (`find-the-move`) for Agrim Singh's talk.
- The example is the last-seat race: two people bought the last seat; both requests saw one left; both wrote. The path is taking the seat and checking the seat in the same step. The second buyer gets nothing.
- Thesis card H1 is “The failure is paying to find the same move again.” The title slide is only “Find the move.” plus byline.
- Spoken ids: `title`, `wander`, `new-chat`, `thesis`, `two-maxes`, `the-move`, `skill-file`, `copied-the-run`, `demo`, `the-chart`, `locked-the-test`, `depreciation`, `close`. Plus one holding slide: `demo-fallback` (`holding: true`). Spoken count is 13 (`filter(!holding)`). Total array length is 14.
- Audience chrome counts spoken slides only (`01/13`). Arrow/space/j/k skip holding slides. Key `d` / `D` jumps to the first holding slide, or from a holding slide to the next non-holding slide.
- `.evidence` is bottom-left, ~11px, 40% opacity mono, ONLY on `two-maxes`, `the-chart`, `depreciation`. SQL keywords use `.kw` (accent blue); comments use `.cm` (40% opacity).
- Chart units are minutes: wander 40, re-find 40, replay is a visibly tiny bar labeled “a cheap run.” Do not invent $ or token counts.
- PartyKit / multiplayer stays inert. `localStorage` slide index is enough. `npm run dev` / `start` are pinned to hostname `127.0.0.1`.
