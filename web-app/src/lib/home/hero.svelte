<script>
	import { introduction, jobTitles } from '$lib/app-data/home/hero-section';
	import Container from '$lib/component/container.svelte';
	import { onMount } from 'svelte';
	import Typed from 'typed.js';

	/**
	 * @type {HTMLSpanElement}
	 */
	let jobTitlesEl;

	onMount(() => {
		new Typed(jobTitlesEl, {
			strings: jobTitles.split(','),
			loop: true,
			typeSpeed: 100,
			backSpeed: 50,
			backDelay: 2000
		});
	});
</script>

<section
	id="hero"
	class="relative flex flex-col justify-center items-center w-full h-screen bg-cover bg-center before:content-normal before:bg-black/40 before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0 lg:bg-fixed z-[1]"
>
	<Container class="text-center z-[2]" data-aos="fade-up">
		<h1
			class="text-white/85 mb-[10px] text-[48px] font-bold leading-[56px] max-md:text-[28px] max-md:leading-[36px]"
		>
			{introduction}
		</h1>
		<h2
			class="text-white/60 font-semibold leading-tight mb-[35px] text-[24px] max-md:text-[18px] max-md:leading-[24px] max-md:mb-[30px]"
		>
			I'm <span class="text-[#bb86fc] tracking-[1px]" bind:this={jobTitlesEl}></span>
		</h2>
		<a
			href="#about"
			class="uppercase font-medium text-[16px] tracking-[1px] inline-block py-[8px] px-[28px] rounded-[4px] duration-500 border-[2px] border-solid border-white text-white/80 hover:bg-[#bb86fc] hover:border-[#bb86fc]"
			>Explore more</a
		>
	</Container>
</section>

<style lang="postcss">
	#hero {
		background-image: url($lib/assets/images/hero-bg.jpg);
	}
</style>
