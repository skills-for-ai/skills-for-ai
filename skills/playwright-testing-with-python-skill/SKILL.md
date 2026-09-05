---
name: playwright-testing-with-python-skill
description: Use when asked to write, explain, debug, or extend Playwright browser automation code in Python — locating elements, performing actions, waiting, and writing real assertions with pytest-playwright.
---

# Playwright Python Skill

Playwright is Microsoft's browser automation library: one API drives Chromium,
Firefox, and WebKit, with a Python binding available as the PyPI package
`playwright`. See https://playwright.dev/.

## Install

For writing browser-automation scripts:

```sh
pip install playwright
playwright install
```

For writing real tests with pytest:

```sh
pip install pytest-playwright
playwright install
```

`playwright install` downloads the actual browser binaries. Playwright does
not bundle them with the Python package, so this step is required after
either install — skipping it is one of the most common first-run failures
(see Common pitfalls below).

## Four core concepts

Any browser automation tool needs to do four things: locate an element, act
on it, wait for it to be ready, and assert something about it. Playwright's
Python API shapes each of these distinctly:

1. **Locating.** Everything starts with `page.locator(...)`, which returns a
   `Locator` — a lazy, re-queryable reference to an element (or elements),
   not a snapshot. Locators can be built from CSS (`'#id-example-1'`,
   `'.class-example-1'`), attribute selectors (`'[name="name-example-1"]'`),
   XPath (`'xpath=//input[@type="submit"]'`), or text content
   (`page.locator('a', has_text='Link Example 1')`). Because a locator is
   lazy, you can hold onto it and it will re-find the live element every
   time you use it.

2. **Acting.** Locators expose action methods that mirror what a user does:
   `.click()`, `.fill(text)`, `.check()`, `.select_option(...)`,
   `.hover()`, `.press(key)`. These act on real elements, not raw DOM nodes,
   so they fail loudly if the target turns out not to be interactable.

3. **Waiting.** This is Playwright's headline advantage over tools like
   Selenium: locators auto-wait and auto-retry. Before `.click()` or
   `.fill()` runs, Playwright waits for the element to be attached, visible,
   stable (not animating), and able to receive events — up to a timeout —
   with no explicit `sleep()` or manual polling loop required. The same
   auto-retry applies to assertions (see below).

4. **Asserting.** For actual test suites, use `playwright.sync_api.expect()`
   web-first assertions instead of a bare Python `assert`. They retry until
   the condition holds or a timeout expires, which absorbs normal timing
   flakiness (an element rendering a moment late, text arriving after a
   fetch) without you writing any wait code.

### sync_api vs. async_api

Playwright ships two Python APIs with matching method names:

- `playwright.sync_api` — blocking calls, ordinary functions, no `async`/
  `await`. Recommended for beginners and for most scripts and test suites:
  it reads top-to-bottom and is what `pytest-playwright` uses under the
  hood.
- `playwright.async_api` — `async`/`await` throughout. Reach for it when you
  need real concurrency, e.g. driving several pages/contexts in parallel
  inside one `asyncio` event loop.

Never mix the two in one file (see Common pitfalls).

## Worked example

This is the real, working walkthrough style, trimmed from
[demo-playwright-python](https://github.com/joelparkerhenderson/demo-playwright-python)'s
`src/demo.py`. It opens a browser, finds elements several different ways,
and performs a few actions, printing what it finds as it goes:

```python
from playwright.sync_api import sync_playwright, Locator

def demo() -> None:
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        context = browser.new_context()
        page = context.new_page()

        try:
            page.goto("https://testingexamples.github.io")

            # Find an element by id.
            element_by_id: Locator = page.locator('#id-example-1')
            print(element_by_id.evaluate('(el) => el.outerHTML'))

            # Find an element by name attribute.
            element_by_name: Locator = page.locator('[name="name-example-1"]')
            print(element_by_name.evaluate('(el) => el.outerHTML'))

            # Find an element by class name.
            element_by_class_name: Locator = page.locator('.class-example-1')
            print(element_by_class_name.evaluate('(el) => el.outerHTML'))

            # Find a link element by its visible text.
            element_by_link_text: Locator = page.locator('a', has_text='Link Example 1')
            print(element_by_link_text.evaluate('(el) => el.outerHTML'))

            # Find an element by XPath.
            element_by_xpath: Locator = page.locator('xpath=//input[@type="submit"]')
            print(element_by_xpath.evaluate('(el) => el.outerHTML'))

            # Fill a text input.
            text: Locator = page.locator('#text-example-1-id')
            text.fill("hello")

            # Check a checkbox.
            checkbox: Locator = page.locator('#checkbox-example-1-id')
            checkbox.check()

            # Check a radio button.
            radio: Locator = page.locator('#radio-example-1-option-1-id')
            radio.check()

            # Select an option by index.
            select_element: Locator = page.locator('#select-example-1-id')
            select_element.select_option(index=0)
            print(select_element.input_value())
        except Exception as err:
            print(f"Error: {err}")
        finally:
            browser.close()

if __name__ == "__main__":
    demo()
```

Note the `try`/`finally`: `browser.close()` must run even if something above
raises, or the browser process leaks.

## From walkthrough to real test

The script above is a *walkthrough*: it prints HTML and values for a human
to read, and never actually confirms anything. That's fine for exploring a
page, but it is not a test — nothing fails if the page changes.

A real test replaces `print(...)` with an assertion, and replaces bare
Python asserts with Playwright's own auto-retrying `expect()`. Using
`pytest` with the `pytest-playwright` plugin also gets you a ready-made
`page` fixture, so there's no `sync_playwright()`/`launch()`/`close()`
boilerplate to write or clean up:

```python
from playwright.sync_api import Page, expect

def test_id_example_has_expected_text(page: Page) -> None:
    page.goto("https://testingexamples.github.io")
    expect(page.locator("#id-example-1")).to_have_text("Id Example 1")
```

Run it with `pytest` (no test runner code of your own needed). Why prefer
`expect(...).to_have_text(...)` over `assert locator.text_content() == ...`?
The latter reads the text *once*, immediately, and fails if the page hasn't
finished rendering yet. `expect()` assertions retry against the live page
until the condition becomes true or a timeout elapses — the same
auto-waiting behavior locators use for actions, applied to assertions. This
removes an entire category of flaky test caused by manual polling, sleeps,
or races between page updates and assertion checks.

For a full real pytest suite with real assertions against a production
site, see
[demo-playwright-python-for-nhs-wales](https://github.com/joelparkerhenderson/demo-playwright-python-for-nhs-wales).

## Common pitfalls

- **Forgetting to close the browser.** `browser.close()` must run even on
  error — wrap it in `try`/`finally` in a plain script, or let a
  `pytest-playwright` fixture handle it for you in tests.
- **Mixing `sync_api` and `async_api` in one file.** Pick one per file/
  module; importing both and interleaving sync and async calls raises
  runtime errors.
- **Skipping `playwright install`.** `pip install playwright` (or
  `pytest-playwright`) installs only the Python package — the browser
  binaries (Chromium, Firefox, WebKit) are a separate download fetched by
  `playwright install`. Forgetting this step is the most common
  "browser executable doesn't exist" error.
- **Strict-mode violations.** By default, a locator that resolves to more
  than one element raises an error on action or assertion, rather than
  silently picking the first match. Narrow the locator (add an id, text
  filter, or `.first`/`.nth(i)`) instead of assuming "first match wins".

## Learn more / real examples

- [demo-playwright-python](https://github.com/joelparkerhenderson/demo-playwright-python) —
  the locator-strategy walkthrough this skill's worked example is trimmed
  from, run against https://testingexamples.github.io.
- [demo-playwright-python-for-google-search](https://github.com/testingexamples/demo-playwright-python-for-google-search) —
  same patterns applied to Google Search. **Illustrative only** — Google's
  Terms of Service restrict automated querying of Google Search, so this is
  meant to show syntax, not to be run repeatedly against the live site.
- [demo-playwright-python-for-google-maps](https://github.com/testingexamples/demo-playwright-python-for-google-maps) —
  same patterns applied to Google Maps. **Illustrative only**, for the same
  Google Terms of Service reason as above.
- [demo-playwright-python-for-nhs-wales](https://github.com/joelparkerhenderson/demo-playwright-python-for-nhs-wales) —
  a real pytest test suite with real assertions against
  https://www.nhs.wales/.
- https://playwright.dev/python/docs/intro — official Python docs.
- https://testingexamples.github.io/ — the free fixture page these demos
  target; safe to run against repeatedly.

---

AGENTS.md and spec/index.md in this repo are the source of truth for this
skill's own scope — if this file ever disagrees with those, they win.
