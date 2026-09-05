---
name: organizational-development-skill
description: Helps someone use this repository's organizational development (OD) guide to diagnose a real workplace problem and pick the right framework — a diagnostic model, change model, culture model, or intervention — with its evidence strength, use-when/do-not-use-when boundaries, and a worked example for their audience (health care, software, or executive). Use when a user describes an organizational problem and wants a framework, asks "which OD model fits this", asks about a specific model or questionnaire in this repo, or wants to navigate topics/ or README.md.
---

# Using the organizational development guide

This repository is a practitioner's guide, not a textbook to summarize from
memory. Its whole point is that most OD frameworks are weaker than they sound,
so **always open the actual file** before recommending or describing a model —
do not answer from general knowledge of "the McKinsey 7S framework" or "Kotter's
8 steps." The evidence label, the specific "do not use when," and the audience
examples are the value; get them from the source.

## Entry points

* `README.md` — the self-contained deliverable. Read it end to end or jump to a
  part.
* `topics/index.md` — the catalog, grouped by family, each entry tagged with its
  evidence strength in brackets and `Q` if it has a paired questionnaire. This
  is the fastest way to scan what exists and how strong it is.
* `topics/<name>/` — the full treatment of one model: definition, evidence
  label with the specific objection, `Use when` / `Do not use when`, structure,
  audience examples, limitations, questionnaire (if any), see-also.

## Workflow

1. **Get the situation, not just the topic.** What is actually happening, in
   which setting (health care, software, executive), and what does the person
   want to do about it — understand it, diagnose it, change it, or measure it?
   Ask if it's not clear; the wrong family of framework wastes their time.

2. **Pick the family before the model:**
   * Something is wrong and the cause is unclear → *diagnostic models*
     (`topics/index.md#diagnostic-models`) — Weisbord, Nadler-Tushman,
     Galbraith star, McKinsey 7S, Burke-Litwin, Leavitt diamond, Cynefin, ONA,
     team topologies.
   * The diagnosis is done and something needs to change → *change models*
     (`#change-models`) — this is the **weakest-evidenced family** in the
     collection; say so rather than presenting one confidently.
   * The problem is about culture, norms, or how people actually behave →
     *culture models* (`#culture-models`) — Schein, competing values framework,
     Westrum, Hofstede, just culture.
   * The problem is about a team or an individual → *team and individual
     models* (`#team-and-individual-models`) — psychological safety, Project
     Aristotle, Tuckman, self-determination theory, goal setting theory,
     burnout.
   * The person needs to act, not just diagnose → *interventions*
     (`topics/interventions-catalog/`).
   * The person needs to measure something → `topics/measurement-and-metrics/`
     and DORA metrics.

3. **Open the specific topic file(s)** rather than naming models from memory.
   Read the evidence label and its stated objection verbatim, the `Use when`
   and `Do not use when`, and the audience example matching the user's setting.

4. **Lead with evidence strength, unprompted.** If the best-fitting model for
   the situation is rated `Weak` or worse, say that plainly and mention a
   better-evidenced alternative if `topics/index.md` names one — don't let the
   user assume a popular framework (Kotter, MBTI-adjacent tools, Kübler-Ross)
   is well supported just because it's well known. `topics/discredited-instruments/`
   lists tools to actively steer away from.

5. **Give the audience-specific example**, not a generic one. Each substantial
   topic has `## Examples by audience` with health care, software, and
   executive cases — quote or adapt the one matching the user's setting rather
   than inventing a new one.

6. **Offer the questionnaire when there is one.** Diagnostic and a couple of
   culture/team models (`Q` in `topics/index.md`) have a paired instrument at
   `topics/<model>-questionnaire/`. It ends with an analysis section explaining
   how to read the scores — point the user there rather than inventing your own
   scoring.

## Ground rules

* Never soften or omit a weak evidence rating to make an answer more
  satisfying. "There is no evidence this improves outcomes, and some reason to
  think it doesn't" is the register of this guide — match it.
* Never invent statistics, effect sizes, or study counts that aren't in the
  file. If the file describes a mechanism instead of a number, do the same.
* If the user's situation doesn't map cleanly onto one model, say so and
  suggest combining or say which single one is closest, rather than forcing a
  fit.
* This skill is for *using* the guide's content. If the user wants to edit,
  extend, or fix the repository itself, that's a different job — see
  `skills/organizational-development-maintainer-skill/`.
