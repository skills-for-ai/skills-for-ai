---
name: localization-testing
description: Use when asked to test whether software has been correctly adapted for a specific language/region — UI layout with translated text, locale-specific formats, cultural appropriateness, legal compliance — as the verification counterpart to internationalization implementation (see locale).
---

# Localization Testing

Localization testing verifies that software has been correctly adapted
to a specific language, culture, or region without losing functionality
or usability — typically performed by testers familiar with the actual
target language and region, since many issues (awkward phrasing, subtly
wrong cultural framing) aren't detectable without that familiarity. See
[[locale]] for the underlying internationalization/formatting
concepts (BCP 47, plural rules, date/number formats) this testing
verifies were actually implemented correctly.

## Key aspects to test

- **UI and UX** — the interface needs to handle different languages and
  scripts (including ones significantly longer than the source language,
  or right-to-left scripts) without breaking layout or functionality.
- **Content** — text, images, and video need to translate and localize
  without losing intended meaning; a literal translation can be
  technically correct and still miss the original meaning or tone.
- **Functionality** — date/time formats, currencies, and other locale-
  specific settings need to actually behave correctly for the target
  locale, not just display translated labels around unchanged logic.
- **Cultural differences** — symbols, customs, and social norms vary by
  region; content or imagery appropriate in one culture can be
  inappropriate or confusing in another.
- **Legal compliance** — some regions have specific legal/regulatory
  requirements affecting content or functionality; this can require
  guidance from local legal expertise, not just a translator.

## Common pitfalls

- **Testing only with pseudo-localized or placeholder text** instead of
  real translations — catches layout issues but misses meaning/tone
  problems only a real translation review would surface.
- **Ignoring text expansion/contraction** — a UI sized for the source
  language's text length can break (truncation, overflow) once real
  translated text — often notably longer or shorter — is substituted in.
- **Skipping right-to-left script testing** for languages that need it —
  layout, icon direction, and reading order all need explicit RTL
  handling, not just translated strings (see [[locale]]'s note on
  text direction).
- **No regional legal/cultural review** — a technically well-translated
  app can still violate a local regulation or cultural norm a translator
  alone wouldn't necessarily catch.

## Learn more

- [[locale]] for the internationalization implementation concepts (BCP 47, plural rules, formatting) this testing verifies.
- [[inclusive-language]] for adapting terminology respectfully across audiences.
