/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'light-cream': '#FFF7F0',
        'galactic-blue': '#755CDE',
        'summer-yellow': '#F6A560',
        'light-red': '#EB7565',
        'cyan': '#61C4B7',
        'red': '#C41230',
        'grey': '#757575',
        'peach':'#F39E9E',
      },
      fontFamily: {
        hepta: ['"Hepta Slab"'],
      },
      backgroundImage: {
        'background-welcome': "url('src/components/images/background2.jpg')",
      }
    },
  },
  plugins: [],
};
