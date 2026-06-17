# AFFINE STATIC VISUAL SYSTEM

## INTELLIGENCE, RENDERED

This document defines how Affine should look when nothing is moving.

`DESIGN_LANGUAGE.md` defines the strategic and behavioural system: what Affine means, how it behaves, and why motion matters.

This document defines the static system: colour, type, layout, components, data states, still imagery and interface rendering.

Use both documents together.

- `DESIGN_LANGUAGE.md`: meaning, behaviour, motion, narrative logic
- `STATIC_VISUAL_SYSTEM.md`: palette, typography, density, hierarchy, static UI, still states and product translation of the frontier grammar

If they conflict, preserve the product truth first:

**Affine makes intelligence compound.**

The static system has one central job:

**Make the Recursive Frontier legible without relying on motion.**

Static Affine is not a calmer alternative to the landing field.

It is the landing field rendered as evidence, structure, state and memory.

The app should feel as if the full-bleed frontier has become measurable.

---

## 1. Source Basis

The static system inherits its practical palette and product typography from the public Affine dashboard at `affine.io`, then reinterprets those foundations through the Recursive Frontier grammar defined in `DESIGN_LANGUAGE.md`.

Observed public site foundations:

- product is a dark technical dashboard
- typography uses Inter for sans text
- typography uses IBM Plex Mono for labels, metrics and machine-readable information
- colour is restrained, mostly neutral, with state colours used for evidence
- gold exists, but as selected or validated state, not decoration
- blue exists as an informational/accent state, not a generic AI gradient
- UI density is high, calm and instrument-like

The static system may evolve beyond the public dashboard, but should not abandon these foundations without a deliberate brand decision.

### Strategic Update

The selected landing field direction is the strongest expression of Affine's identity.

The static system should therefore no longer treat field aesthetics as a landing-only exception.

Instead:

- carbon becomes the operating environment of the mechanism
- bone becomes the readable evidence layer
- mono type becomes the measurement layer
- spectrum becomes unresolved candidate matter
- gold becomes inherited validation
- charts, tables and rows become instrumented versions of strands, pressure, resolution and memory

The public dashboard foundations provide restraint.

The Recursive Frontier provides identity.

Both are required.

---

## 2. Static Character

Static Affine should feel:

- exact
- measured
- quiet
- instrumented
- cumulative
- technical without becoming generic SaaS
- precious without becoming luxurious
- alive through structure, not illustration

Static Affine should not need motion to be recognisable.

Even in a still screenshot, a viewer should sense:

- independent candidates
- shared evaluation pressure
- selected evidence
- inherited progress
- a frontier that can move again

### Static Translation Matrix

The motion system says: **DIVERGE → ALIGN → RESOLVE → INHERIT → REOPEN**.

The static system must express the same sequence without animation.

| Motion idea | Static rendering | Avoid |
| --- | --- | --- |
| Diverge | multiple candidate traces, rows, alternatives, columns or inputs | random particles with no role |
| Align | shared grid, threshold, baseline, axis, rubric or evaluation frame | decorative symmetry |
| Resolve | one clearer path, selected row, champion marker, boundary crossing | making every positive state gold |
| Inherit | persistent trace, lineage marker, previous champion reference, retained benchmark | isolated winner with no memory |
| Reopen | next queue, challenger field, unresolved candidates, empty slots | a finished trophy composition |

If a static composition cannot express at least two of these ideas, it is probably too decorative or too generic.

### Static Frontier Primitives

Every static surface should be assembled from the same primitives as the moving field.

| Primitive | Static rendering | Product examples |
| --- | --- | --- |
| Candidate matter | unresolved rows, traces, muted points, challenger lines | miners, submissions, models, open challenges |
| Evaluation pressure | axis, threshold, rubric, filter, benchmark frame | SWE-bench boundary, leaderboard criterion, contest requirement |
| Interference | overlapping traces, split deltas, ambiguous state | close challengers, conflicting benchmark results |
| Reinforcement | heavier line, repeated success mark, positive sequence | improving benchmark series, stable high-scoring miner |
| Recession | faded row, failed trace, greyed history, negative state | stale candidate, rejected run, regressed model |
| Resolution | selected row, champion marker, clarified frontier | current winner, selected capability, highest validated state |
| Inheritance | gold line, lineage marker, retained baseline | frontier threshold, previous champion carried forward |
| Reopening | empty candidate slot, next queue, unresolved future column | next epoch, pending miner, open benchmark |

Static design should prefer these primitives over generic components.

A table row is not just a table row.

It is a candidate, a memory, a winner, a failed path or an inherited state.

A chart line is not just a chart line.

It is a trajectory under pressure.

A badge is not just a label.

It is a state in the mechanism.

### Expression Modes

Static Affine has four expression modes.

| Mode | Use | Static character | Frontier translation |
| --- | --- | --- | --- |
| Field Mode | landing, brand stills, social hero, top-level thesis | atmospheric, spatial, full-bleed, evidence at edge | field is shown directly |
| Instrumented Field Mode | network overview, mechanism diagrams, frontier summaries | data-led with visible field structure | field becomes charts, thresholds, lineage, compact field bands |
| Product Instrument Mode | miner tools, tables, filters, configuration, detail pages | dense, calm, scannable, highly comparable | field becomes rows, deltas, axes, state marks and micro-traces |
| Archive Mode | manifesto, docs, history, explainer content | restrained, textual, memory-forward | field becomes strata, retained traces and proof inserts |

Choose one dominant mode per screen.

Do not blend all four at equal intensity.

The more immersive the mode, the stronger the evidence frame must be.

The denser the mode, the more the frontier should appear through precise state decisions rather than decoration.

### Evidence Hierarchy

Every static screen should organise information in this order:

1. Current state: what is true now?
2. Evaluated state: what has been tested?
3. Comparative state: what changed against the prior frontier?
4. Inherited state: what carries forward?
5. Possible state: what can enter next?

This hierarchy is more important than visual novelty.

### Static Design Decision Chain

When designing a static surface, decide in this order:

1. What evidence must be visible?
2. What state does the evidence represent?
3. What hierarchy makes comparison easiest?
4. Which token expresses that state?
5. Which component pattern holds it?
6. What visual richness can be added without hiding the evidence?

Do not start with mood, texture, logo placement or decorative composition.

### Static Design Algorithm

For any new screen, component or still asset, use this sequence.

1. Name the user need.
2. Choose the dominant expression mode.
3. Identify the primary evidence.
4. Identify the frontier primitive: candidate, pressure, interference, reinforcement, recession, resolution, inheritance or reopening.
5. Choose the semantic state token.
6. Choose the component pattern.
7. Decide whether spectrum is permitted.
8. Decide whether gold has been earned.
9. Add visual richness only after the evidence remains legible.
10. Check the screen as a still screenshot.

If step 4 cannot be answered, the visual idea is probably not part of the Affine system.

If step 8 cannot be defended, remove gold.

If step 10 fails, simplify before adding animation.

---

## 3. Colour System

The palette is dark, neutral, evidence-led and frontier-aware.

Colour should be sparse. Most of the interface should be carbon, graphite, bone and muted grey. State colours enter only when they identify evidence, status, pressure or validation.

The landing field proves that Affine can carry richer spectral matter without becoming generic, but only when colour has a role in the mechanism.

The governing rule:

**Neutral structure carries trust. Spectral matter carries unresolved possibility. Gold carries inherited proof.**

### Core Tokens

These tokens are derived from affine.io.

| Role | Token | Value | Use |
| --- | --- | --- | --- |
| Carbon background | `--color-bg` | `#1c1c1c` | Primary page background |
| Deep carbon | `--color-bg-deep` | `#181818` | Deeper bands, recessed areas, charts |
| Surface | `--color-surface` | `#1f1f1f` | Panels, table bodies, static cards |
| Border | `--color-border` | `#ffffff0f` | Default hairlines |
| Subtle border | `--color-border-subtle` | `#ffffff0a` | Internal dividers, low-emphasis rows |
| Hover border | `--color-border-hover` | `#ffffff1a` | Hover, focus, selected affordance |
| Primary text | `--color-fg` | `#e5e5e5` | Main text |
| Secondary text | `--color-fg-2` | `#a1a1a1` | Labels, secondary copy |
| Tertiary text | `--color-fg-3` | `#e5e5e573` | Metadata, quiet labels |
| Quaternary text | `--color-fg-4` | `#e5e5e540` | Disabled, hints, separators |
| Gold validation | `--color-gold` | `#f3c449` | Proven progress, champion state |
| Information accent | `--color-accent` | `#5ac8fa` | Links, active information, focus |
| Success | `--color-ok` | `#44ff9a` | Passing, improved, available |
| Failure | `--color-bad` | `#ff4747` | Failing, regressed, blocked |
| Activity | `--color-activity` | `#ff9b4e` | Running, pending, in-flight |
| Warning | `--color-warn` | `#f5e663` | Risk, caution, threshold proximity |
| Gold ink | `--color-gold-ink` | `#1a1500` | Text on gold fills |

### Token Architecture

Do not treat the palette as a box of colours.

Use a three-layer token model:

1. Primitive tokens: raw palette values from affine.io.
2. Semantic tokens: what a colour means in Affine.
3. Component tokens: how that meaning appears in a specific UI object.

Example:

```css
--color-gold: #f3c449;
--state-validated-fg: var(--color-gold);
--metric-frontier-line: var(--state-validated-fg);
```

This keeps gold from becoming decoration. A designer should be able to explain the semantic token before using the primitive colour.

### Semantic State Tokens

| State | Foreground | Background | Border | Meaning |
| --- | --- | --- | --- | --- |
| Neutral | `--color-fg-2` | transparent | `--color-border` | Present but unresolved |
| Muted | `--color-fg-3` | transparent | `--color-border-subtle` | Historical, secondary, disabled evidence |
| Focus | `--color-accent` | `rgba(90,200,250,.08)` | `rgba(90,200,250,.45)` | Inspected or selected information |
| Evaluating | `--color-activity` | `rgba(255,155,78,.07)` | `rgba(255,155,78,.35)` | Active pressure, not resolved |
| Passing | `--color-ok` | `rgba(68,255,154,.06)` | `rgba(68,255,154,.25)` | Clears a defined requirement |
| Failing | `--color-bad` | `rgba(255,71,71,.07)` | `rgba(255,71,71,.30)` | Fails or regresses |
| Warning | `--color-warn` | `rgba(245,230,99,.07)` | `rgba(245,230,99,.28)` | Risk near a threshold |
| Validated | `--color-gold` | `rgba(243,196,73,.07)` | `rgba(243,196,73,.40)` | Proven and inherited |

### Product State Semantics

| Product state | Primary colour | Static cue | Gold allowed? |
| --- | --- | --- | --- |
| Current champion | Gold | line, dot, label, selected row | Yes |
| Previous champion | Muted gold or grey | lineage marker, faded label | Limited |
| Challenger | Blue or neutral | focus row, candidate marker | No |
| Evaluating challenge | Orange | live dot, progress bar, pending label | No |
| Passed benchmark | Green | check, positive delta, value colour | No, unless it becomes inherited |
| Failed benchmark | Red | negative delta, failed cell | No |
| Frontier threshold | Gold | horizontal or vertical threshold line | Yes |
| Historical trace | Grey | faded line, low-alpha point | Rarely |
| User action required | Blue or gold | blue for inspection, gold for entering mechanism | Sometimes |
| System warning | Warning yellow | caution label | No |

### Extended Static Values

Use these sparingly when a warmer or more dimensional still composition is needed.

| Role | Value | Use |
| --- | --- | --- |
| Absolute black | `#000000` | Rare overlays, chart fade masks |
| Mark black | `#0a0a0a` | Light-mode symbol fill |
| Cool evidence | `#9bb2c8` | Secondary chart structure |
| Muted cool text | `#7ca7d0` | Low-emphasis blue labels |
| White 03 | `rgba(255,255,255,.03)` | Subtle row fill |
| White 04 | `rgba(255,255,255,.04)` | Hover fill |
| White 06 | `rgba(255,255,255,.06)` | Active fill |
| Gold 04 | `rgba(243,196,73,.04)` | Validated area tint |
| Gold 07 | `rgba(243,196,73,.07)` | Selected row tint |
| Gold 15 | `rgba(243,196,73,.15)` | Strong validation surface |
| Accent 08 | `rgba(90,200,250,.08)` | Informational selected surface |

### Field-Only Spectrum Values

These values are not ordinary product UI tokens.

They are frontier-material tokens.

They are permitted anywhere the design is representing unresolved candidate matter, but their intensity depends on the expression mode.

| Role | Value | Use |
| --- | --- | --- |
| Frontier cobalt | `#3d73e8` | Deep unresolved trajectory material |
| Frontier violet | `#7666f5` | Volumetric possibility before evaluation |
| Frontier magenta | `#e85aa0` | Interference, phase separation, unstable candidate matter |

Use these values only when the composition also preserves the instrumented frame: lockup, evidence, benchmark state, coordinates, champion or other proof.

They must not replace the semantic state colours for product surfaces.

### Spectrum By Mode

| Mode | Spectrum permission | Constraint |
| --- | --- | --- |
| Field Mode | high | must show pressure, convergence, recession or inheritance |
| Instrumented Field Mode | medium | must be tied to charts, frontier bands, lineage or active comparison |
| Product Instrument Mode | low | use as tiny traces, spark lines, selection accents or unresolved candidate marks only |
| Archive Mode | low to medium | use as retained trace or conceptual field fragment, not decoration |

Spectrum should usually recede into semantic state colour as evidence becomes clearer.

Example:

- violet/cobalt/magenta for unresolved candidates
- orange for active evaluation
- green for passing a defined criterion
- red/grey for failed or receding paths
- blue for inspected information
- gold only for validated inheritance

If a product surface is mostly violet, it is probably no longer an instrument.

If a field surface has no spectral variation, it may not be showing enough divergence.

### Colour Meaning

**Carbon**

Default world. Use it as the environment of the mechanism.

Carbon should carry:
- dashboards
- product surfaces
- navigation
- tables
- charts
- data-heavy pages

**Bone**

The readable layer. Use `#e5e5e5` and its reduced-opacity variants for text, lines and structure.

Bone should feel technical and archival, not creamy or nostalgic.

**Gold**

Gold means validated progress.

Use gold for:

- champion state
- selected frontier
- inherited result
- successful advancement
- evidence that has survived evaluation
- primary actions only when the action enters or advances the mechanism

Do not use gold for:

- generic decoration
- every button
- all headings
- luxury styling
- background washes
- ornamental borders
- ambient page glow

**Blue**

Blue means information, focus or navigational activation.

Use blue for:

- links
- focus rings
- informational highlights
- selected non-final states
- live inspection affordances

Do not use blue as:

- generic AI atmosphere
- broad gradients
- hero decoration
- emotional brand colour

**Frontier Spectrum**

Cobalt, violet and magenta may appear in the landing field when they behave as unresolved candidate material.

Use frontier spectrum for:

- field depth
- diverging candidate strands
- interference before evaluation
- memory traces that have not resolved into state
- controlled still captures of the moving frontier

Do not use frontier spectrum for:

- tables
- buttons
- navigation
- product metrics
- generic backgrounds
- decorative purple-blue AI gradients

In still compositions, frontier spectrum should either sit behind evidence or visibly give way to semantic state colour and gold. It should never be the whole identity by itself.

**Green**

Green means passing, available or improved.

Use green only when a state has objectively cleared a condition.

**Red**

Red means failed, regressed or blocked.

Use red plainly. Do not dramatise it.

**Orange**

Orange means running, pending or active pressure.

It is useful for "currently being evaluated" or "not yet resolved".

**Yellow Warning**

Warning yellow is caution, not validation.

Keep it visually distinct from gold.

---

## 4. Colour Ratios

For most product screens:

- 70-85% carbon and graphite
- 10-20% bone and grey information
- 3-8% state colour
- 1-3% gold

For landing or brand moments:

- the field may be visually richer
- frontier spectrum may be present as unresolved candidate matter
- semantic state colours should emerge when evaluation becomes legible
- gold still remains earned
- broad full-page gold washes are not allowed
- colour must reveal system state, not mood alone

For dense data tables:

- backgrounds should be nearly neutral
- state colour should live in small marks, labels, bars or numbers
- row backgrounds should rarely exceed 7-8% chroma

For Instrumented Field screens:

- 60-75% carbon and graphite
- 10-20% bone and grey information
- 5-12% frontier spectrum or chart state
- 1-3% gold
- spectral colour should usually live in chart matter, not chrome

For Product Instrument screens:

- 75-90% carbon and graphite
- 8-18% bone and grey information
- 2-6% state colour
- 0.5-2% gold
- spectral colour should be almost entirely trace-level

---

## 5. Typography

The static product system uses:

- Sans: `Inter`
- Mono: `IBM Plex Mono`
- Display: `Instrument Serif` for approved field-led brand moments

Fallbacks:

```css
--font-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-mono: "IBM Plex Mono", "JetBrains Mono", monospace;
--font-display: "Instrument Serif", Georgia, serif;
```

### Typeface Roles

| Role | Canonical family | Current mockup-compatible family | Use |
| --- | --- | --- | --- |
| Product sans | Inter | Geist | UI copy, buttons, navigation, product titles |
| Product mono | IBM Plex Mono | Geist Mono | metrics, labels, hashes, benchmark evidence |
| Display | Instrument Serif | Instrument Serif | landing thesis, manifesto pull statements, sparse conceptual headings |

Inter and IBM Plex Mono remain the production baseline because they come from `affine.io`.

Geist and Geist Mono are acceptable in the current mockup as close interface substitutes, but they should not become the canonical product type system unless the brand intentionally chooses that later.

Instrument Serif is canonical for the field-led display voice.

### Sans Usage

Use Inter for:

- primary UI text
- body copy
- navigation
- buttons
- titles in product surfaces
- table names and model names
- explanatory static content

Inter should feel clean, stable and low-friction.

Avoid exaggerated tracking in sans text. Use tight or neutral spacing for readable UI.

### Mono Usage

Use IBM Plex Mono for:

- benchmark codes
- hashes
- addresses
- environment names
- timestamps
- labels
- metric values
- compact captions
- section metadata
- chart annotations

Mono text should make the system feel measured.

It should not become decorative code cosplay.

### Display Type

Display typography may be introduced for high-level brand or landing moments, but it is not the product baseline.

If a display face is used:

- reserve it for first-impression moments
- keep product data in Inter and IBM Plex Mono
- do not let display type reduce legibility
- do not use it inside dense tables, controls or miner tools
- do not use it as a substitute for information hierarchy

The static product system remains sans + mono.

### Affine Display Voice

Affine may use `Instrument Serif` as the display voice for field-led brand moments.

This is the role of the current landing phrase:

**Mine open reasoning**

The display voice is allowed because it creates a useful contrast:

- the field is complex and alive
- the frame is technical and measured
- the display line makes the human thesis legible
- the mono/data layer keeps the claim accountable

Use:

```css
--font-display: "Instrument Serif", Georgia, serif;
```

Use `Instrument Serif` for:

- landing thesis lines
- manifesto pull statements
- mechanism page chapter titles
- sparse conceptual headings
- the "Mine open xxx" construction

Do not use `Instrument Serif` for:

- tables
- metrics
- hashes
- buttons
- form controls
- benchmark labels
- miner workflow instructions
- dense product navigation

### "Mine Open Xxx" Construction

The phrase structure is part of the static brand system.

Pattern:

```text
Mine open [capability]
```

Approved examples:

- Mine open reasoning
- Mine open intelligence
- Mine open deduction
- Mine open abduction
- Mine open cognition

Rules:

- `Mine open` remains plain display text
- the capability word may be italic
- the capability word may carry a controlled spectrum treatment in landing/field contexts
- the capability word may pass through brief symbolic resolution in motion contexts
- the final static fallback must always resolve to a readable word
- the phrase must never remain a random glyph string in static output
- static screenshots should preferentially capture the resolved word when used for official assets
- on mobile, prefer the stable phrase `Mine open reasoning`

The construction works because it states the product thesis as an action: intelligence becomes a mineable, measurable open process.

It should feel poetic, but it must remain exact.

### Display Spectrum Treatment

A spectrum treatment may be used on the capability word only when it expresses plurality resolving through the field.

Allowed:

- restrained multi-hue text on the capability word
- slow shimmer in motion contexts
- static gradient that remains readable
- colour sequence that feels like candidate diversity

Not allowed:

- broad page gradients
- purple-blue AI glow
- rainbow decoration across whole headings
- gradient on every display title
- gradient on product metrics

If the display word becomes less readable than plain text, remove the treatment.

---

## 6. Type Scale

Use small, precise type by default.

### Product UI

| Role | Size | Weight | Line Height | Notes |
| --- | --- | --- | --- | --- |
| Micro label | 9-10px | 500 | 1.1-1.3 | Uppercase mono or sans |
| Metadata | 10-11px | 400-500 | 1.3-1.5 | Mono preferred |
| Table value | 11-12px | 400-500 | 1.3-1.5 | Tabular numerals |
| Body small | 12-13px | 400 | 1.5-1.625 | Product helper text |
| Body | 14-16px | 400 | 1.5-1.625 | Longer explanation |
| Section title | 12-14px | 500-600 | 1.1-1.25 | Often uppercase |
| Product title | 20-26px | 500-600 | 1.1-1.25 | Sparse use |
| Brand title | 36-64px | 400-600 | .95-1.1 | Landing/editorial only |

### Tracking

Use tracking intentionally:

- body text: `0` to `-.015em`
- product titles: `-.025em` max
- section labels: `.08em` to `.2em`
- mono labels: `.06em` to `.16em`

Avoid negative letter spacing beyond `-.025em`.

Avoid wide tracking on long phrases.

---

## 7. Numerals And Data Text

All numerical metrics should use tabular numerals.

Use:

```css
font-variant-numeric: tabular-nums;
font-feature-settings: "tnum";
```

Numbers should align in tables and metric strips.

Do not mix decorative display numerals into product metrics.

---

## 8. Layout And Density

Affine static layouts should feel like instruments, not brochures.

Default product layout:

- max content width: up to `1680px`
- page padding: `20px` mobile, `32-40px` desktop
- section gaps: `48-64px`
- panel padding: `16-24px`
- table row height: compact, usually `36-48px`
- controls: compact, predictable, close to the data they affect

### Grid Logic

Use grids for:

- benchmark comparisons
- metric groups
- tables
- lineage views
- challenge queues
- environment status

Use freeform composition for:

- landing field
- brand stills
- conceptual diagrams

Even freeform compositions need alignment anchors.

### White Space

Affine should be spacious enough to feel consequential, but never padded like a marketing template.

Use space to create:

- comparison
- grouping
- hierarchy
- calm

Do not use space to make thin content feel premium.

### Static Information Hierarchy

Use five levels of static hierarchy.

| Level | Visual treatment | Use |
| --- | --- | --- |
| Level 1 | largest text or clearest data object | current champion, main thesis, selected frontier |
| Level 2 | strong label, selected row, primary chart line | active section or active comparison |
| Level 3 | ordinary table values and body text | supporting data |
| Level 4 | muted mono metadata | hashes, timestamps, context |
| Level 5 | faint dividers, inactive traces | memory, scaffolding, inactive structure |

Never use size alone for hierarchy.

Pair size with:

- position
- contrast
- grouping
- state token
- alignment
- proximity to evidence

### Mode Rendering Rules

The four expression modes are defined in Section 2.

This section defines how they affect layout density.

| Mode | Density | Primary structure | Frontier visibility | Failure mode |
| --- | --- | --- | --- | --- |
| Field Mode | sparse to medium | full-bleed field, perimeter proof | direct and atmospheric | wallpaper or spectacle |
| Instrumented Field Mode | medium to high | charts, bands, diagrams, proof groups | visible but bounded | unreadable data theatre |
| Product Instrument Mode | high | tables, filters, axes, controls | trace-level and semantic | generic admin dashboard |
| Archive Mode | low to medium | text, strata, proof inserts | memory and causality | pitch deck or mysticism |

Use the mode to decide how much visual atmosphere a screen can carry.

Field Mode may lead with sensation because the mechanism itself is being introduced.

Instrumented Field Mode may use visible field material, but only inside structures that explain evaluation.

Product Instrument Mode should almost never use atmospheric background treatment. Its frontier grammar lives in state, hierarchy, traces, thresholds and lineage.

Archive Mode should preserve memory and argument. It may borrow field fragments, but it should not become a second landing page.

One mode must dominate.

Secondary modes may appear only as local moments.

---

## 9. Borders, Panels And Surfaces

Static UI should be hairline-first.

### Borders

Default border: `1px solid var(--color-border)`.

Use borders for:

- section division
- table structure
- chart frames
- selected candidates
- panel boundaries

Avoid heavy outlines.

Avoid bright borders unless they indicate state.

### Panels

Default panel:

```css
background: var(--color-surface);
border: 1px solid var(--color-border);
border-radius: 8px;
```

Panel radius should usually be `4-8px`.

Do not use large rounded cards as the main page language.

Do not nest cards inside cards.

### Recessed Areas

Use `--color-bg-deep` for areas that should feel behind the current plane:

- chart beds
- inactive panels
- historical traces
- low-priority logs

---

## 10. Component Rules

Components are frontier translations.

Do not design them as generic UI objects first.

Start by deciding which part of the mechanism the component represents:

- candidate
- pressure
- comparison
- resolution
- inheritance
- reopening
- frame

Then choose the component treatment.

### Component Translation Matrix

| Component | Frontier role | Required static cues |
| --- | --- | --- |
| Table row | candidate, memory, winner or failed path | state mark, value, comparison, lineage when relevant |
| Chart line | trajectory under pressure | labelled axis, threshold, line state, current/inherited distinction |
| Metric chip | evidence unit | label, value, state, whether current or inherited |
| Badge | compact state | semantic colour, plain label, no decorative fill |
| Panel | measuring frame | clear title, bounded evidence, restrained border |
| Filter | evaluation lens | what changes in comparison, not just active styling |
| Empty slot | reopening | what can enter next, not generic emptiness |
| Primary action | entering or advancing mechanism | gold only when the action is truly mechanism-advancing |

This prevents the product from becoming a normal dashboard with a dramatic homepage attached.

### Header

Headers should be compact and stable.

Use:

- small mark
- wordmark or product name
- mono subnet/context label
- small icon actions
- restrained bottom border

Avoid:

- tall marketing nav
- large hero lockups repeated in product pages
- decorative header glows

### Section Headers

Section headers should be functional.

Use:

- uppercase label
- thin divider
- optional toggle
- optional status text
- compact control group

The section title should not compete with the data.

### Buttons

Primary button:

- gold fill only for mechanism-entry or mechanism-advancing actions
- text should use gold ink `#1a1500`
- compact height
- radius `6px` or pill only when the surrounding system already uses pills

Secondary button:

- transparent or low-opacity white fill
- border or hover fill
- text `--color-fg-2` or `--color-fg`

Icon button:

- square `28-36px`
- muted default
- hover with low-opacity white or blue/gold state

Do not make every call-to-action gold.

### Tables

Tables are a core Affine surface.

Use:

- compact rows
- tabular numerals
- sticky or persistent section context on mobile
- subtle row dividers
- state colour in small marks or cells
- selected row tint no stronger than 7-8%
- frontier state expressed through row hierarchy, not decorative glow
- historical or failed paths as lower-contrast rows that remain readable
- inherited/champion state as a precise gold mark, line or label

Avoid:

- zebra striping with high contrast
- large card rows for dense data
- centred text in columns that need comparison
- decorative icons in every row
- applying spectrum across whole rows unless the row is explicitly unresolved candidate matter

### Metric Strips

Metric strips should read as evidence.

Use:

- mono codes
- tight spacing
- tabular values
- small status dot only when needed
- gold only for champion or inherited state
- prior/current/frontier separation when space allows
- tiny spectral or orange activity marks only for unresolved/evaluating states

On mobile:

- wrap metrics into a grid
- hide nonessential separators
- preserve values over labels when space is tight

### Charts

Charts should make evaluation legible.

Use:

- dark chart bed
- bone gridlines at very low opacity
- gold for champion/frontier
- blue for focus/selection
- green/red for objective pass/fail
- orange for in-flight
- faded grey for historical or failed traces
- frontier spectrum for unresolved candidate trajectories before they resolve
- gold only after the chart shows why the path earned inheritance
- failed/stray paths that visibly recede rather than vanish without explanation
- inherited baselines that remain visible after a new comparison starts

Avoid:

- rainbow defaults
- meaningless area fills
- glossy chart gradients
- unlabeled motion trails in static export
- chart colour that cannot be explained as candidate, pressure, result or memory

### Benchmark Rendering

Benchmarks are not decoration. They are the proof layer.

Static benchmark displays should include:

- environment code
- current value
- prior or threshold reference
- direction of change
- pass/fail or unresolved state
- whether the value is inherited

Gold belongs to the frontier threshold or inherited champion, not every high number.

Use green for an improvement that has not yet become inherited.

Use gold only once the improvement becomes the new validated state.

In Instrumented Field Mode, benchmark charts may carry visible strand logic:

- multiple candidate traces may enter a benchmark frame
- the threshold or frontier should create visible pressure
- failed paths may continue as muted memory
- the inherited winner should be gold and retained
- the next challenger queue should reopen the composition

In Product Instrument Mode, the same logic should become compact:

- small row marks
- deltas
- state labels
- threshold ticks
- lineage links
- minimal trace sparklines

### Frontier Line Grammar

The frontier can be rendered as:

- a gold line
- a gold dot
- a selected row
- a boundary marker
- a threshold axis
- a champion label

The frontier should not be rendered as:

- a general glow
- a decorative halo
- a full chart background
- a trophy icon

### Lineage Rendering

Lineage should show memory.

Use:

- chronological rows
- faint previous frontier lines
- small champion markers
- inherited deltas
- connected but low-contrast traces

Avoid:

- isolated snapshots
- winner cards with no prior state
- charts where history and current state look equally active

### Badges

Badges should be small and semantic.

Use:

- text 9-11px
- mono for technical codes
- low-opacity background
- border when needed

Badge colour should map to state meaning.

Do not use badges as decoration.

### Component Dimensions

These are defaults, not ornamental rules.

| Component | Desktop | Mobile | Notes |
| --- | --- | --- | --- |
| Header height | 48-56px | 44-52px | Keep stable and compact |
| Icon button | 28-36px square | 32-40px square | Touch targets can be larger than visible icon |
| Primary button | 32-40px high | 36-44px high | Gold only for mechanism action |
| Table row | 36-48px | 40-52px | Increase only for touch or wrapping |
| Metric chip | 24-30px high | wrap into grid | Do not truncate critical values |
| Panel radius | 4-8px | 4-8px | Avoid inflated soft cards |
| Chart frame | hairline border | hairline border | Axis and threshold must remain legible |
| Section gap | 48-64px | 36-48px | Product density over marketing air |

### Component Acceptance Rules

Before accepting a component:

- it must have a clear state
- its colour must map to that state
- it must be readable without hover
- it must preserve comparison
- it must not make gold decorative
- it must not rely on animation to explain itself
- it must collapse responsibly on mobile

If a component fails these checks, simplify it before restyling it.

---

## 11. Static Field Rendering

The Frontier Field can exist as a still image or static background.

It can also exist in reduced form inside charts, lineage views, benchmark strips and mechanism diagrams.

The field is not only a background style.

It is the visual source of the whole system.

In static form it should show:

- a structured field
- multiple candidate traces
- pressure or convergence
- a selected or inherited path
- residual memory

It should not become:

- a starfield
- random particles
- generic AI mesh
- wallpaper
- pure atmosphere

### Still Field Composition

Good static field:

- dark carbon base
- low-opacity candidate matter
- faint grid or boundary logic
- one clearer resolving trace
- restrained gold only at the validated point or path

Bad static field:

- gold bloom over the whole image
- evenly distributed sparkles
- colourful particle soup
- no visible selection
- no evidence of inheritance

### Static Field Layers

A still field should be built in layers.

1. Carbon base: the dark operating environment.
2. Candidate matter: low-alpha traces, points, fibres or paths.
3. Evaluation structure: grid, boundary, pressure zone, threshold or axis.
4. Resolution: one clearer path, selected point or frontier shift.
5. Memory: faint residue showing what was inherited.
6. Reopening: unresolved candidates or empty future slots.

Do not skip directly from carbon base to pretty particles.

### Reduced Field Rendering

When the field appears inside product pages, reduce scale before reducing meaning.

Keep:

- candidate traces
- pressure or threshold
- selected/inherited state
- memory of weaker paths
- reopening to future candidates

Reduce:

- atmospheric opacity
- camera-like depth
- chromatic spread
- continuous animation
- decorative density

Good reduced field:

- a chart where spectral challenger traces approach a gold inherited frontier
- a benchmark row with a tiny unresolved trace that resolves into a state label
- a lineage strip where previous champions remain as faint strata
- a mechanism diagram where divergence visibly feeds an evaluation frame

Bad reduced field:

- a purple background behind a table
- a decorative particle strip with no benchmark meaning
- a gold glow around a panel
- a chart with pretty lines but no pressure, selection or memory

### Still Field Cropping

Use crop to imply scale and process.

Good crops:

- a path leaving frame after validation
- a field boundary partly outside the viewport
- candidate matter entering from one side
- a selected point with residual traces behind it

Bad crops:

- centred abstract burst
- logo floating over particles
- symmetrical wallpaper
- visual activity with no frontier or threshold

### Still Field And Text

When placing text over a field:

- text must sit over a calm region
- use a carbon veil when needed
- avoid placing microtext directly over particle clusters
- never let field brightness compete with benchmark evidence
- gold field elements must not sit behind gold text

The field supports meaning. It does not get to damage legibility.

---

## 12. Logo And Mark Usage

The Affine mark is the seal of the mechanism.

Static usage:

- small in navigation
- clear in document covers
- simple in favicons/social avatars
- black on light
- white or gold/white on dark when needed

Minimum practical sizes:

- favicon/avatar: mark only
- nav: mark `18-24px`
- document header: mark `24-36px`
- cover/title page: mark may be larger, but must not replace the field logic

Do not:

- use a large central logo as the default hero answer
- place the mark over busy data without contrast
- turn the mark into a decorative pattern
- render it as occult symbolism
- use ornamental gold effects on the mark

---

## 13. Page Mode Map

Use this map before designing or reviewing a page.

Detailed page recipes are defined in Section 21.

| Page / surface | Dominant mode | Secondary mode | Primary responsibility |
| --- | --- | --- | --- |
| Landing | Field Mode | Instrumented proof at the perimeter | make the Recursive Frontier felt immediately |
| Network | Instrumented Field Mode | Product Instrument Mode for dense tables | make frontier state, challengers and benchmark evidence legible |
| Mine | Product Instrument Mode | Instrumented Field Mode for evaluation context | make participation, requirements and state obvious |
| Mechanism | Instrumented Field Mode | Archive Mode for explanation | make the causal system understandable |
| Manifesto | Archive Mode | controlled Field Mode moments | make the worldview durable and exact |
| Static social / brand asset | Field Mode or Archive Mode | proof insert when useful | express one thesis without abandoning evidence |
| Detail tables / logs | Product Instrument Mode | none unless the data requires lineage | support repeated technical comparison |

If a page starts to need a different dominant mode, that is a system decision, not a local styling decision.

---

## 14. Still Marketing And Social Assets

Static marketing assets should not abandon product truth.

Use:

- carbon background
- Affine mark
- one decisive line of copy
- field trace or evidence structure
- gold only for validated state
- mono caption or proof point when useful

Avoid:

- motivational posters
- crypto hype visuals
- generic AI gradients
- luxury black-and-gold styling
- unexplained particles
- logo-only compositions with no system behaviour

Every still asset should be able to answer:

What is being aligned?

What has been validated?

What is inherited?

---

## 15. Accessibility And Contrast

Primary text must remain readable on carbon.

Rules:

- `--color-fg` on `--color-bg` for primary copy
- `--color-fg-2` for secondary copy only
- `--color-fg-3` for metadata, never critical instructions
- `--color-fg-4` for disabled or decorative structure only
- do not place small grey text on field imagery without a backing layer
- gold text on dark is acceptable for short labels, not long copy
- text on gold should use `#1a1500`

Do not rely on colour alone for critical states.

Pair colour with:

- label
- icon
- position
- line weight
- row grouping
- value sign

---

## 16. Responsive Static Behaviour

Mobile should preserve meaning, not squeeze desktop density.

On mobile:

- hide nonessential navigation
- wrap metrics into grids
- reduce section chrome
- keep champion/frontier evidence visible
- preserve numbers over decorative labels
- avoid horizontal scrolling unless the content is truly tabular
- keep headline text stable if animation would create overflow

Desktop may carry more density.

Mobile should carry the thesis.

---

## 17. Implementation Tokens

Recommended baseline CSS tokens:

```css
:root {
  --font-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-mono: "IBM Plex Mono", "JetBrains Mono", monospace;

  --color-bg: #1c1c1c;
  --color-bg-deep: #181818;
  --color-surface: #1f1f1f;
  --color-border: #ffffff0f;
  --color-border-subtle: #ffffff0a;
  --color-border-hover: #ffffff1a;

  --color-fg: #e5e5e5;
  --color-fg-2: #a1a1a1;
  --color-fg-3: #e5e5e573;
  --color-fg-4: #e5e5e540;

  --color-gold: #f3c449;
  --color-gold-ink: #1a1500;
  --color-accent: #5ac8fa;
  --color-ok: #44ff9a;
  --color-bad: #ff4747;
  --color-activity: #ff9b4e;
  --color-warn: #f5e663;

  --frontier-cobalt: #3d73e8;
  --frontier-violet: #7666f5;
  --frontier-magenta: #e85aa0;

  --state-neutral-fg: var(--color-fg-2);
  --state-muted-fg: var(--color-fg-3);
  --state-focus-fg: var(--color-accent);
  --state-evaluating-fg: var(--color-activity);
  --state-passing-fg: var(--color-ok);
  --state-failing-fg: var(--color-bad);
  --state-warning-fg: var(--color-warn);
  --state-validated-fg: var(--color-gold);

  --state-focus-bg: rgba(90, 200, 250, .08);
  --state-evaluating-bg: rgba(255, 155, 78, .07);
  --state-passing-bg: rgba(68, 255, 154, .06);
  --state-failing-bg: rgba(255, 71, 71, .07);
  --state-warning-bg: rgba(245, 230, 99, .07);
  --state-validated-bg: rgba(243, 196, 73, .07);

  --candidate-unresolved: var(--frontier-violet);
  --candidate-interference: var(--frontier-magenta);
  --candidate-depth: var(--frontier-cobalt);
  --frontier-inherited: var(--state-validated-fg);
  --frontier-pressure: var(--state-evaluating-fg);
  --frontier-receded: var(--state-muted-fg);

  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-panel: 8px;
  --hairline: 1px solid var(--color-border);
}
```

Recommended utility patterns:

```css
.tabular {
  font-variant-numeric: tabular-nums;
  font-feature-settings: "tnum";
}

.panel {
  background: var(--color-surface);
  border: var(--hairline);
  border-radius: var(--radius-panel);
}

.label-mono {
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 500;
  letter-spacing: .06em;
  text-transform: uppercase;
  color: var(--color-fg-2);
}
```

### Naming Rules

Use semantic names in implementation.

Good:

```css
--frontier-threshold: var(--state-validated-fg);
--challenge-active: var(--state-evaluating-fg);
--benchmark-pass: var(--state-passing-fg);
--candidate-unresolved: var(--frontier-violet);
--candidate-interference: var(--frontier-magenta);
--frontier-inherited: var(--state-validated-fg);
```

Bad:

```css
--yellow-line: #f3c449;
--orange-dot: #ff9b4e;
--green-good: #44ff9a;
```

The name should explain the system role, not just the hue.

### Handoff Requirements

Any static design handed to engineering should include:

- intended expression mode: Field, Instrumented Field, Product Instrument or Archive
- dominant evidence hierarchy
- state token usage
- frontier primitive being represented by each major visual element
- responsive behaviour for dense metric areas
- chart threshold meaning
- gold usage justification
- static fallback for any animated element
- screenshot at desktop and mobile widths

Without these, implementation will drift.

---

## 18. Static Red Flags

Static Affine is failing when it looks like:

- a generic AI dashboard
- a crypto exchange
- black-and-gold luxury branding
- a particle-network template
- a SaaS admin kit
- a cyberpunk interface
- a finance terminal without intelligence logic
- an occult technology brand

Avoid:

- ornamental gold
- broad gold glows
- purple-blue AI gradients
- glowing brains
- literal DNA
- random node webs
- thick card stacks
- oversized rounded rectangles
- fake equations
- static particles with no selection logic
- decorative charts that do not compare anything

---

## 19. Static Design Test

Before accepting any static screen, ask:

1. What is the primary evidence on this screen?
2. What is selected, validated or inherited?
3. Is gold earned?
4. Can the hierarchy be understood without motion?
5. Are type and spacing dense enough to feel technical, but clear enough to scan?
6. Are state colours semantic?
7. Does the layout support comparison?
8. Does the mark anchor identity without replacing the mechanism?
9. Would this still be recognisable as Affine if animation were removed?
10. Which expression mode is dominant?
11. Has the Recursive Frontier been translated at the right intensity?
12. Does it make intelligence compounding more visible?

If the answer is no, revise before adding visual richness.

---

## 20. Static QA Gate

A static Affine screen is not ready until it passes all five gates.

### Gate 1: Meaning

- the screen expresses cumulative intelligence, not generic AI
- the current state is visible
- validated or inherited state is distinct from ordinary positive state
- the mark anchors identity without replacing the mechanism

### Gate 2: Evidence

- the primary evidence is visible without hover
- comparison is possible
- values use tabular numerals
- critical labels do not rely on colour alone
- benchmark/champion/frontier relationships are explicit

### Gate 3: Static Rendering

- the screen works with animation removed
- field imagery has structure, pressure, resolution or memory
- product components still show candidate, pressure, resolution, inheritance or reopening
- gold is scarce and earned
- no particle treatment is merely atmospheric
- still crops preserve the mechanism logic
- animated display text resolves to readable static language
- symbolic resolution is brief and does not affect product data, controls or benchmark evidence

### Gate 4: Usability

- text fits at mobile and desktop widths
- dense areas wrap or scroll intentionally
- interactive targets are clear
- disabled and active states are distinct
- product pages remain scannable by miner/data-savvy users

### Gate 5: Brand Discipline

- palette comes from the Affine system
- typography follows Inter + IBM Plex Mono unless a brand exception is deliberate
- UI density feels instrumented
- the dominant expression mode is clear
- frontier spectrum appears only as unresolved candidate matter
- product pages feel derived from the field without becoming field wallpaper
- no luxury black-and-gold drift
- no purple-blue AI gradient drift
- no occult, biotech, gaming or crypto-casino cues

If any gate fails, do not add polish. Fix the structure first.

### Static Acceptance Checklist

Before shipping a static page, confirm:

- one dominant expression mode is identifiable
- gold has a written reason
- every state colour maps to a state table entry
- every frontier-spectrum use maps to unresolved candidate matter
- headline and key metrics fit on mobile
- chart lines and thresholds are labelled
- table rows preserve comparison
- field treatments have candidate, pressure, resolution or memory logic
- page can be understood from a screenshot
- screenshot does not resemble a generic dashboard template
- screenshot does not resemble a generic AI particle landing page

This checklist is the minimum bar.

---

## 21. Static Page Recipes

Use these recipes when starting a new static page or redesigning an existing one.

They are not templates. They are evidence structures.

### Landing Recipe

Dominant mode: **Field Mode**

Primary job:

- make Affine feel like the mechanism through which distributed intelligence compounds

Required static ingredients:

- small Affine identity anchor
- field structure showing candidate matter, pressure and resolution
- one display thesis line using the Affine Display Voice
- one proof strip or champion state
- restrained gold tied to validation

Hierarchy:

1. field
2. display thesis
3. current champion or proof strip
4. navigation/action

Typography:

- display thesis may use `Instrument Serif`
- UI chrome should use the product sans/mono system
- proof strips and metric evidence should use mono
- animated display text must have a static readable fallback
- symbolic resolution may be used only as a brief transition into approved capability words
- mobile should prioritise stable readable wording over text animation

Current landing alignment:

- the full-bleed field fits Field Mode when it shows candidate matter, pressure, resolution and memory
- `Mine open reasoning` fits the Affine Display Voice
- the proof strip fits the evidence requirement when it remains legible and metric-led
- the field wake fits the system when it feels like activation rather than a full-viewport gold reveal

Do not:

- centre a giant logo as the main idea
- use field imagery as generic atmosphere
- hide evidence below the fold
- use gold as a page wash
- let animated glyphs remain unreadable in final or official static captures
- apply the display spectrum treatment to product data

### Network Recipe

Dominant mode: **Instrumented Field Mode**

Primary job:

- help miner and data-savvy users understand the frontier, challengers and benchmark state quickly

Required static ingredients:

- current champion
- frontier threshold
- latest challenger
- benchmark comparison
- lineage/history
- queue or next contest state
- candidate traces or compact field bands that show unresolved challenger matter
- visible distinction between inherited gold and merely improving green

Hierarchy:

1. current champion/frontier
2. benchmark table or chart
3. challenger state
4. lineage/history
5. raw metadata

Do not:

- make charts prettier than they are legible
- flatten champion and challenger into the same visual state
- use green where gold is required, or gold where green is sufficient
- bury hashes, model names or environment codes

### Mine Recipe

Dominant mode: **Product Instrument Mode**

Primary job:

- make participation clear without making mining feel gamified

Required static ingredients:

- required action
- accepted model/source requirements
- environment status
- evaluation criteria
- reward/score relationship
- error or pending states
- clear unresolved/evaluating/validated state separation

Hierarchy:

1. next action
2. requirements
3. evaluation status
4. reward/score implication
5. supporting documentation

Do not:

- make the page feel like a casino or quest UI
- use oversized motivational copy
- hide the evaluation mechanics
- use gold before work has been validated

### Mechanism Recipe

Dominant mode: **Instrumented Field Mode** with **Archive Mode** support

Primary job:

- explain why Affine makes intelligence compound

Required static ingredients:

- divergence
- evaluation pressure
- selection
- inheritance
- reopening
- evidence that the mechanism resists isolated/local optimisation

Hierarchy:

1. causal diagram
2. plain-language claim
3. labelled stages
4. example evidence
5. deeper technical explanation

Do not:

- make diagrams decorative
- use nature imagery literally
- use alchemical symbolism as ornament
- explain the system only in prose when a static structure can show it

### Manifesto Recipe

Dominant mode: **Archive Mode**

Primary job:

- state the worldview with calm authority

Required static ingredients:

- declarative copy
- restrained typography
- minimal chrome
- occasional proof/evidence inserts
- no excessive visual metaphor

Hierarchy:

1. defining statement
2. causal argument
3. mechanism logic
4. proof or product bridge
5. final mandate

Do not:

- sound mystical
- look like a pitch deck
- use decorative equations
- make the page more theatrical than rigorous

---

## 22. Exception Policy

The static system is strict, but not brittle.

Break a rule only when all three conditions are true:

1. The exception makes the product truth clearer.
2. The exception does not contradict the role of gold, evidence or alignment.
3. The exception can be explained in one sentence.

Good exception:

- A landing hero uses richer field colour because it reveals candidate divergence and resolution more clearly.

Bad exception:

- A page uses a large gold glow because it feels premium.

### Exception Record

When making a deliberate exception, record:

- rule being bent
- reason
- expected benefit
- risk
- how the screen still passes the static QA gate

If the reason is taste alone, do not make the exception.

### Design Debt Warning

If the same exception appears three times, it is no longer an exception.

At that point:

- update this static system
- update `DESIGN_LANGUAGE.md` if the meaning changed
- remove contradictory local patterns

The system should evolve deliberately, not through accidental drift.

---

## Final Static Mandate

Render Affine as the Recursive Frontier made measurable.

Use Field Mode when the mechanism itself is the subject.

Use Instrumented Field Mode when the frontier must be understood through evidence.

Use Product Instrument Mode when users need to act, compare and decide repeatedly.

Use Archive Mode when the system is remembering, explaining or declaring itself.

Use carbon as the world.

Use bone as the readable layer.

Use mono type for evidence.

Use spectrum as unresolved candidate matter.

Use gold only when progress has earned inheritance.

Use colour as state, material and consequence, not generic atmosphere.

Use layout for comparison, not decoration.

Let static surfaces feel precise, alive and consequential without needing to move.

The loved landing field is the source.

The rest of the app is its instrumented translation.

The mechanism persists.

The interface remembers.
