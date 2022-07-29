<script context="module">
    export async function load({ fetch, params }) {
        const moduleId = params.moduleId;
        const response = await fetch(`/modules/${moduleId}.json`);
        const { module } = await response.json();

        if (response.ok) {
            return {
                props: {
                    module,
                },
            };
        }

        return {
            status: 301,
            redirect: '/modules',
        };
    }
</script>

<script lang="ts">
    import type { Module } from '$lib/model/module';

    export let module: Module;
</script>

<svelte:head>
    <title>{`ℵ | Modules | ${module.title}`}</title>
</svelte:head>

<a href="/modules">modules/</a>

<h1>
    Module title: {module.title}
</h1>

<h1>
    Module description: {module.description}
</h1>

<ul>
    {#each module.lessons as lesson}
        <li>
            <a href="{`/modules/${lesson.path.slice(1)}`}">{lesson.title}</a>
        </li>
    {/each}
</ul>
