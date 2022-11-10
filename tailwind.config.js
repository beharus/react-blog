/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        firecode: ['Fira Code', 'monospace'],
        roboto: ["Roboto", "sans-serif"]
    },},
  },
  plugins: [],
}
