---
name: evolutionary-engineering
description: Use when asked to set up engineering practices that support continuous, incremental software change — continuous integration/delivery, automated testing, trunk-based development, feature flags, refactoring — as the practice-level counterpart to evolutionary-architecture's structural focus.
---

# Evolutionary Engineering

Evolutionary engineering is the set of day-to-day engineering practices
that make continuous, incremental change to a software system safe and
routine — the practical complement to [[evolutionary-architecture]]'s
structural focus: an evolvable architecture still needs disciplined
engineering practice to actually exercise that evolvability safely.

## Core practices

- **Continuous integration and delivery** — integrating small changes
  frequently and keeping the system in a continuously releasable state,
  rather than accumulating large, risky batches of change.
- **Automated testing** — a fast, reliable test suite that lets a team
  verify each small change didn't break existing behavior; see
  [[test-driven-development]], [[unit-testing]], [[regression-testing]].
- **Trunk-based development** — working off a single shared branch with
  short-lived changes, avoiding the integration pain and drift long-
  lived feature branches accumulate.
- **Feature flags** — decoupling deployment from release, so code can
  be merged and shipped continuously while a feature is still being
  finished or gradually rolled out.
- **Continuous refactoring** — improving code structure incrementally
  as part of normal work rather than as a separate, deferred initiative
  (see [[refactoring]]).

## Why these practices matter together

Each practice on its own reduces some risk, but they compound: automated
testing makes trunk-based development and continuous integration safe;
continuous integration makes small, frequent changes practical; feature
flags let those small changes ship without forcing an unfinished feature
live; and continuous refactoring keeps the codebase itself from becoming
the obstacle to further small changes. Adopting one practice in
isolation, without the others, tends to produce much smaller gains than
adopting them as a coherent set.

## Relationship to evolutionary architecture

[[evolutionary-architecture]] describes the structural properties
(fitness functions, appropriate coupling, multiple tracked dimensions) a
system needs to support ongoing change. Evolutionary engineering
describes the practices that exercise that structure safely on a daily
basis. A team can have excellent engineering practices layered on top
of a rigid, tightly coupled architecture and still struggle to change
quickly — and a well-designed evolvable architecture without disciplined
engineering practice tends to erode over time regardless of how well it
was originally structured.

## Common pitfalls

- **Adopting continuous integration without adequate test coverage** —
  integrating frequently without a test suite that can actually catch
  regressions just ships breakage faster.
- **Long-lived feature branches alongside a "trunk-based" label** —
  branches that live for weeks recreate the integration pain trunk-based
  development is meant to avoid, regardless of what the practice is
  called.
- **Feature flags left in code indefinitely** — flags that are never
  cleaned up after a feature is fully rolled out accumulate as
  permanent, untested conditional complexity.
- **Treating refactoring as separate, schedulable work** — deferring
  refactoring to a dedicated future sprint rather than doing it
  continuously tends to mean it never actually happens (see
  [[refactoring]]'s own pitfalls on this).

## Learn more

- [[evolutionary-architecture]] for the structural counterpart these practices exercise.
- [[refactoring]], [[test-driven-development]] for two of the core underlying practices in more detail.
- [[pair-programming]] for a practice that often reinforces continuous refactoring and shared code ownership.
