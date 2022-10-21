/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        '1200': '1200',
      }
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'poppins': ['Poppins,sans-serif'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    }
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
}
