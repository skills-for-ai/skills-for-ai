---
name: low-code
description: Use when asked about low-code development platforms — visual/drag-and-drop workflows with some custom scripting, target use cases, trade-offs vs. traditional development — as the more customizable sibling of no-code.
---

# Low-Code

Low-code is an approach to software development using visual, drag-and-
drop tools to build applications with minimal hand-written code —
allowing custom code (scripts, expressions, API integrations) where the
visual tools alone aren't sufficient. See [[no-code]] for the more
restrictive sibling approach that eliminates hand-written code entirely.

## What low-code platforms typically offer

Visual workflow/logic builders, pre-built UI components, drag-and-drop
form and page design, and built-in integrations with common services
(databases, authentication providers, third-party APIs) — combined with
an escape hatch for custom code (a scripting language, custom API calls,
or embedded code blocks) when a requirement exceeds what the visual
tools express directly. Examples include OutSystems, Mendix, Microsoft
Power Apps, and Retool.

## When low-code fits well

Internal tools, admin dashboards, workflow automation, and MVPs/
prototypes where development speed matters more than deep
customizability — a low-code platform can produce a working application
far faster than hand-coding one from scratch, especially for teams with
limited engineering capacity relative to the number of internal tools
they need.

## Trade-offs vs. traditional development

- **Speed vs. flexibility** — low-code trades some ultimate flexibility
  for much faster initial development; requirements that fall outside
  the platform's model can be expensive or impossible to satisfy.
- **Vendor lock-in** — applications built on a specific low-code
  platform are typically difficult or impossible to migrate to another
  platform or to traditional code without substantial rework.
- **Scalability and performance ceilings** — some low-code platforms
  have real limits on performance, data volume, or customization at
  scale that a growing application can eventually hit.
- **"Citizen developer" access** — low-code (more so than traditional
  development, though less so than [[no-code]]) can let people without
  full software-engineering backgrounds build real, if limited,
  applications — a genuine benefit for some organizations and a
  governance challenge for others.

## Common pitfalls

- **Choosing low-code for a product with deep, evolving customization
  needs** — a genuinely complex, long-lived product often outgrows a
  low-code platform's model faster than the initial speed benefit was
  worth.
- **No governance over who builds what** — "citizen developer" access
  without any review process can produce a sprawl of ungoverned,
  undocumented internal tools that become a maintenance burden.
- **Underestimating migration cost if the platform is later outgrown** —
  vendor lock-in means an eventual migration off the platform can cost
  more than building traditionally would have, if that outcome was
  foreseeable.
- **Treating low-code as a substitute for good requirements analysis** —
  a low-code platform speeds up building, not deciding what to build;
  skipping proper scoping still produces the wrong application, just
  faster.

## Learn more

- [[no-code]] for the more restrictive, code-free sibling approach.
- [[software-development-life-cycle]] for the broader process a low-code project still needs to follow.
