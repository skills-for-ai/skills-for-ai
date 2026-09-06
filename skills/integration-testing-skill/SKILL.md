---
name: integration-testing-skill
description: Use when asked to test the interaction between modules/components — big-bang, top-down, bottom-up, or hybrid integration strategies — as the layer between unit testing (see unit-testing-skill) and system/end-to-end testing (see system-testing-skill, end-to-end-testing-skill).
---

# Integration Testing Skill

Integration testing verifies that different modules or components of an
application work together correctly once combined — catching errors that
arise specifically from integration, which neither isolated unit testing
nor whole-system testing targets as directly.

## Integration strategies

- **Big Bang** — integrate all components at once and test the whole
  combination together; simplest to set up, hardest to isolate a failure
  in when something breaks.
- **Top-Down** — start from the topmost module, progressively adding
  lower-level modules (often using stubs for not-yet-integrated lower
  components).
- **Bottom-Up** — start from the lowest-level modules, progressively
  adding higher-level ones (often using drivers to simulate not-yet-
  integrated callers).
- **Hybrid (Sandwich)** — a combination of top-down and bottom-up,
  meeting in the middle.

Top-down and bottom-up isolate integration failures more precisely than
Big Bang, at the cost of needing stubs/drivers and a more staged test
plan.

## Where it fits in the sequence

Integration testing typically follows [[unit-testing-skill]] (individual
units already verified in isolation) and precedes
[[system-testing-skill]] (the whole system verified as one), catching
interaction defects before they reach the more expensive, harder-to-
diagnose whole-system testing stage.

## Automation

Preferred when an application updates frequently and has many modules —
automated integration tests can be re-run on every change far more
practically than repeated manual testing of the same interaction points.

## Benefits

Earlier defect detection (before reaching end-to-end or production),
reduced overall development cost (an integration bug found here is
cheaper to fix than the same bug found in system testing or production),
and improved confidence that the pieces actually cooperate, not just
that each piece individually works.

## Common pitfalls

- **Skipping straight to Big Bang integration for a large system** —
  makes isolating which interaction actually failed much harder than a
  staged top-down/bottom-up approach would.
- **No stubs/drivers plan for top-down or bottom-up integration** —
  without them, a staged integration strategy can't actually test
  components before their real counterparts exist.
- **Treating integration tests as a substitute for unit tests** — a
  passing integration suite with no unit coverage underneath it makes
  failures much harder to localize to a specific root cause.

## Learn more

- [[unit-testing-skill]] for the isolated-component layer below integration testing.
- [[system-testing-skill]], [[end-to-end-testing-skill]] for the whole-system layer above it.
