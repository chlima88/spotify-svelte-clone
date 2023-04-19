<script>
	import { OverlayScrollbarsComponent } from 'overlayscrollbars-svelte';
	import Sidebar from '$lib/Sidebar.svelte';
	import Controls from '$lib/Controls.svelte';
	import TopBar from '$lib/TopBar.svelte';
	import '../app.css';
</script>

<div class="flex flex-col max-w-screen max-h-screen text-white">
	<div class="flex w-full h-screen overflow-hidden mainview">
		<Sidebar />
		<div
			class="flex flex-col w-full
			bg-gradient-to-b from-zinc-800 to-zinc-950 mainview "
		>
			<OverlayScrollbarsComponent
				element="mainview"
				options={{
					scrollbars: {
						theme: 'os-theme-light',
						autoHide: 'leave'
					}
				}}
			>
				<TopBar />
				<slot />
			</OverlayScrollbarsComponent>
		</div>
	</div>
	<Controls />
</div>

<style>
</style>
