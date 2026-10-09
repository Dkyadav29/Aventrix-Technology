import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMinus, FiPlus } from 'react-icons/fi';

export interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  /** Allow several panels open at once (default: one at a time) */
  allowMultiple?: boolean;
}

/** Accessible expand/collapse list used for FAQs */
const Accordion = ({ items, allowMultiple = false }: AccordionProps) => {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggle = (id: string) => {
    setOpenIds((current) => {
      if (current.includes(id)) return current.filter((x) => x !== id);
      return allowMultiple ? [...current, id] : [id];
    });
  };

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const open = openIds.includes(item.id);
        return (
          <div
            key={item.id}
            className={`surface overflow-hidden transition-colors ${
              open ? 'border-primary-300 dark:border-primary-400/40' : ''
            }`}
          >
            <h3 className="text-base font-sans tracking-normal">
              <button
                type="button"
                id={`accordion-button-${item.id}`}
                aria-expanded={open}
                aria-controls={`accordion-panel-${item.id}`}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 md:px-6 md:py-5 text-left"
                onClick={() => toggle(item.id)}
              >
                <span className="text-base md:text-lg font-semibold text-gray-900 dark:text-white">
                  {item.question}
                </span>
                <span
                  className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                    open
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300'
                  }`}
                  aria-hidden="true"
                >
                  {open ? <FiMinus size={16} /> : <FiPlus size={16} />}
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  id={`accordion-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`accordion-button-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 md:px-6 md:pb-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
