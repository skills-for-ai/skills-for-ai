---
name: sqlite-database
description: Use when asked to write or debug SQLite-specific SQL, understand its dynamic/manifest typing, configure WAL mode or concurrency behavior, or decide whether SQLite fits a given use case — independent of any specific driver or ORM.
---

# SQLite Database

SQLite is a serverless, embedded, single-file relational database — the
engine runs in-process with the application, with no separate database
server, network protocol, or admin daemon. It's the most widely deployed
database engine in the world by unit count (shipped inside browsers, phones,
and countless applications), not a lightweight toy.

## Connecting

```sh
sqlite3 app.db          # opens (creating if absent) a single-file database
```

Inside the CLI: `.tables` (list tables), `.schema table_name` (show DDL),
`.mode column` / `.headers on` (readable query output), `.backup out.db`
(hot backup while the DB is in use).

## Dynamic typing (type affinity, not enforcement)

```sql
CREATE TABLE items (
  id INTEGER PRIMARY KEY,
  name TEXT,
  price NUMERIC
);

INSERT INTO items (name, price) VALUES ('widget', 'not a number');  -- succeeds by default!
```

Unlike most SQL databases, a column's declared type in SQLite is an
**affinity** (a preference for how to store/compare a value), not a strict
constraint — SQLite will happily store a string in a `NUMERIC` column unless
`STRICT` tables (SQLite 3.37+) are used:

```sql
CREATE TABLE items (
  id INTEGER PRIMARY KEY,
  name TEXT,
  price NUMERIC
) STRICT;   -- now type mismatches are rejected
```

Use `STRICT` on new tables unless you specifically need SQLite's flexible
typing (e.g. a column that legitimately holds mixed types).

## Concurrency: journal mode and WAL

```sql
PRAGMA journal_mode = WAL;   -- Write-Ahead Logging: readers don't block writers
PRAGMA busy_timeout = 5000;  -- wait up to 5s for a lock instead of failing immediately
```

By default (rollback-journal mode), SQLite allows many concurrent readers
**or** one writer, not both at once — a writer blocks all readers for the
duration of a transaction. **WAL mode** changes this so readers see a
consistent snapshot while a writer proceeds concurrently, which is close to
mandatory for any application with concurrent access rather than a single
process. `busy_timeout` avoids `SQLITE_BUSY` errors surfacing immediately
under lock contention.

## `ROWID`, `INTEGER PRIMARY KEY`, and `AUTOINCREMENT`

```sql
CREATE TABLE t (id INTEGER PRIMARY KEY, name TEXT);   -- id is an alias for the internal rowid — fast, and reused after deletes
CREATE TABLE t2 (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT); -- guarantees ids are never reused, small extra overhead
```

Every ordinary SQLite table has an implicit `rowid` unless declared
`WITHOUT ROWID`; a column declared exactly `INTEGER PRIMARY KEY` becomes an
alias for it, making lookups by that column as fast as SQLite gets.
`AUTOINCREMENT` is opt-in and specifically prevents id reuse after a row is
deleted — most schemas don't need it and can skip the extra bookkeeping.

## When SQLite fits (and when it doesn't)

Well suited to: embedded/mobile apps, local caches, single-user desktop
tools, test fixtures, and even moderate-write-volume server workloads in WAL
mode. Less suited to: many concurrent writers hammering the same database
file from separate processes/machines (there's still one writer at a time),
or a use case that genuinely needs a network-accessible database server with
per-connection auth/roles.

## Common pitfalls

- **Assuming column types are enforced** without `STRICT` — validate types
  in application code or add `STRICT`/`CHECK` constraints rather than
  trusting the schema alone.
- **Not enabling WAL mode** for any app with more than one reader/writer at
  a time, then diagnosing the resulting contention as something else.
- **Forgetting foreign keys are off by default** — `PRAGMA foreign_keys =
  ON;` must be set per connection (it's not a persistent database setting);
  a driver/ORM that doesn't set it leaves referential integrity
  unenforced silently.
- **Treating a `.db` file on a network filesystem (NFS, some cloud-synced
  folders) as safe for concurrent access** — SQLite's locking assumes a
  local filesystem with working `fcntl`/`flock` semantics; on some network
  filesystems this is unreliable and can corrupt the database under
  concurrent access.

## Learn more

- [SQLite documentation](https://www.sqlite.org/docs.html)
- [SQLite: Type Affinity](https://www.sqlite.org/datatype3.html)
- [SQLite: Write-Ahead Logging](https://www.sqlite.org/wal.html)
- [SQLite: Appropriate Uses For SQLite](https://www.sqlite.org/whentouse.html)
