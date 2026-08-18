## Learned User Preferences

- Keep presentation rigor via a claim, a scene, and the how on the card. Do not turn cards into taxonomies, glossaries, or two-camps tables.
- Prefer humanized, opinionated slide and speaker-note copy (Lee Robinson + Latent Space, not LinkedIn). Claim is already the slide. Do not add a subtitle that restates it, a takeaway footer, or a recap landing.
- Prefer a Vercel-like cool-black dark theme with Geist (Sans/Mono), spare blue signal accent, and restrained chrome—not warm charcoal/orange product UI.
- Avoid sparse slides with large empty regions; tighten composition so content occupies the frame purposefully.
- Avoid forced card/box grids; de-card or use layout patterns that do not feel like dashboard tiles unless the card earns its keep.
- Title slide should credit Agrim Singh / @agrimsingh. No AIEWF kicker. Names of people (swyx, Dex, Osman, Parakhin, Orosz) live in speaker notes only, not on-slide.
- First person on every card. The same failing auth test (auth.spec.ts, expired session, 401, session.ts not the route) runs through the whole deck.

## Learned Workspace Facts

- This workspace is a Next.js slide deck + presenter view (`find-the-move`) for Agrim Singh's 15-minute talk.
- Thesis: The failure is paying to find the same move again. The title slide is only “Find the move.” plus byline; that sentence lives on its own photograph card (`thesis`).
- Spoken arc is exactly 12 slides: `title`, `wander`, `new-chat`, `thesis`, `wrote-the-steps`, `name-to-type`, `command-is-the-command`, `locked-the-test`, `two-lines`, `copied-from-chat`, `deleted-the-recipe`, `dont-merge`.
- Card titles and bodies in `lib/slides.tsx` are locked copy. `wrote-the-steps`, `command-is-the-command`, `locked-the-test`, `two-lines`, and `copied-from-chat` are code-first. `copied-from-chat` is a log-versus-skill code split. `name-to-type` shows `/fix-auth-test` as a typed name, not a slogan.
- PartyKit / multiplayer stays inert. `localStorage` slide index is enough. `npm run dev` / `start` are pinned to hostname `127.0.0.1`.
