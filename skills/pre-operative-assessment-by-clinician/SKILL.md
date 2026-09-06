---
name: pre-operative-assessment-by-clinician
description: Use when asked to administer, score, or explain a Pre-operative Assessment by Clinician — a UK NHS-aligned clinician-driven pre-op assessment computing ASA grade and composite perioperative risk — grounded in FormExamples/form-examples; the clinician counterpart to pre-operative-assessment-by-patient, near-identical to pre-anaesthesia-assessment.
---

# Pre-operative Assessment by Clinician

A UK NHS-aligned, clinician-driven pre-operative assessment that
records objective findings (history, examination, vitals, laboratory
results, imaging) and computes an ASA Physical Status grade (I–VI), a
composite perioperative risk level, and a set of safety-critical flags.
The output is a signed clinician report with an anaesthesia plan
suitable for the pre-operative record.

This form is the clinician counterpart to the patient self-report
[[pre-operative-assessment-by-patient]]: completed by an anaesthetist,
surgeon, pre-op assessment nurse, or perioperative physician rather
than by the patient. It is aligned with CPOC's *Preoperative Assessment
and Optimization for Adult Surgery* (2021) and the Geeky Medics
*Anaesthetic Pre-operative Assessment OSCE Guide*, and supports shared
decision-making under the Montgomery consent standard.

## Scoring

**Primary instrument:** ASA Physical Status (I–VI), with clinician
override + reason. **Secondary instruments:** Mallampati airway class
(I–IV), RCRI (0–6), STOP-BANG (0–8), Clinical Frailty Scale (1–9),
Fried Frailty Phenotype (0–5), Risk Analysis Index, Mini-Cog cognitive
screen, Duke Activity Status Index (DASI), ECOG performance status.
**Composite perioperative risk** (Low/Moderate/High/Critical) is driven
by the worst-band finding across instruments.

## Where this fits (clinician vs. patient forms)

- **This form** — objective, clinician-observed findings.
- **[[pre-operative-assessment-by-patient]]** — the patient's own
  self-reported health data, collected before the clinician visit.

Together they give a fuller pre-operative picture than either alone.
This form also overlaps substantially with [[pre-anaesthesia-assessment]]
and [[anesthesiology-assessment]] in this source collection — treat all
three as near-synonymous clinician-side variants unless a specific
context distinguishes them.

## Common pitfalls

- **Duplicating history already captured on the patient form** rather
  than reviewing and verifying it — the clinician form's value is in
  objective examination and clinical judgement added to, not
  duplicating, the patient's self-report.
- **Using a stale assessment for surgical clearance** — reassess after
  a meaningful time gap or clinical change between assessment and
  surgery date.
- **Skipping senior review at the High/Critical composite-risk
  threshold** — the banding exists specifically to trigger escalation.

## Learn more

- [FormExamples: pre-operative-assessment-by-clinician](https://github.com/FormExamples/form-examples/tree/main/forms/pre-operative-assessment-by-clinician) for the full implementation, clinical references, and worked examples.
- [[pre-operative-assessment-by-patient]] for the patient self-report counterpart.
- [[pre-anaesthesia-assessment]], [[anesthesiology-assessment]] for closely related clinician-side assessments.
