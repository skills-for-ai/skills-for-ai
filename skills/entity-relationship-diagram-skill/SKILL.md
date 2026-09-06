---
name: entity-relationship-diagram-skill
description: Use when asked to model a database's data structure as an entity-relationship diagram (ERD) — entities, attributes, and one-to-one/one-to-many/many-to-many relationships — as the data-modeling counterpart to a class diagram's object-oriented structure (see class-diagram-skill).
---

# Entity-Relationship Diagram (ERD) Skill

An entity-relationship diagram (ERD) is a data-modeling diagram
representing entities, their attributes, and their relationships to each
other — the standard tool for designing a relational database schema
before (or while) writing the actual DDL (see [[sql-skill]] and the
vendor-specific database skills in this collection for the resulting
schema syntax).

## Elements

- **Entities** — a real-world object or concept that can be identified
  and defined (e.g. Student, Course, Professor, Department in a
  university database); drawn as a rectangle.
- **Attributes** — a property of an entity (e.g. a Student's ID, name,
  GPA); drawn as an oval connected to the entity rectangle (some notation
  styles list attributes inside the entity box instead, similar to how
  [[class-diagram-skill]] lists attributes in a compartment).
- **Relationships** — a connection between two or more entities (e.g. a
  Student takes a Course); drawn as a line connecting the entities.

## Relationship cardinalities

- **One-to-one (1:1)** — each instance of one entity relates to exactly
  one instance of another (e.g. each Student has exactly one Student ID);
  drawn as a plain straight line.
- **One-to-many (1:M)** — each instance of one entity relates to many
  instances of another (e.g. each Department has many Professors); drawn
  as a line with an arrowhead pointing toward the "many" side.
- **Many-to-many (M:M)** — instances on both sides can relate to many
  instances on the other (e.g. each Student takes many Courses, each
  Course has many Students); drawn as a line with "crow's feet" notation
  on both ends.

Getting cardinality right matters concretely: a many-to-many relationship
typically requires a **junction/associative table** when actually
implemented in a relational database, since neither entity's table can
directly hold a variable-length list of foreign keys.

## Relationship to a class diagram

An ERD and a [[class-diagram-skill]] look structurally similar
(boxes and connecting relationships) but serve different purposes: an
ERD models **persistent data structure** for a database schema; a class
diagram models **object-oriented software structure**, including
behavior (methods), which an ERD doesn't represent at all.

## Drawing one

See [[plantuml-diagram-skill]] for the `@startuml` ERD syntax (`entity` blocks,
crow's-foot relationship notation via `}o-down-o{`) to generate one from
version-controlled text.

## Common pitfalls

- **Modeling a many-to-many relationship without planning the junction
  table** — the ERD's abstract crow's-feet notation doesn't automatically
  specify the concrete junction table needed to implement it relationally.
- **Confusing an ERD with a class diagram** — see above; an ERD has no
  concept of methods/behavior, only data structure and relationships.
- **Missing or unclear cardinality on a relationship line** — without it,
  a reader (or a database implementer) can't tell whether a relationship
  should be enforced as 1:1, 1:M, or M:M in the actual schema.

## Learn more

- [[plantuml-diagram-skill]] for the text-based syntax to draw this diagram type.
- [[sql-skill]] for the schema syntax an ERD typically precedes.
- [[class-diagram-skill]] for the related but behaviorally-richer object-oriented structure diagram.
