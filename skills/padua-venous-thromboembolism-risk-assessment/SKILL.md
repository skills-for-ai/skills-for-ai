---
name: padua-venous-thromboembolism-risk-assessment
description: Use when asked to administer, score, or explain the Padua Venous Thromboembolism Risk Assessment (Padua Prediction Score) — an 11-factor weighted VTE risk tool for hospitalized medical patients, scored 0-20 with a ≥4 high-risk threshold — grounded in FormExamples/form-examples; related to caprini-venous-thromboembolism-risk-assessment.
---

# Padua Venous Thromboembolism Risk Assessment (Padua Prediction Score)

A bedside risk-stratification tool that estimates the risk of venous
thromboembolism (VTE — deep-vein thrombosis and pulmonary embolism) in
hospitalized **medical** patients. It records eleven weighted risk
factors, sums a total of 0–20, and classifies the patient as high risk
when the score is ≥ 4 and low risk when < 4. A high score is a prompt to
consider pharmacological thromboprophylaxis (absent contraindications);
a low score supports withholding routine anticoagulant prophylaxis in
favor of mechanical measures and early mobilization.

Derived and validated by Barbar *et al.* (*Journal of Thrombosis and
Haemostasis*, 2010) in hospitalized medical patients, and recommended
by the American College of Chest Physicians for VTE risk assessment in
medical inpatients.

## Scoring

Eleven weighted factors: active cancer, previous VTE, reduced mobility,
and known thrombophilia each score 3 points; recent trauma/surgery
scores 2; elderly age (≥ 70), heart/respiratory failure, recent
MI/stroke, acute infection/rheumatological disorder, obesity, and
ongoing hormonal treatment each score 1. Total ≥ 4 = high risk (consider
pharmacological prophylaxis); < 4 = low risk (mechanical measures, early
mobilization).

## What it covers

Assessment context; patient identification (including age ≥ 70 flag);
oncology and thrombosis history; mobility and recent events;
cardiorespiratory and acute illness; metabolic and treatment factors; a
bleeding-risk check; and a summary with the computed total, risk band,
and prophylaxis recommendation.

## Relationship to caprini-venous-thromboembolism-risk-assessment

Padua is validated for **medical** inpatients; [[caprini-venous-thromboembolism-risk-assessment]]
is the equivalent tool for **surgical** inpatients. They use different
factor sets and different scoring ranges (Padua 0–20, threshold ≥ 4;
Caprini variable points, banded very-low to high) — don't apply one
tool's threshold to the other's score.

## Common pitfalls

- **Applying Padua to a surgical inpatient** — use
  [[caprini-venous-thromboembolism-risk-assessment]] instead; Padua's
  validation population was medical, not surgical, inpatients.
- **Recommending pharmacological prophylaxis without the bleeding-risk
  check** — as with Caprini, a high score prompts prophylaxis only after
  ruling out active bleeding or a high bleeding-risk contraindication.
- **Not re-scoring after a change in clinical status** — VTE risk can
  change materially during a hospital stay (new immobility, new
  infection); a single admission-time score can go stale.

## Learn more

- Barbar S. *et al.* A risk assessment model for the identification of hospitalized medical patients at risk for venous thromboembolism: the Padua Prediction Score. *Journal of Thrombosis and Haemostasis* 2010; 8:2450–7.
- [FormExamples: padua-venous-thromboembolism-risk-assessment](https://github.com/FormExamples/form-examples/tree/main/forms/padua-venous-thromboembolism-risk-assessment) for the full implementation and clinical references.
- [[caprini-venous-thromboembolism-risk-assessment]] for the equivalent tool for surgical inpatients.
