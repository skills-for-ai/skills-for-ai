---
name: lily-design-system-vue-skill
description: Use when someone asks what's available for Vue in Lily Design System, which Vue subproject they need (the headless component library, the *-picker helpers catalog, or the Nuxt.js example app), wants to run or see Vue components styled and working end-to-end, or needs the Nuxt-specific example app's routes and conventions before either sibling skill applies.
license: MIT OR Apache-2.0 OR GPL-2.0-only OR GPL-3.0-only OR BSD-3-Clause
---

# Lily Design System™ — Vue — concepts & usage

Lily ships three real Vue subprojects. This skill is the umbrella: it maps
the three, helps decide which one a task needs, and covers the one of the
three — the Nuxt.js example app — that neither of its two sibling skills
covers. It does not restate either sibling's content.

## The three Vue subprojects

| Subproject | What it is | Reach for it when |
| --- | --- | --- |
| [`lily-design-system-vue-headless`](../lily-design-system-vue-headless/) | The 491-component catalog as unstyled `.vue` SFCs — semantic HTML, ARIA, keyboard behaviour, **no CSS**. | You're depending on Lily components in your own app and will style them yourself. |
| [`lily-design-system-vue-helpers`](../lily-design-system-vue-helpers/) | Six small opinionated packages (`theme-picker`, `locale-picker`, `text-size-picker`, `motion-picker`, `share-picker`, `date-time-picker`) that each own one whole page-header interaction — popup, keyboard, and (for the four preferences) applying + persisting a value. | You need a ready-made preference control, a share action, or a date/time form field rather than assembling one from catalog primitives. |
| [`lily-design-system-vue-nuxt-examples`](../lily-design-system-vue-nuxt-examples/) | A fully styled Nuxt 3 reference app rendering every catalog component plus composed pages, NHS UK visual reference. | You want to see a component running and styled before wiring it in, or want working CSS to copy rather than write from scratch. |

For the deep, framework-specific contracts of the first two, use their own
skills:

- [`lily-design-system-vue-headless-skill`](../lily-design-system-vue-headless-skill/) —
  install/import, the Vue 3 SFC consumption idiom (`:class` binding,
  `v-bind="$attrs"`, `<slot />`, `defineModel()`), naming and composition
  pointers.
- [`lily-design-system-vue-helpers-skill`](../lily-design-system-vue-helpers-skill/) —
  each of the six packages' npm name, the three shape families
  (icon-button-plus-listbox, disclosure-of-links, field-plus-dialog), and
  their `v-model` idiom.

This skill does not restate either — it only tells you which one to open.

## The example app, in full (not covered elsewhere)

`lily-design-system-vue-nuxt-examples` is a Vue 3 + Nuxt 3 app demonstrating
every headless component and several composed pages, styled with the NHS UK
design system's colours, typography, spacing, and focus states (the current
default visual reference for all Lily example apps — see
`AGENTS/examples.md` at the monorepo root). Component styling comes from a
runtime theme stylesheet: a managed `<link data-lily-theme-picker>` that the
theme-picker helper swaps among `/themes/*.css` (NHS England patient by
default); `assets/css/app-shell.css` (`assets/css/nhs.css` in the app's own
docs) holds only the fixed app-shell chrome no theme should style.

Required routes, same contract every Lily example app follows
(`AGENTS/examples.md`):

- `/` — home page, links to the components index and composed pages.
- `/components` — searchable index of the full catalog.
- `/components/{slug}` — one live demo per component, with its metadata
  (description, props, ARIA, keyboard, references).

Composed-page demonstrations on top of those: `/contact-form`,
`/dashboard`, `/dialog-flow`, `/file-upload-form`, `/navigation-and-menus`,
`/page-layout`, `/rating-and-feedback`, `/search-and-filter`,
`/settings-page`, `/tabbed-interface`, `/task-management`,
`/timeline-and-cards`.

Run it:

```bash
pnpm install
pnpm run dev
# http://localhost:3640
```

`pnpm run build` builds for production, `pnpm test` runs the Vitest suite
against `tests/components/`.

Nuxt-specific things worth knowing when reading or copying this app:

- File-based routing under `pages/`; components under `components/` are
  auto-imported, no explicit `import` needed in a page.
- `nuxt.config.ts` wires up the runtime theme stylesheet; `app.vue` is the
  root layout.
- A real, fixed defect: the locale-picker helper here originally never
  restored a persisted locale on reload, because its `useHead`-driven
  external ref was seeded with a concrete default value instead of empty,
  defeating the picker's own value-over-storage priority chain. Fixed by
  seeding that ref empty — a Nuxt-specific pitfall (an SSR-safe external
  ref needs an *empty* initial value when a client-side preference is
  meant to win) worth knowing if you're wiring the same helper into your
  own Nuxt app.

## What spans all three subprojects

- **Composition API only.** Every `.vue` file across all three uses
  `<script setup lang="ts">` — no Options API, no `mixins`, no
  `defineComponent` wrapper around an SFC.
- **TypeScript** throughout, with `defineProps<{}>()` + `withDefaults()`,
  `defineModel()` for two-way binding, `v-bind="$attrs"` for pass-through
  attributes, and emitted events rather than callback props.
- **The same 491-component catalog and the same six helpers** as every
  other framework Lily ships — Vue is one of seven full-catalog headless
  languages, and `lily-design-system-svelte-helpers` is the canonical
  reference the Vue helpers are ported from.
- **Vitest** is the test runner across all three (plus Vue Testing Library
  / `@vue/test-utils` and jsdom); the headless library and the helpers
  catalog explicitly forbid jest-dom matchers, using vitest's built-in
  matchers only.

## Framework-agnostic Lily concepts

For what "headless" means, what a class hook or a slug is, the catalog
shape, naming conventions, and composition patterns independent of any one
framework, use [`lily-design-system-skill`](../lily-design-system-skill/)
instead — none of that is restated here.
