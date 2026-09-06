---
name: yaml
description: Use when asked to write, validate, or debug YAML — indentation-based syntax, anchors/aliases, multi-document files, or common parsing pitfalls (the Norway problem, tabs, string quoting) — independent of any specific tool's YAML dialect (CI config, Kubernetes manifests, etc.).
---

# YAML

YAML ("YAML Ain't Markup Language") is a human-readable data-serialization
format built on significant indentation — no braces or brackets for
structure, which makes it easy to read but also means whitespace errors
are syntax errors.

## Syntax basics

```yaml
name: Widget
price: 9.99
in_stock: true
tags:
  - new
  - sale
description: null
dimensions:
  width: 10
  height: 5
notes: |
  This is a literal block.
  Line breaks are preserved.
summary: >
  This is a folded block.
  Line breaks become spaces.
```

- **Indentation defines nesting** — always spaces, never tabs (YAML
  forbids tabs for indentation specifically because tab width isn't
  standardized).
- **`|` (literal block)** preserves line breaks exactly as written;
  **`>` (folded block)** joins lines with spaces, useful for long prose
  that should still read as one paragraph in the source.
- A list item is a line starting with `- `; a mapping key is `key:`
  followed by a space and the value (the space after the colon is
  required — `key:value` with no space is not valid YAML mapping syntax).

## Anchors and aliases

```yaml
defaults: &defaults
  adapter: postgres
  timeout: 30

production:
  <<: *defaults
  database: prod_db

development:
  <<: *defaults
  database: dev_db
```

`&name` defines an anchor (a reusable value); `*name` references it;
`<<:` merges a mapping's keys into the current one. This is YAML's
built-in way to avoid repeating the same block — widely used in CI config
and Kubernetes manifests to share common settings across otherwise
similar blocks.

## Multi-document files

```yaml
---
document: 1
---
document: 2
```

`---` separates multiple YAML documents within one file (and can also
mark the start of a single document); `...` optionally marks a document's
end. Tools that expect one document per file (many config loaders) will
only read the first `---`-delimited block unless explicitly told to parse
multiple.

## Common pitfalls

- **The "Norway problem."** Unquoted `no`, `yes`, `on`, `off`, `true`,
  `false` are parsed as booleans in YAML 1.1 (the version many real
  parsers still implement) — a country code `NO` (Norway) or a string
  value `"no"` meant as text can silently become the boolean `false`.
  Always quote a string value that could be misread this way
  (`country: "NO"`).
- **Leading zeros and version-like strings becoming numbers.** `version:
  1.20` can parse as the number `1.2` (dropping the trailing zero) unless
  quoted as a string: `version: "1.20"`. The same applies to a value like
  `zip_code: 07030` — quote it, or it becomes a stripped-leading-zero
  number or is even rejected as invalid octal-looking syntax depending on
  the parser.
- **Tabs in indentation** — invalid YAML; an editor that silently inserts
  tabs (common if YAML editing isn't configured to force spaces) produces
  a parse error that can be confusing to spot visually.
- **Inconsistent indentation width** between sibling levels — YAML
  doesn't require a fixed indent size, but it must be *consistent* within
  a given nesting level; mixing 2-space and 4-space indentation at
  different points in the same file is a common source of "why did this
  suddenly become a sibling instead of a child."
- **Trailing whitespace after a value** on the same line as a block
  scalar indicator (`|` or `>`) can silently change how the block is
  parsed — keep the line clean immediately after the indicator.
- **Assuming YAML 1.1 and 1.2 behave identically** — the Norway problem
  and octal-number parsing differ between YAML 1.1 (many older parsers,
  including PyYAML's default loader) and YAML 1.2 (which narrowed the set
  of implicit boolean/octal conversions); check which version a specific
  tool implements when a value parses unexpectedly.

## Common uses

YAML is the default configuration format for most CI systems (GitHub
Actions, GitLab CI), Kubernetes manifests, Docker Compose, and Ansible
playbooks — each layers its own schema/conventions on top of plain YAML
syntax, so "is this valid YAML" and "is this a valid GitHub Actions
workflow" are different (the second, stricter) questions.

## Learn more

- [YAML specification](https://yaml.org/spec/1.2.2/) — the official 1.2 spec.
- [YAML Lint](http://www.yamllint.com/) — a quick online syntax validator.
- [The Norway Problem](https://hitchdev.com/strictyaml/why/implicit-typing-removed/) — a detailed writeup of the boolean/typing pitfalls above.
- [[json]] for the simpler, stricter data format YAML is often used as a more human-friendly alternative to.
