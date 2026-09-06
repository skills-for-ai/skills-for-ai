---
name: pre-operative-assessment-by-patient
description: Use when asked to administer, score, or explain a Pre-operative Assessment by Patient — a UK NHS-aligned patient self-report questionnaire computing an ASA grade — grounded in FormExamples/form-examples; the patient counterpart to pre-operative-assessment-by-clinician.
---

# Pre-operative Assessment by Patient

A UK NHS-aligned, patient self-report pre-operative questionnaire that
the patient (or their carer) completes before surgery. It collects
patient-reported health data via a single-page, step-by-step wizard,
computes an ASA (American Society of Anesthesiologists) Physical Status
Classification grade, and flags safety-critical issues for anaesthetic
planning.

This form is the patient counterpart to
[[pre-operative-assessment-by-clinician]], which records the
clinician's objective findings (history, examination, vitals,
laboratory results, imaging). Where the clinician form captures observed
findings, this form captures what the patient reports about themselves.

## Scoring

**Instrument:** ASA Physical Status Classification. Range I–VI:

- **ASA I** — normal, healthy patient.
- **ASA II** — mild systemic disease.
- **ASA III** — severe systemic disease.
- **ASA IV** — severe, incapacitating systemic disease.
- **ASA V** — moribund, not expected to survive without the operation.
- **ASA VI** — brain-dead patient for organ donation.

## What it covers

Demographics; and a system-by-system self-report: cardiovascular,
respiratory, renal, hepatic, endocrine, neurological, haematological,
musculoskeletal and airway, gastrointestinal, medications, allergies,
previous anaesthesia, social history, functional capacity, and
pregnancy.

## Common pitfalls

- **Treating the patient-reported ASA grade as final** — the clinician
  form ([[pre-operative-assessment-by-clinician]]) is where the ASA
  grade gets clinically verified and, where necessary, overridden with
  a documented reason; a patient self-report is an input to that
  process, not the final grading authority.
- **Assuming health literacy is uniform** — a self-report questionnaire
  depends on the patient understanding medical terminology (e.g.
  "hepatic," "musculoskeletal"); plain-language support or assistance
  may be needed for some patients to complete it accurately.
- **Skipping functional capacity self-report** — functional capacity
  (ability to perform everyday physical tasks) is a meaningful,
  easy-to-self-report predictor of perioperative risk that shouldn't be
  treated as optional.

## Learn more

- [FormExamples: pre-operative-assessment-by-patient](https://github.com/FormExamples/form-examples/tree/main/forms/pre-operative-assessment-by-patient) for the full implementation, clinical references, and worked examples.
- [[pre-operative-assessment-by-clinician]] for the clinician-completed counterpart.
