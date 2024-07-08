import { useState } from 'react';
import { useRouter } from 'expo-router';
import { useDispatch } from 'react-redux';
import { jwtDecode } from 'jwt-decode';

import { setAuthTokens, clearAuthTokens } from '../store/slices/authSlice';
import { loginUser, registerUser } from '../services/authService';
import { AuthData, JwtPayload } from '../interfaces/auth';


export const useAuth = () => {
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const router = useRouter();

  const decodeToken = (token: string): JwtPayload => {
    return jwtDecode<JwtPayload>(token);
  };


  const handleLogin = async (data: AuthData) => {
    try {
      const response = await loginUser({ username: data.username, password: data.password });
      console.log(response)
      dispatch(setAuthTokens({ accessToken: response.access_token, refreshToken: response.refresh_token }));
      const decodedToken = decodeToken(response.access_token);
      console.log('User Name:', decodedToken.sub);  
      router.push('/(app)');  
    } catch (err) {
      setError('Login failed');
      console.error(err);
    }
  };

  const handleRegister = async (data: AuthData) => {
    try {
      const response = await registerUser({ username: data.username, email: data.email!, password: data.password });
      if (response.status === 200) {
        alert(response.message);
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError('Registration failed');
      console.error(err);
    }
  };

  const handleLogout = async () => {
    dispatch(clearAuthTokens());

    console.log("log out");
    router.push('/');
    
  };

  return { handleLogin, handleRegister, handleLogout, error };
};
