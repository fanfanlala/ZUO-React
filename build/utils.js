/**
 * Created by dllo on 17/8/23.
 */
const config = require('../config')
const path = require('path')
const glob = require('glob')
exports.assetsPath = function (_path) {
  var assetsSubDirectory = process.env.NODE_ENV === 'production'
        ? config.build.assetSubDirectory
        : config.dev.assetSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}
exports.getEntries = function (globPath) {
  // sync同步
  let entries = {}
  glob.sync(globPath).forEach(function (file) {
    // splice(3)倒着数，取3个元素，除了这三个其他都删除
    let filePathArray = file.split('/').splice(-3)
    const moduleName = filePathArray[1]
    entries[moduleName] = file
  })
  return entries
}
exports.getEntries('./src/modules/**/index.js ')
/*
* [ './src/modules/about/index.js',
 './src/modules/index/index.js' ]

 * 转化为：{ index:'./src/modules/about/index.js',
 about:'./src/modules/index/index.js' }
* */
