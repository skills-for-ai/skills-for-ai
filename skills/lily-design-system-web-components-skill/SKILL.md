---
name: lily-design-system-web-components-skill
description: Explains what's available as native Web Components in Lily Design System and which of the two real Web Components subprojects to reach for — the partial (33/491) headless custom-element catalog, or the six `<lily-*-picker>` helpers catalog. Use when someone asks what Lily offers as native Web Components, which Web Components subproject they need, how the Web Components headless catalog relates to the Web Components helpers catalog, or asks whether there's a Web Components example application (there isn't one yet).
license: MIT OR Apache-2.0 OR GPL-2.0-only OR GPL-3.0-only OR BSD-3-Clause
---

# Lily Design System™ — Web Components umbrella

Native Web Components in Lily Design System means exactly two real
subprojects, not seven or three like the framework-paired catalogs. This
skill is the entry point: it maps the two, tells you which one answers a
given question, and states plainly the one thing that does **not** exist
yet — a Web Components example application.

Root of the ecosystem: [../spec/index.md](../spec/index.md). General Lily
concepts (headless, class hook, slug, helper, theme — none of it specific
to the native-custom-element idiom): [`lily-design-system-skill`](../lily-design-system-skill/).

## The two real subprojects

- **[`lily-design-system-web-components-headless`](../lily-design-system-web-components-headless/)**
  — a **deliberately partial** headless catalog: 33 of the canonical 491
  components as native custom elements (`class X extends HTMLElement`,
  `customElements.define("lily-{slug}", X)`), no framework runtime, no
  build step to consume. It proves the pattern across every major category
  rather than clustering in one; it is not a claim of parity with the
  seven full-catalog headless libraries (HTML, Svelte, React, Vue, Angular,
  Blazor, Nunjucks). Deep dive, exact 33-component list, and the two
  architecture decisions (autonomous custom elements over customized
  built-ins; light-DOM-only):
  [`lily-design-system-web-components-headless-skill`](../lily-design-system-web-components-headless-skill/).
- **[`lily-design-system-web-components-helpers`](../lily-design-system-web-components-helpers/)**
  — the full six-helper `*-picker` catalog (`theme-picker`, `locale-picker`,
  `text-size-picker`, `motion-picker`, `share-picker`, `date-time-picker`),
  each a `<lily-*-picker>` custom element. It is a maintainer-directed
  **independent copy** of `lily-design-system-html-helpers` (itself already
  six vanilla custom elements), differing only in tag prefix
  (`<lily-theme-picker>` rather than bare `<theme-picker>`) and package
  naming — nothing ports between the two catalogs automatically. Deep dive
  and the precise provenance statement:
  [`lily-design-system-web-components-helpers-skill`](../lily-design-system-web-components-helpers-skill/).

**This skill does not restate either sibling's content.** The partial
33/491 scope, the architecture decisions, and the full component list live
in the headless skill; the six helpers, their markup shapes, and the
provenance relationship live in the helpers skill. Go there for the
contract; come here only to decide which one you need.

## The real, current gap: no Web Components example application

Unlike every other framework family in this monorepo, Web Components has
**no example application**. `AGENTS/lily.md`'s "Subprojects for web app
examples" list has exactly seven entries — HTML+CSS+JS, Svelte SvelteKit,
React Next.js, Vue Nuxt.js, Angular Analog, Blazor Web, Nunjucks Eleventy —
and there is no `lily-design-system-web-components-*-examples` directory at
the repository root. If someone asks to see a Web Components component
styled and running end to end, or asks for a `/components/{slug}` demo
page in this idiom, the honest answer is that it does not exist yet. A
maintainer could add one later, but as of this writing none has. Do not
invent routes, a package name, or a directory for it, and do not imply the
gap is filled by the headless catalog's own Storybook stories or the
helpers catalog's `examples/*.html` files — those are dev-only, not a
styled reference application with the three required routes every other
framework's example app carries.

## How this differs from the plain-HTML catalogs

Both plain HTML and Web Components ship helpers as custom elements — the
Web Components helpers catalog is in fact copied from the HTML helpers
catalog. But the two headless catalogs are not the same thing:
`lily-design-system-html-headless` is one of the seven full-catalog
(491/491) headless libraries, targeting plain HTML with no custom-element
registration; `lily-design-system-web-components-headless` is a separate,
later, deliberately partial (33/491) project built on the native
`customElements` platform API, with its own light-DOM-only and
autonomous-custom-element architecture decisions. Don't conflate the two
when answering a scope question — see
[`lily-design-system-html-skill`](../lily-design-system-html-skill/) for
the plain-HTML side's own three-subproject map (headless, helpers,
example app).

## When this isn't the right skill

- **The deep contract for either real subproject** — use
  [`lily-design-system-web-components-headless-skill`](../lily-design-system-web-components-headless-skill/)
  or
  [`lily-design-system-web-components-helpers-skill`](../lily-design-system-web-components-helpers-skill/).
- **General Lily concepts** not specific to Web Components — use
  [`lily-design-system-skill`](../lily-design-system-skill/).
- **Plain HTML** (no custom-element registration) — use
  [`lily-design-system-html-skill`](../lily-design-system-html-skill/).
