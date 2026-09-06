---
name: scrum
description: Use when asked to set up or run Scrum — roles (Product Owner, Scrum Master, Development Team), artifacts (Product Backlog, Sprint Backlog, Increment), and events (sprint planning, daily scrum, review, retrospective) — as a fixed-sprint alternative to Kanban's continuous flow (see kanban).
---

# Scrum

Scrum is a software development framework using self-organizing,
cross-functional teams working in short, fixed-length cycles called
sprints, aimed at improving productivity, reducing time to market, and
promoting genuine teamwork through continuous improvement.

## Roles

- **Product Owner** — defines and prioritizes product features, builds
  and maintains the Product Backlog, and ensures stakeholders understand
  the product vision and goals (see [[product-management]] for the
  broader discipline this role draws on).
- **Scrum Master** — ensures Scrum is properly implemented, facilitates
  the Scrum events, and helps the team overcome obstacles (closely
  related to [[agile-coaching]], though narrower in scope —
  focused specifically on the team's own Scrum process rather than
  broader organizational agile transformation).
- **Development Team** — designs, builds, and tests the product.

## Artifacts

- **Product Backlog** — a prioritized list of features, requirements,
  and changes the product needs to deliver, owned and continuously
  refined by the Product Owner.
- **Sprint Backlog** — the specific tasks the team has committed to
  completing during the current sprint.
- **Increment** — the sum of all completed Product Backlog items at
  sprint end; must be a potentially shippable product meeting the team's
  **Definition of Done**, not just "code written."

## Events

- **Sprint planning** — starts each sprint, defining the sprint's goal
  and the tasks that will pursue it.
- **Daily scrum** — a short daily sync keeping the team aligned,
  surfacing obstacles, and adjusting the Sprint Backlog as needed (see
  [[agile-standup]] for this ceremony covered in depth).
- **Sprint review** — closes the sprint by showing completed work to
  stakeholders for feedback (see [[agile-showcase]]).
- **Sprint retrospective** — closes the sprint by reflecting on the
  team's own process and identifying improvements (see
  [[agile-reflection]]).

## Scrum vs. Kanban

Scrum commits to a fixed-length sprint with a planned Sprint Backlog;
[[kanban]] uses continuous flow with WIP limits and no fixed
iteration length. Scrum's fixed cadence gives predictable planning and
review rhythm; Kanban's continuous flow suits work with unpredictable
arrival patterns better. Some teams blend the two ("Scrumban").

## Common pitfalls

- **An Increment that isn't actually shippable** — if "Done" doesn't
  really mean production-ready, the Increment artifact stops meaning
  what Scrum intends it to mean, undermining stakeholder trust in sprint
  reviews.
- **Sprint planning without real Product Backlog refinement beforehand**
  — a poorly-refined backlog leads to sprint planning that either takes
  too long or commits to poorly-understood work.
- **Skipping the retrospective, or running it without real follow-
  through** — see [[agile-reflection]]'s identical warning; a
  retrospective that identifies issues but never changes behavior wastes
  the ceremony.
- **The Scrum Master acting as a traditional project manager** —
  directing the team's work rather than facilitating and removing
  obstacles undermines Scrum's self-organizing-team premise.

## Learn more

- [[kanban]] for the contrasting continuous-flow framework.
- [[agile-standup]], [[agile-showcase]], [[agile-reflection]] for the individual Scrum events covered in depth.
- [[product-management]] for the broader discipline the Product Owner role draws on.
