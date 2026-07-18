/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
      },
      colors: {
        brown: {
          50: '#F9F5F1',
          100: '#F0E6DD',
          200: '#E1CCBB',
          300: '#D1B399',
          400: '#C29A77',
          500: '#B38055',
          600: '#8B4513', // Primary brown
          700: '#703811',
          800: '#562A0E',
          900: '#3D1E0B',
          950: '#2A1508', // New darker brown
        },
        beige: {
          50: '#FAF8F5',
          100: '#F5F0EA',
          200: '#EBE1D5',
          300: '#E0D2C0',
          400: '#D4C4B7', // Primary beige
          500: '#C8B5A0',
          600: '#BCA689',
          700: '#A3896B',
          800: '#8A6F54',
          900: '#71553D',
        },
        offWhite: '#FAF9F6', // Off-white
        ivory: '#FFFFF0', // Ivory
        success: {
          50: '#ECFDF5',
          500: '#10B981',
          900: '#064E3B',
        },
        warning: {
          50: '#FFFBEB',
          500: '#F59E0B',
          900: '#78350F',
        },
        error: {
          50: '#FEF2F2',
          500: '#EF4444',
          900: '#7F1D1D',
        }
      },
      fontFamily: {
        'sans': ['Work Sans', 'system-ui', 'sans-serif'],
        'serif': ['Cormorant Garamond', 'serif'],
      },
      boxShadow: {
        'elegant': '0 4px 20px rgba(139, 69, 19, 0.1)',
        'card': '0 4px 16px rgba(139, 69, 19, 0.08)',
        'elevated': '0 10px 30px rgba(139, 69, 19, 0.12)',
      },
      backgroundImage: {
        'texture-light': "url('https://images.pexels.com/photos/4321803/pexels-photo-4321803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        'texture-dark': "url('https://images.pexels.com/photos/5022847/pexels-photo-5022847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  plugins: [],
  // Force light mode only
  darkMode: 'class',
};