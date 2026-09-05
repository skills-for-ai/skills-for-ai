---
name: javascript-programming-skill
description: Use when asked to write, explain, or debug general-purpose JavaScript code — language fundamentals (scoping, closures, `this`, prototypes/classes), async code with Promises/async-await, modules (ESM vs CommonJS), or common runtime pitfalls — independent of any testing framework or UI library.
---

# JavaScript Programming Skill

Covers the JavaScript language itself (ECMAScript), for Node.js or the
browser. A browser-automation skill (Playwright/Selenium) or a UI-framework
skill (React, Vue, …) builds on top of this, not instead of it.

## Scoping and closures

```javascript
let count = 0;
function makeCounter() {
  let n = 0;               // captured by the closure below
  return () => ++n;
}
const counter = makeCounter();
counter(); // 1
counter(); // 2 — n persists between calls, private to this counter
```

- `let`/`const` are block-scoped; `var` is function-scoped and hoists with an
  `undefined` initial value — prefer `let`/`const` always, `var` essentially
  never in new code.
- A closure is a function bundled with the lexical scope it was created in —
  it keeps that scope's variables alive even after the outer function
  returns. This is the mechanism behind private state, memoization, and event
  handler factories.

## `this` and function types

```javascript
const obj = {
  name: 'a',
  regular() { return this.name; },      // `this` = obj, if called as obj.regular()
  arrow: () => this?.name,              // `this` = lexical (outer) scope, NOT obj
};

button.addEventListener('click', function () { console.log(this); }); // `this` = button
button.addEventListener('click', () => console.log(this));            // `this` = enclosing scope
```

Arrow functions do not have their own `this` — they inherit it from where
they're *defined*, not how they're *called*. Regular functions get `this`
from the call site (`obj.method()`, `.call`/`.apply`/`.bind`, or `undefined`/
global in strict/non-strict mode when called bare). Picking the wrong one is
the single most common source of "why is `this` undefined" bugs.

## Async: Promises and async/await

```javascript
async function loadUser(id) {
  try {
    const res = await fetch(`/api/users/${id}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error('load failed', err);
    throw err;
  }
}

// Run independent async work concurrently, not sequentially:
const [a, b] = await Promise.all([loadUser(1), loadUser(2)]);
```

- `async function` always returns a Promise; `await` only pauses within that
  function, it does not block the runtime.
- `await`ing calls one after another when they don't depend on each other
  serializes work that could run concurrently — use `Promise.all` (fail-fast)
  or `Promise.allSettled` (collect all outcomes) instead.
- An unhandled rejection (a `.catch`-less Promise, or a `throw` inside an
  `async` function nobody `await`s/catches) crashes a Node process by default
  in modern versions — always terminate a promise chain with `.catch` or wrap
  the `await` in `try/catch`.

## Classes and prototypes

```javascript
class Animal {
  #sound; // private field
  constructor(name, sound) { this.name = name; this.#sound = sound; }
  speak() { return `${this.name} says ${this.#sound}`; }
}
class Dog extends Animal {
  constructor(name) { super(name, 'Woof'); }
}
```

`class` is sugar over JavaScript's prototype chain — `dog instanceof Animal`
works because `Dog.prototype`'s prototype is `Animal.prototype`. `#field` is
a genuinely private instance field (not accessible or even enumerable from
outside), distinct from a `_field` convention which is just a naming hint.

## Modules: ESM vs CommonJS

```javascript
// ESM (import/export) — the standard, used in browsers and modern Node ("type": "module")
export function add(a, b) { return a + b; }
import { add } from './math.js';

// CommonJS (require/module.exports) — Node's original module system
function add(a, b) { return a + b; }
module.exports = { add };
const { add } = require('./math.js');
```

ESM imports are statically analyzable (enables tree-shaking) and hoisted;
CommonJS `require` is a runtime function call. Mixing them in one project
without a bundler's interop layer is a common source of "not a function" or
"unexpected token export" errors — check `package.json`'s `"type"` field and
file extensions (`.mjs`/`.cjs`) when debugging this.

## Common pitfalls

- **`==` vs `===`.** `==` coerces types before comparing (`'' == 0` is
  `true`); default to `===`/`!==` unless the coercion is deliberate and
  documented.
- **Mutating an array/object you don't own** — `array.sort()`, `.reverse()`,
  `.splice()` mutate in place; prefer `.toSorted()`/`.toReversed()`/spread
  copies (`[...arr]`) when the caller doesn't expect their argument changed.
- **`NaN !== NaN`** — use `Number.isNaN(x)`, never `x === NaN`.
- **Floating-point arithmetic** — `0.1 + 0.2 !== 0.3`; compare with an
  epsilon or use integer-cents-style representations for money.
- **Forgetting `await`** on a Promise-returning call — the code moves on
  with a pending Promise object instead of the resolved value, and errors
  surface far from their real cause.

## Learn more

- [MDN: JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) —
  language and standard-library reference.
- [MDN: Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures), [MDN: `this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [MDN: Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [Node.js docs: Modules](https://nodejs.org/api/modules.html) (CommonJS) and [ECMAScript modules](https://nodejs.org/api/esm.html)
- [ECMA-262 (the language spec)](https://tc39.es/ecma262/)
