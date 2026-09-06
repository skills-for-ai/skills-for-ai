<script lang="ts">
	import { Header, ContainerWithFixedWidth } from 'lily-design-system-svelte-headless';
	import ThemePicker from './ThemePicker.svelte';
	import TextSizePicker from './TextSizePicker.svelte';
	import SharePicker from './SharePicker.svelte';
</script>

<Header label="Site header">
	<ContainerWithFixedWidth maxWidth="72rem">
		<div class="site-header-bar">
			<a class="brand" href="/">
				<strong>Skills on AI</strong>
			</a>
			<div class="site-header-controls">
				<TextSizePicker />
				<ThemePicker />
				<SharePicker />
				<a class="icon-button" href="https://github.com/skills-on-ai/skills-on-ai" aria-label="View source on GitHub">
					<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="currentColor">
						<path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.4-5.28 5.69.42.36.78 1.07.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.35-5.15-11.5-11.5-11.5H12Z"/>
					</svg>
				</a>
			</div>
		</div>
	</ContainerWithFixedWidth>
</Header>

<style>
	.site-header-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding-block: 0.75rem;
	}
	.brand {
		display: flex;
		align-items: baseline;
		gap: 0.5rem;
		text-decoration: none;
		color: inherit;
	}
	.site-header-controls {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}
	.icon-button {
		display: inline-flex;
		color: inherit;
	}
</style>
