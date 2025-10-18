import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eaf3ff',
          100: '#d6e8ff',
          200: '#b1d3ff',
          300: '#8bbdff',
          400: '#5fa2ff',
          500: '#1677ff',
          600: '#0b63d1',
          700: '#0a53ad',
          800: '#0a468f',
          900: '#0a3a75'
        },
        surface: '#f5f5f5',
        border: '#e6e6e6',
        fg: '#0a0a0a',
        muted: '#6f7278',
        pill: '#000000'
      },
      fontFamily: {
        display: ['Sora', 'ui-sans-serif', 'system-ui'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '1280px'
        }
      },
      borderRadius: {
        'md': '12px',
        'lg': '16px'
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem'
      }
    },
  },
  plugins: [],
}
export default config


