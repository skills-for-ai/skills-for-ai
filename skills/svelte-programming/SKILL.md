---
name: svelte-programming
description: Use when asked to write, explain, or debug general-purpose Svelte code — compile-time reactivity, runes ($state/$derived/$effect), single-file components, SvelteKit basics — as a JavaScript/TypeScript UI framework, distinct from lily-design-system-svelte's specific component package built on it.
---

# Svelte Programming

Covers Svelte itself — a JavaScript/TypeScript UI framework distinguished
by compiling reactivity away at build time rather than doing it at
runtime via a virtual DOM, built on top of [[javascript-programming]] or
[[typescript-programming]]. See [[lily-design-system-svelte]] for a
specific design-system component package built using Svelte, distinct
from Svelte the framework covered here.

## Compile-time reactivity

Unlike React's virtual-DOM diffing or Vue's runtime reactivity proxies,
Svelte's compiler analyzes a component at build time and generates
direct, surgical DOM-update code — there's no framework runtime doing
reactivity bookkeeping in the browser, which is why Svelte apps tend to
ship less JavaScript and update the DOM faster for a given change.

## Runes: `$state`, `$derived`, `$effect`

```svelte
<script>
  let count = $state(0);
  let doubled = $derived(count * 2);

  $effect(() => {
    document.title = `Count: ${count}`;
  });
</script>

<button onclick={() => count++}>{count} (doubled: {doubled})</button>
```

Modern Svelte (5+) uses runes — `$state` declares reactive state,
`$derived` computes a value that updates automatically when its
dependencies change, `$effect` runs side effects in response to reactive
changes. Runes work the same way inside or outside a component (in a
plain `.svelte.js`/`.svelte.ts` file), unlike the older Svelte 4 reactive
statement (`$:`) syntax, which was compiler magic specific to `.svelte`
files.

## Single-file components

A `.svelte` file bundles a component's markup, script, and scoped styles
in one file, similar in spirit to Vue's single-file components — compiled
ahead of time into an efficient JavaScript module rather than interpreted
or diffed at runtime.

## SvelteKit basics

SvelteKit is Svelte's application framework — file-based routing
(`src/routes/`), `+page.svelte`/`+page.ts` (or `+page.server.ts`) pairs
for a route's UI and data loading, and adapters (`adapter-static`,
`adapter-node`, `adapter-vercel`, and others) targeting different
deployment environments from one codebase, including fully static output
for hosts like GitHub Pages.

## Common pitfalls

- **Mixing Svelte 4's `$:` reactive statements with Svelte 5 runes**
  inconsistently within a migrating codebase — the two reactivity models
  coexist during migration but work differently underneath.
- **Mutating a plain (non-`$state`) variable and expecting reactivity** —
  only variables actually declared with `$state` (or props flowing from
  one) trigger re-renders; a plain `let` variable mutated later won't.
- **Forgetting a route needs `export const prerender = true`** for a
  fully static (`adapter-static`) build, when a route's data doesn't
  depend on request-time information.
- **Overusing `$effect` for derived state** — a value that's purely
  computed from other reactive state should usually be `$derived`, not
  imperatively set inside an `$effect`, which is intended for side
  effects (not for updating state that's really just a computation).

## Learn more

- [Svelte documentation](https://svelte.dev/docs)
- [SvelteKit documentation](https://svelte.dev/docs/kit)
- [[javascript-programming]], [[typescript-programming]] for the underlying language.
- [[lily-design-system-svelte]] for a specific component package built on Svelte.
