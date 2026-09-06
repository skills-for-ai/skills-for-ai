---
name: regression-testing-skill
description: Use when asked to verify that a change hasn't broken existing functionality — test-case selection, defect reporting/resolution, retesting — the discipline that makes safe, frequent releases possible, closely tied to test-driven development's refactor-safety guarantee (see test-driven-development-skill).
---

# Regression Testing Skill

Regression testing confirms that changes or updates to a software
application don't introduce new bugs into functionality that previously
worked — retesting the whole system, or a targeted subset, to verify
existing behavior still holds and that the new change hasn't caused an
unintended negative impact elsewhere.

## When it's run

After any software update or change, and often also on a regular
ongoing cadence as part of routine quality assurance — not only
reactively after a specific change, since a change in one area can have
unintended effects in a seemingly unrelated one.

## The process

1. **Test plan creation** — define the scope: which features/
   functionality will be tested and by what method.
2. **Test case selection** — draw from existing test suites, or create
   new cases specifically for this regression pass, covering a range of
   functionality and scenarios broad enough to actually catch an
   unintended side effect.
3. **Test execution** — run the selected cases against the updated
   software.
4. **Defect reporting** — document and report anything found to the
   development team.
5. **Defect resolution** — the team fixes identified issues.
6. **Retesting** — verify the fix actually resolved the issue and that
   the software behaves as intended afterward.

## Why automation matters here specifically

Regression testing is the textbook case for automation: the same tests
run repeatedly, unchanged, against every new version — exactly the
repetitive, mechanical work automation suits best, and exactly what
[[test-driven-development-skill]]'s accumulated test suite provides as a
byproduct: every TDD cycle adds another regression check for free.

## Common pitfalls

- **Selecting too narrow a regression scope** — testing only the directly
  changed feature misses side effects in other, seemingly unrelated
  areas the change actually touched.
- **A large, unautomated regression suite** — a suite that requires
  extensive manual re-execution on every change either doesn't get run
  often enough, or consumes disproportionate time relative to the change
  size.
- **Not retesting after a fix** — confirming the original defect is gone
  isn't enough; the retest should also confirm the fix itself didn't
  introduce a new regression.
- **Treating regression testing as separate from ongoing test-suite
  maintenance** — an out-of-date regression suite (testing behavior the
  application no longer has, or missing coverage for newer features)
  gives false confidence.

## Learn more

- [[test-driven-development-skill]] for how a regression suite accumulates as a natural byproduct of test-first development.
- [[end-to-end-testing-skill]], [[integration-testing-skill]], [[unit-testing-skill]] for the levels a regression suite typically spans.
