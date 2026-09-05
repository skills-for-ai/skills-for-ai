---
name: gitlab-skill
description: Use when asked about GitLab-specific features — merge requests, GitLab CI/CD pipelines, the glab CLI, or self-hosted GitLab — as opposed to git itself (see git-skill) or another hosting platform (see github-skill, codeberg-skill).
---

# GitLab Skill

GitLab is a git hosting platform, available as a hosted SaaS
(gitlab.com) or self-hosted (GitLab Community/Enterprise Edition),
historically distinguished by shipping CI/CD and the whole DevOps
lifecycle as one integrated product rather than a marketplace of
third-party integrations. [[git-skill]] covers the underlying
version-control commands this builds on.

## Merge requests (MRs)

GitLab's name for what GitHub calls a pull request — same underlying
concept (propose merging a branch, review, discuss, gate on CI). Notable
GitLab-specific mechanics:

- **Merge trains** — queue multiple approved MRs so each is tested merged
  on top of the others in sequence before actually merging, catching
  integration conflicts between MRs that each pass CI individually but
  would break combined.
- **Approval rules** — more granular than a simple review-count: can
  require approval from specific groups/code-owners for specific paths.
- **Squash and merge**, **fast-forward merge**, and **merge commit**
  options — configurable per-project default, same underlying tradeoff as
  GitHub's merge methods.

## GitLab CI/CD

```yaml
# .gitlab-ci.yml
stages: [test, deploy]

test:
  stage: test
  image: node:22
  script:
    - npm ci
    - npm test

deploy:
  stage: deploy
  script: ./deploy.sh
  only: [main]
```

A single `.gitlab-ci.yml` at the repo root defines **stages** (test,
build, deploy, …) and **jobs** within them; jobs in the same stage run in
parallel, stages run sequentially by default. **Runners** (shared,
group, or self-hosted) execute jobs. Distinctive GitLab CI/CD features:
**DAG pipelines** (`needs:`) to run jobs out of strict stage order when
their actual dependencies allow it, **child/parent pipelines** for
splitting a large pipeline into triggered sub-pipelines, and **Auto
DevOps** (an opinionated, zero-config CI/CD template GitLab can apply
automatically based on detected project type).

## The `glab` CLI

```sh
glab mr create --title "..." --description "..."
glab mr view --web
glab ci status
glab issue list --label bug
glab repo clone group/project
```

GitLab's terminal client, functionally parallel to GitHub's `gh` — creating
and managing MRs/issues/pipelines without leaving the shell.

## Self-hosted vs. SaaS

Because GitLab ships as installable software (not just a hosted product),
an organization can run **GitLab Self-Managed** entirely on its own
infrastructure — relevant for data-residency, air-gapped, or
compliance-sensitive environments in a way GitHub's offering (GitHub
Enterprise Server, also self-hostable, but historically GitHub's cloud
product has been more central to its ecosystem) is architected slightly
differently around. Feature parity between GitLab SaaS tiers (Free/
Premium/Ultimate) and self-managed tiers should be checked per feature —
they don't automatically match.

## Common pitfalls

- **Assuming `.gitlab-ci.yml` and GitHub Actions YAML are interchangeable**
  — both are YAML-based CI configs but with different schemas (`stages`/
  `script` vs `jobs`/`steps`, different variable syntax); porting a
  pipeline between platforms is a real rewrite, not a rename.
- **Not using `needs:` where jobs don't actually depend on stage order** —
  without it, every job waits for the entire previous stage to finish even
  when it only truly depends on one specific earlier job, slowing the
  pipeline unnecessarily.
- **Merge trains on a low-traffic project** — the coordination overhead
  isn't worth it unless MR merge frequency is actually high enough for
  train-order conflicts to occur; a simple required-CI-pass gate is often
  sufficient for smaller projects.
- **Conflating GitLab Premium/Ultimate-only features with Free-tier
  capability** when writing guidance — check the tier a specific feature
  (e.g. certain approval rules, some security scanning) actually requires
  before assuming it's universally available.

## Learn more

- [GitLab Docs](https://docs.gitlab.com/)
- [GitLab CI/CD documentation](https://docs.gitlab.com/ee/ci/)
- [`glab` CLI manual](https://gitlab.com/gitlab-org/cli)
- [[git-skill]] for the underlying version-control commands.
