const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const paths = {
  DIST: path.resolve(__dirname, 'public'),
  DEPLOY: path.resolve(__dirname, 'public/js'),
  SRC: path.resolve(__dirname, 'client'),
};

module.exports = {
  entry: {
    app: './client/index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: false },
          },
        ],
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader',
        }),
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html'),
      filename: '../index.html',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: paths.DEPLOY,
    publicPath: '/js',
  },
};
