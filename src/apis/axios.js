import axios from 'axios';

export const authInstance = axios.create({
  baseURL: 'http://13.125.224.245:8080',
  headers: {
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

/* authInstance.interceptors.request.use(config => {
  if (config.headers === undefined) return;
  const token = localStorage.getItem('Authorization');
  console.log(token);
  config.headers.Authorization = `${token}`;
  return config;
}); */

export const instance = axios.create({
  baseURL: 'http://13.125.224.245:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});
