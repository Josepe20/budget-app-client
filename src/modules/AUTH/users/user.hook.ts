import { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import { jwtDecode } from 'jwt-decode';

import { setAuthTokens, clearAuthTokens } from './user.store';
import { loginUser, registerUser, refreshToken } from './user.service';
import { AuthData, JwtPayload, User } from './user.interface';
import { useAppDispatch, useAppSelector } from "@/common/hooks/store";


export const useAuth = () => {
  const [error, setError] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const authData = useAppSelector((state) => state.auth);
  const router = useRouter();

  const decodeToken = (token: string): JwtPayload => {
    return jwtDecode<JwtPayload>(token);
  };


  const handleLogin = async (data: AuthData) => {
    try {
      const bodyPayload = { 
        username: data.username, 
        password: data.password 
      }
      const response = await loginUser(bodyPayload);
      console.log("login response: ", response)

      const decodedToken = decodeToken(response.data.access_token);
      const tokenExpiration = new Date(decodedToken.exp * 1000);
      const [userId, userName] = decodedToken.sub.split("-");

      console.log('userwithId: ', userId);  
      console.log('expire time: ', tokenExpiration); 

      dispatch(setAuthTokens({ 
        accessToken: response.data.access_token, 
        refreshToken: response.data.refresh_token,
        tokenExpiration: tokenExpiration.getTime(),
        userId: Number(userId),
      }));

      router.push('/(budgetapp)');  
    } catch (err) {
      setError('Login failed');
      console.error(err);
    }
  };

  const handleRegister = async (data: AuthData) => {
    try {
      const bodyPayload = { 
        username: data.username, 
        email: data.email!, 
        password: data.password 
      }
      const response = await registerUser(bodyPayload);
      console.log("register response: ", response);

      if (response.status === 200) {
        alert(response.message);
        router.push('/(auth)/login')
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

  const refreshTokenOnExpire = async () => {
    try {
      const bodyPayload = { 
        refreshToken: authData.refreshToken! 
      };

      console.log("bodyPayload refreshToken", bodyPayload)
      const response = await refreshToken(bodyPayload);
      console.log("refresh response: ",response)
      const decodedToken = decodeToken(response.data.access_token);
      const tokenExpiration = new Date(decodedToken.exp * 1000);

      dispatch(setAuthTokens({
        accessToken: response.data.access_token,
        refreshToken: authData.refreshToken!,  
        tokenExpiration: tokenExpiration.getTime(),
        userId: authData.userId!,
      }));

      console.log('Token refreshed successfully');     
    } catch(err) {
      setError('Token refresh failed');
      console.error(err);
      handleLogout(); 
    }
  };

  useEffect(() => {
    if (authData.tokenExpiration) {
      const timeUntilExpiration = authData.tokenExpiration - Date.now() - 60000;  // Refrescar 1 minuto antes de expirar

      if (timeUntilExpiration > 0) {
        const timeoutId = setTimeout(refreshTokenOnExpire, timeUntilExpiration);
        return () => clearTimeout(timeoutId);  // Limpiar el timeout si el componente se desmonta
      } else {
        refreshTokenOnExpire();  // Si ya expiró, refrescar inmediatamente
      }
    }
  }, [authData.tokenExpiration]);

  return { handleLogin, handleRegister, handleLogout, error };
};
