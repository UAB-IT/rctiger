<script>
	import Nav from '$lib/Menu.svelte';
	import Header from '$lib/Banner.svelte';
	import Features from '$lib/Features.svelte';
	import FAQ from '$lib/FAQ.svelte';
	import News from '$lib/News.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../app.css';
</script>

<main>
	<News />
	<Nav />
	<Header />
	<Features />
	<FAQ />
	<Footer />
	<slot />
</main>
