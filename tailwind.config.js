/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,svelte}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        md: '2.5rem',
        lg: '4rem'
      },
      screens: {
        '2xl': '1280px'
      }
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#128ef3',
          hover: '#0e7fd8',
          active: '#0b6cb8',
          tint: '#e8f3fe'
        },
        secondary: '#75c6fc',
        background: '#f7f7f7',
        ink: {
          DEFAULT: '#0A2540',
          soft: '#1B3A5D',
          muted: '#5B6B82'
        },
        card: '#FFFFFF',
        muted: '#F1F5F9',
        border: '#E2E8F0',
        ring: '#128ef3'
      },
      fontFamily: {
        // Corporate flagship type: grotesk display + neutral body. Sharp, calm, credible.
        display: ["'Space Grotesk'", "'IBM Plex Sans'", 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ["'Inter'", "'IBM Plex Sans'", 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 1px 2px rgba(10,37,64,0.04), 0 12px 32px -12px rgba(10,37,64,0.18)',
        lift: '0 2px 4px rgba(10,37,64,0.05), 0 24px 48px -16px rgba(18,142,243,0.25)',
        card: '0 1px 2px rgba(10,37,64,0.05), 0 16px 40px -20px rgba(10,37,64,0.25)'
      },
      letterSpacing: {
        display: '-0.02em',
        eyebrow: '0.2em'
      }
    },
    screens: {
      xs: '331px',
      sm: '480px',
      md: '768px',
      lg: '1124px',
      xl: '1440px'
    }
  },
  plugins: []
};
