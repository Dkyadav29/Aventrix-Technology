const RAW_API_URL = import.meta.env.VITE_API_URL as string | undefined;

export const API_BASE_URL = RAW_API_URL || 'https://api.example.com';

/** True once VITE_API_URL points at a real backend (not the placeholder from .env.example) */
export const isApiConfigured = () => Boolean(RAW_API_URL) && !/example\.com/.test(RAW_API_URL as string);
