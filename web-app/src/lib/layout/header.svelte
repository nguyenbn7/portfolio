<script>
	/**
	 * @type {number}
	 */
	let scrollY;
</script>

<svelte:window bind:scrollY />
<header class="w-full flex items-center bg-transparent z-[999] max-lg:h-[60px] h-[70px]">
	<div class="container px-10 w-full flex justify-between">
		<h1
			class="text-[30px] py-[6px] leading-none font-bold tracking-[2px] uppercase text-white/80 hover:text-white/95 transition-all duration-500"
		>
			<a href="/">
				<i class="fa-solid fa-house"></i>
			</a>
		</h1>
		<nav>
			<ul class="flex items-center">
				<li class="relative ml-[30px] hover:text-white/70">
					<a href={'#about'}>About</a>
				</li>
				<li class="relative ml-[30px] hover:text-white/70">
					<a href={'#project'}>Projects</a>
				</li>
			</ul>
			<button class="hidden">
				<i class="fa-solid fa-bars"></i>
			</button>
		</nav>
	</div>
</header>
