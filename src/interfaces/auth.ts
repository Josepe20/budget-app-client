export interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
}

export interface AuthData {
    username: string;
    password: string;
    email?: string;
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

