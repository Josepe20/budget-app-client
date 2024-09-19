
/****** USER INTERFACES ******/
export type UserId = number

// Base interface for User
export interface UserBase {
    username: string
    email?: string
}
  
// Interface for creating an User
export interface AuthData extends UserBase {
    password: string;
}
  
// Interface for User Response
export interface User extends UserBase {
    user_id: number; 
    is_active: boolean;
    is_verified: boolean;
    created_at: string;     // ISO formatted datetime
}


export interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  tokenExpiration: number | null;
  userId: UserId | null;
  user: User | null;
  isAuthenticated: boolean;
}


export interface refreshTokenInterface {
    refreshToken: string;
}

export interface refreshTokenResponse {
    access_token: string;
    token_type: string
}

export interface JwtPayload {
    sub: string;  // id-username
    exp: number;  // Expiración del token
}

export interface LoginResponse {
    access_token: string;
    refresh_token: string;
    token_type: string;
}

