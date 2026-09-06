<script lang="ts">
	// Shared <svelte:head> block for every route: title, description,
	// canonical link, Open Graph, and Twitter card meta. `path` is the
	// route's own trailing-slash path (e.g. "/skills/kanban/"), used to
	// build the canonical and og:url.
	import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from '$lib/site';

	let {
		title,
		description,
		path
	}: {
		title: string;
		description: string;
		path: string;
	} = $props();

	let url = $derived(`${SITE_URL}${path}`);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={SITE_NAME} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content={DEFAULT_OG_IMAGE} />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
</svelte:head>
