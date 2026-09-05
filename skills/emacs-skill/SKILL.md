---
name: emacs-skill
description: Use when asked to write or debug Emacs Lisp, configure Emacs (init.el/early-init.el, use-package, package.el/straight.el), explain Emacs keybinding notation, or work with buffers, windows, frames, and major/minor modes.
---

# Emacs Skill

Emacs is an extensible, self-documenting text editor whose entire UI and
behavior is programmed in **Emacs Lisp (elisp)**, a Lisp-1 dialect. "Configuring
Emacs" and "writing an Emacs Lisp program" are the same activity.

## Keybinding notation

- `C-x` — hold Control, press `x`. `M-x` — Meta (usually Alt, or `Esc` then the
  key) plus `x`. `C-x C-f` — two chords in sequence (find-file).
- Every binding names an interactive command: `C-x C-f` is bound to
  `find-file`. `M-x <command> RET` runs any command by name regardless of its
  binding — this is the universal escape hatch when you don't know or don't
  have a keybinding.
- `C-h k` (describe-key), `C-h f` (describe-function), `C-h v`
  (describe-variable), `C-h m` (describe-mode) are the built-in
  self-documentation commands — reach for these before guessing.

## Core concepts

- **Buffer** — an in-memory object holding text (a visited file, `*scratch*`,
  `*Messages*`, a shell, …). Not the same as a window or a file.
- **Window** — a viewport onto a buffer within a frame. `C-x 2` / `C-x 3` split;
  `C-x o` moves between them; `C-x 1` deletes all but the current one.
- **Frame** — what most people call a "window" at the OS level (`C-x 5 2`
  creates a new one).
- **Major mode** — exactly one per buffer, defines core behavior (`python-mode`,
  `org-mode`, `fundamental-mode`). **Minor modes** — any number, layer on
  optional behavior (`flyspell-mode`, `subword-mode`).

## Configuration

`~/.emacs.d/init.el` (or `~/.config/emacs/init.el`) is elisp, evaluated top to
bottom at startup. `early-init.el` runs before the package system and UI
initialize (frame parameters, `package-enable-at-startup`).

```elisp
;; Package management with built-in use-package (Emacs 29+) + package.el
(require 'package)
(add-to-list 'package-archives '("melpa" . "https://melpa.org/packages/"))
(package-initialize)

(use-package magit
  :ensure t
  :bind ("C-x g" . magit-status))

(use-package company
  :ensure t
  :hook (prog-mode . company-mode)
  :config
  (setq company-idle-delay 0.2))
```

`use-package` keywords worth knowing: `:ensure t` (install if missing),
`:bind`, `:hook`, `:custom` (set defcustom variables the "supported" way,
distinct from plain `setq`), `:config` (runs after load), `:init` (runs
before load).

## Writing elisp

```elisp
;; A minimal interactive command
(defun my/insert-todo ()
  "Insert a TODO comment at point."
  (interactive)
  (insert "TODO: "))

(global-set-key (kbd "C-c t") #'my/insert-todo)

;; Buffer-local state and hooks
(add-hook 'prog-mode-hook
          (lambda ()
            (setq-local show-trailing-whitespace t)))
```

- `(interactive)` is what makes a `defun` callable via `M-x` or a keybinding;
  without it, it's a plain Lisp function.
- `(kbd "C-c t")` parses human-readable keybinding notation into the internal
  key-sequence representation `global-set-key` expects.
- Prefer `setq-local` / buffer-local hooks over global `setq` for anything
  mode-specific, so you don't leak behavior into unrelated buffers.
- `let` and `let*` for lexical scoping; enable `lexical-binding: t` as a file
  header (`;;; -*- lexical-binding: t; -*-`) in any elisp file you write —
  Emacs still defaults new scratch buffers to it, but older code may not have
  it and behaves with dynamic scoping instead.

## Common pitfalls

- **Editing `custom-set-variables` by hand.** Emacs's Customize UI writes to a
  block in `init.el` (or a separate `custom-file`) — leave that block alone
  and prefer `use-package :custom` or explicit `setq` elsewhere, or the two
  systems fight each other.
- **Forgetting `(interactive)`.** A `defun` without it can still be called
  from other elisp, but `M-x` won't find it and it can't be bound to a key
  the normal way.
- **Global keybindings that shadow major-mode bindings.** `global-set-key`
  always loses to a major or minor mode's own keymap. Bind into the specific
  mode's map (`(define-key python-mode-map (kbd "...") #'...)`) when you want
  a mode-specific override.
- **Blocking the UI with synchronous work.** Emacs is single-threaded for elisp
  execution; a long-running loop freezes the whole editor. Use
  `run-with-idle-timer`, `make-thread` (native threads on modern builds), or
  an async subprocess instead of a busy loop.

## Learn more

- `C-h i` (info) → Emacs manual and Emacs Lisp Reference Manual, bundled with
  every install and the actual source of truth for any given Emacs version.
- [GNU Emacs manual](https://www.gnu.org/software/emacs/manual/html_node/emacs/) (online mirror)
- [GNU Emacs Lisp Reference Manual](https://www.gnu.org/software/emacs/manual/html_node/elisp/)
- [MELPA](https://melpa.org/) — the primary community package archive.
- [use-package README](https://github.com/jwiegley/use-package)
