import { motion } from 'framer-motion';
import { useState } from 'react';
import HeroSection from '@components/HeroSection';
import GlassCard from '@components/GlassCard';
import Seo from '@components/Seo';
import { FiMail, FiPhone, FiMapPin, FiArrowRight, FiMessageCircle } from 'react-icons/fi';

const PremiumContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  return (
    <div>
      <Seo
        title="Contact — Get a Free Quote"
        description="Reach out to discuss your web, mobile, WordPress, testing, API integration, or AI project. Free consultation, fast response."
        path="/contact"
      />
      {/* Hero */}
      <HeroSection
        title="Let s Build Together"
        subtitle="Get In Touch"
        description="Share your project idea and let s discuss how we can help you succeed"
        showWhatsApp={false}
      />

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white dark:from-gray-900 to-gray-50 dark:to-gray-950">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Side - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
                Have a project in mind? We d love to hear about it. Reach out and let s create something amazing together.
              </p>

              <div className="space-y-8">
                {[
                  {
                    icon: <FiMail size={32} />,
                    label: 'Email',
                    value: 'dkyadav2905@gmail.com',
                    link: 'mailto:dkyadav2905@gmail.com',
                  },
                  {
                    icon: <FiPhone size={32} />,
                    label: 'Phone / WhatsApp',
                    value: '+91 62030 75626',
                    link: 'tel:+916203075626',
                  },
                  {
                    icon: <FiMapPin size={32} />,
                    label: 'Location',
                    value: 'India — Remote, Worldwide',
                    link: '#',
                  },
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 hover:translate-x-2 transition-transform"
                  >
                    <div className="text-primary-600 dark:text-primary-400 mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {item.label}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <motion.a
                href="https://wa.me/916203075626?text=I%20want%20to%20discuss%20my%20project"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-3 mt-12 px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-all"
              >
                <FiMessageCircle size={24} />
                Chat on WhatsApp
              </motion.a>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard variant="primary" hover={false}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary-500 dark:focus:border-primary-500 outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary-500 dark:focus:border-primary-500 outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary-500 dark:focus:border-primary-500 outline-none transition-all"
                      placeholder="Your company"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Project Details
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary-500 dark:focus:border-primary-500 outline-none transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-lg font-bold hover:shadow-lg transition-all"
                  >
                    {submitted ? '✓ Message Sent!' : 'Send Message'}
                  </motion.button>
                </form>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 dark:from-gray-950 to-white dark:to-gray-900">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              From initial consultation to deployment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: '01', title: 'Discovery Call', desc: '30-min consultation to understand your vision' },
              { step: '02', title: 'Proposal', desc: 'Detailed proposal with timeline and pricing' },
              { step: '03', title: 'Development', desc: 'Weekly sprints with regular communication' },
              { step: '04', title: 'Launch & Support', desc: 'Deploy, monitor, and provide ongoing support' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard variant="secondary" delay={index * 0.1}>
                  <div className="text-5xl font-bold text-secondary-400 mb-4 opacity-50">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {item.desc}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-600">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Don t Wait - Let s Build Today
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Your next big idea is just one consultation away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-600 rounded-lg font-bold hover:shadow-2xl transition-all">
                Schedule Free Consultation
                <FiArrowRight size={24} />
              </button>
              <a
                href="https://wa.me/916203075626"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-all"
              >
                <FiMessageCircle size={24} />
                Quick Chat
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PremiumContact;
