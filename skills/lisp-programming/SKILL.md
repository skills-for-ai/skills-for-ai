---
name: lisp-programming
description: Use when asked to write, explain, or debug general-purpose Lisp code (Common Lisp) — s-expressions, macros/code-as-data, recursion — as the historical family scheme-programming is a smaller, more minimalist dialect within.
---

# Lisp Programming

Covers Lisp — specifically Common Lisp, one of the two major living
dialects (see [[scheme-programming]] for the other, more minimalist one)
of the second-oldest high-level programming language family still in
active use, distinguished by its uniform, parenthesized syntax and
uniquely powerful macro system.

## S-expressions

```lisp
(+ 1 2 3)               ; => 6
(defun square (x) (* x x))
(square 5)               ; => 25

(if (> 5 3) "yes" "no")  ; => "yes"
```

Every Lisp expression is a parenthesized list (an "s-expression"), with
the first element as the operator/function and the rest as arguments —
this uniform syntax means there's essentially no separate grammar to
learn beyond "everything is a list," and it's what makes Lisp's macro
system possible (below).

## Code as data (macros)

```lisp
(defmacro my-unless (condition &body body)
  `(if (not ,condition)
       (progn ,@body)))

(my-unless nil
  (print "this prints, since the condition is false"))
```

Because Lisp code is itself written as s-expressions — the same data
structure (nested lists) the language manipulates at runtime — a macro
can generate and transform code at compile time using ordinary list
operations. This "code as data" property (homoiconicity) is Lisp's
single most distinctive feature, letting programmers extend the language
itself (adding new control-flow constructs like `my-unless` above) rather
than being limited to what the language ships with.

## Recursion

```lisp
(defun factorial (n)
  (if (<= n 1)
      1
      (* n (factorial (- n 1)))))

(factorial 5)   ; => 120
```

Lisp has traditionally favored recursion over iteration for traversing
lists and trees, reflecting its functional-programming roots — though
Common Lisp also has iteration constructs (`loop`, `dotimes`) and doesn't
mandate a purely recursive style the way some newer functional languages
do.

## Common pitfalls

- **Unbalanced parentheses** — a missing or extra `)` is the most common
  Lisp syntax error for newcomers; an editor with paren-matching/
  structural editing support (rather than plain text editing) makes this
  far more manageable.
- **Confusing `'` (quote) with unquoted evaluation** — `'(+ 1 2)` is the
  literal list `(+ 1 2)`, not `3`; forgetting the quote when a literal
  list is intended (or adding one when evaluation is intended) is a
  common mistake.
- **Writing a macro where a function would do** — macros operate on
  unevaluated code at compile time and are harder to reason about and
  debug than functions; use a macro only when a function genuinely can't
  achieve the same effect (e.g., controlling whether/when an argument is
  evaluated).
- **Deep non-tail recursion without checking stack depth** — Common Lisp
  implementations vary in tail-call optimization guarantees; very deep
  non-tail recursion can overflow the stack in some implementations.

## Learn more

- Peter Seibel, *Practical Common Lisp* (free online) — a widely recommended modern introduction.
- [Common Lisp HyperSpec](http://www.lispworks.com/documentation/HyperSpec/Front/) — the language standard reference.
- [[scheme-programming]] for the smaller, more minimalist Lisp dialect.
