---
name: lily-design-system-nunjucks
description: Umbrella skill for Nunjucks in Lily Design System — explains which of the three real Nunjucks subprojects to reach for (the 491-component headless macro library, the six *-picker helper packages, or the fully styled Eleventy example app), points to the two deeper sibling skills for the headless and helpers contracts, and gives real coverage of the Eleventy example app that neither sibling skill covers. Use when someone asks what's available for Nunjucks in Lily Design System, which Nunjucks subproject or package they need, how the three Nunjucks pieces relate, or wants to run or copy CSS from the styled Nunjucks/Eleventy reference app.
license: MIT OR Apache-2.0 OR GPL-2.0-only OR GPL-3.0-only OR BSD-3-Clause
---

# Lily Design System™ — Nunjucks umbrella

Three real subprojects make up Lily's Nunjucks support. This skill sits one
level above all three: it maps them, tells you which one your task needs,
and covers the one of the three — the Eleventy example app — that neither
of the two deeper sibling skills documents. It does not restate the
headless or helpers contracts in detail; it points at the skills that do.

## The three subprojects, and when to reach for each

| Subproject | What it is | Reach for it when |
| --- | --- | --- |
| [`lily-design-system-nunjucks-headless`](../lily-design-system-nunjucks-headless/) | The headless macro library: one Nunjucks macro per component in the catalog, zero CSS, zero bundled JavaScript. | You are importing and calling Lily macros directly and will style and behaviourally wire them yourself. |
| [`lily-design-system-nunjucks-helpers`](../lily-design-system-nunjucks-helpers/) | Six `*-picker` packages (`theme-picker`, `locale-picker`, `text-size-picker`, `motion-picker`, `share-picker`, `date-time-picker`), each a macro + companion `client.js` pair. | You need a page-header preference control, a share action, or a date/time form field with the interaction already built — not just markup. |
| [`lily-design-system-nunjucks-eleventy-examples`](../lily-design-system-nunjucks-eleventy-examples/) | A complete, styled Eleventy 3 static site demonstrating every component and several composed pages, dressed in the NHS UK visual language. | You want to see a component or page pattern working end-to-end, run it locally, or copy CSS as a starting point for your own styling. |

`lily-design-system-nunjucks-headless` is the library the other two depend
on: the helpers catalog's markup follows the same macro conventions, and
the example app imports the headless macros directly via a shared Nunjucks
`FileSystemLoader` search path rather than vendoring a copy.

## Where the deeper contracts live

This skill does not restate either sibling's content:

- [`lily-design-system-nunjucks-headless`](../lily-design-system-nunjucks-headless/) —
  the macro-call idiom (a single `params` object, `text`/`html`/`label`/
  `classes`/`attributes`), the camelCase-macro-vs-kebab-case-file naming
  split, composing nested components via `{% call %}`/`caller()`, and
  server-rendering notes.
- [`lily-design-system-nunjucks-helpers`](../lily-design-system-nunjucks-helpers/) —
  the six helpers' one-line contracts, the macro-plus-`client.js` split
  Nunjucks forces, the shared icon-button-opens-listbox markup for the
  four preference helpers versus `share-picker`'s disclosure and
  `date-time-picker`'s field-plus-dialog shape, and `motion-picker`'s
  documented server/client deviation.

If a question is squarely about calling a headless macro or about one of
the six pickers, go to the matching sibling skill directly rather than
routing through this one.

## The Eleventy example app

`lily-design-system-nunjucks-eleventy-examples` is a static site built
with [Eleventy 3](https://www.11ty.dev/) and Nunjucks 3, styled to
recreate the NHS UK Design System's visual language on Lily's kebab-case
class names (no `nhsuk-` prefixes appear in markup). It has zero framework
coupling and ships progressive-enhancement JavaScript only — pages work
without JS. There is no SSR server; the build produces plain static HTML
into `_site/`.

**Routes**, matching the general example-app contract in
`AGENTS/examples.md`:

- `/` — home page.
- `/components/` — the searchable catalog index.
- `/components/{slug}/` — one live-demo page per canonical slug, each a
  flat, hand/generator-authored `src/components/{slug}.njk` file (a
  `component-demo` layout plus front matter) that imports the matching
  macro straight from the sibling headless library and calls it with
  several worked variants — not a single template driven by per-request
  data.
- A dozen-plus composed-page demos alongside the required routes —
  `contact-form`, `dashboard`, `dialog-flow`, `file-upload-form`,
  `navigation-and-menus`, `page-layout`, `rating-and-feedback`,
  `search-and-filter`, `settings-page`, `tabbed-interface`,
  `task-management`, `timeline-and-cards`, plus later additions such as
  `rtl-demo` and `book-an-appointment` — each a flat `src/{route}.njk`
  file using the shared `layouts/page.njk` layout.

**Consuming the headless library without a copy step:** `.eleventy.js`
registers a Nunjucks `Environment` whose `FileSystemLoader` search path
includes both `src` and
`../lily-design-system-nunjucks-headless/components`, so
`{% from "components/button/macro.njk" import button %}` resolves
directly against the sibling package with no vendoring.

**Running it:**

```sh
pnpm install
pnpm dev     # Eleventy dev server, http://localhost:8080
pnpm build   # static site to _site/
```

Styling lives in `src/assets/css/` as plain CSS with NHS-aligned custom
properties — no Sass/SCSS/Less, no CSS framework, no bundled proprietary
font files (Frutiger with an Arial fallback, per the NHS UK spec). Its
Playwright e2e suite covers each `/components/{slug}/` route individually.

## Conventions shared across all three Nunjucks subprojects

Verified in each subproject's own `AGENTS.md`/`AGENTS/nunjucks.md`:

- **camelCase macro names, kebab-case everything else.** Nunjucks does not
  allow hyphens in identifiers, so a macro is `breadcrumbNav` while its
  file (`components/breadcrumb-nav/macro.njk`) and CSS class
  (`.breadcrumb-nav`) stay kebab-case. This split is a Nunjucks-syntax
  constraint, not a Lily naming exception.
- **One options object per macro** — `params` in the headless catalog,
  `opts` in the helpers catalog — never positional arguments. Shared keys
  across the headless catalog: `text`, `html`, `label`, `classes`,
  `attributes`.
- **`data-lily-*` hooks, not inline `<script>`**, are how the helpers
  catalog's macro output wires up to its companion `client.js` — the
  headless catalog has no client-side runtime to wire up at all.
- **Package naming**: each helper is its own npm package named
  `lily-design-system-nunjucks-{helper-name}` living as a sibling
  directory inside the `lily-design-system-nunjucks-helpers` catalog; the
  headless library and the example app are each a single package,
  `lily-design-system-nunjucks-headless` and
  `lily-design-system-nunjucks-eleventy-examples`.

## Lily concepts that apply beyond Nunjucks

For framework-agnostic Lily concepts — the headless-vs-example split, the
491-component catalog, class hooks, composition patterns, theming, and
picking among the seven supported frameworks — use
[`lily-design-system`](../lily-design-system/). This skill
covers only what's specific to choosing among and orienting inside the
three real Nunjucks subprojects.
