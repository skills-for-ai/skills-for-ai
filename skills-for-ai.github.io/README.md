# skills-for-ai.github.io

The public catalog site for [Skills for AI](https://github.com/skills-for-ai/skills-for-ai),
published at <https://skills-for-ai.github.io/>.

This is a nested subproject inside the `skills-for-ai` monorepo — **edit
here**, not in the standalone `skills-for-ai.github.io` repository, which is
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

`src/lib/data/skills.ts` lists every skill from `../skills/*/SKILL.md`,
grouped into the catalog's categories. It's generated, not hand-maintained
— regenerate it (see the extraction script referenced in the monorepo's
`spec/index.md`) whenever a skill is added, renamed, or removed, rather than
editing the generated file by hand.

## Publish

From the monorepo root: `make github-pages` (or
`bin/git-subtree-push skills-for-ai.github.io`). Either exports this
subdirectory's history to the standalone `skills-for-ai.github.io` repo,
whose own `.github/workflows/deploy.yml` (this same file, once it lands at
that repo's root) builds and deploys to GitHub Pages.
