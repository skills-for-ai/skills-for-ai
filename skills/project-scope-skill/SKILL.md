---
name: project-scope-skill
description: Use when asked to define or control a project's scope — objectives, deliverables, requirements, assumptions/constraints — as the boundary-setting discipline a project-charter-skill document formalizes and a work-breakdown-structure-skill decomposes into executable work.
---

# Project Scope Skill

Scope defines the specific deliverables, objectives, tasks, and
boundaries of a project — the work needed to accomplish its goals, and
just as importantly, what's explicitly **not** included. A scope
statement without clear exclusions invites scope creep, since anything
not explicitly out becomes arguably in.

## Key aspects

- **Project objectives** — the desired outcomes the project aims to
  achieve, written to [[smart-criteria-skill]]'s standard (specific,
  measurable, achievable, relevant, timely).
- **Deliverables** — the tangible or intangible products, services, or
  results the project will produce; specific and measurable enough that
  "is this deliverable done" has an objective answer.
- **Requirements** — the functional and non-functional needs the project
  must satisfy (see [[functional-specification-skill]] for documenting
  functional requirements in depth, and
  [[system-quality-attributes-skill]] for the non-functional side).
- **Limitations** — assumptions (factors believed true but not yet
  proven) and constraints (factors limiting the project's options or
  resources) — naming these explicitly means they can be checked and
  challenged later, rather than silently shaping decisions unexamined.

## Tools for defining and controlling scope

Scope statements, a [[work-breakdown-structure-skill]] decomposing the
work into manageable pieces, and a formal **change control process** for
handling scope changes deliberately rather than absorbing them
informally. Each tool addresses a different failure mode: a scope
statement prevents ambiguity about what's included; a WBS prevents
missing work; change control prevents scope drift from silently
accumulating outside the agreed boundary.

## Relationship to other project artifacts

Scope is one section of a [[project-charter-skill]]'s formal document,
and the direct input a [[work-breakdown-structure-skill]] decomposes into
executable tasks. Getting scope right first matters because a WBS built
from an unclear or incomplete scope inherits that ambiguity into every
task it decomposes.

## Common pitfalls

- **No explicit exclusions** — see above; stating only what's included
  leaves "what's out" implicit and contestable.
- **Assumptions and constraints left unstated** — undocumented
  assumptions quietly shape the plan and can't be revisited or
  challenged if they turn out to be wrong.
- **Scope changes absorbed informally** — each individual change looks
  small in isolation; without a change-control process, their cumulative
  effect on schedule/cost/quality goes untracked (see
  [[project-management-skill]]'s identical warning about scope creep).
- **Requirements too vague to verify** — a requirement that can't be
  objectively checked against the delivered product leaves acceptance
  contestable at the end of the project.

## Learn more

- [[work-breakdown-structure-skill]] for decomposing agreed scope into executable work.
- [[project-charter-skill]] for the formal document scope is typically a section of.
- [[functional-specification-skill]] for documenting functional requirements in depth.
- [[project-management-skill]] for the broader scope-creep and change-management discipline.
