const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    require('autoprefixer')({
      map: process.env.ELEVENTY_ENV !== 'production'
    }),
    require('@fullhuman/postcss-purgecss')({
      content: ["./_site/**/*.html"],
      css: ["./_site/**/*.css"],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    })
  ],
};