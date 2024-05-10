/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './src/**/*.{js,html,jsx,ts,tsx,php}',
  'node_modules/flowbite-react/lib/esm/**/*.js',
  
],
theme: {
  backgroundColor: theme => ({
    ...theme('colors'),
    'primary': '#231f32',
    'secondary': '#ff0066',
  }),
  extend: {
    colors: {
      'navcolour':'#004900',
      'pinktheme':'#ff1493',
      'bluetheme':'#0C356A',
      'green':'#1C7947',
      'link':'#5356FF',
      'red':'#ff0000',
      'goldenyellow':'#FFC000',
      'aqua':'#40F8FF',
      'olive':'#87A922'

    },

    backgroundImage: {
      'hero_pattern':"url('/src/images/3d-music-related-scene.jpg')",
      'home':"url('/src/images/home_background.jpg')",
    },
    
    fontFamily: {
      //'sans': ['Proxima Nova'],
      'cursive':['Lucida Handwriting'],
      'malanya':['malanya'],
    }
  },
  
},
plugins: [
  require('flowbite/plugin')
]

}

