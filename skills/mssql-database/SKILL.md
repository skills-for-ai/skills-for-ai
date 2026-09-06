---
name: mssql-database
description: Use when asked to write or debug T-SQL for Microsoft SQL Server, choose an index or isolation level, configure or tune a SQL Server instance, or explain SQL Server-specific features (T-SQL extensions, the query optimizer, Always On/replication) — independent of any specific driver or ORM.
---

# Microsoft SQL Server (MSSQL) Database

Microsoft SQL Server uses **T-SQL** (Transact-SQL), Microsoft's SQL dialect
with real procedural extensions (variables, control flow, error handling)
built directly into the query language, not bolted on as a separate stored
procedure language.

## Connecting

```sh
sqlcmd -S localhost -U app_user -P '...' -d app_db     # classic CLI
# or the newer, cross-platform `mssql-cli` / Azure Data Studio
```

Inside `sqlcmd` (or any T-SQL script): `GO` terminates a batch (not part of
T-SQL itself — it's a client-side batch separator most tools recognize).

## T-SQL basics and procedural extensions

```sql
DECLARE @threshold INT = 100;

SELECT TOP 10 *
FROM orders
WHERE total > @threshold
ORDER BY created_at DESC;

IF EXISTS (SELECT 1 FROM users WHERE email = @email)
BEGIN
  UPDATE users SET last_seen = SYSUTCDATETIME() WHERE email = @email;
END
ELSE
BEGIN
  INSERT INTO users (email) VALUES (@email);
END
```

- `TOP n` (not `LIMIT`) restricts row count — a SQL Server-specific
  pagination idiom, though `OFFSET ... FETCH NEXT n ROWS ONLY` (standard SQL
  syntax) is also supported and more portable.
- `DECLARE`, `IF`/`BEGIN`/`END`, `WHILE`, and `TRY`/`CATCH` are native T-SQL
  control-flow constructs usable directly in a script or a stored procedure,
  not only inside a separate PL-style language.

## Upsert and error handling

```sql
MERGE INTO users AS target
USING (SELECT @email AS email) AS source
ON target.email = source.email
WHEN MATCHED THEN UPDATE SET last_seen = SYSUTCDATETIME()
WHEN NOT MATCHED THEN INSERT (email) VALUES (source.email);

BEGIN TRY
  BEGIN TRANSACTION;
  -- statements
  COMMIT;
END TRY
BEGIN CATCH
  ROLLBACK;
  THROW;
END CATCH;
```

`MERGE` is T-SQL's standard-SQL-derived upsert statement (also available in
Oracle, less directly in MySQL/Postgres, which use their own upsert syntax
instead). `TRY`/`CATCH` plus `THROW`/`RAISERROR` is T-SQL's structured error
handling, closer to a general-purpose language's exception handling than
most other SQL dialects offer natively.

## Indexes and isolation

- SQL Server distinguishes a **clustered index** (defines the physical row
  order on disk — a table can have at most one) from **nonclustered indexes**
  (separate structures pointing back to the clustered key or a heap row
  locator). Choosing the clustering key well (typically a narrow,
  ever-increasing key) matters more here than in databases without this
  distinction.
- Default isolation level is **READ COMMITTED**, but SQL Server also offers
  **READ COMMITTED SNAPSHOT** and **SNAPSHOT** isolation (row-versioning,
  similar in spirit to Postgres's MVCC) as an alternative to
  lock-based READ COMMITTED, reducing reader/writer blocking at the cost of
  tempdb overhead — worth enabling explicitly on write-heavy systems
  suffering from blocking chains.

## Common pitfalls

- **Confusing `GO` for a T-SQL keyword** — it's a batch separator recognized
  by client tools (`sqlcmd`, SSMS), not part of the T-SQL language itself; it
  can't be used inside a stored procedure body or parameterized from a
  driver the way a real statement can.
- **NULL comparison surprises shared with standard SQL** — `= NULL` never
  matches; use `IS NULL`. T-SQL additionally has `SET ANSI_NULLS`, which
  changes this behavior for `=`/`<>` against NULL in older compatibility
  modes — check it if inherited code behaves unexpectedly around NULLs.
- **Implicit conversions silently changing plan shape or truncating data**
  — comparing mismatched types (e.g. `nvarchar` vs `varchar`, or a string
  literal without the `N` prefix against an `nvarchar` column) can prevent
  index usage or silently mangle non-ASCII data.
- **Choosing a poor clustering key** (a wide key, or a GUID generated
  randomly rather than sequentially) — causes page splits and
  fragmentation under heavy insert load; prefer a narrow, sequential key
  (an identity column, or `NEWSEQUENTIALID()` over `NEWID()` if a GUID is
  required) for the clustered index.

## Learn more

- [SQL Server T-SQL reference](https://learn.microsoft.com/en-us/sql/t-sql/language-reference)
- [SQL Server transaction isolation levels](https://learn.microsoft.com/en-us/dotnet/framework/data/adonet/sql/transaction-isolation-levels)
- [Clustered and nonclustered indexes](https://learn.microsoft.com/en-us/sql/relational-databases/indexes/clustered-and-nonclustered-indexes-described)
