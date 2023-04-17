<script>
	import Icon from '@iconify/svelte';
	import Playing from '$lib/assets/vr-lunar.jpg';
	import { audioList } from '../data/songs';
</script>

<div
	class="flex h-24 px-4 text-white items-center justify-between bg-zinc-900 border-t border-t-neutral-700/40"
>
	<div class="flex items-center">
		<div class="w-14 h-14">
			<img src={Playing} class="w-full h-full" alt="now playing" />
		</div>
		<div class="flex flex-col px-5">
			<div class="text-sm font-semibold">
				<a href="/">Lunar</a>
			</div>
			<div class="text-xs text-white/70 hover:text-white">
				<a href="/">Virtual Riot</a>
			</div>
		</div>
		<button class="px-2 text-white/70 hover:text-white">
			<Icon icon="mdi:cards-heart-outline" width="20" />
		</button>
		<button class="px-2 text-white/70 hover:text-white">
			<Icon icon="mdi:picture-in-picture-bottom-right" width="16" />
		</button>
	</div>

	<div class="flex flex-col items-center gap-1">
		<div class="flex items-center justify-center">
			<div class="flex items-center gap-1">
				<button class="px-2 text-white/40 hover:text-white">
					<Icon icon="basil:shuffle-outline" width="24" />
				</button>
				<button class="px-2 text-white/70 hover:text-white">
					<Icon icon="ri:skip-back-fill" width="24" />
				</button>
				<button class="px-2 text-white hover:scale-105">
					<Icon icon="material-symbols:play-circle" width="42" />
					{#if false}
						<Icon icon="mdi:pause-circle" width="42" />
					{/if}
				</button>
				<button class="px-2 text-white/70 hover:text-white">
					<Icon icon="ri:skip-forward-fill" width="24" />
				</button>
				<button class="px-2 text-white/40 hover:text-white">
					<Icon icon="simple-line-icons:loop" />
				</button>
			</div>
		</div>
		<div class="flex items-center justify-center gap-2 relative">
			<span class="text-xs text-white/70">2:00</span>
			<div class="flex items-center h-1 w-[400px] rounded-lg bg-white/40 group">
				<div class="h-1 w-[50%] rounded-lg bg-white group-hover:bg-green-500" />
				<div
					class="rounded-full w-3 h-3 absolute bg-white left-[49%] invisible group-hover:visible"
				/>
			</div>
			<span class="text-xs text-white/70">4:00</span>
		</div>
	</div>

	<div class="flex flex-col items-center">
		<div class="flex items-center justify-center">
			<div class="flex items-center gap-3">
				<button class="text-white/70 hover:text-white">
					<Icon icon="tabler:microphone-2" width="18" />
				</button>
				<button class="text-white/70 hover:text-white">
					<Icon icon="carbon:row" width="20" />
				</button>
				<button class="text-white/70 hover:text-white">
					<Icon icon="lucide:monitor-speaker" width="20" />
				</button>
				<button class="text-white/70 hover:text-white">
					<Icon icon="radix-icons:speaker-loud" width="16" />
				</button>
				<div class="flex items-center h-1 w-24 rounded-lg bg-white/40 group relative">
					<div class="h-1 w-[80%] rounded-lg bg-white group-hover:bg-green-500" />
					<div
						class="rounded-full w-3 h-3 absolute bg-white left-[79%] invisible group-hover:visible"
					/>
				</div>
			</div>
		</div>
		<div class="flex items-center justify-center" />
	</div>
</div>

<style>
	a:hover {
		text-decoration: underline;
	}
	button {
		cursor: default;
	}
</style>
