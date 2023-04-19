<script>
	import Icon from '@iconify/svelte';
</script>

<div class="flex-1 sticky top-0 mb-4 px-8 right-0 bg-zinc-800 z-10">
	<div class="flex h-16 items-center justify-between ">
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
</div>

<style>
</style>
