---
name: codeberg
description: Use when asked about Codeberg-specific features — a non-profit, Forgejo-based git hosting platform — pull requests, Codeberg/Forgejo Actions, or why a project mirrors to Codeberg alongside GitHub/GitLab. As opposed to git itself (see git) or the other major hosting platforms (see github, gitlab).
---

# Codeberg

Codeberg is a non-profit, community-run git hosting platform (operated by
Codeberg e.V., a German non-profit association), built on
**Forgejo** — an open-source, community-governed fork of Gitea. It's
commonly used as a non-commercial, fully-open-source alternative or
mirror alongside GitHub/GitLab. [[git]] covers the underlying
version-control commands this builds on.

## What makes it different

- **Non-profit, donation-funded** — no paid tiers gating core
  functionality, no commercial parent company; governed by its members as
  an association (e.V.).
- **Fully open-source stack** — Forgejo itself is open source (unlike
  GitHub, and unlike GitLab's proprietary Enterprise Edition layers), so
  the platform's own code is auditable and self-hostable by anyone.
- **Lightweight by design** — Forgejo (like its Gitea ancestor) is built to
  run on modest hardware; this is part of why it's a common choice for
  self-hosting a private or small-team git server, not just for using
  Codeberg's own hosted instance.
- Many projects use Codeberg as a **secondary mirror** alongside GitHub/
  GitLab — pushing to multiple remotes for redundancy or as a stance
  against depending entirely on any single commercially-owned platform
  (this monorepo's own multi-forge push setup, fanning out `origin` to
  GitHub, GitLab, and Codeberg, is a real example of that pattern).

## Pull requests

Same underlying concept as GitHub's pull requests / GitLab's merge
requests: propose merging a branch, discuss inline, gate on CI status,
require review before merge. The UI and terminology closely track Gitea's
heritage (unsurprising, since Forgejo is a fork of it) — "Pull Request,"
not "Merge Request."

## Forgejo Actions

Forgejo ships its own Actions system, deliberately designed to be
**compatible with a meaningful subset of GitHub Actions workflow syntax**
— many existing `.github/workflows/*.yml` files run on Forgejo Actions
with little or no modification, using `actions/checkout`-style action
references. This compatibility is a deliberate design goal (lowering the
migration cost from GitHub), not a coincidence — but it's a subset, not
full parity, so a workflow using a GitHub-specific feature (certain
built-in contexts, some marketplace actions relying on GitHub-specific
APIs) may need adjustment.

## Common pitfalls

- **Assuming full GitHub Actions marketplace compatibility** — Forgejo
  Actions supports a compatible subset and can run many existing actions,
  but a runner needs to be configured (self-hosted or via Codeberg's
  shared runners where available) and not every GitHub-specific action
  works unmodified.
- **Confusing Codeberg (the hosted platform) with Forgejo (the software)**
  — Codeberg is one instance running Forgejo; an organization can
  self-host Forgejo entirely independently of Codeberg, the same way
  self-hosting GitLab is independent of gitlab.com.
- **Assuming Codeberg has GitHub/GitLab-scale infrastructure capacity** —
  as a donation-funded non-profit, resource limits and rate limits can be
  more conservative; check current usage guidelines before relying on it
  for very high-traffic CI or large binary hosting.
- **Treating a Codeberg mirror as the primary source of truth** when a
  project's actual development happens elsewhere — a read-only mirror
  should be documented as such so contributors don't open issues/PRs
  against a copy nobody is watching.

## Learn more

- [Codeberg](https://codeberg.org/) and [Codeberg documentation](https://docs.codeberg.org/)
- [Forgejo](https://forgejo.org/) — the underlying open-source software.
- [Forgejo Actions documentation](https://forgejo.org/docs/latest/user/actions/)
- [[git]] for the underlying version-control commands.
