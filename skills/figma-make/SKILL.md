---
name: figma-make
description: Use when asked what Figma Make is — an AI-powered tool inside Figma for generating interactive prototypes and web apps from natural-language prompts. As opposed to Figma the design tool itself (see figma). Verify current capabilities/availability at figma.com/make before repeating specifics from this file — captured 2026-09-05, and this is a fast-moving product area.
---

# Figma Make

Figma Make is Figma's AI-powered tool for generating interactive
prototypes and working web apps from natural-language prompts, on a
canvas the product describes as "code-backed and visually editable." It's
a separate product from core Figma design ([[figma]]), though it
integrates with it.

*Facts below were read from [figma.com/make](https://www.figma.com/make/)
on 2026-09-05 — this is an actively evolving product; re-check before
treating a specific capability or limitation here as still current.*

## Core workflow

- **Prompting** — describe the desired interface in text (or voice-to-text);
  attach Figma frames, images, videos, audio, PDFs, or plain text as
  context for the generation.
- **Plan mode** — before generating, Figma Make can produce a structured,
  editable plan to clarify intent, rather than jumping straight to output
  from an ambiguous prompt.
- **Editing** — the generated result sits on a visual canvas that's both
  AI-promptable and directly, manually editable. **Point-and-edit** lets
  someone click a specific element and prompt a targeted change to just
  that part, rather than re-prompting the whole screen.
- **Version history** — every AI and manual edit is tracked, with preview
  and restore.

## Design-system integration

- **Make Kits** — sync npm packages, library styles, and design guidelines
  into Make so generation produces output consistent with an existing
  design system rather than generic/ungrounded UI.
- **Figma file attachment** — attach existing Figma frames as design
  context so generation follows established visual patterns.
- **MCP connectors** — Model Context Protocol integrations let Make pull
  in external documents, tasks, and data from other applications as
  additional context (see the Model Context Protocol reference in
  [[claude-ai]] for what MCP is, independent of Figma).

## Collaboration and publishing

- **Comments and annotations** — real-time feedback directly on a
  prototype; annotations can select an element and batch multiple
  requested changes to send to the model together.
- **Sharing** — Make files can be shared for feedback/viewing, including a
  mobile experience for previewing and commenting on a prototype natively
  on a phone.
- **Local codebase / shipping to production** — listed as "coming soon" as
  of the capture date; at that time, Make's own page did not specify exact
  code export formats, target frameworks, or deployment platforms beyond
  the visually-editable, code-backed canvas itself.

## Reusability

- **Custom Skills** — package a frequently-repeated workflow into a
  reusable instruction set (not to be confused with a Claude Code skill
  like this one — same word, different product's own feature).
- **Templates** — save and reuse a proven prompt/workflow pattern across
  multiple projects.

## Common pitfalls

- **Assuming full production-code export exists today** — as of the
  capture date, direct-to-production shipping from a local codebase was
  explicitly listed as not yet available; verify current status before
  promising a client-ready code export path.
- **Treating "Custom Skills" (a Figma Make feature) and a Claude Code
  skill (like this file) as the same concept** — they're unrelated
  products that happen to use the same word for "a packaged, reusable set
  of instructions."
- **Assuming generation quality is uniform without Make Kits/design
  context** — the product's own positioning ties "high-fidelity" output
  specifically to syncing real design-system assets in, not to prompting
  alone.
- **Reporting specific benchmarks, pricing, or availability tiers from
  training-data memory** — this is a newer, fast-changing product area;
  check figma.com/make directly rather than asserting specifics not
  confirmed on a recent visit.

## Learn more

- [figma.com/make](https://www.figma.com/make/) — the primary source for
  this skill; re-fetch before relying on a specific capability above.
- [[figma]] for Figma's core design tool.
