---
name: software-architecture-skill
description: Use when asked to design or explain a single system's high-level structure — components, their responsibilities, and how they interact — as the general discipline underlying specific tools/techniques like arc42-skill, architecture-decision-record-skill, domain-driven-design-skill, and system-quality-attributes-skill.
---

# Software Architecture Skill

Software architecture is the discipline of designing a software system's
high-level structure: its components, their responsibilities, and the
relationships and interactions between them — the set of decisions that
are hardest and most expensive to change later, made deliberately rather
than left to accumulate implicitly.

## What architecture decides

- **Decomposition** — how a system divides into modules, services, or
  components, and what each is responsible for (see
  [[component-diagram-skill]], [[package-diagram-skill]]).
- **Interaction** — how those parts communicate and coordinate at
  runtime (see [[sequence-diagram-skill]], [[activity-diagram-skill]]).
- **Deployment topology** — how software maps onto physical or virtual
  infrastructure (see [[deployment-diagram-skill]]).
- **Quality attributes** — the non-functional characteristics
  (reliability, scalability, maintainability, and more) a system must
  satisfy; see [[system-quality-attributes-skill]] for the detailed
  vocabulary.
- **Key decisions and their rationale** — see
  [[architecture-decision-record-skill]] and [[decision-records-skill]]
  for capturing these so they remain traceable over time.

## Architectural styles and approaches

Software architecture draws on a range of specific approaches depending
on context — [[domain-driven-design-skill]] for aligning structure with
business domain concepts, various styles (layered, microservices,
event-driven, and others) for organizing components, and documentation
templates like [[arc42-skill]] for writing the resulting design down in a
structured, reviewable form.

## Software architecture vs. enterprise architecture

Software architecture concerns a single system or product.
[[enterprise-architecture-skill]] operates one level up, aligning many
systems, business processes, and technology investments across an
entire organization — a large organization's enterprise architecture
typically constrains and informs the architecture of each individual
system beneath it.

## Common pitfalls

- **Treating architecture as a one-time, upfront activity** — most
  architectures evolve as a system's requirements and scale change;
  documentation (see [[arc42-skill]]) and decisions (see
  [[architecture-decision-record-skill]]) need to be revisited, not
  frozen at project kickoff.
- **No explicit quality-attribute targets** — designing structure without
  naming which quality attributes actually matter for this system (see
  [[system-quality-attributes-skill]]) risks optimizing for the wrong
  thing, or nothing in particular.
- **Undocumented decisions** — architectural choices made informally,
  with no record of the alternatives considered or the reasoning behind
  the final choice, are much harder to revisit correctly later.
- **Over-architecting for hypothetical future scale** — designing for
  requirements the system doesn't actually have yet adds complexity and
  cost without corresponding present benefit.

## Learn more

- [[arc42-skill]] for a structured template for documenting a software architecture.
- [[architecture-decision-record-skill]], [[decision-records-skill]] for recording individual architectural decisions.
- [[domain-driven-design-skill]] for aligning architecture with business-domain concepts.
- [[system-quality-attributes-skill]] for the non-functional-requirement vocabulary architecture decisions serve.
- [[enterprise-architecture-skill]] for the organization-wide counterpart this discipline sits beneath.
