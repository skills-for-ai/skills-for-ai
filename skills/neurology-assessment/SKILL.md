---
name: neurology-assessment
description: Use when asked to administer, score, or explain a Neurology Assessment — general neurological evaluation using the NIHSS plus headache/seizure/motor/sensory/cognitive assessment — grounded in FormExamples/form-examples; closely related to stroke-assessment.
---

# Neurology Assessment

Neurological evaluation using the NIHSS (National Institutes of Health
Stroke Scale), with headache, seizure, motor, sensory, and cognitive
assessment.

## Scoring

**Instrument:** NIHSS. Range 0–42.

- **0** — no stroke symptoms.
- **1–4** — minor.
- **5–15** — moderate.
- **16–20** — moderate to severe.
- **21–42** — severe.

## What it covers

Demographics; chief complaint; NIHSS assessment; headache assessment;
seizure history; motor and sensory exam; cognitive assessment; current
medications; diagnostic results; and functional/social status.

## Relationship to stroke-assessment

This assessment uses the same NIHSS instrument as
[[stroke-assessment]] but frames it within a broader general
neurological evaluation (headache, seizure, and cognitive screening
included); [[stroke-assessment]] is scoped specifically to acute
stroke presentation with symptom-onset timing as a first-class field.
Use [[stroke-assessment]] specifically when timing-critical acute
stroke workflow matters.

## Common pitfalls

- **Using NIHSS outside an acute stroke context without noting that** —
  the scale was validated and is most meaningful for acute stroke
  severity; applying it to a non-acute general neurological complaint
  needs that context made explicit.
- **Treating headache and seizure sections as routine boilerplate** —
  either can be the actual presenting problem driving the whole
  assessment; they deserve full workup, not a quick checkbox pass
  because the NIHSS looks normal.
- **Missing symptom-onset timing** — for any presentation with acute
  neurological deficit, onset timing is critical for treatment decisions
  (e.g. thrombolysis windows) — see [[stroke-assessment]], where this
  is explicitly first-class.

## Learn more

- [FormExamples: neurology-assessment](https://github.com/FormExamples/form-examples/tree/main/forms/neurology-assessment) for the full implementation, clinical references, and worked examples.
- [[stroke-assessment]] for the acute-stroke-specific counterpart.
