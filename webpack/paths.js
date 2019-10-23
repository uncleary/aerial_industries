const path = require('path');

module.exports = {
  root: path.resolve(__dirname, '../'),
  outputPath: path.resolve(__dirname, '../', 'build'),
  entryPath: {
    app: path.resolve(__dirname, '../', 'src/index.jsx'),
    farmer: path.resolve(__dirname, '../', 'src/pages/farmer.jsx'),
    welcome: path.resolve(__dirname, '../', 'src/pages/landingPage.jsx'),
  },
  templatePath: path.resolve(__dirname, '../', 'src/template.html'),
  imagesFolder: 'images',
  fontsFolder: 'fonts',
  cssFolder: 'css',
  jsFolder: 'js',
};
