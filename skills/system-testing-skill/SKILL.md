---
name: system-testing-skill
description: Use when asked to evaluate an entire integrated system as a whole — combining functional, performance, security, usability, compatibility, and regression checks — as the whole-system layer between integration testing (see integration-testing-skill) and acceptance testing (see acceptance-testing-skill).
---

# System Testing Skill

System testing evaluates and verifies an entire system's behavior and
functionality as a whole, confirming that all software components work
together correctly and the system satisfies its requirements —
identifying defects that only surface once every component is combined
and running together, not just pairwise ([[integration-testing-skill]])
or in isolation ([[unit-testing-skill]]).

## Types of checks performed during system testing

- **Functional testing** — the system's functions per requirements and
  specifications: inputs, processing, outputs (see
  [[functional-testing-skill]]).
- **Performance testing** — behavior under normal and peak load (see
  [[performance-testing-skill]]).
- **Security testing** — security features and vulnerabilities (see
  [[security-testing-skill]]).
- **Usability testing** — interface and user experience quality (see
  [[usability-testing-skill]]).
- **Compatibility testing** — behavior across different hardware,
  software, and operating systems.
- **Regression testing** — confirming existing functionality still works
  after changes (see [[regression-testing-skill]]).

System testing is where these otherwise-separate testing disciplines get
applied together against the complete, assembled system, rather than
each being scoped to a narrower piece of it.

## Where it fits in the sequence

Comes after unit and integration testing (individual pieces and their
pairwise interactions already verified) and before acceptance testing
(the client/user-facing readiness gate — see
[[acceptance-testing-skill]]). System testing confirms the whole system
works as an integrated product; acceptance testing then confirms that
product is the *right* one.

## Common pitfalls

- **Treating system testing as redundant with integration testing** — it
  operates at a different scope (the whole system, not module pairs) and
  covers dimensions (security, usability, compatibility) integration
  testing typically doesn't.
- **Skipping compatibility testing** for a system meant to run across
  varied environments — a system tested only in one configuration can
  fail in a different but equally real deployment target.
- **No regression pass as part of system testing** after a late-stage
  change — a fix applied during system testing can itself introduce a
  new regression that only a retest would catch.

## Learn more

- [[integration-testing-skill]] for the component-interaction layer below system testing.
- [[acceptance-testing-skill]] for the client/user-facing readiness gate above it.
