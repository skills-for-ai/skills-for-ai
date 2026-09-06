<script lang="ts">
	import {
		BreadcrumbNav,
		BreadcrumbList,
		BreadcrumbListItem
	} from 'lily-design-system-svelte-headless';

	// `trail` is Home-first; every item but the last is a link, the last
	// is the current page (rendered as plain text, current=true) — the
	// exact pattern from BreadcrumbNav's own documented example.
	let { trail }: { trail: { label: string; href?: string }[] } = $props();
</script>

<BreadcrumbNav label="Breadcrumb">
	<BreadcrumbList>
		{#each trail as crumb, i (crumb.label)}
			<BreadcrumbListItem current={i === trail.length - 1}>
				{#if crumb.href}
					<a href={crumb.href}>{crumb.label}</a>
				{:else}
					{crumb.label}
				{/if}
			</BreadcrumbListItem>
		{/each}
	</BreadcrumbList>
</BreadcrumbNav>
