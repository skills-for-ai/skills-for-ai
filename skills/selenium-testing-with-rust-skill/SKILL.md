---
name: selenium-testing-with-rust-skill
description: Use when asked to write, explain, debug, or extend Selenium-style WebDriver browser automation code in Rust using the thirtyfour crate — locating elements, performing actions, explicit waits, and writing real assertions.
---

# Selenium Rust Skill

## There is no official "Selenium" crate — use `thirtyfour`

If you go looking for a crate literally named `selenium`, you won't find one
that meaningfully does this job. Rust has no official Selenium binding. What
this skill teaches is the **[`thirtyfour`](https://crates.io/crates/thirtyfour)**
crate. `thirtyfour` speaks the same underlying **W3C WebDriver protocol** that
Selenium itself uses — it talks to the same `chromedriver` / `geckodriver`
server, drives a real browser the same way, and does the same job as
Selenium's language bindings. It just isn't Selenium-branded.

So: when someone asks for "Selenium in Rust," "Selenium-style tests in Rust,"
or "WebDriver in Rust," the answer is `thirtyfour`. Don't propose or invent a
`selenium` crate — it doesn't exist for this purpose.

### Install

```sh
cargo add thirtyfour anyhow tokio --features tokio/full
```

or add manually to `Cargo.toml`:

```toml
[dependencies]
thirtyfour = "0.3"
tokio = { version = "1", features = ["full"] }
anyhow = "1"
```

`thirtyfour` is async-only — every call goes through `tokio`.

## Prerequisite: start a WebDriver server first

Unlike some other language bindings (e.g. some Selenium Manager setups) that
can launch the browser and driver together, `thirtyfour` only *connects to* a
WebDriver server that is already running and listening on a port. It does not
start one for you. Start it separately, commonly on port 9515:

```sh
chromedriver --port=9515 &
```

(or the equivalent `geckodriver` invocation for Firefox). If you skip this
step, `WebDriver::new(...)` will fail with a connection-refused error — see
"Common pitfalls" below.

## Four core concepts: locate, act, wait, assert

Every browser-automation tool in this project's materials boils down to the
same four moves. Here's what each looks like in `thirtyfour`.

### 1. Locate — `By` + `.query(...)`

`thirtyfour` finds elements with a `By` locator strategy passed to
`driver.query(...)`:

```rust
driver.query(By::Id("some-id")).single().await?;
driver.query(By::ClassName("some-class")).single().await?;
driver.query(By::Css("[name='some-name']")).single().await?;
driver.query(By::LinkText("Some Link")).single().await?;
driver.query(By::XPath("//input[@type=\"submit\"]")).single().await?;
```

Note two gaps worth knowing up front:

- **No `By::Name`.** `thirtyfour` has no dedicated locator for the HTML
  `name` attribute. Match it with a CSS attribute selector instead:
  `By::Css("[name='name-example-1']")`.
- **No reliable cross-version `Select` helper.** For `<select>` dropdowns,
  don't depend on a `Select`-style convenience API across versions. Click the
  option element directly, e.g. `By::Css("#my-select option:first-child")`.

### 2. Act — element methods

Once you have an element, act on it:

```rust
element.text().await?;                 // read visible text
element.attr("value").await?;          // read an attribute (Option<String>)
element.send_keys("hello").await?;     // type into an input
element.click().await?;                // click (checkbox, radio, button, option, …)
```

### 3. Wait — `thirtyfour` does NOT auto-wait

Unlike Playwright, `thirtyfour` does not automatically retry a query until an
element appears. A plain `.query(...).single()` fails immediately if the
element isn't there yet. For an explicit wait, use `.wait(...)` on the query
builder, giving it a timeout and a poll interval:

```rust
use std::time::Duration;

let element = driver
    .query(By::Id("id-example-1"))
    .wait(Duration::from_secs(10), Duration::from_millis(250))
    .single()
    .await?;
```

This is `thirtyfour`'s equivalent of Playwright's implicit auto-waiting: poll
every 250ms for up to 10 seconds before giving up.

### 4. Assert — see "From walkthrough to real test" below.

## Full worked example

This is real, working code (lightly annotated) from the sibling repo
[`demo-selenium-rust`](https://github.com/testingexamples/demo-selenium-rust),
run against the free fixture page
[testingexamples.github.io](https://testingexamples.github.io):

```rust
use thirtyfour::prelude::*;

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    // Connect to a WebDriver server (e.g. chromedriver listening on
    // 9515, started separately) and open a session.
    let caps = DesiredCapabilities::chrome();
    let driver = WebDriver::new("http://localhost:9515", caps).await?;

    let result = run_demo(&driver).await;
    if let Err(ref err) = result {
        eprintln!("{err:?}");
    }
    driver.quit().await?;
    result
}

async fn run_demo(driver: &WebDriver) -> anyhow::Result<()> {
    driver.goto("https://testingexamples.github.io").await?;

    // Find an element by id.
    let element_by_id = driver.query(By::Id("id-example-1")).single().await?;
    println!("By id: {}", element_by_id.text().await?);

    // Find an element by name attribute — thirtyfour has no dedicated
    // By::Name locator, so match it with a CSS attribute selector.
    let element_by_name = driver.query(By::Css("[name='name-example-1']")).single().await?;
    println!("By name: {}", element_by_name.text().await?);

    // Find an element by class name.
    let element_by_class_name = driver.query(By::ClassName("class-example-1")).single().await?;
    println!("By class name: {}", element_by_class_name.text().await?);

    // Find a link element by its visible text.
    let element_by_link_text = driver.query(By::LinkText("Link Example 1")).single().await?;
    println!("By link text: {}", element_by_link_text.text().await?);

    // Find an element by an XPath expression. The target is a submit
    // input, whose label lives in its value attribute, not text content.
    let element_by_xpath = driver.query(By::XPath("//input[@type=\"submit\"]")).single().await?;
    let submit_value = element_by_xpath.attr("value").await?.unwrap_or_default();
    println!("By XPath: {submit_value}");

    // Fill a text input.
    let text = driver.query(By::Id("text-example-1-id")).single().await?;
    text.send_keys("hello").await?;

    // Click a checkbox input.
    let checkbox = driver.query(By::Id("checkbox-example-1-id")).single().await?;
    checkbox.click().await?;

    // Click a radio input.
    let radio = driver.query(By::Id("radio-example-1-option-1-id")).single().await?;
    radio.click().await?;

    // Choose a select option, by index — thirtyfour has no reliable
    // cross-version Select helper, so click the first <option> directly
    // via a CSS :first-child selector as a version-safe fallback.
    let first_option = driver
        .query(By::Css("#select-example-1-id option:first-child"))
        .single()
        .await?;
    first_option.click().await?;
    println!("Selected option value: {}", first_option.attr("value").await?.unwrap_or_default());

    Ok(())
}
```

Notice the `main` function's shape: it runs the real work in `run_demo`,
captures the `Result`, calls `driver.quit()` unconditionally, and only then
returns the captured result. That pattern matters — see "Common pitfalls."

## From walkthrough to real test

The example above is a *walkthrough*: it `println!`s what it finds so a human
can eyeball the output. That's useful for exploring a page, but it isn't a
test — nothing fails if the page changes.

The idiomatic way to turn this into a **real test** in Rust is `#[tokio::test]`
(since `thirtyfour` is async) combined with Rust's built-in `assert_eq!` /
`assert!` macros — no separate test-runner crate needed:

```rust
#[tokio::test]
async fn id_example_has_expected_text() -> anyhow::Result<()> {
    let caps = thirtyfour::DesiredCapabilities::chrome();
    let driver = thirtyfour::WebDriver::new("http://localhost:9515", caps).await?;
    driver.goto("https://testingexamples.github.io").await?;

    let text = driver.query(thirtyfour::By::Id("id-example-1")).single().await?.text().await?;
    assert_eq!(text, "Id Example 1");

    driver.quit().await?;
    Ok(())
}
```

Run it the normal Rust way: `cargo test`. Each `#[tokio::test]` function gets
its own async runtime, so each test can open (and must close) its own
`WebDriver` session. For a real test suite grounded in real assertions, see
[`demo-selenium-rust-for-nhs-wales`](https://github.com/testingexamples/demo-selenium-rust-for-nhs-wales)
in "Learn more" below.

## Common pitfalls

- **Assuming a `selenium` crate exists.** It doesn't, meaningfully, for this
  purpose. `thirtyfour` is the answer — see the top of this file.
- **Forgetting to start `chromedriver` (or `geckodriver`) before running the
  code.** `thirtyfour` connects to an already-running WebDriver server; if
  none is listening on the port you gave `WebDriver::new(...)`, you'll get a
  connection-refused error, not a helpful "browser not found" message.
- **Forgetting `#[tokio::main]` / `#[tokio::test]`.** `thirtyfour` is
  async-only. Every `main` or test function that calls it needs a Tokio
  runtime attribute.
- **Not calling `driver.quit()` on every path.** If a query fails partway
  through and you `?`-propagate the error straight out of `main`, the browser
  session (and the OS-level browser process) can leak. Use the pattern from
  the worked example: run the real work in a helper function, capture its
  `Result`, call `driver.quit().await?` unconditionally, then return the
  captured result:

  ```rust
  let result = run_demo(&driver).await;
  if let Err(ref err) = result {
      eprintln!("{err:?}");
  }
  driver.quit().await?;
  result
  ```

- **Assuming a `By::Name` locator exists.** It doesn't. Use a CSS attribute
  selector instead: `By::Css("[name='some-name']")`.

## Learn more / real examples

- [`demo-selenium-rust`](https://github.com/testingexamples/demo-selenium-rust)
  — the locator-strategy walkthrough this skill's worked example is drawn
  from, run against the free fixture page
  [testingexamples.github.io](https://testingexamples.github.io/).
- [`demo-selenium-rust-for-google-search`](https://github.com/testingexamples/demo-selenium-rust-for-google-search)
  and
  [`demo-selenium-rust-for-google-maps`](https://github.com/testingexamples/demo-selenium-rust-for-google-maps)
  — the same patterns applied to Google Search and Google Maps.
  **Illustrative only**: these show tool syntax against real-world pages, but
  Google's Terms of Service restrict automated querying of Google Search and
  Google Maps, so these repos are not meant to be run repeatedly against the
  live sites.
- [`demo-selenium-rust-for-nhs-wales`](https://github.com/testingexamples/demo-selenium-rust-for-nhs-wales)
  — a real test suite with real assertions (the `#[tokio::test]` +
  `assert_eq!` pattern from this skill, at scale) against
  [nhs.wales](https://www.nhs.wales/).
- [docs.rs/thirtyfour](https://docs.rs/thirtyfour) — the crate's full API
  reference.
- [testingexamples.github.io](https://testingexamples.github.io/) — the free,
  stable fixture page the generic demo targets; safe to run against
  repeatedly (unlike Google Search/Maps above).

---

AGENTS.md and spec/index.md in this repo are the source of truth for this
skill's own scope — if this file ever disagrees with those, they win.
