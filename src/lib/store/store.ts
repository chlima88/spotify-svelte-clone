import { writable } from 'svelte/store';

function createIndex() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		set: (value: number) => set(value),
		increment: () => update((value: number) => value + 1),
		decrement: () => update((value: number) => value - 1),
		reset: () => set(0)
	};
}

function togglePaused() {
	const { subscribe, update, set } = writable(true);

	return {
		subscribe,
		set: (value: boolean) => set(value),
		toggle: () => update((value: boolean) => (value = !value))
	};
}

export const currentTrackIndex = createIndex();
export const paused = togglePaused();
