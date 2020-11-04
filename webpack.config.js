const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
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
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            babelrc: false,
            presets: [
              [
                "@babel/preset-env",
                { targets: { browsers: "last 2 versions" } } // or whatever your project requires
              ],
              "@babel/preset-typescript",
              "@babel/preset-react"
            ],
            plugins: [
              // plugin-proposal-decorators is only needed if you're using experimental decorators in TypeScript
              ["@babel/plugin-proposal-decorators", { legacy: true }],
              ["@babel/plugin-proposal-class-properties", { loose: true }],
              require.resolve('react-refresh/babel')
            ]
          }
        }
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
    }),
    new ForkTsCheckerWebpackPlugin()
  ],
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  }
};