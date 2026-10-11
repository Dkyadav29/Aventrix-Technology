import React from 'react';

// Navigation Link
export interface NavLink {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

// Service
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  price?: number;
  image?: string;
}

// Portfolio Project
export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  link?: string;
  client?: string;
  year?: number;
}

// Blog Post
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: number;
}

// Team Member
export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  bio?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

// Career Position
export interface CareerPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  description: string;
  requirements: string[];
  responsibilities: string[];
}

// FAQ Item
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

// Contact Form Data
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  /** Service id from constants/services, when the visitor picked one */
  service?: string;
  subject: string;
  message: string;
  /** Server-side CAPTCHA (see aventix-backend). Required when the API is configured. */
  captcha_id?: string;
  captcha_answer?: string;
  captcha_token?: string;
}

/** Response of GET /api/captcha */
export interface CaptchaChallenge {
  captcha_id: string;
  /** data:image/png;base64,... */
  image: string;
  expires_in: number;
}

/** GET /api/testimonials/invite/:token */
export interface TestimonialInvite {
  client_name: string;
  company: string;
  project: string;
  expires_at: string;
}

/** POST /api/testimonials/submit */
export interface TestimonialSubmission {
  token: string;
  author_name: string;
  author_role?: string;
  company?: string;
  quote: string;
  rating: number;
  consent: boolean;
}

/** Public testimonial from GET /api/testimonials (approved + consented only) */
export interface Testimonial {
  id: number;
  author_name: string;
  author_role: string;
  company: string;
  quote: string;
  rating: number;
  featured: boolean;
  date: string | null;
}

/** Error envelope returned by the backend for 4xx responses */
export interface ApiError {
  success: false;
  error: string;
  message?: string;
  errors?: Record<string, string[]>;
  retry_after?: number;
}

// API Response
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}
