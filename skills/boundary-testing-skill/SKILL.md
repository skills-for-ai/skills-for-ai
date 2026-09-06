---
name: boundary-testing-skill
description: Use when asked to test the edges of an input range or operational limit — minimum/maximum values, off-by-one errors — a specific black-box technique (see black-box-testing-skill) worth its own focus because defects cluster at boundaries.
---

# Boundary Testing Skill

Boundary testing evaluates application behavior at the edges of input
domains and operational limits — values at a boundary, just above it, and
just below it — because software defects disproportionately occur at
these transition points.

## Designing boundary test cases

For a range, test the minimum, the maximum, and values just outside both
ends. If a system accepts ages 18–65, boundary tests include 17, 18, 19,
64, 65, and 66 — not just a mid-range value like 40. This concentrates
testing where conditional statements, loop bounds, and array indexing are
actually likely to have programming errors, rather than spreading effort
evenly across a range where most values behave identically.

## Where automation helps

Tools can systematically generate and execute large volumes of boundary
test cases across many conditions at once — numeric ranges, string
lengths, file sizes, database record limits, system resource limits — far
more thoroughly than manual testing would practically cover, and can be
wired into CI so boundary conditions are re-checked on every change.

## What it catches

Off-by-one errors, buffer overflows, and improper input validation are
the classic defect classes boundary testing is specifically good at
surfacing — bugs that a mid-range "happy path" input would never
trigger.

## Common pitfalls

- **Testing only the boundary itself, not just-inside and just-outside**
  — a test only at exactly 18 (from the age example) misses an off-by-one
  error that would show up specifically at 17 or 19.
- **Applying boundary testing only to numeric ranges** — it applies
  equally to string lengths, collection sizes, and any other bounded
  quantity; limiting the technique to numbers misses a real class of
  defects elsewhere.
- **Treating boundary testing as a replacement for broader equivalence
  partitioning** — see [[black-box-testing-skill]]; boundaries catch a
  specific defect class, not every kind of invalid input.

## Learn more

- [[black-box-testing-skill]] for the broader technique family boundary testing is one member of.
- [[fuzz-testing-skill]] for a complementary, randomized approach to finding unexpected edge-case inputs.
