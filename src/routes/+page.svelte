<script>
	import Sidebar from '$lib/Sidebar.svelte';
	import Controls from '$lib/Controls.svelte';
	import Main from '$lib/Main.svelte';
	import '../app.css';
</script>

<div class="flex flex-col w-full h-screen">
	<div class="flex flex-1">
		<Sidebar />
		<Main />
	</div>
	<Controls />
</div>
