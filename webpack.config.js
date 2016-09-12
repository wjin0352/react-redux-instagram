const path = require('path');
const webpack = require('webpack');
const packageData = require('./package.json');
// const filename = [packageData.name, packageData.version, 'js'];


module.exports = {
  entry:
    {
      'react': './client/client.js'
    },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: "[name].js",
  },
  watch: true,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
          plugins: ["transform-object-rest-spread"]
        }
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, 'client/css'),
        loader: 'style-loader!css-loader!stylus-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
