---
name: julia-programming
description: Use when asked to write, explain, or debug general-purpose Julia code — multiple dispatch, type stability for performance, broadcasting, the package manager — for high-performance numerical/scientific computing, distinct from r-programming's statistics-first focus.
---

# Julia Programming

Covers Julia — designed to combine the ease of a dynamic language with
the runtime performance of a compiled one, aimed squarely at numerical
and scientific computing. See [[r-programming]] for a language with an
overlapping scientific-computing audience but a statistics-first design
center.

## Multiple dispatch

```julia
area(s::Circle) = π * s.radius^2
area(s::Rectangle) = s.width * s.height

function describe(s)
    println("Area: ", area(s))   # dispatches on the runtime type of s
end
```

Julia's central organizing idea is multiple dispatch: a function can have
many methods, and the method chosen at call time depends on the types of
*all* its arguments, not just the first (as in most single-dispatch
object-oriented languages). This lets new methods be added for new type
combinations without modifying existing code — a different, arguably more
flexible axis of extensibility than class-based inheritance.

## Type stability and performance

```julia
function sum_squares(n)
    total = 0          # Int — fine
    for i in 1:n
        total += i^2
    end
    return total
end
```

Julia compiles specialized machine code per method-and-argument-type
combination via its JIT — code where a variable's type is inferable and
consistent throughout a function ("type-stable") compiles to fast,
near-C-level code; code where a variable's type can silently change
(e.g. starting an accumulator at `0` instead of `0.0` when it later needs
to hold a float) causes type instability and much slower, more
defensively-compiled code. This is Julia's central performance discipline
— worth checking with `@code_warntype` on a hot function.

## Broadcasting

```julia
x = [1, 2, 3, 4]
y = x .+ 1          # broadcasts +1 across every element
z = sqrt.(x)        # broadcasts sqrt across every element
```

The `.` before an operator or after a function name broadcasts it
element-wise over arrays (or combinations of arrays and scalars) —
Julia's vectorization mechanism, similar in spirit to R's default
vectorized operators but explicit via the dot syntax rather than
automatic.

## The package manager

```julia
using Pkg
Pkg.add("DataFrames")
Pkg.status()
```

`Pkg` manages dependencies per-project via a `Project.toml` (direct
dependencies) and `Manifest.toml` (fully resolved dependency graph,
pinning exact versions) — activated per-project so different projects
can use different, non-conflicting dependency versions.

## Common pitfalls

- **Type instability from inconsistent initial values** — starting an
  accumulator as an `Int` (`0`) when the loop will eventually produce a
  `Float64` silently degrades performance; initialize with the type the
  computation will actually produce (`0.0`).
- **Global variables in performance-critical code** — Julia can't type-
  specialize as effectively across a non-constant global; keep hot code
  inside functions, not at global scope.
- **1-based indexing surprise** coming from a 0-based-indexing language —
  `x[1]` is the first element in Julia.
- **First-call ("time-to-first-plot") latency** — Julia JIT-compiles each
  method specialization on first use, so the very first call to a
  function (or the first plot, in plotting libraries) is noticeably
  slower than subsequent calls; this is expected, not a bug.

## Learn more

- [Julia documentation](https://docs.julialang.org/)
- [[r-programming]] for an alternative scientific-computing language with a statistics-first focus.
