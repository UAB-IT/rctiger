<!-- FAQItem.svelte -->
<script>
	export let title; // FAQ title
	export let answer; // FAQ answer
	export let initiallyOpen = false; // Whether the item should start as open
	let expanded = initiallyOpen; // Track if FAQ is expanded
  </script>
  
  <div class="pt-6">
	<dt>
	  <!-- Expand/collapse question button -->
	  <button
		on:click={() => expanded = !expanded}
		type="button"
		class="flex w-full items-start justify-between text-left text-gray-900"
		aria-controls="faq-0"
		aria-expanded={expanded}
	  >
		<span class="text-base font-semibold leading-7">{title}</span>
		<span class="ml-6 flex h-7 items-center">
			<!-- Icon when question is collapsed -->
			<svg
			  class={expanded ? 'hidden' : 'h-6 w-6'}
			  fill="none"
			  viewBox="0 0 24 24"
			  stroke-width="1.5"
			  stroke="currentColor"
			  aria-hidden="true"
			>
			  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
			</svg>
			<!-- Icon when question is expanded -->
			<svg
			  class={expanded ? 'h-6 w-6' : 'hidden'}
			  fill="none"
			  viewBox="0 0 24 24"
			  stroke-width="1.5"
			  stroke="currentColor"
			  aria-hidden="true"
			>
			  <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
			</svg>
		  </span>
	  </button>
	</dt>
	<dd class="mt-2 pr-12">
	  <!-- Show the answer if `expanded` is true -->
	  {#if expanded}
	  
		<p class="text-base leading-7 text-gray-600">{answer}</p>
	  {/if}
	</dd>
  </div>
  