<script>
	import FaviconSVG from '$lib/favicon.svg';
	import '$lib/app.css';
	import 'aos/dist/aos.css';
	import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
	import '@fortawesome/fontawesome-free/css/solid.min.css';
	import '@fortawesome/fontawesome-free/css/brands.min.css';
	import Container from '$lib/app/Container.svelte';
	import Typed from 'typed.js';
	import careers from '$lib/careers.json';
	import socialNetworks from '$lib/social-networks.json';
	import { onMount } from 'svelte';
	import { loadSlim } from '@tsparticles/slim';
	import { particlesOptions } from '$lib/config';
	import { tsParticles } from '@tsparticles/engine';
	import { tweened } from 'svelte/motion';
	import { expoInOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	export let delay = 0; // Millisecond
	export let duration = 1700; // Millisecond
	/** See {@link https://svelte.dev/docs/svelte-easing} */
	export let easing = expoInOut;
	export let showThreshold = 50; // px
	/** @type {number} */
	let scrollY;
	const a = tweened(0);

	/**
	 * @param {number} delay
	 * @param {number} duration
	 * @param {(t: number) => number} easing
	 */
	async function backToTop(delay, duration, easing) {
		a.set(scrollY, { duration: 0 });

		const unsubscribe = a.subscribe((value) => {
			window.scrollTo(0, value);
		});

		await a.set(0, { delay, duration, easing });

		return unsubscribe();
	}

	/**
	 * @param {import("@tsparticles/engine").RecursivePartial<import("@tsparticles/engine").IOptions>} options
	 */
	async function loadParticles(options) {
		await loadSlim(tsParticles);

		await tsParticles.load({ id: 'tsparticles', options });
	}

	/**
	 * @type {HTMLSpanElement}
	 */
	let careersEl;

	onMount(async () => {
		loadParticles(particlesOptions);

		(await import('aos')).default.init({
			disable: 'phone',
			duration: 1000,
			easing: 'ease-in-out',
			once: true,
			mirror: false
		});

		new Typed(careersEl, {
			strings: careers,
			loop: true,
			typeSpeed: 100,
			backSpeed: 50,
			backDelay: 2000
		});
	});
</script>

<svelte:window bind:scrollY />

<svelte:head>
	<link rel="shortcut icon" href={FaviconSVG} type="image/svg" />
</svelte:head>

<section
	id="hero"
	class="relative flex flex-col justify-center items-center w-full h-screen bg-cover bg-center before:content-normal before:bg-black/40 before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0 lg:bg-fixed z-[1]"
>
	<Container>
		<div class="text-center z-[2]" data-aos="fade-up">
			<h1
				class="text-white/85 mb-[10px] text-[48px] font-bold leading-[56px] max-md:text-[28px] max-md:leading-[36px]"
			>
				Hi There. My name is Nguyên
			</h1>
			<h2
				class="text-white/60 font-semibold leading-tight mb-[35px] text-[24px] max-md:text-[18px] max-md:leading-[24px] max-md:mb-[30px]"
			>
				I'm <span class="text-[#bb86fc] tracking-[1px]" bind:this={careersEl}></span>
			</h2>
			<div class="flex items-center justify-center mb-8 max-md:mb-7">
				{#each socialNetworks as network}
					<a
						href={network.link}
						title={network.name}
						class="text-white/65 hover:text-[#bb86fc] font-bold text-[24px] mx-2 max-md:mx-3"
					>
						<i class={network.faIconClass}></i>
					</a>
				{/each}
			</div>
			<a
				href="#about"
				class="uppercase font-medium text-[16px] tracking-[1px] inline-block py-[8px] px-[28px] rounded-[4px] duration-500 border-[2px] border-solid border-white text-white/80 hover:bg-[#bb86fc] hover:border-[#bb86fc]"
				>Explore more</a
			>
		</div>
	</Container>
</section>

<main class="z-[1]" id="main">
	<slot />
</main>

<button
	on:click={() => backToTop(delay, duration, easing)}
	class="fixed bottom-[15px] right-[15px] z-[996] size-[40px] text-white/95 bg-[#bb86fc] hover:bg-primary-hover rounded-[50px] animate-bounce flex items-center justify-center text-[16px] leading-0"
	class:invisible={scrollY <= showThreshold}
	transition:fade={{ duration: 1000 }}
>
	<i class="fa-solid fa-arrow-up"></i>
</button>
