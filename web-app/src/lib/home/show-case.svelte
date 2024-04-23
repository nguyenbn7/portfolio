<script>
	import { projects } from '$lib/app-data/home/project';
	import Container from '$lib/component/container.svelte';
	import Row from '$lib/component/row.svelte';
	import SectionHeader from '$lib/component/section-header.svelte';
	import SectionTitle from '$lib/component/section-title.svelte';
	import Section from '$lib/component/section.svelte';
	import { onMount } from 'svelte';
	import ShowCaseInfo from './show-case-info.svelte';
	import ShowCaseWrap from './show-case-wrap.svelte';

	const prefixFilter = 'show-case';

	const showCaseFilters = [
		{
			name: 'all',
			by: '*'
		},
		...[...new Set(projects.map((p) => p.type.toLowerCase()))].map((pTypeName) => ({
			name: pTypeName,
			by: `.${prefixFilter}-${pTypeName.toLowerCase()}`
		}))
	];

	let filterId = 0;

	/**
	 * @type {import('isotope-layout')}
	 */
	let showCaseIsoTope;

	/**
	 * @param {ShowCaseFilter} showCaseFilter
	 */
	function filter(showCaseFilter) {
		showCaseIsoTope.arrange({
			filter: showCaseFilter.by
		});

		filterId = showCaseFilters.indexOf(showCaseFilter);
	}

	onMount(async () => {
		const container = document.getElementById('show-case-container');

		if (container) {
			const Isotope = (await import('isotope-layout')).default;
			showCaseIsoTope = new Isotope(container, {
				itemSelector: '.show-case-item'
			});
		}
	});
</script>

<Section name="show-case">
	<Container>
		<SectionTitle>
			<SectionHeader class="text-white/80">Show case</SectionHeader>
			<p class="text-white/60">
				Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
				Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit
				alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
			</p>
		</SectionTitle>

		<Row data-aos="fade-up">
			<div class="max-w-full w-full px-3 flex justify-center">
				<ul
					class="flex jstify-center mx-auto mt-0 mb-[35px] py-[8px] px-[20px] shadow-sm text-center rounded-[50px] bg-[#5d5d5d]"
					id="show-case-filter"
				>
					{#each showCaseFilters as showCaseFilter, idx}
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
						<li
							class="cursor-pointer inline-block pt-[10px] pb-[8px] px-[15px] text-[14px] font-semibold leading-4 uppercase mb-[5px] transition-all ease-in-out duration-300"
							on:click={(_) => filter(showCaseFilter)}
							class:filter-active={idx === filterId}
						>
							{showCaseFilter.name}
						</li>
					{/each}
				</ul>
			</div>
		</Row>

		<Row class="mb-[30px] relative" id="show-case-container" data-aos="fade-up">
			{#each projects as project}
				<div class="lg:w-1/3 md:w-1/2 px-3 mb-3 show-case-item {prefixFilter}-{project.type}">
					<ShowCaseWrap class="group brightness-95 hover:brightness-105">
						<img class="max-w-full h-auto" src="/images/{project.imageUrl}" alt={project.name} />
						<ShowCaseInfo
							class="group-hover:opacity-100 group-hover:before:top-[15px] group-hover:before:left-[15px] group-hover:after:bottom-[15px] group-hover:after:right-[15px]"
						>
							<h4 class="text-[20px] font-semibold text-white/80">{project.name}</h4>
							<p class="text-[14px] uppercase text-white/60">{project.type}</p>
							<div class="text-center z-[4]">
								<a
									href="/images/{project.imageUrl}"
									data-gallery="portfolioGallery"
									class="text-white/70 mx-[2px] text-[28px] inline-block duration-300 hover:text-[#03dac5]"
									title={project.name}
								>
									<i class="fa-solid fa-plus"></i>
								</a>
								<a
									class="text-white/70 mx-[2px] text-[28px] inline-block duration-300 hover:text-[#bb86fc]"
									href={'#'}
									title="Demo"
								>
									<i class="fa-solid fa-link"></i>
								</a>
							</div>
						</ShowCaseInfo>
					</ShowCaseWrap>
				</div>
			{/each}
		</Row>
	</Container>
</Section>
