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
	 * @type {HTMLElement}
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
