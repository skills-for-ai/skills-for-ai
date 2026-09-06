---
name: causal-analysis-based-on-system-theory-skill
description: Use when asked to investigate an incident/accident using CAST (Causal Analysis based on System Theory) — a blame-free, systems-view accident analysis technique built on STAMP/STPA — grounded in joelparkerhenderson/causal-analysis-based-on-system-theory, as distinct from single-root-cause analysis.
---

# Causal Analysis based on System Theory Skill

CAST (Causal Analysis based on System Theory), developed by Nancy Leveson
at MIT, is an accident/incident analysis technique built on the **System
Theoretic Accident Model and Processes (STAMP)**. Its four-word name
states its whole philosophy:

- **Causal** — don't assume one "root cause" or a few "probable causes";
  most accidents actually have many interacting causes.
- **Analysis** — don't blame people; blame-free examination of *why* and
  *how* a loss occurred (not *who* caused it) reveals more, because
  important information is often hidden or deflected when blame is on the
  table.
- **System** — don't fix only the one thing that broke; discover multiple
  causes and consider multiple ways to improve the *whole* system.
- **Theory** — don't wait for the next break; plan ahead using control
  theory and process-model theory rather than purely reactive fixes.

## Core perspectives

- **Human error is a symptom, not a cause.** A systems approach starts
  from the premise that human error is a symptom of a system needing
  redesign — the goal is identifying the design flaws that made the
  error likely or consequential, not blaming the operator for the
  consequences of those flaws.
- **Blame is the enemy of safety.** Focusing on blame hinders learning
  because it causes information to be hidden and investigations to be
  deflected; a clue that hindsight bias has crept into an analysis is the
  appearance of "should have," "could have," or "if only."

## The CAST analysis process (outline)

1. **Assemble basic information** — define the system and analysis
   boundary, describe the loss, identify the hazards, identify the
   system-level safety constraints that should have prevented the hazard,
   describe events without conclusions or blame.
2. **Model the existing safety control structure** for this type of
   hazard — who/what was supposed to be controlling for this risk.
3. **Analyze each component's role in the loss** — for each part of the
   control structure, determine why it wasn't effective, including that
   component's mental model and the context that shaped its behavior
   (why the actions made sense to the people involved at the time).
4. **Identify systemic factors across the whole control structure** —
   communication and coordination, the safety information system,
   the design of the safety management system, culture, changes/dynamics
   over time, economics, and the broader system environment.
5. **Create recommendations** to strengthen the control structure,
   assign responsibility for implementing them, and establish feedback to
   check whether the changes actually worked.

## STAMP and STPA

- **STAMP** (System-Theoretic Accident Model and Processes) is the
  causality model underlying CAST: it treats accidents as caused by
  complex interactions among physical systems, humans, and social
  systems, and reframes safety as a **dynamic control problem** (are the
  right constraints being enforced?) rather than a failure-prevention
  problem (did a component break?). It applies to very complex systems
  because it works top-down from a high level of abstraction, and
  includes software, humans, and organizational culture as causal
  factors without treating them separately.
- **STPA** (System-Theoretic Process Analysis) is the *proactive*
  counterpart: a hazard-analysis technique using the same STAMP model to
  identify potential accident scenarios *before* they happen, during
  design — CAST analyzes one scenario that already occurred, after the
  fact.

## Comparison to other models

- **CAST vs. Root Cause Analysis (RCA)** — RCA looks for a single,
  straightforward cause, which makes a fix easier to define but tends to
  miss real systemic complexity. CAST is explicitly complex and
  multifactorial by design.
- **CAST/STAMP vs. chain-of-events models** ("Heinrich's Domino Model,"
  "Reason's Swiss Cheese Model") — chain-of-events models assume direct
  causality from one independent event to the next; STAMP treats safety
  as a holistic control problem including **emergent properties** that
  arise from how components interact, not from any single component's
  individual failure.

## Introducing CAST into an organization

Practical advice: use the opportunity right after a major loss (attention
and appetite for change are highest then); demonstrate results that are
both significant and time/cost-efficient; get genuine buy-in at the top;
and make the investigation team independent of the management of the
group where the events occurred, reporting to a higher level of
management — without independence, blame-avoidance pressure tends to
reassert itself even under a nominally blame-free process.

## Common pitfalls

- **Reverting to blame language mid-analysis** — "should have," "could
  have," "if only" are reliable signs hindsight bias has crept back in;
  they indicate the analysis has slipped from *why/how* back to *who*.
- **Stopping at the first plausible cause** — CAST's whole premise is
  that accidents have many interacting causes; treating the first
  identified factor as sufficient defeats the method.
- **An investigation team that reports to the same management whose
  decisions are under scrutiny** — undermines the independence CAST
  explicitly recommends.
- **Doing CAST without checking whether an STPA already existed** for the
  system — if STPA was done during development, the CAST investigation
  should check whether the scenario was already identified (and a
  control wasn't implemented) or genuinely wasn't anticipated, since the
  two imply different follow-up actions.

## Learn more

- [joelparkerhenderson/causal-analysis-based-on-system-theory](https://github.com/joelparkerhenderson/causal-analysis-based-on-system-theory) — the source for this skill.
- Nancy G. Leveson, *CAST Handbook: How to Learn More from Incidents and Accidents*
- Nancy G. Leveson, *Engineering a Safer World: Systems Thinking Applied to Safety*
