<!-- NavButton.svelte -->
<script>
	export let href;
	export let label;
</script>

<a {href} class="text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50">
	{label}
</a>
