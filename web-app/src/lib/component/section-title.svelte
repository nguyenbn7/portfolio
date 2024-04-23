<script>
	export { classNames as class };
	/**
	 * @type {string | undefined}
	 */
	let classNames = undefined;
</script>

<div
	class={'section-title pb-[40px] text-center' + (classNames ? ` ${classNames}` : '')}
	{...$$restProps}
>
	<slot />
</div>
