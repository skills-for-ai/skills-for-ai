---
name: critical-path-skill
description: Use when asked to compute or explain a project's critical path — the Critical Path Method (CPM), forward/backward pass, float/slack — as distinct from Critical Chain Project Management's resource-buffer approach (see critical-chain-skill).
---

# Critical Path Skill

The **critical path** is the longest sequence of dependent tasks through a
project schedule — it determines the shortest possible project duration,
because delaying any task on it delays the whole project by the same
amount. The **Critical Path Method (CPM)** is the technique for computing
it. [[critical-chain-skill]] covers a different, resource-focused
scheduling method that starts from the same network diagram but manages it
differently.

## Building the network

Every task needs a **duration** and its **dependencies** (which tasks must
finish before it can start). Drawn as a network diagram (nodes = tasks,
arrows = dependencies), multiple paths typically exist from start to
finish — the critical path is whichever one is longest in total duration,
not necessarily the one with the most tasks.

## Forward pass and backward pass

- **Forward pass** — starting from the project start, compute each task's
  **earliest start (ES)** and **earliest finish (EF)** by walking forward
  through the network: `EF = ES + duration`, and a task's `ES` is the
  latest `EF` among everything it depends on.
- **Backward pass** — starting from the project's overall finish (the
  latest EF computed above), compute each task's **latest finish (LF)** and
  **latest start (LS)** by walking backward: `LS = LF − duration`, and a
  task's `LF` is the earliest `LS` among everything that depends on it.

## Float (slack)

**Total float** = `LS − ES` (equivalently `LF − EF`) — how much a task can
slip without delaying the overall project finish. A task with **zero
float** is on the critical path; any delay to it delays the project by the
same amount. A task with positive float has room to slip (or to release
its resources temporarily) without affecting the end date — but only up to
that float amount, and using up one task's float can reduce or eliminate
float on other tasks sharing the same downstream dependency.

## Worked shape (conceptual)

```
Task A (2 days) → Task B (3 days) → Task D (2 days)   = 7 days, one path
Task A (2 days) → Task C (5 days) → Task D (2 days)   = 9 days, another path
```

Here A→C→D (9 days) is the critical path; A→B→D is 2 days shorter, so Task
B has 2 days of float. Speeding up Task C (or shortening any task actually
on the critical path) shortens the project; speeding up Task B does
nothing to the overall finish date until B's path becomes the longer one.

## Why this matters for prioritizing schedule attention

The most common practical error is spending management attention
uniformly across every "urgent-looking" task rather than specifically on
critical-path tasks — a task can look urgent (a tight deadline, a vocal
stakeholder) while having substantial float, and a genuinely
schedule-threatening task can look unremarkable until its float runs out.
Crashing (adding resources to shorten a task) or fast-tracking (running
normally-sequential tasks in parallel) only shortens the project when
applied to tasks actually on the critical path — doing either to a
non-critical task burns cost or risk for zero schedule benefit.

## Common pitfalls

- **Confusing "looks urgent" with "is critical"** — see above; float, not
  perceived urgency, is what determines whether a task threatens the
  project end date.
- **Not recalculating the critical path as the project progresses** — the
  critical path can shift over time (a previously-critical task finishes
  early, or a previously-slack task's float gets consumed); treating the
  original schedule's critical path as permanently fixed misses this.
- **Crashing a non-critical task** to "make progress faster" — adds cost
  without shortening the overall schedule, since the critical path is
  unaffected.
- **Ignoring resource contention in the network diagram itself** — pure
  CPM assumes unlimited resources for scheduling purposes; if the same
  specialist is needed on two "parallel" critical-path-adjacent tasks at
  once, the network diagram alone won't surface that conflict — this is
  exactly the gap [[critical-chain-skill]]'s method is built to address.

## Learn more

- [PMI: PMBOK Guide](https://www.pmi.org/pmbok-guide-standards) — CPM as part of standard schedule-management practice.
- [[critical-chain-skill]] for the resource-buffer-based alternative scheduling method.
- [[project-management-skill]] for the broader schedule/cost/scope context CPM fits into.
