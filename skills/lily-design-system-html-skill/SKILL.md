---
name: lily-design-system-html-skill
description: Explains what's available for plain HTML in Lily Design System and helps decide which of the three real HTML subprojects to reach for — the full-catalog headless component library, the six *-picker helper web components, or the styled NHS UK example application. Use when someone asks what Lily offers for plain/vanilla HTML with no framework, which HTML subproject they need, how the HTML headless library relates to the HTML helpers catalog or the example app, wants to see Lily components styled and running with no framework runtime, or asks how the plain-HTML catalogs differ from the separate Web Components catalogs.
license: MIT OR Apache-2.0 OR GPL-2.0-only OR GPL-3.0-only OR BSD-3-Clause
---

# Lily Design System™ — HTML umbrella

Plain HTML in Lily Design System is not one subproject — it is three, each
with its own skill for the deep contract. This skill is the entry point: it
maps the three, tells you which one answers a given question, and gives real
coverage to the one of the three that has no dedicated skill of its own, the
example application.

Root of the ecosystem: [../spec/index.md](../spec/index.md). General Lily
concepts (headless-vs-example, the 491-component catalog, naming, framework
choice): [`lily-design-system-skill`](../lily-design-system-skill/).

## The three real HTML subprojects

| Subproject | What it is | Reach for it when |
| --- | --- | --- |
| [`lily-design-system-html-headless`](../lily-design-system-html-headless/) | The full-catalog (491/491) headless component library: one self-contained `components/{slug}.html` file per component — an HTML comment header, semantic markup with ARIA and a kebab-case class, and, where needed, an embedded vanilla-JS `<script>` IIFE. Zero CSS. It is also the **reference implementation** every other framework binding mirrors. | You want the markup and behaviour for a component and will style it yourself; you're copying a snippet or including it server-side with no framework and no build step. |
| [`lily-design-system-html-helpers`](../lily-design-system-html-helpers/) | Six vanilla-JS **custom elements** — `<theme-picker>`, `<locale-picker>`, `<text-size-picker>`, `<motion-picker>`, `<share-picker>`, `<date-time-picker>` — that sit alongside the headless library and each own one whole interaction (a page-header preference, an action, or a form value) end to end. | You need a page-header preference control, a share action, or a typeable date/time field — not a catalog component, a self-contained interactive widget. |
| [`lily-design-system-html-css-js-examples`](../lily-design-system-html-css-js-examples/) | The styled reference application: every catalog component demonstrated live, NHS UK visual styling, and composed multi-component pages. | You want to see a component fully styled and running, or want working CSS to copy rather than write your own. |

Each is scoped by its own sibling skill for the deep contract — this skill
does not restate them:

- [`lily-design-system-html-headless-skill`](../lily-design-system-html-headless-skill/) —
  the component-file shape, the copy-and-use idiom, class-hook theming.
- [`lily-design-system-html-helpers-skill`](../lily-design-system-html-helpers-skill/) —
  the three markup shapes, the attribute/property/`CustomEvent` surface,
  install and consumption.

## The example application, in full

`lily-design-system-html-css-js-examples` has no dedicated skill of its own —
this is where its contract lives.

- **Stack**: plain HTML + vanilla JavaScript. No TypeScript, no bundler, no
  frameworks. **No build tools required** to run or extend the site — pages
  are static HTML files you can open or serve directly.
- **Styling**: component appearance comes from a runtime theme stylesheet,
  not baked-in CSS. A managed `<link data-lily-theme-picker>` element is
  swapped among the root [`themes/`](../themes/) stylesheets by the
  `theme-picker` helper (default: NHS England, patient-facing).
  `assets/css/app-shell.css` holds only the fixed app-shell chrome (skip
  link, header/footer layout) that no theme should override — everything
  else targets the same kebab-case Lily class hooks the headless library
  emits.
- **Required routes** (per [`AGENTS/examples.md`](../AGENTS/examples.md), the
  contract every example app follows): `/` (home, links to the catalog and
  composed pages), `/components` (searchable index of all 491 components),
  `/components/{slug}` (one live demo per component with its metadata,
  props, ARIA, keyboard, references).
- **Composed pages**: `contact-form`, `dashboard`, `dialog-flow`,
  `file-upload-form`, `navigation-and-menus`, `page-layout`,
  `rating-and-feedback`, `search-and-filter`, `settings-page`,
  `tabbed-interface`, `task-management`, `timeline-and-cards`, plus
  `book-an-appointment` (a flagship five-step wizard) and an `rtl-demo`
  (`dir="rtl"` with Arabic content) — each exercises several catalog
  components together.
- **Helpers vendoring**: this app does not build the helpers catalog itself
  — the root `bin/sync` tool copies each helper's already-built
  `dist/index.js` from `lily-design-system-html-helpers` into
  `pages/assets/js/{picker}.js` (confirmed for `theme-picker`,
  `locale-picker`, `text-size-picker`) so the pages can `<script>`-include
  the custom elements as static files, matching how the rest of the app
  vendors everything else.
- **Testing**: WebDriverIO (`npx wdio run wdio.conf.js`), the same
  browser-based tool the headless library's own component tests use.
- **Accessibility**: WCAG 2.2 AAA target, skip-link first, standard
  landmarks, every demo flow completable by keyboard alone — the general
  example-app contract in [`AGENTS/examples.md`](../AGENTS/examples.md)
  applies here like every other example subproject.

## What spans all three

- **No CSS framework, ever.** Tailwind/DaisyUI/Bootstrap are excluded even
  in the styled example app — its CSS is hand-written custom properties
  against the Lily class hooks.
- **Kebab-case class hooks are the one styling contract.** The headless
  library's root class, the helpers' `{helper}-button`/`{helper}-list`/
  `{helper}-option` classes, and the example app's CSS selectors all use
  the same slugs — no `nhsuk-`-style or other prefix appears anywhere.
- **Vanilla JavaScript, no TypeScript**, across the headless library, the
  helpers, and the example app.
- **No hardcoded user-facing strings** — every label, placeholder, and
  error message is supplied by the consumer or the example page's own
  markup/attributes, never baked into a component.

## The Web Components catalogs are a different, separate pair

Lily also ships two catalogs under `<lily-*>` tags —
[`lily-design-system-web-components-headless`](../lily-design-system-web-components-headless/)
(native custom elements, no framework runtime, but a deliberately **partial**
33/491 catalog) and
[`lily-design-system-web-components-helpers`](../lily-design-system-web-components-helpers/)
(an independent copy of these HTML helpers under `<lily-*-picker>` tags).
Both helpers catalogs ship custom elements, but the two *headless* catalogs
differ in kind, not just tag prefix: HTML headless is full-catalog (491/491)
semantic markup with an optional script, while Web Components headless is a
partial slice of the catalog built as autonomous custom elements. For that
pair's own conventions and scope, use
[`lily-design-system-web-components-skill`](../lily-design-system-web-components-skill/)
(and its own `-headless-skill` / `-helpers-skill` siblings) rather than this
one.

## When this isn't the right skill

- **General Lily concepts** not specific to plain HTML (what "headless"
  means, the catalog at a glance, composition patterns, picking a
  framework) — use [`lily-design-system-skill`](../lily-design-system-skill/).
- **The HTML headless library's own contract** (file shape, keyboard/ARIA
  detail per component) — use
  [`lily-design-system-html-headless-skill`](../lily-design-system-html-headless-skill/).
- **The HTML helpers' own contract** (per-helper markup, attributes,
  events) — use
  [`lily-design-system-html-helpers-skill`](../lily-design-system-html-helpers-skill/).
- **The Web Components catalogs** — use
  [`lily-design-system-web-components-skill`](../lily-design-system-web-components-skill/).
