---
name: critical-to-quality
description: Use when asked to define Critical to Quality (CTQ) requirements in a Six Sigma context — translating customer expectations into measurable product/service characteristics with performance targets — as distinct from the general SQA catalog (see system-quality-attributes) and feeding directly into a dmaic project's Define/Measure stages.
---

# Critical to Quality (CTQ)

Critical to Quality (CTQ) is a Six Sigma term for a metric that captures
a customer requirement in a measurable, quantifiable way — identifying
where an organization's processes fall short of customer expectations
and can be improved to raise customer satisfaction.

## What counts as a CTQ

A specific, measurable characteristic of a product or service that
determines customer satisfaction — CTQs can be **internal** (e.g. a
manufacturing process tolerance) or **external** (e.g. a stated customer
requirement), and are identified by analyzing customer feedback, market
research, and the organization's own quality-management data (see
[[voice-of-the-customer]] for the customer-feedback side of this
identification process).

## From identified CTQ to managed metric

1. **Identify** the CTQs — the specific characteristics that actually
   drive customer satisfaction, grounded in real customer input rather
   than internal assumption about what customers care about.
2. **Set performance targets** — establish a target for each CTQ,
   calibrated so meeting it consistently over time actually reflects
   customer satisfaction, not just an internally convenient number.
3. **Measure and analyze** — track whether targets are being met, and use
   the data to prioritize process improvements toward the CTQs that are
   falling short.

## Why CTQs matter

They focus the organization on the *most important* aspects of its
product or service — rather than optimizing something that's easy to
measure but doesn't actually drive customer satisfaction, CTQs anchor
improvement effort to what customers have actually shown they care about.
The result, done well: better customer satisfaction and loyalty,
increased sales, and improved profitability.

## Relationship to DMAIC and system quality attributes

CTQ identification typically happens during a [[dmaic]] project's
**Define** stage (what does the customer actually need) and is tracked
through **Measure** and **Control**. CTQs are narrower and more
customer-facing than [[system-quality-attributes]]'s full catalog
of technical quality attributes — a CTQ is specifically a characteristic
customers have shown they care about, whereas the SQA catalog covers
technical attributes (like maintainability or observability) that may
matter to engineering without being directly customer-visible at all.

## Common pitfalls

- **CTQs defined from internal assumption rather than real customer
  input** — defeats the whole purpose; see
  [[voice-of-the-customer]] for grounding CTQs in actual feedback.
- **Setting a target that's easy to hit but doesn't reflect real
  satisfaction** — a CTQ target should be calibrated against what
  actually satisfies customers, not against whatever the current process
  can already comfortably achieve.
- **Too many CTQs diluting focus** — similar to
  [[critical-success-factors]]'s warning about too many CSFs; CTQs
  should stay to the characteristics that genuinely drive satisfaction,
  not an exhaustive list of every measurable product attribute.
- **No ongoing measurement after initial identification** — a CTQ
  identified once and never tracked again can't actually confirm whether
  customer expectations continue to be met as the process or product
  evolves.

## Learn more

- [[dmaic]] for the broader Six Sigma methodology CTQ identification fits within.
- [[voice-of-the-customer]] for grounding CTQs in real customer feedback.
- [[system-quality-attributes]] for the broader, more technical quality-attribute catalog CTQs are a customer-focused subset of.
