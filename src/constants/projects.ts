/**
 * Portfolio projects shown on /portfolio and in the home page "Featured Work".
 *
 * These are CONCEPT projects: they demonstrate what the studio builds and
 * contain no client names, metrics or outcomes. Replace or extend them with
 * real client work as it ships (set `kind: 'client'`).
 */
export type ProjectKind = 'concept' | 'client';
export type ProjectVisual = 'dashboard' | 'storefront' | 'analytics' | 'booking';

export interface Project {
  id: string;
  title: string;
  categories: string[];
  description: string;
  delivered: string[];
  technologies: string[];
  visual: ProjectVisual;
  kind: ProjectKind;
  /** Live URL or case-study link, when one exists */
  link?: string;
}

export const PROJECT_CATEGORIES = ['SaaS', 'Web Application', 'E-Commerce', 'Data & Analytics', 'Marketplace'];

export const PROJECTS: Project[] = [
  {
    id: 'business-management-platform',
    title: 'Business Management Platform',
    categories: ['SaaS', 'Web Application'],
    description:
      'A modern business management platform that brings everyday operations, customer management, reporting, and workflows into one centralized system.',
    delivered: [
      'Product strategy',
      'UI/UX design',
      'Web application development',
      'Admin dashboard',
      'API integration',
      'Authentication',
      'Responsive experience',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'REST API'],
    visual: 'dashboard',
    kind: 'concept',
  },
  {
    id: 'ecommerce-experience',
    title: 'E-Commerce Experience',
    categories: ['E-Commerce', 'Web Application'],
    description:
      'A fast and conversion-focused e-commerce experience designed to make product discovery, purchasing, and customer management simple.',
    delivered: [
      'UX/UI design',
      'Responsive storefront',
      'Product management',
      'Shopping experience',
      'Payment integration',
      'Admin functionality',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Payment API'],
    visual: 'storefront',
    kind: 'concept',
  },
  {
    id: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    categories: ['SaaS', 'Data & Analytics'],
    description:
      'A clean analytics platform that transforms business data into actionable insights through intuitive dashboards and visual reporting.',
    delivered: [
      'Dashboard design',
      'Data visualization',
      'User management',
      'Reporting',
      'API integration',
      'Responsive interface',
    ],
    technologies: ['React', 'TypeScript', 'REST API', 'Charts'],
    visual: 'analytics',
    kind: 'concept',
  },
  {
    id: 'service-booking-platform',
    title: 'Service Booking Platform',
    categories: ['Web Application', 'Marketplace'],
    description:
      'A streamlined platform connecting customers with services while simplifying scheduling, management, and communication.',
    delivered: [
      'Customer experience',
      'Service discovery',
      'Booking system',
      'User accounts',
      'Notifications',
      'Management dashboard',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'REST API'],
    visual: 'booking',
    kind: 'concept',
  },
];
