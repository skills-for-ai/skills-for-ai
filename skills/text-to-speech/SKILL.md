---
name: text-to-speech
description: Use when asked to add or work with text-to-speech (TTS) — synthesizing spoken audio from written text, choosing between neural and concatenative/formant synthesis, SSML for pronunciation/prosody control — as the inverse of speech-to-text.
---

# Text-to-Speech (TTS)

Text-to-speech converts written text into synthesized spoken audio.
See [[speech-to-text]] for the inverse direction (audio to text); the two
are often paired in voice-interface applications but solve opposite
problems with largely different underlying techniques.

## How modern TTS works

Most current TTS systems are neural: a model predicts an intermediate
acoustic representation (a mel-spectrogram) from text, then a vocoder
(another neural model) converts that into a raw audio waveform. This has
mostly displaced older concatenative synthesis (stitching together
pre-recorded speech fragments) and formant synthesis (rule-based
acoustic modeling), both of which tend to sound noticeably more
robotic and less natural than modern neural voices.

## SSML: controlling pronunciation and prosody

```xml
<speak>
  Welcome to <say-as interpret-as="characters">SSML</say-as>.
  <break time="500ms"/>
  The meeting is at <say-as interpret-as="time">3:00pm</say-as>.
  <prosody rate="slow" pitch="+2st">This part is spoken slowly.</prosody>
</speak>
```

Speech Synthesis Markup Language (SSML) is a widely supported standard
for controlling how text is spoken — pronunciation of ambiguous terms,
pauses, emphasis, rate, and pitch — rather than relying purely on the
engine's default interpretation of plain text.

## Choosing a TTS provider/approach

Options range from cloud APIs (Amazon Polly, Google Cloud Text-to-
Speech, Microsoft Azure Speech, ElevenLabs) offering a wide range of
high-quality voices with minimal setup, to self-hosted open-source
models (Coqui TTS, Piper) for offline use, data privacy, or cost control
at scale. The trade-offs are typically: cloud APIs give the best voice
quality and least engineering effort but recurring cost and a network
dependency; self-hosted models give control and no per-request cost but
require more infrastructure and generally lower peak voice quality.

## Common pitfalls

- **Ignoring pronunciation of domain-specific terms** — acronyms, names,
  and jargon are frequently mispronounced by default; use SSML or a
  custom pronunciation lexicon where the engine supports one.
- **No handling for unsupported languages/locales** — a TTS engine's
  voice quality and language coverage varies significantly; verify
  actual support before assuming a target locale is well-covered.
- **Treating synthesized speech as accessible by default** — TTS
  quality alone doesn't guarantee a good experience for someone relying
  on it as their primary interface; test with real usage patterns and
  see [[screen-reader]] for the specific assistive-technology context TTS
  often serves.
- **Not caching or reusing generated audio** — resynthesizing the same
  static text repeatedly wastes cost and latency versus caching the
  audio output for reuse.

## Learn more

- [[speech-to-text]] for the inverse conversion.
- [W3C SSML specification](https://www.w3.org/TR/speech-synthesis11/)
- [[screen-reader]] for a common consumer of synthesized speech.
