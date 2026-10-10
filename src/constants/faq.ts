import type { AccordionItem } from '../components/Accordion';

/** Short, general questions shown on the home page. The full list lives on /faq. */
export const HOME_FAQS: AccordionItem[] = [
  {
    id: 'home-1',
    question: 'How do we get started?',
    answer:
      'Send us a short brief through the contact form or WhatsApp. We will set up a free consultation call, understand your goals, and come back with a clear scope, timeline, and fixed quote.',
  },
  {
    id: 'home-2',
    question: 'How long does a typical project take?',
    answer:
      'A marketing website usually takes 2 to 4 weeks. A mobile app or web application MVP takes 6 to 12 weeks depending on scope. You get a realistic timeline before work begins.',
  },
  {
    id: 'home-3',
    question: 'Who owns the code and the design?',
    answer:
      'You do. Once the final payment is made, every repository, design file, and account we set up for the project is handed over to you with documentation.',
  },
  {
    id: 'home-4',
    question: 'Do you provide support after launch?',
    answer:
      'Yes. Every project includes a post-launch support window for fixes. After that, we offer flexible maintenance plans for updates, monitoring, and new features.',
  },
  {
    id: 'home-5',
    question: 'Can you work with my existing team or codebase?',
    answer:
      'Absolutely. We regularly join existing projects to add features, improve performance, fix bugs, or integrate APIs and AI capabilities.',
  },
];
