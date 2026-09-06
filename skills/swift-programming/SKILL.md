---
name: swift-programming
description: Use when asked to write, explain, or debug general-purpose Swift code — optionals, structs vs classes, protocols and protocol-oriented programming, async/await — independent of any UI framework (SwiftUI, UIKit).
---

# Swift Programming

Covers the Swift language itself, used across Apple platforms (and,
increasingly, server-side and cross-platform via Swift on Linux). A UI
framework (SwiftUI, UIKit) builds on top of this, not instead of it.

## Optionals

```swift
var name: String? = nil          // explicitly optional — may hold a value or nil

if let unwrapped = name {
    print(unwrapped)             // safely unwrapped, only reached if name != nil
}

let greeting = name ?? "Guest"   // nil-coalescing default
```

Swift has no implicit null references — a type is non-optional by
default (`String`), and must be explicitly marked optional (`String?`)
to hold "no value." The compiler forces explicit handling (`if let`,
`guard let`, `??`, or forced unwrap `!`) before an optional's value can
be used, eliminating a whole class of null-dereference crashes at
compile time — forced unwrap (`!`) is the one escape hatch, and a crash
if the value turns out to be `nil`.

## Structs vs. classes

```swift
struct Point {       // value type: copied on assignment/pass
    var x: Double
    var y: Double
}

class Counter {       // reference type: shared on assignment/pass
    var count = 0
    func increment() { count += 1 }
}
```

Swift favors value types (`struct`, `enum`) by default — copied rather
than shared, which avoids a whole category of aliasing bugs. Use a
`class` specifically when identity or shared mutable state is actually
needed (reference semantics, inheritance, or interop with Objective-C
APIs).

## Protocols and protocol-oriented programming

```swift
protocol Shape {
    func area() -> Double
}

extension Shape {
    func describe() -> String {          // default implementation
        "Area: \(area())"
    }
}

struct Circle: Shape {
    var radius: Double
    func area() -> Double { .pi * radius * radius }
}
```

Protocols define a contract; protocol extensions can supply default
implementations, letting types adopt shared behavior without inheritance
— Swift's idiomatic alternative to class hierarchies, often summarized as
"protocol-oriented programming."

## Async/await

```swift
func fetchData(from url: URL) async throws -> Data {
    let (data, _) = try await URLSession.shared.data(from: url)
    return data
}
```

Swift's structured concurrency (`async`/`await`, `Task`, actors) replaces
older completion-handler-based async APIs with linear, readable code and
compiler-checked cancellation and error propagation. An `actor` type
serializes access to its mutable state automatically, preventing data
races without manual locking.

## Common pitfalls

- **Force-unwrapping (`!`) defensively** — silences the compiler but
  crashes at runtime if the value is actually `nil`; prefer `if let`/
  `guard let` or a sensible default with `??`.
- **Using a `class` where a `struct` would do** — reaching for reference
  semantics by habit, rather than because shared mutable identity is
  actually needed, gives up value-type safety for no benefit.
- **Retain cycles between classes** — two reference-type objects holding
  strong references to each other leak memory; use `weak` or `unowned`
  references to break the cycle (usually in closures capturing `self`).
- **Ignoring `throws`/`try` at call sites** — using `try!` to force past
  an error rather than handling it turns a recoverable error into a
  crash.

## Learn more

- [The Swift Programming Language (official book)](https://docs.swift.org/swift-book/)
- [Swift.org documentation](https://www.swift.org/documentation/)
