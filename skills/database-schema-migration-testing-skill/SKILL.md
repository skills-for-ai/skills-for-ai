---
name: database-schema-migration-testing-skill
description: Use when asked to test a database schema change (adding a column, renaming a table, altering a constraint) — forward-migration correctness, rollback/reversibility, and data-integrity preservation — as distinct from broader environment-to-environment database migration (see database-migration-testing-skill).
---

# Database Schema Migration Testing Skill

Schema migration testing systematically verifies that a change to a
database schema — adding a column, renaming a table, altering a
constraint, transforming data — applies correctly, reversibly, and
without data loss. Schema changes are uniquely risky compared to
application code changes: they're **stateful** (a bug can permanently
alter or destroy production data), sometimes **irreversible** (dropping a
column destroys the data it held), tightly **coupled** to application/ORM
code, **sensitive to scale** (fast on a small dev database, potentially
hours-long or table-locking on a large production one), and dependent on
strict **ordering**.

## What to test

| Test type | Validates | Catches |
| --- | --- | --- |
| Forward migration correctness | Schema applies cleanly, produces expected structure | Syntax errors, constraint violations, missing dependencies |
| Rollback / reversibility | Down-migration restores prior schema exactly | Incomplete rollbacks, orphaned objects, lost data |
| Data integrity preservation | Existing data survives unchanged | Nulls in new non-nullable columns, truncation, broken references |
| Data transformation accuracy | Transformed data is correct | Bad type casts, encoding errors, dropped records |
| Idempotency | Re-running produces the same result | Duplicate objects, constraint errors on re-run |
| Ordering/dependency | Migrations run in correct sequence | Foreign-key errors, references to nonexistent objects |
| Performance under load | Completes in acceptable time at production scale | Table locks, long-running queries, replication lag |
| Backward compatibility | App works against old and new schema during rollout | Broken queries, missing columns, type mismatches |

## Testing forward migrations

Assert on the actual structural outcome — after adding a column, confirm
it exists with the correct type, default, and nullability; after adding
an index, confirm it covers the right columns with the right uniqueness
property. Absence of an error during migration is not sufficient proof of
correctness — some tools silently skip or partially apply operations
without raising an exception. Also test the full migration chain from an
empty database to current, which catches ordering bugs individual
migration tests miss.

## Testing rollback

For every forward migration, test: apply it, verify the new schema,
execute the rollback, verify the schema matches the original baseline
exactly. Rollback testing is frequently skipped because rollbacks feel
rare — but the moment a rollback is actually needed is typically a
production incident under time pressure, exactly when an untested,
broken rollback does the most damage. Some changes (dropping a column)
are inherently non-reversible; for these, testing should confirm the
rollback exists, runs without error, and explicitly documents what can't
be recovered.

## Testing data integrity and transformation

Populate representative test data *including edge cases* (nulls, empty
strings, maximum-length values, Unicode, boundary dates) before running
the migration, then verify every record transformed correctly,
referential integrity holds, and nothing was silently dropped or
duplicated. Synthetic, uniformly clean test data misses the failures real
production data — with its manually-corrected records and
now-invalid-under-later-rules values — will actually trigger.

## Common pitfalls

- **Judging success only by "no error was thrown"** — many migration
  tools silently skip or partially apply changes without erroring;
  assert on the actual resulting structure and data.
- **Never testing rollback until an incident forces it** — exactly the
  scenario where an untested rollback's flaws matter most.
- **Testing with only clean synthetic data** — misses transformation bugs
  that only manifest on messy, real-world-shaped data.
- **Ignoring migration performance at production scale** — a migration
  fast in development can lock tables or run for hours against a
  large production dataset.

## Learn more

- [[database-migration-testing-skill]] for the broader environment/version/platform migration case.
- [[decision-record-testing-skill]] for verifying a schema change matches a recorded architectural decision.
