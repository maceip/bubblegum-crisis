<script lang="ts">
	import { enhance } from "$app/forms";
     import LoginGraphic from "$lib/components/LoginGraphic.svelte";
	import Grain from '$lib/components/Grain.svelte';
	import HeaderScene from '$lib/components/HeaderScene.svelte';
	import Navbar from "$lib/components/Navbar.svelte";
	import { register } from "@teamhanko/hanko-elements"
	import { onDestroy, onMount } from "svelte";
  import { useNavigate } from "svelte-navigator";
  const api = import.meta.env.VITE_HANKO_API;

	register({
  shadow: true,      // Set to false if you don't want the web component to be attached to the shadow DOM.
  injectStyles: true // Set to false if you don't want to inject any default styles.
})
let element;

let error: Error | null = null;

onMount(async () => {
    register({ shadow: true, injectStyles: false}).catch((e) => error = e);
    element?.addEventListener('hankoAuthSuccess', console.log("hi"));
  });

  onDestroy(() => {
    element?.removeEventListener('hankoAuthSuccess', console.log("hi"));
  });


	let htmlRoot: HTMLElement | null;
	let isDarkMode = true;

	onMount(() => {
		htmlRoot = document.getElementsByTagName('html')[0];
	});

	const toggleTheme = () => {
		if (htmlRoot) {
			if (htmlRoot?.classList.contains('dark')) {
				isDarkMode = false;
				htmlRoot.classList.remove('dark');
				htmlRoot.style.backgroundColor = 'white';
			} else {
				isDarkMode = true;
				htmlRoot?.classList.add('dark');
				htmlRoot.style.backgroundColor = 'black';
			}
		}
	};
</script>
<Navbar />
<div class="w-full h-full">
	<div class="fixed top-5 right-5 z-50">
		<button on:click={toggleTheme} class="p-3">
			{#if isDarkMode}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					viewBox="0 0 20 20"
					class="fill-current text-white"
					><path d="M10 3.5a6.5 6.5 0 1 1 0 13v-13ZM10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16Z" /></svg
				>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					viewBox="0 0 20 20"
					class="fill-current text-black"
					><path d="M10 3.5a6.5 6.5 0 1 1 0 13v-13ZM10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16Z" /></svg
				>
			{/if}
		</button>
	</div>
	<div class="flex flex-col items-center justify-center">
		<div class="mb-10 h-64 w-96">
		  <LoginGraphic />
		</div>
		<hanko-auth api="https://backend-ap.tensical.com" lang="en" experimental="conditionalMediation"/>
	  </div>
	<div class="flex justify-center w-full h-full">
		<HeaderScene {isDarkMode} />
	</div>

	<Grain />
	<div class="content">
		{#if error}
		  <div class="error">{ error?.message }</div>
		{/if}
		<hanko-auth bind:this={element} {api}/>
	  </div>
</div>
