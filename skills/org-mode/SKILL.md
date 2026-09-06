---
name: org-mode
description: Use when asked to write or edit Org mode files (.org) — headline/outline syntax, TODO workflows, tables, links, properties, the agenda, or Babel code blocks — whether inside Emacs or as a plain-text format read by other tools.
---

# Org Mode

Org mode is a plain-text outlining, notes, and task-management format built
into Emacs (`org-mode`), and readable/writable by other tools (Logseq,
org-roam, static-site generators) because the syntax itself is simple and
line-oriented.

## Headlines and structure

```org
* Top-level headline
** Second-level headline
*** TODO Write the report                                        :work:
    DEADLINE: <2026-09-12 Sat>
    Body text and notes go here, indented under the headline.
**** DONE Draft outline
     CLOSED: [2026-09-01 Tue 14:30]
```

- Leading `*` count is the outline depth — not indentation.
- `TODO` / `DONE` (and any custom keywords defined via `#+TODO:`) are **task
  states**, written right after the stars.
- Trailing `:tag1:tag2:` are tags, inherited by sub-headlines unless
  overridden.
- `Tab` on a headline cycles that subtree's fold state; `S-Tab` cycles the
  whole buffer's global fold state (in Emacs).

## Dates, scheduling, and the agenda

- `<2026-09-12 Sat>` — an active timestamp, appears in the agenda.
- `[2026-09-12 Sat]` — an inactive timestamp, recorded but not agenda-visible.
- `SCHEDULED: <...>` / `DEADLINE: <...>` — planning lines right under a
  headline; `<2026-09-12 Sat +1w>` repeats weekly.
- `C-c a` opens the agenda view (in Emacs), aggregating TODOs/deadlines across
  all files in `org-agenda-files`.

## Links, properties, tables

```org
[[https://orgmode.org][Org mode homepage]]
[[file:./notes.org::*Some headline][Jump to a headline in another file]]

:PROPERTIES:
:ID:       a1b2c3d4-...
:EFFORT:   2:00
:END:

| Name  | Qty | Price |
|-------+-----+-------|
| Widget|   3 | 9.99  |
| Gadget|   1 | 19.99 |
#+TBLFM: $3=@2$2*1.1
```

- A `PROPERTIES` drawer attaches structured key/value metadata to a headline
  (used heavily by org-roam for `:ID:`, and by the agenda for `:EFFORT:`).
- Tables auto-align on `Tab`; `#+TBLFM:` defines spreadsheet-style formulas
  recalculated with `C-c C-c` on the formula line.

## Babel (executable code blocks)

```org
#+begin_src python :results output
print(2 + 2)
#+end_src

#+RESULTS:
: 4
```

`C-c C-c` inside the block executes it and inserts a `#+RESULTS:` block below.
Babel supports dozens of languages this way and can pass results between
blocks (`:var x=other-block`), which is what makes Org usable as a literate
notebook, not just an outline.

## Export

`#+TITLE:`, `#+AUTHOR:`, `#+OPTIONS:` are document-level keywords read by the
exporter. `C-c C-e` opens the export dispatcher (Markdown, HTML, LaTeX/PDF,
ODT, and more via `ox-*` backends).

## Common pitfalls

- **Confusing headline depth with indentation.** Body text under a headline
  should be indented for readability, but what controls outline structure is
  the `*` count on headline lines, not whitespace.
- **Active vs. inactive timestamps.** Using `[...]` when you meant the agenda
  to pick the date up (`<...>`) is the single most common reason "it's not
  showing up in my agenda."
- **Editing a table's alignment by hand.** Let `Tab` (or `C-c C-c` on a
  formula row) redo the column widths; hand-editing pipe positions drifts out
  of alignment as content changes.
- **Forgetting `:results output` vs `:results value`** in a Babel header —
  `output` captures everything printed to stdout, `value` captures the block's
  final expression value; using the wrong one gives an empty or wrong
  `#+RESULTS:`.

## Learn more

- [Org mode homepage](https://orgmode.org/)
- [Org mode manual](https://orgmode.org/manual/) — the full reference (also
  built into Emacs via `C-h i` → Org Mode).
- [Org Babel languages reference](https://orgmode.org/worg/org-contrib/babel/languages/index.html)
- [org-roam](https://www.orgroam.com/) — networked-notes layer on top of Org's
  linking and properties.
