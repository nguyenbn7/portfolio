<script>
	/**
	 * name of section for identification (aka id)
	 * @type {string}
	 */
	export let name;
</script>

<section class="py-[60px] overflow-hidden" id={name} {...$$restProps}>
	<slot></slot>
</section>
