---
name: lily-design-system-react
description: Explains what's available for React in Lily Design System and which of the three real React subprojects to reach for — the headless component library, the six *-picker helpers, or the Next.js example app. Use when someone asks what React support Lily Design System has, which React package they need, wants to see Lily's React components styled and running, or asks about the Next.js example app's routes, NHS UK styling, or App Router setup.
license: MIT OR Apache-2.0 OR GPL-2.0-only OR GPL-3.0-only OR BSD-3-Clause
---

# Lily Design System™ — React

Three real, independent React subprojects exist in this monorepo. This
skill is the umbrella: it maps the three, tells you which one you need,
and points at the two sibling skills that go deep on the first two. It
does not restate their content.

| Subproject | What it is | Reach for it when |
| --- | --- | --- |
| [`lily-design-system-react-headless`](../lily-design-system-react-headless/) | An npm package: the 490-component headless catalog as React 19 function components. Zero CSS. | You're building your own app and want the library you actually `pnpm install` and depend on. |
| [`lily-design-system-react-helpers`](../lily-design-system-react-helpers/) | Six small npm packages (`theme-picker`, `locale-picker`, `text-size-picker`, `motion-picker`, `share-picker`, `date-time-picker`) that each own one whole page-header interaction — selection, DOM application, optional persistence. | You need a ready-made preference control or share action rather than building one from catalog primitives. |
| [`lily-design-system-react-next-examples`](../lily-design-system-react-next-examples/) | A React 19 + Next.js 15 App Router application: every headless component fully styled and wired up, plus 12 composed-page demos. Not a package you install. | You want to see a component working end-to-end, copy its CSS, or run a live reference before wiring the headless library into your own app. |

## Deep-dive skills for the first two

- [`lily-design-system-react-headless`](../lily-design-system-react-headless/) — install command, import shape, the `className` + rest-props convention, controlled-prop patterns (`value`/`onChange`, `open`/`onChange`), and documented component-level gotchas (`BreadcrumbListItem`, `Alert`, `Dialog`, `ErrorSummary`, `TabBarButton`, `RadioInput`, `FileUpload`). Use it, not this skill, for anything about consuming the headless library itself.
- [`lily-design-system-react-helpers`](../lily-design-system-react-helpers/) — the six helper packages' names and shapes, the render-prop `children` convention, `"use client"` SSR boundaries, and why the idempotent-apply guard matters specifically in React (a controlled value applies once when set and again when your own `onChange` writes it back). Use it, not this skill, for anything about consuming the helper packages.

This skill's job is the map and the routing decision above — it does not
restate either sibling's install commands, prop conventions, or gotchas.

## The example app: `lily-design-system-react-next-examples`

Neither sibling skill covers this subproject — it's the one place this
skill gives real, not just pointer-level, coverage.

- **Stack**: React 19 + Next.js 15, **App Router**. Every example page
  carries the `"use client"` directive, because the demos are
  interactive and the headless components manage their own state.
  `typescript.ignoreBuildErrors: true` is set in `next.config.ts`
  because the headless library's `[key: string]: unknown` rest-props
  typing conflicts with Next's strict `ReactNode` typing — a known,
  deliberate accommodation, not a defect to fix.
- **Component wiring**: components are imported from the headless
  library through a `@pgds/*` path alias
  (`../lily-design-system-react-headless/components/*`); each of the
  490 wrapper components under `components/` is a thin re-export
  (`export { default } from "@pgds/Button"`) so example pages can also
  import locally via `@/components/*`.
- **Styling**: NHS UK design system colours, typography, spacing, and
  focus states — the same default visual reference every Lily example
  app uses — served as a runtime theme stylesheet (a managed
  `<link data-lily-theme-picker>` the theme-picker helper swaps among
  `/themes/*.css`, defaulting to NHS England for patients).
  `assets/css/app-shell.css` holds only the fixed app-shell chrome
  (skip-link, page-wrapper, site-header) that no theme should style.
- **Required routes**, per the general example-app contract every
  Lily example app follows (`AGENTS/examples.md`): `/` (home, links to
  the catalog and composed demos), `/components` (the full searchable
  catalog index), and `/components/{slug}` (one live demo per
  component with its metadata). On top of those, this app ships 12
  composed-page demos exercising multiple components together:
  `/contact-form`, `/dashboard`, `/dialog-flow`, `/file-upload-form`,
  `/navigation-and-menus`, `/page-layout`, `/rating-and-feedback`,
  `/search-and-filter`, `/settings-page`, `/tabbed-interface`,
  `/task-management`, `/timeline-and-cards`.
- **Running it**: `pnpm install && pnpm run dev`, then
  `http://localhost:4140`. `pnpm run build` / `pnpm start` for a
  production build; `pnpm test` runs the vitest + `@testing-library/react`
  suite (jsdom, vitest's own matchers only — no jest-dom).
- **This is not a package you install.** It's a running reference app.
  If a request is about how a component *looks* or how a full page is
  assembled, point here and at its CSS; if it's about the API you code
  against, point at the headless skill instead.

## React-wide conventions verified across all three

- **React 19 function components only, TypeScript, hooks only**
  (`useState`, `useEffect`, `useRef`) — no class components, no legacy
  lifecycle methods, in the headless library, the helpers, or the
  example app.
- **`className`, not `class`**, everywhere; every root element combines
  the kebab-case slug with the consumer's `className`.
- **Rest-props spread onto the root** in both the headless library and
  the helpers, so `id`, `data-*`, event handlers, and ARIA overrides
  pass straight through.
- **`"use client"` is the SSR boundary** for anything that touches the
  DOM — the helpers carry it in their own packages, and every example
  page in the Next.js app carries it too, for the same reason
  (interactive components need client rendering).
- **No hardcoded user-facing strings** — every label, heading, and
  placeholder is a prop, consistent with the rest of Lily's
  internationalisation rule.

## Framework-agnostic Lily concepts

For what "headless" means in general, what a class hook or slug is, the
491-component catalog at a glance, naming conventions, and composition
patterns that aren't React-specific, use
[`lily-design-system`](../lily-design-system/) instead —
this skill assumes that grounding and only adds the React layer on top.
