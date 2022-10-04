<script context="module" lang="ts">
    import type { Load } from '@sveltejs/kit';

    export const load: Load = async ({ fetch, params }) => {
        const moduleId = params.moduleId;
        const lessonId = params.lessonId;

        const response = await fetch(`http://localhost:8080/module/lesson/${lessonId}`, {
            method: 'GET',
        });

        if (!response.ok) {
            return {
                status: 301,
                redirect: `/modules/${moduleId}`,
            };
        }

        const body: Lesson = (await response.json()) as Lesson;

        return {
            status: response.status,
            props: {
                lesson: body,
                moduleId: moduleId,
                markdown: '#',
            },
        };
    };
</script>

<script lang="ts">
    import type { Lesson } from '$lib/store/types';

    export let lesson: Lesson;
    export let moduleId: string;
    let markdown = `
    # Hello world
    
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero autem eos et omnis quam. Autem, ut eveniet. Officia adipisci distinctio placeat eligendi modi dolore excepturi fuga quisquam soluta! Ullam, modi.
Veritatis corporis quae suscipit amet debitis accusamus optio dolorum distinctio! Vero ex unde officiis voluptas suscipit hic iste. Illo et, ut illum impedit aliquam omnis est dolores nisi natus nemo.
Odit doloremque maiores, repellat tempora assumenda aliquam asperiores laborum, expedita ipsum, accusamus dolor nulla doloribus. Animi totam pariatur excepturi optio illum ex blanditiis aperiam odio aliquam ab velit, esse officiis?
Qui rem dolor quaerat? Quia at quasi et impedit eaque atque molestias quidem architecto, illo debitis distinctio, sequi, dolorem qui perferendis sint recusandae sit. Nesciunt repellendus eos consequatur expedita nemo.
Ratione nulla maxime delectus fugiat temporibus rerum eveniet voluptate a, totam quam nostrum ea et. Aperiam quos facilis non commodi atque tempora illo! Numquam voluptates dicta modi, dignissimos veritatis repudiandae.
Quas, commodi quo, quia, totam et eius nemo reprehenderit laborum necessitatibus harum repudiandae veniam dolore repellat alias quos voluptatum possimus adipisci facere. At doloribus a animi debitis, consequatur repellendus iste.
Hic incidunt quo dolorem error minima laborum molestias quae esse quos molestiae voluptatum itaque ratione tempora, aperiam impedit labore ducimus atque! Ipsam aspernatur culpa earum beatae. Minima ducimus beatae nesciunt!
Ratione nulla quia ad eveniet dolorum corporis perspiciatis earum, alias illum eaque ex nesciunt eius. A atque natus perferendis, cumque esse sunt eligendi quibusdam rem labore, aliquid illo maiores consectetur?
Quibusdam corporis minus earum laborum. Sed modi omnis esse corrupti accusamus cupiditate voluptatibus temporibus, minima amet. Aliquid laudantium quia vero earum dolore ipsam aperiam autem sapiente, libero saepe consequatur dignissimos.
Illum aut veniam, voluptates, doloremque exercitationem repellat molestiae soluta iure aspernatur nulla rem, dolores neque culpa? Cum, soluta quis! Praesentium debitis repellat obcaecati numquam dolores aliquam nam neque voluptatibus nulla.

    `;

    import hljs from 'highlight.js';
    import 'highlight.js/styles/base16/material-darker.css';

    import { marked } from 'marked';

    // Adding syntax highlighting support
    marked.setOptions({
        highlight: function (code, lang) {
            try {
                return hljs.highlight(code, { language: lang }).value;
            } catch (err: any) {
                return err.toString();
            }
        },
    });

    // Compiled and reactive HTML version with emojis
    $: output = marked(markdown);
</script>

<svelte:head>
    <title>{`ℵ | Modules | ${lesson.title}`}</title>
</svelte:head>

<h1>
    Lesson title: {lesson.title}
</h1>

<h1>
    Lesson description: {lesson.description}
</h1>

<div class="navs">
    <a>Prev</a>
    <a href="/modules">Modules</a>
    <a href="{`/modules/${moduleId}`}">Back</a>
    <a>Next</a>
</div>

<article>
    <div class="markdown__preview">
        {@html output}
    </div>
</article>

<style lang="scss">
    article {
        margin-block: 2rem;
        padding: 1rem;
        margin-inline: auto;
        max-width: 1000px;
        border-radius: 1rem;
        box-shadow: 0 0 15px #000000aa;
    }

    article :global(h1) {
        font-weight: var(--font-weight-bold);
        font-family: var(--font-family);
        color: var(--clr-accent);
    }

    .navs {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        justify-content: center;
    }
</style>
