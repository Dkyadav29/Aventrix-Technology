import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import SectionHeading from '@components/SectionHeading';
import ProcessSteps from '@components/ProcessSteps';
import Accordion from '@components/Accordion';
import CTASection from '@components/CTASection';
import Seo from '@components/Seo';
import { SERVICES, SERVICE_PROCESS, getService } from '../constants/services';
import { FiArrowLeft, FiArrowRight, FiCheck, FiChevronRight, FiSearch, FiClipboard, FiLock } from 'react-icons/fi';

const pricingPoints = [
  { icon: <FiSearch />, title: 'Scope First', desc: 'We understand your requirements fully before quoting anything.' },
  { icon: <FiClipboard />, title: 'Clear Breakdown', desc: 'You get an itemized quote — every cost explained upfront.' },
  { icon: <FiLock />, title: 'Fixed Price', desc: 'Once agreed, the price is locked. No surprise invoices.' },
];

const ServiceNotFound = () => (
  <section className="section">
    <Seo title="Service Not Found" description="This service page does not exist." noIndex />
    <div className="container-custom max-w-2xl text-center">
      <p className="eyebrow mb-4 justify-center">Services</p>
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">We don't have a page for that service</h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        It may have moved. Here's everything we currently offer:
      </p>
      <ul className="mt-8 flex flex-wrap justify-center gap-3">
        {SERVICES.map((s) => (
          <li key={s.id}>
            <Link to={`/services/${s.id}`} className="pill">
              {s.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-10">
        <Link to="/services" className="btn-outline">
          <FiArrowLeft size={18} />
          All Services
        </Link>
      </div>
    </div>
  </section>
);

const ServiceDetails = () => {
  const { id } = useParams();
  const service = getService(id);

  if (!service) return <ServiceNotFound />;

  const Icon = service.icon;
  const faqItems = service.faq.map((f, i) => ({ id: `${service.id}-${i}`, question: f.q, answer: f.a }));
  const related = SERVICES.filter((s) => s.id !== service.id).slice(0, 3);

  const pageUrl = `https://aventix.co.in/services/${service.id}`;
  // Describes exactly what is on the page: a service offered by the organisation declared in index.html
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aventix.co.in/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://aventix.co.in/services' },
        { '@type': 'ListItem', position: 3, name: service.title, item: pageUrl },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.title,
      description: service.overview,
      url: pageUrl,
      serviceType: service.title,
      areaServed: 'Worldwide',
      provider: { '@id': 'https://aventix.co.in/#organization' },
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-950">
      <Seo
        title={`${service.title} Services`}
        description={service.overview}
        path={`/services/${service.id}`}
        jsonLd={jsonLd}
      />

      {/* Hero Section */}
      <section className="dark relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-[#0a1230] to-gray-950" aria-hidden="true" />
        <div className="absolute inset-0 bg-grid mask-fade opacity-60" aria-hidden="true" />
        <div className="absolute -top-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-primary-500/25 blur-3xl" aria-hidden="true" />

        <div className="container-custom relative z-10 py-14 md:py-20">
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-1.5 text-sm text-gray-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <FiChevronRight size={14} aria-hidden="true" />
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <FiChevronRight size={14} aria-hidden="true" />
            <span className="text-primary-300" aria-current="page">{service.title}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="icon-tile !h-16 !w-16 !text-3xl !rounded-2xl mb-6">
              <Icon />
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] mb-5">{service.title}</h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">{service.description}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary">
                Get a Quote
                <FiArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn-ghost-light">
                <FiArrowLeft size={18} />
                All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview + Benefits */}
      <section className="section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="eyebrow mb-4">Overview</p>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">What's included</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">{service.overview}</p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {service.features.map((feature) => (
                  <li key={feature} className="surface flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-800 dark:text-gray-100">
                    <span className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-primary-50 dark:bg-primary-400/10 text-primary-700 dark:text-primary-300">
                      <FiCheck size={14} strokeWidth={3} aria-hidden="true" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="surface p-6 md:p-10"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Key Benefits</h3>
              <ul className="space-y-4">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-400/15 text-emerald-700 dark:text-emerald-300">
                      <FiCheck size={14} strokeWidth={3} aria-hidden="true" />
                    </span>
                    <span className="text-gray-700 dark:text-gray-200">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section section-muted">
        <div className="container-custom">
          <SectionHeading eyebrow="Process" title="How we deliver it" description="Six clear steps, with you involved at every one" />
          <ProcessSteps steps={SERVICE_PROCESS} ringClassName="ring-gray-50 dark:ring-gray-950" />
        </div>
      </section>

      {/* Technologies */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading eyebrow="Stack" title="Technologies We Use" />

          <ul className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
            {service.technologies.map((tech, index) => (
              <motion.li
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-5 py-2.5 font-semibold text-gray-800 dark:text-gray-100 shadow-card"
              >
                {tech}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing approach */}
      <section className="section section-muted">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Pricing"
            title="How pricing works"
            description="Every project is scoped first, then quoted as a fixed price."
          />
          <div className="grid sm:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {pricingPoints.map((item) => (
              <div key={item.title} className="surface p-6">
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 dark:bg-primary-400/10 text-xl text-primary-700 dark:text-primary-300">
                  {item.icon}
                </span>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {faqItems.length > 0 && (
        <section className="section">
          <div className="container-custom max-w-3xl">
            <SectionHeading eyebrow="FAQ" title="Common questions" />
            <Accordion items={faqItems} />
          </div>
        </section>
      )}

      {/* Related services */}
      <section className="section section-muted">
        <div className="container-custom">
          <SectionHeading eyebrow="More" title="Related services" />
          <div className="grid sm:grid-cols-3 gap-6">
            {related.map((s) => {
              const RelatedIcon = s.icon;
              return (
                <Link key={s.id} to={`/services/${s.id}`} className="group surface surface-hover flex items-start gap-4 p-6">
                  <span className="icon-tile">
                    <RelatedIcon />
                  </span>
                  <span>
                    <span className="block font-bold text-gray-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                      {s.title}
                    </span>
                    <span className="mt-1 block text-sm text-gray-600 dark:text-gray-300">{s.description}</span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Start?"
        description="Contact our team today to discuss your project requirements and get a personalized quote."
        primaryLabel="Schedule a Consultation"
      />
    </div>
  );
};

export default ServiceDetails;
