import axios from 'axios';
import enviroment from './enviroment';

const envURL = enviroment === 'DEV' ? 'http://127.0.0.1:8000/api/' : 'I have no Prod enviroment yet XD'

const baseURL = envURL;

const instance = axios.create({
  baseURL: baseURL, 
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;

