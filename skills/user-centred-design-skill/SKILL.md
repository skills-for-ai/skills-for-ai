---
name: user-centred-design-skill
description: Use when asked to apply user-centred design (UCD/UX) methodology — user research methods, personas, journey mapping, usability testing, or the iterative design/test/refine cycle — independent of any specific design tool.
---

# User-Centred Design Skill

User-centred design (UCD) — also called human-centred design (HCD) —
grounds every design decision in evidence about real users' needs,
behaviors, and context, gathered and re-checked iteratively, rather than
in assumption or internal opinion alone. ISO 9241-210 is the formal
standard defining the process; this skill covers the working method.

## The iterative cycle

1. **Understand context of use** — who the users are, what they're trying
   to do, and the environment/constraints they do it in.
2. **Specify requirements** — user needs and success criteria derived from
   that understanding, not just business requirements.
3. **Produce design solutions** — from low-fidelity (sketches, wireframes)
   to high-fidelity (interactive prototypes), evaluated and refined in
   rounds rather than shipped from a single pass.
4. **Evaluate** — usability testing and other feedback methods, against
   the requirements from step 2 — and loop back to step 1 or 3 based on
   what's learned.

The cycle repeating — not any single step — is the actual discipline;
doing one round of user research and then never revisiting it isn't UCD,
it's research-informed design done once.

## Research methods

- **Qualitative** (why/how): contextual inquiry (observing users in their
  real environment), semi-structured interviews, diary studies, think-aloud
  usability testing.
- **Quantitative** (how much/how many): analytics, A/B testing, surveys
  with closed questions, first-click testing, tree testing (navigation
  structure validation).
- **Generative vs. evaluative** — generative research (early, open-ended,
  "what should we build") explores the problem space; evaluative research
  (later, "does this specific design work") tests a concrete artifact.
  Confusing the two — running a usability test on a blank-slate problem, or
  an open-ended interview when a specific prototype needs validating — 
  wastes both the method and the participants' time.

## Personas and journey maps

- A **persona** is a composite, research-grounded representation of a user
  segment — useful for keeping a team's mental model of "the user" aligned
  and evidence-based; harmful the moment it's built from assumption rather
  than actual research and then treated as fact.
- A **journey map** traces a user's steps, thoughts, and emotions through a
  task or process over time, surfacing pain points and gaps between
  touchpoints (including ones outside the product itself) that a screen-by-
  screen view misses.

## Usability testing

Watch a representative user attempt real tasks with a prototype or live
product, using a **think-aloud protocol** (narrate what they're doing and
why) — the moderator observes and asks follow-up questions but doesn't
lead the participant to a "correct" path. **5 users per round** is a
widely-cited (if debated) rule of thumb for catching most usability
issues in a single round at low cost; more rounds with fewer users each
catches more issues overall than one large round, because the design
changes between rounds.

## Accessibility as part of UCD, not separate from it

Designing for the full range of human ability (vision, hearing, motor,
cognitive) is part of understanding real context of use, not an
add-on compliance step after design is "done." WCAG conformance (see
[[html-skill]]'s accessibility section for concrete technique) is a
minimum bar, not a substitute for testing with people who actually use
assistive technology.

## Common pitfalls

- **Skipping straight to solutions** — designing screens before
  understanding the actual user need risks solving the wrong problem
  elegantly.
- **Research theater** — running interviews or tests but not actually
  changing the design based on what's learned; if findings never affect a
  decision, the research step isn't doing its job.
- **Recruiting convenient participants instead of representative ones** —
  testing with colleagues or friends who aren't the target user segment
  produces confident-sounding but misleading results.
- **Treating a persona as demographic decoration** — a persona built from
  guesses about age/job title rather than actual behavioral research
  patterns gives false confidence without the grounding UCD is meant to
  provide.
- **One round of testing, ever** — a single usability-test round validates
  one specific design snapshot; it doesn't validate that the *next* set of
  changes is also good, which is why the cycle is iterative by definition.

## Learn more

- [ISO 9241-210](https://www.iso.org/standard/77520.html) — the formal human-centred design process standard.
- [Nielsen Norman Group](https://www.nngroup.com/) — widely-cited practitioner research and methodology guidance.
- [GOV.UK Service Manual: User research](https://www.gov.uk/service-manual/user-research) — a real, public, government-scale UCD process.
- [[html-skill]] for concrete web-accessibility technique that UCD's inclusive-design principle depends on.
