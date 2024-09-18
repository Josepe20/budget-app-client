import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserId, AuthState, User } from "./user.interface";


const authInitialState: AuthState = {
    accessToken: null,
    refreshToken: null,
    tokenExpiration: null,
    userId: null,
    user: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    setAuthTokens(state, action: PayloadAction<{ accessToken: string; refreshToken: string;  tokenExpiration: number, userId: UserId}>) {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.tokenExpiration = action.payload.tokenExpiration;
      state.userId = action.payload.userId;
      state.user = null;
      state.isAuthenticated = true;
    },
    clearAuthTokens(state) {
      state.accessToken = null;
      state.refreshToken = null;
      state.tokenExpiration = null;
      state.userId = null;
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setAuthTokens, clearAuthTokens } = authSlice.actions;
export default authSlice.reducer;
