import { motion } from 'framer-motion';
import Newsletter from '@components/Newsletter';

const TermsConditions = () => {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: 'By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.',
    },
    {
      title: '2. Use License',
      content: 'Permission is granted to temporarily download one copy of the materials (information or software) on ServiceCo\'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.',
      items: [
        'You may not modify or copy the materials',
        'You may not use the materials for any commercial purpose or for any public display',
        'You may not attempt to decompile or reverse engineer any software on the website',
        'You may not transfer the materials to another person or "mirror" the materials on any other server',
      ],
    },
    {
      title: '3. Disclaimer',
      content: 'The materials on ServiceCo\'s website are provided on an \'as is\' basis. ServiceCo makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.',
    },
    {
      title: '4. Limitations',
      content: 'In no event shall ServiceCo or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ServiceCo\'s website.',
    },
    {
      title: '5. Accuracy of Materials',
      content: 'The materials appearing on ServiceCo\'s website could include technical, typographical, or photographic errors. ServiceCo does not warrant that any of the materials on its website are accurate, complete, or current.',
    },
    {
      title: '6. Links',
      content: 'ServiceCo has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by ServiceCo of the site. Use of any such linked website is at the user\'s own risk.',
    },
    {
      title: '7. Modifications',
      content: 'ServiceCo may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.',
    },
    {
      title: '8. Governing Law',
      content: 'These terms and conditions are governed by and construed in accordance with the laws of the State of New York and you irrevocably submit to the exclusive jurisdiction of the courts in that location.',
    },
    {
      title: '9. User Responsibilities',
      content: 'As a user of our website, you agree to:',
      items: [
        'Use the website in accordance with all applicable laws and regulations',
        'Not engage in any conduct that restricts or inhibits anyone\'s use or enjoyment of the website',
        'Not post any unlawful, threatening, abusive, defamatory, obscene, or otherwise objectionable material',
        'Protect your password and account information',
        'Accept responsibility for all activities that occur under your account',
      ],
    },
    {
      title: '10. Intellectual Property',
      content: 'All content on the website, including but not limited to text, graphics, logos, images, and software, is the property of ServiceCo or its content suppliers and is protected by international copyright laws.',
    },
    {
      title: '11. Service Description',
      content: 'We provide consulting and development services. While we strive to deliver high-quality work, specific results are not guaranteed. Project timelines and deliverables are outlined in separate project agreements.',
    },
    {
      title: '12. Payment Terms',
      content: 'Payment is due as specified in the project agreement. Late payments may result in project suspension. We accept various payment methods and may apply interest on overdue invoices.',
    },
    {
      title: '13. Contact Information',
      content: 'If you have any questions about these Terms and Conditions, please contact us at:',
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
            <h1 className="text-5xl font-bold mb-4">Terms & Conditions</h1>
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

          {/* Acknowledgment */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-12 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded"
          >
            <h3 className="text-lg font-bold text-yellow-800 mb-2">
              Important Acknowledgment
            </h3>
            <p className="text-gray-700">
              By using this website and our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please discontinue use of our website and services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default TermsConditions;
