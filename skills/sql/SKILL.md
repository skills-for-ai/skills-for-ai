---
name: sql
description: Use when asked to write or debug standard/portable SQL — joins, aggregation, subqueries vs CTEs, transactions, normalization — independent of any specific database vendor. For a vendor's own dialect and tuning specifics, use its own skill (postgresql-database, mysql-database, mssql-database, oracle-database, sqlite-database).
---

# SQL

SQL (Structured Query Language) is the standard declarative language for
querying and modifying relational data. This skill covers the portable
core shared across databases; vendor-specific syntax, tuning, and quirks
live in each database's own skill.

## Query anatomy and join types

```sql
SELECT c.name, COUNT(o.id) AS order_count
FROM customers c
LEFT JOIN orders o ON o.customer_id = c.id
WHERE c.signed_up_at >= '2026-01-01'
GROUP BY c.name
HAVING COUNT(o.id) > 0
ORDER BY order_count DESC
LIMIT 10;
```

Logical (not textual) execution order: `FROM`/`JOIN` → `WHERE` → `GROUP BY`
→ `HAVING` → `SELECT` → `ORDER BY` → `LIMIT`. This is why you can't
reference a `SELECT`-list alias in `WHERE` (it doesn't exist yet at that
stage) but often can in `ORDER BY` (it runs after `SELECT`).

- **INNER JOIN** — only rows with a match on both sides.
- **LEFT JOIN** — every row from the left side, matched columns from the
  right side or `NULL` when there's no match. (**RIGHT JOIN** is the mirror
  image; most people standardize on `LEFT JOIN` and swap table order instead
  of using `RIGHT JOIN`.)
- **FULL OUTER JOIN** — every row from both sides, `NULL`-padded where
  either side has no match (not supported by every database — MySQL
  historically lacks it directly, emulated via `UNION` of `LEFT`/`RIGHT`
  joins).
- **CROSS JOIN** — the Cartesian product; almost always either deliberate
  (generating combinations) or an accidental missing join condition.

`WHERE` filters rows before grouping; `HAVING` filters groups after
aggregation — a condition on an aggregate (`COUNT(...)`, `SUM(...)`) belongs
in `HAVING`, not `WHERE`, because the aggregate doesn't exist yet when
`WHERE` runs.

## Subqueries, CTEs, and set operations

```sql
-- CTE: named, readable, referenceable subquery
WITH big_spenders AS (
  SELECT customer_id, SUM(total) AS spent
  FROM orders
  GROUP BY customer_id
  HAVING SUM(total) > 1000
)
SELECT c.name, b.spent
FROM customers c
JOIN big_spenders b ON b.customer_id = c.id;

-- Set operations
SELECT email FROM customers
UNION                       -- dedupes
SELECT email FROM newsletter_signups;

SELECT email FROM customers
UNION ALL                   -- keeps duplicates, cheaper
SELECT email FROM newsletter_signups;

SELECT id FROM orders EXCEPT SELECT order_id FROM refunds;   -- rows in first, not in second
```

A CTE is primarily a readability/reuse tool — it names a subquery so a
complex query reads top-to-bottom instead of nesting. `UNION` implies a
deduplication pass across the combined result; when duplicates are
impossible or irrelevant, `UNION ALL` avoids that cost.

## NULL semantics

```sql
WHERE column IS NULL          -- correct
WHERE column = NULL           -- always false — NULL is never "equal" to anything, including itself
SELECT COALESCE(nickname, name) AS display_name FROM users;   -- first non-NULL value
```

NULL means "unknown," not zero or empty string — any arithmetic or equality
comparison involving NULL yields NULL (neither true nor false), which is why
`WHERE column = NULL` silently matches nothing instead of erroring. This
also affects aggregates: `COUNT(column)` skips NULLs, `COUNT(*)` doesn't;
`AVG`/`SUM` over a column ignore NULL rows rather than treating them as
zero.

## Transactions and isolation

```sql
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;   -- or ROLLBACK on error — both updates apply together or neither does
```

A transaction's **ACID** guarantees (Atomicity, Consistency, Isolation,
Durability) are what make the two updates above safe to treat as one
indivisible operation. **Isolation level** (READ COMMITTED, REPEATABLE READ,
SERIALIZABLE, …) controls what concurrent transactions can see of each
other's uncommitted or recently-committed changes — defaults differ by
vendor (see the vendor-specific skill), and the choice trades correctness
guarantees against concurrency/throughput.

## Normalization, briefly

- **1NF** — atomic values, no repeating groups in a column.
- **2NF** — every non-key column depends on the *whole* primary key, not
  just part of a composite key.
- **3NF** — every non-key column depends on the key and nothing but the
  key (no column depending on another non-key column).

Normalizing reduces update anomalies (the same fact stored in two places
getting out of sync); deliberately denormalizing trades that safety for read
performance, and should be a documented decision, not an accident of schema
drift.

## Common pitfalls

- **`WHERE` clause referencing a `SELECT`-list alias** — fails or behaves
  inconsistently across databases because of logical execution order (above);
  repeat the expression or use a CTE/subquery instead.
- **An aggregate condition placed in `WHERE` instead of `HAVING`** —
  `WHERE COUNT(*) > 1` errors; the aggregate isn't computed yet at that
  stage.
- **Implicit join via comma syntax** (`FROM a, b WHERE a.id = b.a_id`)
  instead of an explicit `JOIN ... ON` — functionally similar for inner
  joins but easy to accidentally turn into a cross join by forgetting the
  `WHERE` condition, and harder to read once more than two tables are
  involved.
- **`NOT IN` with a subquery that can return NULL** — if the subquery
  produces even one NULL, `NOT IN` returns no rows at all (due to NULL's
  three-valued logic), a notorious and non-obvious footgun; prefer `NOT
  EXISTS` for this pattern.
- **Assuming portable syntax across vendors** — pagination (`LIMIT`/`OFFSET`
  vs `TOP`/`FETCH NEXT`), upsert syntax, and string concatenation
  (`||` vs `CONCAT()` vs `+`) all differ; check the target database's own
  skill before assuming a snippet ports unchanged.

## Learn more

- [Mode: SQL tutorial](https://mode.com/sql-tutorial/) — practical, example-driven.
- [Use The Index, Luke](https://use-the-index-luke.com/) — indexing and query-plan fundamentals, mostly cross-database.
- Vendor dialects and tuning: [[postgresql-database]], [[mysql-database]], [[mssql-database]], [[oracle-database]], [[sqlite-database]].
