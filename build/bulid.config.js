const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const baseConfig = require('./webpack.base.config')
const config = require('../config/index')

const build = {
  mode: 'production', // 线上环境
  devtool: config.build.devtool,
  output: {
    path: config.build.rootDir, // 资源输出基础目录
    filename: path.join(config.build.sourceDir, 'js/[name].[hash].js') // js文件会打包到 基础目录/资源目录/js/ 下
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: config.build.index // 打包成功之后的index.html文件
    }),
    new MiniCssExtractPlugin({
      filename: path.join(config.build.sourceDir, "css/[name].[hash].css") // css文件会打包到 基础目录/资源目录/css/ 下
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
  const js = new UglifyJsPlugin({ // webpack官网文档的插件
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
  const css = new OptimizeCSSPlugin({ // webpack官网文档的插件
    cssProcessorOptions: config.build.productionSourceMap
      ? { safe: true, map: { inline: false } }
      : { safe: true }
  })
  build.plugins.push(js, css)
}

module.exports = Object.assign(baseConfig, build) // 使用Object.assign合并两个配置