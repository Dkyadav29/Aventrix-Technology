import axios, { AxiosInstance } from 'axios';
import type {
  ApiResponse,
  CaptchaChallenge,
  ContactFormData,
  Testimonial,
  TestimonialInvite,
  TestimonialSubmission,
} from '../types/index';

import { API_BASE_URL } from './config';

export { isApiConfigured } from './config';

// Create axios instance

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

// CAPTCHA API (challenge is generated and verified only on the server)
const captchaAPI = {
  get: () => apiClient.get<ApiResponse<CaptchaChallenge>>('/captcha'),
  verify: (captcha_id: string, captcha_answer: string) =>
    apiClient.post<ApiResponse<{ captcha_token: string; expires_in: number }>>('/captcha/verify', {
      captcha_id,
      captcha_answer,
    }),
};

// Contact API
const contactAPI = {
  send: (data: ContactFormData): Promise<ApiResponse<null>> =>
    apiClient.post('/contact', data),
};

// Testimonials API
const testimonialsAPI = {
  /** Approved testimonials for the website */
  list: () => apiClient.get<ApiResponse<Testimonial[]>>('/testimonials'),
  /** Pre-fill data for a client's single-use invite link */
  invite: (token: string) =>
    apiClient.get<ApiResponse<TestimonialInvite>>(`/testimonials/invite/${encodeURIComponent(token)}`),
  submit: (data: TestimonialSubmission) =>
    apiClient.post<ApiResponse<{ id: number; status: string }>>('/testimonials/submit', data),
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
  captchaAPI,
  contactAPI,
  faqAPI,
  testimonialsAPI,
};
