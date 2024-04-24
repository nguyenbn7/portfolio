<script>
	export { classNames as class };
	/**
	 * @type {string | undefined}
	 */
	let classNames = undefined;
</script>

<div
	class={'opacity-0 absolute top-0 left-0 right-0 bottom-0 text-center z-[3] transition-all ease-in-out duration-300 flex flex-col justify-center items-center before:block before:content-normal before:size-[48px] before:absolute before:top-[35px] before:left-[35px] before:border-solid before:border-t-[3px] before:border-l-[3px] before:border-t-white before:border-l-white before:transition-all before:duration-500 before:ease-linear before:delay-0 after:block after:content-normal after:size-[48px] after:absolute after:bottom-[35px] after:right-[35px] after:border-solid after:border-b-[3px] after:border-r-[3px] after:border-b-white after:border-r-white after:transition-all after:duration-500 after:ease-linear after:delay-0' +
		(classNames ? ` ${classNames}` : '')}
>
	<slot></slot>
</div>
