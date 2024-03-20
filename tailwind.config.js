/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette.
        'black': '#0e050f',
        'dark-blue': '#170b3b',
        'purple': '#341948',
        'purple-haze': '#9388a2',
        'cream': '#f6eef0',
        'violet': '#7954a1'
      }
    }
  },
  plugins: [],
}
