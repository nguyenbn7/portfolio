<script>
	import NguyenPronounciation from '$lib/assets/audio/Nguyen-Pronounciation.mp3';
	import AboutImg from '$lib/assets/images/about-img.jpg';
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
						class="text-white/80 font-bold"
						href="https://en.wikipedia.org/wiki/Nguyen#Pronunciation">Nguyên</a
					>
					<a href={NguyenPronounciation} class="text-[#03dac5]" on:click|preventDefault={playAudio}
						><i class="fa-solid fa-volume-high"></i></a
					>
				</p>
				<div class="mt-[44px]" data-aos="fade-up">
					<span class="text-[48px] float-left text-[#bb86fc]">
						<i class="fa-solid fa-receipt"></i>
					</span>
					<h4 class="text-[22px] font-medium ml-[60px] text-white/80">Corporis voluptates sit</h4>
					<p class="text-[15px] ml-[60px] text-white/70">
						Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip
					</p>
				</div>

				<div class="mt-[44px]" data-aos="fade-up" data-aos-delay="100">
					<span class="text-[48px] float-left text-[#bb86fc]">
						<i class="fa-solid fa-cube"></i>
					</span>
					<h4 class="text-[22px] font-medium ml-[60px] text-white/80">Ullamco laboris nisi</h4>
					<p class="text-[15px] ml-[60px] text-white/70">
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
					</p>
				</div>

				<div class="mt-[44px]" data-aos="fade-up" data-aos-delay="200">
					<span class="text-[48px] float-left text-[#bb86fc]">
						<i class="fa-solid fa-bolt"></i>
					</span>
					<h4 class="text-[22px] font-medium ml-[60px] text-white/80">Ullamco laboris nisi</h4>
					<p class="text-[15px] ml-[60px] text-white/70">
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
					</p>
				</div>
			</div>
		</Row>
	</Container>
</Section>
