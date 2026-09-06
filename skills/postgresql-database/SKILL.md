---
name: postgresql-database
description: Use when asked to write or debug PostgreSQL-specific SQL, choose a data type or index type, configure or tune a Postgres instance, or explain PostgreSQL-specific features (JSONB, CTEs, window functions, extensions, MVCC/vacuum) — independent of any specific ORM or client library.
---

# PostgreSQL Database

PostgreSQL ("Postgres") is an open-source, object-relational database known
for strict standards compliance, a genuinely extensible type/index system,
and strong support for semi-structured data alongside relational data.

## Connecting

```sh
psql -h localhost -U app_user -d app_db     # interactive CLI
psql "postgresql://user:pass@host:5432/db"  # connection URI form
```

Inside `psql`: `\dt` (list tables), `\d table_name` (describe a table),
`\l` (list databases), `\du` (list roles), `\timing` (show query duration).

## Distinctive data types

```sql
CREATE TABLE events (
  id         bigserial PRIMARY KEY,
  payload    jsonb NOT NULL,
  tags       text[] DEFAULT '{}',
  occurred   timestamptz NOT NULL DEFAULT now(),
  range_col  int4range
);

-- JSONB: indexed, binary-storage JSON — query into it directly
SELECT * FROM events WHERE payload->>'type' = 'signup';
SELECT * FROM events WHERE payload @> '{"type": "signup"}';  -- containment, index-able with GIN

CREATE INDEX ON events USING gin (payload);
```

- `jsonb` (binary, indexed, slightly reordered on write) is almost always
  preferred over `json` (text, preserves exact input, no indexing) unless you
  specifically need to preserve key order or whitespace.
- Native array (`text[]`, `int[]`) and range (`int4range`, `tsrange`) types
  are first-class, queryable, and indexable — not a workaround.
- `timestamptz` stores an instant (converted to/from UTC internally) and is
  almost always the right choice over bare `timestamp`, which stores a
  wall-clock value with no timezone context.

## Indexing beyond B-tree

- **GIN** — for `jsonb` containment, arrays, and full-text search
  (`tsvector`).
- **GiST** — for geometric data and range-overlap queries.
- **BRIN** — for very large, naturally-ordered tables (e.g. an append-only
  time-series table) where a full B-tree would be wasteful.
- A **partial index** (`CREATE INDEX ... WHERE status = 'active'`) indexes
  only the rows that matter for a specific hot query, keeping it much
  smaller than indexing the whole table.

## Window functions and CTEs

```sql
WITH ranked AS (
  SELECT *, row_number() OVER (PARTITION BY user_id ORDER BY created_at DESC) AS rn
  FROM orders
)
SELECT * FROM ranked WHERE rn = 1;  -- most recent order per user
```

A CTE (`WITH ... AS`) is a named subquery; as of Postgres 12+ it's no longer
an automatic optimization fence (it can be inlined like a subquery would be)
unless marked `MATERIALIZED`. Window functions (`OVER (...)`) compute
per-row aggregates without collapsing rows the way `GROUP BY` does — the
standard tool for "top N per group," running totals, and rank.

## MVCC, vacuum, and transactions

PostgreSQL uses **MVCC** (multi-version concurrency control): an `UPDATE`/
`DELETE` doesn't overwrite a row in place, it writes a new row version and
marks the old one dead. `VACUUM` reclaims dead row space; `autovacuum` does
this automatically and should almost never be disabled. A table that grows
unexpectedly on disk despite low row counts, or query plans that degrade
over time, are classic symptoms of vacuum falling behind (often from a
long-running transaction holding old row versions pinned).

## Common pitfalls

- **`SELECT *` in a query relied on across schema changes** — a new column
  silently changes result shape for every consumer; name columns explicitly
  in anything beyond ad-hoc exploration.
- **Case sensitivity of unquoted identifiers** — Postgres folds unquoted
  identifiers to lowercase, so `CREATE TABLE "Users"` and later
  `SELECT * FROM Users` (unquoted) won't match; stick to lowercase
  identifiers to avoid needing to quote them everywhere.
- **A long-running transaction blocking `VACUUM`** — even a read-only
  transaction left open holds back cleanup of dead tuples visible to it,
  causing table/index bloat over time.
- **Missing an index on a foreign key column** — Postgres does not
  auto-index foreign keys the way some other databases do; a `DELETE` on the
  referenced table can trigger a full table scan on the referencing table to
  check the constraint.
- **`text` vs `varchar(n)`** — there's no performance difference between
  them in Postgres; `varchar(n)` only adds a length check. Default to `text`
  unless the length limit is a real business rule.

## Learn more

- [PostgreSQL documentation](https://www.postgresql.org/docs/current/)
- [Postgres wiki: Don't Do This](https://wiki.postgresql.org/wiki/Don%27t_Do_This) — a well-known pitfalls list.
- [Use The Index, Luke](https://use-the-index-luke.com/) — indexing fundamentals (mostly cross-database, with Postgres notes).
- [pganalyze blog](https://pganalyze.com/blog) — performance/vacuum-tuning deep dives.
