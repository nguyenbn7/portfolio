<script>
	/**
	 * @type {string | undefined}
	 */
	export let id = undefined;

	export { classNames as class };
	/**
	 * @type {string | undefined}
	 */
	let classNames = undefined;
</script>

<div
	class={'flex flex-wrap' + (classNames ? ` ${classNames}` : '')}
	{...$$restProps}
	{id}
	{...$$restProps}
>
	<slot></slot>
</div>
