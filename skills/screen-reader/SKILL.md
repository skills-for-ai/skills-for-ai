---
name: screen-reader
description: Use when asked about how screen readers work and how to design/build for them — audio representation of content, semantic markup and alt text, navigation mechanisms, structural/context cues — as the underlying assistive technology screen-reader-testing verifies against.
---

# Screen Reader

A screen reader is assistive technology software that helps individuals
with visual impairments or blindness access and interact with digital
content — a crucial tool for inclusive UI/UX design. See
[[screen-reader-testing]] for verifying a specific interface against
actual screen readers; this skill covers the technology and what
designing/building for it requires.

## How it works: an audio representation

Screen readers provide an audio representation of a digital interface's
visual content — reading aloud text, icons, buttons, and other elements
to enable navigation and understanding without relying on sight.

## Designing for screen reader compatibility

Screen-reader compatibility depends on following accessibility
guidelines: proper semantic HTML markup (see [[html]]), alternative text
for images, and full keyboard accessibility — a screen reader can only
convey what the underlying markup actually expresses, so a visually
correct but semantically empty interface (all `<div>`s, no real headings
or landmarks) is effectively invisible to it.

## Navigation mechanisms

Screen readers offer users various ways to explore and interact with a
digital interface — jumping between headings, links, buttons, and form
controls, or navigating linearly, via spoken commands or keyboard input
— which is why a logical heading structure and correctly labeled
interactive elements matter well beyond just reading order.

## Content and context

Screen readers convey the structure and layout of content — heading
hierarchy, lists, and other structural elements — letting users navigate
more efficiently by structure rather than only by reading everything
top to bottom. They also provide context cues: the presence of images,
form input requirements, and error messages, which is exactly what ARIA
attributes (see [[aria-attributes]]) exist to make explicit for dynamic
or non-native-semantic elements.

## Common pitfalls

- **Missing or unhelpful alt text** — an image with no `alt` attribute,
  or one filled with unhelpful text like "image1.jpg," gives a screen
  reader user no useful information about content a sighted user gets
  for free.
- **Non-semantic markup** — building an interface entirely from generic
  `<div>`/`<span>` elements with visual styling but no real headings,
  landmarks, or native interactive elements leaves a screen reader with
  nothing meaningful to announce.
- **Keyboard-inaccessible interactions** — a control operable only by
  mouse/touch (hover-only menus, click-only custom widgets) is
  unreachable for many screen reader users, who navigate primarily by
  keyboard.
- **Designing and never testing with an actual screen reader** — see
  [[screen-reader-testing]]; assumptions about what a screen reader will
  announce, based on the markup alone, are frequently wrong in practice.

## Learn more

- [[screen-reader-testing]] for verifying an interface against actual screen readers (JAWS, NVDA, VoiceOver).
- [[aria-attributes]] for supplementing semantic HTML on custom/dynamic elements.
- [[web-content-accessibility-guidelines]] for the broader standard screen-reader-friendly design is built to satisfy.
