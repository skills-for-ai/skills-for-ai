---
name: class-diagram-skill
description: Use when asked to model a system's static structure as a UML class diagram — classes, attributes, methods, and association/aggregation/composition relationships — as the type-level counterpart to an object diagram's instance snapshot (see object-diagram-skill). See plantuml-skill for the text-based syntax to actually draw one.
---

# Class Diagram Skill

A class diagram represents a system's structure in terms of its classes
and their relationships — describing the objects, attributes, methods,
and relationships within a system to give a visual model of its static
structure, independent of runtime behavior or timing.

## Key elements

- **Class** — a template for creating objects, defining their attributes
  and methods; drawn as a rectangle with the class name at the top.
- **Object** — an instance of a class (shown when illustrating a class
  diagram alongside a specific example); see [[object-diagram-skill]]
  for the dedicated instance-level diagram type.
- **Attributes** — the properties describing an object's state; commonly
  listed inside the class rectangle (a compartment below the class name)
  rather than as separate attached ovals in most modern UML tooling,
  though both notations exist.
- **Methods** — the operations an object can perform, defining its
  behavior; listed in a further compartment below attributes.
- **Relationships** — association, aggregation, and composition (see
  [[object-diagram-skill]] for the concrete distinction between the
  latter two, which applies identically at the class level).

## Association, more specifically

An association between classes expresses a real structural relationship
— "is composed of," "contains," "has a" — drawn as a line connecting the
two classes, often annotated with multiplicity (e.g. "1" to "many") to
show how many instances of one class relate to instances of the other.

## When a class diagram is the right choice

The standard tool for documenting or designing a system's object-oriented
structure — which classes exist, what data and behavior each owns, and
how they relate — used both for reverse-engineering an existing
codebase's structure and for designing a new one before writing code.

## Drawing one

See [[plantuml-diagram-skill]] for the `@startuml` class-diagram syntax
(`class` blocks with `{field}`/`{method}` members, and relationship
arrows like `<|--o` for aggregation, `<|--*` for composition) to generate
one from version-controlled text.

## Common pitfalls

- **A class diagram with no relationships shown** — a set of isolated
  class boxes with no connecting lines misses the point; the
  relationships are often the most important information a class diagram
  conveys.
- **Confusing a class diagram with an object diagram** — see
  [[object-diagram-skill]]; use a class diagram for the general,
  type-level structure, an object diagram for one concrete instance
  snapshot.
- **Overcrowding one diagram with every class in a large system** — a
  class diagram covering an entire large codebase becomes unreadable;
  scope diagrams to one bounded area of the system at a time, similar to
  [[flowchart-skill]]'s advice against overcrowding a single process
  diagram.

## Learn more

- [[plantuml-diagram-skill]] for the text-based syntax to draw this diagram type.
- [[object-diagram-skill]] for the instance-level snapshot counterpart.
- [[package-diagram-skill]] for organizing many classes into higher-level groups.
