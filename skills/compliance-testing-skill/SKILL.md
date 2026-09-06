---
name: compliance-testing-skill
description: Use when asked to test whether software adheres to regulatory or policy standards (HIPAA, PCI-DSS, GDPR, SOX) — as distinct from security testing broadly (see security-testing-skill), which compliance testing draws on but is scoped specifically to named external requirements.
---

# Compliance Testing Skill

Compliance testing verifies that applications and systems adhere to
predetermined standards, regulations, and requirements — industry
regulation, internal policy, security standards, and legal requirements —
before deployment. Healthcare, finance, and government sectors rely on it
heavily to avoid legal penalties, security breaches, and operational
failures.

## Common frameworks tested against

**HIPAA** (US healthcare data privacy), **PCI-DSS** (payment card data
security), **GDPR** (EU data protection), **SOX** (US financial
reporting controls) — each defines specific, checkable requirements
(access controls, audit trails, data protection measures) that
automated tests can verify continuously rather than only during a
periodic manual audit.

## Automating compliance checks

Automated compliance tests can run in CI, validating every code change
against the applicable framework's requirements — access controls,
data-protection handling, audit-trail completeness — catching a
compliance regression at the same point a functional regression would be
caught, rather than at the next scheduled audit.

## The real limits of automation here

Regulations evolve, and test scripts need active maintenance to track
that evolution — a compliance test suite validated against last year's
regulatory text can pass while genuinely non-compliant with this year's.
Complex business-logic-dependent requirements (e.g. "data is retained
only as long as necessary for the stated purpose") often need human
judgment to validate fully; automated tests complement rather than
replace human compliance oversight, and successful implementation
depends on collaboration between development, compliance officers, and
QA.

## Common pitfalls

- **Treating a passing automated compliance suite as full compliance** —
  automated checks cover the mechanically-verifiable subset of a
  regulation; nuanced or judgment-dependent requirements still need human
  review.
- **Letting the test suite drift from current regulatory text** —
  regulations change; a stale compliance suite gives false confidence.
- **No collaboration between engineering and actual compliance
  officers** — a technically-passing test suite built without compliance
  expertise input can miss what the regulation actually requires in
  practice.

## Learn more

- [[security-testing-skill]] for the broader security-verification discipline compliance testing draws specific, regulation-scoped checks from.
- [[information-manager-skill]] for the organizational information-governance function compliance testing supports.
