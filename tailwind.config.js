/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'light-cream': 'rgba(255, 247, 240, 0.80)',
        'galactic-blue': '#755CDE',
        'summer-yellow': '#F6A560',
        'light-red': '#e50000',
        'cyan': '#61C4B7',
        'red': '#C41230',
        'grey': '#757575',
        'peach':'#F39E9E',
      },
      fontFamily: {
        hepta: ['"Hepta Slab"'],
        fraunces: ['"Fraunces'],
      },
      backgroundImage: {
        'background-welcome': "url('src/components/images/background2.jpg')",
        'background-characters': "url('src/components/images/background-characters.jpeg')",
        'background-theme': "url('src/components/images/background-theme.jpg')",
      }
    },
  },
  plugins: [],
};
