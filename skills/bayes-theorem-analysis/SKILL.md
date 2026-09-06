---
name: bayes-theorem-analysis
description: Use when asked to apply Bayes' theorem — updating a probability estimate given new evidence, P(A|B) = P(B|A)·P(A)/P(B) — as one specific probabilistic technique within the broader statistical-analysis toolkit (see statistical-analysis), foundational to Bayesian inference and Bayesian networks.
---

# Bayes' Theorem Analysis

Bayes' theorem is a fundamental result in probability theory (named
after Reverend Thomas Bayes) for updating the probability of an event
given new evidence:

```
P(A|B) = P(B|A) × P(A) / P(B)
```

- **P(A|B)** — the probability of A given that B has occurred (what
  we want to know).
- **P(B|A)** — the probability of B given that A is true (often the
  easier direction to measure or estimate directly).
- **P(A)** — the prior probability of A, before observing B.
- **P(B)** — the overall probability of B occurring, across all cases.

## The core idea

Bayes' theorem lets you update a belief about an event's probability
based on new evidence — starting from a **prior** probability, then
revising it into a **posterior** probability once new information (the
evidence) is accounted for.

## The classic worked example: diagnostic testing

Determining the probability a person actually has a disease, given they
tested positive for it. Bayes' theorem combines two pieces of
information that alone are each misleading in isolation:

- **Test accuracy** — P(positive test | has disease), which is usually
  what's reported as the test's sensitivity.
- **Disease prevalence** — P(has disease), the prior probability in the
  relevant population *before* testing.

The counterintuitive result this combination often produces: even a
fairly accurate test can have a high false-positive rate in absolute
terms for a rare disease, because a low prior probability (rare disease)
pulls the posterior probability down substantially even after a positive
result — a fact routinely misunderstood without actually running the
calculation.

## Where it's used

- **Bayesian inference** — a statistical approach to estimating unknown
  parameters from observed data, updating a prior belief as more data
  arrives.
- **Bayesian networks** — a graphical model representing probabilistic
  relationships between variables, letting complex, multi-variable
  probability reasoning be computed systematically.
- **Decision theory and game theory** — reasoning about decisions under
  genuine uncertainty, incorporating both prior belief and new evidence.

## Common pitfalls

- **Ignoring the base rate (prior probability)** — the "base rate
  fallacy": reasoning only from test accuracy while ignoring how rare or
  common the underlying condition actually is produces a badly wrong
  intuitive estimate, exactly the mistake the diagnostic-testing example
  above corrects for.
- **Confusing P(A|B) with P(B|A)** — these are generally *not* equal, and
  conflating them ("the test is 99% accurate, so a positive result means
  99% chance of having the disease") is one of the most common
  statistical reasoning errors, precisely what Bayes' theorem exists to
  correct.
- **Using an unjustified or arbitrary prior** — the posterior probability
  is only as good as the prior it started from; an unexamined or
  poorly-justified prior can produce a confident-looking but unreliable
  result.

## Learn more

- [[statistical-analysis]] for the broader technique family Bayes' theorem is one specific tool within.
- [[chi-square-analysis]] for a different technique testing association between categorical variables, useful to contrast against Bayesian updating's different underlying question.
