

export type UserId = number

export interface User {
    username: string;
    email?: string;
}

export interface UserWithId extends User {
    id: number;
}


export interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  tokenExpiration: number | null;
  user: UserWithId | null;
  isAuthenticated: boolean;
}

export interface AuthData {
    username: string;
    password: string;
    email?: string;
}

export interface refreshTokenInterface {
    refreshToken: string
}

export interface JwtPayload {
    sub: string;  // username
    exp: number;  // Expiración del token
}


export interface LoginResponse {
    status: number;
    message: string;
    data: {
        access_token: string;
        refresh_token: string;
        token_type: string;
    };
  }

