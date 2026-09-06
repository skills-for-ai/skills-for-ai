---
name: deployment-diagram-skill
description: Use when asked to model the physical/runtime architecture of a distributed system — nodes, components, artifacts — as the runtime-placement counterpart to a component diagram's logical software relationships (see component-diagram-skill). See plantuml-skill for the text-based syntax to actually draw one.
---

# Deployment Diagram Skill

A deployment diagram is a UML diagram showing the configuration and
arrangement of runtime processing nodes, components, and artifacts in a
distributed system — illustrating how software is actually deployed onto
hardware infrastructure and how the deployed pieces interact, as
distinct from [[component-diagram-skill]]'s logical, hardware-independent
view of how components relate to each other.

## Key elements

- **Node** — a physical device or software execution environment (a
  server, a workstation, a container host); drawn as a cube (or
  sometimes a sphere, depending on node type).
- **Component** — a modular part of the software system providing
  specific functionality, deployed onto a node; drawn as a rectangle.
- **Artifact** — a physical piece of data used or produced by a
  component, such as a database file or a deployable package.
- **Association** — a connection between a node and a component, or
  between two nodes (e.g. a network link).
- **Dependency** — a relationship where a component depends on another
  component or artifact.

## What it's used for

Depicting a system's **physical architecture** — its deployment view —
showing the relationship between hardware nodes (servers, workstations)
and the software components running on them, plus the connections
between nodes. Useful at multiple levels of abstraction, from a
high-level system overview down to a detailed description of one
component's specific deployment.

## When a deployment diagram is the right choice

Reach for this specifically when the question is about **physical
placement and runtime infrastructure** — which server runs which service,
what network topology connects them — rather than the logical software
structure [[component-diagram-skill]] or [[class-diagram-skill]] would
show. A cloud architecture discussion (see [[aws-cloud-skill]],
[[azure-cloud-skill]], [[google-cloud-skill]]) is a natural fit for this
diagram type.

## Drawing one

See [[plantuml-diagram-skill]] for the `@startuml` deployment-diagram syntax
(`node`, `database`, `cloud`, and other deployment-specific shape
keywords) to generate one from version-controlled text.

## Common pitfalls

- **Confusing logical component relationships with physical deployment**
  — see [[component-diagram-skill]]; two components can be tightly
  logically related while running on entirely separate nodes, or vice
  versa.
- **Omitting network/connection detail between nodes** — a deployment
  diagram that shows nodes but not how they connect misses information
  often critical to understanding latency, failure modes, or security
  boundaries.
- **Mixing abstraction levels** — showing a high-level system overview
  and a detailed single-component deployment in the same diagram makes
  both harder to read; separate diagrams per abstraction level instead.

## Learn more

- [[plantuml-diagram-skill]] for the text-based syntax to draw this diagram type.
- [[component-diagram-skill]] for the logical, hardware-independent software-relationship counterpart.
- [[aws-cloud-skill]], [[azure-cloud-skill]], [[google-cloud-skill]] for the cloud infrastructure concepts a deployment diagram often models.
