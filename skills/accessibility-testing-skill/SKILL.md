---
name: accessibility-testing-skill
description: Use when asked to test whether a website or application is usable by people with disabilities — WCAG/ADA compliance, automated scanning, and manual/user testing — as distinct from screen-reader-specific verification (see screen-reader-testing-skill) or general usability testing (see usability-testing-skill).
---

# Accessibility Testing Skill

Accessibility testing evaluates whether a website, application, or
program is usable by people with disabilities, so that everyone —
regardless of ability — can use it without barriers. Beyond the ethical
case, it also reduces legal exposure under accessibility law.

## Standards to test against

**WCAG** (Web Content Accessibility Guidelines) is the primary technical
standard; jurisdictions layer legal requirements on top of it (e.g. the
**ADA** in the US, the **Rehabilitation Act**'s Section 508 for US federal
systems). See [[html-skill]]'s accessibility section for concrete markup
technique WCAG conformance depends on.

## Four complementary methods

- **Compliance checking** — verifying against the specific WCAG success
  criteria (or another named standard) the project has committed to.
- **Automated testing** — tools scanning for color-contrast ratios, missing
  alt text, missing form labels, and similar mechanically-detectable
  issues; catches maybe a third of real issues, fast and cheap to run
  continuously.
- **Manual testing** — a tester combining expertise and tooling to check
  what automation can't (logical reading order, meaningful focus order,
  whether an ARIA label actually makes sense in context).
- **User testing with people with disabilities** — the only method that
  reliably surfaces real barriers automated and manual expert review both
  miss; see [[screen-reader-testing-skill]] for the screen-reader-specific
  slice of this.

## Common pitfalls

- **Relying on automated scanning alone** — it has a real, well-known
  ceiling on what it can detect; treating a clean automated scan as "fully
  accessible" is a common, false conclusion.
- **Testing only with a screen reader and skipping other assistive tech**
  — magnification, voice control, and switch devices surface different
  issues than a screen reader alone.
- **Deferring accessibility testing to the end of a project** — the same
  shift-left logic that applies broadly (see [[shift-left-testing-skill]])
  applies here: retrofitting accessibility into a finished design is far
  more expensive than building it in from the start.

## Learn more

- [W3C: Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [[screen-reader-testing-skill]] for the screen-reader-specific testing slice.
- [[html-skill]] for the underlying accessible-markup technique.
