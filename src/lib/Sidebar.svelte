<script>
	import Icon from '@iconify/svelte';
	import SpotifyLogo from '$lib/assets/Spotifylogo.png';
</script>

<nav class="flex flex-col w-64 bg-black text-white/60 px-6 ">
	<div class="flex align-center justify-center w-32 py-6 mb-2">
		<img src={SpotifyLogo} alt="logo" />
	</div>

	<div class="flex flex-col gap-2 text-sm mb-6">
		<div
			class="flex gap-3 items-center rounded-md cursor-pointer hover:text-white transition-all ease-linear duration-300"
		>
			<div class="text-3xl">
				<Icon icon="fluent:home-24-filled" />
			</div>
			<span class="font-semibold">Home</span>
		</div>
		<div
			class="flex gap-3 items-center rounded-md cursor-pointer hover:text-white transition-all ease-linear duration-300"
		>
			<div class="text-3xl">
				<Icon icon="fe:search" />
			</div>
			<span class="font-semibold">Search</span>
		</div>
		<div
			class="flex gap-3 items-center rounded-md cursor-pointer hover:text-white transition-all ease-linear duration-300"
		>
			<div class="text-3xl">
				<Icon icon="bx:library" />
			</div>
			<span class="font-semibold">Your Library</span>
		</div>
	</div>

	<div class="text-sm">
		<div
			class="flex gap-3 items-center py-2 rounded-md cursor-pointer hover:text-white transition-all ease-linear duration-300"
		>
			<div class="text-3xl">
				<Icon icon="mdi:plus-box" />
			</div>
			<span class="font-semibold">New Playlist</span>
		</div>
		<div
			class="flex gap-3 items-center py-2 rounded-md cursor-pointer hover:text-white transition-all ease-linear duration-300"
		>
			<div class="text-3xl">
				<Icon icon="mdi:cards-heart" />
			</div>
			<span class="font-semibold">Liked Songs</span>
		</div>
	</div>

	<div class="h-[1px] bg-white/10 mb-2" />

	<div class="text-sm">
		<a href="/"><span class="block leading-8  hover:text-white">Praise</span></a>
		<a href="/"><span class="block leading-8  hover:text-white">Grooveria</span></a>
		<a href="/"><span class="block leading-8  hover:text-white">Have a good night</span></a>
		<a href="/"><span class="block leading-8  hover:text-white">Anime</span></a>
		<a href="/"><span class="block leading-8  hover:text-white">This is Jamiroquai</span></a>
		<a href="/"><span class="block leading-8  hover:text-white">Love</span></a>
		<a href="/"><span class="block leading-8  hover:text-white">NCS Releases</span></a>
		<a href="/"><span class="block leading-8  hover:text-white">This is Beyoncé</span></a>
		<a href="/"><span class="block leading-8  hover:text-white">Deep focus</span></a>
		<a href="/"><span class="block leading-8  hover:text-white">Dubstep</span></a>
	</div>
</nav>

<style>
	a:hover {
		cursor: default;
	}
</style>
