import axios from 'axios';

export const authInstance = axios.create({
  baseURL: 'http://13.209.84.31:8080',
  headers: {
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

authInstance.interceptors.request.use(config => {
  if (config.headers === undefined) return;
  const token = localStorage.getItem('id');
  config.headers.Authorization = `${token}`;
  // eslint-disable-next-line consistent-return
  return config;
});

export const instance = axios.create({
  baseURL: 'http://13.209.84.31:8080',
});
