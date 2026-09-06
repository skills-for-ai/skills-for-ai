---
name: acceptance-testing-skill
description: Use when asked to write or run acceptance tests — verifying software meets client/user requirements before release — as distinct from behavior-driven Given/When/Then scenarios (see behavior-driven-development-skill) or lower-level integration/system testing (see integration-testing-skill, system-testing-skill).
---

# Acceptance Testing Skill

Acceptance testing evaluates whether a software application meets the
requirements and specifications of the client or end user — the gate that
determines whether software is actually ready for deployment, run after
integration and system testing are already complete.

## Two main types

- **Functional acceptance testing** — assesses the software's features
  and behavior against the client's stated requirements.
- **Non-functional acceptance testing** — assesses performance,
  scalability, security, and other quality attributes (see
  [[system-quality-attributes-skill]] for the fuller attribute list these
  draw from).

## Who runs it, and how

Typically conducted by end users, business analysts, or QA professionals
— people representing the requirements' actual owner, not just the
development team that built the feature. Test cases and scenarios
replicate real-world usage; automated tooling can execute these
repeatedly, but the acceptance *criteria* themselves come from the
client/user side, not from the implementation.

## Where it sits in the testing sequence

Acceptance testing follows integration testing ([[integration-testing-skill]])
and system testing ([[system-testing-skill]]) — by this stage, individual
components and the whole system are already known to work together
technically; acceptance testing asks the different question of whether
the *right* thing was built. Successful completion is the milestone that
signals readiness for release.

## Common pitfalls

- **Acceptance criteria written by developers alone** — defeats the
  purpose; the criteria need to represent the actual client/user
  requirement, not the implementer's interpretation of it.
- **Treating passing integration/system tests as sufficient** — a system
  can be technically correct and still fail acceptance if it doesn't
  meet the actual business requirement.
- **Vague, unmeasurable acceptance criteria** — "the report should be
  useful" can't be objectively tested; a criterion needs a concrete,
  checkable condition.

## Learn more

- [[behavior-driven-development-skill]] for writing acceptance-level scenarios in Given/When/Then form.
- [[system-quality-attributes-skill]] for the non-functional attribute vocabulary acceptance criteria often draw from.
