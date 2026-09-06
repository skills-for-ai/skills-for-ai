---
name: project-management
description: Use when asked to plan a project, write a project charter/status update/RAID log, choose between waterfall/agile/hybrid delivery, or explain project-management concepts (scope/schedule/cost triangle, critical path, risk register, stakeholder management) — independent of any specific methodology certification (PMP, PRINCE2) or tool.
---

# Project Management

Project management is the discipline of planning, executing, and closing
a bounded piece of work — distinct from ongoing operations by having a
defined start, end, and specific deliverable. This skill covers the core
concepts common across methodologies; [[agile-principles]] covers the
agile-specific reasoning where a project is delivered iteratively.

## The scope/schedule/cost triangle

Classically: scope, schedule (time), and cost are interdependent — fixing
two determines the third, and quality suffers if all three are squeezed at
once ("pick two"). A scope change request that isn't paired with a
schedule/cost/quality conversation is the single most common way a project
quietly fails: the work grows, nothing else adjusts, and the team absorbs
the difference until it can't.

## Core artifacts

- **Charter** — the document that authorizes a project: its purpose,
  objectives, sponsor, high-level scope, and success criteria. Exists so
  everyone can point to one place answering "why are we doing this."
- **Work Breakdown Structure (WBS)** — decomposes the deliverable into
  smaller, estimable, assignable pieces. The test of a good WBS item: can
  one person or small team estimate and own it without further breakdown?
- **Schedule / critical path** — the critical path is the longest chain of
  dependent tasks determining the minimum project duration; a delay on a
  critical-path task delays the whole project, while slack on a non-critical
  task doesn't (yet). Knowing which tasks are actually on the critical path
  — not just which look urgent — is what critical-path analysis is for.
- **RAID log** (Risks, Assumptions, Issues, Dependencies) — a single running
  list distinguishing what *might* go wrong (risk, not yet happened) from
  what *has* gone wrong (issue), what's being taken on faith (assumption),
  and what the project needs from outside itself (dependency). Conflating
  these categories is a common reason a status report reads as noise rather
  than signal.
- **Status update** — see [[ways-of-working]] for the general
  communication principles (headline first, acknowledge changes explicitly,
  a dedicated section for worries) that apply directly to project status
  reporting.

## Risk management, briefly

For each identified risk: **probability** (how likely), **impact** (how bad
if it happens), and a **response** — mitigate (reduce probability/impact),
transfer (insurance, a contract clause, a third party), accept (do nothing,
usually because cost of response exceeds expected impact), or avoid (change
the plan so the risk no longer applies). A risk register that lists risks
but never assigns an owner or a response is a list, not risk management.

## Waterfall, agile, and hybrid delivery

- **Waterfall** — sequential phases (requirements → design → build → test →
  deploy), each substantially complete before the next starts. Favors
  predictability and up-front clarity; costly to absorb a late-discovered
  requirement change since it usually means re-entering an earlier phase.
- **Agile** (Scrum, Kanban, XP, …) — iterative delivery of working
  increments, welcoming change even late (see [[agile-principles]]).
  Favors adaptability; needs a customer/product owner engaged throughout,
  not just at the start and end.
- **Hybrid** — common in practice: agile delivery inside a waterfall-style
  governance wrapper (fixed overall budget/deadline set up front, iterative
  execution within it), or a phased rollout where each phase is itself
  run iteratively. Neither purity is a virtue in itself — the right choice
  depends on how much the requirements are actually expected to change and
  how costly a late pivot would be.

## Stakeholder management

Map stakeholders by **influence** and **interest**: high-influence/
high-interest stakeholders need active engagement and real input into
decisions; high-influence/low-interest need to be kept satisfied with
concise, infrequent updates; low-influence/high-interest need to be kept
informed; low-influence/low-interest need minimal monitoring. Treating
every stakeholder the same way — flooding the low-interest with detail, or
under-communicating with the high-influence — is a common, avoidable cause
of late-stage surprises ("nobody told me this was happening").

## Common pitfalls

- **Padding estimates without saying so** — hidden buffers erode trust once
  discovered and make the schedule harder to reason about; if a buffer is
  needed, make it an explicit, visible contingency line, not a silent
  inflation of every task estimate.
- **A RAID log nobody reviews** — logging a risk is not managing it; a
  review cadence and an owner per item is what turns the log into an actual
  control rather than paperwork.
- **Treating scope creep as a series of small favors** — each individual
  addition looks minor; the cumulative effect on schedule/cost is what
  actually damages the project, which is why each addition needs to be
  logged and traded off, not just absorbed.
- **Confusing activity with progress** — a burned-down schedule or a full
  sprint doesn't mean value was delivered; tie status to the agreed
  deliverables/acceptance criteria, not to effort expended.
- **Choosing a methodology as an identity rather than a fit** — "we do
  Scrum" or "we do PRINCE2" as an unexamined default, rather than picking
  based on how volatile the requirements actually are and how the
  organization actually governs funding.

## Learn more

- [PMI: A Guide to the Project Management Body of Knowledge (PMBOK)](https://www.pmi.org/pmbok-guide-standards) — the widely-referenced (paid) standard.
- [PRINCE2](https://www.prince2.com/) — a widely-used structured, phase-gated methodology, common in UK/government contexts.
- [[agile-principles]] — the reasoning behind iterative delivery specifically.
- [[ways-of-working]] — communication and team-operating norms that apply directly to running a project.
