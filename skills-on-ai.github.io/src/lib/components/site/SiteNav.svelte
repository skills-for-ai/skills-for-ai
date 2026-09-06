<script lang="ts">
	// SiteNav — global page navigation, so every route is reachable
	// without relying on the browser back button.
	import { page } from '$app/state';

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/categories/', label: 'Categories' },
		{ href: '/about/', label: 'About' }
	];
</script>

<nav class="site-nav" aria-label="Site">
	<ul>
		{#each links as link (link.href)}
			<li>
				<a href={link.href} aria-current={page.url.pathname === link.href ? 'page' : undefined}>
					{link.label}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	.site-nav ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1.25rem;
		list-style: none;
		margin: 0;
		padding-block: 0.5rem;
	}
	.site-nav a {
		text-decoration: none;
		color: inherit;
		font-weight: 600;
		font-size: 0.9rem;
	}
	.site-nav a[aria-current='page'] {
		text-decoration: underline;
	}
</style>
