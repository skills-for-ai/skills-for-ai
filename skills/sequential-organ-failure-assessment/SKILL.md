---
name: sequential-organ-failure-assessment
description: Use when asked to administer, score, or explain the Sequential Organ Failure Assessment (SOFA) — six organ-system sub-scores (0-4 each) summing to a 0-24 total, tracked as delta-SOFA and used in Sepsis-3 criteria — grounded in FormExamples/form-examples; the definitive counterpart to quick-sequential-organ-failure-assessment.
---

# Sequential Organ Failure Assessment (SOFA)

A UK NHS-aligned, clinician-driven SOFA score that records objective
physiological and laboratory findings for six organ systems and
computes an organ-dysfunction score for each system (0–4), a total SOFA
score (0–24), the change from a prior assessment (delta-SOFA), a
mortality-risk band, and safety-critical flags. The output is a signed
clinician report suitable for the intensive-care record and for sepsis
screening under the Sepsis-3 definition.

Developed by the Working Group on Sepsis-Related Problems of the
European Society of Intensive Care Medicine (Vincent *et al.*,
*Intensive Care Medicine* 1996) to describe and quantify organ
dysfunction over time in critically ill patients. Under Sepsis-3
(Singer *et al.*, *JAMA* 2016), an acute rise in total SOFA of ≥ 2
points in a patient with suspected infection identifies sepsis.

## Scoring

Six organ systems, each scored 0–4 on objective criteria: respiration
(PaO₂/FiO₂ ratio), coagulation (platelet count), liver (bilirubin),
cardiovascular (mean arterial pressure and vasopressor dose), central
nervous system (Glasgow Coma Scale), and renal (creatinine and urine
output). Total 0–24. **Delta-SOFA** — the change from a recorded
baseline — is itself clinically significant: a rising score over the
first 48 hours of ICU admission predicts at least 50% mortality
regardless of the initial score. **Sepsis-3 flag** — an acute increase
of ≥ 2 points from baseline in a patient with suspected infection.

## What it covers

Clinician and context; patient and baseline (including prior SOFA for
delta calculation); respiration; coagulation; liver; cardiovascular;
central nervous system; renal; and a summary with per-system sub-
scores, total, delta-SOFA, mortality band, Sepsis-3 flag, and
sign-off.

## Relationship to quick-sequential-organ-failure-assessment

[[quick-sequential-organ-failure-assessment]] (qSOFA) is the
simplified, lab-free bedside screen usable anywhere, including outside
the ICU; this full SOFA score is the definitive instrument requiring
laboratory and physiological data, appropriate for ICU/HDU use once a
positive qSOFA screen (or other clinical concern) prompts it.

## Common pitfalls

- **Scoring SOFA without a recorded baseline** — delta-SOFA (the
  clinically meaningful trend) requires a baseline; without one, assume
  baseline SOFA is 0 only when there's genuinely no known pre-existing
  organ dysfunction, not by default.
- **Treating a single SOFA score as sufficient** — the *trend* over the
  first 48 hours carries independent prognostic value beyond any single
  reading; repeat scoring, not a one-off, is the point.
- **Using qSOFA and full SOFA interchangeably** — see
  [[quick-sequential-organ-failure-assessment]]; they have different
  data requirements, different scoring ranges, and different intended
  settings.

## Learn more

- Vincent J.L. *et al.* The SOFA (Sepsis-related Organ Failure Assessment) score. *Intensive Care Medicine* 1996; 22:707–10.
- [FormExamples: sequential-organ-failure-assessment](https://github.com/FormExamples/form-examples/tree/main/forms/sequential-organ-failure-assessment) for the full implementation and clinical references.
- [[quick-sequential-organ-failure-assessment]] for the simplified bedside screening counterpart.
