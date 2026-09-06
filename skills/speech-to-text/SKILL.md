---
name: speech-to-text
description: Use when asked to add or work with speech-to-text (STT) — transcribing spoken audio into written text, streaming vs. batch transcription, accuracy factors (accents, noise, domain vocabulary) — as the inverse of text-to-speech.
---

# Speech-to-Text (STT)

Speech-to-text (also called automatic speech recognition, ASR)
transcribes spoken audio into written text. See [[text-to-speech]] for
the inverse direction (text to audio); the two are often paired in voice
interfaces but solve opposite problems.

## How modern STT works

Current STT systems are predominantly neural, end-to-end models (such as
architectures descending from wav2vec or Whisper-style transformers)
that map raw or lightly-processed audio directly to text, largely
replacing older pipelines that separated acoustic modeling, pronunciation
modeling, and a language model into distinct stages.

## Streaming vs. batch transcription

- **Streaming (real-time)** — transcribes audio incrementally as it
  arrives, producing partial results with low latency; needed for live
  captioning, voice assistants, and real-time transcription during a
  call.
- **Batch (offline)** — transcribes a complete, already-recorded audio
  file, typically with higher accuracy and richer features (speaker
  diarization, more context for disambiguation) since it can look at the
  whole recording rather than a rolling window.

Choosing between them is largely dictated by the use case's latency
requirement, not just a quality preference — a live captioning feature
needs streaming even if batch would transcribe more accurately.

## Accuracy factors

Real-world transcription accuracy depends heavily on: audio quality
(background noise, microphone quality), accents and dialects a model
was or wasn't trained on, domain-specific vocabulary (medical, legal, or
technical terms uncommon in general training data), and multiple
overlapping speakers. Custom vocabulary/phrase hints (supported by most
major providers) can meaningfully improve accuracy on domain-specific
terms without retraining a whole model.

## Common pitfalls

- **Assuming uniform accuracy across accents and demographics** —
  published accuracy benchmarks are often measured on specific,
  non-representative populations; verify actual performance for the
  target user base before assuming a general benchmark applies.
- **No handling for low-confidence transcriptions** — presenting a
  transcript as if it were certain, with no way to flag or correct
  likely errors, misleads users in high-stakes contexts (medical,
  legal).
- **Ignoring background noise and audio quality upfront** — STT accuracy
  degrades significantly with noisy or low-quality audio; addressing
  input audio quality (microphone choice, noise suppression) is often
  more impactful than switching STT providers.
- **Treating streaming partial results as final** — a streaming
  transcript's early partial output can change as more audio context
  arrives; don't treat an interim result as the confirmed final
  transcription.

## Learn more

- [[text-to-speech]] for the inverse conversion.
- [[accessibility-testing]] for verifying transcription-dependent features (like live captions) actually serve users who need them.
