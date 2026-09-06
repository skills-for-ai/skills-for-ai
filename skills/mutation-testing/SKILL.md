---
name: mutation-testing
description: Use when asked to measure whether a test suite can actually detect faults — mutation score, killed vs. surviving mutants — as a more rigorous alternative to code coverage percentage, and a companion to test-driven development (see test-driven-development).
---

# Mutation Testing

Mutation testing measures test-suite *effectiveness*, not just code
coverage — it deliberately introduces small changes ("mutations") into
source code, simulating common programming errors (changing an operator,
modifying a constant, flipping a conditional), then checks whether the
existing test suite actually catches each one.

## How it works

1. Generate multiple mutated copies of the program, each with exactly
   one mutation.
2. Run the existing test suite against each mutant.
3. If a test fails against a mutant, the mutant is **killed** — the
   suite successfully detected that specific injected fault.
4. If every test still passes despite the mutation, the mutant
   **survives** — a real signal that the test suite has a gap: it
   wouldn't have caught this class of real bug either.

The **mutation score** — percentage of mutants killed — is the resulting
quantitative measure of test-suite quality.

## Why this is more rigorous than code coverage

Code coverage answers "which lines executed during testing?" Mutation
testing answers the harder, more useful question: "if a line's logic
were subtly wrong, would any test actually notice?" A test suite can have
100% line coverage and still have a low mutation score, if its
assertions are too weak to actually detect a wrong result — coverage
measures that code *ran*, not that its behavior was *checked*.

## Automation

Modern mutation-testing tools automate the whole cycle: generating
hundreds or thousands of mutants and running the test suite against each
efficiently, producing the mutation score without manual effort per
mutant.

## Relationship to TDD

A low mutation score on code developed test-first is a useful diagnostic:
it can mean the tests were written to hit coverage targets rather than to
genuinely pin down behavior — exactly the gap [[test-driven-development]]'s
red-step discipline (actually watching a test fail before making it pass)
is meant to prevent. Running mutation testing periodically is a good way
to check that TDD discipline is actually producing effective tests, not
just a large test count.

## Common pitfalls

- **Chasing 100% mutation score** — some surviving mutants are genuinely
  equivalent to the original code (produce identical observable behavior)
  and can never be killed; a realistic target is high, not perfect.
- **Treating a high mutation score as proof of correctness** — it proves
  the tests would catch *these specific kinds* of injected faults, not
  that the code is bug-free or that every requirement is covered.
- **Running full mutation testing on every commit** — it's computationally
  expensive at scale; many teams run it periodically or on changed files
  only, rather than as a per-commit CI gate the way a normal test suite
  runs.

## Learn more

- [[test-driven-development]] for the discipline mutation testing helps validate is actually being followed effectively.
- [[unit-testing]], [[white-box-testing]] for the layer mutation testing is most commonly applied at.
