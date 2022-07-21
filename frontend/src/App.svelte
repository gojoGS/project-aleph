<script lang="ts">
    import { Link, Route, Router } from "svelte-navigator";
    import NavBar from "./lib/NavBar.svelte";
    import Home from "./lib/screens/Home.svelte";
    import {
        ROUTE_ABOUT,
        ROUTE_CONTACT,
        ROUTE_MODULES,
        ROUTE_ROOT,
    } from "./routes/routes";
</script>

<Router>
    <NavBar />
    <main>
        <Route path={ROUTE_ROOT}>
            <Home />
        </Route>
        <Route path={ROUTE_MODULES}>
            <h1>Modules</h1>
        </Route>
        <Route path={ROUTE_ABOUT}>
            <h1>About</h1>
        </Route>
        <Route path={ROUTE_CONTACT}>
            <h1>Contact</h1>
        </Route>
    </main>
</Router>

<style lang="scss">
    main {
        display: flex;
        flex-grow: 1;
    }

    :global(:root) {
        --clr-accent: #a81abf;
        --clr-secondary: #fff;
        --clr-primary: #4d4069;
        --clr-bg: #caa99f;

        --font-family: "Montserrat", sans-serif;

        --font-weight-normal: 300;
        --font-weight-bold: 600;
        --font-weight-super-bold: 700;
    }
</style>
