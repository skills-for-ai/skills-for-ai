<script lang="ts">
	import { ContainerWithFixedWidth, Card, Grid, Badge } from 'lily-design-system-svelte-headless';
	import Seo from '$lib/components/site/Seo.svelte';
	import Breadcrumbs from '$lib/components/site/Breadcrumbs.svelte';
	import { categories } from '$lib/data/categories';
	import { skills } from '$lib/data/skills';

	const counts = new Map(
		categories.map((cat) => [cat.slug, skills.filter((s) => s.category === cat.title).length])
	);
</script>

<Seo
	title="Categories — Skills on AI"
	description="All categories in the Skills on AI catalog."
	path="/categories/"
/>

<main id="content">
	<ContainerWithFixedWidth maxWidth="72rem">
		<Breadcrumbs trail={[{ label: 'Home', href: '/' }, { label: 'Categories' }]} />

		<h1>Categories</h1>

		<Grid columns="repeat(auto-fill, minmax(240px, 1fr))" gap="1rem">
			{#each categories as category (category.slug)}
				<Card
					heading={category.title}
					href="/categories/{category.slug}/"
					label={category.title}
				>
					<Badge label="{counts.get(category.slug)} skills">{counts.get(category.slug)}</Badge>
				</Card>
			{/each}
		</Grid>
	</ContainerWithFixedWidth>
</main>
