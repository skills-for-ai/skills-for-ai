---
name: fuzz-testing-skill
description: Use when asked to fuzz an application — feeding invalid, unexpected, or random inputs to discover crashes and security vulnerabilities — coverage-guided, grammar-based, and mutation-based fuzzing, as distinct from boundary testing's targeted edge-value approach (see boundary-testing-skill).
---

# Fuzz Testing Skill

Fuzz testing (fuzzing) automatically feeds invalid, unexpected, or random
data into a program to discover vulnerabilities, crashes, and security
flaws — systematically bombarding an application with malformed input to
find edge cases developers didn't anticipate during normal test design.

## How fuzzers find bugs

A fuzzer monitors the target for crashes, memory leaks, assertion
failures, or other abnormal behavior signaling a potential vulnerability
or defect. **Coverage-guided fuzzing** — the dominant modern approach —
uses feedback from actual program execution (which code paths a given
input reached) to evolve more effective inputs that explore previously
untested paths, rather than generating purely random data blindly.

## Fuzzing approaches

- **Black-box fuzzing** — no knowledge of internal structure, matching
  [[black-box-testing-skill]]'s general approach applied to input
  generation.
- **White-box fuzzing** — uses source-code analysis to guide input
  generation toward specific paths, matching [[white-box-testing-skill]]'s
  internal-knowledge approach.
- **Grammar-based fuzzing** — generates inputs conforming to a structured
  format's grammar (e.g. valid-looking JSON, a specific file format),
  useful when purely random bytes would be rejected before reaching
  interesting code.
- **Mutation-based fuzzing** — starts from existing valid inputs and
  mutates them incrementally, often finding bugs faster than pure
  generation-from-scratch for formats with complex valid structure.

## Where it's most valuable

Fuzzing has proven especially valuable for security: finding buffer
overflows, injection vulnerabilities, and other critical flaws before
they reach production — testing scenarios a human tester would rarely
think to try manually, which is exactly its complementary value alongside
[[boundary-testing-skill]]'s more targeted, deliberately-chosen edge
values.

## Common pitfalls

- **Treating any crash as automatically a security bug** — fuzzing
  produces false positives that need manual triage; a crash needs
  investigation to determine actual severity and exploitability.
- **Under-resourcing fuzzing's compute needs** — effective fuzzing,
  especially coverage-guided, benefits from sustained, often long-running
  compute; a brief, one-off fuzzing run explores far less of the input
  space than a continuously-running one.
- **Fuzzing only at the top-level API** — fuzzing an internal function or
  parser directly (rather than only through a full application entry
  point) often reaches interesting code paths much faster.
- **Assuming fuzzing replaces boundary/black-box testing** — fuzzing
  explores broadly and randomly; targeted techniques like
  [[boundary-testing-skill]] still catch specific, predictable edge cases
  more efficiently and with less setup.

## Learn more

- [[boundary-testing-skill]] for a complementary, deliberately-targeted approach to edge-case inputs.
- [[security-testing-skill]] for the broader security-verification discipline fuzzing contributes to.
