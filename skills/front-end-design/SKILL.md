---
name: front-end-design
description: Use when asked to design the client-side/UI layer of a software system — component structure, layout and responsiveness, state management, accessibility, performance — as the client-facing counterpart to back-end-design, and distinct from visual/UX design (see user-centred-design).
---

# Front-End Design

Front-end design is the discipline of structuring a software system's
client-side layer — the part users directly see and interact with — so
it's maintainable, responsive, accessible, and performant, independent
of any single framework or visual style.

## Core concerns

- **Component structure** — decomposing an interface into reusable,
  well-scoped components with clear responsibilities and props/state
  boundaries, echoing the same decomposition discipline
  [[software-architecture]] applies at a whole-system level.
- **Layout and responsiveness** — structuring content so it adapts
  correctly across screen sizes and devices, rather than being designed
  for one viewport and patched for others afterward.
- **State management** — deciding what state lives where (component-
  local, shared/global, server-derived) and how it flows through the
  application; a common source of front-end complexity when handled
  inconsistently.
- **Accessibility** — semantic markup, keyboard navigability, and
  screen-reader support built in from the start rather than retrofitted
  (see [[accessibility-testing]], [[screen-reader-testing]]).
- **Performance** — bundle size, render efficiency, and perceived load
  time, all of which directly affect user experience.

## Front-end vs. back-end design

Front-end design concerns what runs in the client (browser, mobile app)
and how it presents and collects data; [[back-end-design]] concerns what
runs on the server and how it stores, processes, and serves that data.
The two are designed together — a front-end's component and state
structure is shaped by the API contracts a back-end exposes, and vice
versa — but each has its own distinct set of design concerns and
failure modes.

## Front-end design vs. UX/visual design

Front-end design is about structure and implementation (how the client
layer is built); [[user-centred-design]] is about the user-facing
experience the interface delivers (what it feels like to use). The two
inform each other constantly, but a well-structured front-end can still
deliver a poor user experience, and a well-designed user experience can
still be built on a poorly structured front-end — they're complementary,
not substitutes for one another.

## Common pitfalls

- **Component boundaries drawn around visual layout rather than
  responsibility** — components that split along "what it looks like"
  rather than "what it does" tend to accumulate duplicated logic and
  become harder to reuse.
- **Ungoverned state sprawl** — state duplicated across components with
  no single source of truth leads to inconsistent UI and hard-to-trace
  bugs.
- **Accessibility treated as a final pass** — retrofitting semantic
  markup and keyboard support after the interface is built is far more
  costly than designing with them from the start.
- **No performance budget** — without an explicit target (bundle size,
  time-to-interactive), performance tends to degrade gradually as
  features accumulate.

## Learn more

- [[back-end-design]] for the server-side counterpart.
- [[user-centred-design]] for the user-experience discipline front-end design serves.
- [[accessibility-testing]], [[screen-reader-testing]] for verifying accessibility is actually met.
- [[software-architecture]] for the broader system-structuring discipline front-end component design draws on.
