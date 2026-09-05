---
name: vim-skill
description: Use when asked to write Vim/Neovim keybindings or config (.vimrc, init.vim, init.lua), explain Vim's modal editing model or motion/operator grammar, write Vimscript or Neovim Lua config, or debug plugin setups (vim-plug, packer.nvim, lazy.nvim).
---

# Vim Skill

Vim (and Neovim, its actively-developed fork) is a **modal** text editor: the
same keys mean different things depending on the current mode. This is the
one idea everything else builds on.

## Modes

- **Normal** (the default, `Esc` always returns here) — keys are commands,
  not text.
- **Insert** (`i`, `a`, `o`, …) — keys are literal text.
- **Visual** (`v`, `V`, `Ctrl-v`) — select a region (character/line/block),
  then apply an operator to it.
- **Command-line** (`:`) — ex commands (`:w`, `:%s/.../.../g`, `:q`).

## The grammar: operator + motion (+ count)

Normal-mode commands compose as `[count] operator {motion|text-object}`. This
is the core productivity idea — learn the pieces, not a list of memorized
whole commands.

- Operators: `d` (delete), `c` (change: delete + enter Insert), `y` (yank/copy),
  `>`/`<` (indent), `=` (reindent).
- Motions: `w`/`b`/`e` (word forward/back/end), `0`/`^`/`$` (line start/first
  non-blank/end), `f{char}`/`t{char}` (find/till a character on the line),
  `gg`/`G` (buffer start/end), `{`/`}` (paragraph).
- Text objects (pair with an operator, not standalone motions): `iw`/`aw`
  (inner/a word), `i"`/`a"`, `i(`/`a(`, `ip`/`ap` (paragraph), `it`/`at`
  (tag).

Examples: `dw` deletes to the next word start. `ci"` deletes inside the
quotes under the cursor and enters Insert. `3dd` deletes 3 lines. `d}` deletes
to the next paragraph break. `.` repeats the last change verbatim — the
highest-leverage single key in Vim once you're composing edits this way.

## Registers, marks, macros

- Registers hold yanked/deleted text: `"ayy` yanks a line into register `a`;
  `"ap` pastes it. The unnamed register (`""`, default for `y`/`d`/`p`) is
  separate from the system clipboard (`"+y` / `"+p` on most builds).
- Marks bookmark a position: `ma` sets mark `a`; `` `a `` jumps to it exactly,
  `'a` jumps to its line.
- Macros record a command sequence: `qa` starts recording into register `a`,
  `q` stops, `@a` replays it, `10@a` replays it 10 times, `@@` repeats the
  last-played macro.

## Configuration

Vim: `~/.vimrc`, Vimscript. Neovim: `~/.config/nvim/init.vim` (Vimscript) or
`init.lua` (Lua — the modern default for Neovim config and plugins).

```vim
" ~/.vimrc / init.vim (Vimscript)
set number relativenumber
set expandtab shiftwidth=2 tabstop=2
set ignorecase smartcase
nnoremap <leader>f :find<space>
```

```lua
-- init.lua (Neovim)
vim.opt.number = true
vim.opt.relativenumber = true
vim.opt.expandtab = true
vim.opt.shiftwidth = 2
vim.keymap.set('n', '<leader>f', ':find ', { desc = 'Find file' })
```

Plugin managers: Vim commonly uses [vim-plug](https://github.com/junegunn/vim-plug);
Neovim commonly uses [lazy.nvim](https://github.com/folke/lazy.nvim) (lazy-loaded,
Lua-native) or the older [packer.nvim](https://github.com/wbthomason/packer.nvim).

```lua
-- lazy.nvim plugin spec
require('lazy').setup({
  { 'nvim-treesitter/nvim-treesitter', build = ':TSUpdate' },
  { 'neovim/nvim-lspconfig' },
})
```

## Common pitfalls

- **`map` vs `noremap`.** Plain `map`/`nmap`/`imap` are *recursive* — if your
  new mapping's right-hand side matches another mapping, it triggers that one
  too, which surprises people. Default to `noremap`/`nnoremap`/`inoremap`
  unless you specifically want recursive expansion.
- **Fighting Insert mode instead of leaving it.** Reaching for arrow keys or
  long Backspace runs inside Insert mode is a sign the edit should have been
  a Normal-mode operator+motion instead — leave Insert (`Esc`), do the edit,
  and only re-enter Insert if more typing is actually needed.
- **`:%s/foo/bar/g` without `c`.** Add the `c` flag
  (`:%s/foo/bar/gc`) to confirm each substitution when you're not certain the
  pattern is scoped tightly enough.
- **Vimscript's line-continuation and `let` scoping quirks** when porting
  config from someone else's dotfiles — a bare variable in a `.vimrc` is
  global by default; use `s:` (script-local) or `l:` (function-local)
  prefixes deliberately.

## Learn more

- `:help` (or `:Tutor` for the interactive tutorial) — the built-in reference;
  authoritative for the exact Vim/Neovim version installed.
- [Neovim documentation](https://neovim.io/doc/)
- [vim-plug](https://github.com/junegunn/vim-plug), [lazy.nvim](https://github.com/folke/lazy.nvim), [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig)
- [Learn Vimscript the Hard Way](https://learnvimscriptthehardway.stevelosh.com/) — deep dive into Vimscript specifically.
