---
name: dietic-assessment
description: Use when asked to administer, score, or explain a Dietetic Assessment — a dietitian-driven nutritional evaluation computing a MUST score and GLIM malnutrition diagnosis — grounded in FormExamples/form-examples; related to nutrition-assessment.
---

# Dietetic Assessment

A UK-aligned, dietitian-driven dietetic assessment: a comprehensive
evaluation of a patient's nutritional status, eating patterns, medical
history, and food environment, conducted by a registered dietitian. It
computes a MUST (Malnutrition Universal Screening Tool) score with a
GLIM malnutrition diagnosis, a composite nutrition risk level, and a
set of safety-critical flags, producing a signed dietetic report with a
nutrition care plan.

## Scoring

**Primary instrument:** MUST — a 0–6 score summing BMI band, unplanned
weight loss percentage, and an acute-disease effect flag. MUST risk
category: **0 = low**, **1 = medium**, **≥ 2 = high**.

**Secondary instruments:** GLIM (malnutrition diagnosis requiring ≥ 1
phenotypic criterion and ≥ 1 etiologic criterion, staged moderate or
severe), NRS-2002 (0–7, inpatient risk, ≥ 3 at-risk), SARC-F (0–10,
sarcopenia case-finding, ≥ 4 at-risk), refeeding-syndrome risk per NICE
CG32, and stool/swallowing scales (Bristol Stool Form Scale, IDDSI)
where relevant.

## What it covers

Nutritional status and eating-pattern history; anthropometric
measurements feeding the MUST score; medical and food-environment
history; the GLIM phenotypic/etiologic criteria; refeeding-risk
screening; and a signed nutrition care plan.

## Relationship to nutrition-assessment

This assessment and [[nutrition-assessment]] overlap substantially
(both use MUST as a core instrument); this one is explicitly a
dietitian-led, more comprehensive assessment adding GLIM diagnosis and
several secondary instruments (NRS-2002, SARC-F, refeeding risk),
whereas [[nutrition-assessment]] is framed more generally.

## Common pitfalls

- **Using MUST alone without GLIM for a formal malnutrition diagnosis**
  — MUST is a screening tool identifying risk; GLIM is the actual
  diagnostic framework requiring both a phenotypic and an etiologic
  criterion. Treating a high MUST score as itself a diagnosis skips a
  step.
- **Missing refeeding-syndrome risk before starting nutritional
  support** — starting feeding in a high-risk patient without following
  NICE CG32's cautious reintroduction protocol can cause serious harm.
- **Not accounting for acute disease effect in the MUST score** — the
  "acutely ill with no nutritional intake for > 5 days" criterion is
  easy to miss but contributes meaningfully (2 points) to the total.

## Learn more

- [FormExamples: dietic-assessment](https://github.com/FormExamples/form-examples/tree/main/forms/dietic-assessment) for the full implementation, clinical references, and worked examples.
- [[nutrition-assessment]] for the related, more general nutritional-status assessment.
