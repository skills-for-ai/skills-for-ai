---
name: performance-testing
description: Use when asked to measure application responsiveness and resource use under workload — the umbrella covering load, stress, endurance, and spike testing (see load-testing, stress-testing) — to identify bottlenecks and confirm the system meets performance requirements.
---

# Performance Testing

Performance testing measures an application's performance and
responsiveness under specific workloads and scenarios — identifying
bottlenecks, determining system limitations, and confirming the
application meets its required performance standards, as the umbrella
discipline several more specific techniques sit within.

## The four core variants

- **Load testing** — performance under normal and peak loads, simulating
  high user-traffic volume and monitoring response time, throughput, and
  resource utilization (see [[load-testing]] in depth).
- **Stress testing** — behavior under extreme loads beyond capacity,
  pushing the system to its limits to find where and how it degrades or
  fails (see [[stress-testing]]).
- **Endurance testing** — performance over an extended continuous period,
  surfacing issues that only manifest over time (memory leaks, gradual
  resource exhaustion) that a short test would never reveal.
- **Spike testing** — performance during sudden, significant traffic
  spikes, checking for degradation or failure specifically at the moment
  of a fast increase, distinct from a sustained peak (see
  [[peak-testing]]).

## Choosing which variant to run

Each variant answers a different question about the same underlying
system: load testing asks "does it handle expected traffic well," stress
testing asks "where does it actually break," endurance testing asks
"does it degrade over time even under stable load," and spike testing
asks "does a sudden jump specifically cause a problem a gradual increase
wouldn't." A comprehensive performance testing effort typically needs
more than one of these — passing load testing alone says nothing about
endurance or spike behavior.

## Common pitfalls

- **Running only load testing and calling it "performance testing"** —
  each of the four variants finds a different class of issue; skipping
  the others leaves real gaps.
- **No endurance testing for a long-running service** — a memory leak or
  slow resource exhaustion is invisible in a short load test and only
  surfaces after hours or days of sustained operation.
- **Vague performance requirements** — "the system should be fast" isn't
  testable; a specific target (e.g. 95th-percentile response time under
  200ms at expected peak load) is what performance testing actually
  checks against.

## Learn more

- [[load-testing]], [[stress-testing]], [[peak-testing]] for the specific variants in depth.
- [[benchmark-testing]] for comparing performance-testing results against a reference point.
- [[system-quality-attributes]] for where "performance" sits among the fuller catalog of quality attributes.
