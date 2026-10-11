import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiCalendar, FiClock, FiUser } from 'react-icons/fi';
import SectionHeading from '@components/SectionHeading';
import Newsletter from '@components/Newsletter';
import Seo from '@components/Seo';
import { formatDate } from '@utils/helpers';

type Block =
  | { type: 'h2' | 'h3' | 'p'; text: string }
  | { type: 'code'; text: string }
  | { type: 'ol'; items: string[] };

// Turns the lightweight markdown used for post bodies into renderable blocks
const parseContent = (content: string): Block[] => {
  const blocks: Block[] = [];
  const lines = content.trim().split('\n');
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (!line) {
      i += 1;
    } else if (line.startsWith('```')) {
      const code: string[] = [];
      i += 1;
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        code.push(lines[i]);
        i += 1;
      }
      i += 1;
      blocks.push({ type: 'code', text: code.join('\n') });
    } else if (line.startsWith('### ')) {
      blocks.push({ type: 'h3', text: line.slice(4) });
      i += 1;
    } else if (line.startsWith('## ')) {
      blocks.push({ type: 'h2', text: line.slice(3) });
      i += 1;
    } else if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s/, ''));
        i += 1;
      }
      blocks.push({ type: 'ol', items });
    } else {
      blocks.push({ type: 'p', text: line });
      i += 1;
    }
  }

  return blocks;
};

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

  const blocks = parseContent(blogPost.content);
  const firstParagraph = blocks.find((b) => b.type === 'p');
  const excerpt = firstParagraph && 'text' in firstParagraph ? firstParagraph.text : blogPost.title;

  return (
    <div className="bg-white dark:bg-gray-950">
      <Seo
        title={blogPost.title}
        description={excerpt}
        path={`/blog/${blogPost.id}`}
        type="article"
        noIndex
      />
      {/* Article Header */}
      <section className="section-muted border-b border-gray-200 dark:border-white/10 py-10 md:py-16">
        <div className="container-custom max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 mb-8 text-sm font-semibold text-primary-700 dark:text-primary-300 hover:gap-3 transition-all"
          >
            <FiArrowLeft /> Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="chip-primary mb-5">{blogPost.category}</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-gray-900 dark:text-white">
              {blogPost.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-300">
              <span className="inline-flex items-center gap-2 font-semibold text-gray-900 dark:text-white">
                <FiUser size={15} aria-hidden="true" />
                {blogPost.author}
              </span>
              <span className="inline-flex items-center gap-2">
                <FiCalendar size={15} aria-hidden="true" />
                {formatDate(blogPost.date)}
              </span>
              <span className="inline-flex items-center gap-2">
                <FiClock size={15} aria-hidden="true" />
                {blogPost.readTime} min read
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 md:py-16">
        <div className="container-custom max-w-3xl">
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-5 text-lg leading-relaxed text-gray-700 dark:text-gray-300"
          >
            {blocks.map((block, index) => {
              switch (block.type) {
                case 'h2':
                  return (
                    <h2 key={index} className="!mt-12 text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
                      {block.text}
                    </h2>
                  );
                case 'h3':
                  return (
                    <h3 key={index} className="!mt-8 text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                      {block.text}
                    </h3>
                  );
                case 'code':
                  return (
                    <pre
                      key={index}
                      tabIndex={0}
                      className="overflow-x-auto rounded-2xl border border-gray-800 bg-gray-950 dark:bg-black/40 dark:border-white/10 p-5 text-sm leading-7 text-gray-100"
                    >
                      <code className="font-mono">{block.text}</code>
                    </pre>
                  );
                case 'ol':
                  return (
                    <ol key={index} className="list-decimal space-y-2 pl-6 marker:font-semibold marker:text-primary-600 dark:marker:text-primary-300">
                      {block.items.map((item) => (
                        <li key={item} className="pl-1">{item}</li>
                      ))}
                    </ol>
                  );
                default:
                  return <p key={index}>{block.text}</p>;
              }
            })}
          </motion.article>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10">
            <ul className="flex flex-wrap gap-2" aria-label="Tags">
              {['React', 'React 18', 'JavaScript', 'Web Development'].map((tag) => (
                <li key={tag} className="chip !px-4 !py-2 !text-sm">
                  #{tag}
                </li>
              ))}
            </ul>
          </div>

          {/* Author Info */}
          <div className="surface mt-10 flex flex-col sm:flex-row gap-5 sm:items-center p-6 md:p-8">
            <span className="icon-tile !h-16 !w-16 !rounded-full !text-2xl">
              <FiUser />
            </span>
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Written by</p>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{blogPost.author}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Experienced web developer and technical writer passionate about sharing knowledge with the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="section section-muted">
        <div className="container-custom">
          <SectionHeading eyebrow="Keep Reading" title="Related Articles" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPost.relatedPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/blog/${post.id}`}
                  className="group surface surface-hover block h-full overflow-hidden"
                >
                  <div className="relative flex h-40 items-center justify-center bg-gradient-to-br from-primary-600 to-secondary-700">
                    <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
                    <span className="relative text-5xl transition-transform duration-500 group-hover:scale-110" aria-hidden="true">
                      {post.image}
                    </span>
                  </div>
                  <h3 className="p-6 text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                    {post.title}
                  </h3>
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

export default BlogDetails;
