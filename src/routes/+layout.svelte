<script>
	import Nav from '$lib/Nav.svelte';
	import Header from '$lib/Header.svelte';
	import Features from '$lib/Features.svelte';
	import FAQ from '$lib/FAQ.svelte';
	import '../app.css';
</script>

<main>
	<Nav />
	<Header />
	<Features />
	<FAQ />
	<slot />
</main>
