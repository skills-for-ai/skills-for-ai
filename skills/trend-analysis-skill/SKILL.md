---
name: trend-analysis-skill
description: Use when asked to analyze data over time to identify patterns and forecast — regression, moving averages, exponential smoothing — as distinct from anomaly-analysis-skill's focus on individual deviant points rather than the overall directional pattern.
---

# Trend Analysis Skill

Trend analysis examines data over time to identify patterns and predict
future outcomes — widely used in finance, economics, marketing, and
social sciences to understand how a factor (sales, revenue, customer
behavior) is changing, and to forecast where it's heading next.

## The basic process

Collect and plot data over a specific period — time on the horizontal
axis, the variable of interest on the vertical — using a line chart,
scatter plot, or bar graph as fits the data. From there, identify
patterns: an upward or downward trend, seasonality (a recurring pattern
tied to a calendar cycle), or cyclicality (a recurring pattern not tied
to a fixed calendar period).

## Statistical techniques

- **Regression analysis** — identifies the trendline's slope, giving a
  quantified rate of change rather than just a visual impression of
  direction.
- **Moving averages** — smooth out short-term fluctuations to make the
  underlying trend visible beneath noisy period-to-period variation.
- **Exponential smoothing** — a weighted-average technique giving more
  weight to recent observations, useful when recent data is more
  informative about the near future than older data.

Together these help identify the direction, speed, and magnitude of
change in the variable being tracked — not just "is it going up" but "how
fast, and is that rate itself changing."

## What it's used for

Forecasting and prediction based on historical data; identifying
potential risks and opportunities before they're obvious from a single
data point; and monitoring whether a strategy or policy already in place
is actually working, adjusting course based on the trend rather than
waiting for a final outcome to confirm it.

## Relationship to anomaly analysis

Trend analysis and [[anomaly-analysis-skill]] examine the same
underlying time-series data but for different purposes: trend analysis
characterizes the overall pattern; anomaly analysis flags specific points
that don't fit it. Establishing a trend is often the necessary first step
before individual deviations from it can even be meaningfully defined as
anomalies.

## Common pitfalls

- **Extrapolating a trend indefinitely without checking whether the
  underlying conditions still hold** — a trendline fit to historical data
  assumes the factors driving it continue unchanged; a real
  regime change (market shift, policy change) can invalidate a
  projection built on stale conditions.
- **Confusing correlation over time with causation** — two trending
  series moving together doesn't establish that one causes the other;
  see [[chi-square-analysis-skill]] and [[statistical-analysis-skill]]
  more broadly for testing an actual relationship, not just eyeballing
  parallel trend lines.
- **Ignoring seasonality when it's present** — comparing raw month-over-
  month figures without accounting for known seasonal patterns can
  misread a normal seasonal dip as a genuine downward trend.
- **Over-smoothing** — a moving average or smoothing window set too wide
  can hide a genuine, recent shift in trend direction, delaying
  recognition of an actual change.

## Learn more

- [[anomaly-analysis-skill]] for the complementary individual-deviation analysis.
- [[statistical-analysis-skill]] for the broader statistical toolkit (including regression and time-series methods) trend analysis draws on.
- [[key-performance-indicators-skill]] for the metrics trend analysis is often applied to track over time.
