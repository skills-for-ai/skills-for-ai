---
name: specification-driven-development
description: Use when asked to write a spec before implementation, structure a spec-first repository (spec/index.md, per-topic specs), or explain specification-driven development — as distinct from test-driven development (see test-driven-development), which drives design from tests rather than a written specification document.
---

# Specification-Driven Development

Specification-driven development treats a written specification — not the
code, and not even the tests — as the primary source of truth for intent.
Code and tests are then brought into alignment with the spec, and when
they disagree, the spec is what decides which one is wrong (or gets
updated, deliberately, when intent itself has changed).

## Spec as source of truth

The core discipline: **when behavior and spec disagree, decide which is
correct, then make them match.** This cuts both ways — sometimes the code
has drifted and needs fixing; sometimes the spec was written before a
requirement changed and the spec needs updating. What's not acceptable is
leaving the disagreement unresolved, since an unmaintained spec becomes
actively misleading documentation rather than neutral clutter.

## Structuring a spec-first repository

A pattern seen across several real spec-driven projects: a `spec/`
directory with an `index.md` naming every topic, and one subdirectory per
topic containing its own `index.md` covering:

- **Scope** — what the topic covers, and explicitly what it does *not*
  cover (with a pointer to whichever other topic does).
- **Principles and rules** — the actual normative content.
- **Detail sections** — worked examples, path maps, flow diagrams as
  needed.
- **Acceptance criteria** — a checklist of concretely verifiable
  conditions, often with evidence of when/how each was last verified.
- **Related topics** and **Sources** — cross-links so the spec set stays
  navigable as it grows, and each topic's normative claims can be traced
  back to something concrete (a script, a config file, a citation).

This structure works because each topic is independently readable (scope
makes clear what's answered here vs. elsewhere) while still forming one
coherent, cross-linked whole.

## Relationship to test-driven and behavior-driven development

- [[test-driven-development]] drives design from a failing test,
  written just ahead of the code — the test *is* the specification, at
  the unit level, but it's typically not read by non-developers and
  doesn't capture *why* a behavior is required, only *that* it is.
- [[behavior-driven-development]] writes acceptance-level scenarios
  in a shared language, closing some of that gap for user-facing behavior.
- Specification-driven development goes further: the spec is a real,
  standalone document (often prose, tables, and diagrams, not just
  executable assertions), covering intent, scope boundaries, and
  rationale that a test file — however well-named — usually can't carry on
  its own. In a mature setup, all three coexist: the spec explains *why*
  and *what*, BDD scenarios pin down accepted-level *what*, and TDD
  drives the *how* at the unit level — each is checked against the
  others when they disagree.

## Verifiable acceptance criteria

The discipline that keeps a spec from becoming aspirational prose: every
claim should be checkable, ideally by something more concrete than a
person's judgment call — a command that passes, a file that exists, a
specific string present in a specific location. "The system handles
errors gracefully" is not a spec-quality acceptance criterion; "a request
with an invalid token returns HTTP 401 with a JSON body containing an
`error` field" is.

## Common pitfalls

- **A spec nobody re-reads once code diverges from it** — the spec/code
  disagreement resolution rule above only works if drift is actually
  noticed; some projects enforce this with a script that checks the spec
  set for broken links, missing topics, or a code path with no
  corresponding spec.
- **Specs written at the wrong altitude** — too abstract to be checkable
  ("the system should be reliable") or too implementation-specific to
  survive a refactor (literal variable names) both fail to serve as a
  stable source of truth.
- **No scope boundary stated** — a topic that doesn't say what it
  deliberately excludes tends to sprawl or duplicate content that belongs
  in a sibling topic.
- **Confusing "written down somewhere" with "specification-driven"** — a
  spec that's written once at project kickoff and never updated as intent
  changes has stopped functioning as a source of truth, however detailed
  it originally was.

## Learn more

- [[test-driven-development]], [[behavior-driven-development]] for the test-level and scenario-level disciplines that complement a written spec.
- [[architecture-decision-record]], [[decision-records]] for capturing the *reasoning behind* a specific spec decision, distinct from the spec's normative content itself.
