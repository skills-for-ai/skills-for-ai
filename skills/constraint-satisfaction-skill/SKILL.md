---
name: constraint-satisfaction-skill
description: Use when asked to model or solve a constraint satisfaction problem (CSP) — variables, domains, and constraints solved via backtracking, forward checking, or constraint propagation — as distinct from Monte Carlo methods (see monte-carlo-analysis-skill), which use random sampling rather than systematic constraint solving.
---

# Constraint Satisfaction Skill

Constraint satisfaction is an AI and operations-research technique for
solving problems by finding a set of values that satisfy a defined set of
constraints. A problem is expressed as **variables** (that can take
different values), **domains** (the possible values each variable can
take), and **constraints** (rules defining relationships between
variables) — the goal is finding an assignment of values to variables
that satisfies every constraint simultaneously.

## What a constraint looks like

A constraint restricts which value combinations are valid. In a
scheduling problem, a constraint might be "two events can't be scheduled
at the same time." In a logistics problem, "a shipment's weight can't
exceed a limit." Constraints range from simple pairwise restrictions to
complex logical or arithmetic expressions involving many variables at
once.

## Where CSPs show up

Scheduling (classes with no conflicts), planning, and optimization
problems generally: assigning tasks to workers for a balanced workload,
optimizing component placement on a circuit board, or generating a valid
timetable — any problem naturally expressed as "find values satisfying
all these rules" rather than "optimize this single numeric objective"
(though many CSPs can be extended with an objective function, turning
them into constrained optimization problems).

## Solving techniques

- **Backtracking** — systematically try assigning values, backing up
  (backtracking) whenever a partial assignment violates a constraint,
  rather than committing to a full assignment before checking validity.
- **Forward checking** — after each assignment, eliminate values from
  other variables' domains that would immediately violate a constraint,
  catching a dead end earlier than plain backtracking would.
- **Constraint propagation** — actively propagate the implications of
  each constraint across the variable set, narrowing domains before
  (or instead of) exhaustive search, often dramatically reducing the
  search space needed.

## Common pitfalls

- **Modeling a problem with too coarse or too fine a variable/domain
  choice** — the right level of granularity affects both how naturally
  the constraints express and how tractable the resulting search is.
- **Missing an implicit constraint** — a real-world rule not encoded as
  an explicit constraint won't be enforced by the solver, producing a
  technically-valid-per-the-model solution that violates an unstated
  real requirement.
- **Using pure backtracking on a large problem where propagation would
  help** — for problems with many interacting constraints, forward
  checking or constraint propagation can be the difference between a
  solvable and an intractable search.
- **Confusing constraint satisfaction with optimization** — a pure CSP
  only asks "does a valid assignment exist," not "which valid assignment
  is best"; if there's a genuine quality difference between valid
  solutions, the problem needs an objective function added, turning it
  into a constrained optimization problem.

## Learn more

- [[decision-tree-skill]] for a related but distinct structured-decision technique.
- [[monte-carlo-analysis-skill]] for a fundamentally different (randomized-sampling) approach to hard computational problems.
