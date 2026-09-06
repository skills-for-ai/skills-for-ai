---
name: hierarchical-task-analysis
description: Use when asked to decompose a complex task into a hierarchical structure of subtasks, actions, and operations — task identification, decomposition, relationships, documentation, evaluation — as the structural-decomposition specialization of task-analysis.
---

# Hierarchical Task Analysis (HTA)

Hierarchical Task Analysis (HTA) breaks down complex tasks into a
hierarchical structure of subtasks, actions, and operations — a
systematic way of representing the relationships between different
levels of a task, for a detailed understanding of its structure, goals,
and dependencies. See [[task-analysis]] for the more general technique
this specializes. HTA is commonly used for process evaluations, schedule
planning, risk identification, training-needs analysis, and workflow
optimization.

## General process

- **Task identification** — select a specific task to analyze, clearly
  defining its boundaries and overall goal.
- **Decomposition** — break the task down into subtasks, starting from
  the highest-level task and decomposing into more specific subtasks,
  actions, and operations; each item should be a meaningful unit of
  work.
- **Task relationships** — identify dependencies and relationships among
  tasks and subtasks: conditional relationships, schedule ordering, or
  other constraints between them.
- **Documentation** — document the hierarchy using visual aids (diagrams,
  flowcharts, or outlines) that clearly represent the relationships
  between tasks and the flow of work.
- **Evaluation** — review with subject matter experts or the people who
  actually perform the task, identifying missing or redundant steps and
  clarifying ambiguities.

## What makes it "hierarchical"

Unlike a flat, linear list of steps, HTA explicitly represents multiple
levels of abstraction at once — a top-level goal, broken into
sub-goals, broken into concrete operations — letting a reader move
between the high-level "what" and the low-level "how" without losing the
overall structure. This layered view is what makes HTA particularly
useful for training design (what level of detail does a trainee actually
need?) and risk identification (which specific operation, not just which
broad step, is actually risky?).

## Common pitfalls

- **Decomposing to an inconsistent level of detail** across different
  branches of the hierarchy — some subtasks broken down to fine-grained
  operations while sibling subtasks stay high-level, making the
  hierarchy harder to read and compare across branches.
- **Missing conditional/dependency relationships** — presenting a
  hierarchy as if every subtask always happens in the same order and
  combination, when real execution branches based on conditions.
- **No expert review** — a hierarchy built solely from documentation,
  without validation from people who actually perform the task, risks
  encoding an idealized process rather than the real one.
- **Confusing HTA with a flat task-analysis step list** — HTA's value
  comes specifically from the multi-level hierarchy; collapsing it back
  into a flat sequence loses the structure that makes it useful.

## Learn more

- [[task-analysis]] for the general umbrella technique this specializes.
- [[flowchart]], [[mind-map]] for general-purpose diagramming techniques often used to document an HTA.
- [[workflow-analysis]] for a related technique examining a task within its broader process context.
