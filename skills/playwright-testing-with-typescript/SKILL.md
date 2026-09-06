---
name: playwright-testing-with-typescript
description: Use when asked to write, explain, debug, or extend Playwright browser automation code in TypeScript — locating elements, performing actions, waiting, and writing real assertions with @playwright/test.
---

# Playwright TypeScript

## What Playwright is

Playwright (https://playwright.dev/) is a browser automation library that drives Chromium, Firefox, and WebKit through one API. The `playwright` npm package ships its own TypeScript type definitions — `Browser`, `BrowserContext`, `Page`, `Locator`, and more — so there is no separate `@types/playwright` package to install.

Install commands:

```bash
# Library only, for scripting/automation:
npm install playwright

# Full TypeScript test-runner scaffold (recommended for real tests):
npm init playwright@latest
```

`npm init playwright@latest` scaffolds a project in TypeScript by default — no extra typing setup is needed, because `@playwright/test` is itself written in and for TypeScript.

## The four core concepts, for Playwright specifically

Any browser automation code — in any tool — comes down to four things: **locating** an element, **acting** on it, **waiting** for it to be ready, and **asserting** on it. Playwright's typed locator API is built around doing all four safely.

### Locating

`page.locator(...)` returns a `Locator` — a typed, lazy handle to element(s) matching a selector. It does not query the DOM immediately; it re-queries every time you act on it. Playwright supports several selector strategies:

```typescript
page.locator('#id-example-1');                          // by id
page.locator('[name="name-example-1"]');                 // by attribute
page.locator('.class-example-1');                         // by class
page.locator('a', { hasText: 'Link Example 1' });         // by visible text
page.locator('xpath=//input[@type="submit"]');            // by XPath
```

### Acting

Once you have a `Locator`, call an action method: `.click()`, `.fill(value)`, `.check()`, `.uncheck()`, `.selectOption(...)`, and so on. These are `async` methods returning `Promise<void>` (or a value, for reads like `.inputValue()`), so they must be `await`ed.

### Waiting — auto-waiting and auto-retry

This is Playwright's headline advantage over Selenium: **locators auto-wait and auto-retry until the element is actionable.** Before performing a click, fill, check, or similar action, Playwright automatically waits for the element to be attached to the DOM, visible, stable (not animating), and enabled — retrying the underlying check internally until a timeout elapses. You do not write manual polling loops, explicit waits, or sleeps for this. You only reach for an explicit wait (`page.waitForSelector`, `locator.waitFor()`, etc.) for conditions outside the standard actionability checks.

### Asserting

Assertions are the difference between a walkthrough and a real test — see "From walkthrough to real test" below.

### How the types help

Because `page.locator(...)` is typed to return `Locator`, and `Page`/`Browser`/`BrowserContext` are all real interfaces, TypeScript catches whole classes of mistakes at compile time that plain JavaScript would only surface at runtime (or silently get wrong):

- Calling a method that doesn't exist on `Locator` or `Page` (typo, or confusing an element handle with a locator) is a compile error.
- Passing the wrong argument shape to `.selectOption(...)` or `.evaluate(...)` is a compile error.
- The callback passed to `.evaluate((el: Element) => ...)` is typed, so you get autocomplete and type-checking on the DOM element itself.

## A full worked example

This is real, working code (adapted from https://github.com/testingexamples/demo-playwright-typescript), run with `ts-node` against the free fixture page https://testingexamples.github.io:

```typescript
#!/usr/bin/env ts-node

import { chromium, Browser, BrowserContext, Page, Locator, ChromiumBrowser } from 'playwright';

async function demo(): Promise<void> {
    const browser: ChromiumBrowser = await chromium.launch({ headless: false });
    const context: BrowserContext = await browser.newContext();
    const page: Page = await context.newPage();

    try {
        await page.goto("https://testingexamples.github.io");

        // Find an element by id.
        const elementById: Locator = page.locator('#id-example-1');
        console.log(await elementById.evaluate((el: Element): string => el.outerHTML));

        // Find an element by name attribute.
        const elementByName: Locator = page.locator('[name="name-example-1"]');
        console.log(await elementByName.evaluate((el: Element): string => el.outerHTML));

        // Find an element by class name.
        const elementByClassName: Locator = page.locator('.class-example-1');
        console.log(await elementByClassName.evaluate((el: Element): string => el.outerHTML));

        // Find a link element by its visible text.
        const elementByLinkText: Locator = page.locator('a', { hasText: 'Link Example 1' });
        console.log(await elementByLinkText.evaluate((el: Element): string => el.outerHTML));

        // Find an element by XPath.
        const elementByXPath: Locator = page.locator('xpath=//input[@type="submit"]');
        console.log(await elementByXPath.evaluate((el: Element): string => el.outerHTML));

        // Fill a text input.
        const text: Locator = page.locator('#text-example-1-id');
        await text.fill("hello");

        // Check a checkbox.
        const checkbox: Locator = page.locator('#checkbox-example-1-id');
        await checkbox.check();

        // Check a radio button.
        const radio: Locator = page.locator('#radio-example-1-option-1-id');
        await radio.check();

        // Select an option by index.
        const selectElement: Locator = page.locator('#select-example-1-id');
        await selectElement.selectOption({ index: 0 });
        const selectedValue: string = await selectElement.inputValue();
        console.log(`Selected option value: ${selectedValue}`);
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.log(err.message);
        }
    } finally {
        await browser.close();
    }
}

demo().catch((err: Error): void => {
    console.error(err);
    process.exit(1);
});
```

Note what this script does: it locates elements, acts on them, and logs what it finds. It does not check that anything is *correct* — it has no assertions. That makes it a walkthrough, not a test.

## From walkthrough to real test

The script above is a **walkthrough**: it exercises the API and prints results for a human to read. It will "pass" (exit 0) even if `#id-example-1` has the wrong text, because nothing checks the text — it's just logged.

A **real test** uses the `@playwright/test` test runner and its `expect()` — with **web-first assertions** that auto-retry until the condition is true or a timeout elapses:

```typescript
import { test, expect } from '@playwright/test';

test('id example has expected text', async ({ page }) => {
  await page.goto('https://testingexamples.github.io');
  await expect(page.locator('#id-example-1')).toHaveText('Id Example 1');
});
```

Why this matters:

- `test()` and `expect()` come from `@playwright/test`, which is written in and for TypeScript — no extra typing setup, no separate assertion library to configure.
- `expect(locator).toHaveText(...)` (and siblings like `.toBeVisible()`, `.toHaveValue()`, `.toHaveCount()`) are **web-first assertions**: Playwright re-checks the condition against the live page repeatedly until it passes or the timeout is hit. You never write a manual polling loop or `sleep` to wait for text to appear — the assertion itself retries.
- `@playwright/test` also gives you fixtures (the `{ page }` argument is injected and torn down automatically — no manual `browser.close()` bookkeeping) and parallel execution across test files out of the box.
- If the assertion never becomes true, the test fails with a clear diff (expected vs. actual), unlike a walkthrough script that would just log the wrong value and exit successfully.

Rule of thumb: reach for a plain script like the worked example above only for exploration or one-off scraping. For anything you want to keep running as a check of correctness (CI, regression protection), write it as an `@playwright/test` test with real `expect(...)` assertions.

## Common pitfalls

- **Forgetting `await`.** TypeScript's type checker will not flag a missing `await` on its own — `page.locator(...).click()` without `await` compiles fine and returns an unhandled `Promise<void>`, causing the action to fire-and-forget and the script to race ahead. The `@typescript-eslint/no-floating-promises` lint rule catches this; the compiler alone does not.
- **Confusing execution paths.** `tsc` (compile only), `ts-node` (compile-and-run a script directly), and the `@playwright/test` runner's own built-in TypeScript transform are three different ways to execute `.ts` files, with different module resolution and config defaults. Know which one you're invoking — a script that runs fine under `ts-node` is not automatically what `npx playwright test` will run, and vice versa.
- **Strict-mode locator violations.** By default, Playwright locators are strict: if a selector matches more than one element, an action on it (like `.click()`) throws, rather than silently acting on the first match. Narrow the selector, or use `.first()`/`.nth()`/`.filter()` explicitly when multiple matches are expected.
- **Over-typing.** Playwright infers most types already — `chromium.launch()` already returns `Promise<Browser>` (or the more specific `ChromiumBrowser`), and `page.locator(...)` already returns `Locator`. Explicit annotations, as used throughout the worked example above, are there for clarity and teaching; they are not required for the code to type-check correctly.

## Learn more / real examples

- https://github.com/testingexamples/demo-playwright-typescript — locator-strategy walkthrough against https://testingexamples.github.io (the generic fixture target).
- https://github.com/testingexamples/demo-playwright-typescript-for-google-search — same patterns applied to Google Search. **Illustrative only**: Google's Terms of Service restrict automated querying of Google Search, so this repo is meant to show tool syntax, not to be run repeatedly against the live site.
- https://github.com/testingexamples/demo-playwright-typescript-for-google-maps — same patterns applied to Google Maps. **Illustrative only**, for the same reason: Google's Terms of Service restrict automated querying of Google Maps.
- https://github.com/testingexamples/demo-playwright-typescript-for-nhs-wales — a real test suite with real assertions against https://www.nhs.wales/.
- https://playwright.dev/docs/intro — official Playwright documentation.
- https://testingexamples.github.io/ — the free fixture page these demos target; safe to run against repeatedly.

---

AGENTS.md and spec/index.md in this repo are the source of truth for this skill's own scope — if this file ever disagrees with those, they win.
