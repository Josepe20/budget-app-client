import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserWithId } from "../../interfaces/users";
import { AuthState } from '../../interfaces/auth';

const authInitialState: AuthState = {
    accessToken: null,
    refreshToken: null,
    tokenExpiration: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    setAuthTokens(state, action: PayloadAction<{ accessToken: string; refreshToken: string;  tokenExpiration: number}>) {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.tokenExpiration = action.payload.tokenExpiration;
      state.isAuthenticated = true;
    },
    clearAuthTokens(state) {
      state.accessToken = null;
      state.refreshToken = null;
      state.tokenExpiration = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setAuthTokens, clearAuthTokens } = authSlice.actions;
export default authSlice.reducer;