const webpack = require('webpack')
const path = require('path')

const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  devtool: 'source-map',

  plugins: [
    new CleanWebpackPlugin([
        'dist'
    ])
  ],

  entry: [
    'main.ts'
  ],

  output: {
    filename: 'module.js',
    publicPath: 'dist',
    path: path.resolve('dist')
  },

  resolve: {
    extensions: ['.ts', '.js'],

    modules: [
      'src',
      'node_modules'
    ],
  },

  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' }
    ]
  },
}
