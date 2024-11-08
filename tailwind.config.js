/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',    // Blue
        secondary: '#7c3aed',  // Purple
        accent: '#06b6d4',     // Cyan
        success: '#10b981',    // Emerald
        warning: '#f59e0b',    // Amber
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'slide-in': 'slideIn 0.3s ease-out forwards',
        'fade-in': 'fadeIn 0.3s ease-out forwards',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};