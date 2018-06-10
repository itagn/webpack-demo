const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const baseConfig = require('./webpack.base.config')
const config = require('../config/index')

const dev = {
  mode: 'development', // 开发环境
  devtool: config.dev.devtool,
  devServer: { // webpack-dev-server配置
    host: config.dev.host, // host
    port: config.dev.port // 端口
  },
  output: { // 修改输出文件
    path: config.dev.rootDir, // 输出文件的根目录
    filename: '[name].[hash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({  // 与rules scss对应，进行css的单独打包
      filename: "[name].[hash].css"
    }),
    new CopyWebpackPlugin([ // 如果static资源目录有文件，则复制过去
      {
        from: path.resolve(__dirname, '../static'), // 从根目录的static文件夹复制
        to: path.join(config.dev.rootDir, config.dev.sourceDir), // 目的文件夹
        ignore: [] // 忽略复制的文件列表
      }
    ])
  ]
}

module.exports = Object.assign(baseConfig, dev) // 使用Object.assign合并两个配置