---
name: delphi-programming
description: Use when asked to write, explain, or debug Delphi/Object Pascal code — classes and interfaces, properties, the VCL/FireMonkey component model, units — as the object-oriented dialect built on pascal-programming.
---

# Delphi Programming

Covers Delphi's Object Pascal — an object-oriented descendant of
[[pascal-programming]] historically known for rapid application
development on Windows (via the VCL) and, later, cross-platform UI
development (via FireMonkey/FMX).

## Classes and interfaces

```pascal
type
  IShape = interface
    function Area: Double;
  end;

  TCircle = class(TInterfacedObject, IShape)
  private
    FRadius: Double;
  public
    constructor Create(ARadius: Double);
    function Area: Double;
  end;

constructor TCircle.Create(ARadius: Double);
begin
  FRadius := ARadius;
end;

function TCircle.Area: Double;
begin
  Result := Pi * FRadius * FRadius;
end;
```

Object Pascal classes support single inheritance plus interface
implementation (similar in shape to Java or C#'s model) — `interface`
declares a contract with no implementation, and a class implements it
alongside its own inheritance chain. `Result` is the implicit variable a
function assigns its return value to, rather than an explicit `return`
statement.

## Properties

```pascal
type
  TPerson = class
  private
    FName: string;
    procedure SetName(const Value: string);
  public
    property Name: string read FName write SetName;
  end;

procedure TPerson.SetName(const Value: string);
begin
  FName := Trim(Value);   // validation/transformation on write
end;
```

A `property` exposes a field-like syntax (`person.Name := 'Ada'`) backed
by getter/setter methods — letting validation, computation, or change
notification run transparently on read/write without the caller needing
to know it isn't a plain field.

## The VCL/FireMonkey component model

Delphi's defining feature is its visual, drag-and-drop component model:
UI elements (buttons, forms, data-bound controls) are components with
published properties and events, editable in a visual designer and
persisted to a `.dfm`/`.fmx` form file alongside the Object Pascal source
— VCL targets Windows specifically, FireMonkey (FMX) targets multiple
platforms (Windows, macOS, iOS, Android, Linux) from one codebase.

## Common pitfalls

- **Manual memory management for non-reference-counted classes** — plain
  `TObject`-descended classes (unlike `TInterfacedObject`/interfaces,
  which are reference-counted) must be explicitly `Free`d; forgetting to
  leaks memory, the same fundamental discipline as [[c-programming]]'s
  `malloc`/`free`.
- **Mixing VCL and FireMonkey assumptions** — code and components written
  for one aren't directly portable to the other despite superficially
  similar names; check which framework a given unit targets.
- **Confusing `=`/`:=`** — the same Object-Pascal-family distinction as
  in [[pascal-programming]]: `:=` for assignment, `=` for comparison.
- **Ignoring `try`/`finally` for resource cleanup** — without wrapping
  manual allocation in `try ... finally ... Free; end`, an exception
  between allocation and cleanup leaks the resource.

## Learn more

- [Embarcadero Delphi documentation](https://docwiki.embarcadero.com/RADStudio/en/Delphi_Language_Overview)
- [[pascal-programming]] for the foundational language Object Pascal extends.
