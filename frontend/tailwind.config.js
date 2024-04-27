/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/user/Dashboard.js",
    "./src/components/navcomponent/About.jsx",
    "./src/components/navcomponent/ContactPage.jsx",
    "./src/components/Course/Record.js",
    "./src/components/Course/Gallary.js",
    "./src/components/Course/video.js",
  ],
  theme: {
    extend: {
      'bg-img': "url('/bg2.jpg')",
    },
  },
  plugins: [],
}

