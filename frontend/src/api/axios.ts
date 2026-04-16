import axios from 'axios';

// Creating a baseline instance for your API connection
export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Interceptors can be added here for token refresh, error handling etc.
apiClient.interceptors.request.use(
  (config: any) => {
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response: any) => response,
  (error: any) => {
    // Global error handling, like redirecting to login on 401
    return Promise.reject(error);
  }
);
