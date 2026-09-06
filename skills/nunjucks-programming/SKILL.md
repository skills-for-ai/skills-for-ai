---
name: nunjucks-programming
description: Use when asked to write, explain, or debug general-purpose Nunjucks templates — variables/filters, template inheritance, control structures, autoescaping — as a JavaScript server-side templating engine, distinct from lily-design-system-nunjucks's specific template/macro package built on it.
---

# Nunjucks Programming

Covers Nunjucks itself — a server-side templating engine for JavaScript
(a close port of Python's Jinja2), used to render HTML from templates and
data on the server. See [[lily-design-system-nunjucks]] for a specific
design-system template/macro package built using Nunjucks, distinct from
Nunjucks the templating engine covered here.

## Variables and filters

```njk
<h1>{{ user.name }}</h1>
<p>{{ description | truncate(100) }}</p>
<p>Total: {{ price | round(2) }}</p>
```

`{{ }}` outputs a variable (with automatic HTML-escaping by default —
see Autoescaping below); the `|` pipe applies a filter, transforming the
value before output — Nunjucks ships common filters (`truncate`, `round`,
`upper`, `default`, and more) and supports custom ones registered from
the JavaScript side.

## Template inheritance

```njk
{# base.njk #}
<html>
<body>
  {% block content %}{% endblock %}
</body>
</html>

{# page.njk #}
{% extends "base.njk" %}
{% block content %}
  <h1>Page content</h1>
{% endblock %}
```

`{% extends %}` and `{% block %}` let a template define a shared layout
once, with child templates overriding named blocks — avoiding duplicated
boilerplate (headers, navigation, footers) across every page template.

## Control structures

```njk
{% if items.length > 0 %}
  <ul>
  {% for item in items %}
    <li>{{ item.name }}</li>
  {% endfor %}
  </ul>
{% else %}
  <p>No items.</p>
{% endif %}
```

Nunjucks templates support `if`/`else`, `for` loops (with a `loop`
variable exposing `loop.index`, `loop.first`, `loop.last`, and similar),
and macros (reusable, parameterized template snippets — Nunjucks'
equivalent of a UI component, predating and conceptually similar to a
React/Vue/Svelte component but rendered server-side to plain HTML).

## Autoescaping

By default, `{{ variable }}` HTML-escapes its output, preventing
accidental injection of unescaped user content into the page — a real
cross-site-scripting (XSS) risk if disabled carelessly. The `safe` filter
(`{{ trustedHtml | safe }}`) or `{% autoescape false %}` opt out
explicitly, and should only be used for content genuinely known to be
safe HTML, never for unsanitized user input.

## Common pitfalls

- **Disabling autoescaping for convenience** rather than because the
  content is genuinely trusted — reintroduces XSS risk for the sake of
  avoiding a filter or two.
- **Confusing Nunjucks' syntax with Jinja2's** — the two are very close
  but not identical; a feature or filter present in one doesn't always
  have an exact equivalent in the other.
- **Deep template-inheritance chains** that are hard to trace — several
  layers of `extends` with overlapping block overrides can make it hard
  to find where a given piece of rendered output actually comes from.
- **Putting business logic in templates** rather than the calling
  JavaScript code — templates are for presentation; complex
  transformations belong in the data passed to the template, not in
  template-level expressions.

## Learn more

- [Nunjucks documentation](https://mozilla.github.io/nunjucks/)
- [[lily-design-system-nunjucks]] for a specific template/macro package built on Nunjucks.
