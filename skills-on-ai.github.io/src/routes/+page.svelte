<script lang="ts">
	import { ContainerWithFixedWidth, Badge } from 'lily-design-system-svelte-headless';
	import Seo from '$lib/components/site/Seo.svelte';
	import { skills, totalSkillCount } from '$lib/data/skills';
	import { categories } from '$lib/data/categories';
	import { REPO_URL, SITE_DESCRIPTION } from '$lib/site';

	let query = $state('');

	const skillsByCategory = new Map(
		categories.map((cat) => [cat.slug, skills.filter((s) => s.category === cat.title)])
	);

	const searching = $derived(query.trim() !== '');

	const filtered = $derived(
		searching
			? categories
					.map((cat) => ({
						...cat,
						skills: (skillsByCategory.get(cat.slug) ?? []).filter(
							(s) =>
								s.title.toLowerCase().includes(query.toLowerCase()) ||
								s.description.toLowerCase().includes(query.toLowerCase())
						)
					}))
					.filter((cat) => cat.skills.length > 0)
			: categories.map((cat) => ({ ...cat, skills: skillsByCategory.get(cat.slug) ?? [] }))
	);
</script>

<Seo title="Skills on AI" description={SITE_DESCRIPTION} path="/" />

<main id="content">
	<ContainerWithFixedWidth maxWidth="72rem">
		<section class="hero">
			<h1>Skills on AI</h1>
			<p class="lede">
				A catalog of {totalSkillCount} Claude Code skills — reference material an AI coding
				agent loads on demand for testing frameworks, cloud platforms, databases, design
				systems, programming languages, and more. Each skill is a single <code>SKILL.md</code
				> file with trigger conditions and grounded content.
			</p>
			<p class="hero-links">
				<a href={REPO_URL}>Source on GitHub</a> ·
				<a href="{REPO_URL}#readme">README</a> ·
				<a href="/categories/">Browse by category</a>
			</p>
		</section>

		<label class="search-label" for="skill-search">Filter skills</label>
		<input
			id="skill-search"
			type="search"
			placeholder="Search by name or description…"
			bind:value={query}
		/>

		{#each filtered as category (category.slug)}
			<details class="category" open={searching}>
				<summary>
					<span class="category-title">{category.title}</span>
					<Badge label="{category.skills.length} skills">{category.skills.length}</Badge>
				</summary>
				<ul class="skill-list">
					{#each category.skills as skill (skill.slug)}
						<li>
							<a href="/skills/{skill.slug}/">{skill.title}</a>
							<span class="skill-description">— {skill.description}</span>
						</li>
					{/each}
				</ul>
			</details>
		{/each}

		{#if filtered.length === 0}
			<p>No skills match "{query}".</p>
		{/if}
	</ContainerWithFixedWidth>
</main>

<style>
	.hero {
		padding-block: 2.5rem 1.5rem;
	}
	.lede {
		max-width: 60ch;
		font-size: 1.05rem;
	}
	.hero-links {
		font-size: 0.95rem;
	}
	.search-label {
		display: block;
		font-weight: 600;
		margin-bottom: 0.35rem;
	}
	input[type='search'] {
		width: 100%;
		max-width: 32rem;
		padding: 0.6rem 0.8rem;
		font-size: 1rem;
		border: 1px solid var(--color-border, #d0d5dd);
		border-radius: 0.4rem;
		margin-bottom: 2rem;
	}
	.category {
		margin-bottom: 0.75rem;
		border: 1px solid var(--color-border, #d0d5dd);
		border-radius: 0.5rem;
		padding: 0 1rem;
	}
	.category summary {
		cursor: pointer;
		list-style: none;
		display: flex;
		align-items: center;
		gap: 0.6rem;
		padding-block: 0.9rem;
		font-size: 1.15rem;
		font-weight: 600;
	}
	.category summary::-webkit-details-marker {
		display: none;
	}
	.category summary::before {
		content: '▶';
		display: inline-block;
		font-size: 0.7em;
		transition: transform 0.15s ease;
	}
	.category[open] summary::before {
		transform: rotate(90deg);
	}
	.category-title {
		flex: 1;
	}
	.skill-list {
		list-style: none;
		margin: 0;
		padding: 0 0 1rem;
	}
	.skill-list li {
		padding-block: 0.4rem;
		border-top: 1px solid var(--color-border, #eef1f5);
	}
	.skill-list li:first-child {
		border-top: none;
	}
	.skill-description {
		font-size: 0.9rem;
		opacity: 0.8;
	}
</style>
