var webpack = require('webpack');
var path = require('path');

var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

var config = {
  entry: SRC_DIR + '/index.jsx',
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',
        query: {
          presets: ['react', 'es2015']
       }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: "./dist",
    hot: true
  }
};

module.exports = config;