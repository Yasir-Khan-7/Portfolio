---
name: Muhammad Yasir Khan — Portfolio
description: A personal portfolio built as a pipeline orchestrator run view — sections are nodes on a graphite dot-grid canvas and every project is a task with real state.
colors:
  canvas: "#e9eae4"
  canvas-deep: "#dedfd7"
  panel: "#fbfbf9"
  panel-sunk: "#f2f3ee"
  ink: "#14161a"
  ink-2: "#4a4f57"
  ink-3: "#5b616a"
  rule: "#cbcdc4"
  rule-soft: "#dfe0d9"
  signal: "#ff4d00"
  signal-deep: "#d63f00"
  signal-wash: "#ffe9e0"
  success: "#0a6b45"
  success-wash: "#dceee5"
  queued: "#8a8f96"
typography:
  display:
    fontFamily: "'Archivo Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 5.4vw, 4.6rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 118"
  section:
    fontFamily: "'Archivo Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 6vw, 4rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 112"
  card-title:
    fontFamily: "'Archivo Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    lineHeight: 1.375
    letterSpacing: "normal"
  body:
    fontFamily: "'Archivo Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  body-sm:
    fontFamily: "'Archivo Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  body-compact:
    fontFamily: "'Archivo Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  caption:
    fontFamily: "'Archivo Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  control:
    fontFamily: "'Archivo Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 650
    lineHeight: 1
    letterSpacing: "0.055em"
    fontVariation: "'wdth' 104"
  mono:
    fontFamily: "'Martian Mono', ui-monospace, 'SF Mono', monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.02em"
    fontFeature: "tabular-nums"
  mono-label:
    fontFamily: "'Martian Mono', ui-monospace, 'SF Mono', monospace"
    fontSize: "0.625rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  none: "0px"
  nub: "2px"
  bar: "3px"
  full: "9999px"
spacing:
  hair: "6px"
  xs: "12px"
  sm: "16px"
  md: "20px"
  lg: "24px"
  xl: "40px"
  section-y: "80px"
  section-y-lg: "112px"
  gutter: "20px"
  gutter-lg: "32px"
components:
  node:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "20px"
  node-live:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "20px"
  button-signal:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.ink}"
    typography: "{typography.control}"
    rounded: "{rounded.none}"
    padding: "0.8125rem 1.25rem"
  button-signal-hover:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.ink}"
  button-signal-disabled:
    backgroundColor: "{colors.canvas-deep}"
    textColor: "{colors.ink-3}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.control}"
    rounded: "{rounded.none}"
    padding: "0.8125rem 1.25rem"
  button-ghost-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
  tag:
    backgroundColor: "{colors.panel-sunk}"
    textColor: "{colors.ink-2}"
    typography: "{typography.mono-label}"
    rounded: "{rounded.none}"
    padding: "0.1875rem 0.4375rem"
  input:
    backgroundColor: "{colors.panel-sunk}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: "0.625rem 0.75rem"
  input-focus:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
  task-id-chip:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.mono}"
    rounded: "{rounded.none}"
    padding: "0.25rem 0.5rem"
  port:
    backgroundColor: "{colors.panel}"
    rounded: "{rounded.none}"
    width: "7px"
    height: "7px"
  port-live:
    backgroundColor: "{colors.signal}"
    rounded: "{rounded.none}"
    width: "7px"
    height: "7px"
---

# Design System: Muhammad Yasir Khan — Portfolio

## Overview

**Creative North Star: "The Run View"**

This surface is a pipeline orchestrator's run view rendered as a portfolio. The page is a canvas — a cool graphite ground (`#e9eae4`) carrying a fixed 26px dot grid — and everything that matters sits on it as a *node*: a near-white panel with a hard 1px ink-adjacent rule and a genuine offset-plus-blur lift. Sections are tasks with ids (`t1.about` … `t7.contact`), the visitor's scroll is the run, and each of twelve projects is a task that reports `shipped`. Nothing here is a metaphor applied as decoration; the run state is computed in `src/hooks/useRun.ts` and drives the header, the graph rail, and every section heading from one source.

The density is that of an instrument panel, not a marketing page. Hairlines are the primary structural device — `border-b border-rule` separates almost every row of information, and headings sit on a full-width `border-b border-ink`. Type does the shouting: Archivo's variable width axis is pushed to 118 for display and 112 for section headings, which gives the world a signage register that more weight alone could not. Martian Mono is confined to machine facts — ids, tags, states, counters, tabular figures. Colour is almost entirely absent until it means something: signal orange and success green are state, not accent.

Two things this refuses on purpose, and the refusals are visible in the build: the near-black terminal hero with a typing animation (the ground here is light, and the only authored entrance is a single 0.9s translate-and-deblur on the first viewport), and its opposite, the whitespace-and-serif minimal resume (there is no serif anywhere, no generous emptiness, and every claim is anchored to a live link or a measured bar).

**Key Characteristics:**
- Light graphite dot-grid canvas under near-white panels — light, not dark; cool, not warm.
- Square by default. Radius appears in exactly three places, all functional.
- Hairline-led structure: 1px rules do the work that shadows and cards do elsewhere.
- Archivo variable pushed on the *width* axis, not just the weight axis.
- Mono is machine voice only, and the boundary is enforced by a separate control role.
- Run state is semantic colour + distinct shape + text label, always all three.
- One authored entrance, one shared scroll reveal, one state pulse. That is the entire motion budget.

## Colors

An almost achromatic instrument palette — four cool near-neutrals for ground and panels, three inks, two hairline greys — interrupted only where a value carries run state.

### Primary
- **Signal Orange** (`{colors.signal}`): the running state and the primary action, and nothing else. It fills `.btn-signal`, the live port (`.port-live`), the running-state dot, the current role's duration bar, the active carousel indicator, the "View All Projects" arrow tile, the active AI-subcategory filter, and the competency bullets. Because it appears nowhere as ornament, its presence always reads as "this is live" or "press this".
- **Signal Deep** (`{colors.signal-deep}`): never a fill. It is the orange-tinted shadow spread under `.btn-signal` and the hover/error text colour where full-strength orange would not hold on a light ground.
- **Signal Wash** (`{colors.signal-wash}`): the region tint for a `current` / `failed` callout — always paired with a `border-signal` and a text label.

### Secondary
- **Success Green** (`{colors.success}`): the completed state. Filled squares in the graph rail and heading dots, the `shipped` marker on every project card, the completed duration bars, the footer's `run 001 · success` chip, and the delivered-message confirmation.
- **Success Wash** (`{colors.success-wash}`): bordered confirmation region on the contact form only.

### Tertiary
- **Queued Grey** (`{colors.queued}`): the not-yet-reached state. Only ever as a 1px outline around a hollow square, plus the inactive carousel dot and the input hover border.

### Neutral
- **Graphite Canvas** (`{colors.canvas}`): the page ground and the `theme-color`. Carries the fixed dot grid (`radial-gradient` at `#14161a1f`, 26px pitch) and is also the *text* colour on ink-filled surfaces (footer, task-id chips, active nav).
- **Canvas Deep** (`{colors.canvas-deep}`): the disabled-button ground. Declared once and used once, deliberately.
- **Panel** (`{colors.panel}`): every node, card, figure, icon button and modal surface. Warm-white against the cool canvas, so panels lift without a heavy shadow.
- **Panel Sunk** (`{colors.panel-sunk}`): recessed areas *inside* a panel — image wells, input fields, skill-bar tracks, table row hover, inactive state chips.
- **Ink** (`{colors.ink}`): primary text, all structural borders on active/heading rules, the footer ground, and the fill behind task ids.
- **Ink 2** (`{colors.ink-2}`): body copy (`.t-body` sets it by default), secondary labels, icon rest state.
- **Ink 3** (`{colors.ink-3}`): meta, counters, captions, axis labels — the smallest text on the page.
- **Rule** / **Rule Soft** (`{colors.rule}` / `{colors.rule-soft}`): the two hairline weights. `rule` divides a node from the canvas and separates a node's header from its body; `rule-soft` divides repeated rows *within* a node.

### Named Rules

**The Semantic State Rule.** Signal orange, success green and queued grey mean `running`, `success` and `queued`. They are never used as decoration, never as a brand accent, and never to differentiate one category of content from another. The one place this was almost broken — the experience timeline — was corrected: those bars carry signal for the current role and success for finished ones, exactly as everywhere else.

**The Shape-Plus-Label Rule.** State never travels as colour alone. Every state indicator carries a distinct *shape* — a pulsing circle for running, a filled square for success, a hollow outlined square for queued — and sits next to a text label (`run` / `ok` / `—`, or `running` / `success` / `queued`). A colour-only status dot is a defect, not a shorthand.

**The Validated Green Rule.** `--color-success` is `#0a6b45`. It was re-stepped up from `#0f7a4f`, which sat at protan ΔE 6.4 against the signal orange — inside the confusable band for the most common form of colour-vision deficiency, on a page where orange and green appear side by side in the same legend. `#0a6b45` clears all six palette checks at 9.1. Do not step it back toward a brighter green.

**The Ink-3 Floor Rule.** `--color-ink-3` is `#5b616a`, raised from `#6b7178`, which measured 4.12:1 on the canvas. This token is used at 10–11px, so it has to clear the small-text floor with margin: the shipped value holds 5.18:1 on the canvas and 5.64:1 on the sunk panel. Any future lightening must be re-measured against both grounds, not just against white.

## Typography

**Display Font:** Archivo Variable (self-hosted via `@fontsource-variable/archivo`, `standard.css`) — falls back to `ui-sans-serif, system-ui, sans-serif`
**Body Font:** Archivo Variable — the same family; there is no second UI face
**Label/Mono Font:** Martian Mono (self-hosted via `@fontsource/martian-mono`, static 400/500/700) — falls back to `ui-monospace, 'SF Mono', monospace`

Both faces are npm-installed and bundled. **No external font CDN is used, and none may be added** — the site ships to a GitHub Pages subpath and must not acquire a third-party network dependency.

The `standard.css` entry point of `@fontsource-variable/archivo` is load-bearing: it carries **both** the weight axis (100–900) and the width axis (62–125). Swapping it for a weight-only subset would silently collapse `font-variation-settings: 'wdth' 118` back to normal width and flatten the entire display register.

**Character:** One grotesque doing every UI job, stretched wide for signage moments; one monospace doing every machine job. The pairing reads as tooling rather than branding — Archivo at expanded width has the confidence of a station sign, and Martian Mono's wide, boxy figures make ids and counters read as data rather than as styling.

### Hierarchy
- **Display** (`.t-display` — 800, `clamp(2rem, 5.4vw, 4.6rem)`, line-height 0.92, `wdth` 118, tracking −0.035em, `text-wrap: balance`): the hero `h1` only. One per page.
- **Section** (`.t-section` — 700, `clamp(2.25rem, 6vw, 4rem)`, line-height 1, `wdth` 112, tracking −0.025em): every node `h2`, plus sub-headings inside a node at reduced clamps (`clamp(1.5rem, 3.2vw, 2.25rem)` for the executors block, `clamp(1.25rem, 3vw, 1.75rem)` for the all-projects link, `clamp(1.375rem, 3vw, 2rem)` for the contact lead).
- **Card Title** (600, 17px / 1.0625rem, `leading-snug`): every `h3` inside a node — project titles, role/company names, figure captions, modal titles. Plain Archivo at default width; the width axis stops at the section level.
- **Body** (`.t-body` — 400, 16px, line-height 1.65, colour `ink-2`, **`max-width: 68ch`**): all prose. The measure cap is part of the token, not applied per-instance.
- **Body Small** (400, 15px / 0.9375rem, `leading-relaxed`): secondary prose inside dense nodes — modal descriptions, role bullets, form inputs.
- **Body Compact** (400/600, 14px / 0.875rem): the densest prose step, used 7 times across 5 components — project-card summaries, executor descriptions, the gantt's company labels, block sub-headings, skill names and form status lines. This is a real step, not a one-off override; it is the floor for card copy and table cells.
- **Caption** (400, 12px / 0.75rem): the two micro strings that are prose rather than machine data — the carousel's `tap a card to enlarge` hint and the modal's `Built with` label. Both sit just below Body Compact and deliberately avoid `.t-mono`, which is reserved for ids, tags, states and tabular figures.
- **Control** (`.t-control` — Archivo, `wdth` 104, weight 650, 13px, tracking 0.055em, uppercase, line-height 1): every button, filter, tab and nav item. Frequently overridden down to 11px / 0.6875rem in chrome (header nav, footer nav, filter chips).
- **Mono** (`.t-mono` — Martian Mono 400, 11px / 0.6875rem, tracking 0.02em, `tabular-nums`): task ids, counters (`03/12`), categories, durations, axis labels.
- **Mono Label** (`.t-mono-label` — Martian Mono 500, 10px / 0.625rem, tracking 0.08em, uppercase): state words, section micro-labels (`stdout`, `operator`, `Graph`, `send message`), form field labels.

### Named Rules

**The Mono Boundary Rule.** Martian Mono is for ids, tags, states and tabular data. That is the whole list. Controls — buttons, filters, tabs, nav — use `.t-control`, which is Archivo at `wdth` 104 / 650 / uppercase. A button set in mono is the costume version of this world; real orchestration UIs do not do it, and neither does this one. This boundary is a rule, not an accident of implementation.

**The Width-Axis Rule.** Display presence comes from the width axis (118 → 112 → 104 as the register descends from hero to section to control), not from piling on weight. If a heading needs more presence, widen it before you embolden it.

**The One Measure Rule.** Prose is capped at 68ch by `.t-body` itself. Never re-cap prose with an ad-hoc `max-w-*`; use `.t-body` and let the token hold the measure.

## Layout

**Container.** One width for the whole product: `max-w-[1440px]`, centred, with gutters of 20px (`px-5`) rising to 32px (`md:px-8`) at 768px. The run header, every section, the footer and the `/projects` page all use the identical container, so the left edge never shifts as the visitor scrolls.

**Vertical rhythm.** Sections are laid out by a single shell (`NodeSection`): `py-20` on mobile, `md:py-28` at 768px, plus `scroll-mt-20` so an anchored jump clears the fixed header. The hero is the exception at `pt-24 pb-16` / `md:pt-32 md:pb-20`. Inside a section, the heading block ends with `mb-10` / `md:mb-14`, and repeated items sit on `gap-6` grids or `space-y-5`/`space-y-6` stacks. Node internals are `p-4 md:p-5` for cards and `p-5 md:p-6` for figures; node headers are a fixed `px-3 py-2` to `px-5 py-3.5` strip.

**Chrome.** The run header is fixed at `h-14` (56px) and is transparent until `scrollY > 40`, at which point it acquires `bg-canvas/92`, `backdrop-blur-md`, a `border-rule` bottom edge and a shadow. Sticky elements park at `top-20` (80px) — the graph rail, the About portrait, the modal header.

**Breakpoints.** Tailwind defaults, unmodified: `sm` 640, `md` 768, `lg` 1024, `xl` 1280. Plus one authored media query at `max-width: 420px` that shrinks `.btn-signal` / `.btn-ghost` padding and tracking so the two hero actions stay on a single row — stacking them pushed the run-meta line and the scroll cue below the fold at 390px.

**Asymmetric grids at `lg`, single column below.** The layouts are deliberately unequal, never a 50/50 split:
- Hero: `minmax(0,1fr)_280px` — content left, graph rail right (rail hidden below `lg`).
- About: `minmax(0,1.55fr)_minmax(0,1fr)` — prose dominant, portrait secondary.
- Contact: `minmax(0,1fr)_minmax(0,1.15fr)` — form slightly wider than the channel list.
- Projects: 1 → 2 columns at `md`; the `/projects` index goes 1 → 2 at `md` → 3 at `xl`.
- Skills: 1 → 2 columns at `md`.

**Density behaviour.** Nothing reflows into a carousel or an accordion on small screens. The graph rail is dropped (its function moves to the full-screen mobile menu), the desktop nav is replaced by a menu button, and the AI-tools table collapses from a three-column worker table to a two-row stack. Everything else simply narrows.

### Named Rules

**The One Container Rule.** Every top-level region uses `max-w-[1440px]` with `px-5 md:px-8`. A new section that invents its own width breaks the vertical edge alignment that holds this page together.

## Elevation & Depth

Hybrid, and the split is doctrinal: **structure comes from 1px rules, lift comes from a soft shadow, and the two are always used together.** A node is never a borderless floating card, and never a bordered box sitting flat on the canvas. The canvas's fixed dot grid sits at `z-0` behind everything and never moves, so depth reads against a stationary reference.

Depth is also carried tonally: `canvas` (ground) → `panel` (raised) → `panel-sunk` (recessed within a panel). A recessed surface never gets a shadow; it gets the darker tone and the softer rule.

### Shadow Vocabulary
- **Node rest** (`box-shadow: 0 1px 2px #14161a0a, 0 8px 20px -12px #14161a26`): every `.node`. A 1px contact shadow plus a wide, tightly-spread ambient lift.
- **Node live** (`box-shadow: 0 1px 2px #14161a0f, 0 14px 34px -14px #14161a33`, border → `ink`): `.node-live`, applied to the current role card and to both overlay panels. Darker border *and* deeper lift together.
- **Signal button rest** (`0 1px 2px #14161a1f, 0 6px 14px -8px #d63f0099`): the primary button's lift is tinted with `signal-deep`, so the orange reads as emitting rather than sitting.
- **Signal button hover** (`0 2px 4px #14161a24, 0 14px 26px -10px #d63f00a6`) with `translateY(-2px)`; **active** collapses to `0 1px 2px #14161a1f` with `translateY(0)`.
- **Condensed header** (`0 1px 0 0 #cbcdc4, 0 10px 28px -22px #14161a66`): a hard hairline plus an extremely diffuse falloff — the header separates without appearing to hover.

### Stacking order
`0` canvas dot grid (fixed, `pointer-events: none`) → `10` every section and the footer → `50` the run header → `60` the skip link and the mobile menu → `70` the portalled overlays.

### Named Rules

**The Rule-Plus-Lift Rule.** Every raised surface carries both a 1px border and a blurred shadow. No hard offset shadows (this is not a neobrutalist world), and no borderless drop-shadow cards.

**The Portal Rule.** Both overlays — `ProjectModal` and the testimonial lightbox — are rendered with `createPortal(..., document.body)`. Every `NodeSection` is `relative z-10`, which creates a stacking context; a `fixed` overlay rendered inside one resolves *within* that context and paints beneath the `z-50` run header. Any future overlay must portal to `document.body` for the same reason.

## Shapes

**Square by default, and the default is nearly absolute.** Panels, buttons, inputs, tags, chips, icon buttons, image wells, modal panels and nav items all have `border-radius: 0`. Corners are the world's signature: a node editor draws rectangles.

Radius appears in exactly four places, each functional:
- `2px` on the global `:focus-visible` outline, so the focus ring reads as a ring rather than as part of the box.
- `2px`–`3px` on the *right* cap of a measured bar only (`rounded-r-[2px]` on skill bars, `rounded-r-[3px]` on duration bars) — the leading edge of a value, never both ends.
- Full round on the running-state dot, which is the shape that distinguishes `running` from `success` and `queued`.
- Full round on nothing else. Avatars are not circles; the About portrait is a `4/5` rectangle inside a node.

**Recurring geometry.**
- **The port** — a 7px square with a 1.5px ink border, panel-filled at rest and signal-filled when live. It marks where an edge meets a node and is drawn wherever a connection is implied (the hero source node, the all-projects link).
- **The edge** — a 1px line, `bg-ink` when the upstream node has been read, `stroke-rule` with a `3 3` dash when it has not. Drawn as real SVG lines in the graph rail and as 1px divs in the hero identity graph.
- **The state box** — a 22px square with a 1px border (`rule` when queued, `ink` otherwise) containing an 8px state glyph. This is the graph rail's node.
- **Aspect ratios** — project captures are `aspect-[16/10]` with `object-contain` (never `cover`: these are screenshots of real interfaces and cropping cuts the logo, nav and headline that identify the work). The portrait is `aspect-[4/5]` with `object-cover`.

### Named Rules

**The Square-By-Default Rule.** New surfaces get `border-radius: 0`. Radius must be justified as a signal — a focus ring, a value's leading edge, or a running-state circle — never as softening.

**The Node Reservation Rule.** `.node` is reserved for genuine units: a task, a job, a section, a figure, an overlay panel. It is never wrapped around an individual paragraph or list item, and **nodes are never nested**. If content needs internal separation, use a `rule-soft` divider or a `panel-sunk` region, not a second node.

## Components

### Buttons
- **Shape:** hard rectangle, no radius, 1px `ink` border on both variants.
- **Signal (primary):** solid `signal` fill with `ink` text — the orange is bright enough that dark text is the legible pairing. Padding `0.8125rem 1.25rem`, `.t-control` typography, an orange-tinted lift at rest.
- **Hover / Active:** `translateY(-2px)` with a deepened shadow; active returns to `translateY(0)` and collapses the shadow. All transitions run 0.25s on `--ease-run`.
- **Disabled:** `canvas-deep` ground, `ink-3` text, `rule` border, no shadow, no transform, `cursor: not-allowed`. The signal colour is withdrawn entirely — a greyed orange would still read as an available action.
- **Ghost (secondary):** transparent with a 1px `ink` border and `ink` text; hover inverts to an `ink` fill with `canvas` text plus the same 2px rise. Used for every secondary action and, at reduced padding (`px-3 py-2`, `px-2 py-1.5`), for compact link pairs on cards and table rows.
- **Below 420px:** both variants shrink to `0.75rem 0.875rem` padding, 12px type and 0.04em tracking so a two-action row survives the narrowest viewport.
- **Icon buttons:** square, 32–40px, 1px `rule` border on a `panel` ground with `ink-2` glyph; hover flips to `border-ink bg-ink text-canvas`. Never round, never bare.

### Chips
- **Tag** (`.tag`): the tech chip. Martian Mono at 10px on a `panel-sunk` ground with a `rule-soft` border, `0.1875rem 0.4375rem` padding, `white-space: nowrap`, no radius. It reads as a machine token, not a pill. Non-interactive.
- **Filter chip** (`/projects`): `.t-control` at 11px, `border px-2.5 py-1.5`. Unselected is `border-rule bg-panel text-ink-2`; selected is `border-ink bg-ink text-canvas`. AI subcategories are the one exception — their selected state is `border-signal bg-signal text-ink`, marking a second, nested level of filtering.
- **State chip:** `border-signal bg-signal-wash` with a pulsing dot and the word `current`, or `border-rule bg-panel-sunk` with a filled square and the word `complete`. Never colour without the word.
- **Task-id chip:** `bg-ink px-2 py-1 t-mono text-canvas`, lowercase. The ink fill is what makes an id read as an identifier rather than as small print.

### Cards / Containers
- **Corner style:** none (0px).
- **Background:** `panel`; recessed interior regions use `panel-sunk`.
- **Border:** 1px `rule`, upgraded to `ink` for `.node-live`.
- **Shadow strategy:** see Elevation — node rest, or node live for the current/focused unit.
- **Internal structure:** almost every node opens with a header strip separated by `border-b border-rule` carrying a mono id on the left and a mono meta value on the right, and closes with content padded `p-4 md:p-5` (cards) or `p-5 md:p-6` (figures). Repeated rows inside are divided by `border-rule-soft`.

### Inputs / Fields
- **Style:** 1px `rule` border, `panel-sunk` ground, no radius, `0.625rem 0.75rem` padding, 15px text. Labels sit above in `.t-mono-label` at `ink-2`.
- **Hover:** border → `queued`.
- **Focus:** border → `ink` and ground → `panel` (the field rises out of its recess). The global `:focus-visible` ring — 2px `signal`, 3px offset — is suppressed on inputs in favour of this treatment; every other focusable element keeps the ring.
- **Disabled:** `opacity: 0.6`, applied while the form is submitting.
- **Form status:** the form's own header carries a live state indicator using the same vocabulary as the run — hollow square `ready`, pulsing circle `sending`, filled square `delivered`, signal square `failed` — and results are announced in an `aria-live="polite"` region as a bordered `success-wash` or `signal-wash` block with an icon and full text.

### Navigation
Navigation is expressed four ways, all reading from the same `nodes` array and the same `taskId` strings:
- **Run header (desktop, `lg`+):** a horizontal row of `.t-control` items at 11px, each prefixed by a 5px `StateDot`. The running item inverts to `bg-ink text-canvas` and carries `aria-current`. To the left is the run identity — a `RUN 001` chip on an ink fill with a pulsing signal dot — which doubles as back-to-top. To the right, a mono `03/06` progress counter and the three social icon buttons.
- **Graph rail (`MiniDag`, `lg`+ only):** see below.
- **Mobile menu:** full-screen `bg-canvas` takeover at `z-60` with body-scroll lock and Escape-to-close. Each task is a row: mono task id, the label at `.t-section` 28px, then the state dot and its word. The id column sizes to its content — a fixed width overflowed into the label on every id longer than `t2.skills` — and there is no separate 01–06 numbering column because the id already carries the sequence.
- **Footer nav:** `.t-control` at 11px on the ink footer, `canvas/70`, hover underlines in `signal`.

### The Graph Rail (signature)
`MiniDag` draws the page's own dependency graph as an actual graph, not an illustration of one. One row per task on a 46px pitch inside a `.node` captioned `Graph` / `<n> tasks`; the count comes from `nodes` in `src/data/site.ts`, so adding a section extends the rail automatically. Each row is a 22px bordered square holding a state glyph, then a button showing the task id and its state word. Between rows, an SVG line: dashed 1px `rule` while the upstream task is still queued, solid 1.5px `ink` once it has been read, transitioning over 0.45s. The drawing therefore *reports* progress rather than decorating it. It sits in the right column of the hero's second row, beside the intro panel, from `lg` up. It is not sticky: the hero title now spans the full measure above it, because the longest role (`Forward Deployed Engineer`) wrapped when the title shared a row with the rail.

### The Task Header (signature)
`NodeHeading` opens every section with the same three-part strip on a `border-b border-ink`: the task-id chip, the state dot with its word, and an optional right-aligned mono meta value (`input · identity`, `3 roles · 2023 — present`, `terminal node · output`). The `h2` follows at `.t-section` scale. **The task id is one shared string** — `t1.about` … `t7.contact` — printed character-for-character identically by the heading, the graph rail and the mobile menu. These ids are wayfinding, not ornament; renaming one means renaming it in `src/data/site.ts` and it propagates everywhere.

### The Duration Axis (signature)
Three roles as real duration bars on one shared decimal-year axis (2023.4 → 2026.7) with year gridlines drawn behind the rows in `rule-soft`. All text lives in the row label above the bar, never inside it, so no role can be truncated by its own span. The bar encodes duration and nothing else. Two statuses only, both directly labelled: current (`signal`, plus a pulsing `current` chip) and completed (`success`).

### The Measured Bar (skill bars)
A single measure carries a single hue. Bars are `ink` on a `panel-sunk` track with quarter gridlines painted *inside* the track via `repeating-linear-gradient`, so they measure the bars without cutting the labels. Emphasis (`active` in the data) is expressed as label weight plus a 1.5px signal square marker — never as a second fill colour with no legend to explain it. The axis is a real shared 0–100, printed `0 / 50 / 100` beneath.

### Motion
The entire motion budget is three authored behaviours plus incidental hover transitions.
- **`hero-in`** (0.9s `--ease-run`, `translateY(14px)` + `blur(6px)` → rest, staggered 80ms + 110ms per row): the single authored entrance, on the first viewport only. **This is the only place blur is used in the system.** Reused at 0.4s for the modal's image swap.
- **`.reveal`** (`Reveal.tsx`): one shared scroll reveal — 18px rise and fade over 0.7s `--ease-run`, applied by IntersectionObserver, never by animation-delay chains. It carries three safeties: reduced motion short-circuits to visible, a missing `IntersectionObserver` short-circuits to visible, and a **2500ms failsafe timer** force-shows anything still hidden. Because `.reveal` starts at `opacity: 0`, none of these are optional.
- **`run-pulse`** (1.6s `--ease-step`, infinite, opacity 1→0.35 and scale 1→0.7): the running-state indicator, and the only infinite animation on the page. It is always attached to a state, never to an idle element.
- **Easings:** `--ease-run` `cubic-bezier(0.16, 1, 0.3, 1)` for entrances, reveals and state transitions; `--ease-step` `cubic-bezier(0.65, 0, 0.35, 1)` for the pulse.
- **Reduced motion:** the whole run pre-completes — `useRunProgress` marks every node `success` immediately, `stateOf` stops returning `running`, all animations and transitions are clamped to 0.001ms, smooth scrolling is disabled, `.reveal` is forced visible, and the card frame-stepper and testimonial autoplay do not start. Nothing is ever hidden behind motion.

### Named Rules

**The Never-Invisible Rule.** Any element that starts at `opacity: 0` must carry a non-observer path to visible. `Reveal` has three. A new entrance animation that can strand content blank is a bug, not a style.

**The One Entrance Rule.** There is exactly one authored entrance (`hero-in`, first viewport) and one shared reveal below the fold. Do not add a second signature entrance for a new section; wrap it in `Reveal`.

## Do's and Don'ts

### Do:
- **Do** run every new section through `NodeSection` + `NodeHeading` with a real task id added to the `nodes` array in `src/data/site.ts`, so the header, the graph rail and the mobile menu pick it up automatically.
- **Do** pair colour with a distinct shape and a text label for every state indicator — pulsing circle / filled square / hollow outlined square.
- **Do** use `.t-control` for anything the visitor can press, and reserve `.t-mono` / `.t-mono-label` for ids, tags, states and tabular figures.
- **Do** give raised surfaces both a 1px border and a blurred shadow, and use `panel-sunk` (not a shadow) for recessed regions.
- **Do** portal any new fixed overlay to `document.body` — sections are `relative z-10` and will trap it beneath the `z-50` header.
- **Do** wrap below-the-fold content in `Reveal` rather than authoring a new entrance.
- **Do** cap prose with `.t-body`, which already holds the 68ch measure and the `ink-2` colour.
- **Do** keep `object-contain` on product screenshots; cropping them destroys the interface evidence that makes the claim credible.
- **Do** re-measure contrast against both `canvas` (`#e9eae4`) and `panel-sunk` (`#f2f3ee`) before changing any ink token — white is not the ground here.

### Don't:
- **Don't** use signal orange, success green or queued grey for anything that is not run state or a primary action. They are semantic tokens, not an accent palette.
- **Don't** re-step `--color-success` toward a brighter green. `#0f7a4f` sat at protan ΔE 6.4 against the signal orange; `#0a6b45` is the validated value.
- **Don't** lighten `--color-ink-3` past `#5b616a` — it is used at 10–11px and `#6b7178` measured 4.12:1 on the canvas.
- **Don't** set a button, filter, tab or nav item in Martian Mono. That is the costume version of this world.
- **Don't** nest `.node` inside `.node`, or wrap `.node` around a single paragraph. Use a `rule-soft` divider or a `panel-sunk` region instead.
- **Don't** add `border-radius` to a panel, button, input, tag or image. Radius is reserved for the focus ring, the leading edge of a measured bar, and the running-state circle.
- **Don't** introduce a serif, a second sans, or a font loaded from an external CDN. Both faces are self-hosted npm packages, and the Archivo entry point must remain the one carrying the `wdth` axis.
- **Don't** add blur outside the `hero-in` entrance and the existing overlay/header backdrop filters.
- **Don't** add a second infinite animation. `run-pulse` is the only one, and it is bound to a live state.
- **Don't** ship an element that starts hidden without a failsafe path to visible.
- **Don't** hard-code an asset path. The site deploys to the `/Portfolio/` subpath; all assets resolve through `import.meta.env.BASE_URL`.

<!--
Build context, recorded for accuracy rather than as design guidance:

Stack — Vite 8 + React 19 + TypeScript + Tailwind CSS v4 (CSS-first `@theme` in
src/index.css; there is no tailwind.config.js and none should be added) +
lucide-react + react-router-dom. Fonts self-hosted via
@fontsource-variable/archivo (standard.css: wght 100–900 AND wdth 62–125) and
@fontsource/martian-mono (static 400/500/700).

Deployment — GitHub Pages at base path /Portfolio/ via
.github/workflows/deploy.yml; public/404.html carries the spa-github-pages
redirect shim with pathSegmentsToKeep = 1, decoded by an inline script in
index.html before React boots. lucide-react v1 dropped brand marks, so GitHub
and LinkedIn ship as solid inline SVG in src/components/BrandIcons.tsx.

Declared but not shipped, recorded so nobody assumes otherwise:
  - `@keyframes edge-flow` is declared in src/index.css but is not drawn between
    sections anywhere in the build. It is dead CSS, not a motion token.
  - `--color-rule-ink` (#14161a) is declared in the @theme block and never
    referenced; it duplicates `--color-ink`.
  - The `motion` (Framer Motion) package is listed in package.json dependencies
    and is not imported anywhere in src/. All motion is CSS + IntersectionObserver.
-->
