<script>
	import { onMount } from 'svelte';

	let showHeader = false;

	/**
	 * @type {HTMLElement | null}
	 */
	let mainEle;

	let showNavBarMobile = false;

	/**
	 * @type {string}
	 */
	let currentSectionId;

	/**
	 * @type {HTMLDivElement}
	 */
	let navBarEle;

	function handleOnScroll() {
		showHeader = (mainEle && mainEle.getBoundingClientRect().top <= 120) || false;

		const section = [...document.getElementsByTagName('section')].find(
			(ele) => ele.getBoundingClientRect().top + 300 > 0
		);
		if (!section) return;

		const sectionId = section.getAttribute('id');
		if (!sectionId) return;
		currentSectionId = sectionId;
	}

	/**
	 * @param {MouseEvent & { currentTarget: EventTarget & Window; }} $event
	 */
	function hideNavBarMobile($event) {
		const target = $event.target;
		// @ts-ignore
		if (target && !navBarEle.contains(target)) showNavBarMobile = false;
	}

	onMount(() => {
		mainEle = document.getElementById('main');
		handleOnScroll();
	});
</script>

<svelte:window on:click={hideNavBarMobile} />

<svelte:document on:scroll={handleOnScroll} />

<header
	class="w-full fixed top-0 left-0 right-0 flex items-center bg-[#4F4F4F]/85 z-10 max-lg:h-[50px] h-[55px]"
	class:hidden={!showHeader}
>
	<div class="container px-10 w-full flex justify-between">
		<h1
			class="text-[30px] py-[6px] leading-none font-bold tracking-[2px] uppercase hover:text-white/95 transition-all duration-500 active:text-white/10"
		>
			<a href="/">
				<i class="fa-solid fa-house"></i>
			</a>
		</h1>
		<nav bind:this={navBarEle}>
			<ul
				class="flex items-center justify-center h-full max-md:hidden z-20"
				class:navbar-mobile={showNavBarMobile}
			>
				<li class="relative ml-[30px] hover:text-white/95 group">
					<a
						href={'#about'}
						class="md:before:content-normal md:before:absolute md:before:w-0 md:before:h-[2px] md:before:-bottom-1 md:before:left-0 md:before:bg-[#bb86fc] md:before:transition-all md:before:duration-300 md:before:ease-in-out md:before:delay-0 group-hover:md:before:w-full
						max-md:hover:text-[#bb86fc]{currentSectionId === 'about'
							? ' md:text-white/80 max-md:text-[#bb86fc]'
							: ''}"
						class:md:before:w-full={currentSectionId === 'about'}>About</a
					>
				</li>
				<li class="relative ml-[30px] hover:text-white/95 group">
					<a
						href={'#project'}
						class="md:before:content-normal md:before:absolute md:before:w-0 md:before:h-[2px] md:before:-bottom-1 md:before:left-0 md:before:bg-[#bb86fc] md:before:transition-all md:before:duration-300 md:before:ease-in-out md:before:delay-0 group-hover:md:before:w-full
						max-md:hover:text-[#bb86fc]{currentSectionId === 'project'
							? ' md:text-white/80 max-md:text-[#bb86fc]'
							: ''}"
						class:md:before:w-full={currentSectionId === 'project'}>Project</a
					>
				</li>
			</ul>
			<button
				class="hidden max-md:block active:text-white/10 text-[28px] tracking-normal duration-500"
				on:click={() => (showNavBarMobile = !showNavBarMobile)}
			>
				<i class="fa-solid fa-bars"></i>
			</button>
		</nav>
	</div>
</header>
