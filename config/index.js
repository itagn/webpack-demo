const path = require('path')

const config = {
  dev: {
    rootDir: path.resolve(__dirname, '../dist'),
    sourceDir: 'static',
    devtool: '#cheap-module-eval-source-map'
  },
  build: {
    index: path.resolve(__dirname, '../dist/index.html'),
    rootDir: path.resolve(__dirname, '../dist'), // 打包根目录
    sourceDir: 'static', // 静态资源转移子目录
    compress: true, // 是否压缩代码
    devtool: '#source-map',
    productionSourceMap: true
  }
}

module.exports = config