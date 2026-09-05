---
name: python-programming-skill
description: Use when asked to write, explain, or debug general-purpose Python code — language idioms (comprehensions, generators, context managers), typing, virtual environments/packaging, or common runtime pitfalls (mutable default arguments, the GIL) — independent of any testing framework or web framework.
---

# Python Programming Skill

Covers the Python language itself. A testing-framework skill (pytest) or a
web-framework skill builds on top of this, not instead of it.

## Idiomatic constructs

```python
# Comprehensions over manual loops for building a collection
squares = [n * n for n in range(10) if n % 2 == 0]
lookup = {k: v for k, v in pairs}

# Generators for lazy, memory-bounded iteration
def read_lines(path):
    with open(path) as f:
        for line in f:
            yield line.rstrip("\n")

# Context managers for guaranteed cleanup (files, locks, connections)
with open("data.csv") as f, open("out.csv", "w") as out:
    ...

# Unpacking and f-strings
first, *rest = [1, 2, 3, 4]
name, count = "widget", 3
print(f"{count}x {name}")
```

- A comprehension is preferred over `map`/`filter` + `lambda` when it reads
  more directly as "the collection of X such that Y."
- `with` guarantees `__exit__` runs (closing a file, releasing a lock) even
  if the block raises — prefer it over manual `try/finally` for anything with
  a defined context-manager protocol.

## Typing

```python
from typing import Optional

def greet(name: str, times: int = 1) -> str:
    return ("Hi, " + name + "! ") * times

def find(items: list[int], target: int) -> Optional[int]:
    return items.index(target) if target in items else None
```

Type hints are not enforced at runtime by the interpreter — they're checked
by a separate tool (`mypy`, `pyright`) and read by editors/IDEs. Modern
Python (3.9+) supports built-in generics directly (`list[int]`, `dict[str,
int]`) without importing from `typing`.

## Environments and packaging

```sh
python -m venv .venv         # create an isolated environment
source .venv/bin/activate    # activate it (Windows: .venv\Scripts\activate)
pip install -r requirements.txt

# Or with a modern, faster tool:
uv venv && uv pip install -r requirements.txt
```

A virtual environment isolates a project's dependencies from the system
Python and from other projects — installing packages globally
(`pip install` outside a venv) is a common source of version conflicts
between unrelated projects. `pyproject.toml` (PEP 621) is the modern,
tool-agnostic place to declare project metadata and dependencies, superseding
`setup.py`/`setup.cfg` for most new projects.

## Common pitfalls

- **Mutable default arguments.** `def f(items=[]):` — the default list is
  created **once**, at function definition time, and shared across every
  call that doesn't pass its own. Use `def f(items=None): items = items or
  []` instead.
  ```python
  def add_item(item, items=[]):   # BUG: same list every call
      items.append(item)
      return items
  ```
- **The GIL (Global Interpreter Lock)** — in CPython, only one thread
  executes Python bytecode at a time. `threading` still helps for I/O-bound
  work (a thread releases the GIL during I/O waits), but CPU-bound
  parallelism needs `multiprocessing` or a C-extension that releases the GIL,
  not more threads.
- **Late binding in closures/loops** — `[lambda: i for i in range(3)]`
  produces three closures that all see the *final* value of `i` (2, 2, 2),
  not the value at creation time. Fix with a default argument:
  `lambda i=i: i`.
- **Bare `except:`** catches everything including `KeyboardInterrupt` and
  `SystemExit`; catch the specific exception type, or at minimum
  `except Exception:`.
- **Circular imports** from importing a package's own submodules at module
  load time — restructure so shared code lives somewhere neither module
  depends on the other for, or move the import inside the function that
  needs it.

## Learn more

- [Python docs: The Python Tutorial](https://docs.python.org/3/tutorial/)
- [Python docs: Language Reference](https://docs.python.org/3/reference/)
- [PEP 8](https://peps.python.org/pep-0008/) — the style guide.
- [PEP 621](https://peps.python.org/pep-0621/) — `pyproject.toml` project metadata.
- [Real Python: Mutable Default Arguments](https://docs.python-guide.org/writing/gotchas/#mutable-default-arguments)
