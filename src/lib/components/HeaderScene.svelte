<script lang="ts">
	import { Canvas, T } from '@threlte/core';
	import Orb from '$lib/components/Orb.svelte';
	import Camera from './Camera.svelte';

	export let isDarkMode: boolean;
</script>


	<div class="absolute h-full w-full">
		<Canvas>
			<Camera />

			<T.DirectionalLight castShadow position={[10, 2, -10]} />
			<T.AmbientLight intensity={0.2} />

			<T.Group>
				<Orb position={[-4, -0.9, -1.5]} materialIndex={0} scaleO={0.5} />
				<Orb position={[-2, 0, 1]} materialIndex={1} />
				<Orb position={[-10, 4, -4]} materialIndex={2} />
				<Orb position={[-40, -2, -12]} materialIndex={1} />
				<Orb position={[-10, -2, -1]} materialIndex={3} />
				<Orb position={[-20, -2, 6]} materialIndex={5} />
			</T.Group>
		</Canvas>

	{#if isDarkMode}
		<span
			class="absolute text-[60pt] font-bold  left-[45px] top-[calc(100vh*0.25+5px)] w-[250px] sm:w-[300px] md:w-[500px] pointer-events-none">
			重甲機神
		</span>
	{:else}
	<span class="absolute text-[60pt] font-bold  left-[45px] top-[calc(100vh*0.25+5px)] w-[250px] sm:w-[300px] md:w-[500px] pointer-events-none">
			重甲機神
		</span>
		{/if}
		{#if isDarkMode}
		<span
			class="absolute text-[59pt] left-[45px] top-[calc(100vh*0.25+5px)] w-[250px] sm:w-[300px] md:w-[500px] pointer-events-none text-black">
			重甲機神
		</span>
	{:else}
	<span
			class="absolute text-[59pt] left-[45px] top-[calc(100vh*0.25+5px)] w-[250px] sm:w-[300px] md:w-[500px] pointer-events-none text-white">
		重甲機神
		</span>
	{/if}




	</div>

<style>
	p {
		line-height: 100%;
	}
</style>
