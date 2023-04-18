<script lang="ts">
	import Icon from '@iconify/svelte';
	import Playing from '$lib/assets/vr-lunar.jpg';
	import { audioLibrary } from '../data/songs';

	let volume = 0.5;
	let prevVolume = 0;
	let muted = false;
	let paused = true;
	let loop = true;
	let track = 0;
	$: audio = audioLibrary[track];

	$: time = toggleTime ? seektime : elapsed;
	let toggleTime = false;
	let duration = 0;
	let elapsed = 0;
	let seektime = 0;
	$: fmtDuration = fmtTime(duration);
	$: fmtElapsed = fmtTime(elapsed);
	$: progress = isNaN(time / duration) ? 0 : (time / duration) * 100;

	function fmtTime(time: number) {
		const minutes = ~~(time / 60);
		const seconds = Math.floor(time % 60);
		return `${minutes}:${seconds.toString().padStart(2, '0')}`;
	}

	const handlePlay = () => {
		paused = !paused;
	};

	const handleMute = () => {
		if (muted) {
			volume = prevVolume;
		} else {
			prevVolume = volume;
			volume = 0;
		}
		muted = !muted;
	};

	const handleTrackForward = () => {
		if (audioLibrary.length === track + 1) {
			track = 0;
		} else {
			track++;
		}
	};

	const handleTrackBack = () => {
		if (track === 0) {
			elapsed = 0;
		} else {
			track--;
		}
	};

	const handleSeek = (event: Event) => {
		const target = event.currentTarget;

		toggleTime = true;

		function calcSeekTime(event: Event) {
			const { left, width } = target.getBoundingClientRect();
			let p = (event.clientX - left) / width;
			if (p < 0) p = 0;
			if (p > 1) p = 1;

			seektime = p * duration;
		}

		calcSeekTime(event);

		window.addEventListener('pointermove', calcSeekTime);
		window.addEventListener(
			'pointerup',
			() => {
				elapsed = seektime;
				toggleTime = false;
				window.removeEventListener('pointermove', calcSeekTime);
			},
			{ once: true }
		);
	};

	function handleRangeInputChange(event: Event) {
		const min = event.target?.min;
		const max = event.target?.max;
		const val = event.target?.value;

		event.target.style.backgroundSize = ((val - min) * 100) / (max - min) + '% 100%';
	}
</script>

<div
	class="flex h-24 p-4 text-white items-center justify-between bg-zinc-900 border-t border-t-neutral-700/40"
>
	<div class="w-1/4 min-w-[250px]">
		<div class="flex items-center">
			<div class="flex-shrink-0 w-14 h-14">
				<img src={audio.image} class="w-full h-full" alt="now playing" />
			</div>
			<div class="flex flex-col px-5 overflow-hidden">
				<div class="w-full text-sm truncate font-semibold">
					<a href="/">{audio.name}</a>
				</div>
				<div class="w-full text-xs truncate text-white/70 hover:text-white">
					<a href="/">{audio.artist}</a>
				</div>
			</div>
			<button class="px-2 text-white/70 hover:text-white">
				<Icon icon="mdi:cards-heart-outline" width="20" />
			</button>
			<button class="px-2 text-white/70 hover:text-white">
				<Icon icon="mdi:picture-in-picture-bottom-right" width="16" />
			</button>
		</div>
	</div>

	<audio
		src={audio.url}
		bind:currentTime={elapsed}
		bind:duration
		bind:paused
		bind:muted
		bind:volume
		autoplay
		{loop}
		preload="auto"
		on:ended={() => {
			if (track + 1 < audioLibrary.length) {
				handleTrackForward();
			}
			elapsed = 0;
		}}
	/>

	<div class="flex flex-col items-center gap-1 w-2/4 max-w-2xl h-full">
		<div class="flex items-center justify-center">
			<div class="flex items-center gap-1">
				<button class="px-2 text-white/40 hover:text-white">
					<Icon icon="basil:shuffle-outline" width="24" />
				</button>
				<button class="px-2 text-white/70 hover:text-white" on:click={handleTrackBack}>
					<Icon icon="ri:skip-back-fill" width="24" />
				</button>
				<button on:click={handlePlay} class="px-2 text-white hover:scale-105">
					{#if paused}
						<Icon icon="material-symbols:play-circle" width="42" />
					{:else}
						<Icon icon="mdi:pause-circle" width="42" />
					{/if}
				</button>
				<button class="px-2 text-white/70 hover:text-white" on:click={handleTrackForward}>
					<Icon icon="ri:skip-forward-fill" width="24" />
				</button>
				<button
					class="px-2 text-white/40 hover:text-white 
					[&.loop]:text-green-500 [&.loop]:hover:text-green-400"
					class:loop
					on:click={() => {
						loop = !loop;
					}}
				>
					<Icon icon="simple-line-icons:loop" />
				</button>
			</div>
		</div>
		<div class="flex items-center h-full w-full justify-center gap-2 ">
			<span class="text-xs text-white/70">{fmtElapsed}</span>
			<div
				class="flex items-center w-full h-full group"
				on:pointerdown={(event) => handleSeek(event)}
			>
				<div class=" flex items-center h-1 w-full relative">
					<div
						class="flex items-center h-1 w-full rounded-lg bg-zinc-500  overflow-hidden"
						style="--progress-transform: {progress}%"
					>
						<div class="h-1 w-full progress-bar rounded-lg bg-white group-hover:bg-green-500" />
						<div
							class="rounded-full w-3 h-3 absolute bg-white left-[--progress-transform] -translate-x-1/2 invisible group-hover:visible"
						/>
					</div>
				</div>
			</div>
			<span class="text-xs text-white/70">{fmtDuration}</span>
		</div>
	</div>

	<div class="flex flex-col items-end w-1/4 min-w-[280px]">
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
				<button on:click={handleMute} class="text-white/70 hover:text-white">
					{#if volume == 0 || muted}
						<Icon icon="radix-icons:speaker-off" width="16" />
					{:else if volume <= 0.3}
						<Icon icon="radix-icons:speaker-quiet" width="16" />
					{:else if volume <= 0.7}
						<Icon icon="radix-icons:speaker-moderate" width="16" />
					{:else}
						<Icon icon="radix-icons:speaker-loud" width="16" />
					{/if}
				</button>
				<div class="flex items-center h-1 w-24 rounded-lg bg-white/40 group relative">
					<input
						type="range"
						min="0"
						max="1"
						step="0.1"
						bind:value={volume}
						on:input={handleRangeInputChange}
						style="--volume-level: {volume * 100}%"
						class="h-1 w-full rounded accent-white outline-none slider-thumb 
						group-hover:"
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
	.progress-bar {
		transform: translateX(calc(-100% + var(--progress-transform)));
	}
</style>
