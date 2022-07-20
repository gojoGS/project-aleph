<script lang="ts">
    import { Link, Route, Router } from "svelte-navigator";
    import NavBar from "./lib/NavBar.svelte";
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
            <h1>Home</h1>
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
    :global(:root) {
        --clr-accent: #a81abf;
    }
</style>
