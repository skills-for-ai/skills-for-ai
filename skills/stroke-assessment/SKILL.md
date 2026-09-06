---
name: stroke-assessment
description: Use when asked to administer, score, or explain a Stroke Assessment — acute stroke evaluation using the NIHSS with symptom-onset timing — grounded in FormExamples/form-examples; closely related to neurology-assessment.
---

# Stroke Assessment

Acute stroke evaluation using the NIHSS (National Institutes of Health
Stroke Scale), with symptom onset timing, consciousness, motor/sensory
examination, and risk factors.

## Scoring

**Instrument:** NIHSS. Range 0–42.

- **0** — no stroke symptoms.
- **1–4** — minor.
- **5–15** — moderate.
- **16–20** — moderate to severe.
- **21–42** — severe.

## What it covers

Demographics; symptom onset; level of consciousness; best gaze and
visual; facial palsy and motor; limb ataxia and sensory; language and
dysarthria; extinction and inattention; risk factors; and current
medications.

## Relationship to neurology-assessment

This assessment is scoped specifically to acute stroke presentation,
with symptom-onset timing as a first-class, time-critical field;
[[neurology-assessment]] uses the same NIHSS instrument within a
broader general neurological workup (also covering headache, seizure,
and cognitive screening). Use this one specifically for acute,
time-sensitive stroke workflow.

## Common pitfalls

- **Treating symptom-onset time as approximate when it's actually
  time-critical** — treatment eligibility (e.g. thrombolysis windows)
  depends on precise, "last known well" timing, not an approximate
  estimate; establishing this accurately is a priority, not a
  formality.
- **Scoring NIHSS inconsistently across serial assessments** — NIHSS
  needs a standardized, trained technique to be comparable across
  repeat assessments used to track improvement or deterioration.
- **Delaying NIHSS scoring for a "complete" history** — in acute stroke,
  rapid NIHSS scoring and time-critical actions (imaging, treatment
  eligibility) take priority over a fully comprehensive history, which
  can be completed once time-critical steps are underway.

## Learn more

- [FormExamples: stroke-assessment](https://github.com/FormExamples/form-examples/tree/main/forms/stroke-assessment) for the full implementation, clinical references, and worked examples.
- [[neurology-assessment]] for the general neurological evaluation using the same instrument.
