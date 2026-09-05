---
name: github-skill
description: Use when asked about GitHub-specific features — pull requests, GitHub Actions, Issues, the gh CLI, branch protection, or GitHub Pages — as opposed to git itself (see git-skill) or another hosting platform (see gitlab-skill, codeberg-skill).
---

# GitHub Skill

GitHub is a git hosting platform adding collaboration, CI/CD, and project
management on top of git itself — [[git-skill]] covers the underlying
version-control commands this all builds on.

## Pull requests

A **pull request (PR)** proposes merging one branch into another, with a
diff view, inline comments, required reviews, and CI status checks
attached before merge is allowed. Key mechanics:

- **Draft PRs** — mark a PR as work-in-progress; it can't be merged and
  typically doesn't request reviewers automatically until marked ready.
- **Required status checks** and **required reviews** (configured via
  branch protection) block merging until CI passes and enough approvals
  exist — this is how "nothing merges to `main` without review/green CI"
  is actually enforced, not just a stated norm.
- **Merge methods**: a regular merge commit, squash-and-merge (collapses
  the PR into one commit), or rebase-and-merge (replays commits linearly)
  — pick one convention per repo (see [[git-skill]]'s branching-strategy
  section).

## GitHub Actions

```yaml
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 22 }
      - run: npm ci
      - run: npm test
```

Actions is GitHub's native CI/CD: workflows are YAML files under
`.github/workflows/`, triggered by events (`push`, `pull_request`,
`schedule`, `workflow_dispatch`, …), running jobs of sequential steps on
hosted or self-hosted runners. **Reusable workflows** and **composite
actions** let you factor out repeated steps; the **Marketplace** hosts
community actions (`actions/checkout`, `actions/setup-node`, etc.) rather
than requiring everything to be hand-rolled.

## The `gh` CLI

```sh
gh pr create --title "..." --body "..."
gh pr view --web
gh pr checks
gh issue list --label bug
gh repo clone owner/repo
gh api repos/owner/repo/pulls
```

`gh` wraps the GitHub API and web actions from the terminal — creating/
reviewing/merging PRs, managing issues, and even raw API calls (`gh api`)
without leaving a shell session or hand-rolling authenticated HTTP
requests.

## Issues and project management

**Issues** track bugs/tasks/discussions, with labels, milestones, and
assignees; **Projects** (the newer, table/board-based version) layer
cross-repo planning views on top of issues and PRs. Linking a PR to an
issue (`Closes #123` in the PR description) auto-closes the issue on
merge.

## Branch protection and repository settings

Branch protection rules (on `main` or any pattern) can require: passing
status checks, a minimum number of approving reviews, up-to-date branches
before merge, signed commits, and can restrict who can push directly —
this is the actual enforcement mechanism behind "we don't push straight to
main," not a policy that relies on developer discipline alone.

## GitHub Pages

Static site hosting straight from a repo — either from a branch (commonly
`gh-pages` or a `/docs` folder) or, increasingly, from a GitHub Actions
workflow that builds and deploys via `actions/deploy-pages`. A repo named
exactly `{account}.github.io` serves at the account's root domain; any
other repo name serves as a project page at `{account}.github.io/{repo}/`.

## Common pitfalls

- **Confusing GitHub's PR terminology with GitLab's "merge request"** —
  same concept, different name; don't assume identical UI/API shape when
  porting a workflow between platforms (see [[gitlab-skill]]).
- **A workflow with overly broad `permissions`** — default to the
  least-privilege `permissions:` block a workflow actually needs (e.g.
  `contents: read`) rather than the classic-token-era default of broad
  access.
- **Secrets leaking into logs** — Actions masks known secret values in
  logs automatically, but only for values it knows are secrets; deriving
  or transforming a secret before printing can bypass the masking.
- **Assuming `main` is protected by default** — branch protection is opt-in
  configuration, not automatic; an unprotected default branch accepts
  direct force-pushes from anyone with write access.
- **Squash-merging without curating the resulting commit message** — GitHub
  defaults to concatenating every individual commit's message into the
  squash commit unless edited, producing a noisy final message.

## Learn more

- [GitHub Docs](https://docs.github.com/)
- [GitHub Actions documentation](https://docs.github.com/en/actions)
- [`gh` CLI manual](https://cli.github.com/manual/)
- [[git-skill]] for the underlying version-control commands.
