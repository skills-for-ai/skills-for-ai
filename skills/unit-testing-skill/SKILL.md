---
name: unit-testing-skill
description: Use when asked to write a unit test — isolating the smallest testable part of an application (a function, method, class) and verifying it independently — the foundational layer below integration testing (see integration-testing-skill) and the layer test-driven development operates at (see test-driven-development-skill).
---

# Unit Testing Skill

Unit testing verifies individual units of a software system in
isolation — a unit being the smallest testable part: a method, function,
class, or module. The purpose is validating that each unit performs as
expected and satisfies its specified behavior, independent of the rest
of the system.

## The core idea: isolation

A unit test isolates its target from the rest of the system, testing it
in an automated, repeatable way — exercising the unit's functionality
directly and comparing actual results against expected ones. Isolation is
what makes a unit test fast (no real database, network, or file system
needed) and precise (a failure points at one specific unit, not a whole
system's worth of possible causes).

## Benefits

Catching defects early reduces the overall cost of fixing them — far
cheaper at the unit level than after the defect has propagated into
integration or production. Writing testable units also tends to force
better code design (isolatable, low-coupling units are inherently easier
to reason about), and a unit test suite doubles as living documentation
of each unit's expected behavior.

## Tooling

Frameworks like JUnit, NUnit, and pytest (among many language-specific
equivalents) automate running test cases and reporting results; most
modern IDEs have built-in unit-testing support, making writing and
running tests a normal part of the development loop rather than a
separate activity.

## Integration into CI/CD

Unit tests are typically run automatically on every code change as part
of continuous integration — ensuring a change doesn't introduce a new
defect or break existing functionality, with fast enough execution to
give near-immediate feedback (unlike slower integration or end-to-end
suites).

## Common pitfalls

- **Testing multiple units together and calling it a unit test** — if a
  test exercises real collaborators (a real database, a real network
  call) instead of isolating the unit under test, it's closer to an
  integration test, with integration-test-level speed and fragility.
- **Writing tests that verify implementation rather than behavior** —
  couples the test to internal structure, breaking on refactors that
  didn't actually change observable behavior (see
  [[test-driven-development-skill]]'s identical warning).
- **Skipping unit tests in favor of only higher-level tests** — makes
  failures much harder to localize, since a failing end-to-end test alone
  doesn't say which specific unit is at fault.

## Learn more

- [[test-driven-development-skill]] for writing unit tests test-first.
- [[integration-testing-skill]] for the layer above, testing units together.
- [[mutation-testing-skill]] for measuring how *effective* a unit test suite actually is, beyond coverage.
