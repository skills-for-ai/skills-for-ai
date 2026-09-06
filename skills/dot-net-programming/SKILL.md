---
name: dot-net-programming
description: Use when asked about the .NET platform/runtime and tooling itself — the CLR, the base class library, project SDKs and NuGet, cross-language interop — as distinct from any one .NET language (see c-sharp-programming) or framework (see blazor-programming).
---

# .NET Programming

.NET is a free, cross-platform, open-source developer platform — the
runtime (CLR), a large standard library (the base class library, BCL),
and tooling (the `dotnet` CLI, project SDKs, NuGet) that multiple
languages (C#, F#, Visual Basic) compile down to and share. This skill
covers the platform itself; [[c-sharp-programming]] covers the dominant
language on top of it.

## The runtime and cross-language interop

.NET languages compile to a shared intermediate language (IL), executed
by the Common Language Runtime (CLR) — a JIT-compiled, garbage-collected
runtime. Because every .NET language targets the same IL and type system
(the Common Type System, CTS), a library written in F# can be consumed
directly from C# and vice versa, with no interop layer needed.

## Project SDKs and the `dotnet` CLI

```sh
dotnet new webapi -n MyApi         # scaffold a new project from a template
dotnet build                        # compile
dotnet run                          # build + run
dotnet test                         # run tests
dotnet publish -c Release           # produce a deployable, self-contained or framework-dependent output
dotnet add package Newtonsoft.Json  # add a NuGet dependency
```

A `.csproj` (or `.fsproj`/`.vbproj`) file declares the target framework
(e.g. `net9.0`), dependencies, and build settings in a lean XML format —
much smaller than the older `.NET Framework`-era project format, since
modern SDK-style projects infer file inclusion by convention rather than
listing every file explicitly.

## NuGet

NuGet is .NET's package manager — packages are distributed as `.nupkg`
files (referenced by ID and version in the project file), resolved and
restored via `dotnet restore` (implicit in `build`/`run`), with a
`packages.lock.json` optionally pinning exact resolved versions for
reproducible builds.

## Base class library (BCL)

The BCL is .NET's standard library — collections, LINQ, I/O, networking,
threading/async primitives, and more — available identically across every
.NET language and (for the cross-platform, modern .NET, as opposed to the
Windows-only legacy .NET Framework) every supported OS.

## Common pitfalls

- **Confusing .NET Framework (legacy, Windows-only) with modern .NET**
  (.NET 5+, cross-platform) — they share a name and much of the BCL's
  shape, but are different runtimes with different support and platform
  reach; check which one a specific project or tutorial targets.
- **Mixing target framework versions across a solution without checking
  compatibility** — a library targeting a newer target framework moniker
  (TFM) than a consuming project can fail to build or load.
- **Not committing a lock file for applications** — without
  `packages.lock.json`, a `dotnet restore` can resolve to different
  transitive dependency versions over time as new compatible versions are
  published.
- **Treating the `dotnet` CLI templates as fixed** — `dotnet new list`
  shows the actual set of installed templates, which varies by installed
  SDKs and workloads; don't assume a template exists without checking.

## Learn more

- [[c-sharp-programming]] for the dominant language built on this platform.
- [.NET documentation](https://learn.microsoft.com/en-us/dotnet/)
- [[blazor-programming]] for a .NET web UI framework.
