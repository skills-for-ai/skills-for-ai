---
name: c-sharp-programming
description: Use when asked to write, explain, or debug general-purpose C# code — properties and classes, LINQ, async/await, nullable reference types — independent of the broader dot-net-programming platform/runtime or any specific .NET framework (ASP.NET Core, Blazor).
---

# C# Programming

Covers the C# language itself. [[dot-net-programming]] covers the
platform/runtime and tooling (the BCL, NuGet, project system) C# code
runs on and against; a framework skill like [[blazor-programming]]
builds on top of both.

## Properties, records, and classes

```csharp
public class Person
{
    public string Name { get; set; }
    public int Age { get; init; }          // settable only at construction
}

public record Point(double X, double Y);   // value-based equality, immutable by default

var p1 = new Point(1, 2);
var p2 = new Point(1, 2);
Console.WriteLine(p1 == p2);               // true — records compare by value
```

Auto-implemented properties (`{ get; set; }`) generate a backing field and
accessors automatically. `record` types get compiler-generated value
equality, `ToString()`, and a non-destructive `with`-expression copy
constructor — the right default for immutable data-carrying types, where a
`class` is the right default for identity-based, mutable objects.

## LINQ

```csharp
var names = new[] { "Ada", "Grace", "Alan", "Barbara" };

var result = names
    .Where(n => n.Length > 4)
    .OrderBy(n => n)
    .Select(n => n.ToUpper())
    .ToList();
// ["BARBARA", "GRACE"] — "Ada" and "Alan" are 3–4 chars, filtered out
```

LINQ (Language Integrated Query) provides a uniform, composable query
syntax over any `IEnumerable<T>` (in-memory collections) or `IQueryable<T>`
(translated to SQL by an ORM like Entity Framework) — the same `Where`/
`Select`/`OrderBy` vocabulary works whether the data is a `List<T>` or a
database table, though *how* it executes (in-process vs. translated to
SQL) differs and matters for performance.

## Async/await

```csharp
public async Task<string> FetchDataAsync(HttpClient client, string url)
{
    var response = await client.GetAsync(url);
    response.EnsureSuccessStatusCode();
    return await response.Content.ReadAsStringAsync();
}
```

`async`/`await` compiles to a state machine that frees the calling thread
while waiting on I/O, rather than blocking it — essential for scalable
server code. An `async` method should return `Task`/`Task<T>` (or
`ValueTask<T>` for hot paths), propagate exceptions naturally through
`await`, and avoid `.Result`/`.Wait()`, which can deadlock in contexts with
a synchronization context (classic ASP.NET, UI apps).

## Nullable reference types

```csharp
#nullable enable

string? maybeName = GetName();       // explicitly nullable
string definiteName = maybeName ?? "Unknown";  // null-coalescing default

if (maybeName is not null)
{
    Console.WriteLine(maybeName.Length);  // compiler knows it's non-null here
}
```

With nullable reference types enabled (the default for new projects since
.NET 6), the compiler tracks and warns on possible null-dereference paths
at compile time — a `string` is non-nullable by default, `string?` opts
into nullability explicitly, turning a common runtime `NullReferenceException`
into a compile-time warning.

## Common pitfalls

- **Blocking on async code** (`.Result`, `.Wait()`) — can deadlock in
  contexts with a synchronization context; use `await` all the way up the
  call stack instead.
- **Mutating a `record`'s "immutable" state via a mutable property** — a
  `record` with `{ get; set; }` properties instead of `{ get; init; }` is
  not actually immutable, defeating the value-equality assumption.
- **Ignoring nullable-reference-type warnings** — treating them as noise
  rather than real, actionable null-safety information defeats the
  feature's purpose.
- **`IEnumerable` vs `IQueryable` confusion in LINQ** — calling `.ToList()`
  too early forces full data retrieval before filtering, executing what
  should be a database-side filter in memory instead.

## Learn more

- [[dot-net-programming]] for the underlying platform, BCL, and tooling.
- [Microsoft C# documentation](https://learn.microsoft.com/en-us/dotnet/csharp/)
- [[blazor-programming]] for a specific .NET web UI framework built on C#.
