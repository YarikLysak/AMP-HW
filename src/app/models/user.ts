export interface User {
    id: number;
    firstName: string;
    lastName: string;
}

export class User implements User {
    id: number;
    firstName: string;
    lastName: string;
}
