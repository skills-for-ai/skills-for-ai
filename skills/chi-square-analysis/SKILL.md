---
name: chi-square-analysis
description: Use when asked to test whether two categorical variables are significantly associated — contingency tables, observed vs. expected frequencies, the chi-square test statistic — as one specific inferential-statistics technique within the broader toolkit (see statistical-analysis).
---

# Chi-Square Analysis

Chi-square analysis is a statistical method for determining whether
there's a significant association between two **categorical** variables
— variables with discrete categories rather than continuous numeric
values (e.g. "preferred product color" vs. "customer region").

## The contingency table

The two categorical variables are laid out in a contingency table,
showing the frequency (or proportion) of observations for each
combination of categories — rows for one variable's categories, columns
for the other's, each cell holding the observed count for that
combination.

## The test logic

- **Null hypothesis** — the two variables are *not* associated (any
  apparent pattern is just random variation).
- **Alternative hypothesis** — the variables *are* associated.
- The test compares each cell's **observed** frequency against its
  **expected** frequency — the count that would be expected in that cell
  if there were truly no association, calculated from the row and
  column totals.
- The chi-square statistic sums the squared difference between observed
  and expected, divided by expected, across every cell.
- If that statistic is large enough to reject the null hypothesis at a
  chosen significance level (commonly α = 0.05), there's statistical
  evidence of an association between the variables.

## What it's used for

Testing hypotheses about the relationship between categorical variables,
evaluating how well a model fits observed data (goodness-of-fit), and
comparing the distributions of two or more samples — common in social
sciences, marketing research, and any field working primarily with
categorical (rather than continuous) data.

## Real constraints on the test

The chi-square test assumes observations are **independent** and that
expected cell frequencies aren't too small — a commonly cited rule of
thumb is that expected frequencies below about 5 in a cell make the test
unreliable, in which case an alternative (like Fisher's exact test) is
more appropriate.

## Common pitfalls

- **Small expected cell counts** — see above; running a standard
  chi-square test on a sparse contingency table with several
  low-expected-frequency cells produces an unreliable result even if the
  calculation completes without error.
- **Non-independent observations** — e.g. repeated measurements from the
  same subject counted as if they were independent observations violates
  a core test assumption and invalidates the result.
- **Concluding causation from a significant association** — a
  significant chi-square result establishes statistical association, not
  which variable (if either) causes the other, or whether a third,
  unmeasured factor explains both.
- **Using chi-square on continuous data forced into arbitrary categories**
  — converting a genuinely continuous variable into bins purely to run a
  chi-square test discards information a regression-based approach (see
  [[statistical-analysis]]) would use more effectively.

## Learn more

- [[statistical-analysis]] for the broader inferential-statistics toolkit chi-square analysis is one member of.
- [[trend-analysis]] for a related but distinct concern (association over time) that shouldn't be conflated with categorical-variable association.
