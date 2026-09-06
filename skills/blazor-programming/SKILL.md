---
name: blazor-programming
description: Use when asked to write, explain, or debug general-purpose Blazor code — components/razor syntax, Server vs. WebAssembly hosting models, data binding, dependency injection — as a C#/.NET UI framework, distinct from lily-design-system-blazor's specific component package built on it.
---

# Blazor Programming

Covers Blazor itself — a framework for building interactive web UIs
using C# instead of JavaScript, built on [[c-sharp-programming]] and the
[[dot-net-programming]] platform. See [[lily-design-system-blazor]] for a
specific design-system component package built using Blazor, distinct
from Blazor the framework covered here.

## Components and Razor syntax

```razor
@page "/counter"

<button @onclick="Increment">Count: @count</button>

@code {
    private int count = 0;
    private void Increment() => count++;
}
```

A `.razor` component mixes HTML markup with embedded C# (`@` prefixes
C# expressions and blocks) — Razor syntax, shared with ASP.NET Core MVC
views but here compiled into a component with its own state and render
logic, conceptually similar to a JSX or Vue single-file component but
using C# instead of JavaScript/TypeScript throughout.

## Hosting models: Server vs. WebAssembly

Blazor Server runs component logic on the server, over a persistent
SignalR connection — the browser receives only UI diffs, so the actual
.NET code never ships to the client, but every interaction has network
round-trip latency and requires a live connection. Blazor WebAssembly
runs the full .NET runtime compiled to WebAssembly directly in the
browser — interactions are local and fast with no server round-trip, but
the initial download is larger. Choosing between them (or a hybrid,
per-component-interactivity model in modern .NET) is one of the first
real architectural decisions in a Blazor project.

## Data binding

```razor
<input @bind="name" @bind:event="oninput" />
<p>Hello, @name!</p>

@code {
    private string name = "";
}
```

`@bind` sets up two-way binding between a UI element and a C# field/
property — by default on the element's "commit" event (e.g. `onchange`
for a text input), overridable (as above) to a more immediate event like
`oninput`.

## Dependency injection

```razor
@inject HttpClient Http

@code {
    private async Task LoadData()
    {
        var data = await Http.GetFromJsonAsync<MyData>("api/data");
    }
}
```

Blazor uses .NET's built-in dependency injection container (the same one
ASP.NET Core uses) — `@inject` requests a registered service directly
into a component, following the same DI conventions as the rest of the
.NET ecosystem.

## Common pitfalls

- **Choosing a hosting model without considering its trade-offs** —
  Blazor Server's latency-per-interaction and connection-dependency vs.
  WebAssembly's larger initial payload are real architectural
  consequences, not an implementation detail to decide casually.
- **Blocking calls on the UI thread** in Blazor Server — a long-running
  synchronous operation blocks the SignalR circuit handling that user's
  UI updates; use `async`/`await` for I/O-bound work.
- **Forgetting `StateHasChanged()`** after updating state from outside
  Blazor's normal event-handling flow (e.g. a background task or timer
  callback) — Blazor doesn't automatically know to re-render in that
  case.
- **Treating Razor syntax like plain Razor Pages/MVC views** — Blazor
  components have their own lifecycle (`OnInitializedAsync`,
  `OnParametersSetAsync`, and others) distinct from a traditional
  request/response MVC view's model.

## Learn more

- [Blazor documentation](https://learn.microsoft.com/en-us/aspnet/core/blazor/)
- [[c-sharp-programming]], [[dot-net-programming]] for the underlying language and platform.
- [[lily-design-system-blazor]] for a specific component package built on Blazor.
