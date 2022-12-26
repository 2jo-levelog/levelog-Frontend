import axios from 'axios';

export const authInstance = axios.create({
  baseURL: 'http://13.125.224.245:8080',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
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
  baseURL: 'http://13.125.224.245:8080',
});
