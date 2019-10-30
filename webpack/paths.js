const path = require('path');

module.exports = {
  root: path.resolve(__dirname, '../'),
  outputPath: path.resolve(__dirname, '../', 'build'),
  entryPath: {
    app: path.resolve(__dirname, '../', 'src/index.jsx'),
    farmers: path.resolve(__dirname, '../', 'src/pages/farmers.jsx'),
    farmer: path.resolve(__dirname, '../', 'src/pages/farmerProfile.jsx'),
    welcome: path.resolve(__dirname, '../', 'src/pages/landingPage.jsx'),
    investment: path.resolve(__dirname, '../', 'src/pages/investment.jsx'),
  },
  templatePath: path.resolve(__dirname, '../', 'src/template.html'),
  imagesFolder: 'images',
  fontsFolder: 'fonts',
  cssFolder: 'css',
  jsFolder: 'js',
};
