---
name: git-skill
description: Use when asked to write or explain git commands, resolve a merge conflict, choose a branching strategy, or understand git internals (commits, refs, the index, rebase vs merge) — independent of any specific hosting platform (GitHub/GitLab/Codeberg).
---

# Git Skill

Git is a distributed version control system: every clone is a full
repository with complete history, not a thin checkout of a central server.
This skill covers git itself; [[github-skill]], [[gitlab-skill]], and
[[codeberg-skill]] cover the hosting platforms built around it.

## Core model

- A **commit** is an immutable snapshot (not a diff) identified by a SHA
  hash of its content plus parent(s) — this is why changing history
  (rebase, amend) always produces new hashes downstream, and why two
  commits with identical content but different parents are different
  commits.
- A **branch** is just a movable pointer to a commit; **HEAD** points to
  the currently checked-out commit (usually via a branch).
- The **index** (staging area) sits between the working directory and a
  commit — `git add` stages a change into it, `git commit` snapshots the
  index, not the working directory directly. This is why `git add -p`
  (stage part of a file's changes) is possible at all.

## Everyday commands

```sh
git status                          # working dir / index / branch state
git diff                            # unstaged changes
git diff --staged                   # staged changes
git log --oneline --graph --all     # visual history across branches
git add -p                          # interactively stage hunks
git commit -m "message"
git switch -c feature-branch        # create + switch (modern; was checkout -b)
git restore --staged file           # unstage (modern; was reset HEAD --)
git restore file                    # discard working-dir changes to file
```

## Merge vs. rebase

```sh
git merge feature-branch     # creates a merge commit, preserves both histories exactly as they happened
git rebase main              # replays feature-branch's commits onto main, linear history, rewrites hashes
```

Merge is non-destructive and safe on shared branches; rebase produces a
cleaner linear history but **rewrites commit hashes**, which is unsafe on
a branch anyone else has already pulled — the classic rule: never rebase
commits that have been pushed and might be based on by someone else,
unless the whole team agrees to force-push conventions. `git rebase -i`
(interactive) additionally lets you reorder, squash, or reword commits
before they land.

## Resolving a merge conflict

```sh
git merge feature-branch
# CONFLICT (content): Merge conflict in file.txt
```

Git marks the conflicting regions in the file with `<<<<<<<`, `=======`,
`>>>>>>>` markers; edit the file to the intended final content, remove the
markers, `git add` the resolved file, then `git commit` (for a merge) or
`git rebase --continue` (mid-rebase). `git merge --abort` /
`git rebase --abort` backs out cleanly if the conflict resolution goes
wrong partway through.

## Branching strategies

- **Trunk-based development** — short-lived branches merged into `main`
  frequently (often daily), favoring continuous integration; needs strong
  automated testing and feature flags for incomplete work.
- **Git Flow** — long-lived `develop` and `main` branches, dedicated
  `feature/`, `release/`, and `hotfix/` branches — more ceremony, suited to
  scheduled/versioned releases rather than continuous deployment.
- **GitHub Flow** — `main` is always deployable; every change is a
  short-lived branch merged via pull/merge request — a common middle
  ground for teams shipping continuously without full trunk-based rigor.

## Undoing things

```sh
git commit --amend             # fix the most recent commit (message or content)
git revert <commit>            # new commit that undoes <commit> — safe on shared history
git reset --hard <commit>      # move the branch pointer, discard changes — rewrites history, unsafe if pushed
git reflog                     # local record of every HEAD movement — the safety net for "I lost a commit"
```

`revert` and `reset` solve the same problem differently: `revert` adds a
new commit undoing the change (safe to push, preserves history); `reset`
moves the branch backward as if the commit never happened (rewrites
history, only safe on a branch nobody else has pulled). `reflog` is the
recovery mechanism when a reset, rebase, or branch deletion turns out to
have gone further than intended — it records where `HEAD` has pointed
locally, even after a commit is no longer reachable from any branch.

## Common pitfalls

- **Committing generated files or secrets** — use `.gitignore` proactively;
  a committed secret needs rotating, not just deleting in a later commit
  (it's still in history).
- **Force-pushing a shared branch** (`git push --force`) after a rebase —
  use `git push --force-with-lease` instead, which fails safely if someone
  else has pushed to the branch since your last fetch, rather than
  silently clobbering their work.
- **Large binary files committed directly** — git's model handles text
  diffs efficiently but stores binaries as full blobs each time they
  change, bloating the repo; use Git LFS (Large File Storage) for
  frequently-changing binaries.
- **Detached HEAD confusion** — checking out a commit (not a branch)
  leaves you in "detached HEAD" state; commits made there are only kept if
  you create a branch from them before switching away, or git's garbage
  collector will eventually reclaim them.
- **Merge commits vs. rebase in a team without a shared convention** —
  pick one strategy per repo and document it; a repo mixing both
  unpredictably produces a confusing, hard-to-read history.

## Learn more

- [Pro Git (free book)](https://git-scm.com/book/en/v2) — the canonical deep reference.
- [git documentation](https://git-scm.com/doc)
- [Learn Git Branching](https://learngitbranching.js.org/) — interactive visual tutorial.
- [[github-skill]], [[gitlab-skill]], [[codeberg-skill]] — the hosting-platform layer built on top of git.
