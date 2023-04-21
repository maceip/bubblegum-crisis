<script lang="ts">
	import '../app.css';
	import { QueryClientProvider } from '@tanstack/svelte-query'
	export let data


</script>


<QueryClientProvider client={data.queryClient}>
	<slot />
  </QueryClientProvider>

<style lang="postcss">
	:global(html, body) {
		height: 100vh;
		width: 100vw;
	}
	:global(canvas) {
		image-rendering: crisp-edges;
	}
</style>
