---
name: agile-delivery-skill
description: Use when asked to run the delivery track of dual-track agile — building, testing, and shipping validated work via a continuous delivery pipeline — as the track that runs alongside, not after, discovery (see agile-discovery-skill), and grounded in continuous delivery's build/test/deploy/release pipeline.
---

# Agile Delivery Skill

Delivery is the track in **dual-track agile** responsible for building,
testing, and shipping the ideas [[agile-discovery-skill]] has already
validated — running continuously alongside discovery rather than only
starting once discovery is entirely finished, so validated work keeps
flowing into delivery rather than arriving in one large batch.

## The continuous delivery pipeline

Delivery's technical backbone is typically a **continuous delivery (CD)**
pipeline, automating the release process end to end:

1. **Continuous integration** — developers frequently integrate code
   changes into a central repository, surfacing integration issues early
   rather than at a big, infrequent merge.
2. **Build** — code changes compile into a deployable artifact.
3. **Test** — automated unit, integration, and acceptance testing (see
   [[unit-testing-skill]], [[integration-testing-skill]],
   [[acceptance-testing-skill]]) runs against the build, with results
   reported straight back to the team.
4. **Deploy** — the artifact deploys automatically to a staging
   environment for further validation.
5. **Release** — once validated in staging, the change releases to
   production, automatically and on a reliable, predictable cadence
   rather than as an infrequent, high-risk event.

## What this requires organizationally

A high degree of automation and genuine collaboration among development,
testing, and operations — relying on version control, build servers,
testing frameworks, and deployment automation working together as one
pipeline, not as separate handoffs between teams that each own one stage
in isolation.

## Why delivery runs in parallel with discovery, not after it

If delivery only starts once discovery is fully "done," the team either
sits idle waiting or delivery builds unvalidated ideas under schedule
pressure. Running both continuously means delivery always has a queue of
validated, ready work from discovery, while discovery keeps investigating
further ahead — the same parallel-track logic
[[agile-discovery-skill]] describes from the discovery side.

## Common pitfalls

- **Building ahead of validated discovery** — delivering polished,
  well-tested software for a feature nobody validated actually solves a
  real problem wastes the delivery pipeline's efficiency on the wrong
  target.
- **A manual, infrequent release process** — undermines continuous
  delivery's core value (fast, predictable, low-risk releases); if
  release still requires significant manual coordination, the pipeline
  isn't actually continuous yet.
- **Weak automated test coverage feeding the pipeline** — a fast delivery
  pipeline with thin test coverage ships defects fast rather than
  catching them fast; see [[regression-testing-skill]] and
  [[test-driven-development-skill]] for the underlying test discipline
  a reliable CD pipeline depends on.
- **Delivery and operations as separate, uncoordinated teams** — a
  pipeline spanning dev/test/ops needs genuine collaboration across those
  boundaries, not a series of handoffs each owned in isolation.

## Learn more

- [[agile-discovery-skill]] for the parallel discovery track feeding delivery's backlog.
- [[unit-testing-skill]], [[integration-testing-skill]], [[acceptance-testing-skill]] for the test layers a CD pipeline runs.
- [[regression-testing-skill]], [[test-driven-development-skill]] for the test discipline reliable continuous delivery depends on.
