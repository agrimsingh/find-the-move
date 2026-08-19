# Find the Move design system

## 1. Atmosphere & identity

The deck is a quiet technical briefing: black canvas, large plainspoken claims, cool-gray evidence, and one blue signal color. Its signature is the alternation between sparse narrative beats and flat, rule-separated operational evidence that remains readable from the back of a room.

## 2. Color

| Role | Token | Value | Usage |
| --- | --- | --- | --- |
| Canvas | `--background` | `#000000` | Full-screen stage |
| Text | `--foreground` | `#fafafa` | Headlines and primary copy |
| Secondary text | `--muted` | `#a1a1aa` | Supporting sentences and visible navigation labels |
| Tertiary text | `--faint` | `#71717a` | Nonessential metadata only |
| Surface | `--card`, `--card-2`, `--card-3` | `#0a0a0a` to `#111111` | Presenter and legacy panel surfaces |
| Divider | `--border`, `--border-strong` | translucent white | Flat row and section separation |
| Signal | `--signal`, `--accent` | `#0070f3` | The row or decision the speaker wants the audience to notice |

Blue is a signal, not decoration. Meaningful audience labels never use `--faint`; faint text is reserved for metadata that may disappear without changing the argument.

## 3. Typography

Geist Sans carries narrative copy and Geist Mono carries code, metrics, and overlines.

| Level | Size | Weight | Line height | Usage |
| --- | --- | --- | --- | --- |
| Display | `clamp(48px, 6.2vw, 72px)` | 600 | 1.02 | Sparse thesis slides |
| Slide title | `clamp(36px, 4.4vw, 52px)` | 600 | 1.08 | Compact evidence and workflow slides |
| Body | `clamp(22px, 2.2vw, 26px)` | 400 | 1.35 | Audience explanations |
| Data label | 20px | 600 | 1.25 | Model and comparison labels |
| Data value | 20px minimum | 500 | 1.3 | Time, cost, and correctness readouts |
| Navigation label | 15px minimum | 500 | 1.3 | Kicker and criteria labels |
| Metadata | 12px | 500 | 1.4 | Footer and nonessential chrome |

Headlines use tight negative tracking. Data uses tabular or monospaced figures. Explanatory slide copy uses complete sentences; fragments are limited to code, kickers, labels, and numbered prompts.

## 4. Spacing & layout

The base unit is 4px. The audience canvas uses a 1200px maximum content width with 64px horizontal and 56px/72px vertical stage padding. Compact slides are optically centered. Evidence uses flat grids with 24–32px gaps and 20–28px row padding. Browser mechanics such as `clamp()`, percentages, and `minmax()` remain intrinsic rather than tokenized.

## 5. Components

### Slide frame

- **Structure:** stage shell containing a kicker, one takeaway headline, one evidence composition, and optional subcopy.
- **Variants:** sparse, compact, code, visual.
- **Accessibility:** all visible text remains real DOM text; images have descriptive alt text; no required meaning depends only on blue.
- **Motion:** one 180ms opacity/translate entry; the deck remains usable with animation disabled.

### Definition list

- **Structure:** label column plus a full-sentence explanation separated by horizontal rules.
- **Variants:** default workflow, benchmark method, price/result.
- **Layout:** labels are navigation-bearing content and use the navigation-label floor.

### Benchmark comparison

- **Structure:** two task columns, each with three aligned model rows and explicit time/cost/check fields.
- **Variants:** one blue-highlighted route per task.
- **Layout:** the same field order and baseline repeat across both columns so the audience can compare without reading prose.

### Cost contrast

- **Structure:** one large discovery value, one directional arrow, and one large replay value, followed by a bounded-method sentence.
- **Variants:** none; this is the single money slide.
- **Accessibility:** labels explain the values; the contrast is not carried by color alone.

### Visual story slide

- **Structure:** full-bleed image with left-aligned headline and sentence caption over a dark scrim.
- **Layout:** the scrim must cover the complete copy measure at every viewport.

## 6. Motion & interaction

Slide entry uses 180ms ease-out opacity and vertical translation. Navigation progress uses a 220ms width transition. Motion never carries meaning, and `prefers-reduced-motion` may disable it without loss.

## 7. Depth & surface

The deck uses a borders-only strategy for evidence and image depth for story beats. No card shadows are added. A faint radial blue atmosphere may sit behind the black canvas, while all evidence remains flat and high contrast.

## 8. Accessibility constraints & accepted debt

The target is WCAG 2.2 AA. Primary text must meet 4.5:1 contrast, large text 3:1, keyboard navigation must reach every control, and no body copy may fall below 16px. Projection-bearing labels use at least 15px and `--muted` or brighter.

Accepted debt: the legacy stylesheet contains unused selectors from earlier deck versions. They are outside this content revision and should be removed in a dedicated behavior-preserving cleanup.
