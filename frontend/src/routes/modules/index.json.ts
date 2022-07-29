import type { ModuleBase } from '$lib/model/module';

export async function GET() {
    const modulesIndexes = import.meta.globEager('./posts/*/info.mdx');

    const modules: ModuleBase[] = Object.values(modulesIndexes).map((post, index) => {
        return {
            title: post.metadata.title,
            id: index,
        };
    });

    return {
        status: 200,
        body: { modules },
    };
}
