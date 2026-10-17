/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#222820',
        moss: '#426b54',
        sage: '#e7eee5',
        paper: '#faf9f6',
        line: '#eeece5',
        muted: '#878b82',
      },
      fontFamily: { sans: ['DM Sans', 'sans-serif'], display: ['Manrope', 'sans-serif'] },
      boxShadow: { soft: '0 10px 35px rgba(36, 49, 38, .07)' },
      animation: { 'fade-up': 'fadeUp .45s ease-out both', 'fade-in': 'fadeIn .25s ease-out both' },
      keyframes: {
        fadeUp: { from: { opacity: '0', transform: 'translateY(12px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
      },
    },
  },
  plugins: [],
}
