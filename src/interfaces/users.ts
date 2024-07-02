export type UserId = number

export interface User {
    name: string;
    email: string;
}

export interface UserWithId extends User {
    id: number;
}

export  interface UserCredentials {
    username: string;
    password: string;
}
  
export  interface RegisterData {
    username: string;
    email: string;
    password: string;
}