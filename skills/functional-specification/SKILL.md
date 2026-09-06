---
name: functional-specification
description: Use when asked to write a functional specification — user interface descriptions, inputs/outputs, technical details, error handling — as the detailed requirements document a project-scope's requirements section points to, and the source of truth acceptance-testing checks delivered software against.
---

# Functional Specification

A functional specification describes the functional requirements of a
software system or product — what it should do and how it should behave,
in terms of features, functionality, and user interactions. It's the
detailed elaboration of what [[project-scope]]'s "requirements"
section only names at a summary level.

## What it typically includes

- **User interface descriptions** — often via user stories, use cases
  (see [[use-case-diagram]]), mockups, or wireframes, giving a
  concrete picture of the intended interaction, not just a prose
  description.
- **Inputs and outputs** — including example data, so a reader (or an
  automated test) can check a specific case's expected result
  unambiguously.
- **Technical specifications** — data structures, algorithms,
  certifications, licenses, and other technical constraints the
  implementation must satisfy.
- **Error and exception handling** — how the system should behave under
  unforeseen or invalid conditions, not just the happy path.

## Who writes it, and for whom

Typically created by business analysts or software architects,
collaborating with the development team, project managers, and
stakeholders. It needs to be clear and concise enough that every party —
technical and non-technical — genuinely understands it the same way,
since the document's whole value depends on shared, unambiguous
understanding rather than each reader interpreting it differently.

## Why it matters

Gives the development team a clear, detailed roadmap to build against,
and gives all stakeholders a common understanding of what the system
should do — preventing the misunderstandings and miscommunications that
arise when different people carry different mental models (see
[[mental-model]]) of what's actually being built. It also serves as
the basis for quality assurance and [[acceptance-testing]] — a
system is judged against what the functional spec said it should do, not
against an unwritten shared assumption.

## Common pitfalls

- **Vague or ambiguous requirement language** — "the system should be
  fast" or "the interface should be intuitive" can't be verified against;
  every requirement should be specific enough that a reader can check
  whether delivered software actually satisfies it.
- **No error/exception handling coverage** — a spec that only describes
  the happy path leaves the actual behavior under invalid input or
  failure conditions to be improvised during implementation.
- **Written without stakeholder collaboration** — a spec authored in
  isolation by one analyst, without checking it against what
  stakeholders actually need, risks documenting the wrong thing clearly
  rather than the right thing.
- **Left stale as requirements evolve** — a functional spec that isn't
  updated as understanding changes stops being the shared source of
  truth it's meant to be (see [[specification-driven-development]]'s
  identical discipline of keeping a spec and reality reconciled).

## Learn more

- [[project-scope]] for the higher-level requirements summary a functional spec elaborates.
- [[acceptance-testing]] for verifying delivered software against the functional spec.
- [[specification-driven-development]] for the broader discipline of treating a written spec as the source of truth.
- [[use-case-diagram]] for a common way to document user-interaction scenarios within a functional spec.
