import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';

export interface LegalSection {
  title: string;
  content: string;
  items?: string[];
}

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
  /** Closing notice shown after the sections */
  children?: ReactNode;
}

const sectionId = (index: number) => `section-${index + 1}`;

const LegalLayout = ({ title, lastUpdated, sections, children }: LegalLayoutProps) => {
  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Header */}
      <section className="dark relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-secondary-950 to-gray-950" aria-hidden="true" />
        <div className="absolute inset-0 bg-grid mask-fade opacity-60" aria-hidden="true" />
        <div className="container-custom relative z-10 py-14 md:py-20">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-sm text-gray-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <FiChevronRight size={14} aria-hidden="true" />
            <span className="text-primary-300" aria-current="page">{title}</span>
          </nav>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{title}</h1>
            <p className="text-gray-300">Last Updated: {lastUpdated}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20">
        <div className="container-custom grid lg:grid-cols-[16rem_1fr] gap-10 lg:gap-16">
          {/* Table of contents */}
          <aside className="hidden lg:block">
            <nav aria-label="On this page" className="sticky top-28">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                On this page
              </p>
              <ul className="space-y-1 border-l border-gray-200 dark:border-white/10">
                {sections.map((section, index) => (
                  <li key={section.title}>
                    <a
                      href={`#${sectionId(index)}`}
                      className="-ml-px block border-l border-transparent py-1.5 pl-4 text-sm text-gray-600 dark:text-gray-400 hover:border-primary-500 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="max-w-3xl">
            <div className="space-y-10">
              {sections.map((section, index) => (
                <section key={section.title} id={sectionId(index)} className="scroll-mt-28">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {section.title}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {section.content}
                  </p>
                  {section.items && (
                    <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                      {section.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-500" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            {children}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalLayout;
