---
name: kotlin-programming
description: Use when asked to write, explain, or debug general-purpose Kotlin code — null safety, data classes, coroutines, extension functions — independent of any specific target (Android, JVM backend, Kotlin Multiplatform).
---

# Kotlin Programming

Covers the Kotlin language itself — interoperable with Java on the JVM,
and usable for Android, backend, and (via Kotlin Multiplatform) shared
cross-platform code. This skill covers the language, not any one target
platform or framework built on it.

## Null safety

```kotlin
var name: String? = null              // explicitly nullable

val length = name?.length ?: 0        // safe call + Elvis operator default

if (name != null) {
    println(name.length)              // smart-cast: compiler knows non-null here
}
```

Like Swift, Kotlin distinguishes nullable (`String?`) from non-nullable
(`String`) types at compile time — a variable declared `String` can never
hold `null`, closing off `NullPointerException` for most ordinary code.
The safe-call operator (`?.`) short-circuits to `null` instead of
crashing; the Elvis operator (`?:`) supplies a default.

## Data classes

```kotlin
data class Point(val x: Double, val y: Double)

val p1 = Point(1.0, 2.0)
val p2 = p1.copy(y = 5.0)   // new instance, x unchanged, y = 5.0

println(p1 == p1.copy())   // true — structural equality, not reference equality
```

`data class` auto-generates `equals()`, `hashCode()`, `toString()`, and a
`copy()` method for immutable-by-convention, value-carrying types —
similar in spirit to a C# `record`.

## Coroutines

```kotlin
suspend fun fetchData(url: String): String {
    return withContext(Dispatchers.IO) {
        // suspends without blocking the underlying thread
        URL(url).readText()
    }
}

fun main() = runBlocking {
    val data = fetchData("https://example.com")
    println(data)
}
```

A `suspend` function can pause and resume without blocking the thread it
runs on — Kotlin's answer to async programming, built on structured
concurrency (`CoroutineScope`, cancellation propagates through the scope
hierarchy automatically) rather than raw callbacks or unmanaged threads.

## Extension functions

```kotlin
fun String.isPalindrome(): Boolean = this == this.reversed()

println("racecar".isPalindrome())  // true
```

Extension functions let you add methods to existing types (including
types from the standard library or third-party code) without inheriting
from or modifying them — resolved statically at compile time, not true
runtime monkey-patching.

## Common pitfalls

- **Using the not-null assertion operator (`!!`) defensively** — throws a
  `NullPointerException` at runtime if the value is actually null; prefer
  a safe call (`?.`), Elvis default (`?:`), or explicit null check.
- **Blocking inside a coroutine** — calling a blocking API (rather than a
  suspending equivalent) inside a coroutine defeats the point of
  structured concurrency and can starve the dispatcher's thread pool.
- **Forgetting `data class` equality is structural, not reference-based**
  — assuming `==` compares identity (like Java's default `Object`
  equality) rather than field values.
- **Mutable default parameter objects** — a default parameter value that
  is itself a mutable object, shared across calls, can leak state between
  unrelated calls if not carefully scoped.

## Learn more

- [Kotlin documentation](https://kotlinlang.org/docs/home.html)
- [Kotlin coroutines guide](https://kotlinlang.org/docs/coroutines-guide.html)
