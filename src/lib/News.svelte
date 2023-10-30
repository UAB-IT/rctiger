<script>
    let showBanner = true; // Reactive variable to control banner visibility
  </script>
  
  {#if showBanner} <!-- Show the banner only if showBanner is true -->
    <div class="flex items-center bg-emerald-600 px-6 py-2.5 sm:px-3.5 w-full">
      <div class="flex justify-between items-center w-full">
        <p class="text-sm leading-6 text-white text-center flex-grow">
          <a href="#">
            <strong class="font-semibold">What's New</strong>
            <svg viewBox="0 0 2 2" class="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
              <circle cx="1" cy="1" r="1" />
            </svg>
            We've installed 40 A100 80 GB GPUs on Cheaha
            <span aria-hidden="true">&rarr;</span>
          </a>
        </p>
        <button
          type="button"
          class="-m-3 p-3 focus-visible:outline-offset-[-4px]"
          on:click={() => showBanner = false}
        >
          <span class="sr-only">Dismiss</span>
          <svg class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      </div>
    </div>
  {/if}
  