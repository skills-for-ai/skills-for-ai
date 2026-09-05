---
name: mysql-database-skill
description: Use when asked to write or debug MySQL-specific SQL, choose a storage engine or index type, configure or tune a MySQL/MariaDB instance, or explain MySQL-specific behavior (InnoDB locking, replication, the SQL-mode/strict-mode differences from standard SQL) — independent of any specific ORM or client library.
---

# MySQL Database Skill

MySQL is a widely-deployed open-source relational database (also forked as
MariaDB, which shares most syntax and behavior described here unless noted).
It's historically favored for web-application workloads and has a somewhat
looser default SQL dialect than PostgreSQL unless strict mode is enabled.

## Connecting

```sh
mysql -h localhost -u app_user -p app_db      # interactive CLI, prompts for password
mysql --host=localhost --user=app_user --password=... app_db
```

Inside the CLI: `SHOW TABLES;`, `DESCRIBE table_name;`, `SHOW DATABASES;`,
`SHOW CREATE TABLE table_name;` (full DDL for a table), `EXPLAIN SELECT ...`
(query plan).

## Storage engines

```sql
CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  total DECIMAL(10,2) NOT NULL
) ENGINE=InnoDB;
```

**InnoDB** is the default and almost-always-correct choice: row-level
locking, full ACID transactions, foreign key support, crash recovery. The
older **MyISAM** engine lacks transactions and foreign keys and uses
table-level locking — it shows up in legacy schemas and in some read-heavy
full-text-search cases, but shouldn't be chosen for new transactional
tables.

## SQL mode and strict mode

```sql
SELECT @@sql_mode;
SET SESSION sql_mode = 'STRICT_TRANS_TABLES,NO_ZERO_DATE';
```

By default in older MySQL configurations (less so in modern default
installs), invalid data could be silently truncated or coerced rather than
rejected — inserting a too-long string could silently truncate it instead of
erroring. `STRICT_TRANS_TABLES` (or `STRICT_ALL_TABLES`) turns those into
real errors, matching how most other databases behave by default. Check
`sql_mode` early when debugging "that value looks wrong but no error was
raised."

## Auto-increment, upserts, and common syntax

```sql
INSERT INTO users (email, name) VALUES ('a@example.com', 'A')
ON DUPLICATE KEY UPDATE name = VALUES(name);   -- MySQL's upsert syntax

SELECT * FROM orders LIMIT 10 OFFSET 20;       -- pagination
SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM users;
```

`ON DUPLICATE KEY UPDATE` is MySQL's upsert idiom, distinct from
PostgreSQL's `ON CONFLICT` or SQL Server's `MERGE` — not portable syntax
across databases despite doing the same conceptual job.

## Replication and locking basics

- MySQL supports statement-based, row-based, and mixed **binlog** formats
  for replication; row-based is generally the safer default for correctness
  (statement-based can replicate non-deterministic statements
  inconsistently).
- InnoDB's default isolation level is **REPEATABLE READ** (stricter than
  PostgreSQL's default of READ COMMITTED) — this changes what phantom-read
  and gap-locking behavior to expect under concurrent writes; a deadlock or
  lock-wait-timeout under REPEATABLE READ can appear in scenarios that
  wouldn't lock the same way under READ COMMITTED.

## Common pitfalls

- **Relying on non-strict-mode silent coercion** — as above, verify
  `sql_mode` rather than assuming an insert that "worked" actually stored
  the value you sent.
- **Case-sensitivity of table names depending on the OS/filesystem** —
  on Linux, table names are typically case-sensitive (tied to the
  filesystem); on Windows/macOS they're typically not. Code that works
  locally on macOS can break in Linux production for this exact reason.
- **Implicit type coercion in comparisons** — comparing a string column to a
  number (`WHERE id_string = 123`) can coerce and match unexpected rows, or
  silently prevent an index from being used.
- **Choosing MyISAM for a new transactional table** out of old habit or a
  copied tutorial — InnoDB should be the default choice today.
- **Forgetting REPEATABLE READ's locking implications** under InnoDB when
  porting concurrency-sensitive code from a database that defaults to READ
  COMMITTED.

## Learn more

- [MySQL Reference Manual](https://dev.mysql.com/doc/refman/en/)
- [MySQL: SQL Mode](https://dev.mysql.com/doc/refman/en/sql-mode.html)
- [MySQL: InnoDB Locking and Transaction Model](https://dev.mysql.com/doc/refman/en/innodb-locking-transaction-model.html)
- [MariaDB Knowledge Base](https://mariadb.com/kb/en/) — for MariaDB-specific divergence.
