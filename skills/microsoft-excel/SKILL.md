---
name: microsoft-excel
description: Use when asked about Microsoft Excel specifically — formulas and functions, tables, PivotTables, charts, conditional formatting, Office Scripts/VBA automation — as distinct from the general microsoft-office suite overview and from google-sheets, its closest Google Workspace equivalent.
---

# Microsoft Excel

Microsoft Excel is a spreadsheet application for organizing, calculating,
analyzing, and visualizing tabular data — part of the [[microsoft-office]]
suite, and one of the most widely used data-manipulation tools in
business generally, well beyond dedicated analysts.

## Core capabilities

- **Formulas and functions** — cell-level calculations ranging from
  simple arithmetic to lookups (`VLOOKUP`, `XLOOKUP`, `INDEX`/`MATCH`),
  conditional logic (`IF`, `IFS`), and statistical functions.
- **Tables** — structured ranges with named columns that auto-expand and
  support filtering and sorting, more robust than plain unstructured
  cell ranges for anything that will grow over time.
- **PivotTables** — a summarization tool for aggregating and cross-
  tabulating large datasets interactively, without writing formulas.
- **Charts** — visualizing data directly from worksheet ranges or
  PivotTables.
- **Conditional formatting** — visually highlighting cells based on
  their values or rules, useful for surfacing patterns and outliers at a
  glance.
- **Automation** — Office Scripts (JavaScript/TypeScript, cloud-based,
  works in Excel on the web) and VBA macros (legacy, desktop-only) for
  automating repetitive spreadsheet tasks.

## When Excel is (and isn't) the right tool

Excel excels at ad hoc analysis, small-to-medium structured datasets,
and situations where a human needs to interactively explore or adjust
data and formulas by hand. For very large datasets, complex
multi-table relational data, or analysis that needs to be reproducible
and version-controlled, a proper database (see this collection's
database skills) or a script-based analysis tool is usually a better
fit than a spreadsheet.

## Common pitfalls

- **Using unstructured ranges instead of Tables** — formulas and
  formatting that reference fixed cell ranges break silently as data is
  added or removed; Tables handle this automatically.
- **Hardcoding values that should be formulas** — makes a spreadsheet
  brittle to update and easy to get subtly out of sync when source data
  changes.
- **No data validation** — free-text entry where a dropdown or validation
  rule would catch bad input leads to inconsistent data that's hard to
  analyze later.
- **Treating a spreadsheet as a database** — using Excel for data with
  real relational structure, high volume, or multi-user concurrent
  write access tends to run into scaling and integrity problems a real
  database wouldn't have.
- **Macro security** — VBA macros from untrusted sources can execute
  arbitrary code; Excel's macro-security warnings exist for a reason and
  shouldn't be dismissed reflexively.

## Learn more

- [[microsoft-office]] for the broader suite Excel is part of.
- [[google-sheets]] for the closest Google Workspace equivalent.
- [[statistical-analysis]] for statistical techniques Excel is commonly used to apply.
