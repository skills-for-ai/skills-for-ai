---
name: component-diagram
description: Use when asked to model a system's software architecture as interacting components — dependency, association, aggregation, composition between components — as distinct from a deployment diagram's runtime hardware/node view (see deployment-diagram), which shows where components run rather than how they relate to each other.
---

# Component Diagram

A component diagram is a UML structural diagram showing the organization
and relationships among a system's software components — commonly used
to model software architecture and a system's interdependencies with
external systems or modules, at a coarser grain than a
[[class-diagram]] but more implementation-oriented than a
[[package-diagram]].

## Elements

- **Components** — drawn as rectangles labeled with the component's name;
  a component represents a modular, replaceable part of the system
  providing specific functionality (a service, a library, a subsystem).
- **Dependency** — one component needs another to function; drawn as a
  dashed arrow pointing from the dependent component toward the one it
  depends on.
- **Association** — two components are related through data or control
  flow; drawn as a solid connecting line.
- **Aggregation** — one component contains or is composed of others, but
  those parts could exist independently; drawn with an open diamond
  arrowhead (same underlying semantics as [[object-diagram]]'s
  aggregation, applied at the component level).
- **Composition** — a stronger containment where the contained
  components can't exist without the containing one; drawn with a filled
  diamond arrowhead.

## When a component diagram is the right choice

Best for showing **how major software parts of a system relate and
depend on each other** — which service calls which, which module a
library dependency flows through — at a level useful for architecture
discussions, distinct from [[deployment-diagram]]'s concern with
*where* those components physically run.

## Drawing one

See [[plantuml-diagram]] for the `@startuml` component-diagram syntax
(`component "Name"`, `interface`, connecting arrows) to generate one from
version-controlled text.

## Common pitfalls

- **Confusing a component diagram with a deployment diagram** — a
  component diagram shows logical software relationships; a
  [[deployment-diagram]] shows physical runtime placement on actual
  hardware nodes. A system can have components that are logically
  related but deployed on entirely separate machines.
- **Dependency arrows drawn in the wrong direction** — a dependency
  points from the dependent component *toward* what it depends on;
  reversing this misrepresents which component would actually break if
  the other changed.
- **Too fine-grained a component breakdown** — showing every class as its
  own "component" collapses this diagram type into a
  [[class-diagram]] in disguise, losing the architectural-overview
  value a component diagram is meant to provide.

## Learn more

- [[plantuml-diagram]] for the text-based syntax to draw this diagram type.
- [[deployment-diagram]] for the physical/runtime counterpart showing where components actually run.
- [[package-diagram]] for an even coarser-grained organizational view.
