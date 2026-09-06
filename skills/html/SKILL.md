---
name: html
description: Use when asked to write, explain, or debug plain HTML — document structure, semantic elements, forms, accessibility attributes, or how the browser parses and renders markup — independent of any specific framework or templating language.
---

# HTML

HTML is the markup language that describes document structure and semantics
to the browser. This skill covers plain HTML itself — a framework-specific
skill (React, Vue, Nunjucks, …) covers component syntax on top of it.

## Document structure

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Page title</title>
</head>
<body>
  <header>…</header>
  <main>…</main>
  <footer>…</footer>
</body>
</html>
```

- `<!doctype html>` triggers standards mode; omitting it triggers quirks mode
  in most browsers, which changes box-model and CSS behavior unpredictably.
- `lang` on `<html>` matters for screen readers (correct pronunciation) and
  translation tools — set it to the actual page language, not always `en`.
- The viewport `<meta>` is required for correct rendering on mobile; without
  it, mobile browsers assume a desktop-width layout and zoom out.

## Semantic elements over generic `<div>`

| Instead of a bare `<div>` for… | Use |
| --- | --- |
| Page banner / site header | `<header>` |
| Primary navigation | `<nav>` |
| The page's main unique content (one per page) | `<main>` |
| A self-contained piece of content | `<article>` |
| A thematic grouping with a heading | `<section>` |
| Tangential content | `<aside>` |
| Page/section footer | `<footer>` |

Semantic elements give assistive technology and search engines structure for
free; a `<div>` conveys nothing. Reach for a `<div>`/`<span>` only when no
semantic element fits and you need a hook purely for styling/scripting.

## Forms

```html
<form method="post" action="/submit">
  <label for="email">Email</label>
  <input id="email" name="email" type="email" required autocomplete="email">

  <fieldset>
    <legend>Plan</legend>
    <label><input type="radio" name="plan" value="free"> Free</label>
    <label><input type="radio" name="plan" value="pro"> Pro</label>
  </fieldset>

  <button type="submit">Submit</button>
</form>
```

- `<label for="id">` (or wrapping the input) is what makes a form field
  operable via assistive tech and click-to-focus — an unlabeled input is an
  accessibility bug, not a style choice.
- Use the specific `type` (`email`, `tel`, `number`, `date`, …) rather than
  always `text` — it gets you built-in validation and the right mobile
  keyboard for free.
- `required`, `pattern`, `minlength`/`maxlength` are native HTML validation;
  reach for them before reimplementing validation in JavaScript.

## Accessibility basics

- Every `<img>` needs `alt` — descriptive text for a meaningful image,
  `alt=""` (empty, not omitted) for a purely decorative one.
- Don't skip heading levels (`<h1>` → `<h3>` with no `<h2>`) — assistive tech
  users navigate by heading outline.
- Interactive elements need a real element (`<button>`, `<a href>`) rather
  than a `<div onclick>` — a `<div>` gets no keyboard focus, no `Enter`/`Space`
  activation, and no accessible role for free.
- ARIA attributes (`aria-label`, `role`, …) are a supplement for cases native
  HTML can't express — the first rule of ARIA is to use a native element
  instead when one exists.

## Common pitfalls

- **Unclosed or mismatched tags** the browser silently repairs — this hides
  bugs during development that then break in a stricter parser (an XML
  pipeline, a linter, a different browser's error-recovery heuristics).
- **`<a href="#">` or a bare `<div>` used as a button** — breaks keyboard
  navigation and screen readers; use `<button>` for actions, `<a href="...">`
  only for actual navigation.
- **Block elements nested inside inline elements** (a `<div>` inside a `<p>`)
  — invalid and triggers browser auto-correction that can split the DOM in
  surprising places.
- **Relying on `<br>` for spacing** instead of CSS margins — conflates
  presentation with structure and breaks if the layout changes.
- **Missing `alt`, not empty `alt=""`, on decorative images** — screen readers
  then read the filename aloud.

## Learn more

- [MDN: HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) — element
  and attribute reference.
- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/) — the spec
  itself.
- [W3C Nu HTML Checker](https://validator.w3.org/nu/) — validate markup.
- [WebAIM](https://webaim.org/) — accessibility-focused guidance.
