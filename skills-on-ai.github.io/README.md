# skills-on-ai.github.io

The public catalog site for [Skills on AI](https://github.com/skills-on-ai/skills-on-ai),
published at <https://skills-on-ai.org/>.

This is a nested subproject inside the `skills-on-ai` monorepo — **edit
here**, not in the standalone `skills-on-ai.github.io` repository, which is
a read-only export. See
[`spec/monorepo-github-pages/index.md`](../spec/monorepo-github-pages/index.md)
at the monorepo root for why, and how publishing works.

## Stack

SvelteKit ([`@sveltejs/adapter-static`](https://svelte.dev/docs/kit/adapter-static)
for a fully static build) + the [Lily Design System](https://lilydesignsystem.github.io/)
headless Svelte components and theme picker.

## Develop

```sh
npm install
npm run dev
```

## Build

```sh
npm run build      # outputs to build/
npm run preview    # preview the static build locally
```

## Data

`src/lib/data/skills.ts` and `src/lib/data/categories.ts` list every skill
and category, generated from `../skills/*/SKILL.md` and the root
`README.md`. They're generated, not hand-maintained — regenerate them with
`bin/generate-skills-data` (from the monorepo root) whenever a skill is
added, renamed, removed, or edited, or whenever the root README's category
structure changes, rather than editing the generated files by hand.

## Publish

From the monorepo root: `make github-pages` (or
`bin/git-subtree-push skills-on-ai.github.io`). Either exports this
subdirectory's history to the standalone `skills-on-ai.github.io` repo,
whose own `.github/workflows/deploy.yml` (this same file, once it lands at
that repo's root) builds and deploys to GitHub Pages.
