<script lang="ts">
	import Icon from '@iconify/svelte';
	import SpotifyLogo from '$lib/assets/spoticlone.png';
	import MenuItem from '$lib/sidebar/MenuItem.svelte';
	import Menu from '$lib/sidebar/Menu.svelte';
	export let classes: string = '';
</script>

<nav class="{classes} flex flex-col w-64 bg-black text-white/60 px-6 overflow-y-hidden">
	<div class="flex align-center justify-center w-40 py-6 mb-2">
		<img src={SpotifyLogo} alt="logo" />
	</div>

	<Menu>
		<MenuItem title="Home" path="/">
			<Icon icon="fluent:home-24-filled" />
		</MenuItem>

		<MenuItem title="Search" path="/search">
			<Icon icon="fe:search" />
		</MenuItem>

		<MenuItem title="Your Library" path="/collection">
			<Icon icon="bx:library" />
		</MenuItem>
	</Menu>

	<div class="text-sm">
		<MenuItem title="New Playlist" classes="py-2" path="/newplaylist">
			<Icon icon="mdi:plus-box" />
		</MenuItem>

		<MenuItem title="Liked Songs" classes="py-2" path="/liked">
			<Icon icon="mdi:cards-heart" />
		</MenuItem>
	</div>

	<div class="h-[1px] bg-white/10 mb-2" />

	<div class="playlists flex-1 overflow-y-scroll">
		<div class="flex flex-col text-sm h-[130px]">
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
	</div>
</nav>

<style>
	a:hover {
		cursor: default;
	}

	::-webkit-scrollbar {
		width: 10px;
	}

	.playlists:hover::-webkit-scrollbar-thumb {
		background: #555;
	}
</style>
