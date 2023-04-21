import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	optimizeDeps: { exclude: ["svelte-navigator"] },

	server: {
		host: '0.0.0.0'
	  },
	ssr: {
		noExternal: ['three', 'troika-three-text', '@teamhanko/*']
	}
});
