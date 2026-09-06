---
name: black-box-testing
description: Use when asked to test software from the outside, based only on specifications and inputs/outputs, without knowledge of internal code — equivalence partitioning, boundary value analysis, decision tables — as distinct from white-box testing (see white-box-testing), which requires internal code knowledge.
---

# Black-Box Testing

Black-box testing evaluates an application's functionality without
knowledge of its internal code structure, implementation details, or
architecture — treating the software as a "black box" where only inputs
and observable outputs matter. [[white-box-testing]] is the
complementary approach, testing from the inside with full code knowledge.

## Designing test cases

Black-box test cases come from specifications, requirements documents,
and user stories — never source code. Core techniques:

- **Equivalence partitioning** — divide input data into valid and invalid
  groups, then test one representative value per group rather than every
  possible value.
- **Boundary value analysis** — test values at the edges of input ranges
  specifically, since defects cluster there (see
  [[boundary-testing]] for this technique in depth).
- **Decision table testing** — for complex business logic with multiple
  conditions, a table enumerating condition combinations and expected
  outcomes.
- **Error guessing** — informed intuition, from experience, about likely
  failure points not captured by the more systematic techniques.

## Automation

Tools like Selenium (web), Appium (mobile), and API-testing tools
simulate user interactions and validate outputs against expected results
without touching the implementation — suited to continuous testing
throughout the development lifecycle since the tests don't need to
understand or change alongside internal refactors.

## Strengths and limits

Independent of implementation details, so it's effective at catching
missing functionality and usability issues, closely mirrors real
end-user behavior, and doesn't require testers with programming
expertise. Its limitation is the mirror image of that strength: internal
code paths stay invisible, so coverage gaps in untested logic aren't
visible from outside, and a failure's root cause often isn't identifiable
from black-box results alone.

## Common pitfalls

- **Testing only "happy path" equivalence classes** — the value of
  equivalence partitioning is testing both valid *and* invalid classes;
  skipping invalid-input classes misses a large share of real defects.
- **Assuming black-box coverage implies code coverage** — a
  spec-complete black-box suite can still leave large stretches of the
  actual implementation unexercised; pair with [[white-box-testing]]
  or [[mutation-testing]] when code-level assurance matters.
- **Skipping boundary values in favor of only mid-range inputs** — see
  [[boundary-testing]]; boundaries are disproportionately likely to
  reveal off-by-one and validation errors.

## Learn more

- [[white-box-testing]] for the complementary internal-knowledge approach.
- [[boundary-testing]] for boundary value analysis specifically.
- [[functional-testing]] for the broader behavior-verification discipline black-box testing usually serves.
