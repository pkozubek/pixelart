const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { WebpackPluginServe: ServePlugin } = require('webpack-plugin-serve');

const outputPath = path.resolve(__dirname, 'build');

module.exports = {
  mode: 'development',
  entry: {
    main: ['webpack-plugin-serve/client', './src/index.tsx'],
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
    new ServePlugin({
      static: outputPath,
      status: false,
    }),
    new ReactRefreshWebpackPlugin({
      overlay: {
        sockIntegration: 'wps',
      },
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