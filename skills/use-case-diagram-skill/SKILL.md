---
name: use-case-diagram-skill
description: Use when asked to model system functionality from a user's perspective as a UML use case diagram — actors, use cases, association/extend/include relationships — as distinct from a sequence diagram's message-level interaction view (see sequence-diagram-skill). See plantuml-skill for the text-based syntax to actually draw one.
---

# Use Case Diagram Skill

A use case diagram is a UML behavioral diagram illustrating the
interactions between actors (users or other systems) and a system —
modeling functionality from the **user's perspective**: what the system
needs to do for whom, not how it does it internally.

## Main elements

- **Actors** — an external entity interacting with the system: a user,
  another system, or an external device. Drawn as a stick figure.
- **Use cases** — a specific task or piece of functionality the system
  performs to satisfy a user need, initiated by an actor. Drawn as an
  oval.

## Relationship types

- **Association** — a communication link between an actor and a use case,
  drawn as a solid line, showing the actor actually participates in that
  use case.
- **Extend** — one use case optionally extends another, modeling
  optional functionality layered onto a base use case; the arrow points
  from the extending use case toward the base use case.
- **Include** — one use case always includes another, modeling shared
  functionality common to multiple use cases; the arrow points from the
  including use case toward the included use case.

The distinction matters: **extend** is optional/conditional behavior
added to a base case (e.g. "Pay by Credit Card" might extend "Checkout"),
while **include** is mandatory, always-executed shared behavior factored
out to avoid duplication (e.g. "Checkout" might include "Validate Login").

## When a use case diagram is the right choice

Best early in requirements gathering, for capturing *what* a system
needs to do for its various users/actors, at a high level, before
detailing *how* — it deliberately omits implementation and interaction
timing, which is exactly what [[sequence-diagram-skill]] adds once a
specific use case needs to be worked out in detail.

## Drawing one

See [[plantuml-diagram-skill]] for the `@startuml` use-case-diagram syntax
(`actor`, parenthesized use-case ovals, `-->` associations) to generate
one from version-controlled text.

## Common pitfalls

- **Confusing extend and include** — reversing which direction is
  optional versus mandatory misrepresents the actual dependency between
  use cases.
- **Modeling implementation detail in a use case diagram** — it's
  meant to stay at the "what, for whom" level; interaction order and
  internal logic belong in a [[sequence-diagram-skill]] or
  [[activity-diagram-skill]] instead.
- **Actors that are actually just user roles duplicated many times** —
  a use case diagram should show distinct actor *types* (roles), not one
  actor per individual user.

## Learn more

- [[plantuml-diagram-skill]] for the text-based syntax to draw this diagram type.
- [[sequence-diagram-skill]] for detailing one use case's actual message-level interaction.
- [[acceptance-testing-skill]] for verifying a system actually satisfies the requirements a use case captures.
