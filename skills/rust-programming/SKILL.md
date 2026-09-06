---
name: rust-programming
description: Use when asked to write, explain, or debug general-purpose Rust code — ownership and borrowing, `Result`/`Option` error handling, traits and generics, or Cargo workflows — independent of any testing framework or web/UI crate.
---

# Rust Programming

Covers the Rust language and Cargo itself. A testing-framework skill or a
framework-specific skill (a web framework, a UI crate) builds on top of this.

## Ownership and borrowing

```rust
fn takes_ownership(s: String) { println!("{s}"); }       // s is moved in, dropped at end
fn borrows(s: &str) { println!("{s}"); }                  // s is only borrowed
fn borrows_mut(s: &mut String) { s.push_str("!"); }       // exclusive, mutable borrow

fn main() {
    let owned = String::from("hello");
    borrows(&owned);        // fine, owned still usable after
    takes_ownership(owned); // owned moved here
    // println!("{owned}"); // compile error: value used after move
}
```

The compiler enforces at compile time: exactly one owner per value at a time;
any number of immutable (`&T`) borrows *or* exactly one mutable (`&mut T`)
borrow, never both at once. This is what eliminates data races and
use-after-free bugs without a garbage collector — and it's also the source
of most "fighting the borrow checker" friction for newcomers. When stuck,
the fix is almost always to borrow instead of move, clone deliberately when
you actually need a second owner, or restructure so one thing owns the data
and everything else borrows it.

## Error handling: `Result` and `Option`

```rust
use std::fs;

fn read_config(path: &str) -> Result<String, std::io::Error> {
    fs::read_to_string(path)
}

fn first_word(s: &str) -> Option<&str> {
    s.split_whitespace().next()
}

fn run() -> Result<(), std::io::Error> {
    let contents = read_config("config.toml")?;  // `?` propagates the Err early
    println!("{contents}");
    Ok(())
}
```

There are no exceptions for recoverable errors — `Result<T, E>` (`Ok`/`Err`)
is the return type for anything that can fail, `Option<T>` (`Some`/`None`)
for anything that can be absent. The `?` operator propagates an `Err`/`None`
out of the current function immediately, converting the error type via
`From` if needed — it's what keeps `Result`-returning code from turning into
a pyramid of `match` statements. `panic!` is reserved for unrecoverable bugs
(an invariant violation), not for expected failure modes like a missing file.

## Traits and generics

```rust
trait Shape {
    fn area(&self) -> f64;
}

struct Circle { radius: f64 }
impl Shape for Circle {
    fn area(&self) -> f64 { std::f64::consts::PI * self.radius * self.radius }
}

fn print_area<T: Shape>(shape: &T) {
    println!("area = {}", shape.area());
}

// Or dynamic dispatch when the concrete type varies at runtime:
fn print_area_dyn(shape: &dyn Shape) {
    println!("area = {}", shape.area());
}
```

`impl Trait for Type` is how Rust does polymorphism without inheritance.
`<T: Shape>` (a trait bound) is resolved at compile time — zero runtime
cost, one specialized copy of the function per concrete type (monomorphization).
`&dyn Shape` defers to a runtime vtable when the concrete type isn't known
until runtime (e.g. a `Vec<Box<dyn Shape>>` of mixed shapes).

## Cargo workflow

```sh
cargo new my_project        # scaffold a new binary crate
cargo build                 # compile (debug)
cargo build --release       # compile, optimized
cargo run                   # build + run
cargo test                  # run unit + integration + doc tests
cargo clippy -- -D warnings # lint, deny warnings
cargo fmt                   # format per rustfmt.toml / defaults
cargo doc --open            # build and open API docs
```

`Cargo.toml` declares dependencies and metadata; `Cargo.lock` pins exact
resolved versions and should be committed for binaries (reproducible builds)
though conventions vary for libraries.

## Common pitfalls

- **`.clone()` to silence a borrow-checker error** without understanding
  why the borrow failed — often papers over a real design issue (two things
  both wanting ownership) rather than fixing it; sometimes the right call,
  but check first.
- **`.unwrap()`/`.expect()` on `Result`/`Option` in code that can actually
  receive an `Err`/`None`** — fine in a quick script or test, a panic
  waiting to happen in library or production code; propagate with `?` or
  handle the case explicitly.
- **Integer overflow** — debug builds panic on overflow, release builds
  wrap silently by default; use checked (`checked_add`), saturating
  (`saturating_add`), or wrapping (`wrapping_add`) arithmetic explicitly
  when overflow is a real possibility.
- **Fighting lifetimes with a lifetime annotation** instead of restructuring
  ownership — `'a` annotations describe a relationship that already exists;
  if you can't write one that satisfies the compiler, the data usually needs
  to be owned differently, not annotated harder.
- **`String` vs `&str` confusion** — `String` is owned, heap-allocated,
  growable; `&str` is a borrowed view into string data (owned by something
  else, or a `'static` literal). Take `&str` in function parameters unless
  you specifically need ownership.

## Learn more

- [The Rust Programming Language ("the book")](https://doc.rust-lang.org/book/)
- [Rust by Example](https://doc.rust-lang.org/rust-by-example/)
- [The Cargo Book](https://doc.rust-lang.org/cargo/)
- [Rust standard library docs](https://doc.rust-lang.org/std/)
- [Clippy lint list](https://rust-lang.github.io/rust-clippy/master/)
