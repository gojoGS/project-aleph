import type { Lesson } from './lesson';

export interface ModuleBase {
    readonly id: number;
    readonly title: string;
}

export interface Module extends ModuleBase {
    readonly description: string;
    readonly path: string;
    readonly lessons: Lesson[];
}
