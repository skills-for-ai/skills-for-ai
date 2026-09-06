---
name: operations-manager
description: Use when asked about the operations management function — process design/improvement, capacity planning, SLAs and service quality, or vendor/supplier management — as distinct from project management (see project-management), which manages bounded work rather than ongoing operational delivery.
---

# Operations Manager

Operations management owns the ongoing, repeatable delivery of a
product/service at the required quality and volume — distinct from
[[project-management]]'s bounded, one-time work. Operations is what
runs continuously after a project delivers a new capability into
production/business-as-usual.

## Process design and improvement

- **Process mapping** — documenting the actual steps a process follows
  (not the idealized version) is the prerequisite for improving it; a
  surprising amount of operational waste is only visible once the real
  process, including its informal workarounds, is written down honestly.
- **Bottleneck identification** — in any multi-step process, the slowest
  step caps the whole process's throughput regardless of how fast every
  other step is; improving a non-bottleneck step doesn't increase overall
  throughput, the same underlying idea [[critical-path]] applies to
  project schedules.
- **Continuous improvement (Kaizen, lean, Six Sigma)** — different named
  traditions, sharing the core idea of incremental, evidence-based process
  refinement over time rather than one-off redesigns, with a bias toward
  eliminating waste (unnecessary steps, waiting, rework) rather than just
  working faster within a flawed process.

## Capacity planning

Matching resource availability (staff, equipment, infrastructure) to
expected demand ahead of time — under-provisioned capacity causes missed
SLAs and burnout; over-provisioned capacity is a standing cost with no
offsetting value. Demand is rarely flat, so capacity planning usually
needs to account for known seasonality/peaks, not just an average.

## SLAs and service quality

A **Service Level Agreement (SLA)** states a measurable commitment (response
time, uptime, resolution time) and what happens if it's missed — useful
only if the metric it measures actually reflects the outcome that matters
to the customer/user, not merely what's easy to measure. Distinguish an
SLA (a commitment, sometimes contractual) from an **SLO** (an internal
target, often stricter than the external SLA, giving margin before an
actual SLA breach) and an **SLI** (the specific measured indicator behind
both).

## Vendor and supplier management

Ongoing operational dependencies on third parties need active management,
not just a signed contract: tracking actual performance against agreed
terms, a defined escalation path when a vendor underperforms, and
contingency planning for a critical vendor's failure or exit — a single
point of failure in the supply/vendor chain with no contingency plan is a
common, avoidable operational risk.

## Common pitfalls

- **Improving a non-bottleneck step** and reporting it as a win — doesn't
  move overall throughput, and can even make the true bottleneck's queue
  longer by feeding it faster.
- **An SLA that measures the wrong thing** — e.g. average response time
  when the customer experience is actually driven by worst-case (tail)
  response time; hitting the average SLA while a meaningful fraction of
  cases badly miss it can still mean real dissatisfaction.
- **Capacity planned to the average, not the peak** — leads to predictable
  SLA breaches during known busy periods that a slightly more
  conservative plan would have absorbed.
- **No contingency for a single critical vendor** — an operational
  dependency with no fallback plan turns a vendor's outage or exit into
  the organization's own crisis with no prepared response.
- **Process documentation describing the idealized process, not the real
  one** — makes any improvement effort built on it miss the actual
  workarounds and waste that exist in practice.

## Learn more

- [ITIL](https://www.axelos.com/certifications/itil-service-management) — a widely-used IT service-operations framework covering much of this territory for technology operations specifically.
- [[critical-path]] for the bottleneck/dependency logic operations shares with project scheduling.
- [[project-management]] for the bounded-work counterpart to ongoing operations.
