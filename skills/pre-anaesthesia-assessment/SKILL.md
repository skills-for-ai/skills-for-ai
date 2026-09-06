---
name: pre-anaesthesia-assessment
description: Use when asked to administer, score, or explain a Pre-Anaesthesia Assessment — a UK NHS-aligned clinician-driven pre-op assessment computing ASA grade and composite perioperative risk — grounded in FormExamples/form-examples; near-identical in scope to pre-operative-assessment-by-clinician.
---

# Pre-Anaesthesia Assessment

A UK NHS-aligned, clinician-driven pre-operative assessment that
records objective findings (history, examination, vitals, laboratory
results, imaging) and computes an ASA Physical Status grade (I–VI), a
composite perioperative risk level, and a set of safety-critical flags.
The output is a signed clinician report with an anaesthesia plan
suitable for the pre-operative record.

This form is the clinician counterpart to the patient self-report
pre-operative questionnaire [[pre-operative-assessment-by-patient]]:
completed by an anaesthetist, surgeon, pre-op assessment nurse, or
perioperative physician rather than by the patient. It is aligned with
CPOC's *Preoperative Assessment and Optimization for Adult Surgery*
(2021) and the Geeky Medics *Anaesthetic Pre-operative Assessment OSCE
Guide*, and supports shared decision-making under the Montgomery
consent standard.

## Scoring

**Primary instrument:** ASA Physical Status (I–VI), with clinician
override + reason. **Secondary instruments:** Mallampati airway class
(I–IV), RCRI (0–6), STOP-BANG (0–8), Clinical Frailty Scale (1–9), Duke
Activity Status Index (DASI), ECOG performance status. **Composite
perioperative risk** (Low/Moderate/High/Critical) is driven by the
worst-band finding across instruments (max-grade algorithm).

## Relationship to nearly-identical assessments in this collection

This assessment's description and scoring are effectively the same as
[[pre-operative-assessment-by-clinician]] and overlap substantially
with [[anesthesiology-assessment]] — all three are clinician-completed,
ASA-grade-driven, composite-risk pre-operative assessments in this
source collection. Treat them as near-synonymous variants unless a
specific context distinguishes them (e.g. a difference in which
secondary instruments are included), and check the source repository
directly if the exact distinction matters for a given task.

## Common pitfalls

- **Assuming this is meaningfully distinct from the other two similar
  pre-op assessments in this catalog** — verify against the actual
  source content for the task at hand rather than guessing which
  specific variant a request means.
- **Using a stale assessment for surgical clearance** — physiological
  status can change between assessment and surgery date; reassess after
  a meaningful time gap or clinical change.
- **Skipping senior review at the High/Critical composite-risk
  threshold** — the banding exists specifically to trigger escalation.

## Learn more

- [FormExamples: pre-anaesthesia-assessment](https://github.com/FormExamples/form-examples/tree/main/forms/pre-anaesthesia-assessment) for the full implementation, clinical references, and worked examples.
- [[pre-operative-assessment-by-clinician]], [[pre-operative-assessment-by-patient]], [[anesthesiology-assessment]] for closely related assessments.
