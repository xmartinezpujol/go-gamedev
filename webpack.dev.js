const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    host: '0.0.0.0',
    port: 3001,
    compress: true,
    historyApiFallback: true,
    contentBase: './public',
  },
  plugins: [
    new webpack.DefinePlugin({
      __SERVER__: "'localhost:8000'",
    }),
  ],
});
