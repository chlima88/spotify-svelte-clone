<script>
	import Icon from '@iconify/svelte';

	let showmenu = false;
</script>

<header class="header flex-1 sticky top-0 mb-4 px-8 right-0 bg-zinc-800 z-10">
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
				class="bg-black/75 flex items-center gap-2 font-bold p-[2px] rounded-2xl text-sm hover:bg-zinc-800 relative"
				on:click={() => (showmenu = !showmenu)}
			>
				<div class="bg-zinc-600 rounded-full">
					<Icon icon="mdi:user-outline" width="28" />
				</div>
				<span>Charles</span>
				<Icon icon="material-symbols:arrow-drop-down" width="24" />

				<div
					class=" flex flex-col items-center absolute mt-10 right-1 top-1 w-40 rounded p-2 bg-zinc-800 shadow-lg shadow-zinc-900/80 hidden"
					class:showmenu
				>
					<div class="flex items-center p-2 w-full hover:bg-zinc-700">
						<div class="flex items-center gap-2 w-full">
							<Icon icon="mdi:github" width="24" />
							<a
								href="https://github.com/chlima88/spotify-svelte-clone"
								target="_blank"
								rel="noreferrer"
							>
								Github</a
							>
						</div>
						<Icon icon="ooui:new-window-ltr" width="16" />
					</div>
					<div class="flex items-center p-2 w-full hover:bg-zinc-700">
						<div class="flex items-center gap-2 w-full">
							<Icon icon="mdi:linkedin" width="24" />
							<a href="https://linkedin.com/in/charlesjlima" target="_blank" rel="noreferrer">
								Linkedin</a
							>
						</div>
						<Icon icon="ooui:new-window-ltr" width="16" />
					</div>
				</div>
			</button>
		</div>
	</div>
</header>

<style>
	.showmenu {
		display: block;
	}
</style>
