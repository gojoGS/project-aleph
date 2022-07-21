<script lang="ts">
    import { link, useLocation } from "svelte-navigator";
    import {
        ROUTE_ABOUT,
        ROUTE_CONTACT,
        ROUTE_MODULES,
        ROUTE_ROOT,
    } from "../routes/routes";
</script>

<header>
    <div class="logo">
        <img src="../../public/icon/index.svg" alt="project-aleph-icon" />
        <h1>Project Aleph</h1>
    </div>
    <nav>
        <div class="link">
            <a href={ROUTE_ROOT} use:link>Home</a>
        </div>
        <div class="link">
            <a href={ROUTE_MODULES} use:link>Modules</a>
        </div>
        <div class="link">
            <a href={ROUTE_ABOUT} class="link" use:link>About</a>
        </div>
        <div class="link">
            <a href={ROUTE_CONTACT} use:link>Contact</a>
        </div>
    </nav>
</header>

<style lang="scss">
    header {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0rem 1rem;
        width: 100%;
    }

    .logo {
        width: 50%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        h1 {
            font-family: var(--font-family);
            font-weight: var(--font-weight-super-bold);
            font-style: normal;
            font-size: 32px;
            line-height: 51px;
            display: flex;
            align-items: center;
            text-align: center;
            color: var(--clr-accent);
        }

        img {
            height: 64px;
            width: 64px;
            object-fit: contain;
        }
    }

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 50%;
        height: 4rem;
    }
    .link {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        a {
            font-family: var(--font-family);
            font-weight: var(--font-weight-bold);
            font-style: normal;
            font-size: 24px;
            line-height: 38px;
            text-align: center;
            text-decoration: none;
            color: var(--clr-primary);
            transition: 0.6s;

            &:hover {
                color: var(--clr-accent);
            }
        }
    }
</style>
