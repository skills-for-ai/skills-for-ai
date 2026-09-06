---
name: renal-assessment
description: Use when asked to administer, score, or explain a Renal Assessment — CKD staging using the KDIGO GFR x albuminuria heatmap — grounded in FormExamples/form-examples.
---

# Renal Assessment

Renal (kidney) assessment aligned with KDIGO 2012/2024 CKD
classification, stratifying chronic kidney disease by GFR category
(G1–G5) and albuminuria category (A1–A3) to produce a composite risk
level that drives management and referral.

## Scoring

**Instrument:** KDIGO CKD Classification (GFR × Albuminuria heatmap).

- **GFR (mL/min/1.73 m²):** G1 ≥ 90, G2 60–89, G3a 45–59, G3b 30–44, G4
  15–29, G5 < 15 (kidney failure).
- **Albuminuria (ACR mg/mmol):** A1 < 3, A2 3–30, A3 > 30.
- Composite risk: Low / Moderate / High / Very High, from the
  combination of GFR and albuminuria categories.

## What it covers

Demographics; presenting symptoms; CKD risk factors (hypertension,
diabetes, family history, nephrotoxic drugs); physical examination;
blood tests (creatinine, eGFR, urea, electrolytes); urine tests (ACR,
dipstick); imaging and biopsy review; medication review and dose
adjustment; and clinical impression with KDIGO stage.

## Common pitfalls

- **Staging from GFR alone without albuminuria** — the KDIGO heatmap
  explicitly combines both axes; a GFR-only assessment can significantly
  understate risk in a patient with high albuminuria but preserved GFR.
- **Not adjusting medication doses for reduced renal function** — many
  common drugs need dose adjustment or avoidance as GFR falls; the
  medication review step exists specifically to catch this, and
  skipping it is a real safety risk, not just an administrative gap.
- **Diagnosing CKD from a single abnormal eGFR** — CKD is defined by
  abnormalities persisting for ≥ 3 months; a single reading (which can
  reflect acute kidney injury instead) needs confirmation over time
  before being labeled chronic.

## Learn more

- [FormExamples: renal-assessment](https://github.com/FormExamples/form-examples/tree/main/forms/renal-assessment) for the full implementation, clinical references, and worked examples.
- [[diabetes-assessment]] for a related assessment (diabetes is a leading CKD risk factor).
