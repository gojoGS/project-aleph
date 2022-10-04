<script context="module" lang="ts">
    export const load: Load = async ({ fetch, params }) => {
        const moduleId = params.moduleId;

        const response = await fetch(`http://localhost:8080/module/${moduleId}`, {
            method: 'GET',
        });

        if (!response.ok) {
            return {
                status: 301,
                redirect: '/modules',
            };
        }

        const body: Module = (await response.json()) as Module;

        return {
            status: response.status,
            props: {
                module: body,
            },
        };
    };
</script>

<script lang="ts">
    import type { Module } from '$lib/store/types';

    import type { Load } from '@sveltejs/kit';

    export let module: Module;
</script>

<svelte:head>
    <title>{`ℵ | Modules | ${module.title}`}</title>
</svelte:head>

<h1>
    Module title: {module.title}
</h1>

<h1>
    Module description: {module.description}
</h1>

<ul>
    {#each module.lessons as lesson}
        <li>
            <a href="{`${module.id}/lessons/${lesson.id}`}">{lesson.title}</a>
        </li>
    {/each}
</ul>

<a href="/modules">Back to modules</a>
