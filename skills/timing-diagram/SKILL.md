---
name: timing-diagram
description: Use when asked to visualize the timing and duration of signals or events over time — horizontal time axis, per-signal lanes — common in digital electronics, communication protocols, and concurrent software behavior, as distinct from a sequence diagram's message-order-without-precise-timing view (see sequence-diagram).
---

# Timing Diagram

A timing diagram graphically represents the timing and duration of
signals or events in a system — used in electronics, digital
communication, and software engineering to visualize *when* and *for how
long* something is in a given state, which a plain sequence diagram
(ordering only, not precise timing) doesn't show.

## Structure

- **Horizontal axis** — represents time.
- **Vertical axis** — represents signal value.
- **Rows/lanes** — the diagram is divided into lanes, one per signal or
  event, so multiple signals' timing can be compared directly against
  the same time axis.

Signal values can be shown as voltage levels, logic states (high/low, 1/0
in digital systems), or general data values — whatever the domain's
natural representation is.

## What it's used for

Visualizing clock signals, data signals, control signals, and system
responses — and analyzing real timing properties: clock speeds, signal
propagation delays, and system latencies. In software specifically, a
timing diagram is useful for showing exactly how long a component
spends in a given state relative to others, which a
[[sequence-diagram]]'s activation bars show only in relative
order, not to a precise time scale.

## Tooling

Can be created with simulation software, specialized drawing tools, or
manually (even on graph paper for a quick sketch) — see
[[plantuml-diagram]] for the `@startuml` timing-diagram syntax (`concise`
lane declarations, `@` time markers, and duration annotations) for a
version-controlled, text-based option.

## Common pitfalls

- **Using a timing diagram when only message *order* matters, not actual
  duration** — a [[sequence-diagram]] is the simpler, more
  appropriate tool when precise timing isn't actually the point being
  communicated.
- **Inconsistent time scale across lanes** — if lanes aren't drawn to the
  same time axis, comparing signals across lanes becomes misleading
  rather than clarifying.
- **Omitting units on the time axis** — a timing diagram without
  labeled time units (milliseconds, clock cycles) can't actually be used
  to reason about real latency or throughput.

## Learn more

- [[plantuml-diagram]] for the text-based syntax to draw this diagram type.
- [[sequence-diagram]] for the related but distinct message-order-focused interaction diagram.
