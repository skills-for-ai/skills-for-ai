---
name: load-testing
description: Use when asked to test how an application performs under expected and peak user load — capacity limits, breaking points — as distinct from stress testing beyond normal capacity (see stress-testing) or sudden-spike testing (see peak-testing), which load testing's staged progression leads into.
---

# Load Testing

Load testing evaluates how an application performs under expected and
peak user loads by simulating real-world usage — many concurrent users,
transactions, or requests — to identify performance bottlenecks, system
limitations, and potential failure points before they reach production.

## Objectives

Determine maximum operating capacity, identify the point where
performance starts degrading, and validate stability under sustained
load — not just "does it work," but "does it keep working acceptably as
load increases toward and past expected peaks."

## A staged progression

- **Baseline testing** — minimal load, establishing a reference point.
- **Normal load testing** — expected typical user volumes.
- **Stress testing** — beyond normal capacity (see [[stress-testing]]
  for this specifically).
- **Spike testing** — sudden, sharp load increases (closely related to
  [[peak-testing]]'s sustained-peak-period focus).

Load testing is the umbrella progression these other, more specific
tests sit within.

## Automation and CI integration

Automated load-test scripts integrated into CI/CD pipelines catch
performance regressions early, as part of ongoing quality gates rather
than only right before a release. Results feed directly into concrete
optimization work: tuning database queries, optimizing code paths,
adjusting server configuration, and scaling infrastructure appropriately
for the actual measured capacity, not a guess.

## Doing it well

Realistic test data, an environment configuration that actually mirrors
production, and clearly defined performance criteria set *before*
testing (not after, to match whatever result showed up) — the same
before-the-fact-metric discipline [[a-b-testing]] requires for its
goal metric applies here to performance targets.

## Common pitfalls

- **Testing against an environment that doesn't mirror production** —
  results from a smaller/differently-configured environment don't reveal
  the actual production capacity limit.
- **No pre-defined performance criteria** — without a target agreed in
  advance, any result can be rationalized as "good enough."
- **Unrealistic test data** — synthetic, uniform load patterns can miss
  bottlenecks that only appear under realistic, uneven real-world traffic
  shapes.
- **Running load tests only before a major release** — regular,
  CI-integrated load testing catches a regression at the commit that
  introduced it, rather than in one expensive pre-release scramble.

## Learn more

- [[stress-testing]] for load beyond normal capacity specifically.
- [[peak-testing]] for sustained high-traffic-period testing.
- [[performance-testing]] for the broader performance-verification discipline load testing is one technique within.
