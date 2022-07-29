<script context="module">
    /** @type {import('./__types/[slug]').Load} */
    export async function load({ fetch }) {
        const response = await fetch('/modules.json');
        const { modules } = await response.json();

        if (response.ok) {
            return {
                props: {
                    modules,
                },
            };
        }

        return {
            status: response.status,
            error: new Error("Couldn't fetch modules"),
        };
    }
</script>

<script lang="ts">
    import type { ModuleBase } from '$lib/model/module';

    export let modules: ModuleBase[];
</script>

<svelte:head>
    <title>ℵ | Modules</title>
</svelte:head>

<div class="container">
    <h1>Modules</h1>
    {#each modules as module}
        <a href="{`/modules/${module.id}`}">{module.title}</a>
    {/each}
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
    }
</style>
