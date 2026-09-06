---
name: pair-programming
description: Use when asked to set up or run pair programming — driver/navigator roles, in-person and remote setups — as a real-time collaborative alternative to solo development plus asynchronous code review, and a common practice alongside test-driven-development.
---

# Pair Programming

Pair programming is a software development technique where two
programmers work together at the same computer to solve a coding
problem — the **driver** writes the code, while the **navigator** reviews
and guides in real time, together designing, writing, testing, and
debugging.

## Benefits

- **Greater collaboration and communication** — leads to better shared
  understanding of the code and catches errors earlier than either
  person working alone would.
- **Knowledge sharing** — helps less experienced team members learn from
  more experienced colleagues in the moment, rather than only through
  delayed, asynchronous code review.
- **Higher code quality** — two sets of eyes reviewing in real time
  tends to produce better-designed, more maintainable code, and can
  reduce time spent on later bug-fixing and testing.

## Implementation approaches

- **Co-located** — one computer, two keyboards and monitors, with
  programmers sitting side by side and switching roles regularly (the
  regular role-switching matters — a pair where one person always
  drives loses much of the benefit).
- **Remote** — programmers work together from different locations using
  video conferencing and remote desktop/screen-sharing tools, achieving
  much of the same real-time collaboration benefit without co-location.

## When pairing adds the most value

Particularly valuable for complex or unfamiliar problems, onboarding a
new team member, or tackling a piece of code where a mistake would be
costly — the real-time review catches issues an asynchronous
after-the-fact code review would only catch later, at higher cost to fix.

## Relationship to test-driven development

Pair programming and [[test-driven-development]] are commonly
practiced together, particularly in Extreme Programming (XP): the
navigator can focus on the next test to write while the driver
implements, keeping the red/green/refactor cycle disciplined with a
second person actively checking each step rather than one person
potentially skipping a step under time pressure.

## Common pitfalls

- **One person always driving, the other passively watching** — loses
  the collaborative benefit; regular, deliberate role-switching is what
  keeps both people actively engaged.
- **Pairing on every task regardless of actual need** — pairing has real
  overhead; not every task benefits enough to justify two people's time,
  and forcing it universally can slow a team down without proportionate
  benefit.
- **Poor remote setup** — inadequate screen-sharing, audio, or latency in
  a remote pairing session undermines the real-time collaboration the
  technique depends on.
- **Mismatched pairing without adjusting approach** — pairing a very
  senior and very junior developer works differently (more mentorship-
  oriented) than pairing two similarly-experienced developers; treating
  every pairing the same misses this.

## Learn more

- [[test-driven-development]] for the closely related practice pair programming often accompanies.
- [[agile-coaching]] for helping a team decide when and how to adopt pairing.
