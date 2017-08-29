/**
 * Created by dllo on 17/8/23.
 */
const merage = require('webpack-merge')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const config = require('../config')
const utils = require('./utils')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.config')
// 修改webpack配置的entry
// baseWebpackConfig.entry = ['./build/dev-client'].concat(baseWebpackConfig.entry)
Object.keys(baseWebpackConfig.entry).forEach(function (item) {
  baseWebpackConfig.entry[item] = ['whatwg-fetch', './build/dev-client'].concat(baseWebpackConfig.entry[item])
})
// 合并 base 与 dev的配置
module.exports = merage(baseWebpackConfig, {
    // 在base配置基础上添加插件
  plugins: [
        // 在HTML中引入编译后的资源
    // new HTMLWebpackPlugin({
    //   filename: 'index.html',
    //   template: './src/modules/index/index.html',
    //   excludeChunks:[
    //     {about:'./src/modules/about/hotTags.html'}
    //   ]
    // }),
    // new HTMLWebpackPlugin({
    //   filename: 'hotTags.html',
    //   template: './src/modules/about/hotTags.html',
    //   excludeChunks:[
    //     {index:'./src/modules/index/index.html'}
    //   ]
    // }),
        // webpack的默认配置
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
        // webpack 的热模块替换插件
    new webpack.HotModuleReplacementPlugin(),
        // webpack 不触发error事件插件
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsPlugin()
  ]
})

// .src/modules/index/index.js
// .src/modules/index/index.html
// .src/modules/about/hotTags.html

// new HTMLWebpackPlugin({
//   filename: 'index.html',
//   template: './src/modules/index/index.html',
//   excludeChunks:[
//     {about:'./src/modules/about/hotTags.html'}
//   ]
// })
const htmlPaths = utils.getEntries('./src/modules/**/*.html')
Object.keys(htmlPaths).forEach(function (key) {
  let config = {
    filename: key + '.html',
    template: htmlPaths[key],
    // 忽略其他模块中的js
    excludeChunks: Object.keys(htmlPaths).filter(function (path) {
      return (path !== key)
    })
  }
  const plugin = new HTMLWebpackPlugin(config)
  module.exports.plugins.push(plugin)
})
