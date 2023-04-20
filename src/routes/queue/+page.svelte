<script>
	import { audioLibrary } from '$lib/data/songs';
</script>

<div class="px-10">
	<h1 class="text-2xl font-bold">Queue</h1>
	<p class="text-zinc-400 font-semibold mb-4">Playing now</p>
	<div class="grid grid-cols-3 queue-grid gap-2">
		{#each audioLibrary as audio, index}
			<div class="flex items-center gap-3">
				<span class="w-4 text-center text-zinc-400 ">{index + 1}</span>
				<div class="flex items-center justify-center w-10 h-10">
					<img class="w-full" src={audio.image} alt="" />
				</div>
				<div class="flex flex-col">
					<span class="font-semibold">{audio.name}</span>
					<span class="text-zinc-400 text-xs">{audio.artist}</span>
				</div>
			</div>
			<span class="flex items-center text-zinc-400 text-xs">Endless (Remix)</span>
			<span class="flex items-center text-zinc-400 text-sm">5:34</span>
		{/each}
	</div>
</div>

<style>
	.queue-grid {
		grid-template-columns: 2fr repeat(2, 1fr);
	}
</style>
