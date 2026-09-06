<script lang="ts">
	import { ContainerWithFixedWidth } from 'lily-design-system-svelte-headless';
	import Seo from '$lib/components/site/Seo.svelte';
	import Breadcrumbs from '$lib/components/site/Breadcrumbs.svelte';
	import { REPO_URL } from '$lib/site';

	let { data } = $props();

	const trail = $derived(
		[
			{ label: 'Home', href: '/' },
			{ label: 'Categories', href: '/categories/' },
			data.category ? { label: data.category.title, href: `/categories/${data.category.slug}/` } : null,
			{ label: data.skill.title }
		].filter((c): c is { label: string; href?: string } => c !== null)
	);
</script>

<Seo title="{data.skill.title} — Skills on AI" description={data.skill.description} path="/skills/{data.skill.slug}/" />

<main id="content">
	<ContainerWithFixedWidth maxWidth="60rem">
		<Breadcrumbs {trail} />

		<article class="skill">
			<h1>{data.skill.title}</h1>
			<p class="skill-trigger">{data.skill.description}</p>

			<div class="skill-body">
				{@html data.skill.bodyHtml}
			</div>

			<p class="skill-source">
				<a href="{REPO_URL}/tree/main/skills/{data.skill.slug}">View <code>{data.skill.slug}/SKILL.md</code> on GitHub</a>
			</p>
		</article>
	</ContainerWithFixedWidth>
</main>

<style>
	.skill-trigger {
		font-size: 1.05rem;
		opacity: 0.85;
		max-width: 65ch;
	}
	.skill-body :global(h2) {
		margin-top: 2rem;
	}
	.skill-body :global(ul),
	.skill-body :global(ol) {
		padding-left: 1.4rem;
	}
	.skill-body :global(li) {
		margin-bottom: 0.5rem;
	}
	.skill-body :global(pre) {
		overflow-x: auto;
		padding: 0.9rem;
		border-radius: 0.4rem;
		background: var(--color-surface-muted, rgba(127, 127, 127, 0.1));
	}
	.skill-body :global(code) {
		font-family: ui-monospace, monospace;
	}
	.skill-source {
		margin-top: 2.5rem;
		font-size: 0.9rem;
		opacity: 0.8;
	}
</style>
