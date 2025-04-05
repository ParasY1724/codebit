import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // Use the environment variable
});

// Optional: Add an interceptor to include the JWT token from localStorage
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken'); // Assuming you store the token here after login
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;