import { motion } from 'framer-motion';
import Newsletter from '@components/Newsletter';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: '1. Introduction',
      content: 'Welcome to ServiceCo. We are committed to protecting your privacy and ensuring you have a positive experience on our website. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website.',
    },
    {
      title: '2. Information We Collect',
      content: 'We collect information you voluntarily provide to us, such as when you fill out forms, subscribe to newsletters, or contact us. This may include your name, email address, phone number, and any other information you choose to provide.',
      items: [
        'Contact information (name, email, phone number)',
        'Account information (username, password)',
        'Payment information (processed securely)',
        'Automatically collected data (cookies, IP addresses)',
      ],
    },
    {
      title: '3. How We Use Your Information',
      content: 'We use the information we collect to provide, maintain, and improve our services. Specifically, we use your information to:',
      items: [
        'Respond to your inquiries and provide customer support',
        'Send you marketing communications (with your consent)',
        'Process transactions',
        'Improve our website and services',
        'Comply with legal obligations',
      ],
    },
    {
      title: '4. Information Sharing',
      content: 'We do not sell, trade, or rent your personal information to third parties. We may share information with service providers who assist us in operating our website and conducting our business, all under strict confidentiality agreements.',
    },
    {
      title: '5. Data Security',
      content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.',
    },
    {
      title: '6. Your Rights',
      content: 'You have the right to access, correct, or delete your personal information. You can manage your preferences regarding marketing communications. To exercise these rights, please contact us at privacy@servicecompany.com.',
    },
    {
      title: '7. Cookies',
      content: 'Our website uses cookies to enhance your experience. You can control cookie settings through your browser. We use cookies for analytics, personalization, and remembering your preferences.',
    },
    {
      title: '8. Third-Party Links',
      content: 'Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. Please review their privacy policies before providing any personal information.',
    },
    {
      title: '9. Changes to This Policy',
      content: 'We may update this Privacy Policy from time to time. We will notify you of any significant changes by updating the "Last Updated" date at the bottom of this page.',
    },
    {
      title: '10. Contact Us',
      content: 'If you have questions or concerns about our Privacy Policy or our privacy practices, please contact us at:',
      items: [
        'Email: dkyadav2905@gmail.com',
        'Phone / WhatsApp: +91 62030 75626',
      ],
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="py-12 bg-primary-600 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-primary-100">
              Last Updated: January 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container-custom max-w-3xl prose prose-lg">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <h2 className="text-2xl font-bold text-primary-600 mb-3">
                  {section.title}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {section.content}
                </p>
                {section.items && (
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>

          {/* Additional Notice */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-12 p-6 bg-blue-50 border-l-4 border-primary-600 rounded"
          >
            <h3 className="text-lg font-bold text-primary-600 mb-2">
              GDPR Compliance
            </h3>
            <p className="text-gray-700">
              If you are located in the European Union or European Economic Area, you have specific rights under the General Data Protection Regulation (GDPR). We comply with all applicable GDPR requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default PrivacyPolicy;
