---
name: back-end-design
description: Use when asked to design the server-side layer of a software system — API design, data persistence, business logic, scalability, security — as the server-facing counterpart to front-end-design.
---

# Back-End Design

Back-end design is the discipline of structuring a software system's
server-side layer — the part that stores data, enforces business rules,
and serves clients — so it's correct, scalable, secure, and
maintainable, independent of any single language or framework.

## Core concerns

- **API design** — the contracts a back-end exposes to clients (REST,
  GraphQL, RPC, or other styles), including versioning, error handling,
  and documentation, all of which shape what a [[front-end-design]]
  effort can build against.
- **Data persistence** — choosing and structuring storage (relational,
  document, key-value) appropriate to the system's actual access
  patterns; see this collection's database-specific skills
  ([[postgresql-database]], [[mysql-database]], and others) for engine-
  specific detail.
- **Business logic** — where and how domain rules are enforced,
  including how they're kept from leaking inconsistently across layers;
  [[domain-driven-design]] offers one structured approach to this.
- **Scalability** — designing for the load and growth a system actually
  needs to handle, including horizontal/vertical scaling strategies and
  caching.
- **Security** — authentication, authorization, input validation, and
  protecting data at rest and in transit; see [[security-testing]],
  [[penetration-testing]] for verifying these hold up.

## Back-end vs. front-end design

Back-end design concerns what runs on the server and how it stores,
processes, and serves data; [[front-end-design]] concerns what runs in
the client and how it presents and collects that data. They're designed
together — API contracts are a shared surface both sides depend on — but
each carries its own distinct concerns (data integrity and scalability
on one side, UI responsiveness and accessibility on the other).

## Common pitfalls

- **Business logic scattered across layers** — validation and domain
  rules duplicated inconsistently between the API layer, service layer,
  and database constraints tend to drift out of sync over time.
- **No explicit API contract or versioning strategy** — changing an API
  in a way that silently breaks existing clients is one of the most
  common back-end design failures.
- **Designing storage before understanding access patterns** — choosing
  a data model based on how data is conceptually related, rather than
  how it's actually queried, often leads to costly rework later.
- **Treating security as a separate, later phase** — authentication,
  authorization, and input validation need to be part of the initial
  design, not bolted on afterward.

## Learn more

- [[front-end-design]] for the client-side counterpart.
- [[domain-driven-design]] for structuring business logic around domain concepts.
- [[software-architecture]] for the broader system-structuring discipline back-end design sits within.
- [[security-testing]], [[penetration-testing]] for verifying a back-end's security holds up in practice.
