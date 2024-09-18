import axios from '@/api/axiosConfig';
import { AuthData, LoginResponse, refreshTokenInterface, User, refreshTokenResponse } from './user.interface';
import { StandardResponse } from '@/common/interfaces/standarResponse.interface';


export const loginUser = async (credentials: AuthData): Promise<StandardResponse<LoginResponse>> => {
  const params = new URLSearchParams();
  params.append('username', credentials.username);
  params.append('password', credentials.password);
  params.append('grant_type', 'password');
  
  const response = await axios.post('users/login', params, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  return response.data; 
};

export const registerUser = async (data: AuthData): Promise<StandardResponse<User>> => {
  const response = await axios.post('users/register', data);
  console.log(response)
  return response.data.data;
};

export const refreshToken = async (refreshToken: refreshTokenInterface): Promise<StandardResponse<refreshTokenResponse>> => {
  const response = await axios.post('users/refresh',  refreshToken);
  console.log(response)
  return response.data.data;
};

