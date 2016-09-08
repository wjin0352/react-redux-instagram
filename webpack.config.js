const path = require('path');
const webpack = require('webpack');
const packageData = require('./package.json');
const filename = [packageData.name, packageData.version, 'js'];


module.exports = {
  entry:
    {
      'react': './react/index.js'
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
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
