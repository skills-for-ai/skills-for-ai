---
name: sequence-diagram
description: Use when asked to model interactions between objects/components over time as a UML sequence diagram — lifelines, messages, activation bars, combined fragments — as distinct from a use case diagram's user-perspective functionality view (see use-case-diagram). See plantuml for the text-based syntax to actually draw one.
---

# Sequence Diagram

A sequence diagram is a UML interaction diagram illustrating how objects
or components communicate over time — modeling a system's behavior in
terms of the actual messages exchanged, in the order they happen, rather
than the static structure of the classes involved.

## Key elements

- **Objects** — an instance of a class or component, shown as a rectangle
  labeled with the object's name at the top of the diagram.
- **Lifelines** — a vertical dashed line beneath an object, representing
  its existence/lifespan over the time period shown.
- **Messages** — arrows between lifelines representing communication;
  can be synchronous (solid arrowhead, caller waits for a response) or
  asynchronous (open arrowhead, caller continues immediately), and can
  carry parameters and return values.
- **Activation bars** — a narrow rectangle on a lifeline showing exactly
  when that object is actively processing a message, distinct from
  periods where it's idle waiting.
- **Combined fragments** — a labeled box grouping a set of messages to
  express a loop, an alternative branch, or another control structure
  within the sequence, rather than only a flat, unconditional message
  order.

## When a sequence diagram is the right choice

Best for showing the **actual order and timing of interactions** between
a specific, known set of objects/components for one scenario — a
debugging or design discussion about "what calls what, in what order,
and does it wait for a response" is exactly what a sequence diagram makes
explicit that a class diagram (structure only, see
[[class-diagram]]) can't show.

## Drawing one

See [[plantuml-diagram]] for the `@startuml` sequence-diagram syntax
(`Alpha -> Bravo`, participant/actor declarations, `==` dividers for
grouping steps) to generate one from version-controlled text.

## Common pitfalls

- **Showing every possible interaction in one diagram** — a sequence
  diagram represents *one scenario*; trying to show every conditional
  branch in the same diagram (rather than using combined fragments
  sparingly, or separate diagrams for distinct scenarios) produces an
  unreadable tangle.
- **Confusing synchronous and asynchronous messages** — this distinction
  carries real meaning (does the caller block waiting?); using the wrong
  arrow style misrepresents actual runtime behavior.
- **Omitting activation bars** — without them, it's unclear exactly when
  an object is actively doing work versus idle, which matters for
  reasoning about concurrency or performance.

## Learn more

- [[plantuml-diagram]] for the text-based syntax to draw this diagram type.
- [[use-case-diagram]] for the complementary, user-perspective functionality view.
- [[class-diagram]] for the static structure underlying the objects a sequence diagram shows interacting.
