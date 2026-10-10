import { motion } from 'framer-motion';
import type { IconType } from 'react-icons';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiFlutter,
  SiWordpress,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiDocker,
  SiAmazonaws,
  SiOpenai,
  SiFigma,
} from 'react-icons/si';

interface Tech {
  name: string;
  icon: IconType;
}

const TECH: Tech[] = [
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'React Native', icon: SiReact },
  { name: 'Flutter', icon: SiFlutter },
  { name: 'WordPress', icon: SiWordpress },
  { name: 'Python', icon: SiPython },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Docker', icon: SiDocker },
  { name: 'AWS', icon: SiAmazonaws },
  { name: 'OpenAI', icon: SiOpenai },
  { name: 'Figma', icon: SiFigma },
];

/** "Technologies we work with" strip shown under the hero */
const TechStack = () => (
  <section className="border-b border-gray-100 dark:border-white/5 py-12 md:py-16" aria-labelledby="tech-stack-heading">
    <div className="container-custom">
      <p
        id="tech-stack-heading"
        className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400"
      >
        Technologies we work with
      </p>
      <ul className="flex flex-wrap justify-center gap-2.5 md:gap-3">
        {TECH.map(({ name, icon: Icon }, i) => (
          <motion.li
            key={name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: i * 0.03 }}
            className="group inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.04] px-3.5 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 transition-colors hover:border-primary-300 dark:hover:border-primary-400/40 hover:text-gray-900 dark:hover:text-white"
          >
            <Icon
              size={16}
              aria-hidden="true"
              className="text-gray-400 transition-colors group-hover:text-primary-600 dark:group-hover:text-primary-300"
            />
            {name}
          </motion.li>
        ))}
      </ul>
    </div>
  </section>
);

export default TechStack;
