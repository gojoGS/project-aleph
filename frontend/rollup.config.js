import { svelte } from "@sveltejs/vite-plugin-svelte";
import preprocess from "svelte/types/compiler/preprocess";

export default {
    plugins: [svelte({ preprocess: preprocess() })],
};
