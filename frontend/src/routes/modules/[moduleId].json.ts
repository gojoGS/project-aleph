import { MODULE_INDEX_FILENAME } from '$lib/config/config';
import type { Lesson } from '$lib/model/lesson';
import type { Module } from '$lib/model/module';

export async function GET({ params }) {
    const modulesIndexes = import.meta.globEager('./posts/*/info.mdx');
    const getModulePath = (path: string) => {
        return path.slice(1, -1 * MODULE_INDEX_FILENAME.length);
    };

    const getLessonPath = (path: string) => {
        return path.slice(1, -1 * '.mdx'.length);
    };

    const lessonFiles = import.meta.globEager('./posts/*/lessons/*.mdx');

    const lessons: Lesson[] = Object.entries(lessonFiles).map(([path, post], index) => {
        return {
            title: post.metadata.title,
            id: index,
            description: post.metadata.description,
            dateCreated: post.metadata.dateCreated,
            dateLastUpdate: post.metadata.dateLastUpdate,
            path: getLessonPath(path),
        };
    });

    const modules: Module[] = Object.entries(modulesIndexes).map(([path, post], index) => {
        const modulePath = getModulePath(path);

        return {
            title: post.metadata.title,
            description: post.metadata.description,
            id: index,
            path: modulePath,
            lessons: lessons.filter((l) => l.path.startsWith(modulePath)),
        };
    });

    const moduleId: number = Number.parseInt(params.moduleId);

    const module = modules.find((m) => m.id === moduleId);

    if (module) {
        return {
            status: 200,
            body: { module },
        };
    }

    return {
        status: 404,
    };
}
