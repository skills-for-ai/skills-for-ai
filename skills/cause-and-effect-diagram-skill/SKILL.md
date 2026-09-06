---
name: cause-and-effect-diagram-skill
description: Use when asked to run a root-cause analysis session using a fishbone/Ishikawa-style diagram — the 6M cause categories (Manpower, Methods, Machines, Materials, Measurements, Mother Nature) — the same technique also called fishbone-diagram-skill or ishikawa-diagram-skill under alternate names.
---

# Cause-and-Effect Diagram Skill

A cause-and-effect diagram — also called an **Ishikawa diagram** (after
its developer, quality-control expert Kaoru Ishikawa) or a **fishbone
diagram** (after its shape) — is a visual tool for analyzing and solving
problems by systematically identifying their possible causes. See
[[fishbone-diagram-skill]] and [[ishikawa-diagram-skill]] for the
identical technique under its other common names — all three names refer
to the same tool.

## Shape and structure

The diagram is shaped like a fish skeleton: the problem statement or
effect sits at the head, and potential causes branch out along the spine
as "bones" — each major bone representing a cause category, with
specific candidate causes listed as smaller branches off each one.

## The 6M cause categories

A common set of categories used to organize brainstormed causes
(originating in manufacturing, but adaptable to other domains):

- **Manpower** — people-related causes.
- **Methods** — process-related causes.
- **Machines** — equipment-related causes.
- **Materials** — input-related causes.
- **Measurements** — data-related causes.
- **Mother Nature** — environmental conditions.

Not every category applies to every problem (a software-specific version
often adapts these — e.g. swapping "Machines" for "Tools/Infrastructure")
— the categories are a starting checklist for prompting broad
brainstorming, not a rigid requirement to fill in every branch.

## The process

Brainstorm possible causes of the problem (see [[brainstorming-skill]]
for running that step well) and organize them into the cause categories,
typically in a group setting with people who have real knowledge and
experience relevant to the problem. Once causes are identified, analyze
and prioritize them, then develop and implement potential solutions
targeting the most likely or highest-impact root causes.

## Why it's useful

Built on the premise that a problem usually has **multiple contributing
factors**, not one single cause — addressing only the first plausible
cause found risks missing the actual root cause(s). It's also a strong
collaboration tool: structuring the brainstorm by category naturally
brings together different areas of expertise and perspectives that a
free-form discussion might not surface as systematically.

## Common pitfalls

- **Stopping at the first plausible cause** — the whole premise of the
  technique is that problems are usually multi-causal; treating one
  identified branch as "the" answer defeats the method's purpose.
- **Forcing every category to have an entry** — not every cause category
  applies to every problem; padding a category with a weak, unlikely
  cause just to fill it in dilutes the diagram's usefulness.
- **Skipping prioritization after brainstorming** — a fishbone diagram
  full of unranked candidate causes doesn't by itself tell you which to
  actually address first; a follow-up prioritization step (by likelihood
  and impact) is necessary to turn the diagram into action.
- **Running it solo instead of with a knowledgeable group** — the
  technique's collaborative, multi-perspective brainstorming is a
  significant part of its value; one person's cause list is more likely
  to miss whole categories of contributing factor.

## Learn more

- [[fishbone-diagram-skill]], [[ishikawa-diagram-skill]] — the same technique under its other common names.
- [[brainstorming-skill]] for running the cause-generation step well.
- [[dmaic-skill]] for the broader Six Sigma methodology this technique is commonly used within (typically during the Analyze stage).
