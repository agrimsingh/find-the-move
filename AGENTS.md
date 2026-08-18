## Learned User Preferences

- Keep presentation rigor via a claim, a scene, and the how on the card. Do not turn cards into taxonomies, glossaries, or two-camps tables.
- Prefer humanized, opinionated slide and speaker-note copy. Claim is already the slide. Do not add a subtitle that restates it, a takeaway footer, or a recap landing.
- Prefer a Vercel-like cool-black dark theme with Geist (Sans/Mono), spare blue signal accent, and restrained chrome—not warm charcoal/orange product UI.
- Avoid sparse slides with large empty regions; tighten composition so content occupies the frame purposefully. Scene slides are the exception: one sentence, then space.
- Avoid forced card/box grids; de-card or use layout patterns that do not feel like dashboard tiles unless the card earns its keep.
- Title slide should credit Agrim Singh / @agrimsingh. No AIEWF kicker. First person. No other people's names on slides or in notes.
- The room already knows what a skill is. Do not add slash-command or primer slides. Meat is the token move.
- Copy in `lib/slides.tsx` is re-locked to the 13-spec. Scene slides carry at most ONE on-screen sentence; the story lives in notes and is never mirrored on the card. Exceptions: `two-maxes` and `depreciation` are two short stacked lines as written (depreciation copy is not in yet).
- Real source is allowed on exactly two slides: `the-move` (SQL) and `skill-file` (verbatim SKILL.md). Structured English everywhere else.
- Evidence attributions go in notes or a tiny `.evidence` footnote, never a citation block. Do not put the source URL on the slide.
- Every scene slide carries at most ONE on-screen sentence. Story is spoken, never mirrored. Exceptions: two-maxes and depreciation are two short stacked lines as written.
- Diagrams are hand-authored SVG in the slide components. No `<img>`, no generated images. One accent (`--accent` / #0070f3). Dim red (`--danger-dim`) is reserved for run-2 / paid-twice / depreciation — that is the only second color.

## Learned Workspace Facts

- This workspace is a Next.js slide deck + presenter view (`find-the-move`) for Agrim Singh's 15-minute talk.
- The example is the last-seat race: two people bought the last seat; both requests saw one left; both wrote. The path is taking the seat and checking the seat in the same step. The second buyer gets nothing.
- Thesis card H1 is “The failure is paying to find the same move again.” The title slide is only “Find the move.” plus byline.
- Spoken arc is 13 slides (title through close). Demo-fallback is gated (`holding: true`), not a spoken beat. `export const slides` will be 13 once slides 10–13 land. This pass implements 1–9 as the start of that array. Missing ids (see SLIDES-TODO.md): `the-chart`, `locked-test`, `depreciation`, `close`, `demo-fallback`.
- PartyKit / multiplayer stays inert. `localStorage` slide index is enough. `npm run dev` / `start` are pinned to hostname `127.0.0.1`.
- Arrow / space / j / k skip `holding` slides. Key `d` jumps to the first holding slide, or if already on it, advances to the next non-holding slide. `slideCount` / End / progress use the full array length.
