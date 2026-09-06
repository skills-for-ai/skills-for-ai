---
name: agile-showcase-skill
description: Use when asked to run an agile showcase (sprint review) — demonstrating working software to stakeholders on a regular cadence — including whether a team should run one at all, mirroring the same with/without tradeoff agile-standup-skill covers for daily standups.
---

# Agile Showcase Skill

An agile showcase (often called a sprint review) demonstrates working
software to stakeholders on a regular cadence — a common pattern is a
weekly event, timeboxed to around 25 minutes, where everyone involved
looks together at what's newly working rather than reading a status
report about it.

## What a good showcase summary looks like

Concrete, specific, and evidence-backed — not vague progress claims:

- "The authentication module reached completion with multi-factor
  authentication and single sign-on, passing all security tests and
  acceptance criteria" — names the specific capability and how it was
  verified.
- "The analytics dashboard's new visualizations showed 40% faster load
  times versus the previous version, with positive initial user
  feedback" — ties the change to a measured outcome, not just "we made
  it faster."
- "Two critical bugs (payment timeout, notification delay) were fixed,
  with zero recurrence in regression testing and stable production
  monitoring since deployment" — states the fix *and* the evidence it
  actually held.

The common thread: each item names what changed, demonstrates it
working, and cites concrete evidence (test results, metrics, monitoring)
rather than an assertion that it's "done."

## Whether a team should run one

Like [[agile-standup-skill]]'s standup question, showcases aren't
mandatory for being agile — some teams move away from formal
demonstrations due to showcase fatigue, time constraints, or concern that
a prepared demo doesn't reflect genuine user experience. Without
showcases, teams lean more on continuous integration/deployment
visibility, embedded in-product feedback mechanisms, and stakeholders
proactively reviewing work as it progresses rather than waiting for a
scheduled reveal.

## The real tradeoff

Removing showcases risks losing the collaborative energy and shared
understanding a live, gathered demonstration provides — the ceremony of
bringing stakeholders together creates cross-functional discussion and
alignment opportunities that async visibility alone often doesn't
replicate. A team dropping showcases needs to be deliberate about
replacing that function: strong communication practices, alternative
stakeholder-engagement forums, and genuine team celebration moments, plus
enough trust that "no formal demo" doesn't quietly become "no visibility
at all."

## Common pitfalls

- **Vague, unverifiable showcase items** — "we made good progress on the
  dashboard" gives stakeholders nothing to actually evaluate; contrast
  with the concrete, evidence-backed examples above.
- **Letting the showcase run over its timebox** — same discipline as
  [[agile-standup-skill]]'s timeboxing; a showcase that regularly runs
  long stops being a lightweight ceremony.
- **Dropping showcases without replacing their alignment function** — see
  the tradeoff above; removing the ceremony without deliberately building
  an alternative stakeholder-engagement mechanism loses real value, not
  just meeting time.
- **Rehearsed demos that hide real state** — a showcase curated to only
  show what works, hiding known issues, undermines the transparency the
  ceremony exists to provide.

## Learn more

- [[agile-standup-skill]] for the same with/without tradeoff applied to the daily standup.
- [[agile-reflection-skill]] for the deeper process-improvement ceremony a showcase doesn't replace.
