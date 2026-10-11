import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSection from '@components/HeroSection';
import SectionHeading from '@components/SectionHeading';
import Newsletter from '@components/Newsletter';
import Seo from '@components/Seo';
import { FiArrowRight, FiCalendar, FiClock } from 'react-icons/fi';
import { formatDate } from '@utils/helpers';

const posts = [
  {
    id: 1,
    title: 'Getting Started with React 18',
    excerpt: 'Learn the latest features and improvements in React 18...',
    category: 'technology',
    author: 'John Doe',
    date: '2024-01-15',
    readTime: 5,
    image: '⚛️',
  },
  {
    id: 2,
    title: 'Web Design Trends for 2024',
    excerpt: 'Discover the hottest design trends that will shape web design...',
    category: 'design',
    author: 'Jane Smith',
    date: '2024-01-10',
    readTime: 7,
    image: '🎨',
  },
  {
    id: 3,
    title: 'Mobile-First Development Best Practices',
    excerpt: 'Essential tips for building mobile-first applications...',
    category: 'technology',
    author: 'Mike Johnson',
    date: '2024-01-05',
    readTime: 6,
    image: '📱',
  },
  {
    id: 4,
    title: 'The Future of AI in Web Development',
    excerpt: 'How artificial intelligence is transforming web development...',
    category: 'business',
    author: 'Sarah Wilson',
    date: '2024-01-01',
    readTime: 8,
    image: '🤖',
  },
  {
    id: 5,
    title: 'Maximizing Website Performance',
    excerpt: 'Optimization techniques to boost your website speed...',
    category: 'technology',
    author: 'John Doe',
    date: '2023-12-28',
    readTime: 9,
    image: '⚡',
  },
  {
    id: 6,
    title: 'Building a Strong Online Brand',
    excerpt: 'Strategic approaches to establish your digital presence...',
    category: 'business',
    author: 'Jane Smith',
    date: '2023-12-25',
    readTime: 5,
    image: '🎯',
  },
];

const categories = [
  { id: 'all', label: 'All Posts' },
  { id: 'technology', label: 'Technology' },
  { id: 'design', label: 'Design' },
  { id: 'business', label: 'Business' },
];

const PostMeta = ({ date, readTime }: { date: string; readTime: number }) => (
  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500 dark:text-gray-400">
    <span className="inline-flex items-center gap-1.5">
      <FiCalendar size={13} aria-hidden="true" />
      {formatDate(date)}
    </span>
    <span className="inline-flex items-center gap-1.5">
      <FiClock size={13} aria-hidden="true" />
      {readTime} min read
    </span>
  </div>
);

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPosts =
    selectedCategory === 'all'
      ? posts
      : posts.filter((p) => p.category === selectedCategory);

  const [featured, ...rest] = filteredPosts;

  return (
    <div className="bg-white dark:bg-gray-950">
      <Seo
        title="Blog — Insights on Web, Mobile & AI"
        description="Articles and tutorials on web development, mobile apps, WordPress, API integration, testing, and AI."
        path="/blog"
        // Sample posts only (fictional authors, identical article for every id). Remove noIndex once real articles exist.
        noIndex
      />
      {/* Hero */}
      <HeroSection
        title="Our Blog"
        subtitle="Blog"
        description="Stay updated with industry news, tips, and expert insights"
      />

      {/* Blog Section */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Latest Insights"
            title="Latest Articles & Insights"
            description="Industry news, expert tips, and professional insights"
          />

          {/* Category Filter */}
          <div
            role="group"
            aria-label="Filter articles by category"
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => {
              const active = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setSelectedCategory(category.id)}
                  aria-pressed={active}
                  className={`pill ${active ? 'pill-active' : ''}`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              {/* Featured Post */}
              {featured && (
                <Link
                  to={`/blog/${featured.id}`}
                  className="group surface surface-hover mb-8 grid overflow-hidden md:grid-cols-[2fr_3fr]"
                >
                  <div className="relative flex min-h-[14rem] items-center justify-center bg-gradient-to-br from-primary-600 to-secondary-700">
                    <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
                    <span className="relative text-7xl transition-transform duration-500 group-hover:scale-110" aria-hidden="true">
                      {featured.image}
                    </span>
                  </div>
                  <div className="flex flex-col justify-center p-6 md:p-10">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="chip-primary">Featured</span>
                      <span className="chip capitalize">{featured.category}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-extrabold mb-3 text-gray-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                      {featured.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{featured.excerpt}</p>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">By {featured.author}</p>
                        <PostMeta date={featured.date} readTime={featured.readTime} />
                      </div>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 dark:text-primary-300 group-hover:gap-3 transition-all">
                        Read More <FiArrowRight />
                      </span>
                    </div>
                  </div>
                </Link>
              )}

              {/* Blog Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {rest.map((post) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.id}`}
                    className="group surface surface-hover flex h-full flex-col overflow-hidden"
                  >
                    <div className="relative flex h-40 items-center justify-center bg-gradient-to-br from-primary-600 to-secondary-700">
                      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
                      <span className="relative text-5xl transition-transform duration-500 group-hover:scale-110" aria-hidden="true">
                        {post.image}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <span className="chip-primary self-start mb-3 capitalize">{post.category}</span>
                      <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-5 leading-relaxed">{post.excerpt}</p>
                      <div className="mt-auto border-t border-gray-200 dark:border-white/10 pt-4">
                        <PostMeta date={post.date} readTime={post.readTime} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default Blog;
