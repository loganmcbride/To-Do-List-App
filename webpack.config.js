var path = require('path');
var webpack = require('webpack');


module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, './client'),
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        loader : 'babel-loader',
        query: {
          presets: ['react', 'es2015']
       }
      }
    ]
  }
};
