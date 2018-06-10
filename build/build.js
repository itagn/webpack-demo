const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const webpack = require('webpack')
const config = require('../config/index')
const buildWebpack = require('./bulid.config')

const spinner = ora('  Build start\n')
spinner.start()

rm(path.join(config.build.rootDir, config.build.sourceDir), err => {
  if (err) throw err
  spinner.color = 'yellow'
  webpack(buildWebpack, (err, stats) => {
    spinner.stop()
    if (err) throw err
    if (stats.hasErrors()) {
      console.log('  Build failed with errors.\n')
      process.exit(1)
    } else {
      spinner.text = '  Build success\n'
      spinner.succeed()
    }
  })
})