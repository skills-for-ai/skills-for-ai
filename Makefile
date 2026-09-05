.PHONY: github-pages

# Push the docs site subdirectory out to the github-pages remote via
# git's subtree mechanism. See spec/monorepo-github-pages/index.md.
github-pages:
	bin/make-github-pages
