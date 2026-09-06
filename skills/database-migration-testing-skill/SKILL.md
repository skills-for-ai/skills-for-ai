---
name: database-migration-testing-skill
description: Use when asked to test moving a database between environments, versions, or platforms — data integrity validation, rollback testing — as distinct from testing schema changes specifically (see database-schema-migration-testing-skill), which is a narrower, structure-focused case.
---

# Database Migration Testing Skill

Database migration testing verifies data integrity and application
functionality when a database moves between environments, versions, or
platforms — confirming data transferred accurately without corruption or
loss, and remains fully accessible to the application afterward.

## The three phases

- **Pre-migration validation** — document the original database's
  structure, data types, constraints, and relationships, and establish
  baseline tests before touching anything.
- **During migration** — automated scripts monitor the transfer in real
  time, watching for errors, timeouts, and consistency problems as they
  happen rather than only after the fact.
- **Post-migration validation** — the core of the testing effort: compare
  source and target databases via automated data-comparison tools,
  checking record counts, data values, schema integrity, and referential
  relationships; verify data accessibility, query performance, and
  application connectivity against the new environment.

## Key testing scenarios

- **Data transformation validation** — any business rule applied during
  the move (reformatting, recoding, merging) needs its output verified
  against the intended transformation, not just checked for "some value
  present."
- **Performance benchmarking** — query response times and load capacity
  in the new environment, to catch a migration that succeeds
  functionally but degrades performance.
- **Rollback testing** — confirm the migration-reversal procedure
  actually works, checked *before* it's needed under real incident
  pressure, not for the first time during one.

## Automation and reporting

Modern tooling integrates migration testing into CI/CD pipelines as part
of the broader DevOps workflow, generating reports on discrepancies and
performance, with automated alerting the moment a migration issue is
detected — minimizing the window between something going wrong and
someone finding out.

## Common pitfalls

- **No pre-migration baseline** — without documenting the original
  structure and data characteristics first, there's nothing precise to
  compare the migrated result against.
- **Checking only record counts, not record contents** — matching counts
  can hide silent data corruption or transformation errors in individual
  fields.
- **Never testing the rollback path** — see [[disaster-recovery-testing-skill]]'s
  general point about untested recovery procedures failing exactly when
  they're needed most.
- **Skipping performance validation** — a migration can preserve every
  byte of data correctly and still make the application unusably slow in
  the new environment.

## Learn more

- [[database-schema-migration-testing-skill]] for the narrower, structure-change-specific case.
- [[disaster-recovery-testing-skill]] for the broader discipline of testing recovery/rollback procedures.
