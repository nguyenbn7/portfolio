<script>
	import { expoInOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	import { fade } from 'svelte/transition';

	/**
	 * Millisecond
	 * @default 0
	 */
	export let delay = 0;
	/**
	 * Millisecond
	 * @default 400
	 */
	export let duration = 400;
	/**
	 * See {@link https://svelte.dev/docs/svelte-easing}
	 * @default expoInOut
	 */
	export let easing = expoInOut;
	/**
	 * @default 50px
	 */
	export let showThreshold = 50;

	/**
	 * @type {number}
	 */
	let scrollY;
	const a = tweened(0);

	/**
	 * @param {number} delay
	 * @param {number} duration
	 * @param {(t: number) => number} easing
	 */
	async function backToTop(delay, duration, easing) {
		a.set(scrollY, { duration: 0 });

		const unsubscribe = a.subscribe((value) => {
			window.scrollTo(0, value);
		});

		await a.set(0, { delay, duration, easing });

		return unsubscribe();
	}
</script>

<svelte:window bind:scrollY />

<a
	href={'javascript:;'}
	on:click={() => backToTop(delay, duration, easing)}
	class="fixed bottom-[15px] right-[15px] z-[996] size-[40px] text-white/80 bg-primary-default hover:bg-primary-hover rounded-[50px] animate-bounce flex items-center justify-center text-[16px] leading-0"
	class:invisible={scrollY <= showThreshold}
	transition:fade={{ duration: 1000 }}
>
	<slot />
</a>
