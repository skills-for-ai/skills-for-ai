import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		// Fully static output for GitHub Pages (org site, served from the domain root
		// once this subdirectory is exported to the standalone skills-for-ai.github.io
		// repo — see spec/monorepo-github-pages/index.md at the monorepo root).
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		})
	}
};

export default config;
