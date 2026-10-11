import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import { isApiConfigured } from '@services/config';
import type { Testimonial } from '../types/index';

const Stars = ({ rating }: { rating: number }) => (
  <span className="inline-flex items-center gap-0.5 text-amber-400" aria-label={`${rating} out of 5 stars`}>
    {[1, 2, 3, 4, 5].map((n) => (
      <FiStar
        key={n}
        size={16}
        fill={n <= rating ? 'currentColor' : 'none'}
        className={n <= rating ? '' : 'text-white/25'}
        aria-hidden="true"
      />
    ))}
  </span>
);

/**
 * "What clients say" band. Reads approved testimonials from GET /api/testimonials
 * and renders nothing when the API is not configured or the list is empty, so
 * the home page never shows an empty section or invented quotes.
 */
const Testimonials = () => {
  const [items, setItems] = useState<Testimonial[]>([]);

  useEffect(() => {
    if (!isApiConfigured()) return;
    let cancelled = false;
    (async () => {
      try {
        const { testimonialsAPI } = await import('@services/api');
        const { data } = await testimonialsAPI.list();
        if (!cancelled && data.success && Array.isArray(data.data)) setItems(data.data);
      } catch {
        /* keep the section hidden */
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (items.length === 0) return null;

  return (
    <section
      className="dark relative overflow-hidden bg-gray-950 text-white py-20 md:py-28"
      aria-labelledby="testimonials-heading"
    >
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-[40rem] rounded-full bg-primary-600/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-custom relative z-10">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Clients Say"
          description="Feedback from the people we have built with"
        />

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.slice(0, 6).map((t, i) => (
            <motion.li
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-7 ${
                t.featured ? 'ring-1 ring-primary-400/40' : ''
              }`}
            >
              <Stars rating={t.rating} />
              <blockquote className="mt-4 flex-1 text-gray-200 leading-relaxed">
                <span className="text-primary-300 font-display text-3xl leading-none align-top" aria-hidden="true">
                  &ldquo;
                </span>
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-4">
                <p className="font-semibold text-white">{t.author_name}</p>
                {(t.author_role || t.company) && (
                  <p className="text-sm text-gray-400">{[t.author_role, t.company].filter(Boolean).join(', ')}</p>
                )}
              </figcaption>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
