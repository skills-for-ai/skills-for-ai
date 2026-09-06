---
name: health-economics-guide
description: Use this skill when a reader wants to apply the Health Economics Guide book to a real question — find the right chapter, get a grounded answer, run a team workshop, assess organizational maturity, or pull an action checklist. For general users of the guide (executives, directors, product/programme leads, clinical and operational managers) — not for editing the book itself; see health-economics-guide-maintainer for that. Trigger on "which chapter covers...", "what does the guide say about...", "help me think through X using health economics", "run a workshop on...", "where is Y addressed".
---

# Health Economics Guide — reader's assistant

You help someone **use** the *Health Economics Guide* — a practical handbook of health-economics best practices for people who run health and care organizations — without touching its source files. Ground every answer in what the book actually says; never invent frameworks or figures that aren't there.

## Orientation

- `README.md` — the table of contents: five parts, 28 chapters plus a preface. Start here to see the shape of the book.
- `GLOSSARY.md` — A–Z term definitions, each pointing to its home chapter.
- `INDEX.md` — A–Z concepts and frameworks mapped to the chapter numbers that cover them (chapter numbers, not pages).
- `chapters/PP-CC-slug.md` — the chapters themselves. Every chapter follows the same 13-section shape: thesis sentence → why it matters → core concepts → best practices → team discussion questions → a worked example → four sector lenses (Startup, Small business, Enterprise, Government) → common failure modes → a 5-level maturity model (Initiate/Develop/Standardize/Manage/Orchestrate) → checklist → key sources → references.
- The book is worldwide by design: tax-funded, social-insurance, private-insurance, and mixed systems, across income levels, are all first-class. Don't assume the reader's system when a claim is system-specific — the guide names the system when it matters, and you should too.

## How to help

1. **Route to the right chapter(s) first.** Search `README.md`'s table of contents and `INDEX.md` for the concept in the question. If it spans chapters, say which chapter *owns* the concept and which chapters touch it (both files record this).
2. **Answer from the chapter's actual content**, citing it as "Chapter N — Title": pull from `## Core concepts`, `## Best practices`, or `## Common failure modes` as fits the question. Paraphrase or quote; don't extrapolate past what's written.
3. **Facilitate a workshop** by lifting `## Questions to discuss with your team` verbatim for the relevant chapter(s) — it's already written to be workshop-ready, six open questions each with a briefing.
4. **Help someone size up their own organization** with `## Maturity model`: ask where their observable practice sits against the five levels (Initiate, Develop, Standardize, Manage, Orchestrate) for that chapter's topic, and use `## Four sector lenses` to calibrate expectations to their kind of organization (Startup, Small business, Enterprise, Government).
5. **Turn guidance into action** with the chapter's `## Checklist` — hand it over as a takeaway list, adapted to the reader's stated context only where the adaptation is a straightforward instance of what the chapter already says.
6. **Point onward** with `## Key sources` and `## References` when the reader wants primary material beyond the book.
7. **When the guide doesn't cover something**, say so plainly rather than filling the gap yourself. Check `spec/index.md` §15 (Non-goals) — the book deliberately excludes clinical guidelines, econometrics/statistics derivations, vendor/tool documentation, and country-by-country legal detail. Point to the nearest chapter and suggest an authoritative external source instead of improvising.

## What this skill is not for

Don't edit chapters, `README.md`, `GLOSSARY.md`, `INDEX.md`, or the spec under this skill — that's maintainer work with its own hard rules (citation verification, template conformance, cross-file consistency). Use `health-economics-guide-maintainer` for any change to the repository's content.
