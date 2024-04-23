<script>
	import BackToTop from '$lib/component/back-to-top.svelte';
	import ShowCase from '$lib/home/show-case.svelte';
	import { loadSlim } from '@tsparticles/slim';
	import Particles, { particlesInit } from '@tsparticles/svelte';
	import { onMount } from 'svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	/**
	 * @type {typeof Particles}
	 */
	let ParticlesComponent;

	/**
	 * @type {import("@tsparticles/engine").RecursivePartial<import("@tsparticles/engine").IOptions>}
	 */
	let particlesConfig = {
		particles: {
			number: {
				value: 175
			},
			color: {
				value: ['#fbb03b', '#ffffff']
			},
			shape: {
				type: 'circle'
			},
			opacity: {
				value: {
					min: 0.5,
					max: 0.75
				},
				animation: {
					enable: true,
					speed: 1,
					sync: false,
					mode: 'random',
					startValue: 'random'
				}
			},
			size: {
				value: {
					min: 0.01,
					max: 5
				},
				animation: {
					enable: true,
					speed: 2.5,
					sync: false,
					mode: 'random',
					startValue: 'random'
				}
			},
			move: {
				enable: true,
				speed: 0.15,
				direction: 'none',
				random: true,
				straight: false,
				outModes: 'out',
				attract: {
					enable: false,
					rotate: {
						x: 600,
						y: 1200
					}
				}
			}
		},
		interactivity: {
			detect_on: 'canvas',
			events: {
				onHover: {
					enable: true,
					mode: 'bubble'
				},
				onClick: {
					enable: true,
					mode: 'push'
				},
				resize: {
					enable: true
				}
			},
			modes: {
				grab: {
					distance: 400,
					line_linked: {
						opacity: 1
					}
				},
				bubble: {
					distance: 83.91608391608392,
					size: 1,
					duration: 3,
					opacity: 1,
					speed: 3
				},
				repulse: {
					distance: 200,
					duration: 0.4
				},
				push: {
					particles_nb: 2
				},
				remove: {
					particles_nb: 2
				}
			}
		}
	};

	/**
	 * @param {CustomEvent<any>} $event
	 */
	function onParticlesLoaded($event) {
		const particlesContainer = $event.detail.particles;
	}

	/** {@link https://github.com/tsparticles/svelte/?tab=readme-ov-file#ssr} */
	void particlesInit(async (engine) => {
		await loadSlim(engine);
	});

	onMount(async () => {
		const module = await import('@tsparticles/svelte');

		ParticlesComponent = module.default;
	});
</script>

<svelte:head>
	<title>{data.appName} | Home</title>
</svelte:head>

<svelte:component
	this={ParticlesComponent}
	id="background-landing"
	class="absolute size-full -z-10"
	options={particlesConfig}
	on:particlesLoaded={onParticlesLoaded}
/>

<h1 class="text-[64px] font-bold w-full text-center">Web tools</h1>

<ShowCase />
<BackToTop />

<style lang="postcss">
	/* :global(html) {
		@apply bg-[#212121];
	} */
</style>
