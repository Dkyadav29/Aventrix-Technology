import { motion } from 'framer-motion';
import { useState } from 'react';
import HeroSection from '@components/HeroSection';
import SectionHeading from '@components/SectionHeading';
import ProcessSteps from '@components/ProcessSteps';
import CTASection from '@components/CTASection';
import Seo from '@components/Seo';
import type { ApiError } from '../types/index';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiCheckCircle,
  FiSend,
  FiAlertCircle,
  FiRefreshCw,
  FiLinkedin,
  FiTwitter,
  FiGithub,
  FiInstagram,
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import { SITE, SOCIALS, mailtoLink, whatsappLink } from '@utils/site';
import { validatePhone } from '@utils/helpers';
import { isApiConfigured } from '@services/config';
import { SERVICES } from '../constants/services';

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;
/** How the message left the page */
type Outcome = 'api' | 'email' | 'whatsapp';

const EMPTY_FORM: FormData = { name: '', email: '', phone: '', company: '', service: '', message: '' };
const MESSAGE_MAX = 1000;
const FIELD_ORDER: (keyof FormData)[] = ['name', 'email', 'phone', 'company', 'service', 'message'];

const SOCIAL_ICONS: Record<string, IconType> = {
  linkedin: FiLinkedin,
  twitter: FiTwitter,
  github: FiGithub,
  instagram: FiInstagram,
};

const contactItems = [
  { icon: <FiMail />, label: 'Email', value: SITE.email, link: `mailto:${SITE.email}` },
  { icon: <FiPhone />, label: 'Phone / WhatsApp', value: SITE.phoneDisplay, link: SITE.phoneHref },
  { icon: <FiMapPin />, label: 'Location', value: SITE.location },
  { icon: <FiClock />, label: 'Business hours', value: SITE.hours },
];

const processSteps = [
  { num: '01', title: 'Discovery Call', desc: '30-min consultation to understand your vision' },
  { num: '02', title: 'Proposal', desc: 'Detailed proposal with timeline and pricing' },
  { num: '03', title: 'Development', desc: 'Weekly sprints with regular communication' },
  { num: '04', title: 'Launch & Support', desc: 'Deploy, monitor, and provide ongoing support' },
];

const validate = (data: FormData): FormErrors => {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = 'Please enter your name.';
  if (!data.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  if (data.phone.trim() && !validatePhone(data.phone.trim())) {
    errors.phone = 'Please enter a valid phone number, or leave this blank.';
  }
  if (!data.message.trim()) {
    errors.message = 'Please tell us a little about your project.';
  } else if (data.message.trim().length < 10) {
    errors.message = 'Please add a few more details (at least 10 characters).';
  }
  return errors;
};

const serviceTitle = (id: string) => SERVICES.find((s) => s.id === id)?.title;

const buildMessage = (data: FormData) =>
  [
    `Name: ${data.name.trim()}`,
    `Email: ${data.email.trim()}`,
    data.phone.trim() ? `Phone: ${data.phone.trim()}` : null,
    data.company.trim() ? `Company: ${data.company.trim()}` : null,
    data.service ? `Service: ${serviceTitle(data.service)}` : null,
    '',
    'Project details:',
    data.message.trim(),
  ]
    .filter((line) => line !== null)
    .join('\n');

const RequiredMark = () => (
  <span className="text-red-600 dark:text-red-400" aria-hidden="true">
    *
  </span>
);

const PremiumContact = () => {
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [outcome, setOutcome] = useState<Outcome | null>(null);
  const apiAvailable = isApiConfigured();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  /** Runs validation and focuses the first invalid field; returns true when the form is valid */
  const checkForm = () => {
    const nextErrors = validate(formData);
    setErrors(nextErrors);
    const firstInvalid = FIELD_ORDER.find((field) => nextErrors[field]);
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return false;
    }
    return true;
  };

  // Hands the message to the visitor's own email app or WhatsApp, pre-filled.
  // Used when there is no backend, and as the fallback when the API fails.
  const sendVia = (channel: 'email' | 'whatsapp') => {
    if (!checkForm()) return;
    const body = buildMessage(formData);
    if (channel === 'email') {
      window.location.href = mailtoLink(`Project enquiry from ${formData.name.trim()}`, body);
    } else {
      window.open(whatsappLink(body), '_blank', 'noopener,noreferrer');
    }
    setOutcome(channel);
  };

  const sendViaApi = async () => {
    if (!checkForm()) return;
    setSubmitting(true);
    setSubmitError(null);
    try {
      // The API client (and axios) is only loaded when a message is actually sent
      const { contactAPI } = await import('@services/api');
      await contactAPI.send({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || undefined,
        company: formData.company.trim() || undefined,
        service: formData.service || undefined,
        subject: `Project enquiry from ${formData.name.trim()}`,
        message: formData.message.trim(),
      });
      setOutcome('api');
    } catch (err) {
      const apiError = (err as { response?: { data?: ApiError } })?.response?.data;
      if (apiError?.error === 'throttled') {
        setSubmitError('Too many attempts. Please wait a minute and try again, or use email or WhatsApp below.');
      } else {
        setSubmitError("We couldn't send your message right now. Please try again, or use email or WhatsApp below.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiAvailable) {
      void sendViaApi();
    } else {
      sendVia('email');
    }
  };

  const resetForm = () => {
    setFormData(EMPTY_FORM);
    setErrors({});
    setSubmitError(null);
    setOutcome(null);
  };

  const firstName = formData.name.trim().split(' ')[0];

  return (
    <div className="bg-white dark:bg-gray-950">
      <Seo
        title="Contact — Get a Free Quote"
        description="Reach out to discuss your web, mobile, WordPress, testing, API integration, or AI project. Free consultation, fast response."
        path="/contact"
      />
      {/* Hero */}
      <HeroSection
        title="Let's Build Together"
        subtitle="Contact"
        description="Share your project idea and let's discuss how we can help you succeed"
      />

      {/* Contact Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Left Side - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <p className="eyebrow mb-4">Get In Touch</p>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-5 text-gray-900 dark:text-white">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                Have a project in mind? We'd love to hear about it. Reach out and let's create something amazing together.
              </p>

              <ul className="space-y-4">
                {contactItems.map((item) => {
                  const content = (
                    <>
                      <span className="icon-tile">{item.icon}</span>
                      <span>
                        <span className="block text-sm font-medium text-gray-500 dark:text-gray-400">
                          {item.label}
                        </span>
                        <span className="block font-semibold text-gray-900 dark:text-white break-all">
                          {item.value}
                        </span>
                      </span>
                    </>
                  );

                  return (
                    <li key={item.label}>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="flex items-center gap-4 rounded-2xl border border-transparent p-3 -m-3 hover:border-gray-200 hover:bg-gray-50 dark:hover:border-white/10 dark:hover:bg-white/5 transition-colors"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="flex items-center gap-4 p-3 -m-3">{content}</div>
                      )}
                    </li>
                  );
                })}
              </ul>

              <p className="mt-8 inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <FiCheckCircle className="text-secondary-500" aria-hidden="true" />
                We reply to every enquiry {SITE.responseTime.toLowerCase()}.
              </p>

              {/* WhatsApp CTA */}
              <div className="mt-8">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                  <FaWhatsapp size={22} />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Social links */}
              <div className="mt-10">
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Follow us</p>
                <ul className="flex gap-3">
                  {SOCIALS.map((social) => {
                    const Icon = SOCIAL_ICONS[social.id];
                    return (
                      <li key={social.id}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:border-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                        >
                          {Icon && <Icon size={18} />}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              id="contact-form"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2 scroll-mt-28"
            >
              <div className="surface p-6 md:p-10">
                {outcome ? (
                  <div role="status" className="py-8 text-center">
                    <span className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary-100 dark:bg-secondary-400/15 text-secondary-600 dark:text-secondary-300">
                      <FiCheckCircle size={32} />
                    </span>
                    {outcome === 'api' ? (
                      <>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                          Thanks, {firstName}! Your message is on its way.
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-md mx-auto">
                          We'll get back to you at <strong className="text-gray-900 dark:text-white">{formData.email.trim()}</strong>{' '}
                          {SITE.responseTime.toLowerCase()}.
                        </p>
                      </>
                    ) : (
                      <>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                          Almost done, {firstName}!
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-md mx-auto">
                          {outcome === 'email'
                            ? 'Your email app should have opened with your message ready. Press send there to reach us.'
                            : 'WhatsApp should have opened with your message ready. Press send there to reach us.'}
                        </p>
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                          Nothing opened? Try the other option below.
                        </p>
                      </>
                    )}
                    <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                      {outcome === 'email' && (
                        <button type="button" onClick={() => sendVia('whatsapp')} className="btn-whatsapp">
                          <FaWhatsapp size={20} />
                          Send on WhatsApp instead
                        </button>
                      )}
                      {outcome === 'whatsapp' && (
                        <button type="button" onClick={() => sendVia('email')} className="btn-primary">
                          <FiSend size={18} />
                          Send by email instead
                        </button>
                      )}
                      <button type="button" onClick={resetForm} className="btn-outline">
                        Write another message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Tell us about your project</h3>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        Fields marked <RequiredMark /> are required.
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div>
                        <label htmlFor="contact-name" className="field-label">
                          Full Name <RequiredMark />
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          autoComplete="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          disabled={submitting}
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? 'contact-name-error' : undefined}
                          className="field-input"
                          placeholder="Your name"
                        />
                        {errors.name && <p id="contact-name-error" className="field-error">{errors.name}</p>}
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="contact-email" className="field-label">
                          Email Address <RequiredMark />
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          autoComplete="email"
                          inputMode="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          disabled={submitting}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'contact-email-error' : undefined}
                          className="field-input"
                          placeholder="your@email.com"
                        />
                        {errors.email && <p id="contact-email-error" className="field-error">{errors.email}</p>}
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="contact-phone" className="field-label">
                          Phone <span className="font-normal text-gray-500 dark:text-gray-400">(optional)</span>
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          name="phone"
                          autoComplete="tel"
                          inputMode="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          disabled={submitting}
                          aria-invalid={!!errors.phone}
                          aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
                          className="field-input"
                          placeholder="+91 ..."
                        />
                        {errors.phone && <p id="contact-phone-error" className="field-error">{errors.phone}</p>}
                      </div>

                      {/* Company */}
                      <div>
                        <label htmlFor="contact-company" className="field-label">
                          Company <span className="font-normal text-gray-500 dark:text-gray-400">(optional)</span>
                        </label>
                        <input
                          id="contact-company"
                          type="text"
                          name="company"
                          autoComplete="organization"
                          value={formData.company}
                          onChange={handleChange}
                          disabled={submitting}
                          className="field-input"
                          placeholder="Your company"
                        />
                      </div>
                    </div>

                    {/* Service */}
                    <div>
                      <label htmlFor="contact-service" className="field-label">
                        What do you need help with?{' '}
                        <span className="font-normal text-gray-500 dark:text-gray-400">(optional)</span>
                      </label>
                      <select
                        id="contact-service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        disabled={submitting}
                        className="field-input appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%2364748b%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><polyline points=%226 9 12 15 18 9%22/></svg>')] bg-no-repeat bg-[right_1rem_center] pr-10"
                      >
                        <option value="">Select a service</option>
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.title}
                          </option>
                        ))}
                        <option value="other">Something else</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="contact-message" className="field-label">
                        Project Details <RequiredMark />
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        disabled={submitting}
                        rows={5}
                        maxLength={MESSAGE_MAX}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'contact-message-error' : 'contact-message-hint'}
                        className="field-input resize-y min-h-[8rem]"
                        placeholder="What are you building? Any timeline or budget in mind?"
                      />
                      <div className="mt-1.5 flex items-start justify-between gap-4">
                        {errors.message ? (
                          <p id="contact-message-error" className="text-sm text-red-600 dark:text-red-400">
                            {errors.message}
                          </p>
                        ) : (
                          <p id="contact-message-hint" className="text-sm text-gray-500 dark:text-gray-400">
                            The more detail, the better our first reply.
                          </p>
                        )}
                        <span className="flex-shrink-0 text-xs text-gray-400 tabular-nums">
                          {formData.message.length}/{MESSAGE_MAX}
                        </span>
                      </div>
                    </div>

                    {/* Submission error */}
                    {submitError && (
                      <div
                        role="alert"
                        className="flex items-start gap-3 rounded-xl border border-red-200 dark:border-red-400/30 bg-red-50 dark:bg-red-400/10 px-4 py-3 text-sm text-red-800 dark:text-red-200"
                      >
                        <FiAlertCircle className="mt-0.5 flex-shrink-0" size={18} aria-hidden="true" />
                        <div className="flex-1">
                          <p>{submitError}</p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            <button type="button" onClick={() => void sendViaApi()} className="btn-outline !px-4 !py-2 text-sm">
                              <FiRefreshCw size={14} />
                              Try again
                            </button>
                            <button type="button" onClick={() => sendVia('email')} className="btn-outline !px-4 !py-2 text-sm">
                              <FiMail size={14} />
                              Send by email
                            </button>
                            <button type="button" onClick={() => sendVia('whatsapp')} className="btn-outline !px-4 !py-2 text-sm">
                              <FaWhatsapp size={14} />
                              WhatsApp
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Submit */}
                    {apiAvailable ? (
                      <div className="pt-2">
                        <button type="submit" className="btn-primary w-full" disabled={submitting} aria-busy={submitting}>
                          {submitting ? (
                            <>
                              <span className="h-4 w-4 rounded-full border-2 border-white/40 border-t-white animate-spin" aria-hidden="true" />
                              Sending…
                            </>
                          ) : (
                            <>
                              <FiSend size={18} />
                              Send Message
                            </>
                          )}
                        </button>
                        <p className="mt-3 text-xs text-center text-gray-500 dark:text-gray-400">
                          Prefer chat?{' '}
                          <button type="button" onClick={() => sendVia('whatsapp')} className="font-semibold text-primary-700 dark:text-primary-300 hover:underline">
                            Send this on WhatsApp instead
                          </button>
                        </p>
                      </div>
                    ) : (
                      <div className="pt-2">
                        <div className="grid sm:grid-cols-2 gap-3">
                          <button type="submit" className="btn-primary w-full">
                            <FiSend size={18} />
                            Send by Email
                          </button>
                          <button type="button" onClick={() => sendVia('whatsapp')} className="btn-whatsapp w-full">
                            <FaWhatsapp size={20} />
                            Send on WhatsApp
                          </button>
                        </div>
                        <p className="mt-3 text-xs text-center text-gray-500 dark:text-gray-400">
                          Opens your email app or WhatsApp with the message filled in — nothing is stored on this site.
                        </p>
                      </div>
                    )}
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section section-muted">
        <div className="container-custom">
          <SectionHeading
            eyebrow="What Happens Next"
            title="Our Process"
            description="From initial consultation to deployment"
          />
          <ProcessSteps steps={processSteps} ringClassName="ring-gray-50 dark:ring-gray-950" />
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Don't Wait - Let's Build Today"
        description="Your next big idea is just one consultation away."
        primaryLabel="Schedule Free Consultation"
        primaryTo="#contact-form"
        whatsAppLabel="Quick Chat"
      />
    </div>
  );
};

export default PremiumContact;
