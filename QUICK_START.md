# Quick Start Guide

Get your ServiceCo website up and running in minutes!

## 1. Installation (2 minutes)

```bash
npm install
```

## 2. Start Development Server (1 minute)

```bash
npm run dev
```

Open http://localhost:5173 in your browser. You should see the website!

## 3. Basic Customization (5 minutes)

### Update Company Name

**In `src/components/Navbar.tsx` (line 18):**
```tsx
<Link to="/" className="text-2xl font-bold text-primary-600">
  YourCompanyName  <!-- Change "ServiceCo" to your company name -->
</Link>
```

### Update Colors

**In `tailwind.config.js`:**
```javascript
colors: {
  primary: {
    600: '#0284c7',  // Change to your brand color
  },
  secondary: {
    600: '#9333ea',  // Change to your accent color
  },
}
```

### Update Contact Info

**In `src/components/Footer.tsx` (around line 50):**
```tsx
<li>Email: your-email@example.com</li>
<li>Phone: +1 (555) YOUR-PHONE</li>
<li>Address: Your Address, City, State ZIP</li>
```

## 4. Connect to Your API (10 minutes)

**In `.env`:**
```
VITE_API_URL=https://your-api-endpoint.com
```

**In `src/services/api.ts`:**
```typescript
export const myAPI = {
  getAll: () => apiClient.get('/your-endpoint'),
  getById: (id: string) => apiClient.get(`/your-endpoint/${id}`),
};
```

**In your page component:**
```tsx
useEffect(() => {
  const fetchData = async () => {
    const response = await myAPI.getAll();
    setData(response.data);
  };
  fetchData();
}, []);
```

## 5. Build for Production (2 minutes)

```bash
npm run build
```

This creates a production-ready build in the `dist` folder.

## File Locations Quick Reference

| What you want to do | File | Line |
|---|---|---|
| Change company name | `Navbar.tsx` | 18 |
| Change colors | `tailwind.config.js` | N/A |
| Update footer info | `Footer.tsx` | 50 |
| Add API endpoints | `services/api.ts` | N/A |
| Edit home page | `pages/Home.tsx` | N/A |
| Edit blog page | `pages/Blog.tsx` | 36 |
| Edit services page | `pages/Services.tsx` | 35 |
| Add new page | `pages/NewPage.tsx` | N/A |

## Common Tasks

### Add a New Page

1. Create `src/pages/MyPage.tsx`:
```tsx
const MyPage = () => {
  return <div>My Page Content</div>;
};
export default MyPage;
```

2. Add to `src/pages/index.ts`:
```tsx
export { default as MyPage } from './MyPage';
```

3. Add route in `src/App.tsx`:
```tsx
<Route path="/mypage" element={<MyPage />} />
```

### Update Home Page Content

Edit `src/pages/Home.tsx` - modify the mock data sections.

### Add Custom Styling

Use TailwindCSS classes in components:
```tsx
<div className="bg-primary-600 text-white p-6 rounded-lg">
  Content
</div>
```

Or add to `src/index.css`:
```css
@layer components {
  .my-custom-class {
    @apply px-6 py-3 rounded-lg font-bold;
  }
}
```

### Use Animations

```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Animated content
</motion.div>
```

## Deployment Quick Links

- **Vercel**: `vercel deploy`
- **Netlify**: Connect Git repo, set build: `npm run build`, publish: `dist`
- **GitHub Pages**: Push dist folder to gh-pages branch

## Next Steps

1. ✅ Customize company info
2. ✅ Replace placeholder images
3. ✅ Connect to your API
4. ✅ Test all pages
5. ✅ Deploy to production

## Need Help?

- Check `README.md` for detailed documentation
- See `SETUP_GUIDE.md` for comprehensive setup
- Review component examples in `src/components/`
- Check TypeScript types in `src/types/index.ts`

---

**Happy coding! 🚀**
