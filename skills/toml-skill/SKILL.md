---
name: toml-skill
description: Use when asked to write, validate, or debug TOML — tables, arrays of tables, inline tables, and TOML's stricter typing versus YAML/JSON — independent of any specific tool's config schema (Cargo.toml, pyproject.toml, etc.).
---

# TOML Skill

TOML (Tom's Obvious, Minimal Language) is a configuration-file format
designed to be unambiguous and easy to parse — a deliberate reaction
against YAML's implicit-typing footguns (see [[yaml-skill]]'s "Norway
problem") and JSON's lack of comments.

## Syntax basics

```toml
name = "Widget"
price = 9.99
in_stock = true
tags = ["new", "sale"]
release_date = 2026-09-05

[dimensions]
width = 10
height = 5

[owner]
name = "Alice"
contact = { email = "alice@example.com", phone = "555-0100" }  # inline table
```

- `key = value` pairs, one per line; `#` starts a comment (unlike JSON,
  TOML has real comments).
- `[table]` headers introduce a named section — every `key = value` line
  after it belongs to that table until the next header.
- An **inline table** (`{ key = value, ... }`) keeps a small, related
  group on one line rather than opening a full `[table]` section for it.
- Dates/times (`2026-09-05`, or full RFC 3339 datetimes) are a **native
  type**, not a string — no ambiguity about format the way an unquoted
  date can be misread in YAML.

## Arrays of tables

```toml
[[servers]]
name = "alpha"
ip = "10.0.0.1"

[[servers]]
name = "beta"
ip = "10.0.0.2"
```

`[[table]]` (double brackets) appends a new entry to an array of tables —
this is TOML's way of expressing a list of structured records, equivalent
to a YAML list of mappings or a JSON array of objects.

## Dotted keys and nesting

```toml
[server.production]
ip = "10.0.0.1"

# equivalent, without a table header:
server.staging.ip = "10.0.0.2"
```

A dotted key defines nested tables inline without a separate `[table]`
header — useful for a single deeply-nested value without opening a whole
section for it.

## Why TOML over YAML/JSON for config

- **No implicit type coercion ambiguity** — a bare `no`/`yes`/`on`/`off`
  is always a string in TOML; there's no YAML-style boolean-coercion
  surprise.
- **Comments**, unlike JSON.
- **A defined, unambiguous grammar** — TOML's spec is deliberately small
  and has one canonical way to express most structures, reducing the
  "which YAML flavor does this parser implement" problem.

This is why TOML is the standard for tool-specific config that benefits
from being both human-edited and strictly unambiguous: `Cargo.toml`
(Rust), `pyproject.toml` (Python packaging), and many other project
manifests.

## Common pitfalls

- **Redefining the same table twice** — `[server]` appearing twice with
  different keys is an error in most parsers, not a merge; use dotted
  keys or nest properly instead.
- **Mixing `[table]` and `[[array of tables]]` syntax for the same key
  path** — single vs. double brackets mean different things (one section
  vs. one array entry) and aren't interchangeable.
- **Forgetting that a table header applies to everything below it** until
  the next header — a key that was meant to be top-level but placed after
  a `[table]` line silently becomes a member of that table instead.
- **Unquoted dates/numbers formatted unexpectedly** — TOML's native date/
  time and numeric types have a specific required format (e.g. RFC 3339
  for datetimes); a malformed literal is a parse error, not a silently
  misread string the way it might be in YAML.

## Learn more

- [TOML specification](https://toml.io/en/) — the official spec, with a clear side-by-side syntax reference.
- [[yaml-skill]], [[json-skill]] for the adjacent config/data formats TOML is often chosen over or alongside.
