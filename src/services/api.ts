// api.ts
import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

// api.interceptors.request.use(async (config) => {

//   return config;
// }, (error) => {

//   return Promise.reject(error);
// });

export default api;
