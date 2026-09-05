---
name: playwright-testing-with-rust-skill
description: Use when asked to write, explain, debug, or extend Playwright browser automation code in Rust using the playwright-rs crate — locating elements, performing actions, waiting, and writing real assertions.
---

# Playwright in Rust

Playwright is a browser automation tool that drives real browsers (Chromium,
Firefox, WebKit) through a single API, with built-in auto-waiting so tests
don't need manual sleeps or polling. In Rust, Playwright is driven through the
`playwright-rs` crate.

## Add the crate

```
cargo add playwright-rs anyhow tokio --features tokio/full
```

Or add the equivalent to `Cargo.toml` directly:

```toml
[dependencies]
playwright-rs = "<pin an exact version>"
anyhow = "1"
tokio = { version = "1", features = ["full"] }
```

### CRITICAL: crate-name trap

There are **two different crates on crates.io** for Playwright in Rust:

- **`playwright-rs`** (GitHub: `padamson/playwright-rust`) — this is the one
  to use. It is actively maintained, though still pre-1.0 and stabilising its
  API.
- **`playwright`** (GitHub: `octaltree/playwright-rust`) — a different,
  older crate with a deceptively similar name. It has been **abandoned since
  2022**.

Do not `cargo add playwright` by mistake because it "sounds right." Always
use `playwright-rs`. If you see code, a tutorial, or a Cargo.toml entry using
the bare `playwright` crate, treat it as unmaintained and do not build on it.

## The four core concepts

Every browser automation tool in this project's materials is taught around
the same four concepts. Here is what each one means specifically for
`playwright-rs`.

### 1. Locating

`page.locator(selector)` builds a `Locator` — a lazy, reusable handle to
whatever matches the selector, resolved fresh every time you use it. It does
not search the page immediately, so you can build a locator before the
element exists yet. Selectors can be:

- CSS: `page.locator("#id-example-1")`, `page.locator(".class-example-1")`
- Attribute selectors (Playwright has no dedicated "by name" helper, so use
  an attribute selector): `page.locator("[name=\"name-example-1\"]")`
- Text-based, via the `:has-text()` pseudo-class:
  `page.locator("a:has-text(\"Link Example 1\")")`
- XPath, with an `xpath=` prefix: `page.locator("xpath=//input[@type=\"submit\"]")`

### 2. Acting

Once you have a `Locator`, act on it:

- `.fill("hello", None).await?` — type text into an input, clearing it first
- `.check(None).await?` — check a checkbox or radio button
- `.select_option(SelectOption::Index(0), None).await?` — pick an option
  from a `<select>`
- `.input_value(None).await?` — read back the current value of an input

### 3. Waiting

Playwright's headline advantage over Selenium/thirtyfour-style tools is that
**locators auto-wait and auto-retry** until the target element is actionable
before an action runs — attached to the DOM, visible, stable, and not
obscured. You do not write manual polling loops or `sleep`s to wait for an
element to appear or become clickable; the locator methods (`.fill()`,
`.check()`, `.click()`, `.select_option()`, etc.) do this waiting internally
and return an error only if the element never becomes actionable within the
default timeout. `playwright-rs` preserves this behavior because it wraps the
same underlying Playwright driver used by every other language binding.

### 4. Asserting

`playwright-rs` gives you the pieces (`.text_content()`, `.input_value()`,
etc.) but there is no `@playwright/test`-equivalent test runner bundled with
it. Real assertions are just Rust: `#[tokio::test]` plus `assert_eq!` /
`assert!`, optionally with `pretty_assertions` for nicer diff output on
failure. See "From walkthrough to real test" below.

## Full worked example

This is real, working code (adapted from the sibling `demo-playwright-rust`
repo) that exercises all four concepts against a public fixture page built
for this purpose, https://testingexamples.github.io.

```rust
use playwright_rs::{Page, Playwright, SelectOption};

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    let pw = Playwright::launch().await?;
    let browser = pw.chromium().launch().await?;
    let page = browser.new_page().await?;

    let result = run_demo(&page).await;
    if let Err(ref err) = result {
        eprintln!("{err:?}");
    }
    browser.close().await?;
    result
}

async fn run_demo(page: &Page) -> anyhow::Result<()> {
    page.goto("https://testingexamples.github.io", None).await?;

    // Find an element by id.
    let element_by_id = page.locator("#id-example-1");
    println!("By id: {}", element_by_id.text_content().await?.unwrap_or_default());

    // Find an element by name attribute (attribute selector — no dedicated By::Name).
    let element_by_name = page.locator("[name=\"name-example-1\"]");
    println!("By name: {}", element_by_name.text_content().await?.unwrap_or_default());

    // Find an element by class name.
    let element_by_class_name = page.locator(".class-example-1");
    println!("By class name: {}", element_by_class_name.text_content().await?.unwrap_or_default());

    // Find a link by its visible text, using the :has-text() pseudo-class.
    let element_by_link_text = page.locator("a:has-text(\"Link Example 1\")");
    println!("By link text: {}", element_by_link_text.text_content().await?.unwrap_or_default());

    // Find an element by XPath.
    let element_by_xpath = page.locator("xpath=//input[@type=\"submit\"]");
    println!("By XPath: {}", element_by_xpath.input_value(None).await?);

    // Fill a text input.
    let text = page.locator("#text-example-1-id");
    text.fill("hello", None).await?;

    // Check a checkbox.
    let checkbox = page.locator("#checkbox-example-1-id");
    checkbox.check(None).await?;

    // Check a radio button.
    let radio = page.locator("#radio-example-1-option-1-id");
    radio.check(None).await?;

    // Select an option by index.
    let select_element = page.locator("#select-example-1-id");
    select_element.select_option(SelectOption::Index(0), None).await?;
    println!("Selected: {}", select_element.input_value(None).await?);

    Ok(())
}
```

Notice the `let result = run_demo(&page).await; ... browser.close().await?; result` shape
in `main`: it guarantees the browser is closed whether or not `run_demo`
returned an error, and then propagates that error afterwards. Reuse this
pattern any time you write a `main` or a helper that owns a browser.

## From walkthrough to real test

The example above is a **walkthrough**: it exercises the API and
`println!`s what it finds, but it doesn't fail when something is wrong — a
misspelled selector just prints an empty string. A **real test** replaces
the `println!` with an assertion, and replaces `#[tokio::main]` with
`#[tokio::test]` since `playwright-rs` is async-only:

```rust
#[tokio::test]
async fn id_example_has_expected_text() -> anyhow::Result<()> {
    let pw = playwright_rs::Playwright::launch().await?;
    let browser = pw.chromium().launch().await?;
    let page = browser.new_page().await?;
    page.goto("https://testingexamples.github.io", None).await?;

    let text = page.locator("#id-example-1").text_content().await?.unwrap_or_default();
    assert_eq!(text, "Id Example 1");

    browser.close().await?;
    Ok(())
}
```

There is no `@playwright/test`-equivalent test runner for the Rust binding —
`#[tokio::test]` plus `assert_eq!`/`assert!` (or `pretty_assertions` for
nicer diffs on failure) is the idiomatic real-test pattern. Prefer this shape
whenever the goal is "does this page behave correctly," and reserve the
`println!` walkthrough style for exploratory scripts or documentation
snippets.

## Common pitfalls

- **Confusing `playwright-rs` with the abandoned `playwright` crate.** See
  the crate-name trap above — only `playwright-rs` (`padamson/playwright-rust`)
  is maintained.
- **Forgetting `#[tokio::main]` / `#[tokio::test]`.** `playwright-rs` is
  async-only; every `main` or test function that calls into it needs an
  async runtime attribute, and `tokio` needs the right features enabled
  (`features = ["full"]`, or at minimum `rt-multi-thread` and `macros`).
- **Not closing the browser on error.** A bare `browser.close().await?;`
  placed after fallible code never runs if that code returns early with `?`.
  Use the `let result = ...; browser.close().await?; result` pattern from
  the worked example above so cleanup always happens, even on failure.
- **Version instability.** `playwright-rs` is pre-1.0 and still stabilising
  its API. Pin an exact version in `Cargo.toml` (not a caret range) and
  re-read the crate's docs/changelog before bumping it — method signatures
  can change between minor versions.

## Learn more / real examples

- https://github.com/testingexamples/demo-playwright-rust — the
  locator-strategy walkthrough this skill's worked example is drawn from,
  run against the free fixture page https://testingexamples.github.io/.
- https://github.com/testingexamples/demo-playwright-rust-for-nhs-wales — a
  real test suite with real assertions, run against https://www.nhs.wales/.
- https://github.com/testingexamples/demo-playwright-rust-for-google-search
  and
  https://github.com/testingexamples/demo-playwright-rust-for-google-maps —
  the same locator/action/wait patterns illustrated against Google Search
  and Google Maps. **These two are illustrative only**: Google's Terms of
  Service restrict automated querying of Google Search and Google Maps, so
  treat them as syntax references, not as suites meant to be run repeatedly
  against the live sites.
- https://docs.rs/playwright-rs — API reference.
- https://testingexamples.github.io/ — the free fixture page used by the
  non-Google demos above; safe to run against repeatedly.

---

AGENTS.md and spec/index.md in this repo are the source of truth for this
skill's own scope — if this file ever disagrees with those, they win.
