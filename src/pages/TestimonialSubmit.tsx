import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiAlertCircle, FiCheckCircle, FiSend, FiStar } from 'react-icons/fi';
import Seo from '@components/Seo';
import Logo from '@components/Logo';
import { isApiConfigured } from '@services/config';
import type { ApiError, TestimonialInvite } from '../types/index';

type Phase = 'loading' | 'invalid' | 'form' | 'done';

type Fields = {
  author_name: string;
  author_role: string;
  company: string;
  quote: string;
  rating: number;
  consent: boolean;
};

type FieldErrors = Partial<Record<keyof Fields, string>>;

const QUOTE_MIN = 20;
const QUOTE_MAX = 1000;
const RATING_LABELS = ['', 'Poor', 'Fair', 'Good', 'Very good', 'Excellent'];

const RequiredMark = () => (
  <span className="text-red-600 dark:text-red-400" aria-hidden="true">
    *
  </span>
);

const TestimonialSubmit = () => {
  const { token = '' } = useParams<{ token: string }>();
  const [phase, setPhase] = useState<Phase>('loading');
  const [invite, setInvite] = useState<TestimonialInvite | null>(null);
  const [invalidMessage, setInvalidMessage] = useState('');
  const [fields, setFields] = useState<Fields>({
    author_name: '',
    author_role: '',
    company: '',
    quote: '',
    rating: 0,
    consent: false,
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      if (!isApiConfigured() || !token) {
        setInvalidMessage('This testimonial link is not valid. Please ask us for a new one.');
        setPhase('invalid');
        return;
      }
      try {
        const { testimonialsAPI } = await import('@services/api');
        const { data } = await testimonialsAPI.invite(token);
        if (cancelled) return;
        const info = data.data;
        if (!data.success || !info) throw new Error('bad response');
        setInvite(info);
        setFields((prev) => ({ ...prev, author_name: info.client_name, company: info.company }));
        setPhase('form');
      } catch (err) {
        if (cancelled) return;
        const apiError = (err as { response?: { data?: ApiError } })?.response?.data;
        setInvalidMessage(apiError?.message || "We couldn't open this link right now. Please try again in a moment.");
        setPhase('invalid');
      }
    };
    void load();
    return () => {
      cancelled = true;
    };
  }, [token]);

  const setField = <K extends keyof Fields>(key: K, value: Fields[K]) => {
    setFields((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = () => {
    const next: FieldErrors = {};
    if (!fields.author_name.trim()) next.author_name = 'Please enter your name.';
    if (fields.rating < 1) next.rating = 'Please choose a star rating.';
    const quote = fields.quote.trim();
    if (quote.length < QUOTE_MIN) next.quote = `Please write at least ${QUOTE_MIN} characters.`;
    if (quote.length > QUOTE_MAX) next.quote = `Please keep it under ${QUOTE_MAX} characters.`;
    if (!fields.consent) next.consent = 'Please confirm we may publish your testimonial.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setSubmitError(null);
    try {
      const { testimonialsAPI } = await import('@services/api');
      await testimonialsAPI.submit({
        token,
        author_name: fields.author_name.trim(),
        author_role: fields.author_role.trim(),
        company: fields.company.trim(),
        quote: fields.quote.trim(),
        rating: fields.rating,
        consent: fields.consent,
      });
      setPhase('done');
    } catch (err) {
      const apiError = (err as { response?: { data?: ApiError } })?.response?.data;
      if (apiError?.error === 'validation_error' && apiError.errors) {
        const mapped: FieldErrors = {};
        for (const [key, msgs] of Object.entries(apiError.errors)) {
          mapped[key as keyof Fields] = Array.isArray(msgs) ? msgs[0] : String(msgs);
        }
        setErrors(mapped);
      } else if (apiError?.error?.startsWith('invite_')) {
        setInvalidMessage(apiError.message || 'This link is no longer valid.');
        setPhase('invalid');
      } else if (apiError?.error === 'throttled') {
        setSubmitError('Too many attempts. Please wait a few minutes and try again.');
      } else {
        setSubmitError("We couldn't save your testimonial right now. Please try again in a moment.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  const quoteLength = fields.quote.trim().length;
  const firstName = (invite?.client_name || fields.author_name).split(' ')[0];

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-[80vh]">
      <Seo
        title="Share your experience"
        description="Leave a testimonial for Aventix."
        path={`/testimonial/${token}`}
        noIndex
      />

      <div className="container-custom py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="surface mx-auto max-w-2xl p-6 sm:p-10"
        >
          <div className="mb-8 flex items-center justify-between gap-4">
            <Logo />
            <span className="chip-primary">Testimonial</span>
          </div>

          {phase === 'loading' && (
            <div role="status" aria-live="polite" className="flex items-center gap-3 py-10 text-gray-600 dark:text-gray-300">
              <span className="h-5 w-5 rounded-full border-2 border-gray-300 border-t-primary-600 animate-spin" aria-hidden="true" />
              Opening your link…
            </div>
          )}

          {phase === 'invalid' && (
            <div role="alert" className="py-6">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 dark:bg-red-400/10 text-red-600 dark:text-red-300 mb-5">
                <FiAlertCircle size={24} />
              </span>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">This link can&apos;t be used</h1>
              <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">{invalidMessage}</p>
              <Link to="/contact" className="btn-outline mt-8">
                Contact Aventix
              </Link>
            </div>
          )}

          {phase === 'done' && (
            <div role="status" className="py-6 text-center">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-400/15 text-emerald-600 dark:text-emerald-300 mb-5">
                <FiCheckCircle size={28} />
              </span>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Thank you, {firstName}!</h1>
              <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed max-w-md mx-auto">
                Your testimonial has been received. We&apos;ll review it shortly and then feature it on our website.
              </p>
              <Link to="/" className="btn-primary mt-8">
                Visit aventix.co.in
              </Link>
            </div>
          )}

          {phase === 'form' && invite && (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  Hi {firstName}, how did we do?
                </h1>
                <p className="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {invite.project
                    ? `A few words about the ${invite.project} project would mean a lot to us.`
                    : 'A few honest words about working with us would mean a lot.'}{' '}
                  It takes about two minutes.
                </p>
              </div>

              {/* Rating */}
              <fieldset>
                <legend className="field-label">
                  Overall rating <RequiredMark />
                </legend>
                <div className="flex items-center gap-1" onMouseLeave={() => setHoverRating(0)}>
                  {[1, 2, 3, 4, 5].map((n) => {
                    const active = n <= (hoverRating || fields.rating);
                    return (
                      <button
                        key={n}
                        type="button"
                        onClick={() => setField('rating', n)}
                        onMouseEnter={() => setHoverRating(n)}
                        aria-label={`${n} star${n > 1 ? 's' : ''}: ${RATING_LABELS[n]}`}
                        aria-pressed={fields.rating === n}
                        className={`p-1 transition-transform hover:scale-110 ${
                          active ? 'text-amber-400' : 'text-gray-300 dark:text-gray-600'
                        }`}
                      >
                        <FiStar size={30} fill={active ? 'currentColor' : 'none'} />
                      </button>
                    );
                  })}
                  <span className="ml-3 text-sm text-gray-600 dark:text-gray-300 min-w-[5rem]">
                    {RATING_LABELS[hoverRating || fields.rating]}
                  </span>
                </div>
                {errors.rating && <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">{errors.rating}</p>}
              </fieldset>

              {/* Quote */}
              <div>
                <label htmlFor="t-quote" className="field-label">
                  Your testimonial <RequiredMark />
                </label>
                <textarea
                  id="t-quote"
                  value={fields.quote}
                  onChange={(e) => setField('quote', e.target.value)}
                  rows={5}
                  maxLength={QUOTE_MAX}
                  required
                  disabled={submitting}
                  aria-invalid={!!errors.quote}
                  aria-describedby={errors.quote ? 't-quote-error' : 't-quote-hint'}
                  className="field-input resize-y min-h-[8rem]"
                  placeholder="What was the project, what did we do well, and what was the result for you?"
                />
                <div className="mt-1.5 flex items-start justify-between gap-4">
                  {errors.quote ? (
                    <p id="t-quote-error" className="text-sm text-red-600 dark:text-red-400">
                      {errors.quote}
                    </p>
                  ) : (
                    <p id="t-quote-hint" className="text-sm text-gray-500 dark:text-gray-400">
                      Two or three sentences is perfect.
                    </p>
                  )}
                  <span className="flex-shrink-0 text-xs text-gray-400 tabular-nums">
                    {quoteLength}/{QUOTE_MAX}
                  </span>
                </div>
              </div>

              {/* Identity */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="t-name" className="field-label">
                    Your name <RequiredMark />
                  </label>
                  <input
                    id="t-name"
                    type="text"
                    value={fields.author_name}
                    onChange={(e) => setField('author_name', e.target.value)}
                    maxLength={120}
                    required
                    disabled={submitting}
                    autoComplete="name"
                    aria-invalid={!!errors.author_name}
                    className="field-input"
                  />
                  {errors.author_name && (
                    <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">{errors.author_name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="t-role" className="field-label">
                    Your role
                  </label>
                  <input
                    id="t-role"
                    type="text"
                    value={fields.author_role}
                    onChange={(e) => setField('author_role', e.target.value)}
                    maxLength={120}
                    disabled={submitting}
                    autoComplete="organization-title"
                    className="field-input"
                    placeholder="Founder, Marketing Lead…"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="t-company" className="field-label">
                    Company
                  </label>
                  <input
                    id="t-company"
                    type="text"
                    value={fields.company}
                    onChange={(e) => setField('company', e.target.value)}
                    maxLength={120}
                    disabled={submitting}
                    autoComplete="organization"
                    className="field-input"
                  />
                </div>
              </div>

              {/* Consent */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={fields.consent}
                    onChange={(e) => setField('consent', e.target.checked)}
                    disabled={submitting}
                    aria-invalid={!!errors.consent}
                    className="mt-1 h-5 w-5 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    I agree that Aventix may publish this testimonial with my name, role and company on its website
                    and marketing materials. <RequiredMark />
                  </span>
                </label>
                {errors.consent && <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">{errors.consent}</p>}
              </div>

              {submitError && (
                <div
                  role="alert"
                  className="flex items-start gap-3 rounded-xl border border-red-200 dark:border-red-400/30 bg-red-50 dark:bg-red-400/10 px-4 py-3 text-sm text-red-800 dark:text-red-200"
                >
                  <FiAlertCircle className="mt-0.5 flex-shrink-0" size={18} aria-hidden="true" />
                  <p>{submitError}</p>
                </div>
              )}

              <button type="submit" className="btn-primary w-full" disabled={submitting} aria-busy={submitting}>
                {submitting ? (
                  <>
                    <span className="h-4 w-4 rounded-full border-2 border-white/40 border-t-white animate-spin" aria-hidden="true" />
                    Sending…
                  </>
                ) : (
                  <>
                    <FiSend size={18} />
                    Submit testimonial
                  </>
                )}
              </button>
              <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                This link works once. Your email address is never published.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialSubmit;
