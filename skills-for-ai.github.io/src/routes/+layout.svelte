<script lang="ts">
	import '../lib/styles/theme.css';
	import { ContainerWithFixedWidth, Footer, SkipLink } from 'lily-design-system-svelte-headless';
	import SiteHeader from '$lib/components/site/Header.svelte';
	import SiteNav from '$lib/components/site/SiteNav.svelte';
	import FooterNav from '$lib/components/site/FooterNav.svelte';
	import { REPO_URL } from '$lib/site';

	let { children } = $props();

	const year = new Date().getFullYear();
</script>

<SkipLink href="#content" label="Skip to content" />
<SiteHeader />
<SiteNav />

{@render children()}

<Footer label="Site footer">
	<ContainerWithFixedWidth maxWidth="72rem">
		<FooterNav />
		<p class="footer-colophon">
			© {year} Skills for AI ·
			<a href={REPO_URL}>Source on GitHub</a> ·
			built with <a href="https://kit.svelte.dev">SvelteKit</a> and the
			<a href="https://lilydesignsystem.github.io/">Lily Design System</a>
		</p>
	</ContainerWithFixedWidth>
</Footer>
