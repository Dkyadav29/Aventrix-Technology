import { motion } from 'framer-motion';

interface Step {
  num: string;
  title: string;
  desc: string;
}

interface ProcessStepsProps {
  steps: Step[];
  /** Tailwind ring color classes matching the section background behind the step number */
  ringClassName?: string;
}

const COLS: Record<number, string> = {
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
  5: 'lg:grid-cols-5',
  6: 'lg:grid-cols-6',
};

const ProcessSteps = ({
  steps,
  ringClassName = 'ring-white dark:ring-gray-950',
}: ProcessStepsProps) => {
  const count = steps.length;
  const cols = COLS[count] ?? 'lg:grid-cols-4';
  // The connector runs from the centre of the first step to the centre of the last
  const inset = `${100 / (count * 2)}%`;

  return (
    <div className="relative max-w-6xl mx-auto">
      <div
        className="hidden lg:block absolute top-7 h-px bg-gradient-to-r from-primary-300 via-secondary-300 to-primary-300 dark:from-primary-400/40 dark:via-secondary-400/40 dark:to-primary-400/40"
        style={{ left: inset, right: inset }}
        aria-hidden="true"
      />
      <ol className={`relative grid sm:grid-cols-2 ${cols} gap-x-4 gap-y-10`}>
        {steps.map((step, index) => (
          <motion.li
            key={step.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="relative text-center"
          >
            <div
              className={`relative mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-secondary-600 font-display text-lg font-extrabold text-white shadow-lg shadow-primary-500/30 ring-8 ${ringClassName}`}
            >
              {step.num}
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{step.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-[16rem] mx-auto">
              {step.desc}
            </p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
};

export default ProcessSteps;
