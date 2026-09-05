# Monorepo GitHub Pages

**Summary.** The public catalog site ([skills-for-ai.github.io](https://skills-for-ai.github.io/))
is maintained as a normal nested subproject inside this monorepo
(`skills-for-ai.github.io/`) and published by exporting that
subdirectory's history — via `git subtree` — into a standalone sibling
repository that GitHub Pages actually serves from. The sibling is a
read-only export: it is never edited directly, only ever re-derived from
the monorepo.

## Scope

This topic covers why the site needs a *standalone* repository at all
(GitHub Pages user/org sites must be served from a repo named exactly
`{org}.github.io`), and how that standalone repo is derived from the
monorepo without duplicating maintenance effort.

It does **not** cover the site's own content, routes, or build (see the
site's own `README.md` at [`skills-for-ai.github.io/`](../../skills-for-ai.github.io/)).

## Principles and rules

- **One source, two repos, one direction.** `skills-for-ai.github.io/`
  inside this monorepo is the single source of truth — edited, reviewed,
  and committed exactly like `skills/` or any other part of this repo. The
  standalone `skills-for-ai.github.io` repository (once created — see
  below) is a derived artifact, produced by `git subtree push`, never
  edited directly. Changes flow one way: monorepo → export.
- **The repo name is not a free choice.** GitHub Pages user/organization
  sites must be served from a repository named exactly
  `{account}.github.io` — here, the `skills-for-ai` GitHub organization,
  so the standalone repo must be named `skills-for-ai.github.io`. This is
  why the nested subproject shares that exact name rather than following
  a `skills-for-ai-*` prefix — it's a GitHub platform requirement, not a
  naming inconsistency.
- **Publishing is `bin/git-subtree-push skills-for-ai.github.io`**, or the
  equivalent `make github-pages` — a thin `Makefile` target delegating to
  the POSIX shell script `bin/make-github-pages`, which runs
  `git subtree push --prefix=skills-for-ai.github.io github-pages main`
  against a dedicated `github-pages` git remote. Either path produces an
  identical subtree split; use whichever is at hand. GitHub Pages' own
  `deploy.yml` workflow (which lives inside the subtree and only takes
  effect once it reaches the standalone repo's root, since GitHub Actions
  reads `.github/workflows/` relative to the repository root it runs in)
  is what actually builds and deploys once a push lands.

## Detail sections

### Path map

| What | Where |
| --- | --- |
| Monorepo (source of truth) | `~/git/skills-for-ai/skills-for-ai/` |
| Docs site subproject (edit here) | `~/git/skills-for-ai/skills-for-ai/skills-for-ai.github.io/` |
| Standalone export (read-only, derived) | `skills-for-ai/skills-for-ai.github.io` on GitHub/GitLab/Codeberg |
| Live site | <https://skills-for-ai.github.io/> |
| Publish shortcut | `make github-pages` (root `Makefile`) → `bin/make-github-pages` |

### Publish flow

1. Edit `skills-for-ai.github.io/` inside the monorepo as usual; commit
   there.
2. `bin/git-subtree-push skills-for-ai.github.io` or `make github-pages`
   — either splits that subdirectory's history and pushes it to the
   standalone remote(s).
3. The standalone repo's own `deploy.yml` (installed at its root once the
   subtree lands there) builds and deploys to GitHub Pages.

### Prerequisite: the standalone repo and remote must exist first

This publish flow assumes a `github-pages` git remote is already
configured (pointing at `skills-for-ai/skills-for-ai.github.io` on the
relevant forge(s)) and that the target repository already exists — an
empty repo, created once, that `git subtree push` then populates. Creating
that repository and remote is an outward-facing, one-time setup step
outside this document's scope; do it deliberately, not as a side effect of
running the publish scripts above.

## Related topics

- The general git-subtree publishing model this monorepo could extend to
  other subprojects, should any be added — currently only the docs site
  needs this treatment.

## Sources

- [skills-for-ai.github.io/.git-subtree-push](../../skills-for-ai.github.io/.git-subtree-push)
- [bin/git-subtree-push](../../bin/git-subtree-push)
- [bin/make-github-pages](../../bin/make-github-pages)
- [Makefile](../../Makefile)
- Adapted from the same pattern documented in the Lily Design System
  monorepo's `spec/monorepo-github-pages/index.md`.
