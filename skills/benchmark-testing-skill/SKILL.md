---
name: benchmark-testing-skill
description: Use when asked to compare a system's performance against a standard or reference point — benchmarking methodology and pitfalls — as distinct from the specific load/stress/performance techniques it often composes (see load-testing-skill, stress-testing-skill, performance-testing-skill).
---

# Benchmark Testing Skill

Benchmark testing (benchmarking) compares the performance of a system,
application, or technology against a standard or reference point — a
known baseline, a competitor, or the same system's own prior version —
to evaluate speed, efficiency, and overall performance and identify where
to improve.

## Common types composed under "benchmarking"

- **Performance testing** — behavior under varying conditions/workloads
  (see [[performance-testing-skill]]).
- **Performance regression testing** — comparing performance after a
  change against the pre-change baseline specifically (see
  [[regression-testing-skill]]'s general regression-testing discipline
  applied to performance).
- **Load testing** — capacity under expected/peak traffic (see
  [[load-testing-skill]]).
- **Stress testing** — behavior beyond normal capacity (see
  [[stress-testing-skill]]).
- **Compatibility testing** — comparing behavior across operating
  systems, devices, or software environments.

Benchmarking is less a distinct technique than a *comparative framing*
applied on top of these — the same load test becomes a benchmark the
moment its result is compared against a defined reference point rather
than judged in isolation.

## Doing it well

Choose benchmarks and methods appropriate to the actual decision being
made, and interpret results carefully — a benchmark score is only
meaningful relative to what it was measured against, and results from
different environments, hardware, or methodologies are often **not
directly comparable** even when they look like they should be.

## Common pitfalls

- **Comparing benchmark numbers across incompatible environments** —
  different hardware, load generators, or network conditions invalidate a
  direct comparison even when the workload was nominally "the same."
- **Optimizing for the benchmark rather than real usage** — a system
  tuned specifically to score well on a synthetic benchmark can
  underperform on the actual production workload the benchmark was meant
  to approximate.
- **Treating a single benchmark run as definitive** — performance
  measurements have natural variance; a credible benchmark reports a
  distribution (or at least repeats the run), not one number.

## Learn more

- [[performance-testing-skill]], [[load-testing-skill]], [[stress-testing-skill]] for the underlying techniques benchmarking most often applies.
- [[regression-testing-skill]] for comparing a benchmark against a prior baseline specifically.
