---
name: state-diagram-skill
description: Use when asked to model an object's or system's states and transitions over time — states, events, actions, guards — as distinct from an activity diagram's sequence-of-actions view (see activity-diagram-skill), which models a workflow rather than one object's possible states.
---

# State Diagram Skill

A state diagram (also called a state machine diagram or state chart
diagram) is a UML behavioral diagram describing how an object or system
behaves over time — the states it can be in, and the events and
transitions that move it between them.

## Key elements

- **States** — a condition the object/system can exist in, drawn as a
  rounded rectangle with a name (e.g. a traffic light's "Red", "Yellow",
  "Green").
- **Transitions** — a change from one state to another, drawn as a
  labeled arrow.
- **Events** — what triggers a transition (e.g. a timer expiring
  triggering the move from "Red" to "Green").
- **Actions** — something that happens *during* a transition (e.g.
  turning on a warning light during the "Green"-to-"Yellow" transition).
- **Guards** — a boolean condition, written in square brackets, that
  must be true for a transition to actually occur (e.g. a guard checking
  "no cars in the intersection" before allowing "Red" to transition to
  "Green").

## When a state diagram is the right choice

Best for modeling something with a genuinely **finite, well-defined set
of states** and clear rules for moving between them — a traffic light, an
order's lifecycle (pending → shipped → delivered → returned), a
connection's state machine (connecting → connected → disconnecting →
disconnected). Contrast with [[activity-diagram-skill]], which models a
*sequence of actions* in a workflow rather than the states one specific
object can occupy — a state diagram answers "what state is this object
in and what can change that," while an activity diagram answers "what
happens next in this process."

## Drawing one

See [[plantuml-diagram-skill]] for the `@startuml` state-diagram syntax
(`[*] --> State1 : Start`, state descriptions with `State1 : Description`)
to generate one from version-controlled text.

## Common pitfalls

- **Confusing a state diagram with an activity diagram** — see above;
  use a state diagram for "what states can this object be in," an
  activity diagram for "what sequence of actions happens in this
  process."
- **Missing guards on ambiguous transitions** — a transition that should
  only occur under a specific condition, drawn without its guard,
  misrepresents when the transition is actually allowed to fire.
- **An incomplete state machine** — states with no outgoing transition to
  a terminal/end state, or missing transitions for events the real
  system can actually receive, leave the model unable to represent real
  system behavior fully.

## Learn more

- [[plantuml-diagram-skill]] for the text-based syntax to draw this diagram type.
- [[activity-diagram-skill]] for the complementary sequence-of-actions workflow view.
