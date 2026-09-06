---
name: web-content-accessibility-guidelines
description: Use when asked about WCAG specifically — the perceivable/operable/understandable/robust (POUR) principles and A/AA/AAA conformance levels — as the formal standard accessibility-testing and screen-reader-testing verify compliance against.
---

# Web Content Accessibility Guidelines (WCAG)

The Web Content Accessibility Guidelines (WCAG) are a set of guidelines
for making web content more accessible to people with disabilities,
published by the W3C. The guidelines aim to ensure web content is
perceivable, operable, understandable, and robust (POUR). Success
criteria are organized into three conformance levels: A (low), AA
(medium), and AAA (high).

## Core principles (POUR)

- **Perceivable** — present information and UI components in ways users
  can perceive: provide alternatives for non-text content (images,
  videos) for people who can't see or hear them, ensure text is readable
  and understandable, and ensure content is easily distinguishable from
  its background.
- **Operable** — ensure UI components and navigation are operable:
  users must be able to interact with all functionality using various
  input methods (keyboard, mouse, touch), with enough time to read and
  use content.
- **Understandable** — make web content and its operation understandable:
  clear, easy-to-read text and content; plain language, avoiding jargon
  or complex terminology; clear instructions and feedback; help avoiding
  and correcting mistakes.
- **Robust** — make content interpretable reliably by a wide range of
  user agents, including assistive technologies: use standard HTML/CSS
  correctly, ensure cross-browser/device compatibility, and avoid
  relying on technologies or features that limit accessibility.

## Conformance levels

- **Level A** — the minimum level; failing to meet it makes content
  unusable for some users entirely.
- **Level AA** — the level most legal and organizational accessibility
  requirements target; addresses the most common and significant
  barriers.
- **Level AAA** — the highest level; not always achievable for all
  content types, and WCAG itself notes it's not recommended as a
  general policy requirement for entire sites.

## How WCAG relates to verification and design skills in this collection

WCAG is the formal standard; [[accessibility-testing]] and
[[screen-reader-testing]] are how compliance against it is actually
verified — automated scanning and manual/user testing for the former,
real assistive-technology testing for the latter. [[aria-attributes]]
and [[screen-reader]] cover specific technical mechanisms (markup,
assistive technology behavior) that WCAG's success criteria are written
against.

## Common pitfalls

- **Treating Level A as sufficient** — Level A addresses only the most
  basic barriers; most real-world accessibility requirements (legal or
  otherwise) target Level AA.
- **Chasing automated-scan compliance without manual verification** —
  automated tools catch a meaningful but limited subset of WCAG success
  criteria (see [[accessibility-testing]]); many criteria require human
  judgment or assistive-technology testing to verify.
- **Treating WCAG conformance as a one-time certification** — content
  and features change continuously; a page that conformed at launch can
  drift out of conformance as it's updated without re-verification.
- **Confusing WCAG (the standard) with specific legal requirements** (ADA,
  Section 508, EN 301 549, and others) that reference WCAG but have their
  own scope and enforcement — check which specific legal framework
  actually applies in a given context.

## Learn more

- [WCAG official specification (W3C)](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [[accessibility-testing]], [[screen-reader-testing]] for verifying compliance against this standard.
- [[aria-attributes]] for a specific technical mechanism supporting several WCAG success criteria.
