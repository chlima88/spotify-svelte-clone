<script lang="ts">
	import Icon from '@iconify/svelte';
	export let title: string;
	export let img: string = '';
</script>

<div
	class="flex gap-4 items-center pr-2 min-w-[150px] rounded bg-white/10 overflow-hidden hover:bg-white/20 
  transition-all ease duration-300 cursor-pointer overflow-hidden
  group relative"
>
	<div class="w-20 h-20 min-w-[80px] overflow-hidden shadow-2xl shadow-black">
		<slot />
		{#if img}
			<img src={img} class="w-full h-full " alt="now playing" />
		{/if}
	</div>
	<span class="truncate">{title}</span>

	<button
		class="absolute right-0 px-2 opacity-0 text-green-500
    transition-colors transition-opacity duration-300 group-hover:opacity-100 hover:scale-105 hover:text-green-400"
	>
		<Icon icon="material-symbols:play-circle" width="56" />
	</button>
</div>
