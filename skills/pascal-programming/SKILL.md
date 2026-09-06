---
name: pascal-programming
description: Use when asked to write, explain, or debug general-purpose (standard/Free) Pascal code — strong static typing, structured programming constructs, units — as the language delphi-programming's Object Pascal dialect extends.
---

# Pascal Programming

Covers Pascal — designed by Niklaus Wirth explicitly to teach structured
programming through strong static typing and clear, readable syntax.
[[delphi-programming]] uses Object Pascal, a direct object-oriented
descendant of the language covered here.

## Strong static typing

```pascal
program TypeExample;
var
  age: Integer;
  name: String;
  price: Real;
begin
  age := 30;
  name := 'Ada';
  price := 19.99;
  { age := name;  ← compile error: type mismatch, caught before running }
end.
```

Every variable has a fixed, declared type, checked at compile time —
Pascal was deliberately designed to make type errors (assigning a string
to an integer variable, for instance) impossible to compile, reflecting
Wirth's broader philosophy that a language should guide programmers
toward correct code by construction.

## Structured programming constructs

```pascal
procedure PrintFactorial(n: Integer);
var
  i, result: Integer;
begin
  result := 1;
  for i := 1 to n do
    result := result * i;
  WriteLn('Factorial: ', result);
end;

begin
  PrintFactorial(5);
end.
```

Pascal was one of the languages that popularized structured programming:
`begin`/`end` blocks, `if`/`then`/`else`, `for`/`while`/`repeat` loops,
and named procedures/functions, explicitly *without* `goto`-driven control
flow (though Pascal does technically support `goto`, its use is
discouraged and rare in idiomatic code) — a deliberate rejection of the
unstructured, jump-heavy style common before it.

## Units (modularity)

```pascal
unit MathUtils;

interface
  function Square(x: Integer): Integer;

implementation
  function Square(x: Integer): Integer;
  begin
    Square := x * x;
  end;
end.
```

A `unit` separates a module's public interface from its implementation —
conceptually similar to a header/source file split in C, but built into
the language rather than handled by a preprocessor.

## Common pitfalls

- **Off-by-one errors in `for` loops** — Pascal's `for i := 1 to n do`
  is inclusive of both ends; forgetting this compared to a half-open-range
  language is a common source of boundary bugs.
- **Confusing `=` (comparison) and `:=` (assignment)** — Pascal uses `:=`
  for assignment and `=` strictly for comparison, unlike C-family
  languages where `=` is assignment; muscle memory from another language
  can cause mistakes here.
- **Fixed-size string handling in older dialects** — standard Pascal's
  original string type had compile-time fixed length; modern dialects
  (Free Pascal, Delphi's Object Pascal) use dynamically-sized strings, so
  check which dialect a specific codebase targets.
- **Treating all "Pascal" dialects as identical** — standard Pascal, Free
  Pascal (Object Pascal-compatible), Turbo Pascal, and Delphi's Object
  Pascal differ meaningfully; verify which dialect a given piece of code
  or documentation assumes.

## Learn more

- [Free Pascal documentation](https://www.freepascal.org/docs.html)
- [[delphi-programming]] for the object-oriented Object Pascal dialect built on this foundation.
