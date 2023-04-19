<script>
	import PlayListImages from '$lib/main/PlayListImages.svelte';
	import Card from '$lib/main/Card.svelte';

	import { audioLibrary } from '../data/songs';
</script>

<div class="flex-1 text-white px-8 w-full h-full py-2 main">
	<div class="max-w-[120rem] h-full">
		<h1 class="font-bold text-3xl mb-4">Good Morning</h1>

		<div
			class="grid lg:grid-cols-3 grid-cols-2 grid-flow-row auto-cols-max
			sm:auto-cols-min gap-x-6 gap-y-4 font-bold py-5"
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

<style>
	::-webkit-scrollbar {
		width: 15px;
	}

	.main:hover::-webkit-scrollbar-thumb {
		background-color: #555;
	}
</style>
