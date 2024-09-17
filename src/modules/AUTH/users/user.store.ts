import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserWithId, AuthState } from "./user.interface";


const authInitialState: AuthState = {
    accessToken: null,
    refreshToken: null,
    tokenExpiration: null,
    user: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    setAuthTokens(state, action: PayloadAction<{ accessToken: string; refreshToken: string;  tokenExpiration: number, user: UserWithId}>) {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.tokenExpiration = action.payload.tokenExpiration;
      state.user = action.payload.user;
      state.isAuthenticated = true;
    },
    clearAuthTokens(state) {
      state.accessToken = null;
      state.refreshToken = null;
      state.tokenExpiration = null;
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setAuthTokens, clearAuthTokens } = authSlice.actions;
export default authSlice.reducer;
