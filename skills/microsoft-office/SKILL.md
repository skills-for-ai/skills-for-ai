---
name: microsoft-office
description: Use when asked about Microsoft Office as a suite — how Word, Excel, PowerPoint, and related apps fit together, file formats (.docx/.xlsx/.pptx), shared features (co-authoring, templates, Office Scripts/VBA automation) — for app-specific detail see microsoft-word, microsoft-excel, and microsoft-powerpoint.
---

# Microsoft Office

Microsoft Office is Microsoft's suite of productivity applications —
principally Word (documents), Excel (spreadsheets), and PowerPoint
(presentations), alongside Outlook (email/calendar), OneNote (notes),
and others — available as a one-time-purchase product or, more commonly
today, via a Microsoft 365 subscription that adds cloud storage
(OneDrive), continuous updates, and collaboration features.

## Shared file formats

The Office Open XML formats — `.docx` (Word), `.xlsx` (Excel), `.pptx`
(PowerPoint) — are ZIP-based XML document formats, standardized as
ECMA-376 and ISO/IEC 29500, and are the default save format across
modern Office versions and most competing office suites (including
Google's, via import/export).

## Shared features across the suite

- **Co-authoring** — multiple people editing the same document
  simultaneously, when a file is stored in OneDrive or SharePoint.
- **Templates** — pre-built starting points for common document types,
  shared across the suite's template gallery.
- **Automation** — Office Scripts (modern, cloud-based, JavaScript/
  TypeScript, primarily for Excel on the web) and VBA (Visual Basic for
  Applications, the long-standing legacy macro language across desktop
  Office apps) both let users automate repetitive tasks.
- **AI features (Copilot)** — generative AI assistance integrated across
  the suite for drafting, summarizing, and analyzing content, on
  qualifying subscriptions.

## Choosing between Office and Google Workspace

Both suites cover overlapping ground (documents, spreadsheets,
presentations); the practical differences are mostly about collaboration
model (Google Workspace's browser-first, always-synced model vs.
Office's traditionally desktop-first model, though Microsoft 365 has
converged significantly), file format fidelity when interoperating with
existing `.docx`/`.xlsx`/`.pptx` files, and organizational/IT context
(which suite an organization has already standardized on). See
[[google-drive]] for the Google Workspace counterpart.

## Common pitfalls

- **Assuming feature parity across desktop, web, and mobile versions** —
  Office's web and mobile apps don't always support every feature the
  desktop app does; verify before relying on an advanced feature in a
  cross-platform workflow.
- **Version-format confusion** — older `.doc`/`.xls`/`.ppt` (pre-2007
  binary formats) are not the same as the modern XML-based
  `.docx`/`.xlsx`/`.pptx` formats; some features and fidelity can be lost
  converting between them.
- **VBA macros treated as portable** — VBA macros are Windows/desktop-
  Office-specific and generally don't run in Office on the web or on
  Mac in the same way; check compatibility before depending on one.
- **Co-authoring conflicts from files stored locally rather than in
  OneDrive/SharePoint** — real-time co-authoring requires cloud storage;
  local-only files fall back to simple overwrite-based sharing.

## Learn more

- [[microsoft-word]], [[microsoft-excel]], [[microsoft-powerpoint]] for app-specific detail.
- [[google-drive]] for the Google Workspace counterpart suite.
