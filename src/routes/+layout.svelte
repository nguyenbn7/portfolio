<script>
	import Favicon from '$lib/assets/images/favicon.png';
	import '$lib/assets/app.css';
	import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
	import '@fortawesome/fontawesome-free/css/regular.min.css';
	import '@fortawesome/fontawesome-free/css/solid.min.css';
	import '@fortawesome/fontawesome-free/css/brands.min.css';
</script>

<svelte:head>
	<link rel="shortcut icon" href={Favicon} type="image/x-icon" />
</svelte:head>

<slot />
