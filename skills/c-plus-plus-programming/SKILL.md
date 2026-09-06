---
name: c-plus-plus-programming
description: Use when asked to write, explain, or debug general-purpose C++ code — RAII and smart pointers, classes and templates, move semantics — as the object-oriented/generic-programming superset built on c-programming.
---

# C++ Programming

Covers C++ — a superset of much of [[c-programming]] adding classes,
templates, and (in modern C++, C++11 onward) RAII-based resource
management that greatly reduces the manual memory-management burden C
carries.

## RAII and smart pointers

```cpp
#include <memory>

class FileHandle {
public:
    FileHandle(const std::string& path) : file_(fopen(path.c_str(), "r")) {}
    ~FileHandle() { if (file_) fclose(file_); }   // resource freed automatically
private:
    FILE* file_;
};

void use_resource() {
    auto ptr = std::make_unique<FileHandle>("data.txt");
    // ptr's destructor runs automatically at end of scope, even on exception
}
```

RAII (Resource Acquisition Is Initialization) ties a resource's lifetime
to an object's scope — acquired in the constructor, released in the
destructor, running automatically and deterministically even when an
exception unwinds the stack. `std::unique_ptr` (exclusive ownership) and
`std::shared_ptr` (reference-counted shared ownership) apply this to heap
memory specifically, making raw `new`/`delete` largely unnecessary in
modern C++.

## Classes and templates

```cpp
template <typename T>
class Container {
public:
    void add(T item) { items_.push_back(item); }
    T& at(size_t i) { return items_.at(i); }
private:
    std::vector<T> items_;
};

Container<int> ints;
ints.add(42);
```

Templates give compile-time generic programming — `Container<int>` and
`Container<std::string>` are separate types generated at compile time
(monomorphization), with zero runtime overhead compared to a hand-written
type-specific container.

## Move semantics

```cpp
std::vector<int> make_large_vector() {
    std::vector<int> v(1'000'000, 0);
    return v;   // moved out, not copied, via return value optimization / move constructor
}

std::vector<int> a = make_large_vector();
std::vector<int> b = std::move(a);   // a's resources transferred to b; a is now empty
```

Move semantics (`&&` rvalue references, move constructors/assignment)
let a resource be transferred rather than deep-copied when the source is
about to be discarded anyway — critical for performance with large or
expensive-to-copy objects, and central to how containers and smart
pointers avoid unnecessary copies.

## Common pitfalls

- **Using raw `new`/`delete` instead of smart pointers** — reintroduces
  the manual memory-management bugs (leaks, double-frees, use-after-free)
  RAII exists to eliminate; reach for `std::unique_ptr`/`std::shared_ptr`
  by default.
- **Slicing** — assigning a derived-class object to a base-class value
  (not a reference or pointer) truncates it to just the base part,
  silently losing derived-class data and behavior.
- **Using `std::move` on an object still needed afterward** — after a
  move, the source object is left in a valid but unspecified state;
  using it again (other than reassigning or destroying it) is a bug.
- **Undefined behavior inherited from C** — out-of-bounds access,
  uninitialized reads, and similar C-level pitfalls (see
  [[c-programming]]) apply equally in C++.

## Learn more

- Bjarne Stroustrup, *The C++ Programming Language* — the language creator's own reference.
- [C++ reference (cppreference.com)](https://en.cppreference.com/w/cpp)
- [[c-programming]] for the lower-level language C++ builds on.
