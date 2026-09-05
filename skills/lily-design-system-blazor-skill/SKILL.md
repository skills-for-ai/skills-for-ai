---
name: lily-design-system-blazor-skill
description: Explains what's available for Blazor in Lily Design System and which of the three real Blazor subprojects an agent needs — the headless component library (the NuGet package you depend on and style yourself), the six *-picker helpers catalog (opinionated, whole-interaction packages for a page-header preference/action or a form control), or the Blazor Web example app (a fully NHS-UK-styled reference you can run to see components working, or copy CSS from). Use when someone asks what Lily offers for Blazor, which Blazor package to install for a given job, how to run the Blazor example app, or wants Blazor Web App hosting-model guidance (Server / WebAssembly / static SSR).
license: MIT OR Apache-2.0 OR GPL-2.0-only OR GPL-3.0-only OR BSD-3-Clause
---

# Lily Design System™ — Blazor umbrella

Three real Blazor subprojects exist in the Lily Design System monorepo. This
skill is the entry point that maps them and tells an agent which one to
reach for; it does not restate any of their contracts in full.

## The three subprojects

- **[`lily-design-system-blazor-headless`](../lily-design-system-blazor-headless/)**
  — the Razor class library you actually depend on. Ships the full
  491-component catalog (490/490 recorded parity as of its own
  `spec/index.md`) as unstyled Razor components: semantic HTML, ARIA, focus
  management, keyboard behaviour, no CSS. Published to nuget.org as
  `LilyDesignSystem.Blazor.Headless` (namespace `LilyBlazorHeadless.Components`).
  Reach for this when you need a component itself — `Button`, `TextInput`,
  `BreadcrumbNav`, `DataTable`, and the rest — and intend to style it
  yourself. **Deep dive:**
  [`lily-design-system-blazor-headless-skill`](../lily-design-system-blazor-headless-skill/).
- **[`lily-design-system-blazor-helpers`](../lily-design-system-blazor-helpers/)**
  — six opinionated packages that sit alongside the headless library, each
  owning one whole interaction end to end: `theme-picker`, `locale-picker`,
  `text-size-picker`, `motion-picker` (a user preference — selection + DOM
  application + optional persistence), `share-picker` (an action — no
  applying, no persisting), and `date-time-picker` (a form control — a
  typeable text field plus a trigger opening a WAI-ARIA APG date-picker
  dialog). Each is its own NuGet package under namespace
  `LilyDesignSystem.Blazor.Helpers`. Reach for one of these when the job is a
  page-header preference control, a share action, or a date/time form field
  — not a plain catalog component. **Deep dive:**
  [`lily-design-system-blazor-helpers-skill`](../lily-design-system-blazor-helpers-skill/).
- **[`lily-design-system-blazor-web-examples`](../lily-design-system-blazor-web-examples/)**
  — a Blazor Web App (.NET 10) reference application, fully styled against
  the NHS UK design system's colours, typography, spacing, and focus states.
  It imports the headless library via `ProjectReference` and demonstrates
  every catalog component plus 12 composed pages. Reach for this to run
  something and see components working, or to copy its CSS as a starting
  point for your own styling. **No sibling skill covers this app** — its
  coverage lives entirely in this skill (below).

## The Blazor Web example app

`lily-design-system-blazor-web-examples` uses **Blazor Web App with
Interactive Server rendering** (SignalR) — not WebAssembly and not static
SSR. It follows the general example-app contract every Lily example app
carries (root [`AGENTS/examples.md`](../AGENTS/examples.md)): a complete
stylesheet targeting the kebab-case Lily class names directly (no
`nhsuk-` prefix in markup), CSS custom properties for every design token,
no CSS framework dependency, and the required-routes shape below.

### Required routes

- `/` — home page, links to every example.
- `/components` — the full catalog index (its own `index.md` records 490
  components with links to individual demos).
- `/components/{slug}` — one live demo per component, with the canonical
  metadata (description, props, ARIA, keyboard, references).

### Composed-page demos

Twelve pages beyond the required routes, each exercising several
components together: `/contact-form`, `/dashboard`, `/dialog-flow`,
`/file-upload-form`, `/navigation-and-menus`, `/page-layout`,
`/rating-and-feedback`, `/search-and-filter`, `/settings-page`,
`/tabbed-interface`, `/task-management`, `/timeline-and-cards`. Each
page's own `AGENTS.md` names the exact components it demonstrates.

### Running it

```sh
dotnet run --project src/LilyBlazorWebExamples
```

Then open the printed `https://localhost:...` URL.

### Visual reference

NHS UK design system: colours, typography, spacing, and focus states,
delivered as CSS custom properties in `wwwroot/css/nhs.css` (component
styling itself comes from the runtime theme, per the app's own
`AGENTS.md`). Keyboard-navigation helpers for the demos live in
`wwwroot/js/headless-interop.js`.

### The one Blazor gotcha this app exists to teach

Most `lily-design-system-blazor-headless` form-field primitives
(`TextInput`, `EmailInput`, `TextAreaInput`, `Select`, `Option`,
`RadioInput`, `CheckboxInput`, `Form`, `Field`, `Fieldset`,
`SummaryListItem`, and most others) do **not** declare
`Value`/`ValueChanged`, `Checked`/`CheckedChanged`, or `OnSubmit` — passing
a PascalCase `Value="..."` compiles silently into `AdditionalAttributes`
and wires nothing. This silently broke five of this app's own composed
pages (`ContactForm.razor`, `SettingsPage.razor`, `RatingAndFeedback.razor`,
`SearchAndFilter.razor`, `TaskManagement.razor`) until a later fix; the
correct idiom is native lowercase attributes (`value="@x"`, `checked="@x"`,
`name="@x"`) plus `@onchange`/`@oninput`, and `novalidate @onsubmit="Handler"`
on `Form` — Razor directive attributes always compile to their fixed
lowercase DOM event name and splat correctly regardless of what the
component declares. `BookAnAppointment.razor` is this app's own canonical
reference for the idiom across every field type. A short list of
components genuinely do own a real bindable pair —
`SwitchButton`, `Combobox`, `AccordionCheckbox`, and the `Dialog`/`Drawer`
family (checked individually) — where `@bind-X`/`XChanged` works as
written. This is the same fact the headless skill teaches from the
library side; it is repeated here because it is what actually broke this
app in practice.

## Conventions spanning all three subprojects

- **.NET 10 / C#**, Blazor Razor components throughout — no class
  components.
- **Namespace split by layer**: `LilyBlazorHeadless.Components` for the
  headless library, `LilyDesignSystem.Blazor.Helpers` for every helper
  package.
- **`CssClass`, not `class`**, as the styling-hook parameter — Blazor's
  attribute splat can't merge into a `class=""` the component itself sets,
  so every component concatenates its own kebab-case base class with the
  consumer's `CssClass`.
- **`RenderFragment ChildContent`** for the default slot;
  **`[Parameter(CaptureUnmatchedValues = true)] Dictionary<string, object>?
  AdditionalAttributes`** for rest-attribute pass-through, spread via
  `@attributes="AdditionalAttributes"`.
- **`IJSRuntime` for any DOM work**, gated on `OnAfterRenderAsync` (never
  during render) — this is how the helpers stay safe across Blazor Server,
  Blazor WebAssembly, and static SSR/prerender hosting models, and it is
  the same pattern the example app's `headless-interop.js` is invoked
  through.
- **NuGet Trusted Publishing (OIDC)** is how both the headless library and
  the helpers publish — no long-lived API key.

## When this isn't the right skill

- For the Blazor headless library's own parameter idioms, publish status,
  and known gotchas in full — use
  [`lily-design-system-blazor-headless-skill`](../lily-design-system-blazor-headless-skill/).
- For the six `*-picker` helpers' shared contract, their two exceptions,
  and the `IJSRuntime`/SSR implementation pattern in full — use
  [`lily-design-system-blazor-helpers-skill`](../lily-design-system-blazor-helpers-skill/).
- For framework-agnostic Lily concepts (what "headless" means, the
  491-component catalog at large, naming conventions, cross-framework
  composition patterns) — use
  [`lily-design-system-skill`](../lily-design-system-skill/) instead; it
  doesn't restate Blazor's own idioms, and this skill doesn't restate its
  concepts.
