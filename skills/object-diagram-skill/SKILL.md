---
name: object-diagram-skill
description: Use when asked to model a snapshot of specific object instances and their relationships at one point in time — association, aggregation, composition — as the instance-level counterpart to a class diagram's type-level structure (see class-diagram-skill). See plantuml-skill for the text-based syntax to actually draw one.
---

# Object Diagram Skill

An object diagram is a UML structural diagram showing a **snapshot** of
the actual objects (instances) in a system and their relationships at one
specific point in time — the instance-level counterpart to a
[[class-diagram-skill]]'s type-level (blueprint) structure.

## Key elements

- **Objects** — an instance of a class, shown as a rectangle labeled with
  the object's name.
- **Classes** — the blueprint an object is an instance of, also shown as
  a rectangle when referenced.
- **Association** — a relationship where one object uses or relies on
  another; drawn as a plain connecting line.
- **Aggregation** — a "has-a" relationship where one object is composed
  of or contains another, but the contained object could still exist
  independently; drawn with an open (unfilled) diamond arrowhead.
- **Composition** — a *strong* "has-a" relationship where the contained
  object's lifecycle is owned by the containing object (it can't exist
  independently); drawn with a filled diamond arrowhead.

## Aggregation vs. composition, concretely

The distinction is about **ownership and lifecycle**, not just visual
containment: a `Library` aggregates `Book` objects (a book can exist and
be moved to a different library); an `Order` composes `OrderLine`
objects (an order line has no meaningful existence once its order is
deleted). Getting this distinction right matters for reasoning about
what happens to contained objects when a container is destroyed.

## When an object diagram is the right choice

Useful for illustrating a **specific, concrete scenario** — a particular
set of actual instances and how they're linked at one moment — which is
often easier for a reader to follow than a fully general class diagram,
especially when explaining a tricky runtime configuration or debugging a
specific reported state.

## Drawing one

See [[plantuml-diagram-skill]] for the `@startuml` object-diagram syntax
(`object` keyword, `<|--` for inheritance-style relationships between
object instances) to generate one from version-controlled text.

## Common pitfalls

- **Confusing aggregation with composition** — see above; the difference
  affects real reasoning about object lifecycle, not just diagram
  aesthetics.
- **Using an object diagram where a class diagram was actually needed** —
  an object diagram shows one concrete snapshot; if the goal is
  describing the general structure/rules for *all* instances, use
  [[class-diagram-skill]] instead.
- **An object diagram with no concrete instance data** — if every object
  is generically named after its class with no distinguishing instance
  data, a class diagram would communicate the same information more
  simply.

## Learn more

- [[plantuml-diagram-skill]] for the text-based syntax to draw this diagram type.
- [[class-diagram-skill]] for the type-level structure an object diagram instantiates.
