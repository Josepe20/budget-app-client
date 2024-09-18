
/****** USER INTERFACES ******/
export type UserId = number


export interface User { 
    userId: number; 
    username: string;
    email: string;
    isActive: boolean;
    isVerified: boolean;
    createdAt: string;  
}


export interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  tokenExpiration: number | null;
  userId: UserId | null;
  user: User | null;
  isAuthenticated: boolean;
}

export interface AuthData {
    username: string;
    password: string;
    email?: string;
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

