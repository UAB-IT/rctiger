<script>
	import FAQItem from './ItemFAQ.svelte';
  </script>
  
  <div class="bg-white">
	<div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
	  <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
		<h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">
		  Frequently asked questions
		</h2>
		<dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
		  <FAQItem initiallyOpen={true} title="What&#039;s the best thing about Switzerland?" answer="I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat." />
		  <FAQItem title="What&#039;s the best thing about Switzerland?" answer="I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat." />
		  <FAQItem title="What&#039;s the best thing about Switzerland?" answer="I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat." />
		</dl>
	  </div>
	</div>
  </div>
  