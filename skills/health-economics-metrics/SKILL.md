---
name: health-economics-metrics
description: Answer health economics questions and build cost/value arguments (QALYs, ICER, ROI, Cost of Delay, business cases for NHS/health software) using this repo's topics/ as the grounded source of formulas, worked examples, and pitfalls. Use when the user asks to explain a health-economics concept, compute a metric, justify a health-software investment, or write a business case for a national health service audience.
---

# Health economics metrics — applying this repo

This repo (`topics/*.md`) is a curated reference: one file per metric or concept, each with a
definition, why it matters, the math, a worked example, the software-engineering connection,
pitfalls, and sources. Your job is to use it as ground truth rather than recalling health
economics from general training — the docs encode NHS-specific conventions (discount rates,
willingness-to-pay thresholds, terminology) and known pitfalls that generic knowledge gets wrong.

## Workflow

1. **Classify the ask.** Is the user asking to (a) explain a concept, (b) compute a metric from
   their own numbers, (c) pick the right metric for a decision, or (d) build a multi-metric
   business case / argument?
2. **Find the topic(s).** Scan `README.md` — it's a categorized index with a one-line hook per
   topic — to identify the most relevant file(s) in `topics/`. Read the full file(s), not just
   the README hook line.
3. **Follow cross-links.** Topic files link to related topics inline (e.g. cost-of-delay.md links
   to wsjf-and-cd3.md and discounting-and-time-preference.md). A real question usually spans 2–4
   linked topics — follow them rather than answering from one file in isolation.
4. **Compute with the user's numbers, not invented ones.** Use the formulas verbatim from "The
   math" section. When the user hasn't supplied a number the formula needs (discount rate,
   WTP threshold, utility values), use the document's stated default (e.g. NICE's 3.5% Green
   Book rate, £20–30k/QALY) and say explicitly that you did so — don't silently assume.
5. **Surface pitfalls unprompted.** Every topic's "Pitfalls" section exists because these are the
   mistakes people actually make (e.g. double-counting discounting and Cost of Delay, confusing
   marginal vs average cost, treating cash-releasing and non-cash-releasing savings as
   equivalent). If the user's framing walks into one, flag it before finishing the answer.
6. **Cite the source file(s)** you drew from (e.g. "see `topics/net-monetary-benefit.md`") so the
   user can go deeper or check the sources section themselves.

## Building a business case or multi-metric argument

Common composition for software/digital health investment cases:

- **Value framing**: [opportunity-cost](../../topics/opportunity-cost.md) for what's displaced,
  [cost-of-delay](../../topics/cost-of-delay.md) for the urgency argument, then
  [net-monetary-benefit](../../topics/net-monetary-benefit.md) or
  [return-on-investment](../../topics/return-on-investment.md) to net it out.
- **Health-outcome framing**: [quality-adjusted-life-year](../../topics/quality-adjusted-life-year.md)
  → [incremental-cost-effectiveness-ratio](../../topics/incremental-cost-effectiveness-ratio.md)
  → [willingness-to-pay-thresholds](../../topics/willingness-to-pay-thresholds.md) to judge
  whether the ICER clears the bar.
  Regulatory-grade cases: [nice-evidence-standards-framework](../../topics/nice-evidence-standards-framework.md).
- **Uncertainty**: back any point estimate with
  [sensitivity-analysis](../../topics/sensitivity-analysis.md) or
  [probabilistic-sensitivity-analysis](../../topics/probabilistic-sensitivity-analysis.md) — a
  single-number business case invites the "what if you're wrong" pushback.
- **Which perspective and horizon**: settle
  [analysis-perspective](../../topics/analysis-perspective.md) (payer/provider/societal) and
  [time-horizon](../../topics/time-horizon.md) first — they change which costs and effects count,
  and the answer changes downstream.

For anything AI/software-delivery specific (Copilot-style productivity claims, LLM inference
cost, DORA metrics, technical debt), start from the "Software engineering and digital delivery"
and "AI acceleration" sections of `README.md` — these are the topics that bridge health economics
into engineering language for a non-clinical stakeholder.

## Freshness caveat

Many figures (NHS unit costs, WTP thresholds, DORA clusters, LLM prices) are dated in-line in
each doc and refresh annually — see README's "Benchmark freshness" note. If a number is central
to the user's decision and looks more than a year old, say so and suggest re-verifying before it
goes into a live business case.

## What not to do

- Don't answer purely from general knowledge when a topic file exists on point — read it first.
- Don't blend NHS-specific thresholds (e.g. £20–30k/QALY) into a non-UK context without flagging
  that the number is jurisdiction-specific — other countries' thresholds are covered in
  [willingness-to-pay-thresholds](../../topics/willingness-to-pay-thresholds.md).
- Don't present a computed metric without at least one caveat from that topic's Pitfalls section
  when it's plausibly relevant.
