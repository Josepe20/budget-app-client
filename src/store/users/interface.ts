export type UserId = number

export interface User {
    name: string;
    email: string;
}

export interface UserWithId extends User {
    id: number;
}