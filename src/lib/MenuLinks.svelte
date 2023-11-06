<!-- NavButton.svelte -->
<script lang="ts">
	export let href: string;
	export let label: string;
</script>

<a {href} class="text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50">
	{label}
</a>
