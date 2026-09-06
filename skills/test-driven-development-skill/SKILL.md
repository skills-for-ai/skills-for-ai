---
name: test-driven-development-skill
description: Use when asked to write code test-driven — red/green/refactor, writing the failing test first, or explaining TDD's benefits and limits — as distinct from behavior-driven development's given/when/then framing (see behavior-driven-development-skill) or writing tests after the fact.
---

# Test-Driven Development Skill

Test-Driven Development (TDD) is a discipline where a failing test is
written *before* the implementation code that makes it pass — the test
drives the design, rather than being retrofitted to verify code already
written.

## The red/green/refactor cycle

1. **Red** — write a small test for behavior that doesn't exist yet; run
   it and watch it fail. This step is not optional: a test you've never
   seen fail hasn't proven it can actually catch the bug it claims to
   catch.
2. **Green** — write the *minimum* code needed to make the test pass, even
   if it's not the final design (a literal hard-coded return value is a
   legitimate first green step for a first test).
3. **Refactor** — clean up the implementation (and the test, if needed)
   now that a passing test protects against regressions, without changing
   observable behavior.

Repeat in small steps — a single cycle is usually minutes, not hours.
Skipping straight to a large implementation before writing any test isn't
TDD; neither is writing all the tests up front and then all the
implementation.

## What TDD actually drives

- **Design pressure toward testable units.** Code that's hard to test
  (tight coupling, hidden dependencies, global state) resists TDD's
  red-first step — the friction is real feedback about the design, not an
  obstacle to work around.
- **A regression suite as a byproduct**, not the primary goal — the tests
  written along the way accumulate into the safety net that makes later
  refactoring safe.
- **Confidence to refactor aggressively.** Because every behavior change is
  covered by a test that existed before the code, a developer can
  restructure implementation freely and trust the suite to catch a
  regression.

## What TDD is not good at

- **It doesn't replace requirements clarity.** TDD verifies that code does
  what the test says — if the test encodes the wrong requirement, TDD
  cycles through red/green/refactor while building the wrong thing
  efficiently. See [[behavior-driven-development-skill]] for a framing
  aimed at closing that specific gap.
- **It doesn't automatically produce good architecture** at the system
  level — TDD's feedback operates at the unit/class level; higher-level
  design still needs deliberate thought.
- **Exploratory/spike work** (figuring out if an approach is even
  feasible) is often faster done without strict TDD, then followed by a
  TDD rewrite of whatever the spike proved viable.

## Common pitfalls

- **Writing the test after the implementation** and calling it TDD — the
  red step is what proves the test can fail; skipping it means the test
  might be vacuously passing regardless of the code.
- **Testing implementation details instead of behavior** — a test coupled
  to internal structure breaks on every refactor, defeating the
  refactor-safety TDD is supposed to provide. Test through the public
  interface/observable behavior.
- **Writing a large test for a not-yet-existing large feature**, then
  struggling to make it pass in one leap — defeats the small-steps
  discipline; break it into the smallest test that can meaningfully fail
  first.
- **Skipping the refactor step** once green — tests passing is not the end
  state; cleanup while the tests still protect you is the point where a
  lot of TDD's value is actually realized.
- **Treating 100% coverage as the goal** — coverage is a byproduct of
  testing behavior thoroughly, not a target to game by writing
  low-value tests against trivial code paths.

## Learn more

- Kent Beck, *Test-Driven Development: By Example* — the originating text.
- [[behavior-driven-development-skill]] for the given/when/then framing that layers on top of TDD's discipline to keep tests aligned with actual requirements.
- [[specification-driven-development-skill]] for writing the specification before either the test or the code.
