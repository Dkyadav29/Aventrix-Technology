import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import Card from '@components/Card';
import Newsletter from '@components/Newsletter';
import { formatDate } from '@utils/helpers';

const BlogDetails = () => {
  const { id } = useParams();

  // Mock data - in real app, fetch from API
  const blogPost = {
    id,
    title: 'Getting Started with React 18: What\'s New and How to Use It',
    author: 'John Doe',
    date: '2024-01-15',
    category: 'Technology',
    image: '⚛️',
    readTime: 5,
    content: `
React 18 introduces several groundbreaking features that enhance performance and user experience.

## Key Features of React 18

### 1. Concurrent Rendering
React 18 introduces concurrent features that allow React to interrupt, pause, resume, or abandon a render. This gives apps more responsiveness.

### 2. Automatic Batching
Batching is when React groups multiple state updates into a single re-render for better performance.

### 3. useTransition Hook
This hook allows you to mark state updates as non-urgent to keep the UI responsive.

### 4. useDeferredValue Hook
This hook lets you defer less urgent parts of the UI while prioritizing renders.

### 5. Suspense Enhancements
Suspense now fully works on the server side, enabling new SSR capabilities.

## Getting Started

To use React 18, update your package.json:

\`\`\`bash
npm install react@18 react-dom@18
\`\`\`

Then update your root render code:

\`\`\`javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
\`\`\`

## Best Practices

1. Update dependencies incrementally
2. Test with development mode to catch issues
3. Use the React DevTools to monitor performance
4. Leverage new hooks for better optimization

React 18 is a significant step forward in React's evolution. Embrace these new features to build faster, more responsive applications.
    `,
    relatedPosts: [
      { id: 2, title: 'Web Design Trends for 2024', image: '🎨' },
      { id: 3, title: 'Mobile-First Development Best Practices', image: '📱' },
      { id: 4, title: 'The Future of AI in Web Development', image: '🤖' },
    ],
  };

  return (
    <div>
      {/* Back Button */}
      <div className="bg-gray-50 py-4">
        <div className="container-custom">
          <Link to="/blog" className="flex items-center gap-2 text-primary-600 hover:gap-4 transition-all">
            <FiArrowLeft /> Back to Blog
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="container-custom max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="mb-6">
              <span className="text-sm font-semibold text-primary-600 uppercase">
                {blogPost.category}
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6">{blogPost.title}</h1>
            <div className="flex items-center justify-between text-gray-600">
              <div>
                <p className="font-semibold">{blogPost.author}</p>
                <p className="text-sm">
                  {formatDate(blogPost.date)} • {blogPost.readTime} min read
                </p>
              </div>
              <div className="text-6xl">{blogPost.image}</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container-custom max-w-3xl">
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
              {blogPost.content}
            </div>
          </motion.article>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t">
            <div className="flex flex-wrap gap-2">
              {['React', 'React 18', 'JavaScript', 'Web Development'].map((tag, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-primary-50 cursor-pointer transition-colors"
                >
                  #{tag}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Author Info */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom max-w-3xl">
          <Card className="md:flex gap-6 items-center">
            <div className="text-6xl mb-4 md:mb-0">👨‍💼</div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">{blogPost.author}</h3>
              <p className="text-gray-600 mb-4">
                Experienced web developer and technical writer passionate about sharing knowledge with the community.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-primary-600 hover:underline">LinkedIn</a>
                <a href="#" className="text-primary-600 hover:underline">Twitter</a>
                <a href="#" className="text-primary-600 hover:underline">Website</a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="section-title">Related Articles</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {blogPost.relatedPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/blog/${post.id}`}>
                  <Card className="cursor-pointer h-full">
                    <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg p-8 text-center flex items-center justify-center h-40 mb-4">
                      <div className="text-5xl">{post.image}</div>
                    </div>
                    <h3 className="font-bold text-lg">{post.title}</h3>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Subscribe to Our Newsletter</h2>
          <p className="text-xl mb-8 opacity-90">
            Get the latest articles and insights delivered to your inbox
          </p>
          <form className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-300"
            />
            <button className="btn-primary">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default BlogDetails;
