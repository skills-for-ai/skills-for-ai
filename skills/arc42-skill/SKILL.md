---
name: arc42-skill
description: Use when asked to document a software architecture using the arc42 template — its twelve sections (context, solution strategy, building blocks, runtime/deployment views, cross-cutting concepts, decisions, quality requirements, risks) — as a documentation structure that pairs with diagram types like component-diagram-skill and deployment-diagram-skill rather than replacing them.
---

# Arc42 Skill

Arc42 is an open-source, process-agnostic template for documenting
software and system architectures (created by Gernot Starke and Peter
Hruschka) — a field-tested structure well-suited to agile and lean teams,
emphasizing pragmatism over ceremony.

## The twelve sections

Introduction and goals, constraints, context and scope, solution
strategy, building block view, runtime view, deployment view,
cross-cutting concepts, architectural decisions, quality requirements,
risks and technical debt, and a glossary. **Every section is optional** —
teams document only what their specific project actually needs, rather
than filling out a template exhaustively regardless of relevance.

## The views, mapped to this collection's diagram skills

- **Building block view** — the static decomposition of a system into
  modules, components, or microservices; typically documented with a
  [[component-diagram-skill]] or [[package-diagram-skill]].
- **Runtime view** — dynamic behavior and interactions during execution;
  typically documented with a [[sequence-diagram-skill]] or
  [[activity-diagram-skill]].
- **Deployment view** — how software maps onto physical or virtual
  infrastructure; typically documented with a
  [[deployment-diagram-skill]].
- **Cross-cutting concepts** — rules and patterns spanning multiple parts
  of the system (see [[system-quality-attributes-skill]] for the broader
  quality-attribute vocabulary these often address).
- **Architectural decisions** — records high-stakes choices and their
  rationale; this is exactly what [[architecture-decision-record-skill]]
  and [[decision-records-skill]] are built for, and arc42 explicitly
  gives them a named home in the overall document rather than leaving
  them scattered.

## Why teams adopt it

Arc42 standardizes *where* architectural information lives, giving
stakeholders a predictable structure for finding answers rather than
hunting through an ad hoc wiki. It's tool-agnostic — works equally well
in Confluence, Word, Markdown, or a documentation-as-code pipeline — and
integrates cleanly with visual modeling approaches like the C4 model
(see [[plantuml-diagram-skill]]'s C4-model support), where context
diagrams map directly into specific arc42 sections.

## Common pitfalls

- **Filling out every section regardless of relevance** — defeats the
  template's own pragmatism principle; a small project's arc42 document
  should be much shorter than a large, complex system's.
- **Treating arc42 as a one-time document** — architecture documentation
  that isn't updated as decisions and the system evolve becomes stale
  and misleading; pair it with the same reconciliation discipline
  [[specification-driven-development-skill]] applies to any spec.
- **Documenting decisions inline without a structured decision record**
  — the "architectural decisions" section works best as a set of
  individual decision records (see [[architecture-decision-record-skill]])
  rather than unstructured prose, so each decision's context and
  consequences stay traceable.
- **No connection to actual diagrams** — describing the building block
  or runtime view purely in prose, with no accompanying
  [[component-diagram-skill]] or [[sequence-diagram-skill]], makes the
  section harder to verify against the real system.

## Learn more

- [arc42.org](https://arc42.org/) — the official template and documentation.
- [[architecture-decision-record-skill]], [[decision-records-skill]] for structuring the "architectural decisions" section.
- [[component-diagram-skill]], [[deployment-diagram-skill]], [[sequence-diagram-skill]] for documenting the building-block, deployment, and runtime views respectively.
