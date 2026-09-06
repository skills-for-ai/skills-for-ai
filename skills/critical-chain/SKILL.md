---
name: critical-chain
description: Use when asked to explain or apply Critical Chain Project Management (CCPM) — resource-constrained scheduling, project/feeding buffers, or why CCPM removes individual task-level safety margins — as distinct from the Critical Path Method (see critical-path).
---

# Critical Chain

**Critical Chain Project Management (CCPM)**, developed by Eliyahu
Goldratt (applying his Theory of Constraints to project scheduling), starts
from the same task network as the [[critical-path]]'s Critical Path
Method but schedules it differently — accounting explicitly for **shared
resource constraints**, and restructuring where schedule safety margin
lives.

## The critical chain vs. the critical path

The **critical path** is the longest *task-dependency* chain, assuming
unlimited resources. The **critical chain** is the longest chain once
**resource contention** is also accounted for — if two tasks on separate,
non-dependent paths both need the same specialist at the same time, one
has to wait, which can make a resource-constrained chain longer than the
pure task-dependency critical path. CCPM schedules against this
resource-aware chain, not the naive network diagram.

## Where the safety margin goes

The central CCPM insight: individually padded task estimates don't
protect the project schedule the way they're intended to, because of two
behavioral effects:

- **Student syndrome** — work on a task tends to start close to its
  deadline regardless of how much buffer was built into the estimate,
  consuming the padding before the task even begins.
- **Parkinson's Law** — work expands to fill the time available, so a
  padded estimate reliably gets fully used even when the task could have
  finished sooner.

CCPM's fix: estimate each task at something closer to its median (50%
likely) duration — deliberately *without* individual padding — then pool
the safety that would otherwise be hidden in every task into a small
number of explicit, shared **buffers** at the chain level instead.

## Buffer types

- **Project buffer** — placed at the very end of the critical chain,
  protecting the overall project finish date; consumed only when tasks on
  the critical chain actually run long, not by every individual task's
  private padding.
- **Feeding buffer** — placed where a non-critical-chain path feeds into
  the critical chain, protecting the critical chain from being delayed by
  a late-running feeding path.
- **Resource buffer** — an advance warning (not idle time) alerting a
  needed resource that a critical-chain task is approaching, so they're
  ready to start immediately rather than causing a handoff delay.

Buffers are actively **monitored** (often with a simple red/yellow/green
consumption-rate chart) — a buffer being consumed faster than the
project's percentage-complete is an early warning sign the schedule needs
attention, well before the buffer would be fully exhausted.

## Common pitfalls

- **Adopting CCPM's buffers without removing individual task padding** —
  the whole model depends on task estimates being realistic-not-padded;
  keeping both individual padding and a project buffer just adds total
  schedule length without the intended benefit.
- **Applying CCPM without addressing multitasking** — Goldratt's broader
  argument is that a resource juggling multiple concurrent tasks (aiming
  to keep everything "moving") actually delays every one of them compared
  to focusing on the critical-chain task first; CCPM's discipline expects
  resources to prioritize critical-chain work above other work when they
  conflict.
- **Confusing critical chain with critical path when reporting status** —
  they can identify a genuinely different bottleneck chain once resource
  constraints are considered; using critical-path terminology/tools while
  actually trying to manage resource contention misses the problem CCPM is
  built to solve.
- **Treating buffer consumption purely as a lagging metric** — the value
  of the buffer chart is as an early-warning trigger for intervention, not
  just a retrospective record of what already happened.

## Learn more

- Eliyahu M. Goldratt, *Critical Chain* (1997) — the original text introducing the method (as a business novel, in Goldratt's usual style).
- [[critical-path]] for the underlying unconstrained-resource scheduling method CCPM builds on and diverges from.
- [[project-management]] for the broader scheduling/risk context.
