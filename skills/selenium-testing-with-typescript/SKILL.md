---
name: selenium-testing-with-typescript
description: Use when asked to write, explain, debug, or extend Selenium WebDriver browser automation code in TypeScript — locating elements, performing actions, explicit waits, and writing real assertions with Mocha.
---

# Selenium TypeScript

## What Selenium is

[Selenium](https://www.selenium.dev/) is the longest-established, most
widely-taught browser automation project, built on the W3C WebDriver
protocol. It drives a real browser (Chrome, Firefox, Edge, Safari, …)
through a standardized wire protocol.

TypeScript uses the same npm package as JavaScript:

```sh
npm install selenium-webdriver
npm install --save-dev @types/selenium-webdriver typescript ts-node @types/node
```

`selenium-webdriver`'s own `package.json` carries no `types`/`typings`
field — it does **not** ship its own `.d.ts` declarations, so the
community `@types/selenium-webdriver` package is genuinely required for
TypeScript, not a legacy leftover. (Verified directly against the npm
registry, and matches the real `demo-selenium-typescript` sibling repo's
own `package.json`.)

### Browser driver setup

Selenium needs a matching browser driver (e.g. `chromedriver` for Chrome)
available on `PATH`, or managed automatically via **Selenium Manager**,
which is bundled with modern `selenium-webdriver` versions and
auto-downloads the right driver for the browser you ask for. In most
cases today you don't need to do anything extra — just call
`.forBrowser(Browser.CHROME)` and Selenium Manager takes care of it.

If you do manage a driver binary manually, on macOS the first run of a
freshly downloaded `chromedriver` is often blocked by Gatekeeper
("Apple could not verify chromedriver is free of malware..."). Fix this
once, either by:

- Right-clicking the binary in Finder and choosing "Open" once, or
- Running `xattr -d com.apple.quarantine chromedriver`

## The four core concepts: locate, act, wait, assert

Any browser automation tool boils down to the same four things. Here is
how each looks in Selenium's typed API.

### 1. Locating: `By` and `findElement`

Selenium's `By` module provides locator strategies. `driver.findElement`
returns a `WebElement`:

```typescript
import { By, WebElement } from 'selenium-webdriver';

const elementById: WebElement = await driver.findElement(By.id("id-example-1"));
const elementByName: WebElement = await driver.findElement(By.name("name-example-1"));
const elementByClassName: WebElement = await driver.findElement(By.className("class-example-1"));
const elementByLinkText: WebElement = await driver.findElement(By.linkText("Link Example 1"));
const elementByXPath: WebElement = await driver.findElement(By.xpath("//input[@type='submit']"));
```

Use `driver.findElements` (plural) when you expect zero or more matches
and want a `WebElement[]` back instead of a thrown error.

### 2. Acting: `sendKeys`, `click`, `Select`

```typescript
import { Select } from 'selenium-webdriver';

// Type in a text input.
await text.sendKeys("hello");

// Click a checkbox or radio input.
await checkbox.click();
await radio.click();

// Choose a select input option.
const select: Select = new Select(selectElement);
await select.selectByIndex(0);
```

### 3. Waiting: Selenium does NOT auto-wait

This is the single biggest practical difference from Playwright.
Playwright's locator actions (`click`, `fill`, etc.) automatically wait
for an element to be attached, visible, stable, and enabled before
acting on it. **Selenium does not do this.** `driver.findElement` and
`WebElement` actions act (or fail) immediately against whatever is in
the DOM the instant they run.

If the page is still loading, or a re-render hasn't happened yet, an
unguarded `findElement`/action call will throw (typically
`NoSuchElementError` or a stale/not-interactable error) rather than
politely waiting. This is the main source of flaky Selenium tests.

Selenium does provide explicit waits you must opt into yourself, via
`driver.wait(until...)`:

```typescript
import { until } from 'selenium-webdriver';

const element = await driver.wait(until.elementLocated(By.id('id-example-1')), 10000);
await driver.wait(until.elementIsVisible(element), 10000);
```

Reach for an explicit wait whenever you're acting on something that
might not be in the DOM yet, or might be present but not yet visible or
interactable — for example right after a navigation, a click that
triggers an async re-render, or a submit that reveals a new element.

### 4. Asserting

Selenium itself has no built-in assertion library — see "From
walkthrough to real test" below for how to pair it with Node's `assert`
module and a test framework.

## Full worked example

This is a real, working walkthrough script (trimmed from the sibling
`demo-selenium-typescript` repo — see "Learn more" below). It logs what
it finds rather than asserting anything; it demonstrates the locator
strategies and actions above end to end.

```typescript
#!/usr/bin/env ts-node

import { Browser, Builder, By, Select, WebDriver, WebElement } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome.js';

async function demo(): Promise<void> {
    const options: Options = new Options();

    const driver: WebDriver = await new Builder()
        .forBrowser(Browser.CHROME)
        .setChromeOptions(options)
        .build();

    try {
        await driver.get("https://testingexamples.github.io");

        // Find an element by id.
        const elementById: WebElement = await driver.findElement(By.id("id-example-1"));
        console.log(await elementById.getAttribute("outerHTML"));

        // Find an element by name.
        const elementByName: WebElement = await driver.findElement(By.name("name-example-1"));
        console.log(await elementByName.getAttribute("outerHTML"));

        // Find an element by class name.
        const elementByClassName: WebElement = await driver.findElement(By.className("class-example-1"));
        console.log(await elementByClassName.getAttribute("outerHTML"));

        // Find an element that is a link by its text.
        const elementByLinkText: WebElement = await driver.findElement(By.linkText("Link Example 1"));
        console.log(await elementByLinkText.getAttribute("outerHTML"));

        // Find an element by XPath query.
        const elementByXPath: WebElement = await driver.findElement(By.xpath("//input[@type='submit']"));
        console.log(await elementByXPath.getAttribute("outerHTML"));

        // Type in a text input.
        const text: WebElement = await driver.findElement(By.id("text-example-1-id"));
        await text.sendKeys("hello");

        // Click a checkbox input.
        const checkbox: WebElement = await driver.findElement(By.id("checkbox-example-1-id"));
        await checkbox.click();

        // Click a radio input.
        const radio: WebElement = await driver.findElement(By.id("radio-example-1-option-1-id"));
        await radio.click();

        // Choose a select input option.
        const selectElement: WebElement = await driver.findElement(By.id("select-example-1-id"));
        const select: Select = new Select(selectElement);
        await select.selectByIndex(0);
        const option: WebElement = await select.getFirstSelectedOption();
        console.log(await option.getAttribute("outerHTML"));
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.log(err.message);
        }
    } finally {
        await driver.quit();
    }
}

demo().catch((err: Error): void => console.error(err));
```

## From walkthrough to real test

The script above is a **walkthrough**: it navigates, locates elements,
acts on them, and logs what it found. That's useful for exploring a
page or a locator strategy, but it isn't a test — nothing fails if the
page changes underneath it.

Selenium has no built-in test runner or assertion library. The
idiomatic way to write a **real** Selenium test in TypeScript is to
pair `selenium-webdriver` with a test framework — commonly
[Mocha](https://mochajs.org/) (`describe`/`it`) — plus Node's built-in
`assert` module, run via `ts-node` or compiled first with `tsc`.

```typescript
import { Builder, By, WebDriver } from 'selenium-webdriver';
import { strict as assert } from 'assert';

describe('testingexamples.github.io fixtures', function () {
  this.timeout(20000);
  let driver: WebDriver;

  before(async () => { driver = await new Builder().forBrowser('chrome').build(); });
  after(async () => { await driver.quit(); });

  it('id-example-1 has the expected text', async () => {
    await driver.get('https://testingexamples.github.io');
    const element = await driver.findElement(By.id('id-example-1'));
    const text: string = await element.getText();
    assert.strictEqual(text, 'Id Example 1');
  });
});
```

The differences that matter:

- `describe`/`it` give you named, independently reportable test cases,
  instead of one script that runs top to bottom.
- `before`/`after` hooks manage the driver lifecycle once per suite
  (or use `beforeEach`/`afterEach` for a fresh driver per test).
- `assert.strictEqual` (or any assertion library) turns "does this
  match what I expect" into a pass/fail result instead of a
  `console.log` a human has to read.
- Combine this with an explicit wait (see above) when the assertion
  targets something that might not be immediately present.

## Common pitfalls

- **Forgetting `await`.** Every `WebDriver`/`WebElement` method returns
  a `Promise`. A missing `await` silently produces a `Promise` object
  instead of the value or completed action you wanted, and lets
  subsequent lines race ahead of the browser.
- **Acting before the page/element is ready.** Because Selenium doesn't
  auto-wait, calling `findElement` or an action too early throws
  `NoSuchElementError` (or a stale-element/not-interactable error).
  Add an explicit `driver.wait(until...)` wherever timing is uncertain.
- **Not calling `driver.quit()` in a `finally` block.** If an error is
  thrown before cleanup and you haven't wrapped the flow in
  `try`/`finally`, the browser process is left running (a "leaked"
  browser), which piles up over repeated test runs.
- **The macOS Gatekeeper chromedriver warning.** A manually downloaded
  `chromedriver` binary needs to be allowed once — right-click and
  "Open", or `xattr -d com.apple.quarantine chromedriver` — before
  macOS will run it.
- **`ts-node` vs. compiling with `tsc` first.** Both running a `.ts`
  file directly with `ts-node` and compiling with `tsc` then running
  the emitted `.js` work fine. Pick one per project and be consistent
  — mixing them (e.g. some scripts run via `ts-node`, others expected
  to already be compiled) is a common source of "why doesn't this run"
  confusion.

## Learn more / real examples

Sibling demo repos in this same project family, all under the
`testingexamples` GitHub org:

- [demo-selenium-typescript](https://github.com/testingexamples/demo-selenium-typescript)
  — locator-strategy walkthrough against
  [https://testingexamples.github.io](https://testingexamples.github.io)
  (the generic target; free to run against repeatedly).
- [demo-selenium-typescript-for-google-search](https://github.com/testingexamples/demo-selenium-typescript-for-google-search)
  — same patterns against Google Search (illustrative only).
- [demo-selenium-typescript-for-google-maps](https://github.com/testingexamples/demo-selenium-typescript-for-google-maps)
  — same patterns against Google Maps (illustrative only).
- [demo-selenium-typescript-for-nhs-wales](https://github.com/testingexamples/demo-selenium-typescript-for-nhs-wales)
  — a real test suite with real assertions against
  [https://www.nhs.wales/](https://www.nhs.wales/) (home page title, an
  "About Us" page title/headline, and search results content). This was
  the last gap in the demo repo family — Selenium+TypeScript was the one
  tool+language combo without an NHS Wales variant until this repo was
  added.

**Caveat:** Google's Terms of Service restrict automated querying of
Google Search and Google Maps. The two Google-targeting sibling repos
above are illustrative only — they show tool syntax — and are not meant
to be run repeatedly against the live sites.

Further reading:

- [Selenium WebDriver documentation](https://www.selenium.dev/documentation/webdriver/)
- [https://testingexamples.github.io/](https://testingexamples.github.io/)
  — the free fixture page these demos target, safe to run against
  repeatedly.

---

AGENTS.md and spec/index.md in this repo are the source of truth for
this skill's own scope — if this file ever disagrees with those, they
win.
