import api from './api'; // Import the configured Axios instance

export const loginUser = async (credentials) => {
  try {
    const response = await api.post('/auth/login', credentials);
    // Assuming the backend sends back { user: {...}, token: '...' } on success
    if (response.data && response.data.token) {
      localStorage.setItem('authToken', response.data.token); // Store the token
    }
    return response.data;
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    throw error.response?.data || new Error('Login failed');
  }
};

export const signupUser = async (userData) => {
   try {
     const response = await api.post('/auth/signup', userData);
     if (response.data && response.data.token) {
       localStorage.setItem('authToken', response.data.token);
     }
     return response.data;
   } catch (error) {
     console.error("Signup failed:", error.response?.data || error.message);
     throw error.response?.data || new Error('Signup failed');
   }
 };

export const fetchUserProfile = async () => {
   try {
     // Token is added automatically by the interceptor in api.js
     const response = await api.get('/auth/me');
     return response.data;
   } catch (error) {
     console.error("Fetching profile failed:", error.response?.data || error.message);
     // Handle token expiry or invalid token (e.g., redirect to login)
     if (error.response?.status === 401) {
         localStorage.removeItem('authToken');
         // Optionally redirect to login page
     }
     throw error.response?.data || new Error('Failed to fetch profile');
   }
};

// Add other service functions for destinations, uploads etc.
export const fetchDestinations = async (params = {}) => { // Example for fetching destinations
    try {
        const response = await api.get('/destinations', { params }); // Pass query params like page, limit, search
        return response.data;
    } catch (error) {
        console.error("Fetching destinations failed:", error.response?.data || error.message);
        throw error.response?.data || new Error('Failed to fetch destinations');
    }
};