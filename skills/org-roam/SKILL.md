---
name: org-roam
description: Use when asked to build a networked "second brain" of notes in Emacs using org-roam — bidirectional linking, the node/backlink model, and the daily-notes workflow — as an Org mode extension (see org-mode), distinct from org-contacts' single-purpose contact list (see org-contacts).
---

# Org Roam

org-roam is an Emacs package for networked note-taking on top of Org
mode — implementing a Zettelkasten/"second brain" style tool where notes
link to each other bidirectionally and a database tracks those links, so
the structure of the notes emerges from connections rather than a fixed
folder hierarchy. See [[org-mode]] for the underlying Org syntax
(headlines, properties, links) org-roam builds on.

## Core concepts

- **Node** — the fundamental unit: an Org file, or a headline within one,
  identified by a unique `:ID:` property. A node is what gets linked to
  and from.
- **Bidirectional linking** — a standard Org link (`[[id:...][Title]]`)
  from note A to note B is automatically reflected as a visible
  **backlink** on note B, without needing to manually maintain a reverse
  reference — this is org-roam's core value proposition over plain Org
  links.
- **The org-roam database** — a local cache (SQLite) indexing every
  node and link across the whole note collection, which is what makes
  instant search, backlink display, and graph visualization possible
  without re-scanning every file on each query.

## Everyday workflow

```
org-roam-node-find      ; search/create a node by title, with completion
org-roam-node-insert    ; insert a link to a node (creating it if needed)
org-roam-buffer-toggle  ; show the current node's backlinks panel
```

- **`[[`-completion** — typing a link and invoking completion searches
  existing node titles, so linking to (or creating) a related note is a
  fast, low-friction action taken while writing, not a separate filing
  step done afterward.
- **Dailies** — a calendar-backed set of daily note files
  (`org-roam-dailies-*` commands), used as a low-friction capture point
  that can then link out to permanent, topic-focused nodes as ideas
  mature — journal-style capture feeding into the permanent note graph.
- **Live backlinks panel** — a side buffer showing every note that links
  to the current one, updated as you navigate — this is what makes the
  network of connections visible and browsable while working, not just
  stored invisibly in the database.

## Why bidirectional linking matters

Plain Org (or any wiki-style) links are one-directional — a link from A
to B is invisible from B unless someone manually adds a reverse link.
org-roam's whole mechanism exists to make that reverse direction free and
automatic, which is what allows a note collection to genuinely function
as an explorable network rather than a directed tree that only makes
sense read top-down.

## Common pitfalls

- **Creating a new node for every small thought instead of linking to an
  existing one** — fragments the network unnecessarily; searching first
  (org-roam's whole completion workflow is built around this) keeps
  related ideas actually connected.
- **Letting the database get out of sync with the files** — since the
  SQLite cache is derived from the `.org` files, external edits outside
  Emacs (or moving/renaming files without going through org-roam) can
  require an explicit re-sync.
- **Confusing org-roam with org-contacts** — org-roam is a general
  networked-notes tool; [[org-contacts]] is a narrower,
  single-purpose contact list built on plain Org properties, not on
  org-roam's node/backlink database.
- **Treating dailies as the permanent home for ideas** — dailies are
  meant as a capture point; letting everything live only in daily notes
  (rather than linking out to topic-focused permanent nodes) forfeits
  the network-of-ideas benefit org-roam is built for.

## Learn more

- [org-roam documentation](https://www.orgroam.com/)
- [[org-mode]] for the underlying Org syntax org-roam extends.
- [[org-contacts]] for a narrower, single-purpose Org extension by contrast.
