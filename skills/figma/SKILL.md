---
name: figma
description: Use when asked about Figma the design tool — frames, components/variants, auto layout, design tokens/styles, or Dev Mode handoff to code — as opposed to Figma Make (see figma-make), a separate AI prototyping product.
---

# Figma

Figma is a browser-based, real-time-collaborative interface design tool —
notable for multiplayer editing (like a Google Doc, but for design files)
and for exposing a real object model (components, variants, auto layout)
that maps reasonably cleanly onto how a UI is actually built in code.

## Core structure

- **File → Page → Frame** — a file contains pages; a page contains frames
  (Figma's term for an artboard — a fixed or responsive container
  representing a screen, section, or component boundary).
- **Component** — a reusable, master element; every place it's used is an
  **instance**, which inherits the master's structure/styling but can
  override specific properties. Editing the master component propagates to
  every instance — the direct design-tool analog of a shared UI component
  in code.
- **Variants** — group related components (a Button's primary/secondary/
  disabled states, for example) into one component set with named
  properties, so a designer picks a variant from a dropdown instead of
  hunting for a separately-named component per state.

## Auto layout

Figma's flexbox-like layout system: a frame with auto layout enabled
arranges its children in a row or column with configurable gap, padding,
and alignment, and resizes automatically as content changes — the direct
design-tool counterpart to CSS Flexbox (see [[css]]). Getting auto
layout right in the design file is what makes a "hug contents" / "fill
container" sizing question map directly onto real CSS sizing behavior once
built, rather than needing to be reverse-engineered from a static mockup.

## Styles and variables (design tokens)

- **Styles** (older mechanism) — named, reusable color/text/effect values
  applied across a file.
- **Variables** — Figma's newer, more powerful token system: variables can
  hold colors, numbers, strings, or booleans, support **modes** (e.g. a
  light/dark mode pair, or a density mode), and can reference other
  variables (aliasing) — closer to how a real design-token pipeline (CSS
  custom properties, a Style Dictionary config) is structured than static
  named styles were.

## Dev Mode

A dedicated inspection mode for developers: generates CSS/iOS/Android code
snippets from a selected layer, surfaces exact spacing/color/typography
values, and can show a diff between design versions. It doesn't generate
production-ready component code on its own — that's closer to
[[figma-make]]'s territory — Dev Mode is about accurate handoff and
inspection of a human-authored design file.

## Prototyping

Frames can be wired together with interactions (click, hover, drag) and
transitions to simulate real navigation/flows without writing code —
useful for user testing and stakeholder walkthroughs before a single line
of implementation exists.

## Common pitfalls

- **Detaching an instance from its component** to make a one-off tweak —
  breaks the link to the master, so future updates to the component no
  longer propagate to that instance; prefer overriding the specific
  property instead if the component supports it.
- **Absolute positioning instead of auto layout** for anything meant to be
  responsive — a design that looks right at one frame size but wasn't
  built with auto layout usually can't resize/reflow the way the
  eventual real UI needs to, and the mismatch surfaces at build time.
- **Styles/variables applied inconsistently across a file** — the same
  visual color defined as three separately-named styles is a common
  source of a design system silently drifting from itself.
- **Treating a prototype's interactions as a functional spec** — a
  click-through prototype demonstrates a happy-path flow; it doesn't
  specify error states, loading states, or edge cases unless those are
  explicitly designed too.

## Learn more

- [Figma Help Center](https://help.figma.com/)
- [Figma: Auto layout](https://help.figma.com/hc/en-us/articles/360040451373-Explore-auto-layout-properties)
- [Figma: Variables](https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma)
- [Figma: Dev Mode](https://help.figma.com/hc/en-us/articles/15023124644247-Guide-to-Dev-Mode)
- [[figma-make]] for Figma's separate AI prototype/app-generation product.
