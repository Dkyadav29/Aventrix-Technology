import { useId } from 'react';

interface LogoProps {
  className?: string;
  /** Use on dark backgrounds regardless of the current theme */
  onDark?: boolean;
}

const Logo = ({ className = '', onDark = false }: LogoProps) => {
  const gradientId = useId();

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 64 64"
        className="h-9 w-9 flex-shrink-0 drop-shadow-sm"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#0ea5e9" />
            <stop offset="1" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="16" fill={`url(#${gradientId})`} />
        <path d="M16 46 L32 16 L48 46 L41 46 L32 28 L23 46 Z" fill="#fff" />
      </svg>
      <span
        className={`font-display text-xl md:text-2xl font-extrabold tracking-tight ${
          onDark ? 'text-white' : 'text-gray-900 dark:text-white'
        }`}
      >
        Aventix
      </span>
    </span>
  );
};

export default Logo;
