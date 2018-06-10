const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const baseConfig = require('./webpack.base.config')
const config = require('../config/index')

const build = {
  mode: 'production',
  devtool: config.build.devtool,
  output: {
    path: config.build.rootDir,
    filename: path.join(config.build.sourceDir, 'js/[name].[hash].js'),
    publicPath: config.dev.publicPath
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: config.build.index
    }),
    new MiniCssExtractPlugin({
      filename: path.join(config.build.sourceDir, "css/[name].[hash].css"),
      chunkFilename: "[id].css"
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'), // 从根目录的static文件夹复制
        to: path.join(config.build.rootDir, config.build.sourceDir), // 到打包的文件夹
        ignore: [] // 忽略复制的文件列表
      }
    ])
  ]
}
// 是否压缩js和css代码
if (config.build.compress) {
  // 压缩js代码
  const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
  const js = new UglifyJsPlugin({
    uglifyOptions: {
      compress: {
        warnings: false
      }
    },
    sourceMap: config.build.productionSourceMap,
    parallel: true
  })
  // 压缩css代码
  const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
  const css = new OptimizeCSSPlugin({
    cssProcessorOptions: config.build.productionSourceMap
      ? { safe: true, map: { inline: false } }
      : { safe: true }
  })
  build.plugins.push(js, css)
}
module.exports = Object.assign(baseConfig, build)