# ServiceCo - Professional Service Company Website

A full-featured, modern website for a service-based company built with React 18, Vite, TailwindCSS, and Framer Motion.

## 🚀 Features

- **Responsive Design** - Mobile-first, fully responsive layout
- **Modern Tech Stack** - React 18, Vite, TypeScript, TailwindCSS
- **Smooth Animations** - Framer Motion for engaging interactions
- **Comprehensive Pages**:
  - Home - Hero section with features and services preview
  - About - Company story, team, and values
  - Services - Service showcase with detailed pages
  - Portfolio - Project showcase with filtering
  - Blog - Blog posts with categories and details
  - Careers - Job listings with application support
  - Contact - Contact form and location information
  - FAQ - Expandable FAQ sections
  - Legal - Privacy Policy and Terms & Conditions

- **Reusable Components** - Button, Card, HeroSection, Newsletter, etc.
- **Custom Hooks** - useFetch, useLocalStorage, useMediaQuery, useIntersection
- **API Ready** - Axios-based service layer with example endpoints
- **SEO Optimized** - Clean HTML structure and semantic markup
- **Performance** - Code splitting, lazy loading, optimized images

## 📁 Project Structure

```
src/
├── components/           # Reusable React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── HeroSection.tsx
│   ├── Newsletter.tsx
│   └── index.ts
├── pages/               # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── ServiceDetails.tsx
│   ├── Portfolio.tsx
│   ├── Blog.tsx
│   ├── BlogDetails.tsx
│   ├── Careers.tsx
│   ├── Contact.tsx
│   ├── FAQ.tsx
│   ├── PrivacyPolicy.tsx
│   ├── TermsConditions.tsx
│   └── index.ts
├── services/            # API and external services
│   └── api.ts
├── hooks/               # Custom React hooks
│   └── index.ts
├── utils/               # Utility functions
│   └── helpers.ts
├── types/               # TypeScript interfaces
│   └── index.ts
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles with Tailwind

public/                 # Static assets
vite.config.ts         # Vite configuration
tailwind.config.js     # Tailwind configuration
tsconfig.json          # TypeScript configuration
postcss.config.js      # PostCSS configuration
package.json           # Project dependencies
```

## 🛠️ Tech Stack

### Core
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety

### Styling
- **TailwindCSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Autoprefixer** - Vendor prefixing

### Features
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup Environment Variables

```bash
cp .env.example .env
```

Update `.env` with your API endpoints and configuration.

### 3. Development Server

```bash
npm run dev
```

The application will start at `http://localhost:5173`

### 4. Build for Production

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```

## 📝 Usage

### Creating New Pages

1. Create a new file in `src/pages/YourPage.tsx`
2. Add the component to `src/pages/index.ts`
3. Import and add route in `src/App.tsx`

Example:
```tsx
import { motion } from 'framer-motion';
import Newsletter from '@components/Newsletter';

const YourPage = () => {
  return (
    <div>
      <h1>Your Page</h1>
      <Newsletter />
    </div>
  );
};

export default YourPage;
```

### Using Components

```tsx
import { Button, Card, HeroSection } from '@components/index';

// Button with variants
<Button variant="primary" size="lg">Click Me</Button>

// Card with hover effect
<Card hover={true}>
  <h3>Content</h3>
</Card>

// Hero section
<HeroSection
  title="Welcome"
  description="Your description"
  ctaButtons={[
    { label: 'Get Started', variant: 'primary' }
  ]}
/>
```

### Custom Hooks

```tsx
import { useFetch, useLocalStorage, useMediaQuery } from '@hooks/index';

// Fetch data
const { data, loading, error } = useFetch('/api/data');

// Local storage
const [value, setValue] = useLocalStorage('key', defaultValue);

// Media query
const isMobile = useMediaQuery('(max-width: 768px)');
```

### API Calls

```tsx
import { servicesAPI, blogAPI } from '@services/api';

// Get all services
const services = await servicesAPI.getAll();

// Get blog post by ID
const post = await blogAPI.getById('post-1');

// Send contact form
import { contactAPI } from '@services/api';
await contactAPI.send({ name, email, message });
```

## 🎨 Customization

### Change Colors

Edit `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: { /* your colors */ },
      secondary: { /* your colors */ }
    }
  }
}
```

### Update Company Info

Update in components and pages:
- Company name in `Navbar.tsx` and `Footer.tsx`
- Contact info in `Contact.tsx` and `Footer.tsx`
- Social links in `Footer.tsx`

### Add Images

Replace emoji placeholders with actual images in:
- `Blog.tsx` - Blog post thumbnails
- `Portfolio.tsx` - Project images
- `About.tsx` - Team member photos

## 📚 Component API

### Button Component

```tsx
<Button
  variant="primary" | "secondary" | "outline" | "ghost"
  size="sm" | "md" | "lg"
  loading={boolean}
  onClick={() => {}}
/>
```

### Card Component

```tsx
<Card
  className="additional classes"
  hover={true | false}
>
  Content here
</Card>
```

### HeroSection Component

```tsx
<HeroSection
  title="string"
  subtitle="string"
  description="string"
  backgroundImage="url"
  ctaButtons={[
    { label: 'Button', variant: 'primary' }
  ]}
/>
```

## 🔧 Configuration Files

- `vite.config.ts` - Vite build configuration
- `tsconfig.json` - TypeScript settings with path aliases
- `tailwind.config.js` - Tailwind theme customization
- `postcss.config.js` - PostCSS plugins
- `.env.example` - Environment variable template

## 📱 Responsive Breakpoints

- `sm: 640px`
- `md: 768px`
- `lg: 1024px`
- `xl: 1280px`
- `2xl: 1536px`

## 🚀 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

1. Build: `npm run build`
2. Connect your Git repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Deploy to GitHub Pages

```bash
npm run build
# Push the dist folder to gh-pages branch
```

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Support

For support, email support@servicecompany.com or call +1 (555) 123-4567.

## 🎯 Next Steps

1. Update company information
2. Replace placeholder images and emojis
3. Connect to your API backend
4. Customize colors and branding
5. Add analytics tracking
6. Deploy to production

---

**Happy Coding! 🚀**
