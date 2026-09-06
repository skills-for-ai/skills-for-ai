---
name: activity-diagram-skill
description: Use when asked to model a workflow or business process as a UML activity diagram — activities, transitions, decisions, and swimlanes — as distinct from a state diagram (see state-diagram-skill), which models one object's states rather than a flow of actions. See plantuml-skill for the text-based syntax to actually draw one.
---

# Activity Diagram Skill

An activity diagram is a UML behavioral diagram describing the flow of
activities or actions within a system or process — a graphical model of
the steps in a workflow or business process, suited to modeling both
software logic and non-software business processes alike.

## Key elements

- **Activities** — a task or action, drawn as a rounded rectangle (e.g.
  "Withdraw Money" in a banking system).
- **Transitions** — an arrow connecting activities, showing flow of
  control, labeled with the condition or event that triggers it (e.g.
  "Verify Account" occurring before "Withdraw Money").
- **Decisions** — a diamond where flow splits into multiple paths based
  on a condition (e.g. "Has Sufficient Balance?" branching to "Yes" and
  "No").
- **Swimlanes** — horizontal or vertical bands showing which actor or
  department is responsible for each activity (e.g. separating the
  customer's steps from the bank employee's in a withdrawal process).

## When an activity diagram is the right choice

Suited to modeling **process flow across multiple activities and
decision points**, especially when different actors/departments are
each responsible for different parts of it (swimlanes make this
explicit). Contrast with [[state-diagram-skill]], which models the
states of *one specific object or system* over time rather than a
sequence of activities/tasks, and with [[flowchart-skill]], which is a
more general, UML-independent process notation with a similar
symbol vocabulary but no swimlane concept.

## Drawing one

See [[plantuml-diagram-skill]] for the text-based `@startuml`/`start`/`stop`
syntax (including decision branches with `if`/`then`/`else`) to actually
generate an activity diagram from version-controlled source rather than
a freehand drawing tool.

## Common pitfalls

- **Missing swimlanes when multiple actors are actually involved** — a
  process diagram that doesn't show who's responsible for each step
  loses one of activity diagrams' most useful features for cross-team
  processes.
- **Confusing an activity diagram with a state diagram** — see
  [[state-diagram-skill]]; use an activity diagram for a sequence of
  actions/tasks, a state diagram for the states one object can be in.
- **Undocumented decision conditions** — a decision diamond with no
  labeled condition on its outgoing arrows leaves the actual branching
  logic ambiguous to a reader.

## Learn more

- [[plantuml-diagram-skill]] for the text-based syntax to draw this diagram type.
- [[state-diagram-skill]] for the related but distinct state-machine modeling diagram.
- [[flowchart-skill]] for the simpler, non-UML process-flow notation.
