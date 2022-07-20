<script>
    import { Link } from "svelte-navigator";
    import {
        ROUTE_ABOUT,
        ROUTE_CONTACT,
        ROUTE_MODULES,
        ROUTE_ROOT,
    } from "../routes/routes";
</script>

<header class="header">
    <div class="logo">
        <img src="../../public/icon/index.svg" alt="project-aleph-icon" />
        <h1>Project Aleph</h1>
    </div>
    <nav class="nav-link-wrapper">
        <Link class="nav-link" to={ROUTE_ROOT}>Home</Link>
        <Link class="nav-link" to={ROUTE_MODULES}>Modules</Link>
        <Link class="nav-link" to={ROUTE_ABOUT}>About</Link>
        <Link class="nav-link" to={ROUTE_CONTACT}>Contact</Link>
    </nav>
</header>

<style lang="scss">
    .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .logo {
        width: 25%;
        display: flex;
        flex-direction: row;

        h1 {
            color: var(--clr-accent);
        }

        img {
            width: 2rem;
        }
    }

    .nav-link-wrapper {
        display: flex;
        justify-content: flex-start;
        gap: 2rem;
        width: 75%;
    }

    .nav-link {
    }
</style>
