---
name: vix-skill
description: Use when asked about Vix IDE — what it is, how to install/run/configure it, its keyboard-driven features (editor, file explorer, Git, DB workbench, LSP, Org mode, debugger), or how to work on its own codebase (Cargo workspace, `vix-*` member crates, spec-driven development, hard build rules).
---

# Vix Skill

Vix IDE (crate name `vix`) is a keyboard-friendly terminal text editor built on
`ratatui` — a "Simple Terminal Rust IDE." It ships a file explorer, keymaps,
tools, locales, and themes, and is developed with substantial AI assistance
under a documented governance model.

## Using Vix

Requires a Rust toolchain (current stable minus two).

```sh
cargo run                  # open the editor rooted at the current directory
cargo run -- src/main.rs   # open one or more files on launch
cargo run -- file.rs:42:7  # open and jump straight to line 42, column 7
cargo run -- --locale fr   # start in French (overrides the saved language)
cargo build --release      # optimized binary at target/release/vix
vix --help                 # full CLI usage
```

Syntax-highlighting grammars are feature-gated (each Tree-sitter grammar is a
sizeable compiled parser):

```sh
cargo build --release                                              # common grammars (default: Rust, Markdown, JSON, TOML)
cargo build --release --no-default-features                        # no highlighting (smallest binary)
cargo build --release --no-default-features --features syntax-all  # all grammars (largest binary)
```

Settings are stored with `confy` as TOML in the platform config directory
(e.g. `~/.config/vix/config.toml` on Linux); custom themes live alongside in
`~/.config/vix/themes/*.json`.

### Notable features

- **Editor** — tabs, undo/redo (persistent, branch-preserving, content-hash
  guarded), Tree-sitter syntax highlighting, soft wrap, bracket matching,
  minimap, indent guides, rainbow brackets, sticky scroll, structural
  selection (expand to enclosing syntax node via Tree-sitter or LSP).
- **Command palette** (`Ctrl+P`) — five modes via prefix: file finder, `>`
  commands, `#` buffers, `:` go-to-line, `@` go-to-symbol.
- **Multi-cursor & column editing**, **Find & Replace** (regex, capture
  groups, workspace-wide, interactive query-replace), **Go to definition**
  (`F12`, heuristic and language-agnostic).
- **Git** — status/diff/blame, stage/unstage/revert per hunk, branch
  switch & merge, stash, amend, merge-conflict resolver.
- **Database workbench** (DB menu) — SQLite/PostgreSQL/MySQL over embedded
  drivers, schema tree, autocomplete, read-only by default, natural-language
  → SQL assistant (schema-only, EXPLAIN-validated), Mermaid ER diagrams.
- **LSP** — diagnostics, hover, completion, go-to, references, call
  hierarchy, rename, code actions/lens, inlay hints.
- **Org mode** — headline promote/demote, TODO cycling, table editor with
  `TBLFM` formulas, Column View, Org-roam (nodes, `[[`-completion, dailies,
  live backlinks).
- **Debugger** (Run menu) — a DAP client: breakpoints, stepping, call stack,
  variables, watches, evaluate REPL.
- **Keymaps** — switchable among Apple, VSCode (macOS/Windows), Emacs, Vi,
  Spacemacs, IntelliJ (macOS/Windows), Eclipse, Sublime Text; `F1` shows every
  shortcut for the active one.

## Working on the Vix codebase

Vix is a **Cargo workspace** (edition 2024): a thin App shell (root package
`vix`, `src/`) — CLI, event loop, `App` state, rendering, explorer — over
**~105 focused `vix-*` member crates** under `crates/`, including the custom
editor widget `vix-editor-core`. `src/lib.rs` re-exports member crates under
short module names (`pub use vix_git as git;`), so `crate::git`, `crate::menu`,
`crate::db` still name them.

### Specs are the source of truth

Development is **specification-driven**. Each member crate owns its spec at
`crates/<crate>/spec/index.md` (multi-topic crates add
`crates/<crate>/spec/<topic>/index.md`); the repo-root `spec/` holds only
cross-cutting / app-level / build-meta specs. When behavior and spec disagree,
decide which is correct and make them match — update the spec when intent
changed, update the code when the code drifted.

Where both `index.md` and `README.md` exist in a doc directory, make
`README.md` a symlink to `index.md` (`ln -s index.md README.md`) so they can't
drift; `scripts/check-docs` enforces this (and fails on a broken link/path, a
crate with no spec, or a crate missing from the crate map).

### Build, test, lint

```sh
cargo build                                              # build the vix binary + library
cargo test                                                # integration + unit + doc tests (no terminal needed)
cargo clippy --workspace --all-targets -- -D warnings    # lints; kept clean
cargo bench                                               # Criterion benchmarks over hot paths
cargo +nightly fuzz run <target>                          # fuzz a pure core (see fuzz/README.md)
scripts/check-docs                                        # documentation integrity (links, twins, crate specs)
scripts/check                                             # the whole local CI-parity gate: fmt, build, clippy, tests, cargo doc, doc checks
```

CI enforces the same gate on all three forges Vix is pushed to (GitHub,
GitLab, Codeberg); when the gate changes, change every forge's config with it.

### Hard rules enforced by the build

Every crate sets `#![deny(missing_docs)]` and `#![forbid(unsafe_code)]`:

- Every public item needs a `///` doc comment, or the build fails.
- No `unsafe` code, anywhere.
- `#![warn(clippy::pedantic)]` at the crate root **and repeated in every
  module file** — no blanket `#[allow(...)]` for it or for missing docs; fix
  findings in code. Only a few targeted allows are sanctioned (e.g.
  `#[allow(clippy::struct_excessive_bools)]` on genuine state structs like
  `App`/`Settings`).

### Non-negotiable conventions

- **Internationalize all user-facing text** — never hard-code a display
  string; add a key to `locales/app.yml` and render it with `t!`.
- **One action, one implementation** — menu items, palette commands, and
  shortcuts all dispatch through `App::run_action` using string action ids
  (`file.save`, `view.theme`, …); add new behavior there once.
- **Built-in themes are monochrome** — one fg, one bg, emphasis via dim/full
  intensity only (no bold/italic), reversed video only for selection/cursor.
  Color belongs only to custom JSON themes.
- **Keep logic terminal-independent** — editing/state logic lives in the
  library and is tested without a TTY; rendering lives only in `src/ui.rs`.
- **Input dispatch is keymap-aware** — raw keys route through the active
  keymap in `App::on_key`, which translates them into the same `run_action`
  calls rather than duplicating behavior. On macOS, `Command` is folded into
  `Control` first.
- **One `ratatui` version** across the whole widget stack (0.30, with
  `crossterm` 0.29) — never add a widget crate pinned to a different one.

### Making a change (checklist)

1. Read the owning crate's `spec/index.md` (or the cross-cutting root
   `spec/`); update it if intent is changing.
2. Implement in the owning crate; keep editing logic out of `src/ui.rs`.
3. Internationalize any new text (YAML key + `t!`).
4. Document every new public item.
5. Add/extend tests (`tests/integration.rs` or a module's unit tests).
6. `scripts/check` clean (or `cargo test` + `cargo clippy --workspace
   --all-targets -- -D warnings`), and `scripts/check-docs` clean if
   documentation changed.
7. Note user-visible changes in `CHANGELOG.md`.
8. Spelling: CSpell checks prose/docs (`cspell.json`); add project terms to
   `project-words.txt`.

### Governance

Read `AI_STATEMENT.md` before doing anything outward-facing or hard to
reverse (a force-push, publishing a release, publishing a package). The
default is to confirm first; as of this writing the only standing exceptions
are `cargo publish` and judging that a specific release is ready — neither
extends to cutting a tagged release or a forge Release, which is still
confirmed first. Report a security vulnerability privately per `SECURITY.md`,
never as a public issue.

## Learn more

- [`README.md`](https://github.com/vixide/vix/blob/main/README.md) — features and install/config.
- [`AGENTS.md`](https://github.com/vixide/vix/blob/main/AGENTS.md) — the canonical agent/contributor entry point.
- `docs/architecture/index.md`, `docs/configuration/index.md`, `docs/themes/index.md`, `docs/internationalization/` — topic docs.
- `agents/conventions.md`, `agents/workflow.md`, `agents/share/crate-map.md`, `agents/share/glossary.md` — deeper topic guides.
- Repository: https://github.com/vixide/vix (mirrored to GitLab and Codeberg); package: https://crates.io/crates/vix.
