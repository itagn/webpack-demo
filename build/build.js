const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const webpack = require('webpack')
const config = require('../config/index')
const buildWebpack = require('./bulid.config')
// 显示进度的一个插件
const spinner = ora('  Build start\n')
// 开始动画
spinner.start()

// 如果资源目录有文件，则删除资源目录，新的html文件会直接覆盖旧的html文件
rm(path.join(config.build.rootDir, config.build.sourceDir), err => {
  if (err) throw err
  spinner.color = 'yellow'
  // webpack执行 webpack配置
  webpack(buildWebpack, (err, stats) => {
    // 停止动画
    spinner.stop()
    if (err) throw err
    if (stats.hasErrors()) {
      // 打包错误，提示错误，结束进程
      console.log('  Build failed with errors.\n')
      process.exit(1)
    } else {
      // 没有错误，输出打包成功
      spinner.text = '  Build success\n'
      spinner.succeed()
    }
  })
})