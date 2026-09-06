import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		// Fully static output for GitHub Pages (org site, served from the domain root
		// once this subdirectory is exported to the standalone skills-on-ai.github.io
		// repo — see spec/monorepo-github-pages/index.md at the monorepo root).
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		prerender: {
			// Some skill bodies contain relative markdown links (e.g. to a
			// sibling "topics/x.md" in the repo they were sourced from) that
			// don't resolve to a route on this site. They aren't navigation
			// this site owns — warn rather than fail the whole build over
			// them; entries() on each dynamic route already gives the
			// crawler every real route explicitly.
			handleHttpError: 'warn',
			handleMissingId: 'warn'
		}
	}
};

export default config;
