---
name: react-programming
description: Use when asked to write, explain, or debug general-purpose React code — components and JSX, hooks (useState/useEffect), the virtual DOM/reconciliation — as a JavaScript/TypeScript UI library, distinct from lily-design-system-react's specific component package built on it.
---

# React Programming

Covers React itself — a JavaScript/TypeScript library for building UIs
out of composable components, built on top of [[javascript-programming]]
or [[typescript-programming]]. See [[lily-design-system-react]] for a
specific design-system component package built using React, distinct
from React the library covered here.

## Components and JSX

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

function App() {
  return (
    <div>
      <Greeting name="World" />
    </div>
  );
}
```

A React component is a function that returns JSX — a syntax extension
that looks like HTML but compiles to `React.createElement()` calls. Data
flows one way, down through props (`name` above); a component re-renders
whenever its props or internal state change.

## Hooks

```jsx
import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);   // re-run only when count changes

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

`useState` gives a function component its own local, re-render-triggering
state; `useEffect` runs side effects (DOM updates, subscriptions, data
fetching) after render, re-running only when its dependency array
changes. Hooks replaced class components' lifecycle methods
(`componentDidMount`, etc.) as React's primary state/effect mechanism,
and can only be called at a component's top level (not inside
conditionals or loops) — this rule is what lets React track hook state
correctly across renders.

## The virtual DOM and reconciliation

React keeps an in-memory representation of the UI (the virtual DOM);
when state changes, it computes a new virtual DOM tree, diffs it against
the previous one, and applies only the minimal necessary changes to the
real DOM — reconciliation. A stable `key` prop on list items is how React
tracks which items moved, were added, or removed across renders, rather
than re-rendering the whole list from scratch.

## Common pitfalls

- **Missing or unstable `key` props on lists** — using an array index as
  `key` when the list can reorder causes React to misattribute state
  across items after a reorder.
- **Stale closures in `useEffect`** — omitting a value the effect
  actually reads from its dependency array means the effect captures an
  old value from the render it was created in, not the current one.
- **Calling hooks conditionally** — violates the rule that hooks must run
  in the same order on every render, corrupting React's internal state
  tracking.
- **Mutating state directly** (`state.push(x)`) instead of through the
  setter with a new object/array — React compares by reference to decide
  whether to re-render, so a mutated-in-place object won't trigger one.

## Learn more

- [React documentation](https://react.dev/)
- [[javascript-programming]], [[typescript-programming]] for the underlying language.
- [[lily-design-system-react]] for a specific component package built on React.
