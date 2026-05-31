import { useState } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@components/HeroSection';
import Card from '@components/Card';
import Newsletter from '@components/Newsletter';
import { FiChevronDown } from 'react-icons/fi';

const FAQ = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

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
          a: 'Yes! We ve helped startups raise $50M+. We provide technical architecture docs, demo videos, and can join pitch calls.',
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
          a: 'MVP (4-8 weeks): $30K-$80K. Dedicated Team: $8K-$15K/month per engineer. Fixed scope projects: based on requirements. We re flexible—let us discuss your situation.',
        },
        {
          id: 's2',
          q: 'Do you take equity?',
          a: 'For exceptional early-stage startups, we ll consider equity + reduced fees. We believe in your vision and want to win together.',
        },
        {
          id: 's3',
          q: 'What s your payment structure?',
          a: 'Typically: 25% upfront, 50% milestone-based, 25% on completion. For long-term partnerships, we re flexible—ask us.',
        },
        {
          id: 's4',
          q: 'Do you have a minimum engagement?',
          a: 'MVP projects: 4-week minimum. Dedicated teams: 3 months. Single projects: no minimum. We re startup-friendly.',
        },
      ],
    },
    {
      category: 'Process & Collaboration',
      items: [
        {
          id: 'p1',
          q: 'How do you work with early-stage founders?',
          a: 'We act as your technical co-founder. Daily standups, weekly demos, and direct access to senior engineers. You ll be deeply involved.',
        },
        {
          id: 'p2',
          q: 'What s your development process?',
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
          a: 'Yes. We help many startups build their core team. We ll mentor, interview, and sometimes contract our team long-term.',
        },
      ],
    },
    {
      category: 'Technical & Support',
      items: [
        {
          id: 'm1',
          q: 'What tech stack do you use?',
          a: 'We re stack-agnostic and startup-focused: React/Next.js, Node.js/Python, TypeScript, Postgres, AWS. Whatever makes sense for your product.',
        },
        {
          id: 'm2',
          q: 'Will you hand off the code?',
          a: 'Absolutely. All code is yours. Well-documented, clean, and ready for your team to maintain. We ll provide knowledge transfer.',
        },
        {
          id: 'm3',
          q: 'Do you provide ongoing support?',
          a: 'We offer maintenance packages: $2K-$5K/month for bug fixes, performance optimization, and minor features. Optional but recommended.',
        },
        {
          id: 'm4',
          q: 'What if I need to scale quickly?',
          a: 'Our architecture is built for scale from day one. We can handle 10x growth without major rewrites. We ve done it before.',
        },
      ],
    },
  ];

  return (
    <div>
      {/* Hero */}
      <HeroSection
        title="Startup FAQ"
        subtitle="All Your Questions Answered"
        description="Everything founders ask us about building MVPs, pricing, and scaling"
      />

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container-custom max-w-3xl">
          {faqCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.1 }}
              className="mb-12"
            >
              {/* Category Title */}
              <h2 className="text-2xl font-bold mb-6 text-primary-600">
                {category.category}
              </h2>

              {/* FAQ Items */}
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: itemIndex * 0.05 }}
                  >
                    <Card
                      hover={false}
                      className="bg-white hover:bg-gray-50 transition-colors"
                    >
                      <button
                        className="w-full flex items-center justify-between cursor-pointer"
                        onClick={() =>
                          setExpandedId(expandedId === item.id ? null : item.id)
                        }
                      >
                        <h3 className="text-lg font-semibold text-gray-900 text-left">
                          {item.q}
                        </h3>
                        <motion.div
                          animate={{
                            rotate: expandedId === item.id ? 180 : 0,
                          }}
                          className="flex-shrink-0 ml-4"
                        >
                          <FiChevronDown className="w-6 h-6 text-primary-600" />
                        </motion.div>
                      </button>

                      {/* Answer */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: expandedId === item.id ? 'auto' : 0,
                          opacity: expandedId === item.id ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-600 mt-4 pt-4 border-t">
                          {item.a}
                        </p>
                      </motion.div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold mb-4">Didn't find your answer?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact our support team and we'll be happy to help you out.
            </p>
            <button className="btn-primary">Contact Support</button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default FAQ;
