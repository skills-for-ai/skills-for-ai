---
name: css
description: Use when asked to write, explain, or debug CSS — selectors and specificity, the box model, Flexbox/Grid layout, responsive design with media queries, or why a style isn't applying — independent of any specific framework or CSS-in-JS tool.
---

# CSS

CSS describes how HTML is presented: layout, color, typography, motion. This
skill covers plain CSS itself — a design-system skill covers a specific
component library's classes/tokens on top of it.

## Selectors and specificity

```css
#id-example { }             /* specificity (1,0,0) */
.class-example { }          /* specificity (0,1,0) */
[data-state="open"] { }     /* specificity (0,1,0), same tier as a class */
div { }                     /* specificity (0,0,1) */
div.class-example { }       /* specificity (0,1,1) */
.a .b { }                   /* descendant combinator: any .b inside .a */
.a > .b { }                 /* direct child only */
.a + .b { }                 /* immediately adjacent sibling */
.a ~ .b { }                 /* any later sibling */
```

- Specificity is compared as a tuple **(inline styles, IDs, classes/
  attributes/pseudo-classes, elements/pseudo-elements)** — an ID always beats
  any number of classes; more classes always beat more elements. `!important`
  overrides normal specificity entirely and should be a last resort — it
  makes later legitimate overrides need `!important` too.
- When specificity ties, **source order wins** — the rule that appears later
  in the cascade (including later `<link>`/`<style>` tags) applies.
- `@layer` (cascade layers) lets you control precedence by declared layer
  order instead of fighting specificity, useful when mixing a reset,
  a framework, and app styles.

## The box model

```css
.box {
  box-sizing: border-box;   /* width/height include padding + border */
  width: 200px;
  padding: 1rem;
  border: 1px solid;
  margin: 1rem;
}
```

`box-sizing: border-box` is close to universal in modern resets because the
default (`content-box`) makes `width` mean "content only," so adding padding
silently grows the element past the width you set. Margins between block
elements can **collapse** (adjacent vertical margins merge into the larger
one) — a common source of "why is there only 16px of gap, not 32px."

## Layout: Flexbox vs Grid

```css
/* Flexbox: one-dimensional distribution along a main axis */
.row {
  display: flex;
  justify-content: space-between; /* main axis */
  align-items: center;            /* cross axis */
  gap: 1rem;
}

/* Grid: two-dimensional placement */
.layout {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "header header header" "nav main main";
  gap: 1rem;
}
.header { grid-area: header; }
```

Rule of thumb: reach for **Flexbox** when you're distributing items along one
axis (a nav bar, a button row, centering one thing). Reach for **Grid** when
you're placing content into an actual two-dimensional layout (page shell,
card grid, form with aligned labels/inputs across rows).

## Responsive design

```css
.container { width: 100%; max-width: 1200px; margin-inline: auto; }

@media (min-width: 768px) {
  .container { padding-inline: 2rem; }
}
```

- Mobile-first (`min-width` breakpoints, base styles for the smallest
  screen) is generally preferred over desktop-first (`max-width`) — it means
  small-screen styles aren't overriding larger ones you never needed.
- Prefer relative units (`rem` for type/spacing that should scale with the
  user's font-size preference, `%`/`fr`/`ch` for layout) over fixed `px`
  where the value should adapt.
- Container queries (`@container`) size an element relative to its
  *containing element*, not the viewport — use them when a component's
  layout should respond to the space it's given, not the screen size.

## Common pitfalls

- **`z-index` "not working."** It only has an effect on a positioned element
  (`position` other than `static`), and it's compared within the same
  **stacking context** — a high `z-index` inside a low-`z-index` parent
  stacking context still loses to a sibling of that parent.
- **Margin collapsing** between a parent and its first/last child, or between
  adjacent siblings — a `padding`, `border`, or `overflow: hidden/auto` on
  the parent prevents it if that's not the intended behavior.
- **`overflow: hidden` clipping something you meant to just scroll**, or
  clipping a `box-shadow`/tooltip that was relying on overflowing its
  container.
- **Specificity wars solved with more `!important`** instead of restructuring
  selectors or using `@layer` — compounds the problem for the next person.
- **Forgetting `box-sizing: border-box`** on a project without a reset,
  making padding/border silently expand elements past their declared width.

## Learn more

- [MDN: CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) — property
  and concept reference.
- [MDN: CSS specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascade/Specificity)
- [CSS-Tricks: A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS-Tricks: A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [web.dev: Learn CSS](https://web.dev/learn/css)
