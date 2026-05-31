import { useState } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@components/HeroSection';
import Card from '@components/Card';
import Button from '@components/Button';
import Newsletter from '@components/Newsletter';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setLoading(false);

    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: FiPhone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: FiMail,
      title: 'Email',
      value: 'support@servicecompany.com',
      link: 'mailto:support@servicecompany.com',
    },
    {
      icon: FiMapPin,
      title: 'Address',
      value: '123 Business St, New York, NY 10001',
      link: '#',
    },
  ];

  const offices = [
    {
      city: 'New York',
      address: '123 Business St, New York, NY 10001',
      phone: '+1 (555) 123-4567',
    },
    {
      city: 'San Francisco',
      address: '456 Innovation Ave, San Francisco, CA 94107',
      phone: '+1 (555) 234-5678',
    },
    {
      city: 'London',
      address: '789 Enterprise Rd, London, UK EC1A 1BB',
      phone: '+44 (20) 7123 4567',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <HeroSection
        title="Let s Build Together"
        subtitle="Get In Touch"
        description="Tell us about your startup idea. We ll show you how we can help you ship fast."
      />

      {/* Contact Info */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="section-title"
          >
            Let s Connect
          </motion.h2>
          <p className="section-subtitle">
            Quick question or ready to discuss your project? We re here to help.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center">
                    <Icon className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                    <h3 className="text-lg font-bold mb-2">{info.title}</h3>
                    <a
                      href={info.link}
                      className="text-primary-600 hover:underline"
                    >
                      {info.value}
                    </a>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-4xl font-bold mb-8">Share Your Idea</h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-100 text-green-800 px-6 py-8 rounded-lg text-center"
                >
                  <div className="text-4xl mb-4">✓</div>
                  <h3 className="text-xl font-bold mb-2">Thank you!</h3>
                  <p>We've received your message and will get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                    />
                  </div>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number (optional)"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                  />

                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                  />

                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 resize-none"
                  />

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    loading={loading}
                    className="w-full"
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Map/Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-4xl font-bold mb-8">Our Global Offices</h2>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <Card key={index} className="border-l-4 border-l-primary-600">
                    <h3 className="text-xl font-bold mb-3 text-primary-600">{office.city}</h3>
                    <p className="text-gray-600 mb-3">{office.address}</p>
                    <a href={`tel:${office.phone}`} className="text-primary-600 font-semibold hover:underline">
                      {office.phone}
                    </a>
                  </Card>
                ))}
              </div>

              {/* Map Placeholder */}
              <Card className="mt-8 h-80 bg-gradient-to-br from-primary-500 to-secondary-600 flex items-center justify-center text-white text-center">
                <div>
                  <div className="text-6xl mb-4">🗺️</div>
                  <p className="text-lg font-semibold">Interactive Map Coming Soon</p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Frequently Asked Questions</h2>

          <div className="max-w-2xl mx-auto space-y-4">
            {[
              {
                q: 'What is your typical project timeline?',
                a: 'Project timelines vary based on scope and complexity. Most projects take 4-12 weeks.',
              },
              {
                q: 'Do you offer maintenance and support?',
                a: 'Yes! We offer 24/7 support and ongoing maintenance packages for all projects.',
              },
              {
                q: 'What is your process?',
                a: 'We follow a structured process: Discovery, Planning, Design, Development, Testing, and Deployment.',
              },
              {
                q: 'Can you work with my existing team?',
                a: 'Absolutely! We often augment existing teams and work collaboratively with partner developers.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card>
                  <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default Contact;
