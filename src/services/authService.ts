import axios from '../api/axiosConfig';
import { UserCredentials, RegisterData } from '../interfaces/users';

export const loginUser = async (credentials: UserCredentials) => {
  const response = await axios.post('/users/login', credentials, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  return response.data;
};

export const registerUser = async (data: RegisterData) => {
  const response = await axios.post('/users/register', data);
  return response.data;
};

export const refreshToken = async () => {
  const response = await axios.post('/users/refresh');
  return response.data;
};

export const logoutUser = async () => {
  const response = await axios.post('/users/logout');
  return response.data;
};
