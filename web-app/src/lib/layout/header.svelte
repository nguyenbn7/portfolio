<script>
	import { onMount } from 'svelte';

	/**
	 * @type {HTMLHeadElement}
	 */
	let headerEle;

	let showHeader = false;

	/**
	 * @type {HTMLElement | null}
	 */
	let mainEle;

	function handleOnScroll() {
		showHeader = (mainEle && mainEle.getBoundingClientRect().top <= 120) || false;
	}

	onMount(() => {
		mainEle = document.getElementById('main');
		handleOnScroll();
	});
</script>

<svelte:document on:scroll={handleOnScroll} />

<header
	class="w-full fixed top-0 left-0 right-0 flex items-center bg-[#4F4F4F]/95 z-[999] max-lg:h-[60px] h-[70px]"
	class:hidden={!showHeader}
	bind:this={headerEle}
>
	<div class="container px-10 w-full flex justify-between">
		<h1
			class="text-[30px] py-[6px] leading-none font-bold tracking-[2px] uppercase text-white/80 hover:text-white/95 transition-all duration-500"
		>
			<a href="/">
				<i class="fa-solid fa-house"></i>
			</a>
		</h1>
		<nav>
			<ul class="flex items-center justify-center h-full">
				<li class="relative ml-[30px] hover:text-white/70">
					<a href={'#about'}>About</a>
				</li>
				<li class="relative ml-[30px] hover:text-white/70">
					<a href={'#project'}>Projects</a>
				</li>
			</ul>
			<button class="hidden">
				<i class="fa-solid fa-bars"></i>
			</button>
		</nav>
	</div>
</header>
