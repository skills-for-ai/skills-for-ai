---
name: markdown
description: Use when asked to write or fix Markdown formatting — headings, lists, links, tables, code fences, front matter — or to explain differences between CommonMark and GitHub Flavored Markdown (GFM).
---

# Markdown

Markdown is a lightweight plain-text markup syntax designed to be readable
unrendered. There is no single "Markdown" — **CommonMark** is the strict,
unambiguous specification most tools now implement; **GitHub Flavored
Markdown (GFM)** is CommonMark plus extensions (tables, task lists, strikethrough,
autolinks) used by GitHub, GitLab, and many chat/doc tools.

## Core syntax

```markdown
# Heading 1
## Heading 2

Paragraphs are separated by a **blank line**. A single newline inside a
paragraph is a soft break — it typically renders as if there's no break
at all, not a line break.

- Unordered item
- Another item
  - Nested item (indent to nest)

1. Ordered item
2. Another item

> A blockquote.
> Second line, same quote.

`inline code`

```python
def add(a, b):
    return a + b
```

[Link text](https://example.com "optional title")
![Alt text](image.png)

---
```

- `---` (or `***`/`___`) on its own line is a thematic break (`<hr>`) —
  identical syntax to a YAML front-matter delimiter, which is why front
  matter must be the very first thing in the file to be recognized as such
  rather than as a horizontal rule.
- Headings via leading `#` (ATX style) are near-universal; the older
  underline style (`===`/`---` under a line) is CommonMark-legal but less
  common in generated content.

## GFM extensions

```markdown
| Column A | Column B |
| -------- | -------- |
| a        | b        |

- [x] Done item
- [ ] Open item

~~strikethrough~~

https://example.com  <!-- autolinked without angle brackets in GFM -->
```

Table column alignment: `:---` left, `:---:` center, `---:` right, in the
separator row.

## Front matter

Static-site generators (Jekyll, Hugo, Eleventy, Astro) and many doc tools
read YAML front matter delimited by `---` at the very top of the file:

```markdown
---
title: My Page
date: 2026-09-05
tags: [foo, bar]
---

Body content starts here.
```

This is a convention layered on top of Markdown, not part of CommonMark or
GFM itself — the parser has to be told to look for it.

## Common pitfalls

- **Missing blank line between a list and surrounding text**, or between a
  heading and the next paragraph — many parsers require it to correctly
  separate block elements; without it, lines can merge into unexpected
  structures.
- **Mixing list markers inconsistently** (`-` then `*` for sibling items) —
  legal in CommonMark but some parsers treat a marker change as starting a
  new list, breaking numbering/continuity.
- **Un-escaped literal characters** that are also syntax — a literal `*`,
  `_`, `[`, or `#` at a position the parser reads as markup needs a backslash
  escape (`\*`) or a code span.
- **Relying on single newlines as line breaks.** To force a hard break inside
  a paragraph, end the line with two trailing spaces or an explicit `<br>` —
  a bare newline usually collapses to a space when rendered.
- **Tabs vs. spaces for nested list indentation** — behavior differs across
  parsers; prefer consistent spaces (commonly 2 or 4) for nesting.

## Learn more

- [CommonMark spec](https://spec.commonmark.org/) and its
  [interactive dingus](https://spec.commonmark.org/dingus/) for checking how
  a snippet parses.
- [GitHub Flavored Markdown spec](https://github.github.com/gfm/)
- [GitHub's Markdown guide](https://docs.github.com/en/get-started/writing-on-github)
