---
name: quick-sequential-organ-failure-assessment
description: Use when asked to administer, score, or explain the Quick Sequential Organ Failure Assessment (qSOFA) — a 3-criterion bedside sepsis-risk screen scored 0-3 with a ≥2 escalation threshold — grounded in FormExamples/form-examples; the bedside-screening counterpart to sequential-organ-failure-assessment.
---

# Quick Sequential Organ Failure Assessment (qSOFA)

A bedside sepsis-risk screen for adults with suspected or confirmed
infection. It records three objective clinical criteria —
**respiratory rate**, **mentation**, and **systolic blood pressure** —
scores each as 0 or 1, sums a total of 0–3, and flags the patient as
higher risk of a poor outcome when the score is ≥ 2. A high score is
not a diagnosis of sepsis; it is a prompt to escalate: perform a full
Sequential Organ Failure Assessment (SOFA), start a sepsis workup, and
obtain senior review.

qSOFA is the "quick" variant of the SOFA score introduced by the Third
International Consensus Definitions for Sepsis and Septic Shock
(Sepsis-3, Singer *et al.*, *JAMA* 2016). It was designed to identify,
without laboratory tests, patients with suspected infection likely to
have a prolonged intensive-care stay or die in hospital, particularly
outside the ICU.

## Scoring

Three criteria, each 1 point when present: respiratory rate ≥ 22/min;
Glasgow Coma Scale < 15 (altered mentation); systolic blood pressure ≤
100 mmHg. Total 0–3. **0–1 = lower risk** (continue monitoring; a low
score doesn't rule out sepsis). **2–3 = higher risk** (positive screen
— obtain senior/critical-care review, calculate a full SOFA score,
initiate a sepsis workup and management bundle).

## What it covers

Assessment context (clinician, care setting, suspected infection
source); patient identification; respiratory rate; mentation (GCS or
alertness vs. baseline); systolic blood pressure; and a summary with
the computed total, risk band, and escalation recommendation.

## Relationship to sequential-organ-failure-assessment

qSOFA is a **screening** tool with three criteria and no laboratory
tests, usable anywhere including outside the ICU; the full
[[sequential-organ-failure-assessment]] (SOFA) scores six organ systems
using laboratory and physiological data (0–24 total) and is the
definitive instrument a positive qSOFA screen should prompt.

## Common pitfalls

- **Treating a qSOFA below 2 as ruling out sepsis** — it does not; the
  score is a screen, not an exclusionary test, and clinical suspicion
  should still drive further workup when present.
- **Using qSOFA as a substitute for a full SOFA score in the ICU** —
  qSOFA is deliberately simplified for settings without ready lab
  access; in the ICU, the full SOFA score is the appropriate instrument.
- **Not re-scoring as the patient's status changes** — qSOFA is meant to
  be repeated as the clinical picture evolves, not scored once at
  initial presentation.

## Learn more

- Singer M. *et al.* The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3). *JAMA* 2016; 315(8):801–810.
- [FormExamples: quick-sequential-organ-failure-assessment](https://github.com/FormExamples/form-examples/tree/main/forms/quick-sequential-organ-failure-assessment) for the full implementation and clinical references.
- [[sequential-organ-failure-assessment]] for the full, definitive SOFA instrument this screen prompts.
