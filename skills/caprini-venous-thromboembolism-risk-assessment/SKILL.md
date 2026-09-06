---
name: caprini-venous-thromboembolism-risk-assessment
description: Use when asked to administer, score, or explain the Caprini Venous Thromboembolism Risk Assessment — a weighted risk-factor checklist for surgical/medical inpatients, scored 0+ and banded into a prophylaxis recommendation — grounded in FormExamples/form-examples; related to padua-venous-thromboembolism-risk-assessment.
---

# Caprini Venous Thromboembolism Risk Assessment

A structured venous thromboembolism (VTE) risk-stratification tool for
surgical and medical inpatients. It records a checklist of weighted
individual risk factors — each worth 1, 2, 3, or 5 points — sums them
into a total Caprini score, maps the total to a risk band (very low,
low, moderate, high), and recommends a prophylaxis strategy (early
ambulation, mechanical, or pharmacological). A high score is a prompt
to prescribe thromboprophylaxis after a bleeding-risk check; it is not
a substitute for clinical judgement.

Developed by Joseph A. Caprini and refined across the 2005 and later
revisions, the Caprini Risk Assessment Model is endorsed for surgical
and hospitalized medical patients, and is the model recommended by the
American College of Chest Physicians (ACCP) for individualized risk
stratification in nonorthopedic surgical patients.

## Scoring

Each present risk factor contributes its fixed point value (1, 2, 3, or
5); the total is the sum. Examples: age 41–60, minor surgery, obesity,
sepsis (1 point each); age 61–74, major/laparoscopic surgery, active
malignancy (2 points each); higher-weighted factors (3 and 5 points)
cover more serious history such as prior VTE, thrombophilia, and major
risk surgeries. See the source repository for the complete weighted
factor list.

## What it covers

Assessment context (clinician, care setting, admission type); patient
identification; each risk-factor tier (1-, 2-, 3-, and 5-point factors)
as present/absent; a bleeding-risk check (contraindication to
pharmacological prophylaxis); and a summary with the computed total,
risk band, fired factors, and recommended prophylaxis.

## Common pitfalls

- **Recommending pharmacological prophylaxis without the bleeding-risk
  check** — a high Caprini score prompts prophylaxis only after ruling
  out active bleeding or a high bleeding-risk contraindication; skipping
  that check can recommend an unsafe intervention.
- **Scoring once at admission and never repeating it** — VTE risk
  changes as a patient's condition, mobility, and treatment change
  during a stay; re-score after a significant clinical change.
- **Missing a risk factor because it's not the "obvious" surgical one**
  — several 1-point factors (recent illness, hormone therapy, pregnancy)
  are easy to overlook in a purely surgery-focused review.

## Learn more

- [FormExamples: caprini-venous-thromboembolism-risk-assessment](https://github.com/FormExamples/form-examples/tree/main/forms/caprini-venous-thromboembolism-risk-assessment) for the full implementation, clinical references, and worked examples.
- [[padua-venous-thromboembolism-risk-assessment]] for the equivalent tool for medical (non-surgical) inpatients.
