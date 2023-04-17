<script lang="ts">
	import { page } from '$app/stores';
	export let title: string = '';
	export let classes: string = '';
	export let path: string = '/';
	$: active = $page.url.pathname == path ? 'text-white' : '';
</script>

<a href={path}>
	<div
		class="flex gap-3 items-center rounded-md cursor-pointer {active} hover:text-white transition-all ease-linear duration-300 {classes}"
	>
		<div class="text-3xl">
			<slot />
		</div>
		<span class="font-semibold">{title}</span>
	</div>
</a>
