<script>
	import projects from '$lib/projects.json';
	import Container from '$lib/app/component/container.svelte';
	import Row from '$lib/app/component/row.svelte';
	import SectionHeader from '$lib/app/component/section-header.svelte';
	import SectionTitle from '$lib/app/component/section-title.svelte';
	import Section from '$lib/app/component/section.svelte';
	import { onMount } from 'svelte';
	import ProjectInfo from './project-info.svelte';
	import ProjectWrap from './project-wrap.svelte';
	import { base } from '$app/paths';
	import { createProjectFilters, filterPrefix } from '$lib/util';

	const projectFilters = createProjectFilters(projects);
	let filterId = 0;
	/** @type {import('isotope-layout')} */
	let showCaseIsoTope;

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
		const container = document.getElementById('show-case-container');

		if (container) {
			const Isotope = (await import('isotope-layout')).default;
			showCaseIsoTope = new Isotope(container, {
				itemSelector: '.show-case-item'
			});
		}

		// const GLightbox = (await import('glightbox')).default;

		// const glightbox = GLightbox({
		// 	selector: '.project-glightbox'
		// });
	});
</script>

<Section name="project">
	<Container>
		<SectionTitle data-aos="fade-up">
			<SectionHeader class="text-white/80">What I have made</SectionHeader>
			<p class="text-white/60">From simple to complex projects</p>
		</SectionTitle>

		<Row data-aos="fade-up">
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
							{projectFilter.name}
						</li>
					{/each}
				</ul>
			</div>
		</Row>

		<Row class="mb-[30px] relative" id="show-case-container" data-aos="fade-up">
			{#each projects as project}
				<div class="lg:w-1/3 md:w-1/2 px-3 mb-3 show-case-item {filterPrefix}-{project.type}">
					<ProjectWrap class="group brightness-95 hover:brightness-105">
						<img
							class="max-w-full h-auto"
							src={`${base}/projects/${project.image}`}
							alt={project.name}
						/>
						<ProjectInfo
							class="group-hover:opacity-100 group-hover:before:top-[15px] group-hover:before:left-[15px] group-hover:after:bottom-[15px] group-hover:after:right-[15px]"
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
						</ProjectInfo>
					</ProjectWrap>
				</div>
			{/each}
		</Row>
	</Container>
</Section>
