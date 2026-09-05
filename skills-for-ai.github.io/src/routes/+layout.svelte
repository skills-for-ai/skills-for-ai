<script lang="ts">
	import '../lib/styles/theme.css';
	import { ContainerWithFixedWidth, Footer, SkipLink } from 'lily-design-system-svelte-headless';
	import SiteHeader from '$lib/components/site/Header.svelte';

	let { children } = $props();

	const year = new Date().getFullYear();
</script>

<div data-pagefind-ignore="all">
	<SkipLink href="#content" label="Skip to content" />
	<SiteHeader />
</div>

{@render children()}

<div data-pagefind-ignore="all">
	<Footer label="Site footer">
		<ContainerWithFixedWidth maxWidth="72rem">
			<p class="footer-colophon">
				© {year} Skills for AI ·
				<a href="https://github.com/skills-for-ai/skills-for-ai">Source on GitHub</a> ·
				built with <a href="https://kit.svelte.dev">SvelteKit</a> and the
				<a href="https://lilydesignsystem.github.io/">Lily Design System</a>
			</p>
		</ContainerWithFixedWidth>
	</Footer>
</div>
