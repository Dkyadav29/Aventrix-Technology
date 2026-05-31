# ServiceCo Project - GitHub Copilot Instructions

This is a comprehensive React 18 service-based company website project with full page routing, components, and services.

## Project Overview

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS 3
- **Routing**: React Router DOM v6
- **HTTP Client**: Axios
- **Animations**: Framer Motion
- **Icons**: React Icons

## Project Structure

The project follows a modular structure:

- `src/components/` - Reusable React components (Navbar, Footer, Button, Card, HeroSection, Newsletter)
- `src/pages/` - Page components for all routes (Home, About, Services, Blog, Careers, Contact, FAQ, Privacy, Terms)
- `src/services/` - API service layer with Axios
- `src/hooks/` - Custom React hooks
- `src/utils/` - Utility functions
- `src/types/` - TypeScript interfaces

## Pages Included

1. **Home** - Landing page with features and services preview
2. **About** - Company information, timeline, team, and values
3. **Services** - List of all services with descriptions
4. **Service Details** - Individual service page with pricing and portfolio
5. **Portfolio** - Project showcase with category filtering
6. **Blog** - Blog post listing with filtering and featured post
7. **Blog Details** - Individual blog post with related posts
8. **Careers** - Job listings with expandable job details
9. **Contact** - Contact form and office locations
10. **FAQ** - Expandable FAQ organized by categories
11. **Privacy Policy** - Privacy policy page
12. **Terms & Conditions** - Terms and conditions page

## Key Features

- Fully responsive design (mobile-first)
- Smooth animations with Framer Motion
- Type-safe with TypeScript
- Custom hooks for common operations
- API-ready service layer
- Component library with variants
- SEO-friendly structure
- Dark mode ready (TailwindCSS supports it)
- Path aliases for clean imports (@components, @pages, @services, @utils, @hooks, @types)

## Getting Started

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Build for production: `npm run build`

## Development Notes

- All components use React Router for navigation
- Framer Motion is used for smooth page transitions
- TailwindCSS for all styling
- Mock data is included in pages (replace with API calls)
- Environment variables in `.env` file

## Customization Guide

To customize the website:

1. **Colors**: Edit `tailwind.config.js` primary and secondary colors
2. **Company Info**: Update in Navbar, Footer, Contact pages
3. **Content**: Replace mock data in pages with API calls
4. **Images**: Replace emoji placeholders with real images
5. **Social Links**: Update in Footer component
