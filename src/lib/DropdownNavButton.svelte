<script>
	import { fly } from 'svelte/transition';
	export let label = 'Menu';
	/**
	 * @type {any[]}
	 */
	export let items = [];
	let showDropdown = false;
	let flyout; 
	/**
	 * @param {{ target: { closest: (arg0: string) => any; }; }} event
	 */
	function handleClickOutside(event) {
		if (!event.target.closest('.dropdown-container')) {
			showDropdown = false;
		}
	}

	// Attach the event listener when the component mounts
	import { onMount } from 'svelte';
	onMount(() => {
		window.addEventListener('click', handleClickOutside);
		return () => {
			window.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<div class="relative dropdown-container">
	<button
		type="button"
		class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
		aria-expanded="false"
		on:click={() => (showDropdown = !showDropdown)}
	>
		{label}
		<svg
			class="h-5 w-5 flex-none text-gray-400"
			viewBox="0 0 20 20"
			fill="currentColor"
			aria-hidden="true"
		>
			<path
				fill-rule="evenodd"
				d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
				clip-rule="evenodd"
			/>
		</svg>
	</button>

	{#if showDropdown}
		<!-- Dropdown Content -->
		<div
		bind:this={flyout}
		transition:fly={{ y: 1, duration: 200, easing: (t) => t }}
			class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 "
			style=""
		>
			<div class="p-4">
				<!-- Loop through items and render -->
				{#each items as item}
					<div
						class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
					>
						<div
							class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
						>
							<svg
								class="h-6 w-6 text-gray-600 group-hover:text-emerald-600"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
								/><path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
								/></svg
							>
						</div>
						<div class="flex-auto">
							<a href={item.link} class="block font-semibold text-gray-900"
								>{item.title}
								<span class="absolute inset-0" /></a
							>
							<p class="mt-1 text-gray-600">{item.desc}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/if}
</div>
