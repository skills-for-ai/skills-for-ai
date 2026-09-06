<script lang="ts">
	import { ContainerWithFixedWidth, Card, Grid, Badge } from 'lily-design-system-svelte-headless';
	import Seo from '$lib/components/site/Seo.svelte';
	import { skills, totalSkillCount } from '$lib/data/skills';
	import { categories } from '$lib/data/categories';
	import { REPO_URL, SITE_DESCRIPTION } from '$lib/site';

	let query = $state('');

	const skillsByCategory = new Map(
		categories.map((cat) => [cat.slug, skills.filter((s) => s.category === cat.title)])
	);

	const filtered = $derived(
		query.trim() === ''
			? categories.map((cat) => ({ ...cat, skills: skillsByCategory.get(cat.slug) ?? [] }))
			: categories
					.map((cat) => ({
						...cat,
						skills: (skillsByCategory.get(cat.slug) ?? []).filter(
							(s) =>
								s.title.toLowerCase().includes(query.toLowerCase()) ||
								s.description.toLowerCase().includes(query.toLowerCase())
						)
					}))
					.filter((cat) => cat.skills.length > 0)
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
			<section class="category">
				<h2>
					<a href="/categories/{category.slug}/">{category.title}</a>
					<Badge label="{category.skills.length} skills">{category.skills.length}</Badge>
				</h2>
				<Grid columns="repeat(auto-fill, minmax(260px, 1fr))" gap="1rem">
					{#each category.skills as skill (skill.slug)}
						<Card heading={skill.title} href="/skills/{skill.slug}/" label={skill.title}>
							<p class="skill-description">{skill.description}</p>
						</Card>
					{/each}
				</Grid>
			</section>
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
		margin-bottom: 2.5rem;
	}
	.category h2 {
		display: flex;
		align-items: center;
		gap: 0.6rem;
	}
	.category h2 a {
		color: inherit;
	}
	.skill-description {
		font-size: 0.9rem;
		line-height: 1.45;
	}
</style>
