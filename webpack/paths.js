const path = require('path');

module.exports = {
  root: path.resolve(__dirname, '../'),
  outputPath: path.resolve(__dirname, '../', 'build'),
  entryPath: {
    app: path.resolve(__dirname, '../', 'src/index.jsx'),
  },
  publicPath: '/',
  templatePath: path.resolve(__dirname, '../', 'src/template.html'),
  imagesFolder: 'img',
  fontsFolder: 'fonts',
  cssFolder: 'css',
  jsFolder: 'js',
};
