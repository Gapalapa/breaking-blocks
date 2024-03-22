// postcss.config.js
module.exports = {
  plugins: [
    require('postcss-nesting'),
    require('postcss-nested'),
    require('tailwindcss'),
    require('autoprefixer'),
    // Other PostCSS plugins if needed
  ],
};
