<script>
	export { classNames as class };
	/**
	 * @type {string | undefined}
	 */
	let classNames = undefined;
</script>

<div
	class={'relative overflow-hidden z-[1] bg-black/60 before:content-normal before:bg-black/50 before:absolute before:top-[30px] before:left-[30px] before:bottom-[30px] before:right-[30px] before:transition-all before:ease-in-out before:duration-300 before:z-[2] before:opacity-0 before:hover:top-0 before:hover:left-0 before:hover:right-0 before:hover:bottom-0 before:hover:opacity-100' +
		(classNames ? ` ${classNames}` : '')}
>
	<slot></slot>
</div>
