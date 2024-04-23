<script>
	import Container from '$lib/component/container.svelte';
	import Row from '$lib/component/row.svelte';
	import SectionHeader from '$lib/component/section-header.svelte';
	import SectionTitle from '$lib/component/section-title.svelte';
	import Section from '$lib/component/section.svelte';
	import ShowCaseInfo from '$lib/home/show-case-info.svelte';
	import ShowCaseWrap from '$lib/home/show-case-wrap.svelte';

	const showCaseFilters = [
		{
			name: 'all',
			by: '*'
		},
		{
			name: 'app',
			by: '.show-case-app'
		},
		{
			name: 'card',
			by: '.show-case-card'
		},
		{
			name: 'web',
			by: '.show-case-web'
		}
	];

	const projects = [
		{
			name: 'App 1',
			image: 'portfolio-1.jpg',
			type: 'app'
		},
		{
			name: 'Web 3',
			image: 'portfolio-2.jpg',
			type: 'web'
		},
		{
			name: 'App 2',
			image: 'portfolio-3.jpg',
			type: 'app'
		},
		{
			name: 'Card 2',
			image: 'portfolio-4.jpg',
			type: 'card'
		},
		{
			name: 'Web 2',
			image: 'portfolio-5.jpg',
			type: 'web'
		},
		{
			name: 'App 3',
			image: 'portfolio-6.jpg',
			type: 'app'
		},
		{
			name: 'Card 1',
			image: 'portfolio-7.jpg',
			type: 'card'
		},
		{
			name: 'Card 3',
			image: 'portfolio-8.jpg',
			type: 'card'
		},
		{
			name: 'Web 3',
			image: 'portfolio-9.jpg',
			type: 'web'
		}
	];
</script>

<h1 class="text-[64px] font-bold w-full text-center">Web tools</h1>

<Section name="show-case">
	<Container>
		<SectionTitle>
			<SectionHeader>Show case</SectionHeader>
			<p>
				Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
				Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit
				alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
			</p>
		</SectionTitle>

		<Row data-aos="fade-up">
			<div class="max-w-full w-full px-3 flex justify-center">
				<ul
					class="flex justify-center mx-auto mt-0 mb-[35px] py-[8px] px-[20px] shadow-sm text-center rounded-[50px] bg-slate-200"
					id="show-case-filter"
				>
					{#each showCaseFilters as filter, idx}
						<li
							class="cursor-pointer inline-block pt-[10px] pb-[8px] px-[15px] text-[14px] font-semibold leading-4 uppercase mb-[5px] transition-all ease-in-out duration-300"
							data-filter={filter.by}
							class:filter-active={!idx}
						>
							{filter.name}
						</li>
					{/each}
				</ul>
			</div>
		</Row>

		<Row class="mb-[30px]" id="show-case-container" data-aos="fade-up">
			{#each projects as project}
				<div class="lg:w-1/3 md:w-1/2 px-3 mb-3 show-case-{project.type}">
					<ShowCaseWrap class="group">
						<img class="max-w-full h-auto" src="/images/{project.image}" alt={project.name} />
						<ShowCaseInfo
							class="group-hover:opacity-100 group-hover:before:top-[15px] group-hover:before:left-[15px] group-hover:after:bottom-[15px] group-hover:after:right-[15px]"
						>
							<h4 class="text-[20px] text-white font-semibold">{project.name}</h4>
							<p class="text-white text-[14px] uppercase">{project.type}</p>
							<div class="text-center z-[4]">
								<a
									href="/images/{project.image}"
									data-gallery="portfolioGallery"
									class="text-white mx-[2px] text-[28px] inline-block duration-300 hover:text-[#4ae3c6]"
									title={project.name}
								>
									<i class="fa-solid fa-plus"></i>
								</a>
								<a
									class="text-white mx-[2px] text-[28px] inline-block duration-300 hover:text-[#4ae3c6]"
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

<style lang="postcss">
	.filter-active {
		color: #1bab91;
	}
</style>
