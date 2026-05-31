import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSection from '@components/HeroSection';
import Card from '@components/Card';
import Newsletter from '@components/Newsletter';
import Seo from '@components/Seo';
import { FiArrowRight } from 'react-icons/fi';
import { formatDate } from '@utils/helpers';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

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

  const filteredPosts =
    selectedCategory === 'all'
      ? posts
      : posts.filter((p) => p.category === selectedCategory);

  return (
    <div>
      <Seo
        title="Blog — Insights on Web, Mobile & AI"
        description="Articles and tutorials on web development, mobile apps, WordPress, API integration, testing, and AI."
        path="/blog"
      />
      {/* Hero */}
      <HeroSection
        title="Our Blog"
        subtitle="Latest Insights"
        description="Stay updated with industry news, tips, and expert insights"
      />

      {/* Blog Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="section-title"
          >
            Latest Articles & Insights
          </motion.h2>
          <p className="section-subtitle">
            Industry news, expert tips, and professional insights
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>

          {/* Featured Post */}
          {filteredPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <Card className="md:flex gap-8">
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg p-12 text-center flex items-center justify-center h-48">
                    <div className="text-6xl">{filteredPosts[0].image}</div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="flex gap-4 mb-4">
                    <span className="text-sm font-semibold text-primary-600 uppercase">
                      Featured
                    </span>
                    <span className="text-sm font-semibold text-gray-600">
                      {filteredPosts[0].category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold mb-3">{filteredPosts[0].title}</h2>
                  <p className="text-gray-600 mb-4">{filteredPosts[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      <p>By {filteredPosts[0].author}</p>
                      <p>{formatDate(filteredPosts[0].date)} • {filteredPosts[0].readTime} min read</p>
                    </div>
                    <Link
                      to={`/blog/${filteredPosts[0].id}`}
                      className="text-primary-600 hover:gap-2 flex items-center gap-1 transition-all"
                    >
                      Read More <FiArrowRight />
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link to={`/blog/${post.id}`}>
                  <Card className="h-full flex flex-col justify-between cursor-pointer">
                    <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg p-8 text-center mb-4 flex items-center justify-center h-40">
                      <div className="text-5xl">{post.image}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-primary-600 mb-2 uppercase">
                        {post.category}
                      </p>
                      <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                    </div>
                    <div className="border-t pt-4 text-xs text-gray-600">
                      <p>{formatDate(post.date)} • {post.readTime} min read</p>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default Blog;
