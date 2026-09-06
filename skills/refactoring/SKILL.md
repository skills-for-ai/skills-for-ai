---
name: refactoring
description: Use when asked to improve existing code's internal structure without changing its external behavior — rename, extract, replace conditionals with polymorphism, and other restructuring techniques — as a continuous discipline for managing technical debt, closely paired with test-driven-development.
---

# Refactoring

Refactoring is the process of improving the design of existing code
without changing its functionality — restructuring code to make it more
readable, maintainable, and extensible, with the explicit goal of better
code quality rather than new behavior.

## Why refactor

- **Improve readability** — remove unnecessary complexity and improve
  code organization so the next reader (often a future version of the
  same author) can understand it faster.
- **Enhance maintainability** — remove duplication, improve structure,
  and reduce the risk that future changes will break existing behavior.
- **Increase extensibility** — make it easier to add new features or
  modify existing ones without a disproportionate amount of surrounding
  rework.

## Common techniques

- **Rename** — change the name of a variable, method, or class to better
  reflect its actual purpose; one of the cheapest, highest-value
  refactorings available.
- **Extract** — break up a large component, method, function, or class
  into smaller, more focused ones.
- **Replace conditionals with polymorphism** — turn an if/else or
  switch/case chain that selects behavior by type into polymorphic
  objects that each implement that behavior directly.

## Refactoring and technical debt

Refactoring is a continuous practice, not a one-time cleanup project —
treating it as ongoing maintenance rather than a special initiative is
what actually keeps technical debt from accumulating. Skipping it
consistently in favor of only adding new features lets a codebase's
internal quality quietly degrade even as its external functionality
grows.

## Refactoring and testing

Refactoring's defining constraint — that external behavior must not
change — depends on having tests that can actually verify behavior is
unchanged. This is why refactoring and [[test-driven-development]]
are so closely paired in practice: a solid test suite is what makes
refactoring safe rather than risky, and TDD's red/green/**refactor**
cycle builds refactoring directly into the normal development rhythm
rather than treating it as a separate, deferred activity.

## Common pitfalls

- **Refactoring without adequate test coverage** — makes it hard to tell
  whether a "refactoring" actually preserved behavior or quietly
  introduced a regression.
- **Mixing refactoring with feature changes in the same commit** — makes
  it much harder to review, and to revert, either change independently
  if something goes wrong.
- **Refactoring for its own sake, disconnected from any actual pain
  point** — not every piece of code needs restructuring; prioritize
  refactoring where it will actually reduce friction, not everywhere
  uniformly.
- **Large, "big bang" refactorings** — a sweeping rewrite carries much
  higher risk than a series of small, independently verifiable steps.

## Learn more

- Martin Fowler, *Refactoring: Improving the Design of Existing Code* — the foundational text on refactoring techniques and catalog.
- [[test-driven-development]] for the testing discipline that makes refactoring safe.
- [[pair-programming]] for a practice that often surfaces refactoring opportunities in real time.
