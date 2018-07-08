const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = merge(common, {
  plugins: [
    new webpack.DefinePlugin({
      __SERVER__: "'localhost:8000'",
    }),
  ],
});
