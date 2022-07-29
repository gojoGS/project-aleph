<article>
    <slot />
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
</style>
