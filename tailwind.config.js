/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cream': {
          50: '#F8F0E3',
          100: '#F5E6D3',
          200: '#F0DCC0',
        },
        'chocolate': {
          600: '#3D2500',
          700: '#2D1A00',
          800: '#1F1200',
        },
        'warm': {
          50: '#F8F0E3',
          100: '#F5E6D3',
        },
        'primary': {
          bg: '#F8F0E3',
          text: '#3D2500',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
        'dream': ['Dream Avenue', 'cursive'],
      },
    },
  },
  plugins: [],
}
