---
name: angular-programming
description: Use when asked to write, explain, or debug general-purpose Angular code — components and templates, dependency injection, signals/RxJS-based reactivity, modules/standalone components — as a TypeScript UI framework, distinct from lily-design-system-angular's specific component package built on it.
---

# Angular Programming

Covers Angular itself — a full-featured, opinionated TypeScript
framework for building UIs, built on top of
[[typescript-programming]]. See [[lily-design-system-angular]] for a
specific design-system component package built using Angular, distinct
from Angular the framework covered here.

## Components and templates

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-greeting',
  template: `<h1>Hello, {{ name }}!</h1>`,
})
export class GreetingComponent {
  name = 'World';
}
```

An Angular component pairs a TypeScript class (state and logic) with a
template (HTML plus Angular's template syntax — interpolation `{{ }}`,
structural directives, event/property bindings) via the `@Component`
decorator's metadata.

## Dependency injection

```typescript
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  getUser() { return { name: 'Ada' }; }
}

@Component({ /* ... */ })
export class ProfileComponent {
  constructor(private userService: UserService) {}   // injected automatically
}
```

Angular has a built-in, hierarchical dependency injection system — a
service marked `@Injectable` can be requested in a component's
constructor, and Angular supplies (and manages the lifecycle of) an
instance automatically, without the component needing to construct it
itself. This is central to how Angular structures testable, decoupled
code, distinguishing it from React/Vue's more manual approach to sharing
logic.

## Reactivity: signals and RxJS

```typescript
import { signal, computed } from '@angular/core';

const count = signal(0);
const doubled = computed(() => count() * 2);

count.set(count() + 1);   // triggers dependent updates
```

Modern Angular (v16+) introduces signals as a fine-grained reactivity
primitive, alongside its long-standing use of RxJS observables for
async streams (HTTP requests, event streams) — signals handle
synchronous reactive state simply; RxJS remains the tool for composing
asynchronous event streams (debouncing, combining multiple sources, and
similar operations).

## Modules and standalone components

Angular historically organized an application into `NgModule`s
declaring which components/directives/pipes belong together; modern
Angular favors standalone components (no enclosing `NgModule` required),
simplifying the mental model — check which style a given codebase or
Angular version uses before assuming one or the other.

## Common pitfalls

- **Subscribing to an Observable without unsubscribing** — a manual
  `.subscribe()` that's never torn down (e.g. in `ngOnDestroy`, or via
  the `async` pipe, which handles this automatically) leaks memory and
  can cause callbacks to fire on a destroyed component.
- **Mixing NgModule-based and standalone-component patterns
  inconsistently** without understanding which parts of a codebase use
  which, especially across an in-progress migration.
- **Deep, unnecessary RxJS operator chains** where a signal or a simpler
  synchronous computation would do — RxJS is powerful but adds real
  cognitive overhead when used where it isn't needed.
- **Forgetting change detection implications** — Angular's default
  change detection strategy checks broadly; `OnPush` change detection
  (a common performance optimization) requires inputs to change by
  reference, not just by mutation, to be detected.

## Learn more

- [Angular documentation](https://angular.dev/)
- [[typescript-programming]] for the underlying language.
- [[lily-design-system-angular]] for a specific component package built on Angular.
