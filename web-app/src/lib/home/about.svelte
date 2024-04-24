<script>
	import NguyenPronounciation from '$lib/assets/audio/Nguyen-Pronounciation.mp3';
	import AboutImg from '$lib/assets/images/about-img.webp';
	import Container from '$lib/component/container.svelte';
	import Row from '$lib/component/row.svelte';
	import Section from '$lib/component/section.svelte';

	/**
	 * @param {MouseEvent & { currentTarget: EventTarget & HTMLAnchorElement; }} $event
	 */
	function playAudio($event) {
		const audio = new Audio($event.currentTarget.href);
		audio.play();
	}
</script>

<Section name="about">
	<Container>
		<Row>
			<div class="xl:w-1/2 lg:w-7/12 px-3" data-aos="fade-right">
				<img src={AboutImg} class="max-w-full h-auto align-middle" alt="Profile" />
			</div>
			<div class="xl:w-1/2 lg:w-7/12 pt-12 lg:pt-0 px-3">
				<h3 class="font-normal text-[34px] text-white/80" data-aos="fade-up">About Me</h3>
				<p class="text-white/70" data-aos="fade-up">
					Hi there! My name is <a
						class="text-white/80 font-bold mr-1"
						href="https://en.wikipedia.org/wiki/Nguyen#Pronunciation">Nguyên</a
					>
					<a
						href={NguyenPronounciation}
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
		</Row>
	</Container>
</Section>
