---
name: a-b-testing-skill
description: Use when asked to design or automate an A/B test — random traffic allocation, statistical significance, and multivariate testing — as distinct from black/white-box testing technique (see black-box-testing-skill, white-box-testing-skill) or UI/UX evaluation broadly (see ui-ux-testing-skill).
---

# A/B Testing Skill

A/B testing compares two versions of an application or feature against
each other to determine which performs better on a specific, predefined
metric — a data-driven alternative to deciding by opinion.

## How it works

1. Define the goal metric before starting (conversion rate, click-through,
   engagement time) — chosen after the fact, a metric can always be found
   that makes either variant look like the winner.
2. Randomly split traffic between variant A (control) and variant B
   (treatment), so any observed difference is attributable to the
   variant, not to a systematic difference in who saw which one.
3. Run until reaching **statistical significance** — enough samples that
   an observed difference is unlikely to be random noise — not just until
   one variant happens to be ahead.
4. **Multivariate testing** extends this to multiple simultaneous
   changes, testing combinations rather than one isolated variable at a
   time; it needs proportionally more traffic to reach significance for
   each combination.

## Automation

Modern A/B test automation integrates with CI/CD and production traffic:
frameworks handle random assignment, collect metrics (conversion, load
time, error rate) continuously, and can automatically flag a
statistically significant result or a performance regression rather than
waiting for a human to notice.

## Common pitfalls

- **Stopping early because one variant looks ahead** — checking results
  repeatedly and stopping the moment a difference appears inflates the
  false-positive rate; decide the sample size (or a proper sequential
  testing method) in advance.
- **No pre-registered goal metric** — picking the metric after seeing the
  data invites cherry-picking whichever number happened to favor the
  preferred variant.
- **Sample pollution** — a user seeing both variants (e.g. across
  devices, or due to a caching bug) breaks the random-assignment
  assumption the whole method depends on.
- **Ignoring interaction effects in multivariate tests** — two changes
  that each help individually can combine to hurt, and vice versa; a
  multivariate design accounts for this, a series of separate A/B tests
  doesn't.

## Learn more

- [[ui-ux-testing-skill]] for the broader design-evaluation methods A/B testing is one technique within.
- [[performance-testing-skill]] for the load/response-time metrics an A/B test sometimes tracks alongside conversion.
