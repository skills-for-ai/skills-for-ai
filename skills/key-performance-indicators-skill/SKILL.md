---
name: key-performance-indicators-skill
description: Use when asked to define, choose, or improve a Key Performance Indicator (KPI) — leading vs lagging indicators, measure vs metric, or how to check whether a proposed KPI is actually good — grounded in joelparkerhenderson/key-performance-indicator, as distinct from OKRs (see objectives-and-key-results-skill).
---

# Key Performance Indicators Skill

A Key Performance Indicator (KPI) is a type of performance measurement
that evaluates the success of an organization or activity. Choosing the
right KPIs requires genuinely understanding what matters to the
organization — a KPI list built without that understanding measures
whatever's easy to measure instead of what's actually important.

## How to define a KPI

A well-specified KPI covers:

- **Title** — an exact, unambiguous name.
- **Objective** — its clear relationship to an organizational objective
  (see [[objectives-and-key-results-skill]]).
- **Scope** — which parts of the business/organization it includes or
  excludes.
- **Target** — the benchmark used to judge progress.
- **Formula** — the exact calculation.
- **Units** — the unit(s) of measurement.
- **Frequency** — when it's recorded and reported.
- **Data source** — exactly where the underlying data comes from.
- **Owner** — the accountable person.
- **Comments** — outstanding issues with the indicator itself.

A KPI missing several of these (especially Formula, Data source, and
Owner) tends to be reported inconsistently across teams, or to quietly
drift in meaning over time.

## How to judge whether a KPI is good

Ask: does it clearly define success? Does it clearly relate to a
strategic OKR? Does it support setting [[smart-criteria-skill]]-compliant
goals? Does it accurately reflect progress toward both long-term
objectives and near-term milestones? Does it identify root causes of
barriers? Does it focus the organization on priority improvement needs?
Does it drive the behavior actually needed to achieve the objective? Does
it align work with value? A KPI that fails most of these is a number
being tracked, not a genuine performance indicator.

## Indicator types

- **Quantitative** (a number) vs. **Qualitative** (not numeric).
- **Leading** (predicts an outcome, actionable ahead of time) vs.
  **Lagging** (reports success or failure after the fact).
- **Input** (resources consumed) vs. **Process** (efficiency/productivity
  of the activity) vs. **Output** (the result of the process).
- **Practical** (interfaces with existing processes), **Directional**
  (shows whether something is getting better or worse), **Actionable**
  (sufficiently within the organization's control to actually change),
  **Financial**.

A **Key Leading Indicator (KLI)** is a KPI that tends to show up
earliest — worth identifying specifically, since it's the one that gives
advance warning before a lagging indicator confirms a problem has already
happened.

## Measure vs. metric

- A **measure** is concrete, usually captures one thing, quantitative
  ("I have five apples").
- A **metric** describes a quality and requires a measurement baseline to
  be meaningful ("I have five more apples than yesterday").

Measures are useful for demonstrating workload/activity; metrics are
useful for evaluating compliance, process effectiveness, and progress
against objectives — conflating the two (reporting a raw measure as if it
were a comparative metric, or vice versa) muddles what a number actually
tells you.

## The 7 habits of highly effective KPI users

KPIs help **lead**, not just manage — they should help anticipate the
future, not just report the past. KPIs **align the organization** around
shared priorities. KPIs should provide an **integrated view of the
customer**. Real-time KPI analysis enables better prioritization than
retrospective-only analysis. KPI data should be **shared across business
units**, not siloed. KPIs shouldn't be allowed to **proliferate
indiscriminately** — there's no magic number, but fewer, better KPIs beat
many mediocre ones (a rough rule of thumb: a small handful of enterprise
KPIs plus a small handful of functional ones, not dozens of each). And
KPI data can itself be a **training set** for improving decision models
over time.

## Common pitfalls

- **A KPI with no named owner or exact formula** — leads to inconsistent
  reporting and disputes about what the number actually means.
- **Confusing a measure for a metric** — reporting "5 deployments this
  week" (a measure) as if it demonstrated improvement without a baseline
  to compare against.
- **Tracking only lagging indicators** — gives no early warning; pair
  every important lagging indicator with at least one leading indicator
  that predicts it.
- **Too many KPIs** — a long dashboard of indicators dilutes focus and
  makes it hard to tell which few actually matter for the next decision.
- **A KPI the organization can't actually act on** — an indicator outside
  anyone's real control (e.g. a macroeconomic figure) can be worth
  watching as context, but shouldn't be treated as an actionable
  performance indicator for a team.

## Learn more

- [joelparkerhenderson/key-performance-indicator](https://github.com/joelparkerhenderson/key-performance-indicator) — the source for this skill, with worked examples by domain (devops, finance, ecommerce, SLAs, and more).
- [Wikipedia: Performance indicator](https://en.wikipedia.org/wiki/Performance_indicator)
- [[objectives-and-key-results-skill]] for connecting a KPI to a strategic objective.
- [[smart-criteria-skill]] for the goal-quality criteria a good KPI should support.
- [[strategic-balanced-scorecard-skill]] for a planning framework built directly on OKRs + KPIs + CSFs together.
