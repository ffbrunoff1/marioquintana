export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fefefe',
          100: '#fdfdfd',
          200: '#fafafa',
          300: '#f5f5f5',
          400: '#eeeeee',
          500: '#e0e0e0',
          600: '#bdbdbd',
          700: '#757575',
          800: '#424242',
          900: '#212121',
        },
        secondary: {
          50: '#f8f4f0',
          100: '#f0e6d6',
          200: '#e8d7bb',
          300: '#d4b896',
          400: '#c2a373',
          500: '#b8975a',
          600: '#8b6f3e',
          700: '#6b5530',
          800: '#4a3b23',
          900: '#2d2418',
        },
        accent: {
          50: '#fff9f0',
          100: '#fff3e0',
          200: '#ffe8cc',
          300: '#ffd699',
          400: '#ffcc80',
          500: '#ffb74d',
          600: '#ffa726',
          700: '#ff9800',
          800: '#f57c00',
          900: '#e65100',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
