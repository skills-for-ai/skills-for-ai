---
name: monte-carlo-testing-skill
description: Use when asked to test a system using randomly-sampled inputs drawn from defined probability distributions to estimate reliability statistically — as distinct from fuzz testing (see fuzz-testing-skill), which searches for specific crashing inputs rather than estimating overall statistical reliability.
---

# Monte Carlo Testing Skill

Monte Carlo testing is a probabilistic approach that uses random sampling
and statistical methods to evaluate system behavior and reliability —
generating large volumes of test cases with randomly selected input
values, execution paths, or scenarios to simulate real-world usage
patterns that would be difficult to predict or enumerate through
traditional, deterministic test design.

## How it works

1. Define probability distributions for input parameters, system states,
   and environmental conditions — this modeling step is where the real
   skill lies; a distribution that doesn't reflect actual usage produces
   statistically confident but practically meaningless results.
2. Automatically generate test cases by sampling from those
   distributions, producing a diverse set of scenarios spanning a broad
   range of possible system behavior.
3. Execute and collect results across many runs, then analyze
   statistically — estimating reliability metrics, confidence intervals,
   and failure probabilities rather than a simple pass/fail per test
   case.

## Why it's useful

For complex systems where exhaustive testing is impractical (the number
of possible input combinations is simply too large to enumerate), Monte
Carlo testing explores the system's behavior across a wide statistical
space and can reveal vulnerabilities or performance issues that only
occur under specific, hard-to-predict combinations of conditions —
producing confidence intervals and probability estimates for failure
that inform release-readiness decisions with actual statistical grounding
rather than a single pass/fail signal.

## Contrast with fuzz testing

Both use randomized input generation, but with different goals: 
[[fuzz-testing-skill]] hunts for specific crashing or vulnerable inputs
(a single bad input is a "win" for a fuzzer); Monte Carlo testing
estimates overall statistical reliability across a distribution of
realistic scenarios (a single failure is one data point contributing to
a broader reliability estimate, not the primary goal by itself).

## Common pitfalls

- **Probability distributions that don't reflect real usage** — the
  entire method's validity depends on the input distributions actually
  approximating production reality; an unrealistic model produces
  statistically rigorous-looking but practically misleading results.
- **Under-resourcing the compute needed** — meaningful statistical
  confidence generally needs a large number of sampled runs; too few
  samples undermines the whole point of a probabilistic approach.
- **Treating a single Monte Carlo run's result as definitive** — the
  value is in the statistical distribution of outcomes across many runs,
  not any one sampled scenario's result.

## Learn more

- [[fuzz-testing-skill]] for the related but goal-distinct randomized-input technique focused on finding specific crashing inputs.
- [[performance-testing-skill]] for a common application domain (reliability/performance under varied simulated conditions).
