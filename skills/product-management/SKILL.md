---
name: product-management
description: Use when asked to write a product strategy/roadmap, prioritize a backlog, define OKRs or success metrics for a product, or explain product-management concepts (discovery vs delivery, prioritization frameworks) — as distinct from project management (see project-management) or program/portfolio management (see program-management, portfolio-management).
---

# Product Management

Product management owns the *what* and *why* of a product — which problem
to solve for which users and why it matters to the business — as distinct
from [[project-management]], which owns the *how/when/who* of
delivering a defined piece of work. A product manager can (and often does)
work with a project or program manager rather than being one.

## Discovery vs. delivery

- **Discovery** — figuring out what to build: user research (see
  [[user-centred-design]]), validating a problem is real and worth
  solving, testing a solution concept cheaply before committing engineering
  time.
- **Delivery** — actually building and shipping the validated solution.

The common failure mode is skipping discovery and treating every
stakeholder request as a delivery item — a fully-staffed, well-run delivery
process building the wrong thing is still a failure, just an efficient one.

## Strategy and roadmaps

- A **product strategy** states the target market/user, the problem being
  solved, and how winning is defined — the filter every roadmap decision
  should trace back to.
- A **roadmap** is not a project schedule with fixed dates for fixed
  features; the more useful form communicates **themes/outcomes** and
  rough sequencing ("now / next / later"), leaving room for discovery to
  change the specific solution while the outcome stays fixed. A roadmap
  that's actually a Gantt chart of features has usually stopped being a
  product artifact and become a delivery commitment.

## Prioritization frameworks

- **RICE** (Reach × Impact × Confidence ÷ Effort) — a scoring model
  forcing explicit numbers for each factor, useful for comparing
  otherwise-incomparable ideas on a common scale.
- **MoSCoW** (Must / Should / Could / Won't) — a simpler categorical
  framework, common in scoped, deadline-driven delivery contexts.
- **Kano model** — classifies features as basic (expected, absence causes
  dissatisfaction), performance (more is better, roughly linear
  satisfaction), or delighter (unexpected, high satisfaction impact) —
  useful for noticing that piling on more "performance" features has
  diminishing returns while a missing "basic" feature is disproportionately
  damaging.
- No framework replaces judgment about strategic fit — a low-RICE-score
  item that's a hard regulatory requirement still ships.

## Success metrics

- **North Star metric** — one metric that best captures the value a
  product delivers to users (not just revenue), that the team rallies
  around; supporting metrics explain movement in it.
- **OKRs (Objectives and Key Results)** — a qualitative Objective
  paired with a small number of measurable Key Results; commonly used to
  connect product work to business outcomes at the level a roadmap theme
  should also trace to.
- Beware **vanity metrics** (raw signups, page views) that move without
  reflecting real value delivered — prefer metrics tied to the actual
  problem the product claims to solve (activation, retention, task
  success).

## Common pitfalls

- **Feature factory mode** — measuring product management success by
  output shipped rather than outcomes achieved; a roadmap full of shipped
  features that didn't move the North Star metric is a warning sign, not a
  win.
- **Treating every customer request as a requirement** — a specific
  request is evidence of an underlying need, not necessarily the right
  solution; the underlying need is what discovery should validate.
- **Confusing a roadmap with a promise** — committing specific dates for
  specific unvalidated solutions removes the flexibility discovery is
  supposed to provide, and sets up a broken promise the moment discovery
  reveals a better approach.
- **No prioritization criteria, only politics** — whoever's loudest or most
  senior wins the backlog fight; an explicit framework (even an imperfect
  one) gives a shared, defensible basis for saying no.

## Learn more

- [Marty Cagan: Inspired](https://www.svpg.com/books/inspired-2/) — widely-referenced practitioner text on the discovery/delivery model.
- [Intercom on Product Management](https://www.intercom.com/blog/product-management/) — practical prioritization/roadmap guidance.
- [[project-management]] for the delivery-execution discipline product management partners with.
- [[user-centred-design]] for the research methods discovery depends on.
