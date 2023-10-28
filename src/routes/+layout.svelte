<script>
	import Nav from '$lib/nav.svelte';
	import Header from '$lib/header.svelte';
	import '../app.css';
</script>

<main>
	<Nav />
	<Header />
	<slot />
</main>
