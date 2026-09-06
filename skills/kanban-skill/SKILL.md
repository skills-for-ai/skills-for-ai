---
name: kanban-skill
description: Use when asked to set up or run a Kanban board — columns, work-in-progress limits, continuous flow — as an alternative to Scrum's fixed sprints (see scrum-skill), suited to continuous-flow work rather than timeboxed iterations.
---

# Kanban Skill

Kanban is a method for visualizing and managing work as it moves through
a process or workflow — originally developed for manufacturing, now
widely adapted for software development, project management, and other
fields. "Kanban" is Japanese for "visual signal" or "card": the original
manufacturing system used physical cards to signal when more materials
were needed at a given production step.

## The board

A typical Kanban board has columns representing workflow stages — "To
Do," "In Progress," "Done" being the simplest version, often expanded
with more granular stages (e.g. "In Review," "Blocked"). Each item of
work, represented by a card (physical sticky note, or a digital
equivalent), moves from column to column as it progresses — giving a
clear, real-time visual of what's actually happening, and making
bottlenecks and overloaded stages immediately visible rather than hidden
in a status report.

## Core principles

- **Limit work in progress (WIP)** — cap how many items can sit in a
  given column at once. This is Kanban's most distinctive discipline: it
  prevents team members from being overloaded with too much simultaneous
  work, and — counterintuitively — tends to make work complete *faster*
  overall, since less context-switching and clearer focus beat spreading
  effort thin across many in-flight items.
- **Continuous improvement** — regular review and retrospectives to
  refine the process and eliminate waste, similar in spirit to
  [[kaizen-skill]]'s continuous-improvement philosophy.

## Kanban vs. Scrum

Unlike [[scrum-skill]]'s fixed-length sprints with a committed sprint
backlog, Kanban has **no fixed iteration** — work flows continuously,
pulled into the next stage as capacity allows (governed by WIP limits)
rather than planned in discrete, timeboxed batches. This makes Kanban
better suited to work with unpredictable arrival patterns or highly
variable task sizes (support/operations work, for instance), where
committing to a fixed two-week sprint backlog doesn't fit reality as
well as a continuous-flow model does.

## Often used alongside other methodologies

Kanban is commonly combined with Agile and Lean practices, and adapted
to fit different teams — some teams run "Scrumban," blending Scrum's
planning cadence with Kanban's continuous-flow board and WIP limits.

## Common pitfalls

- **No WIP limits, or limits set too loosely to matter** — without a
  real constraint on work in progress, a Kanban board just becomes a
  visual to-do list, losing the flow-improvement discipline WIP limits
  are meant to enforce.
- **Too many columns, obscuring rather than clarifying flow** — a board
  with excessive granularity can make it harder, not easier, to see
  where work is actually stuck.
- **No regular review of the board/process** — without periodic
  reflection, bottlenecks that appear repeatedly go unaddressed even
  though the board makes them visible.
- **Forcing Kanban onto work that genuinely needs fixed-scope, timeboxed
  planning** — a project with hard external deadlines and fixed scope
  may fit [[scrum-skill]]'s sprint structure better than Kanban's
  continuous flow.

## Learn more

- [[scrum-skill]] for the contrasting fixed-sprint framework.
- [[kaizen-skill]] for the continuous-improvement philosophy Kanban shares.
- [[queueing-theory-skill]] for the underlying flow/utilization mathematics WIP limits are grounded in.
