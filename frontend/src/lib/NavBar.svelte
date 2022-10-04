<script lang="ts">
    import { page } from '$app/stores';

    const routes = [
        { title: 'Home', route: '/' },
        { title: 'Modules', route: '/modules' },
        { title: 'About', route: '/about' },
        { title: 'Contact', route: '/contact' },
    ];

    const isCurrentPage = (currentPath: string, pagePath: string) => {
        if (pagePath === '/') {
            return pagePath === currentPath;
        }

        return currentPath.includes(pagePath);
    };
</script>

<header>
    <div class="logo">
        <img src="/logo.svg" alt="project-aleph-icon" />
        <h1>Project Aleph</h1>
    </div>
    <nav>
        {#each routes as route}
            <div class:active="{isCurrentPage($page.url.pathname, route.route)}" class="link">
                <a href="{route.route}">{route.title}</a>
            </div>
        {/each}
    </nav>
</header>

<style lang="scss">
    header {
        display: flex;
        background-color: white;
        flex-direction: row;
        align-items: center;
        padding: 0rem 1rem;
        width: 100%;
        box-shadow: 0 4px 10px 0 #0002;
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
        transition-duration: 0.6s;

        a {
            font-family: var(--font-family);
            font-weight: var(--font-weight-bold);
            font-style: normal;
            font-size: 24px;
            line-height: 38px;
            text-align: center;
            text-decoration: none;
            color: var(--clr-primary);
            transition-property: color;
            transition-duration: 0.6s;

            &:hover {
                color: var(--clr-accent);
            }

            &:focus-visible {
                height: 100%;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                outline: var(--clr-primary) solid 3px;
            }
        }
    }

    .link.active {
        background-color: var(--clr-accent);

        a {
            color: var(--clr-secondary);
        }
    }
</style>
