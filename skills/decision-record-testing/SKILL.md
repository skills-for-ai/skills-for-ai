---
name: decision-record-testing
description: Use when asked to verify that a codebase actually reflects a recorded architectural decision (an ADR/DR) — reviewing a decision record for testability, or checking code/CI for drift from a decision already made — as distinct from writing the decision record itself (see architecture-decision-record, decision-records).
---

# Decision Record Testing

Decision record testing is the practice of verifying that a codebase
actually conforms to the decisions captured in its Architecture Decision
Records (ADRs) or Decision Records (DRs) — closing the gap between "we
decided X" (a written document) and "the system actually does X" (an
enforced, checkable fact). See [[architecture-decision-record]] and
[[decision-records]] for writing the records themselves; this skill
is about checking the codebase stays consistent with what's written.

## Why a decision record needs a testable claim

A decision record's "Decision" and "Consequences" sections are only
useful going forward if they can actually be checked against the
system later — "we will use PostgreSQL, not MySQL" is checkable (grep
for a MySQL driver import); "we will keep the architecture clean" is
not. When authoring a decision record with this skill in mind, phrase
the decision as something a later reader (or an automated check) could
concretely verify, the same discipline
[[specification-driven-development]] applies to writing any spec.

## Ways to check conformance

- **Static checks / linters** — a rule forbidding a specific import,
  dependency, or pattern the decision record ruled out (e.g. banning a
  second HTTP client library after a decision record standardized on
  one).
- **Architecture fitness functions** — see [[fitness-function-testing]]
  for automated, ongoing checks that a codebase's structure keeps
  matching an architectural intent, which is the same underlying idea
  applied continuously rather than as a one-off review.
- **CI-integrated policy checks** — a decision like "all new services
  expose a health-check endpoint" can be checked automatically against
  every new service definition, catching drift the moment it's
  introduced rather than at the next architecture review.
- **Periodic manual review** — for decisions too nuanced to check
  mechanically (e.g. a decision about tone in error messages), a
  scheduled human review against the recorded decision, rather than
  relying on it never being revisited.

## Handling superseded decisions

When a decision record is superseded by a newer one, any automated check
built for the old decision needs to be updated or removed at the same
time — a stale enforcement rule for a decision that's no longer current
actively blocks legitimate work, which is worse than having no check at
all.

## Common pitfalls

- **A decision record with no checkable claim** — if nobody can tell from
  the codebase alone whether the decision is still being followed, drift
  goes unnoticed indefinitely.
- **An automated check that outlives the decision it enforced** — a
  linter rule left in place after the decision was superseded turns into
  an unexplained obstacle for the next contributor.
- **Assuming a decision record is self-enforcing** — writing it down
  changes nothing on its own; only an actual review or automated check
  closes the loop between decision and reality.

## Learn more

- [[architecture-decision-record]], [[decision-records]] for writing the decision record itself.
- [[fitness-function-testing]] for the broader discipline of continuously checking architecture against intent.
- [[specification-driven-development]] for the general principle of keeping written intent and actual behavior reconciled.
