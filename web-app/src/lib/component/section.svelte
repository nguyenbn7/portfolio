<script>
	/**
	 * name of section for identification (aka id)
	 * @type {string}
	 */
	export let name;
</script>

<section class="mt-[60px] py-[60px] overflow-hidden" id={name} {...$$restProps}>
	<slot></slot>
</section>
