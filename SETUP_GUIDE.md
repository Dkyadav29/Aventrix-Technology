# Complete Project Setup & Implementation Guide

This guide provides step-by-step instructions to complete the ServiceCo website project.

## Phase 1: Installation & Setup

### Step 1: Install Dependencies

```bash
npm install
```

This installs all required packages:
- React 18 and React DOM
- React Router DOM for routing
- Axios for API calls
- Framer Motion for animations
- React Icons for icons
- TailwindCSS for styling
- TypeScript for type safety

### Step 2: Environment Setup

```bash
cp .env.example .env
```

Edit `.env` with your configuration:
```
VITE_API_URL=https://your-api.com
VITE_ENABLE_BETA_FEATURES=false
```

### Step 3: Verify Installation

```bash
npm run dev
```

The dev server should start at http://localhost:5173

## Phase 2: Customization

### Step 1: Update Company Information

**File**: `src/components/Navbar.tsx` (Line 18)
- Change "ServiceCo" to your company name

**File**: `src/components/Footer.tsx` (Lines 16-22)
- Update company name, description, and contact info
- Update social media links
- Update copyright year

**File**: `src/pages/Contact.tsx` (Lines 164-169)
- Update phone number
- Update email address
- Update office addresses

### Step 2: Customize Colors

**File**: `tailwind.config.js`

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',      // Light background
        100: '#e0f2fe',
        500: '#0ea5e9',     // Main brand color
        600: '#0284c7',     // Darker variant
        700: '#0369a1',
        900: '#082f49',     // Darkest
      },
      secondary: {
        50: '#faf5ff',
        500: '#a855f7',     // Accent color
        600: '#9333ea',
        700: '#7e22ce',
        900: '#3f0f5c',
      },
    },
  },
}
```

### Step 3: Replace Mock Data

All pages use mock data. To integrate real data:

#### Blog Page (`src/pages/Blog.tsx`)
```tsx
// Replace mock data with API call
const { data: posts } = useFetch('/blog');
```

#### Portfolio Page (`src/pages/Portfolio.tsx`)
```tsx
// Replace mock data with API call
const { data: projects } = useFetch('/portfolio');
```

#### Services Page (`src/pages/Services.tsx`)
```tsx
// Replace mock data with API call
const { data: services } = useFetch('/services');
```

## Phase 3: API Integration

### Update API Endpoints

**File**: `src/services/api.ts`

Update the BASE_URL:
```typescript
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://api.example.com';
```

Add new API endpoints:
```typescript
export const myNewAPI = {
  getAll: () => apiClient.get('/endpoint'),
  create: (data: any) => apiClient.post('/endpoint', data),
  update: (id: string, data: any) => apiClient.put(`/endpoint/${id}`, data),
  delete: (id: string) => apiClient.delete(`/endpoint/${id}`),
};
```

### Use API in Components

```tsx
import { blogAPI } from '@services/api';

useEffect(() => {
  const fetchPosts = async () => {
    try {
      const { data } = await blogAPI.getAll();
      setPosts(data);
    } catch (error) {
      console.error(error);
    }
  };
  fetchPosts();
}, []);
```

## Phase 4: Add Images

### Replace Emoji Placeholders

1. **Blog Posts** - `src/pages/Blog.tsx` (Line 12)
   ```tsx
   image: '⚛️',  // Replace with actual image URL
   ```

2. **Portfolio Projects** - `src/pages/Portfolio.tsx` (Line 45)
   ```tsx
   image: '🛍️',  // Replace with actual image URL
   ```

3. **Team Members** - `src/pages/About.tsx` (Line 72)
   ```tsx
   image: '👨‍💼',  // Replace with actual image URL
   ```

### Upload Images

Place images in `public/images/` folder and use dynamic imports or URLs:

```tsx
import imageName from '@/assets/images/image.jpg';
// or
<img src="/images/image.jpg" alt="description" />
```

## Phase 5: Deploy

### Option 1: Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Option 2: Deploy to Netlify

```bash
npm run build
# Connect your Git repo to Netlify
# Set build command: npm run build
# Set publish directory: dist
```

### Option 3: Manual Deployment

```bash
npm run build
# Upload the 'dist' folder to your server
```

## Phase 6: SEO Optimization

### Update Meta Tags

**File**: `index.html`

```html
<meta name="description" content="Your company description" />
<meta name="keywords" content="keyword1, keyword2" />
<meta name="author" content="Company Name" />
```

### Add Structured Data

Add in your page components:
```tsx
useEffect(() => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Company Name",
    "url": "https://company.com"
  };
  // Add to page head
}, []);
```

## Phase 7: Analytics & Tracking

### Add Google Analytics

**File**: `src/main.tsx`

```tsx
import ReactGA from 'react-ga4';

ReactGA.initialize(process.env.REACT_APP_GA_ID);
```

Track page views in `src/App.tsx`:
```tsx
useEffect(() => {
  ReactGA.send({ hitType: "pageview", page: location.pathname });
}, [location]);
```

## Phase 8: Performance Optimization

### Enable Image Optimization

Install image optimization:
```bash
npm install vite-plugin-image-optimization
```

### Code Splitting

Already configured with React Router. Dynamic imports:
```tsx
const LazyComponent = lazy(() => import('./pages/Page'));
```

### Caching Strategy

Configure in `vite.config.ts`:
```tsx
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        vendor: ['react', 'react-dom', 'react-router-dom']
      }
    }
  }
}
```

## Troubleshooting

### Issue: Styles not applying
**Solution**: Make sure Tailwind CSS postcss is configured. Check `tailwind.config.js` and `postcss.config.js`.

### Issue: Images not loading
**Solution**: Use relative paths from public folder or import images in src.

### Issue: Routes not working
**Solution**: Ensure Router is wrapping Routes in `App.tsx`.

### Issue: API calls failing
**Solution**: Check CORS settings, API endpoint, and network tab in DevTools.

## Performance Checklist

- [ ] Enable gzip compression
- [ ] Optimize images (webp format)
- [ ] Implement lazy loading
- [ ] Add caching headers
- [ ] Configure CDN
- [ ] Minify CSS/JS
- [ ] Enable code splitting
- [ ] Add service workers
- [ ] Monitor Core Web Vitals

## Security Checklist

- [ ] Use HTTPS only
- [ ] Set security headers
- [ ] Implement CSRF protection
- [ ] Sanitize user inputs
- [ ] Validate data server-side
- [ ] Use environment variables for secrets
- [ ] Keep dependencies updated
- [ ] Enable Content Security Policy

## Maintenance

### Keep Dependencies Updated

```bash
npm update
npm audit fix
```

### Monitor Performance

```bash
npm run build -- --analyze
```

### Test Components

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom
npm test
```

---

**Ready to launch? You've got everything you need! 🚀**
