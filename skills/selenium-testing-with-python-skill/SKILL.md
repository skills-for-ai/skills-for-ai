---
name: selenium-testing-with-python-skill
description: Use when asked to write, explain, debug, or extend Selenium WebDriver browser automation code in Python — locating elements, performing actions, explicit waits, and writing real assertions with pytest.
---

# Selenium Python Skill

## What Selenium is

Selenium (https://www.selenium.dev/) is the longest-established, most widely-taught
browser automation project, built on the W3C WebDriver protocol. The Python binding
is the PyPI package `selenium`.

```sh
pip install selenium
```

### Browser driver setup

Selenium needs a matching browser driver (e.g. `chromedriver` for Chrome) available.
Modern versions of `selenium` bundle **Selenium Manager**, which auto-downloads the
right driver for you — in most cases `webdriver.Chrome()` just works with no extra
setup.

If you install a driver manually instead, on macOS Gatekeeper will likely block the
first run with a warning like "Apple could not verify chromedriver is free of malware
or interfere with your Mac." Fix it once with either:

- Right-click (or Control-click) the `chromedriver` binary in Finder and choose
  "Open", then confirm, or
- Run `xattr -d com.apple.quarantine chromedriver`

## The four core concepts

Any browser automation tool comes down to four things: locating, acting, waiting,
and asserting. Here's what each looks like in Selenium.

### 1. Locating

Selenium locates elements with `By` strategies passed to `find_element` (singular)
or `find_elements` (plural):

```python
from selenium.webdriver.common.by import By

driver.find_element(By.ID, "id-example-1")
driver.find_element(By.NAME, "name-example-1")
driver.find_element(By.CLASS_NAME, "class-example-1")
driver.find_element(By.LINK_TEXT, "Link Example 1")
driver.find_element(By.XPATH, "//input[@type='submit']")
```

Other `By` strategies exist too (`By.TAG_NAME`, `By.CSS_SELECTOR`,
`By.PARTIAL_LINK_TEXT`), but the ones above cover the common cases.

### 2. Acting

Once you have an element, act on it:

```python
text_input.send_keys("hello")   # type into a text input
checkbox.click()                # click a checkbox
radio.click()                   # click a radio button

# Select dropdown options via the Select helper, not .click()
from selenium.webdriver.support.ui import Select
select = Select(select_element)
select.select_by_index(0)
```

### 3. Waiting — the single biggest difference from Playwright

**Selenium has no built-in auto-waiting for element actionability.** Playwright
automatically waits for an element to be visible, stable, and enabled before acting
on it. Selenium does not: `find_element` returns (or raises) immediately based on
the DOM's current state, and a `.click()` or `.send_keys()` fires the instant you
call it. If the page hasn't finished rendering, hasn't finished an XHR, or is mid
re-render, your call can:

- raise `NoSuchElementException` because the element isn't in the DOM yet, or
- "succeed" against a stale or not-yet-interactive element, producing flaky,
  intermittent failures that are painful to debug.

The fix is to reach for explicit waits yourself, using `WebDriverWait` combined with
`expected_conditions`:

```python
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

element = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.ID, "id-example-1"))
)
```

Other useful `expected_conditions`: `visibility_of_element_located`,
`element_to_be_clickable`, `text_to_be_present_in_element`. Reach for explicit waits
any time you act right after a navigation, a click that triggers async loading, or
any DOM change you didn't cause synchronously yourself. Treat "no wait" as the
default explanation whenever Selenium code is flaky.

### 4. Asserting

Selenium itself has no built-in test runner or assertion library — see "From
walkthrough to real test" below.

## A full worked example

This is real, verified working code (from
https://github.com/testingexamples/demo-selenium-python) targeting the free fixture
page https://testingexamples.github.io, which exists specifically to be automated
against:

```python
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select


def demo() -> None:
    driver = webdriver.Chrome()

    try:
        driver.get("https://testingexamples.github.io")

        # Find an element by id.
        element_by_id = driver.find_element(By.ID, "id-example-1")
        print(element_by_id.get_attribute("outerHTML"))

        # Find an element by name.
        element_by_name = driver.find_element(By.NAME, "name-example-1")
        print(element_by_name.get_attribute("outerHTML"))

        # Find an element by class name.
        element_by_class_name = driver.find_element(By.CLASS_NAME, "class-example-1")
        print(element_by_class_name.get_attribute("outerHTML"))

        # Find an element that is a link by its text.
        element_by_link_text = driver.find_element(By.LINK_TEXT, "Link Example 1")
        print(element_by_link_text.get_attribute("outerHTML"))

        # Find an element by XPath query.
        element_by_xpath = driver.find_element(By.XPATH, "//input[@type='submit']")
        print(element_by_xpath.get_attribute("outerHTML"))

        # Type in a text input.
        text = driver.find_element(By.ID, "text-example-1-id")
        text.send_keys("hello")

        # Click a checkbox input.
        checkbox = driver.find_element(By.ID, "checkbox-example-1-id")
        checkbox.click()

        # Click a radio input.
        radio = driver.find_element(By.ID, "radio-example-1-option-1-id")
        radio.click()

        # Choose a select input option.
        select_element = driver.find_element(By.ID, "select-example-1-id")
        select = Select(select_element)
        select.select_by_index(0)
        option = select.first_selected_option
        print(option.get_attribute("outerHTML"))
    except Exception as err:
        print(err)
    finally:
        driver.quit()


if __name__ == "__main__":
    demo()
```

Note the `try`/`finally`: `driver.quit()` always runs, even if a locator or action
raises.

## From walkthrough to real test

The example above is a **walkthrough**: it prints what it finds so a human can read
the output and eyeball whether things look right. That's useful for learning and for
exploring a page, but it's not a test — nothing fails automatically when behavior
regresses.

A **real test** replaces the prints with `assert` statements, and replaces the
manual `try`/`finally` driver lifecycle with a `pytest` fixture. `pytest` (or the
standard-library `unittest`) is the idiomatic way to write actual Selenium tests in
Python — Selenium has no runner or assertion library of its own, and pytest rewrites
plain `assert` statements to produce readable failure messages for free:

```python
import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By


@pytest.fixture
def driver():
    d = webdriver.Chrome()
    yield d
    d.quit()


def test_id_example_has_expected_text(driver):
    driver.get("https://testingexamples.github.io")
    element = driver.find_element(By.ID, "id-example-1")
    assert element.text == "Id Example 1"
```

The fixture's `yield` plays the same role as the walkthrough's `finally`: whatever
happens in the test body, `d.quit()` still runs during teardown. For a full,
real pytest suite with real assertions against a production site, see
https://github.com/joelparkerhenderson/demo-selenium-python-for-nhs-wales.

## Common pitfalls

- **`NoSuchElementException` from acting before the page/element is ready** — the
  most common Selenium flakiness. Add an explicit `WebDriverWait` +
  `expected_conditions` instead of assuming the DOM is already in the state you
  expect.
- **Not calling `driver.quit()` in a `finally` or fixture teardown** — leaks browser
  processes. Always pair driver creation with guaranteed cleanup (`try`/`finally` in
  a script, `yield` + teardown in a pytest fixture).
- **The macOS Gatekeeper chromedriver warning** — "Apple could not verify chromedriver
  is free of malware" the first time you run a manually-downloaded driver. Right-click
  → Open once, or `xattr -d com.apple.quarantine chromedriver`. Prefer letting
  Selenium Manager handle this for you.
- **Confusing `find_element` with `find_elements`** — `find_element` (singular)
  raises `NoSuchElementException` if nothing matches. `find_elements` (plural)
  returns an empty list instead. Use the plural form when "zero matches" is a valid,
  expected outcome you need to check for (e.g. `assert len(driver.find_elements(...))
  == 0`).

## Learn more / real examples

- https://github.com/testingexamples/demo-selenium-python — locator-strategy
  walkthrough against https://testingexamples.github.io (the generic target; safe to
  run against repeatedly).
- https://github.com/testingexamples/demo-selenium-python-for-google-search — same
  patterns against Google Search. **Illustrative only** — Google's Terms of Service
  restrict automated querying of Google Search, so this repo shows tool syntax and
  is not meant to be run repeatedly against the live site.
- https://github.com/testingexamples/demo-selenium-python-for-google-maps — same
  patterns against Google Maps. **Illustrative only**, for the same Google ToS
  reason as above.
- https://github.com/joelparkerhenderson/demo-selenium-python-for-nhs-wales — a real
  pytest test suite with real assertions against https://www.nhs.wales/.
- https://www.selenium.dev/documentation/webdriver/ — official WebDriver
  documentation.
- https://testingexamples.github.io/ — the free fixture page these demos target,
  safe to run against repeatedly.

---

AGENTS.md and spec/index.md in this repo are the source of truth for this skill's
own scope — if this file ever disagrees with those, they win.
