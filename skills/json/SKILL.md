---
name: json
description: Use when asked to write, validate, or debug JSON — syntax rules, JSON Schema validation, JSON Lines (NDJSON), or common serialization pitfalls (numbers, duplicate keys, trailing commas) — independent of any specific language's JSON library.
---

# JSON

JSON (JavaScript Object Notation) is a minimal, strict data-interchange
format: a small, fixed set of value types and no comments, no trailing
commas, and no unquoted keys — deliberately less flexible than JavaScript
object-literal syntax it was named after.

## Syntax

```json
{
  "name": "Widget",
  "price": 9.99,
  "inStock": true,
  "tags": ["new", "sale"],
  "description": null,
  "dimensions": { "width": 10, "height": 5 }
}
```

The complete set of value types: **object** (`{ }`, unordered string-keyed
map), **array** (`[ ]`, ordered), **string** (double-quoted only, no single
quotes), **number** (no distinction between integer and float in the format
itself), **boolean** (`true`/`false`), and **null**. There is no date type,
no `undefined`, no comment syntax, and — unlike JavaScript object literals —
every key must be double-quoted and a trailing comma after the last item in
an object or array is a syntax error, not just a lint warning.

## JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "required": ["name", "price"],
  "properties": {
    "name": { "type": "string" },
    "price": { "type": "number", "minimum": 0 },
    "tags": { "type": "array", "items": { "type": "string" } }
  },
  "additionalProperties": false
}
```

JSON Schema is a separate specification (also expressed in JSON) for
describing and validating the shape of JSON data — required fields, types,
value ranges, string patterns. It's what powers structured-output
validation in most API tooling (OpenAPI request/response bodies, LLM
function-calling parameter schemas, config-file validation) and is worth
reaching for whenever "is this JSON in the shape I expect" needs to be
checked programmatically rather than assumed.

## JSON Lines (NDJSON)

```
{"event": "login", "user": "alice", "ts": "2026-09-05T10:00:00Z"}
{"event": "logout", "user": "alice", "ts": "2026-09-05T10:05:00Z"}
```

JSON Lines (also called NDJSON) is one complete, independent JSON value per
line — not a single JSON array spanning the file. This makes it streamable
(a consumer can process and discard each line without holding the whole
file in memory) and appendable (a new record is just a new line), which is
why it shows up for logs, event streams, and large record-oriented exports
where a single top-level JSON array would need the whole file parsed before
any record is usable.

## Common pitfalls

- **Trailing commas and single-quoted strings** — both are silently
  accepted by JavaScript object literals and by some lenient parsers/config
  formats (JSON5, JSONC), but are invalid in strict JSON and will fail a
  standards-compliant parser; don't assume a snippet that "looks like JSON"
  round-trips through `JSON.parse`/`json.loads` unchanged.
- **Large integers losing precision.** JSON itself places no limit on
  number size or precision, but many parsers deserialize numbers into a
  language's native floating-point type (JavaScript's `number` is a
  double), which can't represent large integers (e.g. a 64-bit ID) exactly.
  When an ID or a monetary amount must round-trip exactly, send it as a
  **string**, not a bare JSON number.
- **Duplicate keys in the same object.** The JSON spec doesn't define
  behavior when a key appears twice — most parsers silently keep only the
  last occurrence, but this isn't guaranteed across every implementation;
  don't rely on either behavior, and don't produce JSON with duplicate keys
  in the first place.
- **No native date type.** Dates are conventionally sent as ISO 8601
  strings (`"2026-09-05T10:00:00Z"`) by convention, not by anything JSON
  itself enforces — both ends of an API need to agree on the format and
  actually parse/format it, since a naive consumer will otherwise treat it
  as an opaque string.
- **Comments.** Standard JSON has none. If you need comments in a
  JSON-like config file, that's JSON5 or JSONC (both supersets some tools
  accept), not JSON — don't write `//` comments into a file a strict JSON
  parser will read.

## Learn more

- [JSON specification (ECMA-404)](https://www.ecma-international.org/publications-and-standards/standards/ecma-404/) / [RFC 8259](https://www.rfc-editor.org/rfc/rfc8259)
- [json.org](https://www.json.org/json-en.html) — the original, diagram-based syntax reference.
- [JSON Schema](https://json-schema.org/) — specification and documentation for validating JSON shape.
- [JSON Lines](https://jsonlines.org/) — the NDJSON convention.
