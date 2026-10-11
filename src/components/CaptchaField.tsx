import { useCallback, useEffect, useState } from 'react';
import { FiRefreshCw } from 'react-icons/fi';
import type { CaptchaChallenge } from '../types/index';

interface CaptchaFieldProps {
  /** What the visitor has typed */
  answer: string;
  onAnswerChange: (answer: string) => void;
  /** Reports the current challenge id (null while loading or after a failure) */
  onChallengeChange: (captchaId: string | null) => void;
  /** Error from the parent form (e.g. the server rejected the answer) */
  error?: string;
  disabled?: boolean;
  /** Bump this number to force a fresh challenge (after a server-side CAPTCHA error) */
  reloadToken?: number;
  /** Lets the parent mark the field as required in its own validation copy */
  idPrefix?: string;
}

/**
 * Image CAPTCHA backed by GET /api/captcha. The answer is only ever checked on
 * the server; this component just shows the image and collects the input.
 */
const CaptchaField = ({
  answer,
  onAnswerChange,
  onChallengeChange,
  error,
  disabled = false,
  reloadToken = 0,
  idPrefix = 'contact',
}: CaptchaFieldProps) => {
  const [challenge, setChallenge] = useState<CaptchaChallenge | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setLoadError(null);
    setChallenge(null);
    onChallengeChange(null);
    onAnswerChange('');
    try {
      const { captchaAPI } = await import('@services/api');
      const { data } = await captchaAPI.get();
      if (!data.success || !data.data) throw new Error('bad response');
      setChallenge(data.data);
      onChallengeChange(data.data.captcha_id);
    } catch {
      setLoadError("Couldn't load the verification image. Please try again.");
    } finally {
      setLoading(false);
    }
    // onChallengeChange / onAnswerChange are stable setState wrappers in the parent
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    void load();
  }, [load, reloadToken]);

  const inputId = `${idPrefix}-captcha`;
  const message = error || loadError;

  return (
    <div>
      <label htmlFor={inputId} className="field-label">
        Verification{' '}
        <span className="text-red-600 dark:text-red-400" aria-hidden="true">
          *
        </span>
      </label>
      <div className="flex flex-col sm:flex-row sm:items-stretch gap-3">
        <div className="flex items-center gap-2">
          <div
            className="flex h-[52px] w-[150px] flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-gray-300 dark:border-white/15 bg-gray-50 dark:bg-gray-900/60"
            aria-live="polite"
          >
            {loading ? (
              <span className="h-5 w-5 rounded-full border-2 border-gray-300 border-t-primary-600 animate-spin" aria-label="Loading verification image" />
            ) : challenge ? (
              <img src={challenge.image} alt="Verification characters. Use the refresh button if unreadable." className="h-full w-full object-cover" draggable={false} />
            ) : (
              <span className="text-xs text-gray-400 px-2 text-center">Image unavailable</span>
            )}
          </div>
          <button
            type="button"
            onClick={() => void load()}
            disabled={loading || disabled}
            className="inline-flex h-[52px] w-11 flex-shrink-0 items-center justify-center rounded-xl border border-gray-300 dark:border-white/15 text-gray-600 dark:text-gray-300 hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-300 transition-colors disabled:opacity-50"
            aria-label="Load a new verification image"
            title="New image"
          >
            <FiRefreshCw size={18} className={loading ? 'animate-spin' : ''} />
          </button>
        </div>
        <input
          id={inputId}
          name="captcha"
          type="text"
          inputMode="text"
          autoComplete="off"
          autoCapitalize="characters"
          spellCheck={false}
          maxLength={12}
          value={answer}
          onChange={(e) => onAnswerChange(e.target.value)}
          disabled={disabled || loading || !challenge}
          required
          aria-invalid={!!message}
          aria-describedby={message ? `${inputId}-error` : `${inputId}-hint`}
          className="field-input uppercase tracking-[0.3em] font-semibold sm:flex-1"
          placeholder="Type the characters"
        />
      </div>
      {message ? (
        <p id={`${inputId}-error`} className="mt-1.5 text-sm text-red-600 dark:text-red-400">
          {message}
        </p>
      ) : (
        <p id={`${inputId}-hint`} className="mt-1.5 text-sm text-gray-500 dark:text-gray-400">
          Enter the characters from the image. Not case-sensitive.
        </p>
      )}
    </div>
  );
};

export default CaptchaField;
