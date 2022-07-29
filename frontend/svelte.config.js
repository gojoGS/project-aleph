import adapter from '@sveltejs/adapter-vercel';
import { mdsvex } from 'mdsvex';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: ['.svelte', '.mdx'],
    preprocess: [
        preprocess(),
        mdsvex({
            extensions: ['.mdx'],
        }),
    ],
    kit: {
        adapter: adapter({ edge: false }),
    },
};

export default config;
