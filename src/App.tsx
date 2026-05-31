import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer } from '@components/index';

const PremiumHome = lazy(() => import('@pages/PremiumHome'));
const WorldClass = lazy(() => import('@pages/WorldClass'));
const About = lazy(() => import('@pages/About'));
const PremiumServices = lazy(() => import('@pages/PremiumServices'));
const ServiceDetails = lazy(() => import('@pages/ServiceDetails'));
const PremiumPortfolio = lazy(() => import('@pages/PremiumPortfolio'));
const Blog = lazy(() => import('@pages/Blog'));
const BlogDetails = lazy(() => import('@pages/BlogDetails'));
const Careers = lazy(() => import('@pages/Careers'));
const PremiumContact = lazy(() => import('@pages/PremiumContact'));
const FAQ = lazy(() => import('@pages/FAQ'));
const PrivacyPolicy = lazy(() => import('@pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('@pages/TermsConditions'));

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const RouteFallback = () => (
  <div
    role="status"
    aria-live="polite"
    aria-label="Loading page"
    className="min-h-[60vh] flex items-center justify-center"
  >
    <div className="h-10 w-10 rounded-full border-4 border-primary-500/30 border-t-primary-500 animate-spin" />
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="min-h-screen" tabIndex={-1}>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<PremiumHome />} />
            <Route path="/world-class" element={<WorldClass />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<PremiumServices />} />
            <Route path="/services/:id" element={<ServiceDetails />} />
            <Route path="/portfolio" element={<PremiumPortfolio />} />

            {/* Blog */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetails />} />

            {/* Other Pages */}
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<PremiumContact />} />
            <Route path="/faq" element={<FAQ />} />

            {/* Legal Pages */}
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsConditions />} />

            {/* 404 - Not Found */}
            <Route
              path="*"
              element={
                <div className="container-custom py-20 text-center">
                  <h1 className="text-5xl font-bold mb-4">404</h1>
                  <p className="text-xl text-gray-600">Page not found</p>
                </div>
              }
            />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
