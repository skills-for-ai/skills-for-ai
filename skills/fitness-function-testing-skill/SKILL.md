---
name: fitness-function-testing-skill
description: Use when asked to write an architectural fitness function — an automated, ongoing check that a codebase's structure keeps meeting a specific architectural characteristic (dependency direction, cyclomatic complexity, coupling) — as distinct from a one-off architecture review or a functional/unit test verifying business behavior.
---

# Fitness Function Testing Skill

An architectural fitness function is an automated, objective test that
verifies a codebase continues to meet a specific architectural
characteristic over time — coined in the "evolutionary architecture"
literature (Neal Ford, Rebecca Parsons, Patrick Kua) as the mechanism for
protecting an architectural intent the same way a unit test protects a
piece of business logic.

## What it checks, versus a normal test

A normal test asks "does this feature behave correctly?" A fitness
function asks "does the system's *structure* still have the property we
decided it should have?" — dependency direction (a UI layer shouldn't
import directly from a database layer), module coupling limits, cyclic
dependency absence, response-time budgets, or component-count/size
constraints (a module shouldn't grow past N files without an explicit
decision to split it).

## Common categories

- **Structural** — enforcing layering/dependency-direction rules (e.g.
  via a dependency-graph analysis tool that fails the build on a
  forbidden import).
- **Performance-related** — a build step or scheduled check asserting a
  specific operation stays under a latency budget.
- **Code-quality** — cyclomatic complexity ceilings, duplication
  thresholds, or coupling metrics checked automatically per commit.
- **Security/compliance** — an automated check that a specific class of
  vulnerability pattern, or a forbidden dependency, doesn't creep back in.

## Where they run

Fitness functions are most valuable wired into CI, running on every
change — the same way a unit test suite runs — so architectural drift is
caught at the commit that introduced it, not months later during a
scheduled architecture review when the cause is much harder to trace.

## Relationship to decision records

A fitness function is frequently the automated enforcement mechanism for
a specific decision captured in an ADR or decision record — see
[[decision-record-testing-skill]] for the broader discipline of checking
a codebase against recorded decisions, of which a fitness function is one
concrete implementation technique.

## Common pitfalls

- **Writing a fitness function for a property nobody actually decided on
  deliberately** — a check enforcing an arbitrary structural preference,
  rather than a real, agreed architectural characteristic, becomes an
  unexplained obstacle.
- **Letting a fitness function outlive the decision it enforced** — same
  risk as a stale automated policy check in [[decision-record-testing-skill]];
  remove or update it when the underlying decision changes.
- **Treating fitness functions as a replacement for human architecture
  review** — they catch objectively-checkable drift; they don't replace
  judgment calls about whether the architecture itself is still the right
  one.
- **No fitness functions at all, relying purely on code review to catch
  architectural drift** — human review is inconsistent at catching
  structural violations a mechanical check would catch every time.

## Learn more

- Ford, Parsons, Kua, *Building Evolutionary Architectures* — the originating text for the term.
- [[decision-record-testing-skill]] for the broader discipline of checking code against recorded architectural decisions.
- [[architecture-decision-record-skill]] for writing the decision a fitness function might enforce.
