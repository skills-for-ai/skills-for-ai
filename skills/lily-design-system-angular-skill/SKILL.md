---
name: lily-design-system-angular-skill
description: Use when someone asks what's available for Angular in Lily Design System, which Angular subproject they need (the headless component library, the six *-picker helpers, or the styled example app), wants to see Lily's Angular components running with real CSS, or asks about the Angular Analog.js example app's routes, NHS UK visual reference, or composed-page demos.
license: MIT OR Apache-2.0 OR GPL-2.0-only OR GPL-3.0-only OR BSD-3-Clause
---

# Lily Design System™ — Angular overview

Three real Angular subprojects make up Lily's Angular support. This skill is
the umbrella: it maps the three, helps pick the right one, and gives real
coverage of the one neither sibling skill documents (the example app). It
does not restate `lily-design-system-angular-headless-skill` or
`lily-design-system-angular-helpers-skill`'s own content — load one of them
directly once you know which subproject you need.

## The three subprojects

| Subproject | What it is | Reach for it when |
| --- | --- | --- |
| [`lily-design-system-angular-headless`](../lily-design-system-angular-headless/) | The full 491-component catalog as standalone Angular 20 components — zero CSS, semantic HTML + ARIA + keyboard behaviour only. | You are building a real app and want to depend on and style the components yourself. |
| [`lily-design-system-angular-helpers`](../lily-design-system-angular-helpers/) | Six opinionated packages (`theme-picker`, `locale-picker`, `text-size-picker`, `motion-picker`, `share-picker`, `date-time-picker`), each owning one whole page-header preference/action, or — for `date-time-picker` — a form value. | You need a page-header preference control or a date/time form field, not a bare catalog primitive. |
| [`lily-design-system-angular-examples`](../lily-design-system-angular-examples/) | A fully styled Angular + Analog.js reference app: every catalog component plus 12 composed pages, styled to the NHS UK visual reference. | You want to run something and see it working, or copy a working CSS answer for a component instead of inventing your own. |

For the headless library's own consumption details (install command,
standalone-component/signal-input idiom, and — the one real Angular-specific
wrinkle in the whole catalog — the tag+attribute-selector convention 51
list-item and table sub-element components use) use
[`lily-design-system-angular-headless-skill`](../lily-design-system-angular-headless-skill/)
directly; this skill does not repeat it. For the six helper packages'
contracts and the `$any($event.target).value` template-cast idiom, use
[`lily-design-system-angular-helpers-skill`](../lily-design-system-angular-helpers-skill/)
directly; this skill does not repeat that either.

## The example app: `lily-design-system-angular-examples`

Built on **Angular 20 + Analog.js v1**, file-based routing under
`src/app/pages/`, signal-driven zoneless change detection, standalone
components only, full SSG prerendering. The headless components are copied
into `src/app/components/` (the same copy-pattern every other Lily example
app uses — no workspace dependency on `lily-design-system-angular-headless`).

Required routes (per `AGENTS/examples.md`, the contract every Lily example
app follows):

- `/` — home, links to the components catalog and every composed-page demo.
- `/components` — searchable/filterable index of all 491 catalog components.
- `/components/[slug]` — one detail page per component: renders the demo
  HTML via Angular's `[innerHTML]` + `DomSanitizer.bypassSecurityTrustHtml`
  (the same rendering shape as `{@html}` in svelte-sveltekit-examples,
  `dangerouslySetInnerHTML` in react-next-examples, `v-html` in
  vue-nuxt-examples), plus the canonical props/ARIA/keyboard metadata.

Twelve composed-page demos exercise multiple components together:
`/contact-form`, `/dashboard`, `/dialog-flow`, `/file-upload-form`,
`/navigation-and-menus`, `/page-layout`, `/rating-and-feedback`,
`/search-and-filter`, `/settings-page`, `/tabbed-interface`,
`/task-management`, `/timeline-and-cards`.

Visual reference: the current default is **NHS UK**, applied to the plain
Lily kebab-case class names (no `nhsuk-` prefixes in the markup). Styling
comes entirely from a runtime theme stylesheet — a managed
`<link data-lily-theme-picker>` that the `theme-picker` helper swaps among
`/themes/*.css` (NHS England for patients by default) — not from bundled
component CSS; `src/styles/app-shell.css` holds only the fixed app-shell
chrome no theme should style. Reading this CSS (or any of the 45 reference
theme stylesheets under root `themes/`) is a working answer to "how would I
style this component."

Running it:

```sh
pnpm install
pnpm dev        # Vite dev server (Analog) on http://localhost:5173
pnpm build      # SSG output → dist/analog/public/
pnpm start      # serve dist/analog/public/ on http://localhost:4173
pnpm test:e2e   # Playwright accessibility + responsive specs
```

Like every Lily example app: skip-link first, standard landmarks, visible
focus, and every demo flow completable by keyboard alone (WCAG 2.2 AAA
target).

## What's genuinely Angular-wide

All three subprojects share the same Angular 20 conventions verified across
their own `AGENTS.md` files: standalone components only (no NgModules),
signal-based inputs/outputs/`model()`, `ChangeDetectionStrategy.OnPush` on
every component, and no CSS framework dependency (Tailwind, DaisyUI,
Bootstrap, Angular Material) anywhere in the headless or helpers layers.

## When NOT this skill

For framework-agnostic Lily concepts — the headless-vs-example layers, the
491-component catalog, naming conventions, composition patterns, or picking
a framework — use [`lily-design-system-skill`](../lily-design-system-skill/)
instead. It does not cover Angular specifics; this skill does not repeat
its framework-agnostic content.
