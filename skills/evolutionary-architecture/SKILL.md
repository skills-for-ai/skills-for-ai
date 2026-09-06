---
name: evolutionary-architecture
description: Use when asked to design a software architecture that supports incremental, guided change over time — architectural fitness functions, incremental change, appropriate coupling across multiple architectural dimensions — as distinct from a one-time upfront design, and the architectural counterpart to evolutionary-engineering's practice-level focus.
---

# Evolutionary Architecture

An evolutionary architecture supports guided, incremental change across
multiple dimensions of a software system — treating architecture not as
a fixed blueprint decided once upfront, but as something deliberately
built to keep changing safely as requirements, technology, and scale
change around it.

## The core mechanism: fitness functions

An **architectural fitness function** is an objective, automated,
ongoing check that a codebase's structure keeps meeting a specific
architectural characteristic — dependency direction, cyclomatic
complexity, coupling, performance, security posture, and more. See
[[fitness-function-testing]] for how to write one; evolutionary
architecture is the design philosophy that makes fitness functions
necessary and gives them their purpose (continuously verifying the
architecture's important characteristics as the system evolves, rather
than relying on periodic manual review).

## Multiple dimensions of architecture

Evolutionary architecture explicitly treats a system's architecture as
having several dimensions at once (technical, data, security,
operational, and more) that can each evolve at a different pace —
avoiding the trap of only tracking one dimension (typically the
technical one) while others drift unmonitored.

## Incremental change

Change happens in small, verifiable increments rather than large,
infrequent rewrites — each increment guided by fitness functions that
confirm the architecture still holds its important characteristics,
making it safe to evolve the system continuously rather than treating
architecture as something that's "done" after an initial design phase.

## Appropriate coupling

Components should be coupled only as tightly as the business problem
actually requires — over-coupling (including accidental coupling
through shared databases, shared libraries, or implicit contracts) is
one of the biggest obstacles to a system's ability to evolve, since it
means a change in one place forces changes everywhere it's coupled.

## Relationship to evolutionary engineering

Evolutionary architecture describes the structural properties a system
needs to support ongoing change; [[evolutionary-engineering]] describes
the day-to-day engineering practices (continuous integration, automated
testing, trunk-based development, feature flags) that make exercising
that architecture safe and routine. The two work together: an
evolvable architecture without evolutionary engineering practices is
hard to change safely in practice, and evolutionary engineering
practices without an evolvable architecture run into structural walls
no amount of process discipline can work around.

## Common pitfalls

- **No fitness functions** — an architecture described as "evolutionary"
  with no automated checks verifying its important characteristics is
  really just an architecture with good intentions and no enforcement.
- **Tracking only one architectural dimension** — monitoring code
  structure while ignoring how data, security, or operational
  characteristics are evolving leaves blind spots.
- **Confusing "evolutionary" with "no upfront design"** — evolutionary
  architecture still requires deliberate initial design; the difference
  is building in mechanisms for guided change, not skipping design
  altogether.
- **Under-investing in decoupling** — an architecture with pervasive
  tight coupling can't evolve safely regardless of how good its fitness
  functions or engineering practices are.

## Learn more

- Neal Ford, Rebecca Parsons, Patrick Kua, *Building Evolutionary Architectures* — the foundational text.
- [[fitness-function-testing]] for the concrete mechanism evolutionary architecture depends on.
- [[evolutionary-engineering]] for the engineering practices that make evolving an architecture safe day to day.
- [[software-architecture]] for the general architecture discipline this is one approach within.
