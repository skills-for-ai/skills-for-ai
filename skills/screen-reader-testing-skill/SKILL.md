---
name: screen-reader-testing-skill
description: Use when asked to test a website/application with an actual screen reader (JAWS, NVDA, VoiceOver) — element announcement, keyboard navigation, multimedia accessibility — as the most specific verification layer within accessibility testing broadly (see accessibility-testing-skill).
---

# Screen Reader Testing Skill

Screen reader testing evaluates how well a digital interface can be
perceived, navigated, and interacted with using an actual screen reader
— the assistive technology that reads interface content aloud (or to a
braille display) for people who can't rely on visual presentation. It's
the most concrete, hands-on layer within [[accessibility-testing-skill]]'s
broader set of methods.

## Choosing which screen reader(s) to test with

Several real screen readers exist — **JAWS**, **NVDA**, **VoiceOver**
among the most common — and they don't all behave identically on the
same markup. Choose the screen reader(s) matching the actual target
audience and platform (VoiceOver is the natural choice for Apple
platforms, JAWS/NVDA dominate on Windows) rather than testing with only
one and assuming universal behavior.

## What to check while navigating

- **Element recognition and announcement** — headings, links, buttons,
  form controls, input prompts, error messages, and landmarks all need
  to be properly recognized and clearly announced, not silently skipped
  or announced ambiguously.
- **Interaction** — every interactive element needs to actually respond
  correctly to keyboard (or voice) commands used through the screen
  reader, not just be announced correctly while remaining inert.
- **Multimedia accessibility** — video, audio players, and interactive
  components need the screen reader to convey their presence, provide
  usable playback controls, and surface relevant alternative content
  (captions, transcripts, descriptions).
- **Overall usability** — beyond "is it technically accessible," note
  actual navigation friction or confusion a screen-reader user would
  hit, and plan concrete improvements, not just compliance-checkbox
  fixes.

## Beyond screen readers

Consider compatibility with other assistive technology users may rely on
alongside or instead of a screen reader: screen magnifiers, speech-
recognition software, and alternative input devices — a fix that helps
screen-reader users specifically doesn't guarantee compatibility with
these other tools.

## Common pitfalls

- **Testing with only one screen reader** and assuming the result
  generalizes — real behavioral differences exist between JAWS, NVDA,
  and VoiceOver on the same markup.
- **Checking only that an element is announced, not that it's
  interactive** — an element correctly read aloud but unresponsive to
  keyboard activation still fails a real user.
- **Ignoring multimedia entirely** — video/audio content is a common,
  easy-to-overlook accessibility gap distinct from static text/control
  accessibility.
- **Treating this as separate from, rather than part of, broader
  accessibility testing** — see [[accessibility-testing-skill]]; screen-
  reader testing is one method among automated scanning, manual expert
  review, and broader user testing, not a complete accessibility program
  on its own.

## Learn more

- [[accessibility-testing-skill]] for the broader set of methods (automated scanning, manual review, user testing) this specializes.
- [[html-skill]] for the underlying accessible-markup technique that determines what a screen reader actually announces.
