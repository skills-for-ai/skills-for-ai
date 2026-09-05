---
name: selenium-testing-with-javascript-skill
description: Use when asked to write, explain, debug, or extend Selenium WebDriver browser automation code in JavaScript — locating elements, performing actions, explicit waits, and writing real assertions with Mocha.
---

# Selenium JavaScript Skill

[Selenium](https://www.selenium.dev/) is the longest-established, most
widely-taught browser automation project, built on the W3C WebDriver
protocol. The JavaScript binding is the npm package `selenium-webdriver`.

## Install and set up

```sh
npm install selenium-webdriver
```

Selenium needs a matching browser driver (e.g. `chromedriver` for Chrome)
available. You have two options:

- **Selenium Manager (recommended, default in modern versions).** Modern
  releases of `selenium-webdriver` bundle Selenium Manager, which
  automatically detects your installed browser and downloads a matching
  driver the first time you run `new Builder().forBrowser(...).build()`. In
  most cases you do not need to install a driver yourself at all.
- **Manual driver on PATH.** If you download `chromedriver` yourself and
  put it on `PATH`, on macOS the first run will likely be blocked by
  Gatekeeper with a message like "Apple could not verify chromedriver is
  free of malware...". Fix it once with either:
  - Right-click the `chromedriver` binary in Finder and choose "Open", or
  - `xattr -d com.apple.quarantine chromedriver` from a terminal.

## The four core concepts: locate, act, wait, assert

Any browser automation tool needs a way to locate elements, act on them,
wait for the right moment, and assert on results. Here is how Selenium's
JavaScript API does each.

### Locate: `By` + `findElement` / `findElements`

`driver.findElement(locator)` returns the first matching element (and
throws `NoSuchElementError` if none matches); `driver.findElements(locator)`
returns an array (empty if none match). Locators come from the `By` module:

```javascript
import { By } from 'selenium-webdriver';

await driver.findElement(By.id('id-example-1'));
await driver.findElement(By.name('name-example-1'));
await driver.findElement(By.className('class-example-1'));
await driver.findElement(By.linkText('Link Example 1'));
await driver.findElement(By.xpath("//input[@type='submit']"));
await driver.findElement(By.css('.class-example-1'));
```

Note: `By.className` accepts exactly one class name — it does **not**
accept a space-separated list of multiple classes. If you need to match an
element that has several classes at once, use `By.css('.class-a.class-b')`
instead.

### Act: interact with what you found

```javascript
await text.sendKeys('hello');   // type into a text input
await checkbox.click();          // click a checkbox
await radio.click();             // click a radio button

// A <select> needs the Select helper, not a plain click.
import { Select } from 'selenium-webdriver';
const select = await new Select(selectElement);
await select.selectByIndex(0);
```

### Wait: Selenium does NOT auto-wait

This is the single biggest practical difference from Playwright. Playwright
auto-waits for elements to be actionable (attached, visible, stable,
receiving events) before most actions. **Selenium does not do this for
you.** A few explicit-wait helpers exist, but you generally must reach for
them yourself — if you call `findElement`/`click`/`sendKeys` before the
page or element is ready, you get flaky failures (most commonly
`NoSuchElementError`, or a stale/not-interactable element error).

The fix is `driver.wait(...)` with a condition from `until`:

```javascript
import { until } from 'selenium-webdriver';

// Wait up to 10 seconds for the element to exist in the DOM.
const element = await driver.wait(until.elementLocated(By.id('id-example-1')), 10000);

// Wait up to 10 seconds for it to also be visible before interacting with it.
await driver.wait(until.elementIsVisible(element), 10000);
```

Treat every `findElement` call against dynamic content as a candidate for
an explicit wait first. Static, already-rendered content (as in the worked
example below) can get away without one, but anything that appears after a
click, a navigation, or an async page update needs `driver.wait`.

### Assert: Selenium has no built-in test runner or assertion library

Selenium itself only drives the browser — it has no `expect`, no test
runner, no reporter. To write real *tests* (not just walkthroughs), pair
`selenium-webdriver` with a test framework such as
[Mocha](https://mochajs.org/) (`describe`/`it`) plus Node's built-in
`assert` module, or an assertion library like [Chai](https://www.chaijs.com/).
See "From walkthrough to real test" below.

## Worked example

This is a trimmed, real, working example (based on
[`demo-selenium-javascript`](https://github.com/joelparkerhenderson/demo-selenium-javascript)'s
`src/demo.js`) against the free fixture page
[testingexamples.github.io](https://testingexamples.github.io), which
exists specifically to be automated against repeatedly:

```javascript
#!/usr/bin/env node

import { Browser, Builder, By, Select } from 'selenium-webdriver';

async function demo() {
    const driver = await new Builder()
        .forBrowser(Browser.CHROME)
        .build();

    try {
        await driver.get("https://testingexamples.github.io");

        // Find an element by id.
        const elementById = await driver.findElement(By.id("id-example-1"));
        console.log(await elementById.getAttribute("outerHTML"));

        // Find an element by name.
        const elementByName = await driver.findElement(By.name("name-example-1"));
        console.log(await elementByName.getAttribute("outerHTML"));

        // Find an element by class name.
        const elementByClassName = await driver.findElement(By.className("class-example-1"));
        console.log(await elementByClassName.getAttribute("outerHTML"));

        // Find an element that is a link by its text.
        const elementByLinkText = await driver.findElement(By.linkText("Link Example 1"));
        console.log(await elementByLinkText.getAttribute("outerHTML"));

        // Find an element by XPath query.
        const elementByXPath = await driver.findElement(By.xpath("//input[@type='submit']"));
        console.log(await elementByXPath.getAttribute("outerHTML"));

        // Type in a text input.
        const text = await driver.findElement(By.id("text-example-1-id"));
        await text.sendKeys("hello");

        // Click a checkbox input.
        const checkbox = await driver.findElement(By.id("checkbox-example-1-id"));
        await checkbox.click();

        // Click a radio input.
        const radio = await driver.findElement(By.id("radio-example-1-option-1-id"));
        await radio.click();

        // Choose a select input option.
        const selectElement = await driver.findElement(By.id("select-example-1-id"));
        const select = await new Select(selectElement);
        await select.selectByIndex(0);
        const option = await select.getFirstSelectedOption();
        console.log(await option.getAttribute("outerHTML"));
    } catch (err) {
        console.log(err.message);
    } finally {
        await driver.quit();
    }
}

demo().catch((err) => console.error(err));
```

## From walkthrough to real test

The example above is a **walkthrough**: it drives the browser and
`console.log`s what it finds, but it never checks that anything is
correct — nothing fails if the page changes. That is fine for exploring a
site or demonstrating API syntax, but it is not a test.

A **real test** replaces the `console.log` calls with assertions, and runs
under a test framework so failures are reported properly. Here is the
equivalent as a Mocha test using Node's built-in `assert`:

```javascript
import { Builder, By } from 'selenium-webdriver';
import { strict as assert } from 'assert';

describe('testingexamples.github.io fixtures', function () {
  this.timeout(20000);
  let driver;

  before(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async () => {
    await driver.quit();
  });

  it('id-example-1 has the expected text', async () => {
    await driver.get('https://testingexamples.github.io');
    const element = await driver.findElement(By.id('id-example-1'));
    const text = await element.getText();
    assert.strictEqual(text, 'Id Example 1');
  });
});
```

Run it with `npx mocha` (after adding Mocha as a dev dependency). This is
the idiomatic way to write actual Selenium tests in JavaScript: Selenium
drives the browser, Mocha structures and runs the tests, and `assert` (or
Chai, if you prefer `expect`/`should` style) checks the results. For a
full real-world example with many such assertions, see
[`demo-selenium-javascript-for-nhs-wales`](https://github.com/joelparkerhenderson/demo-selenium-javascript-for-nhs-wales)
in "Learn more" below.

## Common pitfalls

- **Forgetting `await`.** Nearly every WebDriver call is asynchronous
  (`findElement`, `click`, `sendKeys`, `getAttribute`, `getText`, ...). A
  missing `await` returns a `Promise` instead of a result and causes
  confusing failures later.
- **`NoSuchElementError` from acting before the page/element is ready.**
  This almost always means you needed an explicit wait
  (`driver.wait(until.elementLocated(...))`) and did not add one — see
  "Wait" above.
- **Not calling `driver.quit()` in a `finally`.** If an assertion or error
  is thrown before `driver.quit()` runs, the browser process is left
  running (leaked). Always wrap the driver lifetime in `try { ... } finally
  { await driver.quit(); }`, as in the worked example above.
- **The macOS Gatekeeper chromedriver warning.** If you manually downloaded
  `chromedriver` and macOS blocks it as unverified, right-click → Open once,
  or run `xattr -d com.apple.quarantine chromedriver`. Using Selenium
  Manager (the default in modern `selenium-webdriver`) avoids this entirely
  by managing the driver for you.
- **`By.className` with multiple classes.** `By.className('a b')` does not
  work the way you might expect for matching an element with both classes
  `a` and `b`. Use a CSS selector instead: `By.css('.a.b')`.

## Learn more / real examples

- [`demo-selenium-javascript`](https://github.com/joelparkerhenderson/demo-selenium-javascript)
  — the locator-strategy walkthrough this skill's worked example is based
  on, against [testingexamples.github.io](https://testingexamples.github.io).
- [`demo-selenium-javascript-for-google-search`](https://github.com/testingexamples/demo-selenium-javascript-for-google-search)
  — the same patterns against Google Search. **Illustrative only**: Google's
  Terms of Service restrict automated querying of Google Search, so this
  repo shows tool syntax and is not meant to be run repeatedly against the
  live site.
- [`demo-selenium-javascript-for-google-maps`](https://github.com/testingexamples/demo-selenium-javascript-for-google-maps)
  — the same patterns against Google Maps. **Illustrative only**, for the
  same Google Terms of Service reason as above.
- [`demo-selenium-javascript-for-nhs-wales`](https://github.com/joelparkerhenderson/demo-selenium-javascript-for-nhs-wales)
  — a real test suite with real assertions against
  [nhs.wales](https://www.nhs.wales/).
- [Selenium WebDriver documentation](https://www.selenium.dev/documentation/webdriver/)
  — the official reference.
- [testingexamples.github.io](https://testingexamples.github.io/) — the
  free fixture page these demos target; safe to run against repeatedly.

---

AGENTS.md and spec/index.md in this repo are the source of truth for this
skill's own scope — if this file ever disagrees with those, they win.
