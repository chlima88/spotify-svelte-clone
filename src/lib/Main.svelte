<script>
	import Icon from '@iconify/svelte';
	import PlayListImages from '$lib/main/PlayListImages.svelte';
	import Card from '$lib/main/Card.svelte';

	import { audioLibrary } from '../data/songs';
</script>

<div class="text-white bg-gradient-to-b from-zinc-800 to-zinc-950 w-full px-8">
	<div class="flex h-16 items-center justify-between mb-4">
		<div class="flex gap-4">
			<div class="text-4xl text-white/50 bg-zinc-950 rounded-full hover:text-white">
				<Icon icon="mdi:chevron-left" />
			</div>
			<div class="text-4xl text-white/50 bg-zinc-950 rounded-full hover:text-white">
				<Icon icon="mdi:chevron-right" />
			</div>
		</div>
		<div class="flex gap-4">
			<button
				class="border border-zinc-600 font-bold px-4 py-1.5 rounded-full text-sm hover:scale-105 hover:border-white"
				>Faça upgrade</button
			>
			<button
				class="bg-black/75 flex items-center gap-2 font-bold p-[2px] rounded-2xl text-sm hover:bg-zinc-800"
			>
				<div class="bg-zinc-600 rounded-full">
					<Icon icon="mdi:user-outline" width="28" />
				</div>
				<span>Charles</span>
				<Icon icon="material-symbols:arrow-drop-down" width="24" />
			</button>
		</div>
	</div>

	<div class="max-w-[120rem]">
		<h1 class="font-bold text-3xl mb-4">Good Morning</h1>

		<div
			class="grid grid-cols-3 grid-flow-row auto-cols-max sm:auto-cols-min gap-x-6 gap-y-4 font-bold"
		>
			<Card title="Dubstep">
				<PlayListImages />
			</Card>

			{#each audioLibrary as audio}
				<Card title={audio.artist} img={audio.image} />
			{/each}
		</div>
	</div>
</div>
