<script>
	import 'aos/dist/aos.css';
	import { onMount } from 'svelte';
	onMount(async () => {
		const module = await import('aos');
		const Aos = module.default;
		Aos.init({
			disable: 'phone',
			duration: 1000,
			easing: 'ease-in-out',
			once: true,
			mirror: false
		});
	});
</script>

<slot></slot>
