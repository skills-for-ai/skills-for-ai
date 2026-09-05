---
name: typescript-programming-skill
description: Use when asked to write, explain, or debug general-purpose TypeScript code — the type system (interfaces, generics, unions, narrowing), tsconfig options, or common typing pitfalls (`any` vs `unknown`, structural typing) — independent of any testing framework or UI library.
---

# TypeScript Programming Skill

TypeScript is JavaScript plus a structural, gradual static type system,
compiled (or transpiled, via `tsc`, `esbuild`, `swc`, …) down to plain
JavaScript. Everything in [[javascript-programming-skill]] still applies at
runtime — TypeScript's types are erased entirely by the time the code runs.

## Interfaces, types, and structural typing

```typescript
interface User {
  id: number;
  name: string;
  email?: string;          // optional property
}

type Point = { x: number; y: number };

function greet(user: User): string {
  return `Hi, ${user.name}`;
}

const anon = { id: 1, name: "Alice", extra: true };
greet(anon); // OK — TypeScript is structural: anon has every property User requires
```

TypeScript's type system is **structural** ("duck typing"), not nominal — a
value satisfies a type if it has the right shape, regardless of how it was
declared. `interface` and `type` are largely interchangeable for object
shapes; `interface` supports declaration merging (reopening the same
interface to add members) and is generally preferred for public object
shapes, `type` is required for unions, tuples, and mapped/conditional types.

## Generics

```typescript
function first<T>(items: T[]): T | undefined {
  return items[0];
}

interface Box<T> {
  value: T;
}

const b: Box<string> = { value: "hi" };
```

A generic parameter (`<T>`) lets a function or type stay reusable across
concrete types while the compiler still checks it's used consistently —
`first([1, 2, 3])` infers `T = number` and returns `number | undefined`,
not `any`.

## Unions, narrowing, and `unknown` vs `any`

```typescript
function formatId(id: string | number): string {
  if (typeof id === "string") {
    return id.toUpperCase();   // narrowed to string here
  }
  return id.toFixed(0);        // narrowed to number here
}

function handle(value: unknown) {
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // must narrow before use
  }
}
```

- A union type (`A | B`) means the value could be either; a `typeof`/
  `instanceof`/discriminant-property check **narrows** it within that branch.
- `unknown` accepts anything (like `any`) but forces a narrowing check before
  you can do anything with the value — it's the type-safe counterpart to
  `any`, which disables type checking entirely for that value and silently
  propagates that loss of safety to everything it touches.

## tsconfig essentials

```json
{
  "compilerOptions": {
    "strict": true,
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "noUncheckedIndexedAccess": true
  }
}
```

`"strict": true` turns on the full strict family (`strictNullChecks`,
`noImplicitAny`, …) — turning it on for a new project is close to
non-negotiable; turning it on for an existing loosely-typed one is usually
a staged migration. `noUncheckedIndexedAccess` makes `arr[i]` return
`T | undefined` instead of assuming the index exists — catches a real class
of runtime bugs that plain `strict` doesn't.

## Common pitfalls

- **Reaching for `any` to silence an error** instead of narrowing or fixing
  the actual type mismatch — `any` disables checking for that value and
  everything derived from it, defeating the point of using TypeScript there.
- **`as` type assertions overriding a real mismatch** — `as` tells the
  compiler "trust me," it does not convert or validate anything at runtime;
  an incorrect assertion compiles cleanly and fails at runtime instead.
- **Non-null assertion (`value!`) papering over a genuinely possible
  `null`/`undefined`** — prefer an actual narrowing check or a default value
  unless you can prove the value is never null at that point.
- **Confusing `interface` extension with `type` intersection** as a source
  of subtly different error messages — both compose types, but reach for
  `interface`+`extends` for object shapes and `type`+`&` when combining
  unions or non-object types.
- **Forgetting types are erased at runtime** — `typeof someInterfaceValue
  === "SomeInterface"` is not a thing; runtime type checks need an actual
  runtime construct (`typeof`, `instanceof`, a discriminant field, or a
  validation library like Zod).

## Learn more

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TSConfig reference](https://www.typescriptlang.org/tsconfig)
- [Type Challenges](https://github.com/type-challenges/type-challenges) — practice for advanced generic/conditional types.
- [[javascript-programming-skill]] for the underlying runtime language.
