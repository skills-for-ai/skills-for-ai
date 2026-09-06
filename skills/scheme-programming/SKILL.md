---
name: scheme-programming
description: Use when asked to write, explain, or debug general-purpose Scheme code — minimal core syntax, tail-call optimization, first-class continuations — as the smaller, more minimalist Lisp dialect distinct from lisp-programming (Common Lisp).
---

# Scheme Programming

Covers Scheme — a Lisp dialect (see [[lisp-programming]] for the larger,
more feature-rich Common Lisp) deliberately kept small: a minimal set of
special forms, with everything else buildable from that core, guided by
a design philosophy of elegant minimalism over a large standard library.

## Minimal core syntax

```scheme
(define (square x) (* x x))
(square 5)                    ; => 25

(let ((x 5) (y 10))
  (+ x y))                    ; => 15

(if (> 5 3) "yes" "no")       ; => "yes"
```

Like all Lisps, Scheme code is s-expressions, but Scheme's standard
(R7RS) defines a much smaller core than Common Lisp — a deliberate
minimalism that makes Scheme popular for teaching programming-language
concepts (it's the basis of the classic textbook *Structure and
Interpretation of Computer Programs*) and for building small, embeddable
interpreters.

## Tail-call optimization

```scheme
(define (sum-to n acc)
  (if (= n 0)
      acc
      (sum-to (- n 1) (+ acc n))))   ; tail call: guaranteed constant stack space

(sum-to 1000000 0)   ; runs in constant stack space, no overflow
```

The Scheme standard *guarantees* proper tail-call optimization — a
function call in tail position (the last thing a function does) reuses
the current stack frame rather than growing the stack. This is a
language guarantee, not just an implementation-quality-of-service
optimization, which is why Scheme code idiomatically expresses loops as
tail-recursive functions rather than needing separate loop constructs.

## First-class continuations

```scheme
(define saved-k #f)

(+ 1 (call/cc
       (lambda (k)
         (set! saved-k k)
         1)))
; => 2

(saved-k 10)
; => 11 — resumes the earlier computation with a new value
```

`call/cc` (call-with-current-continuation) captures "the rest of the
computation" as a first-class value that can be invoked later — a
uniquely powerful (and famously mind-bending) control-flow primitive that
can implement generators, backtracking, coroutines, and exception
handling all from one mechanism, though it's used sparingly in practice
given how hard it is to reason about.

## Common pitfalls

- **Assuming Common Lisp libraries/idioms transfer directly** — Scheme
  and Common Lisp diverge meaningfully (different standard function
  names, no `nil`/`t` convention the same way, different macro systems);
  code and habits don't port automatically between the two.
- **Not leveraging tail-call optimization for loops** — writing a
  non-tail-recursive function to express what should be a loop misses
  Scheme's constant-stack-space guarantee and can overflow the stack.
- **Overusing `call/cc`** for control flow better expressed with simpler
  constructs — powerful but hard to reason about; reach for it only when
  simpler control flow genuinely can't express the need.
- **Implementation/standard fragmentation** — Scheme has multiple
  standards (R5RS, R6RS, R7RS) and many implementations (Racket, Guile,
  Chez, MIT Scheme) with varying feature sets beyond the core; check
  which a specific piece of code targets.

## Learn more

- Harold Abelson, Gerald Jay Sussman, *Structure and Interpretation of Computer Programs* (SICP, free online) — the classic Scheme-based text.
- [R7RS specification](https://small.r7rs.org/)
- [[lisp-programming]] for the larger, more feature-rich Lisp dialect (Common Lisp).
