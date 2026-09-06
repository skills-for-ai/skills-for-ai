---
name: keyboard-shortcut
description: Use when asked to design or document keyboard shortcuts (hotkeys) — accelerating workflow, accessibility for mobility-impaired users, consistency/standardization, customization — for a software application or operating system.
---

# Keyboard Shortcut (Hotkey)

A keyboard shortcut, also known as a hotkey or key combination, is a
combination of one or more keys that triggers a specific action or
command in a software application or operating system — designed to let
users perform common tasks quickly and efficiently. Examples include
Ctrl+C (copy), Ctrl+V (paste), and Alt+Tab (switch between open
applications).

## Key aspects

- **Accelerate workflow** — shortcuts significantly speed up work by
  eliminating the need to navigate menus or use the mouse for every
  action.
- **Increased productivity** — reducing reliance on mouse movements and
  clicks lets users perform tasks more efficiently overall.
- **Accessibility** — keyboard shortcuts offer an alternative interaction
  method for individuals with mobility impairments, or anyone who
  prefers keyboard-based navigation — see [[screen-reader]] for the
  related, often-overlapping need for full keyboard operability.
- **Consistency and standardization** — many applications and operating
  systems share a common set of shortcuts (Ctrl+Z for undo, for
  instance), which builds user familiarity and eases the learning curve
  for new software.
- **Customization** — some systems let users customize or create their
  own shortcuts, aligning with personal preference or covering actions
  with no default binding.
- **Learning curve** — shortcuts take time to learn, especially in
  unfamiliar software, but that upfront investment tends to pay off in
  long-term efficiency.

## Designing shortcuts well

Favor established, cross-application conventions (Ctrl+Z/Cmd+Z for undo,
Ctrl+F/Cmd+F for find) over inventing new bindings for common actions —
consistency with what users already know reduces the learning curve far
more than a "better" but unfamiliar binding would. Reserve custom
shortcuts for actions genuinely specific to the application.

## Common pitfalls

- **Conflicting with OS-level or browser-level shortcuts** — a web app
  or application binding a key combination the operating system or
  browser already uses for something else creates confusing, inconsistent
  behavior users can't reliably predict.
- **No visible discoverability** — shortcuts that exist only in
  documentation, with no way to discover them from within the interface
  itself (a shortcuts menu, tooltips showing the binding), go
  unused by most users.
- **Breaking platform conventions** — using Ctrl+W for something other
  than "close" on a platform where that's the universal convention
  surprises and frustrates users relying on muscle memory.
- **No keyboard-only path at all** — treating shortcuts as purely a
  power-user convenience rather than also a genuine accessibility need
  means some users can't use the application's full functionality at
  all without a mouse.

## Learn more

- [[screen-reader]] for the broader keyboard-operability need that shortcuts partly serve.
- [[web-content-accessibility-guidelines]] for the accessibility standard requiring full keyboard operability.
