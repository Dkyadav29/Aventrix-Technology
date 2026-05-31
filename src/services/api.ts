import axios, { AxiosInstance } from 'axios';
import type { ApiResponse, ContactFormData } from '../types/index';

// Create axios instance
const API_BASE_URL = (import.meta.env.VITE_API_URL as string | undefined) || 'https://api.example.com';

const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Response interceptor
apiClient.interceptors.response.use(
  (response: any) => response,
  (error: any) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

// Services API
const servicesAPI = {
  getAll: () => apiClient.get('/services'),
  getById: (id: string) => apiClient.get(`/services/${id}`),
};

// Portfolio API
const portfolioAPI = {
  getAll: () => apiClient.get('/portfolio'),
  getById: (id: string) => apiClient.get(`/portfolio/${id}`),
};

// Blog API
const blogAPI = {
  getAll: () => apiClient.get('/blog'),
  getById: (id: string) => apiClient.get(`/blog/${id}`),
  getByCategory: (category: string) => apiClient.get(`/blog/category/${category}`),
};

// Careers API
const careersAPI = {
  getAll: () => apiClient.get('/careers'),
  getById: (id: string) => apiClient.get(`/careers/${id}`),
  apply: (data: any) => apiClient.post('/careers/apply', data),
};

// Contact API
const contactAPI = {
  send: (data: ContactFormData): Promise<ApiResponse<null>> =>
    apiClient.post('/contact', data),
};

// FAQ API
const faqAPI = {
  getAll: () => apiClient.get('/faq'),
  getByCategory: (category: string) => apiClient.get(`/faq/category/${category}`),
};

export {
  apiClient,
  servicesAPI,
  portfolioAPI,
  blogAPI,
  careersAPI,
  contactAPI,
  faqAPI,
};
