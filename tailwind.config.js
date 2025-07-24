/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          400: '#32A3E5',
          600: "#3084b1",
          800: "#030410",
        },
        cyan: {
          50: '#7FB8E0',
          100: '#4C94C9',
          200: '#2071AD',
          300: '#0D61AF',
          400: '#0E65B2',
          500: '#0765A9',
          600: '#106AB2',
          700: '#0762A8',
          800: '#0463A4',
          900: '#0262A0',
        }
      },
      animation: {
        marquee: 'marquee 10s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}
