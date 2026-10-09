import { useState } from 'react';
import HeroSection from '@components/HeroSection';
import Accordion from '@components/Accordion';
import CTASection from '@components/CTASection';
import Newsletter from '@components/Newsletter';
import Seo from '@components/Seo';
import { FiSearch } from 'react-icons/fi';

const faqCategories = [
  {
    category: 'For Startups',
    items: [
      {
        id: 'g1',
        q: 'How quickly can you build my MVP?',
        a: 'We typically ship MVPs in 4-8 weeks, depending on complexity. Our lean process focuses on core features only—no bloat.',
      },
      {
        id: 'g2',
        q: 'What if I have limited budget?',
        a: 'We get startup constraints. We offer flexible engagement models: fixed-price MVP, equity partnerships for early stage, or time & materials. Let us find what works.',
      },
      {
        id: 'g3',
        q: 'Do you help with investor pitches?',
        a: 'Yes! We\'ve helped startups raise $50M+. We provide technical architecture docs, demo videos, and can join pitch calls.',
      },
      {
        id: 'g4',
        q: 'Can you help scale after launch?',
        a: 'Absolutely. Many startups grow with us from MVP to Series B. We handle scaling infrastructure, performance optimization, and team scaling.',
      },
    ],
  },
  {
    category: 'Pricing & Engagement',
    items: [
      {
        id: 's1',
        q: 'What are your pricing models?',
        a: 'MVP (4-8 weeks): $30K-$80K. Dedicated Team: $8K-$15K/month per engineer. Fixed scope projects: based on requirements. We\'re flexible—let us discuss your situation.',
      },
      {
        id: 's2',
        q: 'Do you take equity?',
        a: 'For exceptional early-stage startups, we\'ll consider equity + reduced fees. We believe in your vision and want to win together.',
      },
      {
        id: 's3',
        q: 'What\'s your payment structure?',
        a: 'Typically: 25% upfront, 50% milestone-based, 25% on completion. For long-term partnerships, we\'re flexible—ask us.',
      },
      {
        id: 's4',
        q: 'Do you have a minimum engagement?',
        a: 'MVP projects: 4-week minimum. Dedicated teams: 3 months. Single projects: no minimum. We\'re startup-friendly.',
      },
    ],
  },
  {
    category: 'Process & Collaboration',
    items: [
      {
        id: 'p1',
        q: 'How do you work with early-stage founders?',
        a: 'We act as your technical co-founder. Daily standups, weekly demos, and direct access to senior engineers. You\'ll be deeply involved.',
      },
      {
        id: 'p2',
        q: 'What\'s your development process?',
        a: 'Agile sprints (1-2 week cycles), bi-weekly demos, continuous feedback. No waterfall, no surprises. We ship incrementally.',
      },
      {
        id: 'p3',
        q: 'Can I make changes mid-project?',
        a: 'Yes! Startup priorities change. We embrace that. Minor changes are free; major pivots are discussed and estimated.',
      },
      {
        id: 'p4',
        q: 'Will you help hire my first engineers?',
        a: 'Yes. We help many startups build their core team. We\'ll mentor, interview, and sometimes contract our team long-term.',
      },
    ],
  },
  {
    category: 'Technical & Support',
    items: [
      {
        id: 'm1',
        q: 'What tech stack do you use?',
        a: 'We\'re stack-agnostic and startup-focused: React/Next.js, Node.js/Python, TypeScript, Postgres, AWS. Whatever makes sense for your product.',
      },
      {
        id: 'm2',
        q: 'Will you hand off the code?',
        a: 'Absolutely. All code is yours. Well-documented, clean, and ready for your team to maintain. We\'ll provide knowledge transfer.',
      },
      {
        id: 'm3',
        q: 'Do you provide ongoing support?',
        a: 'We offer maintenance packages: $2K-$5K/month for bug fixes, performance optimization, and minor features. Optional but recommended.',
      },
      {
        id: 'm4',
        q: 'What if I need to scale quickly?',
        a: 'Our architecture is built for scale from day one. We can handle 10x growth without major rewrites. We\'ve done it before.',
      },
    ],
  },
];

const FAQ = () => {
  const [query, setQuery] = useState('');

  const term = query.trim().toLowerCase();
  const visibleCategories = faqCategories
    .map((category) => ({
      ...category,
      items: term
        ? category.items.filter(
            (item) => item.q.toLowerCase().includes(term) || item.a.toLowerCase().includes(term)
          )
        : category.items,
    }))
    .filter((category) => category.items.length > 0);

  return (
    <div className="bg-white dark:bg-gray-950">
      <Seo
        title="FAQ — Common Questions"
        description="Answers to common questions about building MVPs, pricing, process, and support."
        path="/faq"
      />
      {/* Hero */}
      <HeroSection
        title="Startup FAQ"
        subtitle="FAQ"
        description="Everything founders ask us about building MVPs, pricing, and scaling"
      />

      {/* FAQ Section */}
      <section className="section">
        <div className="container-custom max-w-3xl">
          {/* Search */}
          <div className="relative mb-12">
            <label htmlFor="faq-search" className="sr-only">
              Search questions
            </label>
            <FiSearch
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
              aria-hidden="true"
            />
            <input
              id="faq-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions…"
              className="field-input !pl-12"
            />
          </div>

          {visibleCategories.length === 0 && (
            <p role="status" className="text-center text-gray-600 dark:text-gray-300">
              No questions match "{query}". Try a different word, or ask us directly below.
            </p>
          )}

          {visibleCategories.map((category) => (
            <div key={category.category} className="mb-12 last:mb-0">
              {/* Category Title */}
              <h2 className="eyebrow !text-sm mb-5">{category.category}</h2>

              {/* FAQ Items */}
              <Accordion
                items={category.items.map((item) => ({ id: item.id, question: item.q, answer: item.a }))}
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Didn't find your answer?"
        description="Contact our support team and we'll be happy to help you out."
        primaryLabel="Contact Support"
      />

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default FAQ;
