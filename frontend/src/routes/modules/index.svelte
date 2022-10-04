<script context="module" lang="ts">
    import type { Module } from '$lib/store/types';
    import type { Load } from '@sveltejs/kit';
    export const load: Load = async ({ fetch }) => {
        const response = await fetch('http://localhost:8080/module', {
            method: 'GET',
        });

        const body: Module[] = (await response.json()) as Module[];

        return {
            status: response.status,
            props: {
                modules: body,
            },
        };
    };
</script>

<script lang="ts">
    export let modules: Module[] = [];
</script>

<svelte:head>
    <title>ℵ | Modules</title>
</svelte:head>

<div class="container">
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
