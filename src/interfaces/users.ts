export type UserId = number

export interface User {
    username: string;
    email: string;
}

export interface UserWithId extends User {
    id: number;
}
