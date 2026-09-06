---
name: vue-programming
description: Use when asked to write, explain, or debug general-purpose Vue code — the Composition API, reactivity (ref/reactive), single-file components, directives — as a JavaScript/TypeScript UI framework, distinct from lily-design-system-vue's specific component package built on it.
---

# Vue Programming

Covers Vue itself — a JavaScript/TypeScript framework for building UIs,
built on top of [[javascript-programming]] or [[typescript-programming]].
See [[lily-design-system-vue]] for a specific design-system component
package built using Vue, distinct from Vue the framework covered here.

## Reactivity: `ref` and `reactive`

```vue
<script setup>
import { ref, reactive } from 'vue';

const count = ref(0);                     // reactive primitive, access via count.value
const user = reactive({ name: 'Ada' });   // reactive object, access properties directly

function increment() {
  count.value++;
}
</script>

<template>
  <button @click="increment">{{ count }}</button>
  <p>{{ user.name }}</p>
</template>
```

`ref` wraps a value (primitive or object) in a reactive container,
unwrapped automatically in templates but accessed via `.value` in script
code; `reactive` makes an object's properties reactive directly, without
`.value`. Vue's reactivity system tracks which parts of the template
depend on which reactive values and updates only what actually changed.

## The Composition API

```vue
<script setup>
import { ref, computed, onMounted } from 'vue';

const items = ref([]);
const itemCount = computed(() => items.value.length);

onMounted(async () => {
  items.value = await fetchItems();
});
</script>
```

The Composition API (`<script setup>`, composable functions built from
`ref`/`reactive`/`computed`/lifecycle hooks) organizes a component's
logic by *feature* rather than by *option type* — a departure from Vue
2's Options API (`data`, `methods`, `computed` as separate object blocks),
and better suited to extracting and reusing stateful logic across
components via composable functions.

## Single-file components

A `.vue` file bundles a component's template, script, and scoped styles
in one file (`<template>`, `<script>`, `<style scoped>`) — compiled by
Vue's tooling into a JavaScript module, keeping a component's markup,
logic, and styling co-located rather than split across separate files by
convention.

## Directives

```vue
<template>
  <p v-if="isVisible">Shown conditionally</p>
  <li v-for="item in items" :key="item.id">{{ item.name }}</li>
  <input v-model="searchQuery" />
</template>
```

Directives (`v-if`, `v-for`, `v-model`, and others, prefixed `v-`) are
Vue's template-level control-flow and binding primitives — `v-model`
specifically sets up two-way binding between an input and reactive state,
a level of built-in convenience React deliberately doesn't provide out
of the box.

## Common pitfalls

- **Destructuring a `reactive` object**, which loses reactivity on the
  destructured values (they become plain, non-reactive copies) — use
  `toRefs()` when destructuring is needed, or keep property access
  through the reactive object.
- **Missing `:key` on `v-for` lists**, the same reconciliation problem as
  React's list-key requirement — without a stable key, Vue can misapply
  updates across reordered items.
- **Mixing Options API and Composition API inconsistently** within one
  codebase without a clear convention, making it harder to predict where
  a given piece of component logic lives.
- **Forgetting `.value` on a `ref` in script code** (outside the
  template, where unwrapping is automatic) — a common source of "why
  isn't this updating" confusion for newcomers.

## Learn more

- [Vue.js documentation](https://vuejs.org/guide/introduction.html)
- [[javascript-programming]], [[typescript-programming]] for the underlying language.
- [[lily-design-system-vue]] for a specific component package built on Vue.
