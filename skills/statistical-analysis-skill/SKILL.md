---
name: statistical-analysis-skill
description: Use when asked which statistical technique fits a data question — descriptive vs. inferential statistics, regression, time series, factor/cluster analysis, data mining — as the umbrella technique-selection layer above more specific methods like bayes-theorem-analysis-skill, chi-square-analysis-skill, and monte-carlo-analysis-skill.
---

# Statistical Analysis Skill

Statistical analysis techniques analyze and interpret data to draw
meaningful conclusions, identify patterns, make predictions, and test
hypotheses. This skill maps the technique family; several more specific
methods elsewhere in this collection ([[bayes-theorem-analysis-skill]],
[[chi-square-analysis-skill]], [[monte-carlo-analysis-skill]]) are each
one specific tool within it.

## The technique family

- **Descriptive statistics** — summarize a dataset's main
  characteristics: mean, variance, standard deviation. Describes *what
  the data is*, without generalizing beyond it.
- **Inferential statistics** — generalizes from a sample to a larger
  population: confidence intervals, t-tests, analysis of variance,
  regression analysis, chi-square tests (see
  [[chi-square-analysis-skill]] for that one specifically).
- **Regression analysis** — examines the relationship between a
  dependent variable and one or more independent variables: linear,
  multiple, logistic, and polynomial regression, each suited to
  different data shapes and relationship types.
- **Time series analysis** — studies patterns, trends, and seasonality
  in data over time: moving averages, exponential smoothing, ARIMA
  models (see [[trend-analysis-skill]] for the applied version of this).
- **Factor analysis** — identifies underlying, unobserved factors
  explaining correlations among observed variables.
- **Cluster analysis** — groups observations by similarity: k-means,
  hierarchical clustering, DBSCAN — related to but distinct from
  [[anomaly-analysis-skill]]'s use of clustering specifically to flag
  points that *don't* fit any cluster well.
- **Data mining** — discovering patterns, relationships, and insights in
  large, complex datasets: decision trees (see
  [[decision-tree-skill]]), random forests, support vector machines,
  neural networks.

## Choosing among them

The right technique follows from the actual question: describing what
already happened (descriptive), generalizing from a sample (inferential),
quantifying a relationship between variables (regression), understanding
change over time (time series), finding hidden structure (factor/cluster
analysis), or discovering unexpected patterns in a large dataset (data
mining). A common mistake is reaching for a familiar technique regardless
of fit — e.g. running a regression when the actual question is really
about categorical association, which calls for
[[chi-square-analysis-skill]] instead.

## Common pitfalls

- **Applying inferential statistics to a non-representative sample** —
  generalizing from a biased or unrepresentative sample to the broader
  population produces confident-sounding but invalid conclusions.
- **Confusing correlation (from a regression or cluster finding) with
  causation** — a strong statistical relationship doesn't by itself
  establish which variable, if either, causes the other.
- **Picking a technique for familiarity rather than fit** — see above;
  the right tool follows from the actual data type and question, not
  from whichever method the analyst already knows best.
- **Ignoring a technique's underlying assumptions** — most of these
  methods have real prerequisites (data distribution shape, sample
  independence, minimum sample size); violating them, as
  [[chi-square-analysis-skill]] notes for its own small-expected-
  frequency caveat, can silently invalidate the result.

## Learn more

- [[bayes-theorem-analysis-skill]], [[chi-square-analysis-skill]], [[monte-carlo-analysis-skill]] for specific techniques within this family, covered in depth.
- [[trend-analysis-skill]], [[anomaly-analysis-skill]] for applied time-series and outlier-detection techniques.
- [[decision-tree-skill]] for the data-mining technique also used as a general business decision-evaluation tool.
