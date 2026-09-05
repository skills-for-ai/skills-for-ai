---
name: united-kingdom-government-digital-and-data-profession-capability-framework-skill
description: Use this skill when someone wants to use the published UK GDAD PCF content — find a role level in the UK Government Digital and Data Profession Capability Framework, read its documents, rate their own skills, or plan their development. Triggers on questions like "what does a senior data analyst need to know", "find my role in the GDAD framework", "help me self-assess against a role level", "what should I learn for X role", or any mention of the UK GDAD PCF, ddat-capability-framework, or uk-gdad.github.io as something to use rather than edit.
---

# UK GDAD PCF — for people using it

This skill is for helping someone use the published UK GDAD Profession
Capability Framework content at <https://uk-gdad.github.io> — not for editing
the repository. If the request is instead about writing or maintaining this
repository's content, use `uk-gdad-maintainer-skill` instead.

## What this is

The UK Government Digital and Data (GDAD) Profession Capability Framework
describes digital and data jobs across UK government: 8 professions, 52
roles, 205 role levels, 183 named skills. This project restates the official
framework as plain files and a website, and adds eight further documents for
every role level. It is a community project, not a government service — for
anything that affects pay, grading, recruitment or promotion, the official
framework at <https://ddat-capability-framework.service.gov.uk/> is the
source that matters, alongside the person's own organisation.

## Finding a role level

Point people at <https://uk-gdad.github.io/roles/> — a searchable finder
across every role level — or search by profession at
<https://uk-gdad.github.io/professions/>. A role level's URL slug looks like
`software-development/software-developer/4-senior-developer`; once you have
it, every sibling document sits at a predictable path (see below).

## The documents available for one role level

Given a slug, these are the pages that exist for it on the website:

| Page | URL | What it is |
| --- | --- | --- |
| Role summary | `/roles/<slug>/` | What the framework says the level is accountable for, and its skills |
| Start here | `/start-here/<slug>/` | A first orientation and a learning pathway |
| Upskilling | `/upskilling/<slug>/` | Courses, articles, videos, books |
| CPD checklist | `/continuing-professional-development/<slug>/` | Things to do to keep developing |
| Assessment, by assessor | `/assessments-by-assessor/<slug>/` | Practice items written for someone else to administer to a candidate, with the answer key held back |
| Assessment, by yourself | `/assessments-by-yourself/<slug>/` | The same four assessment types, to work through alone — try each question before reading the answer |
| Competency assessment, by assessor | `/competency-assessments-by-assessor/<slug>/` | A skill-by-skill matrix an assessor rates a candidate or employee against, 0–4 |
| Competency assessment, by yourself | `/competency-assessments-by-yourself/<slug>/` | The same matrix, generated from its sibling, for you to rate yourself against |
| Skills gap form | `/skills-gap-forms/<slug>/` | A form to compare what you do now against what the level expects — fillable on the page, saved in your own browser |

**Neither pair is interchangeable, in the same way.** For assessments: "by
assessor" is written for whoever is running a hiring panel or capability
review — it holds the answer key back from the candidate. "By yourself" is
the same four assessment types rewritten as practice material, meant to be
read straight through, answer included. Point someone preparing for an
interview at "by yourself"; point someone running one at "by assessor". For
competency assessments, both share the exact same skill matrix, baselines
and behavioural indicators — the only difference is who is filling it in:
"by assessor" is a manager or panel judging someone else, "by yourself" is
the reader judging themselves.

## Self-assessment across the whole framework

<https://uk-gdad.github.io/skills-self-assessment/> is a standalone tool,
independent of any one role level: it lists every skill in the catalogue and
lets someone rate themselves 0 (none) to 4 (expert) against each. Nothing is
sent anywhere or saved on a server — it stays in the browser, and the result
can be downloaded as a spreadsheet.

## Skills across the framework

<https://uk-gdad.github.io/skills/> lists every named skill; each skill's own
page lists every role level that expects it, so someone can see how a skill
like "User focus" is described differently — or identically — at each level
that names it.

## What this project is not

- Not the official framework, and not a substitute for it where pay, grading,
  recruitment or promotion is on the line.
- Not a validated psychometric or competency assessment instrument — every
  assessment and competency document says so in its own advisory section.
- Not a service that stores or submits anything. Every page is static;
  skills gap form answers and self-assessment ratings stay in the reader's
  own browser.

## Style when relaying any of this

Quote the framework's own wording where it matters — do not paraphrase a
skill's expectations into something that sounds tidier than what is
published. If someone asks whether they meet a level, point them at the
relevant document rather than making the judgement yourself; that judgement
is what the documents themselves are built to support.
