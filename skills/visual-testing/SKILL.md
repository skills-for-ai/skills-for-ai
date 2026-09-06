---
name: visual-testing
description: Use when asked to catch unintended UI appearance changes — screenshot-baseline comparison, pixel/DOM/AI-based diffing — as distinct from functional testing (see functional-testing), which validates behavior rather than appearance, and complementary to it.
---

# Visual Testing

Visual testing validates the *appearance* of a graphical interface by
comparing screenshots against previously approved baseline images —
answering "does the interface look right?" rather than "does it behave
correctly?" It catches unintended layout shifts, styling regressions,
broken images, misaligned elements, and rendering inconsistencies across
browsers, devices, and resolutions that functional testing doesn't check
for at all.

## The baseline-comparison workflow

Capture screenshots in a known-good state and store them as baselines.
On later runs, capture new screenshots of the same pages/components and
compare — pixel by pixel, or region by region — against those baselines.
Differences exceeding a configured tolerance are flagged for human
review; when a difference reflects a legitimate, intended design change,
the tester approves the new screenshot as the updated baseline going
forward.

## Comparison methodologies

- **Pixel-by-pixel** — the simplest and most precise, but sensitive to
  anti-aliasing and sub-pixel rendering noise, producing false positives.
- **Region-based** — evaluates defined regions independently, letting
  dynamic areas (ads, timestamps, user content) be masked out while
  static layout is still validated.
- **DOM-based** — compares structure and computed styles instead of
  rendered pixels; less noisy, but can miss purely-visual issues like
  overlapping elements that don't show up in the DOM/style data alone.
- **AI-powered** — trained to perceive differences the way a human would,
  ignoring insignificant rendering artifacts while still catching
  meaningful regressions; substantially reduces false positives and
  ongoing maintenance burden compared to naive pixel diffing.

## Visual testing vs. functional testing

They're complementary, not competing: a button can pass every functional
test (correctly submits a form when clicked) while failing visually
(a CSS change moved it off-screen); conversely, a pixel-perfect interface
can hide broken business logic that only [[functional-testing]]
would catch. A robust strategy runs both.

## Integrating into CI/CD

Runs most effectively on every code change: functional tests run first,
then visual tests capture screenshots in a headless browser and compare
against baselines, reporting results back to the pull request as a
status check. Key considerations: rendering consistency (via containers
or cloud rendering services), version-controlled or dedicated baseline
storage, parallelized capture to control pipeline duration, and a clear
team workflow for reviewing and approving visual diffs.

## Common pitfalls

- **False positives from environment inconsistency** — minor rendering
  differences between machines create noise; mitigate with consistent
  (containerized or cloud) rendering rather than raising tolerance
  thresholds as a first resort.
- **Not masking dynamic content** — timestamps, ads, and personalized
  content change between runs and will otherwise generate constant false
  failures.
- **Baseline drift with no clear ownership** — without an assigned
  approver for baseline updates, visual diffs get rubber-stamped without
  real review, defeating the purpose.
- **Testing only full pages, never isolated components** — full-page
  visual tests are slower and more prone to cascading failures from one
  small, everywhere-used component changing; component-level testing
  (e.g. via Storybook-integrated tooling) is faster and more stable.

## Learn more

- [[functional-testing]] for the complementary behavior-verification discipline.
- [[accessibility-testing]] for another visual-adjacent but distinct quality dimension (perceivability for assistive technology, not just sighted appearance).
