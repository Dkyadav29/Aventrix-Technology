import LegalLayout from '@components/LegalLayout';
import Newsletter from '@components/Newsletter';
import Seo from '@components/Seo';

const TermsConditions = () => {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: 'By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.',
    },
    {
      title: '2. Use License',
      content: 'Permission is granted to temporarily download one copy of the materials (information or software) on Aventix\'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.',
      items: [
        'You may not modify or copy the materials',
        'You may not use the materials for any commercial purpose or for any public display',
        'You may not attempt to decompile or reverse engineer any software on the website',
        'You may not transfer the materials to another person or "mirror" the materials on any other server',
      ],
    },
    {
      title: '3. Disclaimer',
      content: 'The materials on Aventix\'s website are provided on an \'as is\' basis. Aventix makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.',
    },
    {
      title: '4. Limitations',
      content: 'In no event shall Aventix or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Aventix\'s website.',
    },
    {
      title: '5. Accuracy of Materials',
      content: 'The materials appearing on Aventix\'s website could include technical, typographical, or photographic errors. Aventix does not warrant that any of the materials on its website are accurate, complete, or current.',
    },
    {
      title: '6. Links',
      content: 'Aventix has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Aventix of the site. Use of any such linked website is at the user\'s own risk.',
    },
    {
      title: '7. Modifications',
      content: 'Aventix may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.',
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
      content: 'All content on the website, including but not limited to text, graphics, logos, images, and software, is the property of Aventix or its content suppliers and is protected by international copyright laws.',
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
    <>
      <Seo
        title="Terms & Conditions"
        description="The terms that govern use of the Aventix website and services."
        path="/terms"
      />
      <LegalLayout title="Terms & Conditions" lastUpdated="January 2024" sections={sections}>
        {/* Acknowledgment */}
        <div className="mt-12 rounded-2xl border border-amber-200 dark:border-amber-400/20 bg-amber-50 dark:bg-amber-400/10 p-6">
          <h3 className="text-lg font-bold text-amber-900 dark:text-amber-200 mb-2">
            Important Acknowledgment
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            By using this website and our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please discontinue use of our website and services.
          </p>
        </div>
      </LegalLayout>

      {/* Newsletter */}
      <Newsletter />
    </>
  );
};

export default TermsConditions;
