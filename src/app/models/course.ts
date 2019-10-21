export interface Course {
    id: number;
    title: string;
    creationDate: string;
    duration: number | string;
    description: string;
}

export class Course implements Course {
    id: number;
    title: string;
    creationDate: string;
    duration: number | string;
    description: string;
}
