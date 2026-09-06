---
name: confusion-assessment-method
description: Use when asked to administer, score, or explain the Confusion Assessment Method (CAM) — a bedside delirium screening algorithm (present/absent, not a numeric score) with a CAM-ICU variant for ventilated patients — grounded in FormExamples/form-examples; distinct from cognitive-assessment's chronic-impairment focus.
---

# Confusion Assessment Method (CAM)

A structured, bedside delirium screening instrument that records four
observational features of an acute confusional state and applies the
validated CAM diagnostic algorithm to classify delirium as present or
absent. The output is a boolean status derived from a fixed pattern of
positive features, not a numeric sum, together with which features
were positive and any safety-critical flags.

Developed by Inouye and colleagues (1990) to let non-psychiatric
clinicians identify delirium quickly and reliably at the bedside, the
CAM operates on observed cognitive and behavioural findings — collected
during a brief structured interview and a formal attention test —
rather than a laboratory result or self-report questionnaire. The
CAM-ICU variant adapts the same four features for mechanically
ventilated and other non-verbal patients using objective, non-verbal
tasks.

## Scoring: a diagnostic algorithm, not a sum

Four features, each present or absent: (1) acute onset and fluctuating
course, (2) inattention, (3) disorganized thinking, (4) altered level
of consciousness. Delirium is classified **present** when:

```
Feature 1  AND  Feature 2  AND  (Feature 3  OR  Feature 4)
```

Otherwise, delirium is classified **absent** — which does not exclude
delirium if clinical suspicion remains.

## What it covers

Assessor and encounter details (including CAM vs. CAM-ICU variant);
patient identification with cognitive baseline; each of the four
features with supporting evidence; motoric subtype and observations
(hypoactive/hyperactive/mixed, hallucinations, sleep-wake disturbance);
and result/disposition (classification, positive-feature set, suspected
precipitants, safety flags, recommended actions).

## Common pitfalls

- **Treating a single negative CAM as ruling out delirium** — delirium
  fluctuates by definition; a negative screen at one point doesn't
  exclude it, and at-risk patients should be re-screened regularly
  (e.g. once per shift).
- **Missing hypoactive delirium** — a quiet, withdrawn, drowsy
  presentation is frequently missed (it doesn't look like "confusion" in
  the popular sense) and carries a worse prognosis than the more
  obviously agitated hyperactive form.
- **Stopping at "present" without a cause workup** — a positive CAM is a
  prompt to search for reversible precipitants (pain, infection,
  nutrition, constipation, hydration, medication, environment), not an
  endpoint in itself.
- **Confusing CAM with a cognitive-impairment screen** — see
  [[cognitive-assessment]]; CAM targets acute, fluctuating confusion,
  not chronic dementia-spectrum impairment.

## Learn more

- Inouye S.K. *et al.* Clarifying confusion: the Confusion Assessment Method. *Annals of Internal Medicine* 1990; 113:941–8.
- [FormExamples: confusion-assessment-method](https://github.com/FormExamples/form-examples/tree/main/forms/confusion-assessment-method) for the full implementation, CAM-ICU detail, and clinical references.
- [[cognitive-assessment]] for the chronic-impairment counterpart.
