import axios from 'axios';
// config

// ----------------------------------------------------------------------

export const basePath = process.env.NODE_ENV;

const $axios = axios.create({
  baseURL: basePath,
});

export default $axios;

// axios instance header
