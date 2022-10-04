<script context="module" lang="ts">
    import type { Load } from '@sveltejs/kit';
    export const load: Load = async ({ fetch }) => {
        const response = await fetch('http://localhost:8080/lesson', {
            method: 'GET',
        });

        const body: Lesson[] = (await response.json()) as Lesson[];

        return {
            status: response.status,
            props: {
                lessons: body,
            },
        };
    };
</script>

<script lang="ts">
    import type { Lesson } from '$lib/store/types';

    export let lessons: Lesson[] = [];
</script>

<ul>
    {#each lessons as lesson}
        <li>
            <h1>
                {lesson.title}
            </h1>
        </li>
    {:else}
        <li>No lessons</li>
    {/each}
</ul>
