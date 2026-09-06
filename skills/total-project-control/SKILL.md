---
name: total-project-control
description: Use when asked to explain or apply Total Project Control (TPC) — Stephen Devaux's ROI-focused project-management method, critical path drag, DIPP, and Value Breakdown Structure — sourced from Wikipedia's Total project control article, as distinct from the plain Critical Path Method (see critical-path).
---

# Total Project Control

Total Project Control (TPC) is a project-management method developed by
**Stephen Devaux**, introduced in his 1999 book *Total Project Control: A
Manager's Guide to Integrated Project Planning, Measuring, and Tracking*.
Its central claim: projects should be managed as **profit and investment
centers**, not just cost centers — continuously tracked and optimized for
return on investment (ROI), not only for on-time/on-budget delivery.

## What TPC builds on

TPC builds on established techniques — earned value management, the
Critical Path Method (see [[critical-path]]), and PERT (Program
Evaluation and Review Technique) — but extends them to track **projected
project profitability**, not just the traditional cost and schedule
metrics those techniques were originally built around.

## Key concepts introduced by TPC

- **Critical path drag** — the amount of time a specific task on the
  critical path is actually adding to the total project duration; unlike
  plain float/slack (which measures a *non*-critical task's spare room),
  drag quantifies how much a *critical* task itself is costing the
  schedule, which tells a manager exactly how much schedule benefit
  would come from shortening that specific task.
- **Value Breakdown Structure (VBS)** — extends the familiar Work
  Breakdown Structure by attaching an explicit value (expected
  contribution to project ROI) to each work package, not just its cost
  and duration.
- **Devaux's Index of Project Performance (DIPP)** — a single index
  relating a project's expected value to its cost and schedule, tracked
  over time to show whether the project's profitability is improving or
  eroding as it progresses — not just whether it's on schedule/budget in
  isolation.
- **Doubled Resource Estimated Duration (DRED)** — an estimate of how much
  a task's duration could shrink if its assigned resources were doubled,
  used to judge whether adding resources to a specific critical-path task
  is actually worth the cost (see "crashing" in [[critical-path]]).
- **Cost of Leveling with Unresolved Bottlenecks (CLUB)** — a metric for
  the cost incurred by resource-leveling decisions that don't actually
  resolve an underlying bottleneck, only shift it.

## Why this differs from plain CPM/EVM

Plain Critical Path Method tracks schedule; plain earned value management
tracks cost/schedule performance against a baseline. TPC's distinguishing
move is treating the *project's expected financial value itself* as a
live variable to manage — asking not just "are we on schedule" but "is
accelerating (or delaying) this specific task worth what it costs, given
what finishing sooner (or later) is actually worth to the business."
Critical path drag and DIPP exist specifically to make that ROI-based
tradeoff calculable rather than a matter of intuition.

## Recognition

The Project Management Institute's *PM Network* magazine noted that TPC
"makes solid points about what can be done to maximize ROI during project
execution" — positioning it as a genuine extension of mainstream PM
technique rather than a wholesale alternative to it.

## Common pitfalls

- **Confusing drag with float** — float measures spare time on a
  *non-critical* task; drag measures how much a *critical* task is
  actually costing the schedule. They answer different questions and
  aren't interchangeable.
- **Treating VBS/DIPP as replacing WBS/EVM** — TPC is explicitly built as
  an extension of those established techniques, not a wholesale
  replacement; a team unfamiliar with the underlying CPM/EVM concepts
  will find TPC's additions hard to apply meaningfully.
- **Optimizing schedule without checking ROI** — TPC's whole premise is
  that a schedule optimization (e.g. crashing a task via DRED) is only
  worth doing if it actually improves DIPP; doing it purely because
  "faster is better" defeats the method's own point.

## Learn more

- [Wikipedia: Total project control](https://en.wikipedia.org/wiki/Total_project_control) — the source for this skill.
- Stephen Devaux, *Total Project Control* (1999) — the originating text.
- [[critical-path]] for the underlying CPM concepts (float, crashing) TPC extends.
- [[project-management]] for the broader project-management context.
