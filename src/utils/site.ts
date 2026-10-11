// Single source for the contact details used across the site
export const SITE = {
  name: 'Aventix',
  email: 'dkyadav2905@gmail.com',
  phoneDisplay: '+91 77630 34886',
  phoneHref: 'tel:+917763034886',
  whatsappNumber: '917763034886',
  location: 'India — Remote, Worldwide',
  // PLACEHOLDER: confirm real business hours
  hours: 'Mon – Sat, 10:00 – 19:00 IST',
  responseTime: 'Within 24 hours',
};

// PLACEHOLDER: replace with the real profile URLs
export const SOCIALS = [
  { id: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com' },
  { id: 'twitter', label: 'Twitter', href: 'https://twitter.com' },
  { id: 'github', label: 'GitHub', href: 'https://github.com' },
  { id: 'instagram', label: 'Instagram', href: 'https://instagram.com' },
];

export const whatsappLink = (text = 'I want to discuss my project') =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;

export const mailtoLink = (subject: string, body: string) =>
  `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
