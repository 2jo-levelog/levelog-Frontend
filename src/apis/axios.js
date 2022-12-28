import axios from 'axios';

export const authInstance = axios.create({
  baseURL: 'http://13.209.6.230:8080',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
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
  baseURL: 'http://13.209.6.230:8080',
});
