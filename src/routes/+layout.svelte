<script>
	import Nav from '$lib/Nav.svelte';
	import Header from '$lib/Header.svelte';
	import '../app.css';
</script>

<main>
	<Nav />
	<Header />
	<slot />
</main>
