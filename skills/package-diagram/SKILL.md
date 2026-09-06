---
name: package-diagram
description: Use when asked to model the high-level organization of a system into packages/modules and their dependencies — as the highest-abstraction structural UML diagram, sitting above class diagrams (see class-diagram) rather than showing individual classes. See plantuml for the text-based syntax to actually draw one.
---

# Package Diagram

A package diagram is a UML static structure diagram showing how the
packages that make up a software system are organized and arranged. A
package is a container grouping similar classes, interfaces, and other
elements together, providing a higher level of abstraction than a
[[class-diagram]] shows on its own.

## Purpose

Gives an overview of system architecture, component organization, and
dependencies — represented as a hierarchical structure, with a top-level
package containing sub-packages and, ultimately, classes. It's the
coarsest-grained structural view in this diagram family, deliberately
omitting individual class detail to keep the whole system's module
organization visible at a glance.

## Notation

Packages are drawn as rectangles with a small tab on the upper-left
corner (like a manila folder), with the package name written inside.
Dependencies between packages are shown as directed arrows, indicating
which package depends on which — a package diagram's dependency arrows
are one of its most useful features, since they surface architectural
coupling that's invisible from any single class diagram.

## Why it matters for larger systems

Particularly useful for complex systems with multiple interacting
modules — helping identify relationships between different parts of the
system, making the software architecture easier to understand and
maintain. It also supports organizing classes into logical groups for
easier navigation, and enables **separation of concerns**: individual
packages can be developed and tested in isolation without the whole
system needing to be understood at once.

## Drawing one

See [[plantuml-diagram]] for the `@startuml` package-diagram syntax
(`package "Name" <<Stereotype>> { ... }`) to generate one from
version-controlled text.

## Common pitfalls

- **A dependency graph with cycles** — two packages depending on each
  other in both directions is a common architectural smell a package
  diagram makes visible; treat a cyclic dependency as something to
  actually fix, not just document (see [[fitness-function-testing]]
  for automating a check against this).
- **Packages that don't actually group related elements** — a package
  that's just an arbitrary bucket, rather than a genuine cohesive
  grouping, defeats the abstraction benefit the diagram is meant to
  provide.
- **Showing individual classes in what should be a package-level view**
  — mixes abstraction levels; keep package diagrams at the package
  granularity and push class-level detail into a separate
  [[class-diagram]].

## Learn more

- [[plantuml-diagram]] for the text-based syntax to draw this diagram type.
- [[class-diagram]] for the finer-grained structure inside each package.
- [[fitness-function-testing]] for automating an ongoing check against unwanted package-dependency direction or cycles.
