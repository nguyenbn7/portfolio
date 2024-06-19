<script>
	import projects from '$lib/projects.json';
	import { base } from '$app/paths';
	import Container from '$lib/app/Container.svelte';
	import { convertToFilterString, createProjectFilters } from '$lib/app/util';
	import { onMount } from 'svelte';

	const projectFilters = createProjectFilters(projects);

	let showHeader = false;
	let showNavBarMobile = false;
	/** @type {HTMLElement | null} */
	let mainEle;
	/** @type {string} */
	let currentSectionId;
	/** @type {HTMLElement} */
	let navBarEle;
	let filterId = 0;
	/** @type {import('isotope-layout')} */
	let showCaseIsoTope;

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

	/**
	 * @param {MouseEvent & { currentTarget: EventTarget & HTMLAnchorElement; }} $event
	 */
	function playAudio($event) {
		const audio = new Audio($event.currentTarget.href);
		audio.play();
	}

	/**
	 * @param {ProjectFilter} projectFilter
	 */
	function filter(projectFilter) {
		showCaseIsoTope.arrange({
			filter: projectFilter.by
		});

		filterId = projectFilters.indexOf(projectFilter);
	}

	onMount(async () => {
		mainEle = document.getElementById('main');
		const container = document.getElementById('show-case-container');

		if (container) {
			const Isotope = (await import('isotope-layout')).default;
			showCaseIsoTope = new Isotope(container, {
				itemSelector: '.show-case-item'
			});
		}

		handleOnScroll();
	});
</script>

<svelte:head>
	<title>Nguyên Portfolio</title>
</svelte:head>

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
			<a href="{base}/">
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

<section class="my-[60px] py-[60px] overflow-hidden" id="about">
	<Container>
		<div class="flex flex-wrap">
			<div class="xl:w-1/2 lg:w-7/12 px-3" data-aos="fade-right">
				<img src="{base}/about.webp" class="max-w-full h-auto align-middle" alt="Profile" />
			</div>
			<div class="xl:w-1/2 lg:w-7/12 pt-12 lg:pt-0 px-3">
				<h3 class="font-normal text-[34px] text-white/80" data-aos="fade-up">About Me</h3>
				<p class="text-white/70" data-aos="fade-up">
					Hi there! My name is <a
						class="text-white/80 font-bold mr-1"
						href="https://en.wikipedia.org/wiki/Nguyen#Pronunciation">Nguyên</a
					>
					<a
						href="{base}/Nguyen-Pronounciation.mp3"
						class="text-[#bb86fc] font-bold mr-1"
						on:click|preventDefault={playAudio}
						title="Hear pronunciation"><i class="fa-solid fa-volume-high"></i></a
					>. I have been a self-taught developer since 2018 when I was in University and I have 2
					years experience in software developer and testing. From 2023, I become a lifelong learner
					in programming and find fun through developing small or silly projects.
				</p>

				<div class="mt-[44px]" data-aos="fade-up" data-aos-delay="1">
					<span class="text-[48px] float-left text-[#bb86fc]">
						<i class="fa-solid fa-cube"></i>
					</span>
					<h4 class="text-[22px] font-medium ml-[60px] text-white/80">
						What are my values and principles?
					</h4>
					<p class="text-[15px] ml-[60px] text-white/70">
						Care about the product, Domain driven, Develop an application through iteration rather
						making it in a step.
					</p>
				</div>

				<div class="mt-[44px]" data-aos="fade-up" data-aos-delay="100">
					<span class="text-[48px] float-left text-[#bb86fc]">
						<i class="fa-solid fa-receipt"></i>
					</span>
					<h4 class="text-[22px] font-medium ml-[60px] text-white/80">
						Which programming languages I choose?
					</h4>
					<p class="text-[15px] ml-[60px] text-white/70">
						I like to use <span class="font-bold text-white/75 hover:text-[#bb86fc]">Python</span>,
						<span class="font-bold text-white/75 hover:text-[#bb86fc]">JavaScript</span> to make my development
						faster.
					</p>
				</div>

				<div class="mt-[44px]" data-aos="fade-up" data-aos-delay="200">
					<span class="text-[48px] float-left text-[#bb86fc]">
						<i class="fa-solid fa-bolt"></i>
					</span>
					<h4 class="text-[22px] font-medium ml-[60px] text-white/80">
						Which framework I currenly use?
					</h4>
					<p class="text-[15px] ml-[60px] text-white/70">
						<a href="https://kit.svelte.dev/" class="text-white/75 font-bold hover:text-[#bb86fc]"
							>SvelteKit</a
						>,
						<a href="https://tailwindcss.com/" class="text-white/75 font-bold hover:text-[#bb86fc]"
							>Tailwindcss</a
						>,
						<a
							href="https://www.djangoproject.com/"
							class="text-white/75 font-bold hover:text-[#bb86fc]">Django</a
						>
						(sometimes
						<a
							href="https://fastapi.tiangolo.com/"
							class="text-white/75 font-bold hover:text-[#bb86fc]">FastAPI</a
						>) and
						<a
							href="https://www.tensorflow.org/"
							class="text-white/75 font-bold hover:text-[#bb86fc]">TensorFlow</a
						>
					</p>
				</div>
			</div>
		</div>
	</Container>
</section>

<section class="my-[60px] py-[60px] overflow-hidden" id="project">
	<Container>
		<div class="section-title pb-[40px] text-center">
			<h2 class="block text-[36px] font-medium mb-[20px] leading-5 text-white/80">Showcase</h2>
			<p class="text-white/60">From simple to complex projects</p>
		</div>

		<div class="flex flex-wrap" data-aos="fade-up">
			<div class="max-w-full w-full px-3 flex justify-center">
				<ul
					class="flex jstify-center mx-auto mt-0 mb-[35px] py-[8px] px-[20px] shadow-sm text-center rounded-[50px] bg-[#5d5d5d]"
					id="show-case-filter"
				>
					{#each projectFilters as projectFilter, idx}
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
						<li
							class="cursor-pointer inline-block pt-[10px] pb-[8px] px-[15px] text-[14px] font-semibold leading-4 uppercase mb-[5px] transition-all ease-in-out duration-300"
							on:click={(_) => filter(projectFilter)}
							class:filter-active={idx === filterId}
						>
							{projectFilter.name.split('-').join(' ')}
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<div class="flex flex-wrap mb-[30px] relative" id="show-case-container" data-aos="fade-up">
			{#each projects as project}
				<div
					class="lg:w-1/3 md:w-1/2 px-3 mb-3 show-case-item {convertToFilterString(project.type)}"
				>
					<div
						class="relative overflow-hidden z-[1] bg-black/60 before:content-normal before:bg-black/75 before:absolute before:top-[30px] before:left-[30px] before:bottom-[30px] before:right-[30px] before:transition-all before:ease-in-out before:duration-300 before:z-[2] before:opacity-0 before:hover:top-0 before:hover:left-0 before:hover:right-0 before:hover:bottom-0 before:hover:opacity-100 group brightness-95 hover:brightness-110"
					>
						<img
							class="max-w-full h-auto"
							src={`${base}/projects/${project.image}`}
							alt={project.name}
						/>

						<div
							class="opacity-0 absolute top-0 left-0 right-0 bottom-0 text-center z-[3] transition-all ease-in-out duration-300 flex flex-col justify-center items-center before:block before:content-normal before:size-[48px] before:absolute before:top-[35px] before:left-[35px] before:border-solid before:border-t-[3px] before:border-l-[3px] before:border-t-white before:border-l-white before:transition-all before:duration-500 before:ease-linear before:delay-0 after:block after:content-normal after:size-[48px] after:absolute after:bottom-[35px] after:right-[35px] after:border-solid after:border-b-[3px] after:border-r-[3px] after:border-b-white after:border-r-white after:transition-all after:duration-500 after:ease-linear after:delay-0 group-hover:opacity-100 group-hover:before:top-[15px] group-hover:before:left-[15px] group-hover:after:bottom-[15px] group-hover:after:right-[15px]"
						>
							<h4 class="text-[20px] font-semibold text-white/80">{project.name}</h4>
							<p class="text-[14px] uppercase text-white/60">{project.type}</p>
							<div class="text-center z-[4]">
								<!-- <a
									href={project.imageUrl}
									data-gallery={project.name}
									class="text-white/70 mx-[2px] text-[28px] inline-block duration-300 hover:text-[#03dac5] project-glightbox"
									title={project.name}
								>
									<i class="fa-solid fa-plus"></i>
								</a> -->
								<a
									class="text-white/70 mx-[2px] text-[28px] inline-block duration-300 hover:text-[#bb86fc]"
									href={project.demoLink || '#'}
									title="Demo"
								>
									<i class="fa-solid fa-link"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</Container>
</section>
