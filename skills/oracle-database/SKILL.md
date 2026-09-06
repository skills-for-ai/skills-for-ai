---
name: oracle-database
description: Use when asked to write or debug PL/SQL or Oracle-specific SQL, choose an index or partitioning strategy, configure or tune an Oracle Database instance, or explain Oracle-specific features (sequences, PL/SQL packages, MVCC via undo, RAC) — independent of any specific driver or ORM.
---

# Oracle Database

Oracle Database is a mature, enterprise relational database with its own
procedural extension language, **PL/SQL**, and a distinct SQL dialect in
several places where it predates or diverges from later ANSI SQL standards.

## Connecting

```sh
sqlplus app_user/password@localhost:1521/ORCLPDB1
```

Inside SQL*Plus: `DESC table_name` (describe), `SELECT table_name FROM
user_tables;` (list tables owned by the current schema — Oracle has no bare
`SHOW TABLES`), `SET LINESIZE 200 PAGESIZE 50` (formatting for readable
output).

## Sequences and identity

```sql
CREATE SEQUENCE orders_seq START WITH 1 INCREMENT BY 1;

INSERT INTO orders (id, total) VALUES (orders_seq.NEXTVAL, 99.99);

-- Modern Oracle (12c+) also supports standard-SQL identity columns:
CREATE TABLE orders (
  id NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  total NUMBER(10,2)
);
```

Oracle historically required an explicit **sequence** object plus
`.NEXTVAL`/`.CURRVAL` for auto-incrementing keys — there was no `AUTO_
INCREMENT`/`serial` shorthand until `IDENTITY` columns arrived in 12c. Older
Oracle codebases almost always use the sequence pattern; recognize both.

## PL/SQL: stored procedures, functions, packages

```sql
CREATE OR REPLACE PROCEDURE apply_discount(p_order_id IN NUMBER, p_pct IN NUMBER) AS
BEGIN
  UPDATE orders
  SET total = total * (1 - p_pct / 100)
  WHERE id = p_order_id;

  IF SQL%ROWCOUNT = 0 THEN
    RAISE_APPLICATION_ERROR(-20001, 'Order not found: ' || p_order_id);
  END IF;
END;
/
```

PL/SQL is a full procedural language (variables, loops, exception handling
via `EXCEPTION WHEN ... THEN`, cursors) compiled and stored in the database,
not a scripting convenience layered on top of SQL. **Packages** (`CREATE
PACKAGE` / `CREATE PACKAGE BODY`) group related procedures/functions with a
public spec and a private body — Oracle's closest analog to a module or
namespace, and the idiomatic way to organize non-trivial PL/SQL rather than
many loose standalone procedures.

## Row versioning and undo (Oracle's MVCC)

Oracle implements MVCC-style consistent reads using **undo segments**: a
reader sees data as of the start of its query/transaction (via undo, not
row-version chains stored in the table itself as Postgres does). This gives
readers non-blocking consistent snapshots without blocking writers, but a
long-running query against a heavily-updated table can fail with
`ORA-01555: snapshot too old` if the undo it needs has been overwritten —
distinct from anything Postgres or MySQL surfaces this way.

## Partitioning

```sql
CREATE TABLE events (
  id NUMBER,
  occurred DATE
)
PARTITION BY RANGE (occurred) (
  PARTITION p_2026 VALUES LESS THAN (DATE '2027-01-01'),
  PARTITION p_2027 VALUES LESS THAN (DATE '2028-01-01')
);
```

Range, list, and hash partitioning are long-standing, mature Oracle
features, commonly used for large fact/event tables where partition
pruning lets a query skip whole partitions instead of scanning the full
table.

## Common pitfalls

- **`ORA-01555: snapshot too old`** on a long-running report query against
  actively-updated tables — increase undo retention/size, or restructure the
  query to run faster/read a smaller window, rather than treating it as a
  transient fluke.
- **Empty string treated as NULL.** Oracle famously does not distinguish
  `''` from `NULL` for `VARCHAR2` — inserting an empty string stores a NULL,
  which surprises code ported from a database that keeps them distinct.
- **Case-sensitive quoted identifiers** — an unquoted identifier is folded
  to uppercase (`orders` becomes `ORDERS`); a quoted one
  (`"orders"`) is stored and matched exactly as typed, including case —
  mixing quoted and unquoted references to what looks like the same name is
  a common source of "table or view does not exist."
- **Forgetting `COMMIT`** — DDL in Oracle auto-commits, but DML
  (INSERT/UPDATE/DELETE) does not; a session left uncommitted holds locks
  and undo that other sessions may eventually collide with.
- **Confusing `ROWNUM` with `ROW_NUMBER()`.** `ROWNUM` is assigned *before*
  `ORDER BY` is applied in the same query block, so `WHERE ROWNUM <= 10
  ORDER BY total DESC` does NOT reliably return the top 10 by total — wrap
  the ordered query in a subquery and filter `ROWNUM` on the outside, or use
  `ROW_NUMBER() OVER (ORDER BY total DESC)` instead.

## Learn more

- [Oracle Database SQL Language Reference](https://docs.oracle.com/en/database/oracle/oracle-database/)
- [PL/SQL Language Reference](https://docs.oracle.com/en/database/oracle/oracle-database/latest/lnpls/)
- [Oracle: Data Concurrency and Consistency](https://docs.oracle.com/en/database/oracle/oracle-database/latest/cncpt/data-concurrency-and-consistency.html) — undo/MVCC model.
