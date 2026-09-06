---
name: mariadb-database
description: Use when asked to write or debug MariaDB-specific SQL, choose a storage engine, or explain where MariaDB diverges from MySQL (syntax it added, features it dropped, replication/compatibility gaps) — independent of any specific ORM or client library. For syntax and behavior MariaDB shares with MySQL, see mysql-database.
---

# MariaDB Database

MariaDB is a fork of MySQL, created by MySQL's original developers after
Oracle's acquisition of MySQL, and remains largely wire- and
SQL-compatible with it. Most of [[mysql-database]] applies directly —
this skill covers what's specifically different.

## Connecting

```sh
mariadb -h localhost -u app_user -p app_db     # the modern client binary name
mysql -h localhost -u app_user -p app_db       # still works — kept as a compatibility alias
```

The client and server binaries were renamed from `mysql`/`mysqld` to
`mariadb`/`mariadbd` (MariaDB 10.4+), with the old names kept as symlinks —
either works, but tooling/scripts increasingly assume the new names.

## Where it diverges from MySQL

- **Storage engines** — MariaDB ships engines MySQL doesn't by default:
  **Aria** (a crash-safe MyISAM successor, used for some system tables),
  **ColumnStore** (columnar, analytics-oriented), and historically shipped
  **XtraDB** as its default InnoDB-compatible engine before reverting to
  InnoDB itself in modern versions. Don't assume an engine name from a
  MariaDB schema exists in MySQL, or vice versa.
- **JSON is not a real type.** MariaDB's `JSON` is a `LONGTEXT` alias with a
  `CHECK` constraint enforcing valid JSON — not a dedicated binary type like
  MySQL's `JSON` or Postgres's `jsonb`. Functions like `JSON_EXTRACT` still
  work, but there's no dedicated storage or indexing benefit the type name
  might imply.
- **Sequences** — MariaDB (10.3+) added standard-SQL `CREATE SEQUENCE` /
  `NEXTVAL`/`CURRVAL`, an Oracle/Postgres-style construct MySQL doesn't have;
  MySQL only offers `AUTO_INCREMENT`.
- **`RETURNING`** — MariaDB (10.5+) supports `INSERT ... RETURNING` and
  `DELETE ... RETURNING`, which plain MySQL does not.
- **Replication compatibility is one-directional and version-sensitive** — a
  MariaDB replica can often replicate from a MySQL primary (and vice versa)
  within nearby versions, but this is not guaranteed across all version
  combinations, and the binlog formats have been diverging feature-by-feature
  over time; check current compatibility notes rather than assuming it works
  across arbitrary versions.
- **Feature and version-number timelines have diverged** — MariaDB's version
  numbers no longer track MySQL's (MariaDB jumped straight from 5.5 to 10.0
  specifically to signal this), and each project has since added features
  the other hasn't: window functions and CTEs arrived in MariaDB slightly
  ahead of MySQL, for example, while some newer MySQL features (X DevAPI,
  the newer JSON binary type's specific functions) have no MariaDB
  equivalent.

## Common pitfalls

- **Assuming a MySQL-specific feature exists unchanged in MariaDB, or vice
  versa** — the two have accumulated real divergences (see above); check
  the target server's actual version and docs rather than assuming
  drop-in compatibility for anything beyond core SQL.
- **Treating `JSON` columns as indexed/binary storage** — as above, it's
  text with a validation constraint; add a generated column + index on a
  specific JSON path if you need indexed lookups into it.
- **Assuming a MySQL client library/driver "just works"** — most do, because
  the wire protocol has stayed compatible, but driver-level feature checks
  (e.g. querying `SELECT VERSION()` to branch behavior) sometimes
  mis-detect MariaDB as an old MySQL version or vice versa; check how a
  specific driver reports/handles this.
- **Porting `CREATE SEQUENCE` or `RETURNING` SQL to plain MySQL** — neither
  exists there; use `AUTO_INCREMENT` and a separate `SELECT` instead.

## Learn more

- [MariaDB Knowledge Base](https://mariadb.com/kb/en/) — the primary
  reference.
- [MariaDB vs MySQL: Compatibility](https://mariadb.com/kb/en/mariadb-vs-mysql-compatibility/) —
  the maintained list of divergences.
- [[mysql-database]] for everything the two share.
