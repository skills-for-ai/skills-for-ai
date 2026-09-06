---
name: psychology-assessment
description: Use when asked to administer, score, or explain a Psychology Assessment — general screening using the DASS-21 (Depression Anxiety Stress Scales) — grounded in FormExamples/form-examples.
---

# Psychology Assessment

General psychological screening assessment that collects self-reported
data on depression, anxiety, and stress symptoms using the DASS-21
instrument, computes severity categories per subscale, and flags
safety-critical items (e.g. suicidal ideation) for clinician review.

## Scoring

**Instrument:** DASS-21 — three 7-item subscales (Depression, Anxiety,
Stress), each item 0–3, raw range 0–21 per subscale (doubled to align
with DASS-42 norms). Severity categories: Normal, Mild, Moderate,
Severe, Extremely Severe.

## What it covers

Demographics; reason for assessment; DASS-21 Depression; DASS-21
Anxiety; DASS-21 Stress; functional impact; a risk screen; and support
and history.

## Common pitfalls

- **Treating the three DASS-21 subscales as interchangeable** —
  depression, anxiety, and stress are distinct constructs with distinct
  subscales; a high total across all three needs to be read per-
  subscale, not collapsed into one number.
- **Skipping the risk screen because the DASS-21 doesn't itself ask
  about self-harm** — DASS-21 measures symptom severity, not risk
  directly; a dedicated risk screen is a necessary separate step,
  flagged safety-critical for clinician review.
- **Forgetting the doubling convention** — raw DASS-21 subscale scores
  are conventionally doubled to align with DASS-42 severity norms;
  using raw (undoubled) scores against DASS-42 category thresholds
  misclassifies severity.

## Learn more

- [FormExamples: psychology-assessment](https://github.com/FormExamples/form-examples/tree/main/forms/psychology-assessment) for the full implementation, clinical references, and worked examples.
- [[mental-health-assessment]], [[psychiatry-assessment]] for related mental-health assessments.
