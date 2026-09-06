---
name: decision-tree
description: Use when asked to build a decision tree — a branching structure of decisions and their outcomes, for classification, prediction, or evaluating scenarios — as one structured evaluation tool, distinct from the generative, judgment-free phase of ideation (see ideation) that typically precedes it.
---

# Decision Tree

A decision tree is a decision-making model widely used in business,
science, and engineering — a tree-like structure representing a series of
decisions and their potential consequences, useful specifically when
there are multiple possible outcomes or paths and the best one isn't
immediately obvious.

## Structure

The **root node** at the top represents the initial decision. Each
**branch** from a node represents a possible outcome or choice, connecting
to further nodes representing the next decision in that path — so a
decision tree makes explicit the full space of possible sequences, not
just the single path someone happened to think of first.

## Where it's applied

- **Business** — comparing scenarios such as marketing strategy options,
  pricing strategies, or product-development choices.
- **Medicine** — diagnosing a condition based on a patient's symptoms,
  branching through differential possibilities.
- **Finance** — evaluating investment strategies or financial plans
  across different outcome scenarios.

## Types (in the data-science sense)

- **Classification trees** — classify data into discrete categories.
- **Regression trees** — predict a continuous value (a price, a
  temperature) rather than a category.
- **Decision trees with continuous variables** — handle input data that's
  continuous rather than purely categorical.

These automated, data-driven variants share the same branching structure
as a manually-built business decision tree, but are learned from data
rather than authored by hand.

## Why it's a useful tool

Easy to interpret, even for people without a technical background — the
branching structure itself explains the reasoning, unlike many other
predictive models. Also flexible: a decision tree can be updated as new
data or new options become available without needing to rebuild the
whole structure from scratch.

## Relationship to ideation

A decision tree is a structured *evaluation* tool — it maps out and
compares already-identified options. It's typically used **after**
[[ideation]]'s judgment-free idea generation has produced the
options worth comparing, not as a substitute for generating those options
in the first place.

## Common pitfalls

- **Building a decision tree before the option space is actually
  explored** — see [[ideation]]; a tree built from a narrow,
  prematurely-judged set of options only evaluates within that narrow
  set, missing whatever wasn't considered.
- **Omitting a real branch/outcome because it seemed unlikely** — a
  decision tree's value depends on genuinely covering the plausible
  outcome space; silently dropping an inconvenient branch defeats the
  purpose.
- **Confusing a hand-built business decision tree with a machine-learned
  one** — the data-science variants (classification/regression trees) are
  algorithmically fit to data and evaluated on predictive accuracy; a
  manually-authored business decision tree is a reasoning tool, judged by
  whether it captures the real decision space, not by a fit metric.

## Learn more

- [[ideation]] for the generative phase that typically precedes decision-tree evaluation.
- [[plantuml-diagram]] for text-based diagramming (including tree-like structures) if a version-controlled representation is preferred.
