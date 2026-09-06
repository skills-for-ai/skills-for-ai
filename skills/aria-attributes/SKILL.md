---
name: aria-attributes
description: Use when asked to add or review ARIA (Accessible Rich Internet Applications) attributes — roles, states, and properties for dynamic/interactive elements — as a supplement to semantic HTML, not a replacement for it, and grounded in web-content-accessibility-guidelines' operable/perceivable criteria.
---

# ARIA Attributes

ARIA (Accessible Rich Internet Applications) attributes are a set of
HTML attributes that enhance the accessibility of web content for
people with disabilities — particularly useful for dynamic web
applications and interactive components that assistive technologies like
screen readers can't otherwise interpret from markup alone.

## Purpose

ARIA attributes provide additional information to assistive technologies
that can't be conveyed through standard HTML tags alone — describing the
functionality, state, and behavior of elements in a way a
[[screen-reader]] or other assistive device can interpret and announce.

## ARIA roles

The `role` attribute defines the role or type of an element — specifying
its purpose or function beyond its default HTML semantics, such as
marking a `<div>` as functioning like a button or a menu when no native
element fits.

```html
<div role="button" tabindex="0" onclick="submit()">Submit</div>
```

## ARIA states and properties

ARIA attributes also describe an element's current state and properties
— for example, `aria-expanded` indicates whether a collapsible section is
currently expanded or collapsed, updated dynamically as the user
interacts with it.

```html
<button aria-expanded="false" aria-controls="menu">Menu</button>
<ul id="menu" hidden>...</ul>
```

## Enhancing interactive elements

ARIA is especially valuable for custom interactive components — menus,
tabs, sliders — that don't have a native HTML equivalent, letting
assistive technologies understand and communicate their functionality
and current behavior correctly.

## Integration with JavaScript

ARIA attributes are commonly updated dynamically via JavaScript as a
user interacts with the page — a collapsed menu's `aria-expanded`
attribute, for instance, must be toggled in the same code path that
toggles its visual state, or the two fall out of sync.

## Common pitfalls

- **"No ARIA is better than bad ARIA"** — an incorrect or contradictory
  ARIA attribute (a role that doesn't match the element's actual
  behavior) can make an interface *less* accessible than using no ARIA
  at all, since it actively misleads assistive technology.
- **Using ARIA instead of semantic HTML** — reaching for `role="button"`
  on a `<div>` when a real `<button>` element would give the same
  behavior natively (keyboard focus, default styling, correct semantics)
  with no ARIA needed at all; prefer semantic HTML first, ARIA as a
  supplement for genuinely custom widgets.
- **Forgetting to keep dynamic ARIA state in sync with visual state** — a
  visually expanded menu whose `aria-expanded` attribute still says
  `"false"` gives assistive technology stale, misleading information.
- **Adding ARIA without testing with an actual screen reader** — see
  [[screen-reader-testing]] for verifying ARIA attributes actually
  produce the intended announcement, rather than assuming correctness
  from the markup alone.

## Learn more

- [WAI-ARIA specification](https://www.w3.org/TR/wai-aria/)
- [[web-content-accessibility-guidelines]] for the broader accessibility standard ARIA attributes help satisfy.
- [[screen-reader]], [[screen-reader-testing]] for the assistive technology ARIA attributes are written for, and how to verify against it.
- [[html]] for the semantic-HTML-first foundation ARIA supplements rather than replaces.
