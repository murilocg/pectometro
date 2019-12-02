import axios from 'axios';
import { obtemDadosSessao } from './auth';

axios.interceptors.request.use(
  config => {
    if (!config.url.includes('http://localhost:4200')) return config;
    const auth = obtemDadosSessao();
    if (!auth) return config;
    let headers = config.headers ? config.headers : {};
    headers = { ...headers, Authorization: `Bearer ${auth.token}` };
    config.headers = headers;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
