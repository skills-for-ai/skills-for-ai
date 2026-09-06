---
name: zig-programming
description: Use when asked to write, explain, or debug general-purpose Zig code — explicit error handling and no hidden control flow, comptime, manual memory management with allocators — as a modern, safer alternative in the same low-level niche as c-programming.
---

# Zig Programming

Covers Zig — a systems-programming language competing in roughly the
same niche as [[c-programming]] (manual memory management, no garbage
collector, direct hardware access), with a design philosophy of "no
hidden control flow, no hidden memory allocations," and strong,
first-class interop with existing C code.

## Explicit error handling, no hidden control flow

```zig
const std = @import("std");

fn readFile(path: []const u8) ![]u8 {
    const file = try std.fs.cwd().openFile(path, .{});
    defer file.close();
    // ... read contents ...
    return contents;
}
```

A function that can fail returns an error union (`!T`) — `try` propagates
the error to the caller, explicitly visible at every call site, similar
in spirit to Rust's `?` or Go's explicit `if err != nil`. `defer`
schedules cleanup code to run at scope exit regardless of how it's
exited — Zig's answer to RAII, without needing destructors or a class
system.

## Comptime

```zig
fn Vector(comptime T: type, comptime len: usize) type {
    return struct {
        data: [len]T,
    };
}

const Vec3f = Vector(f32, 3);
```

`comptime` marks code that runs at compile time — including, as above,
generating types themselves. This single mechanism replaces what other
languages split across templates/generics, macros, and a build-time
scripting language, executing normal Zig code (not a separate templating
language) at compile time.

## Manual memory management with allocators

```zig
const std = @import("std");

pub fn main() !void {
    var gpa = std.heap.GeneralPurposeAllocator(.{}){};
    const allocator = gpa.allocator();

    const buffer = try allocator.alloc(u8, 100);
    defer allocator.free(buffer);
}
```

Zig has no garbage collector and no hidden allocations — every function
that allocates takes an explicit `Allocator` parameter, making memory use
visible and swappable (a test can pass a different allocator than
production, e.g. one that detects leaks) rather than implicit and global,
as `malloc`/`free` effectively are in C.

## Common pitfalls

- **Forgetting `defer` for cleanup** — the same fundamental discipline as
  C's `malloc`/`free`, just with a cleaner cleanup mechanism; a resource
  acquired without a matching `defer` (or explicit later free) leaks.
- **Ignoring an error union's `try`/`catch`** — Zig forces error unions
  to be handled (via `try`, `catch`, or an explicit `switch`), but it's
  still possible to `catch unreachable` inappropriately, turning a
  recoverable error into a crash if the "unreachable" case does occur.
- **Assuming Zig's package ecosystem matches C's or Rust's maturity** —
  Zig is younger and evolving quickly (including breaking language
  changes between versions); verify version compatibility before
  assuming a specific idiom or API is stable.
- **Overusing `comptime` where runtime logic would be simpler** — just
  because compile-time metaprogramming is available doesn't mean every
  problem needs it.

## Learn more

- [Zig documentation](https://ziglang.org/documentation/master/)
- [[c-programming]] for the language occupying the closest niche, and the one Zig interops with directly.
