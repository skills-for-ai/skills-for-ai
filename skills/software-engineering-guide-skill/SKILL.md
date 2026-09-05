---
name: software-engineering-guide-skill
description: Use when the user wants software engineering best-practice guidance grounded in the Software Engineering Guide, e.g. "what does the guide say about X", "review this against best practices", "how should we handle code review / incident management / API design", or any question about ways of working, programming craft, architecture, security, UI/UX, AI, data, automation, operations, or management. For general readers who want to consult and apply the guide, not to edit it. For editing the guide's own repositories, use software-engineering-guide-maintainer-skill instead.
---

# Software Engineering Guide

A reference skill for consulting the **Software Engineering Guide**, an open
guidebook of good practices for software developer teams (startups,
enterprises, and government), spanning 12 parts and about 100 chapters: ways
of working, programming craft, architecture, security, UI/UX, AI, data and
analytics, automation, operations, management, and flow.

Published at <https://software-engineering-guide.github.io/>. Source repo:
<https://github.com/software-engineering-guide/software-engineering-guide>.

## How to find the right chapter

Consult `reference/table-of-contents.md` in this skill for the full part and
chapter list with slugs. Skim the part titles first to find the right area,
then the chapter titles within it, rather than loading the whole file's
contents into a response.

## How to read a chapter

Try these in order and use whichever succeeds first:

1. **Local checkout.** If a `software-engineering-guide` repo is already
   present in the workspace (check the current project, its siblings, and
   any path the user gives you), read the chapter straight from
   `docs/chapters/<slug>.md`. This is the fastest and most reliable path.
2. **Live site.** Otherwise, fetch
   `https://software-engineering-guide.github.io/chapters/<slug>` (WebFetch).
3. **Clone.** If neither is available and the user wants sustained or
   offline use of the guide, offer to clone the repo rather than fetching
   pages one at a time.

Read only the chapters relevant to the question. Each chapter follows a fixed
template (definition, why it matters, practices, pitfalls, checklist,
references), so it is safe to jump straight to the sections that answer the
question.

## Applying the guidance

- Cite what you use: chapter number and title (e.g. "per 2.5 Code review and
  collaboration"), optionally linking the site URL.
- Adapt the guidance to the user's actual context (language, stack, team
  size, regulatory environment) instead of restating the chapter verbatim.
- Quote sparingly; paraphrase and summarize rather than reproducing large
  passages of the chapter.
- The guide is opinionated and vendor-neutral. Where it states a strong
  preference, say so plainly, but note when the user's constraints justify a
  different call.
- If the question spans multiple chapters (common for anything touching
  security, accessibility, or automation, which cut across parts), pull the
  relevant points from each rather than picking just one.

## If the user wants to contribute back

This skill is for reading and applying the guide. If the user wants to fix,
extend, or restructure the guide's own content or its website, hand off to
`software-engineering-guide-maintainer-skill`, or point them at
`CONTRIBUTING.md` in the source repo.
