---
name: maturity-models-skill
description: Use when asked to design, apply, or explain a maturity model — level naming conventions, top-down vs bottom-up construction, or well-known examples (CMMI, DevOps, Agile maturity models) — grounded in joelparkerhenderson/maturity-models, including documented rebuttals.
---

# Maturity Models Skill

A maturity model is a business tool used to assess people/culture,
processes/structures, and objects/technology against a series of
increasingly sophisticated levels — a **descriptive snapshot** of current
capability, not a prescription for how to move between levels.

## The typical level structure

A common generic shape, with varying terminology by industry:

| Level | Common names |
| --- | --- |
| 0 | None, Never, Negligible, Not Applicable |
| 1 | Initiate, Investigate, Implicit, Individual-oriented, Informal-usage |
| 2 | Develop, Describe, Duplicate, Direct-oriented, Department-usage |
| 3 | Standardize, Specify, Scale, Service-oriented, Segment-usage |
| 4 | Manage, Measure, Mainstream, Mission-oriented, Mass-usage |
| 5 | Orchestrate, Optimize, Originate, Opportunity-oriented, Outsize-usage |

Whatever the specific terminology, the underlying progression is the
same: from ad hoc/individual practice, through documented and
standardized practice, to measured and continuously optimized practice.

## Top-down vs. bottom-up construction

- **Top-down** — fix the number of levels first, then define
  characteristics/assessment items that support the assumed progression.
- **Bottom-up** — identify distinct characteristics or assessment items
  first, then cluster them afterward into levels that induce a general
  view of how maturity actually evolves in that domain.

Neither is universally correct; bottom-up tends to better reflect how a
specific domain's practitioners actually experience progress, while
top-down is faster to produce and easier to communicate up front.

## Process perspectives (from P3M3)

The Portfolio, Programme & Project Management Maturity Model names
process perspectives assessable at every maturity level, useful as a
generic checklist for any maturity model: Control Management, Benefits
Management, Financial Management, Stakeholder Management, Organizational
Governance, Risk Management, and Resource Management.

## Well-known example maturity models

A representative (non-exhaustive) sample, organized by domain: **CMMI**
(Capability Maturity Model Integration, Carnegie Mellon SEI, for
development and acquisition), **Agile Fluency** and several named Agile
maturity models (ThoughtWorks, HPE, Prowareness), a **Continuous Delivery
Maturity Model**, **TOGAF**'s enterprise-architecture maturity model, an
**Infrastructure as Code maturity model**, and domain-specific ones for
IAM, data centers, EIM, and README documentation quality among others —
demonstrating the pattern generalizes to essentially any capability an
organization wants to describe in stages.

## Modeling Maturity Levels (a distinct, narrower model)

Not to be confused with maturity models generally: **Modeling Maturity
Levels** (Kleppe & Warmer, *MDA Explained*) specifically classifies the
role of *modeling* in a software project, from Level 0 (no written
specification, only developers' heads) through Level 5 (models precise
enough for full, trustworthy code generation with no human review of
generated code needed).

## FAQ, distilled

- **Anyone can create a maturity model** — many organizations build their
  own, sometimes adapting a public one, sometimes from internal
  confidential knowledge. [[decision-records-skill]] is a good way to
  document why specific levels/items were chosen.
- **A maturity model is a snapshot, not a future plan** — though a good
  team uses the snapshot to build a plan toward a higher level.
- **Descriptive, not prescriptive** — a maturity model describes what
  each level looks like; it doesn't (usually) prescribe the specific
  steps to get from one level to the next.
- **It can and should evolve** — organizations that revisit their models
  periodically keep them useful as goals and capabilities change.
- **It has an end state** — either the model stops being useful (current
  capability is "good enough"), or the team outgrows it by hitting the
  top level and wanting more.

## Rebuttals worth taking seriously

Maturity models have real, well-argued critics: James Bach's "Immaturity
of Maturity Models" and "No Best Practices," Michael Bolton's "Maturity
Models Have It Backwards," and Barry O'Reilly's "Why Maturity Models
Don't Work" — the common thread is that a fixed-stage model can
oversimplify genuinely complex, context-dependent capability, and can be
used to justify compliance-driven busywork rather than real improvement.
A maturity model is a communication and planning tool with known limits,
not an objective scientific measurement.

## Common pitfalls

- **Treating a maturity model as prescriptive** — following its levels as
  a mandatory checklist rather than a descriptive lens misses the
  documented distinction above, and invites exactly the criticism the
  rebuttals raise.
- **Never revisiting the model** — a maturity model frozen at its
  original definition drifts out of relevance as the organization and its
  goals change.
- **Comparing across organizations using different models with the same
  level names** — "Level 3" means whatever that specific model's authors
  defined it to mean; it's not a portable, universal unit.
- **Ignoring the rebuttals entirely** — a maturity-model rollout that
  doesn't account for the well-documented risk of becoming
  compliance-theater is more likely to become exactly that.

## Learn more

- [joelparkerhenderson/maturity-models](https://github.com/joelparkerhenderson/maturity-models) — the source for this skill, with a large curated list of real maturity models by domain.
- [Wikipedia: Maturity model](https://en.wikipedia.org/wiki/Maturity_model)
- [[decision-records-skill]] for documenting why specific choices went into a custom maturity model.
