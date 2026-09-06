---
name: lily-design-system-svelte
description: Explains what's available for Svelte in Lily Design System and which Svelte subproject to reach for — the headless component library, the canonical *-picker helpers catalog (every other framework ports from this one), or the SvelteKit example application. Use when someone asks what Svelte packages Lily ships, which Svelte subproject they need for a given job, wants to see Svelte components styled and running, or asks about the SvelteKit example app's routes, NHS UK styling, or test coverage.
license: MIT OR Apache-2.0 OR GPL-2.0-only OR GPL-3.0-only OR BSD-3-Clause
---

# Lily Design System™ — Svelte

Three real Svelte subprojects make up Lily's Svelte support. This skill is
the umbrella: it maps the three, helps decide which one a task needs, and
points at the two sibling skills that already cover the headless library and
the helpers catalog in depth. It does not restate their content.

## The three subprojects

- **[`lily-design-system-svelte-headless`](../lily-design-system-svelte-headless/)**
  — the headless component library. Published to npm; the library you
  actually depend on and style yourself. Semantic HTML, ARIA, focus
  management, and keyboard behaviour, **no CSS**. Reach for this when the
  task is "what markup/props/ARIA does component X ship" or "install Lily
  components into my Svelte app." Deep dive:
  [`lily-design-system-svelte-headless`](../lily-design-system-svelte-headless/)
  — the Svelte 5 consumption idiom (`class` prop, `$props()` with rest-props,
  `$bindable()`, `Snippet` children), npm package identity.
- **[`lily-design-system-svelte-helpers`](../lily-design-system-svelte-helpers/)**
  — the six `*-picker` helper packages (theme-picker, locale-picker,
  text-size-picker, motion-picker, share-picker, date-time-picker). Each
  owns one whole interaction end to end — not just markup but the popup,
  the keyboard behaviour, and (for most of them) applying and persisting a
  value. **This catalog is canonical**: per `AGENTS/helpers.md`'s "Svelte is
  canonical" rule, every other framework's helpers (React, Vue, Angular,
  Blazor, HTML, Nunjucks, Web Components) port their contract from here,
  and when a catalog disagrees, Svelte wins. Reach for this when the task
  is a page-header preference control, a share action, or a date/time form
  field. Deep dive:
  [`lily-design-system-svelte-helpers`](../lily-design-system-svelte-helpers/)
  — the six helpers' contracts, npm package names, and the idempotent-apply
  rule.
- **[`lily-design-system-svelte-sveltekit-examples`](../lily-design-system-svelte-sveltekit-examples/)**
  — a fully styled SvelteKit 2 reference application demonstrating the
  headless catalog with NHS UK design system colours, typography, spacing,
  and focus states. Run it to see components working, or read its CSS as a
  worked answer to "how would I style this." Neither sibling skill covers
  this subproject — see below for its specifics.

## When NOT this skill

For the headless library's consumption idiom or the helpers catalog's
per-helper contracts, use the two sibling skills above directly — this
skill only maps the territory and does not duplicate their content. For
framework-agnostic Lily concepts, terminology, naming conventions, and
composition patterns that apply across all seven frameworks, use
[`lily-design-system`](../lily-design-system/).

## The SvelteKit example app

`lily-design-system-svelte-sveltekit-examples` is a Svelte 5 + SvelteKit 2
application styled with the NHS UK design system reference (CSS custom
properties, targeting the kebab-case Lily class names directly — no
`nhsuk-` prefixes in markup). Like every Lily example app it follows the
general contract in `AGENTS/examples.md`: three required routes plus
encouraged composed-page demos, WCAG 2.2 AAA target, skip-link first,
standard landmarks, full keyboard operability.

- `/` — home page with links to the examples.
- `/components` — the full catalog index, searchable/filterable, linking
  to each component's detail page.
- `/components/{slug}` — one live demo per component, with usage snippet
  and canonical metadata.
- Twelve composed-page demos exercising multiple components together:
  `/contact-form`, `/dashboard`, `/dialog-flow`, `/file-upload-form`,
  `/navigation-and-menus`, `/page-layout`, `/rating-and-feedback`,
  `/search-and-filter`, `/settings-page`, `/tabbed-interface`,
  `/task-management`, `/timeline-and-cards`.

Run it:

```sh
pnpm install
pnpm run dev
```

Open <http://localhost:5173>.

Distinctive test coverage (verified against this app's own `e2e/`
directory, not shared by every sibling example app): `e2e/axe-catalog.spec.ts`
sweeps every `/components/{slug}` page for axe-core violations across the
full catalog — the source of two real, previously-undetected defects fixed
in the wider spec record (a `role="radio"` set without `aria-checked` in
rating-picker demos, and an unfocusable overflowing `<pre>` code snippet on
long-named component pages). `e2e/visual-regression.spec.ts` carries a
committed screenshot baseline of the demo region across 30 slugs spanning
every catalog category, in 3 themes (the app default, GOV.UK GDS, and
`dark`), for light/dark coverage. `e2e/accessibility.spec.ts` and
`e2e/responsive.spec.ts` round out the per-route and per-viewport sweeps
every example app runs.

## Svelte-wide conventions (all three subprojects)

- **Svelte 5 runes** throughout (`$state`, `$derived`, `$props`,
  `$bindable`, `$effect`) — no legacy Svelte 4 syntax.
- **No `<style>` blocks in the headless library or the helpers catalog.**
  Headless components and helper packages ship zero CSS, not even Svelte's
  own scoped styles; only the example app has stylesheets.
- **TypeScript everywhere**, Vite as the build tool, pnpm (not npm).
- **vitest, not Jest** — `@testing-library/svelte` + `@testing-library/user-event`
  + jsdom, vitest's own built-in matchers only (`@testing-library/jest-dom`
  is explicitly prohibited across all three subprojects).
- **Internationalisation is the consumer's concern** — no i18n library is
  bundled anywhere (no Paraglide, no svelte-i18n); every user-facing string
  arrives as a prop.
- The general Svelte 5 + SvelteKit 2 conventions this repository follows
  live in `AGENTS/sveltekit.md` (loaded into this skill's own `AGENTS.md`).

## Framework-agnostic Lily concepts

For what Lily is, its terminology (component, slug, class hook, helper,
theme, subproject), the 491-component catalog, naming conventions, and
composition patterns that apply across all seven frameworks, use
[`lily-design-system`](../lily-design-system/).
