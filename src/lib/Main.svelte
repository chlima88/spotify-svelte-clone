<script>
	import Icon from '@iconify/svelte';
	import AlbumImg1 from '$lib/assets/trivecta.png';
	import AlbumImg2 from '$lib/assets/akiracomplex.jpg';
	import AlbumImg3 from '$lib/assets/vr-lunar.jpg';
	import AlbumImg4 from '$lib/assets/illenium.jpg';
	import PlayListImages from '$lib/main/PlayListImages.svelte';
	import Card from '$lib/main/Card.svelte';
</script>

<div class="text-white bg-gradient-to-b from-zinc-900 to-zinc-950 w-full px-8">
	<div class="flex h-16 items-center justify-between mb-4">
		<div class="flex gap-4">
			<div class="text-3xl text-white/50 bg-zinc-950 rounded-full hover:text-white">
				<Icon icon="mdi:chevron-left" />
			</div>
			<div class="text-3xl text-white/50 bg-zinc-950 rounded-full hover:text-white">
				<Icon icon="mdi:chevron-right" />
			</div>
		</div>
		<div class="flex gap-4">
			<button
				class="border border-zinc-600 font-bold px-4 py-1.5 rounded-full text-sm hover:scale-105 hover:border-white"
				>Faça upgrade</button
			>
			<button
				class="bg-black/90 flex items-center gap-2 font-bold p-[2px] rounded-2xl text-sm hover:bg-zinc-800"
			>
				<div class="bg-zinc-600 rounded-full">
					<Icon icon="mdi:user-outline" width="28" />
				</div>
				<span>Charles</span>
				<Icon icon="material-symbols:arrow-drop-down" width="24" />
			</button>
		</div>
	</div>

	<h1 class="font-dm-sans font-bold text-3xl mb-4">Good Morning</h1>

	<div class="grid grid-cols-3 auto-cols-fr gap-4 font-bold">
		<Card title="Dubstep">
			<PlayListImages />
		</Card>
		<Card title="Trivecta" img={AlbumImg1} />
		<Card title="Akira Complex" img={AlbumImg2} />
		<Card title="Virtual Riot" img={AlbumImg3} />
		<Card title="Illenium" img={AlbumImg4} />
	</div>
</div>
