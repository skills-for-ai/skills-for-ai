<script lang="ts">
	import { ContainerWithFixedWidth } from 'lily-design-system-svelte-headless';
	import Seo from '$lib/components/site/Seo.svelte';
	import Breadcrumbs from '$lib/components/site/Breadcrumbs.svelte';
	import { totalSkillCount } from '$lib/data/skills';
	import { categories } from '$lib/data/categories';
	import { REPO_URL } from '$lib/site';
</script>

<Seo
	title="About — Skills for AI"
	description="What Skills for AI is, how a skill is structured, and how the catalog is organized and kept in sync."
	path="/about/"
/>

<main id="content">
	<ContainerWithFixedWidth maxWidth="60rem">
		<Breadcrumbs trail={[{ label: 'Home', href: '/' }, { label: 'About' }]} />

		<h1>About</h1>

		<p>
			Skills for AI is a catalog of {totalSkillCount} Claude Code skills, organized into {categories.length}
			categories. Each skill is a single <code>SKILL.md</code> file that an AI coding agent can load
			on demand — reference material covering a specific topic (a testing technique, a cloud platform,
			a database engine, a project-management framework, a diagram type, and more) with clear trigger
			conditions for when it applies.
		</p>

		<h2>What a skill looks like</h2>
		<p>
			Every <code>SKILL.md</code> file has the same shape: YAML frontmatter naming the skill and describing
			when to use it, followed by a Markdown body — a short introduction, a few focused sections covering
			the topic's key concepts, a "Common pitfalls" list, and a "Learn more" section linking to related
			skills in the catalog and, where relevant, external references.
		</p>

		<h2>How the catalog stays consistent</h2>
		<p>
			The skills directory, this website, the root <code>README.md</code>, and a compact
			<code>spec/index.md</code> manifest are kept in sync with each other — every skill appears in
			all of them, under the same name, with no gaps in either direction.
		</p>

		<h2>Source</h2>
		<p>
			The catalog is open source. Browse the skills directly, read the README, or open an issue:
			<a href={REPO_URL}>{REPO_URL}</a>.
		</p>
	</ContainerWithFixedWidth>
</main>
