const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  entry: './docs/src/main.ts',

  output: {
    path: path.join(__dirname, 'docs/dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].[contenthash].chunk.js'
  },

  resolve: {
    extensions: ['.js', '.ts'],
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        include: path.join(__dirname),
        loader: 'ts-loader',
        options: {configFile: 'docs/tsconfig.json'}
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  devtool: 'inline-source-map',

  plugins: [
    new WebpackNotifierPlugin({excludeWarnings: true}),
    new CleanWebpackPlugin(['./docs/dist']),
    new CopyWebpackPlugin([
      {from: './docs/static/index.html'},
    ]),
  ],

  devServer: {
    contentBase: './docs/dist',
    port: 8080,
  },
};
