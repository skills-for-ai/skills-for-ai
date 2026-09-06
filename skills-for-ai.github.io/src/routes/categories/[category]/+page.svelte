<script lang="ts">
	import { ContainerWithFixedWidth, Card, Grid } from 'lily-design-system-svelte-headless';
	import Seo from '$lib/components/site/Seo.svelte';
	import Breadcrumbs from '$lib/components/site/Breadcrumbs.svelte';

	let { data } = $props();
</script>

<Seo
	title="{data.category.title} — Skills for AI"
	description="Skills in the {data.category.title} category of the Skills for AI catalog."
	path="/categories/{data.category.slug}/"
/>

<main id="content">
	<ContainerWithFixedWidth maxWidth="72rem">
		<Breadcrumbs
			trail={[
				{ label: 'Home', href: '/' },
				{ label: 'Categories', href: '/categories/' },
				{ label: data.category.title }
			]}
		/>

		<h1>{data.category.title}</h1>
		<p>{data.skills.length} skills.</p>

		<Grid columns="repeat(auto-fill, minmax(260px, 1fr))" gap="1rem">
			{#each data.skills as skill (skill.slug)}
				<Card heading={skill.title} href="/skills/{skill.slug}/" label={skill.title}>
					<p class="skill-description">{skill.description}</p>
				</Card>
			{/each}
		</Grid>
	</ContainerWithFixedWidth>
</main>

<style>
	.skill-description {
		font-size: 0.9rem;
		line-height: 1.45;
	}
</style>
