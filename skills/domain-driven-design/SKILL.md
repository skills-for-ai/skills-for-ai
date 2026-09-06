---
name: domain-driven-design
description: Use when asked to apply Domain-Driven Design (DDD) — ubiquitous language, bounded contexts, entities/value objects, aggregates, domain events — as a software-design approach for aligning code structure with business domain concepts, complementing class-diagram's structural notation and package-diagram's module organization.
---

# Domain-Driven Design (DDD)

Domain-Driven Design (DDD) is a software development approach aligning
software structure with a business's actual needs and requirements — by
breaking down complex business domains into well-defined components that
map onto the software's own structure, rather than letting the
software's structure drift from how the business actually thinks about
its own domain.

## Core concepts

- **Ubiquitous language** — a shared vocabulary used by both business
  stakeholders and the development team, so a term means the same thing
  in a stakeholder conversation, in the code, and in documentation.
  Divergent vocabulary between business and code is a common, subtle
  source of misunderstood requirements — DDD treats fixing this as a
  first-class design activity, not just a communication nicety.
- **Bounded contexts** — a complex business domain is broken into
  smaller, more manageable subdomains, each with its own context, rules,
  language, and models specific to it. A term can legitimately mean
  something different in two different bounded contexts (e.g. "Customer"
  might mean something different in a Billing context than in a Support
  context) — DDD treats this as expected and manageable, not as an
  inconsistency to eliminate everywhere.
- **Entities and Value Objects** — two key building blocks: an
  **Entity** has a unique identity and can change over time (a specific
  customer, an order); a **Value Object** represents a value or concept
  with no independent identity (a date, a currency amount) — two Value
  Objects with the same data are interchangeable, while two Entities
  with identical data are still distinct if their identities differ.
- **Aggregates** — a cluster of entities and value objects treated as
  one consistency unit, with one designated "root" entity controlling
  access to the rest — used to enforce business invariants that must
  hold across the whole cluster, not just within one entity.
- **Domain events** — significant occurrences within the business domain
  (a customer placing an order, a product shipping), used to trigger
  further actions or processes within the system — a natural fit for
  event-driven architectures.

## Relationship to structural diagramming

A [[class-diagram]] can express DDD's entities, value objects, and
their relationships in UML notation; a [[package-diagram]] can
express bounded-context boundaries as package boundaries. DDD supplies
the *conceptual* modeling discipline (what should be an entity, where a
bounded context boundary belongs); these diagram types supply the
*notation* for documenting the result.

## Common pitfalls

- **One shared model forced across the whole system** — ignoring bounded
  contexts and insisting on one universal model for a term like
  "Customer" across every subdomain creates a model that's either overly
  generic or increasingly contradictory as the system grows.
- **Anemic domain models** — entities that are just data bags with no
  real behavior, with all the actual logic living elsewhere (in services
  or controllers), defeats DDD's goal of making the domain model itself
  expressive and behavior-rich.
- **Ubiquitous language that exists only in documentation, not in code**
  — if the code's naming diverges from the agreed shared vocabulary, the
  ubiquitous language stops actually functioning as a shared
  understanding tool.
- **Aggregates sized too large** — an aggregate spanning too much of the
  domain creates unnecessary contention and coupling; aggregates should
  be sized to the actual consistency boundary a business invariant
  requires, not larger.

## Learn more

- Eric Evans, *Domain-Driven Design: Tackling Complexity in the Heart of Software* — the originating text.
- [[class-diagram]] for notating entities, value objects, and their relationships.
- [[package-diagram]] for notating bounded-context boundaries.
