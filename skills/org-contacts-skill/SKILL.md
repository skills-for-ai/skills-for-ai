---
name: org-contacts-skill
description: Use when asked to manage contacts in Emacs using org-contacts — storing people as Org headlines with properties, searching/completing by name or email, and integrating with message composition — as an Org mode extension (see org-mode-skill), distinct from org-roam's networked-notes model (see org-roam-skill).
---

# Org Contacts Skill

org-contacts is an Emacs package that manages a contact list as plain
Org mode headlines — each person is a headline with properties (email,
phone, address, and any custom fields), stored in one or more ordinary
`.org` files rather than a separate database or proprietary format. See
[[org-mode-skill]] for the underlying headline/properties syntax this
builds on directly.

## Storing a contact

```org
* Alice Example
:PROPERTIES:
:EMAIL: alice@example.com
:PHONE: +1-555-0100
:ADDRESS: 123 Main St
:BIRTHDAY: <1990-05-12>
:END:

Notes about Alice go here as ordinary body text.
```

A contact is just an Org headline with a `PROPERTIES` drawer — the same
generic drawer mechanism Org uses for other metadata (see
[[org-mode-skill]]), so anything Org's ecosystem already does with
properties (searching, exporting, agenda integration) works on contacts
for free, without a contacts-specific data model.

## Core operations

- **Search/completion by name or email** — org-contacts provides
  completion so a contact can be found and inserted (e.g. into an email
  "To:" field) by typing part of their name or address.
- **Email client integration** — commonly wired into Emacs's mail
  composition (`message-mode`), so addressing a message can pull directly
  from the Org-stored contact list rather than a separate address book.
- **Custom properties** — since a contact is just an Org headline,
  arbitrary properties (a nickname, a company, a preferred contact
  method) can be added without any schema migration — just add another
  `:PROPERTY:` line.

## Why store contacts this way

Because it's plain Org text, contacts get version control, full-text
search, and portability for free — no proprietary format, no separate
sync mechanism, and the same editing/searching tools already used for
notes and tasks apply directly to the contact list too.

## Common pitfalls

- **Inconsistent property names across contacts** — `:EMAIL:` on one
  headline and `:E-MAIL:` on another breaks completion/search that
  expects a consistent property key; pick one convention and stick to it.
- **Mixing contact headlines with unrelated notes in the same file**
  without a clear structural separation — makes it harder to point
  org-contacts at exactly the right file(s) to search.
- **Forgetting the properties drawer's strict placement** — it must
  immediately follow the headline (before any body text) or Org won't
  associate it with that headline correctly.

## Learn more

- [org-contacts (Org mode contrib)](https://orgmode.org/worg/org-contrib/org-contacts.html)
- [[org-mode-skill]] for the underlying headline/properties/drawer syntax.
- [[org-roam-skill]] for a different, graph-of-notes approach to related information, including people.
