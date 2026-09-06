---
name: command-line-interface-testing
description: Use when asked to test a CLI tool — command syntax, exit codes, stdout/stderr validation, cross-platform behavior — as distinct from terminal UI testing (see terminal-user-interface-testing), which covers interactive, layout-based terminal applications rather than single-invocation commands.
---

# Command Line Interface (CLI) Testing

CLI testing validates the functionality, performance, and reliability of
command-line applications and tools — executing commands with varied
parameters, arguments, and input combinations to confirm the CLI behaves
correctly across scenarios. See [[terminal-user-interface-testing]]
for the related but distinct case of an interactive, screen-drawing
terminal application rather than a single command invocation.

## What to validate

- **Exit codes** — the correct code for success and for each distinct
  failure mode, not just zero-vs-nonzero.
- **stdout and stderr separately** — a well-behaved CLI keeps normal
  output and error/diagnostic output on the correct stream; a test that
  only checks combined output can miss a message on the wrong stream.
- **File system changes** — a command that creates, modifies, or deletes
  files should be checked against actual resulting file state, not just
  its printed output.
- **Help documentation accuracy** — the `--help` text should match actual
  behavior; a common, easy-to-miss drift.
- **Invalid input / error handling** — malformed arguments, missing
  required flags, and other misuse should fail predictably with a useful
  message, not crash or hang.

## Automation approach

Shell scripting (Bash, Zsh, PowerShell) or a general-purpose language
(Python, JavaScript, Rust) drives test suites that invoke the CLI
programmatically and assert on exit code, stdout/stderr content, and
resulting file-system state. **Cross-platform testing** matters
specifically for CLIs meant to run on multiple operating systems — path
separators, environment variables, and shell behavior can differ in ways
that only surface when actually tested on each target platform.

## Common pitfalls

- **Only checking exit code, not output content** — a command can exit 0
  while printing an incorrect or malformed result; check both.
- **Brittle output-parsing assertions** — matching exact output strings
  too rigidly breaks on cosmetic formatting changes; assert on the
  semantically meaningful parts of output where possible.
- **Not testing interactive prompts** — a CLI that sometimes waits for
  user input needs tests that supply that input programmatically (piped
  stdin, expect-style tooling), or those code paths go untested entirely.
- **Skipping cross-platform runs** for a CLI distributed across multiple
  OSes — a test suite that only runs on the developer's own platform
  misses real platform-specific bugs.

## Learn more

- [[terminal-user-interface-testing]] for interactive, screen-based terminal applications specifically.
- [[functional-testing]] for the broader behavior-verification discipline CLI testing is an instance of.
