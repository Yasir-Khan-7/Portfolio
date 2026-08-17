---
version: 1
slug: "src-pages-services-tsx"
primary_target: "src/pages/Services.tsx"
related_targets: ["src/components/Glaze.tsx","src/components/ServiceJobs.tsx","src/components/ServiceBrief.tsx","src/data/services.ts"]
---

## Scope and mode

The `/services` route and its seven bays. Visitor mode: **Persuade**. The home page is unchanged apart from cross-links.

## Audience and job

Three buyers, arriving cold from search or a link:

1. **Agencies and studios** — signed client work, not enough engineering capacity. White-label overflow under their brand. Primary commercial and primary SEO target.
2. **Startups and founders** — a product that must exist before a raise, demo or pilot.
3. **Early in their career** — a portfolio site, served as a **productized fixed-scope entry tier** so it does not undercut the other two.

Action: submit the brief form in the final bay (Formspree, existing endpoint).

## Proof and content

Nothing new is asserted. The evidence bay reads from `delivered` in `src/data/site.ts` and links the project index. Capability claims trace to the existing experience entries.

## Constraints

- **No prices, rates, ranges or figures anywhere.** The owner's decision; the page states fees are quoted against a written scope.
- No invented metrics, timelines, client names, counts or guarantees.

## Chosen visual world

**Glazier colour-field partition** — a steel-framed glass wall from a glazier's workshop. Selected by the site owner from the direction round (seed `6c8e8646`) over the assigned direction, after two earlier attempts were rejected: inheriting the portfolio's run-view chrome, and a work-order document register.

The world's rules, as built:

- **The bars are the grid gaps.** A wall is a CSS grid painted bar-black with a gap and pad of exactly the bar thickness; panes sit in the cells. Every mullion is therefore true, unbroken and pixel-accurate at any width, and no pane carries a border of its own. One `--bar` token drives the whole page.
- **One pane, one statement.** The rule that keeps a dense offer legible — any single pane reads without the ones around it.
- **Colour is a note in a score.** Clear and seeded glass are the ground; cobalt, amber and oxblood appear only on the primary action, one note per offer, the "not included" terms, and the availability pane. Which colour marks an offer says nothing about its type — it marks position in the wall.
- **Nothing floats.** There is not a single non-inset box-shadow on the surface (verified: 0). Depth is glass and steel.
- **Glass is drawn, never imaged.** Seeded glass is dimpled, clear glass has a wide faint roll from the rolling table. Zero image weight, crisp at any density.

**Typography is the one thing carried over from the portfolio, and it is inverted.** Both surfaces use Archivo Variable. The run view drives its width axis out to 118 for signage; this drives it in to 62 for a tall condensed grotesque. One variable font, two voices nobody would guess were the same family, and no second webfont to download.

Wayfinding is the **elevation key** — a strip of panes naming all seven bays, the way a partition drawing is read from its elevation — plus a masthead whose entire navigation is `← Back to portfolio`, per the owner's instruction.

The memorable moment: **"Start here" on any offer carries it into the brief**, focuses the first field, and composes the summary pane showing the work that will run and the completion condition — so a visitor sees what they are asking for before they ask.

## Deviations from DESIGN.md, recorded deliberately

DESIGN.md documents the portfolio (run 001). This surface is a different visual world by the owner's explicit decision, and shares only the two typefaces and the square geometry. It uses none of the run-view tokens: no canvas, no node, no port, no signal orange, no run state. Its own tokens are namespaced (`--color-bar`, `--color-glass*`, `--color-cobalt`, `--color-amber`, `--color-oxblood`) and are referenced by this route alone.

## Verified

1 h1, 7 h2, no heading-order jumps, every control labelled, every image with alt, one JSON-LD graph, correct canonical, 0 shadows, no horizontal overflow, reduced motion leaves nothing hidden, no console errors. Contrast on coloured glass: cobalt 8.9:1, oxblood 11.1:1, amber 5.8:1.

## Unresolved

- Two offer claims need the owner's confirmation before this is public: **white-label delivery under an agency's brand**, and the **fixed-scope portfolio tier's handover contents**.
- No published fees. Adding "starting from" anchors later is a structural change to the terms bay, not a copy tweak.
- `PRODUCT.md` still describes the site as "a single scrolling page plus one secondary route". It is now stale — three routes, and a commercial offer surface in its own visual world.
