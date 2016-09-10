var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, './src/js/app.js'),
  output: {
    path: path.resolve(__dirname, './src'),
    filename: 'client.min.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ],
  devtool: "#inline-source-map",
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: ['babel-loader'],
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
};
