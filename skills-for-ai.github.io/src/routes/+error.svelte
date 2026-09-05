<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>{page.status} — Skills for AI</title>
</svelte:head>

<main id="content" style="padding: 3rem 1.5rem; text-align: center;">
	<h1>{page.status}</h1>
	<p>{page.error?.message ?? 'Something went wrong.'}</p>
	<p><a href="/">Back to the skills catalog</a></p>
</main>
