---
name: anomaly-analysis-skill
description: Use when asked to detect anomalies/outliers in data — statistical, machine-learning, and deep-learning detection methods, supervised vs. unsupervised approaches — as distinct from trend-analysis-skill's focus on overall patterns over time rather than individual deviant points.
---

# Anomaly Analysis Skill

Anomaly detection identifies unusual or unexpected events, patterns, or
behaviors in data — anomalies (or outliers) that can stem from data
collection errors, genuinely unexpected events, or malicious activity.
Used across finance, healthcare, and cybersecurity to detect and prevent
fraud, cyberattacks, and other threats.

## Supervised vs. unsupervised

- **Supervised** — trains a model on labeled data where anomalies are
  already marked as such, then applies that model to identify anomalies
  in new data. Requires a labeled dataset of known anomalies, which isn't
  always available or complete.
- **Unsupervised** — doesn't need labeled data; identifies patterns that
  deviate from the norm without prior examples of what an anomaly looks
  like. More broadly applicable but generally less precise than a
  well-trained supervised model, since it has no ground truth to learn
  from directly.

## Detection techniques

- **Statistical methods** — calculate a dataset's mean and standard
  deviation, flagging data points falling outside a defined range;
  simple, interpretable, and a reasonable first approach for
  well-behaved, roughly-normal data.
- **Machine learning** — clustering and decision-tree-based approaches
  group data points by similarity/difference, flagging points that don't
  fit any cluster well.
- **Deep learning** — autoencoders and recurrent neural networks detect
  anomalies in time-series data specifically, useful when the "normal"
  pattern is too complex for simple statistical thresholds to capture.

## Why validation still matters

Anomaly detection algorithms aren't perfect — they produce both false
positives (flagging normal behavior as anomalous) and false negatives
(missing a genuine anomaly). Human analysis to validate flagged results
remains important, especially in high-stakes domains (fraud, security,
healthcare) where an unvalidated false positive or missed false negative
carries real cost.

## Relationship to trend analysis

Anomaly detection and [[trend-analysis-skill]] both examine data over
time but ask different questions: trend analysis asks "what's the
overall direction/pattern," anomaly detection asks "which specific points
don't fit that pattern." They're complementary — establishing the normal
trend is often a prerequisite for defining what counts as an anomalous
deviation from it.

## Common pitfalls

- **Treating flagged anomalies as confirmed problems without human
  review** — given known false-positive/false-negative rates, an
  automated flag should trigger investigation, not an automatic
  conclusion.
- **Using a supervised model with insufficient or unrepresentative
  labeled anomaly examples** — a model trained on too few or
  unrepresentative anomaly examples generalizes poorly to genuinely novel
  anomaly types.
- **Applying a simple statistical threshold to data that isn't
  well-behaved** — a mean/standard-deviation approach assumes something
  close to a normal distribution; skewed or multimodal data needs a
  different technique to avoid a high false-positive or false-negative
  rate.
- **No mechanism to update the "normal" baseline over time** — a system
  whose genuinely normal behavior drifts (seasonality, growth) needs its
  anomaly-detection baseline to adapt, or it eventually flags routine
  behavior as anomalous.

## Learn more

- [[trend-analysis-skill]] for the complementary overall-pattern analysis.
- [[statistical-analysis-skill]] for the broader statistical toolkit anomaly detection draws its simpler methods from.
- [[chaos-testing-skill]] for a related but distinct discipline (deliberately inducing failure) versus detecting it after the fact.
