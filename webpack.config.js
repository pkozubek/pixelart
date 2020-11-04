const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const outputPath = path.resolve(__dirname, 'build');

module.exports = {
  mode: 'development',
  watch: true,
  entry: {
    main: ['webpack-hot-middleware/client', './src/index.tsx'],
  },
  output: {
    path: outputPath,
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        include: path.join(__dirname, 'src'),
        use: "babel-loader",
      }, {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshPlugin({
      overlay: {
        sockIntegration: 'whm',
      }
    }),
    new HtmlWebpackPlugin({
      title: "Pixelart",
      template: './index.html',
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  }
};