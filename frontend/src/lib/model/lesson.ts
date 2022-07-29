export interface Lesson {
    readonly id: number;
    readonly title: string;
    readonly description: string;
    readonly dateCreated: number;
    readonly dateLastUpdate: number;
    readonly path: string;
}
