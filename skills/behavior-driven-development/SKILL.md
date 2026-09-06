---
name: behavior-driven-development
description: Use when asked to write Given/When/Then scenarios, Gherkin feature files, or explain behavior-driven development (BDD) — as distinct from test-driven development's red/green/refactor cycle (see test-driven-development), which BDD layers a shared-language discipline on top of.
---

# Behavior-Driven Development

Behavior-Driven Development (BDD) extends [[test-driven-development]]
by writing tests as **executable specifications of behavior**, in a shared
language business stakeholders, testers, and developers can all read and
agree on — aimed at closing TDD's real gap: a test can pass perfectly while
encoding the wrong requirement, and BDD's whole point is to get the
requirement right *before* writing the test.

## Given/When/Then

```gherkin
Feature: Withdraw cash from an ATM

  Scenario: Successful withdrawal
    Given the account balance is $100
    When the customer requests $50
    Then the withdrawal should succeed
    And the account balance should be $50

  Scenario: Insufficient funds
    Given the account balance is $20
    When the customer requests $50
    Then the withdrawal should be declined
    And the account balance should remain $20
```

- **Given** — the starting state/context.
- **When** — the action/event being tested.
- **Then** — the expected outcome.

This is **Gherkin**, the plain-text syntax most BDD tooling (Cucumber,
SpecFlow, Behave) parses directly into executable tests via **step
definitions** — code that matches each Given/When/Then line and performs
the corresponding setup, action, or assertion.

## The three amigos

BDD scenarios are ideally written collaboratively by three
perspectives — often called "the three amigos": someone representing the
**business/product** view (what's actually needed), someone representing
**testing** (what could go wrong, edge cases), and someone representing
**development** (what's technically involved). Writing scenarios solo from
any one perspective tends to miss what the other two would have caught —
a developer-only scenario often misses a real business edge case; a
product-only scenario often misses a technical failure mode.

## From BDD to TDD

A Given/When/Then scenario describes behavior at a feature/acceptance
level; it doesn't replace the finer-grained TDD unit-test cycle
underneath it. A common flow: write the BDD scenario first (agreeing on
the requirement with stakeholders), watch it fail end-to-end, then drop
into TDD's red/green/refactor cycle to build the units that make the
scenario pass — two different granularities of the same
red-before-green discipline, not competing methods.

## Common pitfalls

- **Writing Gherkin as a checklist instead of a specification.** A
  scenario padded with implementation-detail steps ("Given I click the
  button with id #submit") is brittle and hard for non-technical
  stakeholders to read — keep steps at the behavior level ("When the
  customer submits the form"), and let step definitions hide the
  mechanics.
- **Skipping the collaborative writing** and having only developers author
  scenarios after the fact — reintroduces exactly the "tests pass but
  solve the wrong problem" gap BDD exists to close.
- **One scenario trying to cover too many cases** with branching logic
  inside a single Given/When/Then — split into separate, named scenarios
  per case instead; each one should read as a single, clear example.
- **Treating Gherkin files as documentation nobody re-reads** — their value
  depends on staying accurate and executable; a feature file that's
  stopped being run as a test has stopped being a specification and
  started being stale prose.
- **Using BDD tooling for pure unit-level tests** where plain
  [[test-driven-development]]-style tests would be clearer and less
  ceremony — BDD's overhead earns its keep at the acceptance/feature
  level, not necessarily everywhere.

## Learn more

- [Cucumber documentation](https://cucumber.io/docs/cucumber/) — the most widely used Gherkin-based BDD tool.
- Dan North, [Introducing BDD](https://dannorth.net/introducing-bdd/) — the originating article.
- [[test-driven-development]] for the underlying red/green/refactor discipline BDD builds on.
- [[specification-driven-development]] for writing the specification as the primary artifact more generally.
