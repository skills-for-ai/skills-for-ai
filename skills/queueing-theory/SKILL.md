---
name: queueing-theory
description: Use when asked to apply queueing theory to software/business processes — arrival/service rate notation, utilization ratio, Little's Law, or DORA/MTTR metrics derived from queue behavior — grounded in joelparkerhenderson/queueing-theory.
---

# Queueing Theory

Queueing theory is the mathematical study of waiting lines. Applied to
software and business, it's used to analyze and optimize customer-service
responsiveness, kanban/project-management flow, inter-process message
queues, and CI/CD deployment pipelines — anywhere items arrive, wait, and
get processed.

## Queue and service disciplines

- **FIFO** (First In First Out) — serve whoever's waited longest.
- **LIFO** (Last In First Out) — serve whoever's waited shortest.
- **Priority** — serve by priority level (status, urgency, payment).
- **Shortest/Longest Job First** — serve by size of the work item.
- **Time Sharing** — distribute capacity evenly across everyone waiting.

## Core notation

| Symbol | Name | Meaning |
| --- | --- | --- |
| κ (kappa) | count | items currently in the queue |
| λ (lambda) | arrival rate | how fast new items arrive |
| χ (chi) | total rate | items exiting per time, for any reason |
| α (alpha) | success rate | items exiting correctly per time |
| β (beta) | failure rate | items exiting incorrectly per time |
| σ (sigma) | skip rate | items abandoning the queue unhandled |
| ρ (rho) | utilization ratio | λ / (total rate) — traffic intensity |
| ε (epsilon) | error ratio | failure count / total count |
| τ (tau) | lead time | start of queue to finish of queue |
| ω (omega) | wait time | time spent not yet being worked |
| φ (phi) | work time | time spent actually being worked |
| θ (theta) | step time | time between one completion and the next |

Total rate = success + failure + skip: **χ = α + β + σ**.

**Utilization**: ρ = 1 means arrivals equal exits (queue stays the same
size); ρ > 1 means the queue is growing; ρ < 1 means it's shrinking.

### A historical ambiguity worth knowing

Classic queueing theory notation uses μ (mu) for "service rate," but the
term is ambiguous in practice across three views: a pure speed measure
regardless of outcome (theoretical), successes-and-failures-but-not-skips
(processing), or successes only, with failures/skips tracked separately
(technology/software engineering). Prefer the unambiguous χ/α/β/σ
breakdown above over a bare "service rate" when precision matters — this
is exactly the kind of terminology mismatch that causes real confusion
between teams using the same word differently.

### Skip types

A **skip** (σ) is an item leaving the queue unhandled: **abandoning**
(starts then leaves), **balking** (never starts because the wait looks
too long), **reneging** (leaves after waiting too long), **jockeying**
(switches between parallel queues trying to get served sooner).

## Little's Law

**κ = λ · τ** — the long-term average number of items in a stable system
equals the arrival rate multiplied by the average time an item spends in
the system. Assumptions: consistent units, conservation of flow (arrival
rate ≈ departure rate over the long run), every item that enters
eventually completes, and the system is stable (not growing or shrinking
without bound).

## Service-level terminology

- **SLI (Service Level Indicator)** — the actual measured metric (e.g.
  99.9% uptime).
- **SLO (Service Level Objective)** — the internal target for that metric
  (e.g. aim for 99.95%).
- **SLA (Service Level Agreement)** — the formal, often contractual
  promise to a customer, sometimes with penalties for a miss.

### MTTR: four distinct meanings

"MTTR" is commonly used for four different measurements — always be
explicit which one is meant:

| Metric | Measures | Starts | Ends |
| --- | --- | --- | --- |
| Mean Time To **Respond** | Team readiness/alerting | Incident detected | Team starts work |
| Mean Time To **Repair** | The technical fix itself | Repair begins | Item fixed |
| Mean Time To **Recover** | Service restored for users | Outage starts | Service fully operational |
| Mean Time To **Resolve** | Full incident lifecycle | Incident detected | Incident closed |

### DORA metrics

Change Lead Time, Deployment Frequency, Change Failure Rate, and Mean
Time to Recovery are the widely-used DevOps Research and Assessment
metrics — each needs an explicit, team-agreed definition of its start/end
points (e.g. "lead time" from first commit vs. from ticket start) since
the same metric name can be measured meaningfully differently across
teams.

## Queue of queues

A multi-stage process (e.g. the Double Diamond: Discover → Define →
Develop → Deliver) can be modeled as one queue containing several stage
queues: the whole process's arrival rate is stage 1's arrival rate, its
success rate is the last stage's success rate, and its error/skip counts
sum across all stages. A **funnel** is the common case where each stage
reduces the item count — a hiring pipeline, a purchase checkout flow, a
CI/CD promotion pipeline — where the practical goal is usually maximizing
stage-1 arrivals or minimizing a specific stage's skip/error rate.

## Common pitfalls

- **Using "service rate" without specifying which view** (theoretical,
  processing, or technology) — leads to real miscommunication between
  teams; use the explicit χ/α/β/σ breakdown instead.
- **Averaging away the tail.** Little's Law and most queueing metrics
  describe averages; a system with an acceptable *average* wait time can
  still have a badly-behaved worst case that matters more to real users.
- **Trying to eliminate all wait time** — a system run at very high
  utilization (ρ close to 1) has almost no slack, so even small variance
  in arrivals causes wait times to blow up; some spare capacity is often
  the right tradeoff, not a wasted resource.
- **Naming an MTTR figure without specifying which of the four
  meanings** — "our MTTR is 30 minutes" is ambiguous without saying
  respond, repair, recover, or resolve.

## Learn more

- [joelparkerhenderson/queueing-theory](https://github.com/joelparkerhenderson/queueing-theory) — the source for this skill, including "Seven insights into queueing theory" by Bob Wescott.
- [Wikipedia: Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory), [Little's law](https://en.wikipedia.org/wiki/Little%27s_law)
- Forsgren, Humble, Kim, *Accelerate* — the source of the DORA metrics.
