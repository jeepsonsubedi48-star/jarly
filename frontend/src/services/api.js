import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const apiService = {
  // Health check
  getHealth: () => api.get('/health').then(res => res.data),

  // Auth endpoints
  register: (userData) => api.post('/auth/register', userData),
  login: (credentials) => api.post('/auth/login', credentials),
  logout: () => api.post('/auth/logout'),

  // Water usage endpoints
  getUsage: () => api.get('/usage'),
  recordUsage: (usageData) => api.post('/usage', usageData),
  getUsageAnalytics: () => api.get('/usage/analytics'),

  // Billing endpoints
  getBills: () => api.get('/bills'),
  getBillById: (id) => api.get(`/bills/${id}`),
  recordPayment: (paymentData) => api.post('/bills/payment', paymentData),

  // Notification endpoints
  getNotifications: () => api.get('/notifications'),
  createNotification: (notificationData) => api.post('/notifications', notificationData),
};

export default api;
