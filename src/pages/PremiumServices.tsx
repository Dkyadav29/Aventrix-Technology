import HeroSection from '@components/HeroSection';
import ServiceCard from '@components/ServiceCard';
import GlassCard from '@components/GlassCard';
import SectionHeading from '@components/SectionHeading';
import ProcessSteps from '@components/ProcessSteps';
import CTASection from '@components/CTASection';
import Seo from '@components/Seo';
import { SERVICES, SERVICE_PROCESS } from '../constants/services';
import {
  FiZap,
  FiBriefcase,
  FiTarget,
  FiUsers,
  FiHeadphones,
  FiTrendingUp,
} from 'react-icons/fi';

const reasons = [
  { icon: <FiZap />, title: 'Fast Delivery', desc: '4-8 weeks for MVP, agile sprints, rapid iterations' },
  { icon: <FiBriefcase />, title: 'Transparent Pricing', desc: 'Custom quotes scoped to your project. Flexible payment milestones, no lock-in.' },
  { icon: <FiTarget />, title: 'Custom Solutions', desc: 'Tailored to your business, not off-the-shelf templates' },
  { icon: <FiUsers />, title: 'Expert Team', desc: 'Ex-Google, Ex-Apple developers with startup experience' },
  { icon: <FiHeadphones />, title: '24/7 Support', desc: 'Always available for emergencies and support' },
  { icon: <FiTrendingUp />, title: 'Scaling Ready', desc: 'Built for growth from day one, handles 10x without rewrite' },
];

const PremiumServices = () => {
  return (
    <div className="bg-white dark:bg-gray-950">
      <Seo
        title="Services — Web, Mobile, WordPress, Testing & AI"
        description="Full-stack development services: web apps, Android & iOS apps, WordPress, API integration, software & load testing, and AI integration."
        path="/services"
      />
      {/* Hero */}
      <HeroSection
        title="Services Built for Your Success"
        subtitle="Services"
        description="From concept to scale, we provide end-to-end development services for startups and enterprises."
      />

      {/* Services Section */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Complete Development Solutions"
            title="Our Core Services"
            description="We offer comprehensive technology solutions tailored to your business needs"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SERVICES.map((service, index) => (
              <ServiceCard
                key={service.id}
                icon={<service.icon />}
                title={service.title}
                description={service.description}
                features={service.features}
                href={`/services/${service.id}`}
                delay={index * 0.06}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section section-muted">
        <div className="container-custom">
          <SectionHeading
            eyebrow="How It Works"
            title="Our Process"
            description="The same clear, six-step path on every engagement"
          />
          <ProcessSteps steps={SERVICE_PROCESS} ringClassName="ring-gray-50 dark:ring-gray-950" />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Why Aventix"
            title="Why Choose Aventix"
            description="We're not just developers - we're your technology partners"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reasons.map((item, index) => (
              <GlassCard key={item.title} delay={index * 0.08}>
                <span className="icon-tile mb-5">{item.icon}</span>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Build Something Great?"
        description="Join 50+ successful startups and enterprises that trust Aventix for their technology needs."
        primaryLabel="Schedule Your Free Consultation"
      />
    </div>
  );
};

export default PremiumServices;
