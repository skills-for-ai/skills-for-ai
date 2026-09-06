---
name: system-quality-attributes
description: Use when asked to name, define, or choose system quality attributes (SQAs) — non-functional requirements like reliability, scalability, observability, maintainability — for a software system or organizational practice, distinct from functional requirements — grounded in joelparkerhenderson/system-quality-attributes.
---

# System Quality Attributes

System quality attributes (SQAs) — also called non-functional requirements
(NFRs) or cross-cutting concerns — describe *how well* a system performs,
as distinct from *what* it does (its functional requirements). A system
can be functionally complete and still fail its users if it's slow,
insecure, unmaintainable, or unreliable.

## Complementary framings of the same idea

- **System Quality Attributes (SQAs)** — the broad umbrella term used
  here.
- **Cross-Functional Constraints (CFCs)** — requirements that cut across
  every feature rather than belonging to one (e.g. "every API response
  under 200ms").
- **Non-Functional Requirements (NFRs)** — the classic requirements-
  engineering term, contrasted with functional requirements.
- **Cross-Cutting Concerns (CCCs)** — the software-architecture framing,
  emphasizing that these concerns touch many modules rather than living
  in one.

## A representative sample of attributes

Over 100 named attributes exist; a working set worth knowing by name and
being able to define precisely (each is a real, distinct concept, not a
synonym for "good quality" generically):

- **Reliability, Availability, Durability, Fault-tolerance, Resiliency,
  Recoverability** — different angles on "keeps working, or comes back
  quickly, when something goes wrong."
- **Scalability** (horizontal and vertical), **Efficiency**, **Elasticity**
  (not listed by name but related to Adaptivity/Autonomicity) — handling
  more load without a proportional cost increase.
- **Security**-adjacent: **Auditability, Integrity, Accountability,
  Encryptability** — different facets of "can be trusted and verified."
- **Maintainability, Modifiability, Extensibility, Modularity,
  Refactorability** — how cheaply the system can be changed later.
- **Observability, Monitorability, Debugability, Traceability,
  Inspectability** — how well you can tell what the system is actually
  doing.
- **Usability, Learnability, Accessibility, Discoverability** — how well
  real users (including users of assistive technology) can actually use
  it.
- **Testability, Reproducibility, Determinability** — how reliably you
  can verify the system behaves as intended.
- **Portability, Interoperability, Compatibility, Configurability** — how
  well it works across different environments and with other systems.

Choosing which of 100+ attributes actually matters for a given system is
itself the design decision — not every attribute is relevant to every
system, and treating them all as equally important produces an
unfocused, unactionable requirements list.

## Planning and tracking tools that use SQAs

- **Key Performance Indicator (KPI)** — see [[key-performance-indicators]]
  for turning a chosen quality attribute into a tracked, targeted metric.
- **Quality Assessment Report (QAR)** — a structured report against
  chosen attributes at a point in time.
- **System Quality Attributes Maturity Model (SQAMM)** — applying
  [[maturity-models]]'s level-based structure specifically to
  quality-attribute capability.
- **SQALE** (Software Quality Assessment based on Lifecycle Expectations)
  — a model for quantifying technical debt against quality expectations.
- **Chaos Engineering** — deliberately injecting failure to empirically
  test Reliability/Resiliency/Fault-tolerance claims rather than assuming
  them from design alone.

## How to use this in practice

1. From the full list, pick the handful of attributes that are actually
   decision-relevant for this specific system (a payments system
   prioritizes Integrity and Auditability differently than an internal
   admin tool does).
2. State each chosen attribute as a **specific, checkable requirement**,
   not just the attribute's name — "the system should be scalable" isn't
   actionable; "the system handles 10x current peak load with no
   architecture change" is.
3. Track the chosen attributes as real KPIs/QARs over time, not just at
   initial design — quality attributes degrade under sustained feature
   pressure if nothing is actively measuring them.

## Common pitfalls

- **Treating "non-functional" as "optional" or "later"** — quality
  attributes are requirements, not nice-to-haves; deferring them
  indefinitely usually means retrofitting them expensively after the
  system already exists.
- **Naming an attribute without defining it precisely for this system** —
  "reliable" means something different for a life-safety system than for
  an internal reporting dashboard; the specific, checkable target is what
  makes the attribute actionable.
- **Trying to maximize every attribute at once** — many quality
  attributes trade off against each other (e.g. Security vs. Usability,
  Flexibility vs. Simplicity); an explicit prioritization is needed, not
  an attempt to be best-in-class on all 100+.
- **Measuring an attribute once at launch and never again** — attributes
  like Maintainability and Observability erode gradually under ordinary
  feature work unless something actively tracks and defends them.

## Learn more

- [joelparkerhenderson/system-quality-attributes](https://github.com/joelparkerhenderson/system-quality-attributes) — the source for this skill, with 100+ attributes each explained individually.
- [[key-performance-indicators]] for turning a chosen attribute into a tracked metric.
- [[maturity-models]] for assessing quality-attribute capability over levels.
