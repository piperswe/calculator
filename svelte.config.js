import adapter from '@sveltejs/adapter-cloudflare';
import preprocess from 'svelte-preprocess';
import {
	optimizeImports,
	optimizeCss,
	elements,
	icons,
	pictograms
} from 'carbon-preprocess-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess(), optimizeImports(), elements(), icons(), pictograms()],

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			plugins: [process.env.NODE_ENV === 'production' && optimizeCss()]
		}
	}
};

export default config;
