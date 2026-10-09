import type { IconType } from 'react-icons';
import {
  FiCode,
  FiSmartphone,
  FiLayout,
  FiLink2,
  FiShield,
  FiCpu,
  FiZap,
  FiPenTool,
} from 'react-icons/fi';

/**
 * Single source of truth for everything the site says about its services.
 * Used by the home page, the Services page, the footer, and /services/:id.
 *
 * PLACEHOLDER CONTENT: the `features`, `benefits`, `technologies` and `faq`
 * entries were drafted from the existing marketing copy. Edit them here and
 * every page updates.
 */
export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceInfo {
  id: string;
  title: string;
  /** Short line used on cards */
  description: string;
  /** Longer intro used on the details page */
  overview: string;
  icon: IconType;
  features: string[];
  benefits: string[];
  technologies: string[];
  faq: ServiceFAQ[];
}

export const SERVICE_PROCESS = [
  { num: '01', title: 'Discover', desc: 'We learn your goals, users, and constraints before writing a line of code' },
  { num: '02', title: 'Plan', desc: 'A clear scope, timeline, and fixed quote — no guesswork' },
  { num: '03', title: 'Design', desc: 'Wireframes and UI that are reviewed with you before build' },
  { num: '04', title: 'Build', desc: 'Short sprints with regular demos so you always know where things stand' },
  { num: '05', title: 'Launch', desc: 'Testing, deployment, and a clean handover of everything we built' },
  { num: '06', title: 'Support', desc: 'Post-launch fixes and improvements as your product grows' },
];

export const SERVICES: ServiceInfo[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'React, Next.js, Node.js — clean, fast, and scalable web apps',
    overview:
      'From marketing sites to full web applications, we build fast, accessible, and maintainable products with modern frameworks and clean architecture.',
    icon: FiCode,
    features: ['Responsive, mobile-first UI', 'SEO-ready pages', 'Secure, scalable backend', 'Clean, documented code'],
    benefits: [
      'Responsive and mobile-friendly designs',
      'Fast loading times and excellent performance',
      'SEO optimized for search engine visibility',
      'Secure and scalable architecture',
      'Ongoing maintenance and support',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'MongoDB'],
    faq: [
      {
        q: 'How long does a typical website take?',
        a: 'A marketing site usually takes 2–4 weeks; a full web application depends on scope, which we agree on before starting.',
      },
      {
        q: 'Will I own the code?',
        a: 'Yes. You get 100% ownership of the source code, repositories, and deployment setup.',
      },
      {
        q: 'Can you work with my existing site?',
        a: 'Yes. We can redesign, extend, or migrate an existing site rather than starting from scratch.',
      },
    ],
  },
  {
    id: 'mobile-development',
    title: 'Android & iOS Apps',
    description: 'Cross-platform apps for iOS & Android with React Native',
    overview:
      'We develop feature-rich mobile apps that engage users and drive meaningful interactions, using cross-platform tools so you ship to both stores from one codebase.',
    icon: FiSmartphone,
    features: ['One codebase, both platforms', 'App Store & Play Store release', 'Push notifications', 'Offline-friendly'],
    benefits: [
      'Native iOS and Android development',
      'Cross-platform solutions with React Native',
      'App Store and Google Play optimization',
      'Push notifications and real-time features',
      'Analytics and user tracking',
    ],
    technologies: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'Node.js', 'AWS'],
    faq: [
      {
        q: 'Do you build native or cross-platform apps?',
        a: 'We default to React Native so one team ships to both stores, and go native where a feature genuinely needs it.',
      },
      {
        q: 'Do you handle app store submission?',
        a: 'Yes. We prepare listings, screenshots, and builds, and guide the app through review on both stores.',
      },
    ],
  },
  {
    id: 'wordpress-development',
    title: 'WordPress Development',
    description: 'Custom themes, plugins, and WooCommerce stores you can manage yourself',
    overview:
      'Custom WordPress sites that are fast, secure, and easy for your team to update — without the bloat of off-the-shelf themes.',
    icon: FiLayout,
    features: ['Custom theme development', 'WooCommerce stores', 'Plugin development', 'Speed & security hardening'],
    benefits: [
      'Easy for non-technical teams to update content',
      'Custom design instead of a recycled template',
      'Optimized for speed and Core Web Vitals',
      'Hardened against common security issues',
      'Training and documentation included',
    ],
    technologies: ['WordPress', 'PHP', 'WooCommerce', 'ACF', 'MySQL', 'Elementor'],
    faq: [
      {
        q: 'Can you fix or speed up my existing WordPress site?',
        a: 'Yes. Performance audits, security cleanups, and plugin consolidation are common engagements.',
      },
      {
        q: 'Will I be able to edit the site myself?',
        a: 'Yes. We build with the WordPress editor in mind and walk your team through managing content.',
      },
    ],
  },
  {
    id: 'api-integration',
    title: 'API Integration',
    description: 'Connect your app to any third-party service or API',
    overview:
      'REST APIs, webhooks, and third-party integrations that connect your systems reliably — payments, CRMs, messaging, maps, and more.',
    icon: FiLink2,
    features: ['Payment gateways', 'CRM & email tools', 'Webhooks & automation', 'Custom REST APIs'],
    benefits: [
      'Reliable connections between your systems',
      'Secure handling of keys and user data',
      'Clear error handling and monitoring',
      'Documented endpoints your team can extend',
      'Reduced manual work through automation',
    ],
    technologies: ['REST', 'GraphQL', 'Node.js', 'Stripe', 'Razorpay', 'Zapier', 'OAuth 2.0'],
    faq: [
      {
        q: 'Which services can you integrate?',
        a: 'Any service with an API — payments, CRMs, email, SMS, maps, analytics, and internal systems.',
      },
      {
        q: 'Can you build an API for my own product?',
        a: 'Yes. We design and build documented REST or GraphQL APIs with authentication and rate limiting.',
      },
    ],
  },
  {
    id: 'software-testing',
    title: 'Software & Load Testing',
    description: 'Automated, manual, and load testing so releases ship with confidence',
    overview:
      'Comprehensive testing to ensure quality and reliability — from automated test suites to load tests that show how your product behaves under real traffic.',
    icon: FiShield,
    features: ['Automated test suites', 'Manual QA & bug reports', 'Load & stress testing', 'CI integration'],
    benefits: [
      'Catch regressions before your users do',
      'Know your real capacity before launch day',
      'Clear, prioritized bug reports',
      'Tests that run automatically on every change',
      'Confidence to release more often',
    ],
    technologies: ['Playwright', 'Selenium', 'Jest', 'k6', 'JMeter', 'GitHub Actions'],
    faq: [
      {
        q: 'Can you test an app we did not build?',
        a: 'Yes. Independent QA and load testing of existing products is a common engagement.',
      },
      {
        q: 'What does a load test report include?',
        a: 'Response times, error rates, and throughput at each traffic level, plus the bottlenecks we found and how to fix them.',
      },
    ],
  },
  {
    id: 'ai-integration',
    title: 'AI Integration',
    description: 'ChatGPT and AI integrations to make your product smarter',
    overview:
      'Practical AI features built into your product — assistants, document understanding, search, and automation using the latest language models.',
    icon: FiCpu,
    features: ['AI chat assistants', 'Document & data extraction', 'Semantic search', 'Workflow automation'],
    benefits: [
      'Features your users can actually use, not demos',
      'Your data stays under your control',
      'Costs and usage kept visible',
      'Graceful fallbacks when the model is unsure',
      'Built on APIs you can swap later',
    ],
    technologies: ['OpenAI API', 'Claude API', 'LangChain', 'Vector databases', 'Python', 'Node.js'],
    faq: [
      {
        q: 'Do you train custom models?',
        a: 'Usually not needed. We get strong results from existing models with good prompts, retrieval, and your data.',
      },
      {
        q: 'Is our data sent to third parties?',
        a: 'Only what the feature needs, and we are transparent about which providers are used and how data is handled.',
      },
    ],
  },
  {
    id: 'automation',
    title: 'Automation & Bots',
    description: 'Scripts and bots to automate your repetitive workflows',
    overview:
      'Browser automation, data scraping, and scheduled scripts that take repetitive work off your team and keep systems in sync.',
    icon: FiZap,
    features: ['Browser automation', 'Web scraping', 'Scheduled reports', 'Data sync between tools'],
    benefits: [
      'Hours of manual work removed every week',
      'Fewer human errors in repetitive tasks',
      'Scripts that log what they did',
      'Alerts when something needs attention',
      'Runs on your schedule, unattended',
    ],
    technologies: ['Python', 'Node.js', 'Playwright', 'Selenium', 'Cron', 'Google Sheets API'],
    faq: [
      {
        q: 'What kind of tasks can be automated?',
        a: 'Anything repetitive with clear rules — data entry, report generation, form submissions, monitoring, and syncing between tools.',
      },
    ],
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Clean, responsive, and user-friendly interface design',
    overview:
      'User-first design that drives engagement — from wireframes to high-fidelity screens and a design system your developers can build from.',
    icon: FiPenTool,
    features: ['Wireframes & prototypes', 'High-fidelity UI', 'Design systems', 'Usability reviews'],
    benefits: [
      'Interfaces users understand without a manual',
      'Consistent look across web and mobile',
      'Design files developers can build from directly',
      'Accessibility considered from the start',
      'Fewer redesigns later',
    ],
    technologies: ['Figma', 'Tailwind CSS', 'Framer', 'Storybook'],
    faq: [
      {
        q: 'Can you redesign an existing product?',
        a: 'Yes. We start with a review of the current UI, then redesign in stages so your users are not disrupted.',
      },
    ],
  },
];

export const getService = (id: string | undefined) => SERVICES.find((s) => s.id === id);
