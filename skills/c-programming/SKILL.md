---
name: c-programming
description: Use when asked to write, explain, or debug general-purpose C code — pointers and manual memory management, structs, the preprocessor, undefined behavior — as the low-level foundation c-plus-plus-programming builds on.
---

# C Programming

Covers the C language — close to the hardware, with manual memory
management and minimal runtime — the foundation [[c-plus-plus-programming]]
extends with object-oriented and generic-programming features.

## Pointers and manual memory management

```c
#include <stdlib.h>

int *make_array(size_t n) {
    int *arr = malloc(n * sizeof(int));   // caller now owns this memory
    if (arr == NULL) return NULL;         // always check malloc's return
    for (size_t i = 0; i < n; i++) arr[i] = 0;
    return arr;
}

void use_array(void) {
    int *a = make_array(10);
    if (a) {
        a[0] = 42;
        free(a);      // caller's responsibility — no garbage collector
        a = NULL;      // avoid a dangling pointer after free
    }
}
```

C has no garbage collector — every `malloc` needs exactly one matching
`free`, and using memory after it's freed ("use-after-free") or freeing
it twice ("double-free") is undefined behavior, not a caught error.
Setting a pointer to `NULL` after freeing it is a cheap habit that turns
some use-after-free bugs into an immediate, debuggable null-dereference
instead of silent corruption.

## Structs

```c
typedef struct {
    double x;
    double y;
} Point;

Point translate(Point p, double dx, double dy) {
    Point result = { p.x + dx, p.y + dy };
    return result;
}
```

A `struct` groups related fields into one type, passed by value by
default (a full copy) unless passed via a pointer — worth being deliberate
about for large structs, where passing a `Point *` avoids the copy.

## The preprocessor

```c
#define MAX(a, b) ((a) > (b) ? (a) : (b))
#define DEBUG 1

#if DEBUG
    #define LOG(msg) printf("DEBUG: %s\n", msg)
#else
    #define LOG(msg)
#endif
```

The preprocessor runs a purely textual substitution pass before
compilation — macros like `MAX` aren't type-checked functions, they're
text substitution, which is why they need defensive parenthesization
(`((a) > (b) ? (a) : (b))`, not `(a > b ? a : b)`) to avoid operator-
precedence surprises when arguments are expressions.

## Undefined behavior

```c
int arr[5];
arr[10] = 1;          // out-of-bounds write: undefined behavior, not a caught error

int x;
printf("%d\n", x);    // reading an uninitialized variable: undefined behavior
```

C trusts the programmer heavily: out-of-bounds access, signed integer
overflow, and reading uninitialized memory are all undefined behavior —
the compiler is allowed to assume they never happen and can optimize
accordingly, sometimes producing surprising results rather than a clean
crash. Tools like AddressSanitizer, Valgrind, and `-Wall -Wextra`
compiler warnings catch many of these before they ship.

## Common pitfalls

- **Buffer overflows** — writing past the end of an array or buffer is
  undefined behavior and a classic security vulnerability (stack/heap
  corruption); always track and check bounds explicitly.
- **Memory leaks and double-frees** — every `malloc` needs exactly one
  `free`; mismatched allocation/deallocation is one of C's most common
  bug classes.
- **Missing `NULL` checks on allocation** — `malloc` can return `NULL` on
  allocation failure; dereferencing an unchecked return value crashes.
- **Comparing signed and unsigned integers** — implicit conversion rules
  can silently turn a negative signed value into a huge unsigned one in a
  comparison, producing unexpected results.

## Learn more

- Brian Kernighan, Dennis Ritchie, *The C Programming Language* ("K&R") — the classic reference.
- [C reference (cppreference.com)](https://en.cppreference.com/w/c)
- [[c-plus-plus-programming]] for the object-oriented/generic-programming superset built on C.
