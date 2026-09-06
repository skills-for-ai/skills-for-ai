---
name: google-drive
description: Use when asked about Google Drive/Workspace as a suite — how Docs, Sheets, and Slides fit together, cloud-native storage and sharing, real-time collaboration — for app-specific detail see google-docs, google-sheets, and google-slides; the Google Workspace counterpart to microsoft-office.
---

# Google Drive

Google Drive is Google's cloud storage service and the umbrella for
Google Workspace's productivity apps — principally Docs (documents),
Sheets (spreadsheets), and Slides (presentations), alongside Gmail,
Calendar, and others — built around a browser-first, always-online,
real-time-collaborative model from the outset.

## Cloud-native by design

Unlike [[microsoft-office]]'s traditionally desktop-first model (which
has since added cloud collaboration), Google's apps were built cloud-
native from the start: every file lives in Drive, saves continuously and
automatically, and is shared by granting access to the file rather than
sending copies. There is no separate "save" step and no meaningfully
distinct offline-first file format — the browser (or app) is a thin
client over a document that always lives in the cloud.

## Real-time collaboration

Multiple people can edit the same Doc, Sheet, or Slide deck
simultaneously, seeing each other's cursors and changes live, with a
full revision history available for any file — collaboration is a core
design assumption rather than an added-on feature.

## Sharing and permissions

Files and folders are shared via granular permission levels (viewer,
commenter, editor) granted to specific people, a whole domain, or anyone
with the link — a fundamentally link/permission-based sharing model,
rather than Office's traditional file-copy-and-send model (though
Microsoft 365's OneDrive/SharePoint sharing has converged toward the
same approach).

## Interoperability with Microsoft Office formats

Google's apps can open, edit, and export `.docx`/`.xlsx`/`.pptx` files,
though complex formatting can occasionally shift on conversion between
the two ecosystems — worth checking fidelity before relying on Google
Workspace as a drop-in replacement for an Office-format-heavy workflow.

## Common pitfalls

- **Assuming perfect fidelity converting to/from Office formats** —
  complex formatting, macros, and some advanced features don't always
  survive round-tripping between Google's and Microsoft's formats.
- **Over-broad sharing permissions** — "anyone with the link can edit"
  is easy to set and easy to forget about; review sharing settings on
  sensitive documents periodically.
- **Relying on offline access without setting it up** — Google
  Workspace's offline mode needs to be explicitly enabled per file/
  device before it's needed; it isn't automatic.
- **Confusing Google Drive (storage) with My Drive vs. Shared Drives** —
  ownership and permission behavior differs between a personal My Drive
  file and a Shared Drive (team-owned) file; this affects what happens
  if the original creator leaves an organization.

## Learn more

- [[google-docs]], [[google-sheets]], [[google-slides]] for app-specific detail.
- [[microsoft-office]] for the Microsoft counterpart suite.
