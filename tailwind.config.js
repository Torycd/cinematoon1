/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        // ... other shadow definitions
        'right-sm': '5px 0 10px rgba(0, 0, 255, 0.5)', // Custom shadow for the right side
      },
    },
  },
  plugins: [],
};
