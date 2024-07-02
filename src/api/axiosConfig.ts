import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000/'

const instance = axios.create({
  baseURL: baseURL, 
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});


instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const { data } = await axios.post(baseURL + 'users/refresh', {}, {
          withCredentials: true,
        });
        localStorage.setItem('token', data.token); 
        axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
        return instance(originalRequest);
      } catch (err) {
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);

export default instance;

