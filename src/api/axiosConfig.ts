import axios from 'axios';
import enviroment from './enviroment';
import { attachExceptionInterceptor } from './middlewares/exception.middleware';

const envURL = enviroment === 'DEV' ? 'http://127.0.0.1:8000/api/' : 'I have no Prod enviroment yet XD'


const instance = axios.create({
  baseURL: envURL, 
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Attach the interceptor to handle exceptions
attachExceptionInterceptor(instance);

export default instance;

