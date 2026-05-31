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
  subject: string;
  message: string;
}

// API Response
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}
