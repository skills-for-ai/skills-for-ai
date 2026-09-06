---
name: model-view-controller
description: Use when asked to explain or apply the Model-View-Controller (MVC) architectural pattern — separating data/business logic (Model), presentation (View), and coordinating logic (Controller) — as one specific software-architecture pattern among others.
---

# Model-View-Controller (MVC)

Model-View-Controller (MVC) is a software architectural pattern widely
used in application design — separating an application's data (Model),
user interface (View), and the logic connecting the two (Controller)
into distinct components. Key benefits include modular design,
separation of concerns, code reusability, simultaneous development, and
better testability. See [[software-architecture]] for the general
discipline MVC is one specific pattern within.

## The three components

- **Model** — represents the data and business logic of the
  application: data structure, storage, and operations related to the
  application's data. The Model manages data access, manipulation, and
  validation, operates independently of the user interface, and notifies
  the View and Controller of changes.
- **View** — the presentation layer: the user interface, responsible for
  displaying data to the user. In MVC, the View is passive and contains
  no application logic — it receives data from the Model and presents
  it.
- **Controller** — the intermediary between Model and View: handles user
  input, manipulates data in the Model, and updates the View
  accordingly. It receives input via the View, processes it, updates the
  Model, and listens for Model changes to update the View in turn.

## Why separate these concerns

Keeping data, presentation, and coordination logic in distinct
components means each can change independently — a new UI can be built
against the same Model without touching business logic, the Model's
validation rules can change without touching presentation code, and each
piece can be tested in isolation rather than only as an entangled whole.

## MVC and its many variants

Many frameworks implement variations on this pattern (MVVM, MVP, and
others) with different divisions of responsibility, particularly around
where the "connecting" logic lives and how directly the View can bind to
the Model. When working in a specific framework, check which variant it
actually implements rather than assuming textbook MVC — the boundaries
between the three roles vary meaningfully across frameworks that all use
the "MVC" name loosely.

## Common pitfalls

- **Business logic leaking into the View** — a View that directly
  queries or manipulates data undermines the separation of concerns MVC
  is meant to provide.
- **A "fat controller"** — a Controller accumulating business logic that
  actually belongs in the Model turns it into an unstructured dumping
  ground, defeating the pattern's modularity benefit.
- **Tight coupling between View and Model** — a View that depends on
  Model internals directly, rather than through the Controller,
  reintroduces the entanglement MVC exists to avoid.
- **Assuming every framework's "MVC" is the same** — the pattern is
  implemented with real variation across frameworks and languages;
  verify a specific framework's actual conventions rather than assuming
  the textbook definition applies exactly.

## Learn more

- [[software-architecture]] for the general architecture discipline MVC is one pattern within.
- [[domain-driven-design]] for a complementary approach to structuring the Model's business logic specifically.
