---
name: google-sheets
description: Use when asked about Google Sheets specifically — formulas and functions, pivot tables, conditional formatting, Apps Script automation, connected sheets/data connectors — as distinct from the general google-drive suite overview and from microsoft-excel, its closest Microsoft Office equivalent.
---

# Google Sheets

Google Sheets is a cloud-native spreadsheet application — part of
[[google-drive]]/Google Workspace, and Google's counterpart to
[[microsoft-excel]], built around real-time collaborative editing and
live data connections.

## Core capabilities

- **Formulas and functions** — largely the same conceptual toolkit as
  Excel (lookups, conditional logic, statistical functions), plus some
  Sheets-specific functions (`QUERY`, `IMPORTRANGE`, `GOOGLEFINANCE`)
  with no direct Excel equivalent.
- **Pivot tables** — the same summarization/cross-tabulation concept as
  Excel's PivotTables, for aggregating large datasets interactively.
- **Conditional formatting** — visually highlighting cells based on
  values or rules.
- **Apps Script** — Google's JavaScript-based automation and extension
  platform, roughly analogous to Excel's VBA/Office Scripts, but able to
  interact with other Google Workspace apps and services directly (Docs,
  Gmail, Calendar) as part of the same script.
- **Connected Sheets / data connectors** — linking a sheet directly to a
  live external data source (such as BigQuery) so it reflects current
  data rather than a one-time import.

## Common pitfalls

- **Using unstructured ranges without named ranges or filters** —
  formulas referencing fixed cell ranges break silently as rows are
  added or removed, the same failure mode as unstructured Excel ranges.
- **Hardcoding values that should be formulas** — makes a sheet brittle
  to update and easy to get out of sync with its source data.
- **`IMPORTRANGE`/live-data functions treated as instantaneous** — some
  functions that pull external or cross-spreadsheet data can be slow or
  rate-limited; relying on them for time-sensitive calculations without
  accounting for that can produce stale results.
- **Sharing permission sprawl** — the same over-broad-link-sharing risk
  as the rest of [[google-drive]] applies directly to sheets containing
  sensitive data.

## Learn more

- [[google-drive]] for the broader suite Sheets is part of.
- [[microsoft-excel]] for the closest Microsoft Office equivalent.
- [[statistical-analysis]] for statistical techniques commonly applied in a spreadsheet.
