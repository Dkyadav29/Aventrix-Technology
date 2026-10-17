import colors from 'tailwindcss/colors'

/**
 * Brand colour system (single source of truth).
 *
 *   primary   Orange  #FF6B00  calls to action, link hovers, highlights, accents
 *   secondary Royal   #335FDC  headings, outline buttons, nav active, info surfaces
 *   ink       #1A1A1A body text        muted  #6B7280 secondary text
 *
 * 500 is the brand value, 600 the hover/pressed shade, 50-100 the light tints.
 * src/index.css exposes the same values as CSS variables (--color-primary ...)
 * for the few places that need a raw colour (inline SVG gradients).
 */
const primary = {
  50: '#FFF4EB',
  100: '#FFE4D1',
  200: '#FFC9A3',
  300: '#FFA866',
  400: '#FF8A33',
  500: '#FF6B00',
  600: '#E05E00',
  700: '#B84D00',
  800: '#8F3C00',
  900: '#6B2D00',
  950: '#3D1A00',
}

const secondary = {
  50: '#EEF2FC',
  100: '#DCE4F9',
  200: '#BAC9F3',
  300: '#8EA8EA',
  400: '#5F83E2',
  500: '#335FDC',
  600: '#2A4FB8',
  700: '#223F94',
  800: '#1B3272',
  900: '#142554',
  950: '#0C1733',
}

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      colors: {
        // Cool neutral ramp for borders, subtle backgrounds and dark-mode surfaces
        gray: colors.slate,
        primary,
        secondary,
        ink: '#1A1A1A',
        muted: '#6B7280',
        // Third-party brand colour, used only on WhatsApp buttons
        whatsapp: { DEFAULT: '#1fa855', dark: '#178f47' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgb(15 23 42 / 0.04), 0 8px 24px -12px rgb(15 23 42 / 0.12)',
        'card-hover': `0 2px 4px rgb(15 23 42 / 0.04), 0 24px 48px -20px ${secondary[500]}59`,
        glow: `0 10px 40px -10px ${primary[500]}8C`,
      },
      animation: {
        blob: 'blob 7s infinite',
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        slideIn: 'slideIn 0.5s ease-out',
        'gradient-x': 'gradientX 8s ease infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
