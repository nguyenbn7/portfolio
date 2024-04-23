<script>
	export { classNames as class };
	/**
	 * @type {string | undefined}
	 */
	let classNames = undefined;
</script>

<h2
	class={'block text-[36px] font-medium mb-[20px] leading-5' + (classNames ? ` ${classNames}` : '')}
>
	<slot></slot>
</h2>
