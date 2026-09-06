---
name: playwright-testing-with-javascript
description: Use when asked to write, explain, debug, or extend Playwright browser automation code in JavaScript — locating elements, performing actions, waiting, and writing real assertions with @playwright/test.
---

# Playwright JavaScript

Playwright (https://playwright.dev/) is Microsoft's browser automation
library. It drives real Chromium, Firefox, and WebKit browsers from code.
The JavaScript binding is the npm package `playwright`.

Install:

```sh
# The library only, for scripts you drive yourself:
npm install playwright

# The full test-runner scaffold (recommended for real test suites):
npm init playwright@latest
```

## The four core concepts

Any browser automation tool needs the same four things. Here is how each
one maps onto Playwright's locator API.

1. **Locating** — find the element you want to act on.

   Playwright's core primitive is `page.locator(...)`. A locator is not a
   single lookup; it's a *reusable, lazy description* of how to find an
   element. It doesn't search the DOM until you act on it or query it, and
   it re-searches every time.

   ```javascript
   page.locator('#id-example-1');                       // by id
   page.locator('[name="name-example-1"]');              // by attribute
   page.locator('.class-example-1');                      // by class
   page.locator('a', { hasText: 'Link Example 1' });      // by visible text
   page.locator('xpath=//input[@type="submit"]');         // by XPath
   ```

2. **Acting** — do something to the located element.

   ```javascript
   await text.fill('hello');            // type into a text input
   await checkbox.check();              // check a checkbox
   await radio.check();                 // select a radio button
   await selectElement.selectOption({ index: 0 }); // choose a <select> option
   await elementByLinkText.click();     // click
   ```

3. **Waiting** — Playwright locators **auto-wait and auto-retry** until the
   element is actionable (attached, visible, stable, enabled, and not
   obscured) before performing the action, up to a timeout. This is
   Playwright's headline advantage over Selenium: you almost never write a
   manual `sleep()`, polling loop, or explicit "wait until clickable" call.
   You just describe the element and call the action; Playwright handles
   the timing.

4. **Asserting** — check that the page is in the state you expect. Plain
   `console.log` is not an assertion. Real assertions come from
   `@playwright/test`'s `expect()` (see below), and — like locator actions
   — they auto-retry too.

## Worked example (walkthrough script)

This is real, working code (trimmed from
[demo-playwright-javascript](https://github.com/joelparkerhenderson/demo-playwright-javascript)'s
`src/demo.js`) run directly with `node`, not a test runner. It demonstrates
locating and acting, and just logs what it finds — it makes no assertions.

```javascript
#!/usr/bin/env node

// Import Playwright
import { chromium } from 'playwright';

async function demo() {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    try {
        await page.goto("https://testingexamples.github.io");

        // Find an element by id.
        const elementById = page.locator('#id-example-1');
        console.log(await elementById.evaluate(el => el.outerHTML));

        // Find an element by name attribute.
        const elementByName = page.locator('[name="name-example-1"]');
        console.log(await elementByName.evaluate(el => el.outerHTML));

        // Find an element by class name.
        const elementByClassName = page.locator('.class-example-1');
        console.log(await elementByClassName.evaluate(el => el.outerHTML));

        // Find a link element by its visible text.
        const elementByLinkText = page.locator('a', { hasText: 'Link Example 1' });
        console.log(await elementByLinkText.evaluate(el => el.outerHTML));

        // Find an element by XPath.
        const elementByXPath = page.locator('xpath=//input[@type="submit"]');
        console.log(await elementByXPath.evaluate(el => el.outerHTML));

        // Fill a text input.
        const text = page.locator('#text-example-1-id');
        await text.fill("hello");

        // Check a checkbox.
        const checkbox = page.locator('#checkbox-example-1-id');
        await checkbox.check();

        // Check a radio button.
        const radio = page.locator('#radio-example-1-option-1-id');
        await radio.check();

        // Select an option by index.
        const selectElement = page.locator('#select-example-1-id');
        await selectElement.selectOption({ index: 0 });
        console.log(await selectElement.inputValue());
    } catch (err) {
        console.log(err.message);
    } finally {
        // Always close the browser, even if something above threw.
        await browser.close();
    }
}

demo().catch((err) => console.error(err));
```

## From walkthrough to real test

The script above is a *walkthrough*: it proves the locators work by
printing HTML to the console, but nothing fails if the page changes. A
real test needs a real assertion — something that fails the build when the
page stops matching expectations.

That's what the `@playwright/test` test runner is for. It provides:

- `test(name, async ({ page }) => { ... })` — a test function with a
  `page` fixture already created and torn down for you (no manual
  `chromium.launch()` / `browser.close()` bookkeeping).
- `expect(locator)` — **web-first assertions** that auto-retry, just like
  locator actions do.
- Built-in parallel execution across tests and files.

Walkthrough (no assertion, just a log):

```javascript
const elementById = page.locator('#id-example-1');
console.log(await elementById.evaluate(el => el.outerHTML));
```

Real test (an assertion that can fail):

```javascript
import { test, expect } from '@playwright/test';

test('id example has expected text', async ({ page }) => {
  await page.goto('https://testingexamples.github.io');
  await expect(page.locator('#id-example-1')).toHaveText('Id Example 1');
});
```

Why `expect(...).toHaveText(...)` doesn't need manual polling: web-first
assertions re-check the condition repeatedly until it becomes true or the
timeout expires, the same way locator actions re-check actionability.
You never write `await page.waitForTimeout(...)` followed by a plain
`===` comparison — the assertion itself is the wait.

See a full real test suite with real assertions in
[demo-playwright-javascript-for-nhs-wales](https://github.com/joelparkerhenderson/demo-playwright-javascript-for-nhs-wales)
(Mocha-based, but the same `expect`-driven pattern applies to
`@playwright/test`).

## Common pitfalls

- **Forgetting `await`.** Every locator action and every `expect(...)`
  assertion returns a Promise. A missing `await` means the next line runs
  before the browser has done anything, and errors show up in confusing
  places.
- **Using `page.$` / `page.$$` instead of locators.** These are Playwright's
  legacy element-handle API. They return a snapshot at call time with no
  auto-waiting or auto-retrying. Prefer `page.locator(...)` for everything
  new.
- **Not closing the browser in a `finally`.** If an action throws mid-script
  and you only call `browser.close()` at the end of the `try` block, the
  browser process leaks. Always close in `finally`.
- **Running headed vs. headless without meaning to.** `chromium.launch({
  headless: false })` pops up a visible browser window — useful while
  developing, but slower and unsuitable for CI. Default to headless in CI
  and switch to headed only when debugging locally.
- **Strict-mode violations.** By default, a Playwright locator that
  resolves to more than one element throws instead of silently picking the
  first one. Narrow the locator (e.g. add `.first()`, a more specific
  selector, or `.filter(...)`) rather than fighting the error.

## Learn more / real examples

- [demo-playwright-javascript](https://github.com/joelparkerhenderson/demo-playwright-javascript) —
  the locator-strategy walkthrough this skill's worked example is drawn
  from, run against https://testingexamples.github.io (the generic,
  free-to-hammer fixture page).
- [demo-playwright-javascript-for-google-search](https://github.com/testingexamples/demo-playwright-javascript-for-google-search) —
  the same patterns applied to Google Search. **Illustrative only** —
  Google's Terms of Service restrict automated querying of Google Search,
  so this repo demonstrates syntax and is not meant to be run repeatedly
  against the live site.
- [demo-playwright-javascript-for-google-maps](https://github.com/testingexamples/demo-playwright-javascript-for-google-maps) —
  the same patterns applied to Google Maps. **Illustrative only**, for the
  same Google Terms of Service reason.
- [demo-playwright-javascript-for-nhs-wales](https://github.com/joelparkerhenderson/demo-playwright-javascript-for-nhs-wales) —
  a real, Mocha-based test suite with real assertions against
  https://www.nhs.wales/, showing what a genuine assertion-driven suite
  looks like end to end.
- [Playwright docs: Getting started](https://playwright.dev/docs/intro)
- [testingexamples.github.io](https://testingexamples.github.io/) — the
  free fixture page these demos target; safe to run against repeatedly.

AGENTS.md and spec/index.md in this repo are the source of truth for this
skill's own scope — if this file ever disagrees with those, they win.
