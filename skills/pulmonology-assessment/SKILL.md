---
name: pulmonology-assessment
description: Use when asked to administer, score, or explain a Pulmonology Assessment — respiratory evaluation using GOLD staging for COPD — grounded in FormExamples/form-examples; related to respirology-assessment.
---

# Pulmonology Assessment

Respiratory evaluation using GOLD (Global Initiative for Chronic
Obstructive Lung Disease) staging, with spirometry, exacerbation
history, and functional assessment.

## Scoring

**Instrument:** GOLD Stage, based on FEV1. Range I–IV.

- **I (Mild)** — FEV1 ≥ 80%.
- **II (Moderate)** — 50–79%.
- **III (Severe)** — 30–49%.
- **IV (Very Severe)** — < 30%.

## What it covers

Demographics; chief complaint; spirometry results; symptom assessment;
exacerbation history; current medications; allergies; comorbidities;
smoking and exposures; and functional status.

## Relationship to respirology-assessment

This assessment is specifically GOLD/COPD-staging-focused;
[[respirology-assessment]] uses the MRC Dyspnoea Scale and covers a
broader respiratory symptom range not limited to COPD staging. Use
whichever instrument matches the specific clinical question (COPD
staging vs. general breathlessness evaluation).

## Common pitfalls

- **Staging COPD from spirometry alone without exacerbation history** —
  current GOLD assessment (ABCD groups in the full framework) combines
  spirometric stage with symptom burden and exacerbation history;
  spirometry alone gives an incomplete picture of disease impact.
- **Missing smoking-cessation counselling as part of the assessment** —
  smoking status and exposure history exist in the assessment
  specifically because cessation is the single highest-impact
  intervention available for most COPD patients.
- **Treating a single spirometry reading as definitive** — spirometry
  quality and reproducibility vary; a borderline or unexpected result
  often warrants repeat testing before finalizing a stage.

## Learn more

- [FormExamples: pulmonology-assessment](https://github.com/FormExamples/form-examples/tree/main/forms/pulmonology-assessment) for the full implementation, clinical references, and worked examples.
- [[respirology-assessment]], [[asthma-assessment]] for related respiratory assessments.
