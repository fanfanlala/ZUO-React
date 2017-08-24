/**
 * Created by dllo on 17/8/23.
 */
const path = require('path')
const webpack = require('webpack')
// 引入文件夹config,require 会去读取该文件夹中的 index.js文件
const config = require('../config')
// 引入公用工具类 utils
const utils = require('./utils')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  // entry: path.join(__dirname, '../src', 'index.js'),
  // entry:{
  //         index:'./src/modules/index/index.js',
  //         index:'./src/modules/about/index.js'
  //       }
  //  ./src/modules/**/index.js  选择./src/modules下所有文件里的index.js
  entry: utils.getEntries('./src/modules/**/index.js'),
  output: {
    path: config.build.assetsRoot,
    filename: '[name].[hash:7].js',
    publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre', // 编译之前
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
                // url-loader依赖于file-name,
                // loader 配合options 使用
        loader: 'url-loader',
        options: {
                    // 图片的字节 临界值，当字节超过设定值，使用file-name,不会以base64形式生产
          limit: 1000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
