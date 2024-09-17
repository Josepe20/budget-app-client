import axios from '../../../api/axiosConfig';
import { AuthData, LoginResponse, refreshTokenInterface } from './user.interface';


export const loginUser = async (credentials: AuthData): Promise<LoginResponse['data']> => {
  const params = new URLSearchParams();
  params.append('username', credentials.username);
  params.append('password', credentials.password);
  params.append('grant_type', 'password');
  
  const response = await axios.post<LoginResponse>('/users/login', params, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  return response.data.data; // Accedemos a la data dentro de la estructura de respuesta estándar
};

export const registerUser = async (data: AuthData) => {
  const response = await axios.post('/users/register', data);
  console.log(response)
  return response.data.data;
};

export const refreshToken = async (refreshToken: refreshTokenInterface) => {
  const response = await axios.post('/users/refresh',  refreshToken);
  console.log(response)
  return response.data.data;
};
