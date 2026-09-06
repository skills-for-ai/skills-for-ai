---
name: anesthesiology-assessment
description: Use when asked to administer, score, or explain an Anesthesiology Assessment — combining ASA Physical Status, Mallampati/airway score, Revised Cardiac Risk Index, and STOP-BANG into a composite perioperative risk level — grounded in FormExamples/form-examples; closely related to pre-anaesthesia-assessment and pre-operative-assessment-by-clinician.
---

# Anesthesiology Assessment

A UK NHS-aligned pre-operative anesthesiology assessment combining four
validated scoring systems — ASA Physical Status Classification,
Mallampati/Airway Score, Revised Cardiac Risk Index (RCRI/Lee Index),
and STOP-BANG (OSA screening) — into a composite perioperative risk
level, with flagged safety-critical issues and an anaesthetic plan.

## Scoring

**Instruments:** ASA Physical Status (I–VI), Mallampati Airway Class
(I–IV), RCRI (0–6), STOP-BANG (0–8), combined into a composite
perioperative risk:

- **Low** — ASA I–II, Mallampati I–II, RCRI 0, STOP-BANG 0–2 → routine
  anaesthesia.
- **Moderate** — any single marker in the mid-band → additional
  planning.
- **High** — ASA III, Mallampati III–IV, RCRI ≥ 2, or STOP-BANG ≥ 5 →
  senior anaesthetist review.
- **Critical** — ASA IV–V, anatomy predicting difficult airway plus
  significant cardiac/respiratory comorbidity → MDT pre-op review.

## What it covers

Patient demographics; planned surgery and proposed anaesthesia;
system-by-system medical history; medications; allergies and adverse
reactions; previous anaesthesia and surgery history; airway and
physical examination; vital signs and investigations; the four-
instrument scoring; and the anaesthetic plan with consent.

## Relationship to similar assessments in this collection

This is one of three closely related pre-operative/anaesthesia
assessments in this catalog: [[pre-anaesthesia-assessment]] and
[[pre-operative-assessment-by-clinician]] cover very similar ground
(objective clinician-recorded findings driving an ASA-based composite
risk). Check which specific instrument set and workflow a given context
actually expects rather than assuming they're interchangeable.

## Common pitfalls

- **Taking the worst-band composite risk without checking which
  instrument drove it** — the composite hides which specific factor
  (airway, cardiac, OSA) is actually the concern; the driving instrument
  should still be documented explicitly for planning.
- **Using a stale or non-fasting-state assessment for surgical
  clearance** — physiological status can change between assessment and
  surgery date; reassess if there's a meaningful time gap or a clinical
  change.
- **Skipping senior review at the "High"/"Critical" threshold** — the
  whole point of the composite risk banding is to trigger escalation;
  treating it as informational only defeats its purpose.

## Learn more

- [FormExamples: anesthesiology-assessment](https://github.com/FormExamples/form-examples/tree/main/forms/anesthesiology-assessment) for the full implementation, clinical references, and worked examples.
- [[pre-anaesthesia-assessment]], [[pre-operative-assessment-by-clinician]], [[pre-operative-assessment-by-patient]] for closely related assessments.
