<script>
	import BackToTop from '$lib/component/back-to-top.svelte';

	/** @type {import('./$types').LayoutData} */
	export let data;
</script>

<svelte:head>
	<title>{data.appName} | Home</title>
</svelte:head>

<slot></slot>

<BackToTop />
