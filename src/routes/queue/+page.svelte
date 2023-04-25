<script>
	import { audioLibrary } from '$lib/data/songs';
	import { currentTrackIndex } from '$lib/store/store.js';
</script>

<div class="px-4 lg:px-8 py-4">
	<h1 class="text-2xl font-bold mb-4">Queue</h1>
	<h2 class="text-zinc-400 font-semibold mb-1">Now playing</h2>
	<div class="flex flex-col">
		<div class="grid grid-cols-3 queue-grid gap-3 px-4 py-2 rounded hover:bg-white/10">
			<div class="flex items-center gap-3">
				<span class="w-4 text-center text-green-400 ">1</span>
				<div class="flex items-center justify-center w-10 h-10">
					<img class="w-full" src={audioLibrary[$currentTrackIndex].image} alt="" />
				</div>
				<div class="flex flex-col">
					<span class="text-green-400 font-semibold">{audioLibrary[$currentTrackIndex].name}</span>
					<span class="text-zinc-400 text-xs">{audioLibrary[$currentTrackIndex].artist}</span>
				</div>
			</div>
			<span class="flex items-center text-zinc-400 text-xs">Endless (Remix)</span>
			<span class="flex items-center text-zinc-400 text-sm"
				>{audioLibrary[$currentTrackIndex].duration}</span
			>
		</div>
		<h2 class="col-span-3 text-zinc-400 font-semibold mt-10 mb-3">Next up</h2>
		{#each audioLibrary.slice($currentTrackIndex + 1) as audio, index}
			<div class="grid grid-cols-3 queue-grid gap-3 px-4 py-2 rounded hover:bg-white/10">
				<div class="flex items-center gap-3">
					<span class="w-4 text-center text-zinc-400 ">{index + 2}</span>
					<div class="flex items-center justify-center w-10 h-10">
						<img class="w-full" src={audio.image} alt="" />
					</div>
					<div class="flex flex-col">
						<span class="font-semibold">{audio.name}</span>
						<span class="text-zinc-400 text-xs">{audio.artist}</span>
					</div>
				</div>
				<span class="flex items-center text-zinc-400 text-xs">Album name</span>
				<span class="flex items-center text-zinc-400 text-sm">{audio.duration}</span>
			</div>
		{/each}
	</div>
</div>

<style>
	.queue-grid {
		grid-template-columns: 2fr repeat(2, 1fr);
	}
</style>
