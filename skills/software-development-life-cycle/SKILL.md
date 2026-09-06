---
name: software-development-life-cycle
description: Use when asked to explain or plan around the software development life cycle (SDLC) — Planning, Requirements, Design, Implementation, Testing, Deployment, Maintenance — as the umbrella process this collection's more specific skills (test-driven-development, functional-specification, and others) each occupy one phase of.
---

# Software Development Life Cycle (SDLC)

The software development life cycle (SDLC) is the process software
development teams follow to create software applications — a sequence of
phases meant to ensure the final product is efficient, reliable, and
actually meets user requirements, rather than assembled ad hoc.

## The phases

1. **Planning** — define the project's scope (see
   [[project-scope]]), goals, objectives, and required resources;
   this stage largely determines the project's feasibility before
   significant investment.
2. **Requirements gathering and analysis** — identify functional and
   non-functional requirements through interviews, surveys, and research
   into what users actually need (see
   [[functional-specification]] and [[voice-of-the-customer]]
   for this in depth).
3. **Design** — a detailed plan for the software's structure and
   features: functionality, user interface, data storage, security, and
   other significant technical decisions (see
   [[class-diagram]], [[entity-relationship-diagram]], and
   this collection's other diagram skills for common design-artifact
   types).
4. **Implementation** — writing the code from the design documents.
5. **Testing** — confirming the software behaves as expected, via
   automated and/or manual testing (see [[unit-testing]],
   [[integration-testing]], [[system-testing]], and the many
   other testing-technique skills in this collection).
6. **Deployment** — releasing the software to end users, including
   training, documentation, and support as needed.
7. **Maintenance** — ongoing updates: bug fixes, feature enhancements,
   and security updates to keep the software meeting users' evolving
   needs.

## Why the phase structure matters, even in an iterative process

The classic SDLC phases are often described linearly (closer to
[[project-management]]'s waterfall model), but the same phases
recur within each iteration of an agile process too — a single sprint
still moves through some version of requirements, design, implementation,
testing, and (via continuous deployment) release. The value of naming the
phases explicitly is making sure none is skipped, whether they happen
once per project or repeatedly per iteration.

## How this collection's skills map onto SDLC phases

Most of this collection's more specific skills occupy one phase: agile
chartering and liftoff ([[agile-charter]], [[agile-liftoff]])
and scope/WBS work ([[project-scope]],
[[work-breakdown-structure]]) belong to Planning; functional specs
and diagrams belong to Requirements/Design; TDD/BDD
([[test-driven-development]], [[behavior-driven-development]])
span Implementation and Testing; the many testing-technique skills belong
to Testing; and [[agile-delivery]]'s continuous delivery pipeline
spans Deployment and ongoing Maintenance.

## Common pitfalls

- **Skipping requirements analysis to start coding sooner** — produces
  software that's technically well-built but doesn't actually match what
  users need, discovered expensively late.
- **Treating Maintenance as an afterthought** — a plan that only budgets
  for phases through Deployment ignores that most software spends most
  of its life in Maintenance, often the largest total-cost phase.
- **No feedback loop from Testing/Deployment back to Requirements** — a
  strictly linear mental model of SDLC misses that real projects
  routinely learn something in later phases that should revise earlier
  decisions.
- **Assuming SDLC implies waterfall** — the phases are a useful checklist
  of *what* needs to happen; they don't mandate *when* or in what
  overall process shape (see [[project-management]]'s waterfall
  vs. agile vs. hybrid comparison).

## Learn more

- [[project-scope]], [[functional-specification]] for the Planning/Requirements phases in depth.
- [[test-driven-development]], [[unit-testing]] for the Implementation/Testing phases.
- [[agile-delivery]] for a continuous, pipeline-based approach to Deployment and Maintenance.
- [[project-management]] for the broader delivery-methodology choice (waterfall/agile/hybrid) SDLC phases fit within.
