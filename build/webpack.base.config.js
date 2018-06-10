const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const config = require('../config/index')
const path = require('path')

const baseConfig = {
  context: path.resolve(__dirname, '../'),
  entry: {
    bundle: './src/index.ts'
  },
  resolve: {
    extensions: [".js", ".ts", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader'
        }
      },
      {
        test: /\.jsx?$/,
        use:{
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jpeg|jpg|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: config.build.file.limit,
            outputPath: path.join(config.build.sourceDir, 'img/'),
            name: '[name].[hash:7].[ext]'
          }
        }
      }
    ]
  }
}

module.exports = baseConfig