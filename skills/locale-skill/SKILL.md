---
name: locale-skill
description: Use when asked about internationalization (i18n), localization (l10n), locale codes (BCP 47), or how to handle locale-sensitive data (dates, numbers, currency, plurals, text direction) in code — independent of any specific i18n library or framework.
---

# Locale Skill

**Internationalization (i18n)** is designing software so it *can* be
adapted to different languages/regions without code changes.
**Localization (l10n)** is the act of actually adapting it for one specific
locale (translated strings, local formats, local conventions). The numbers
in the abbreviations count the letters elided: "i18n" = i + 18 letters +
n, "l10n" = l + 10 letters + n.

## Locale identifiers: BCP 47

```
en          — English
en-US       — English, United States
en-GB       — English, United Kingdom
pt-BR       — Portuguese, Brazil
zh-Hans-CN  — Chinese, Simplified script, China
```

A locale identifier is not just a language — `en-US` and `en-GB` share a
language but differ in spelling, date format, and default measurement
units. **BCP 47** is the standard format: a required primary language
subtag, optional script subtag (`Hans`/`Hant` for Chinese), and optional
region subtag — don't invent an ad hoc format (`en_US`, `EN-us`) when a
library or API expects BCP 47 casing and hyphens specifically.

## Locale-sensitive formatting

```javascript
new Intl.DateTimeFormat('en-GB').format(new Date());   // "05/09/2026"
new Intl.DateTimeFormat('en-US').format(new Date());   // "9/5/2026"
new Intl.NumberFormat('de-DE').format(1234.5);          // "1.234,5"
new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(9.99); // "$9.99"
```

Dates, numbers, currency, and even sort order (**collation**) are all
locale-sensitive — the same value renders differently by locale, and the
same *string* sorts differently by locale (e.g. accented characters'
position varies). Modern language runtimes ship this natively (JavaScript's
`Intl`, Java's `java.util.Locale`, ICU-backed libraries elsewhere) — reach
for the platform's locale-aware formatter rather than hand-rolling date/
number string formatting, which reliably breaks the moment a non-default
locale is involved.

## Pluralization

```
en: "1 item" / "2 items"                         — 2 forms
ru: "1 файл" / "2 файла" / "5 файлов"             — 3 forms, by remainder rules
ja: "1個" / "2個"                                  — 1 form, no plural inflection
ar: 6 distinct plural forms (zero/one/two/few/many/other)
```

The number of grammatical plural forms is not universal — English's
singular/plural split doesn't generalize. A hard-coded `count === 1 ?
singular : plural` breaks for any language with more (or fewer) plural
categories than English. The **CLDR plural rules** (Unicode's Common Locale
Data Repository) define the correct category set and boundary rules per
locale; `Intl.PluralRules` (JS) or an i18n library backed by CLDR is the
correct way to select the right form, not a manual ternary.

## Text direction

Arabic, Hebrew, and a handful of other scripts are written
**right-to-left (RTL)**. Set `dir="rtl"` on `<html>` (or per-element) rather
than assuming layout only ever flows left-to-right — a UI that hardcodes
`margin-left`/`float: left` instead of logical properties (`margin-inline-
start`, CSS logical properties generally) needs real rework to support RTL,
not just a translated string table.

## Common pitfalls

- **String concatenation across a translated phrase.** `"You have " +
  count + " items"` breaks the moment the target language's word order
  differs, or needs different words depending on the count's plural
  category. Use a template/placeholder-based message format
  (`"{count, plural, one {# item} other {# items}}"` in ICU MessageFormat,
  or an equivalent) so the translator controls word order and pluralization
  together.
- **Assuming a locale implies a currency or timezone.** `en-US` doesn't
  imply US dollars in every business context (e.g. a US-based user viewing
  prices in EUR), and no locale carries a timezone at all — timezone must
  be tracked as its own separate piece of data, never inferred from locale.
- **Hard-coding the target locale's date format string** instead of using
  the runtime's locale-aware formatter — the classic MM/DD/YYYY vs
  DD/MM/YYYY ambiguity, worsened by the fact that a literally identical
  string like `03/04/2026` means a different date depending on which
  convention the reader assumes.
- **Treating "translate the UI" as the whole localization task.** Real
  localization often also means adapting imagery/color connotations,
  legal/regulatory text, address formats, name-ordering conventions
  (family-name-first vs given-name-first), and measurement units — not
  just swapping strings.
- **Baking English pluralization logic into a translation key's name**
  (`item_singular`, `item_plural`) instead of letting the i18n library's
  CLDR-backed pluralization select among a locale's actual plural
  categories.

## Learn more

- [Unicode CLDR](https://cldr.unicode.org/) — the canonical locale data
  (plural rules, date/number formats, etc.) most i18n libraries are built
  on.
- [MDN: Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) — JavaScript's built-in locale-aware formatting APIs.
- [BCP 47 language tags](https://www.rfc-editor.org/info/bcp47)
- [W3C Internationalization](https://www.w3.org/International/) — broader i18n/l10n guidance beyond just formatting.
