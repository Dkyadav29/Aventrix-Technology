import LegalLayout from '@components/LegalLayout';
import Newsletter from '@components/Newsletter';
import Seo from '@components/Seo';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: '1. Introduction',
      content: 'Welcome to Aventix. We are committed to protecting your privacy and ensuring you have a positive experience on our website. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website.',
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
      content: 'You have the right to access, correct, or delete your personal information. You can manage your preferences regarding marketing communications. To exercise these rights, please contact us at dkyadav2905@gmail.com.',
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
        'Phone / WhatsApp: +91 77630 34886',
      ],
    },
  ];

  return (
    <>
      <Seo
        title="Privacy Policy"
        description="How Aventix collects, uses, and protects your information."
        path="/privacy"
      />
      <LegalLayout title="Privacy Policy" lastUpdated="January 2024" sections={sections}>
        {/* Additional Notice */}
        <div className="mt-12 rounded-2xl border border-primary-200 dark:border-primary-400/20 bg-primary-50 dark:bg-primary-400/10 p-6">
          <h3 className="text-lg font-bold text-primary-800 dark:text-primary-200 mb-2">
            GDPR Compliance
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            If you are located in the European Union or European Economic Area, you have specific rights under the General Data Protection Regulation (GDPR). We comply with all applicable GDPR requirements.
          </p>
        </div>
      </LegalLayout>

      {/* Newsletter */}
      <Newsletter />
    </>
  );
};

export default PrivacyPolicy;
