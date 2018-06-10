const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const baseConfig = require('./webpack.base.config')
const config = require('../config/index')

const dev = {
  mode: 'development',
  devtool: config.dev.devtool,
  devServer: {
    host: 'localhost',
    port: 4000
  },
  output: {
    path: config.dev.rootDir,
    filename: '[name].[hash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunkFilename: "[id].css"
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.sourceDir,
        ignore: []
      }
    ])
  ]
}

module.exports = Object.assign(baseConfig, dev)