/**
 * Created by dllo on 17/8/23.
 */
/*
*  opn  --open 打开浏览器插件（执行时让浏览器打开）
*  express  node.js的后端服务框架
*  http-proxy-middleware  跨域（jsonP) 解决跨域问题
*  webpack-dev-middleware  webpack开发服务 --server  不能定制
*  webpack-hot-middleware  热更新 热加载 热替换 热修复
*  html-webpack-plugin-after-emit  把编译后的内容引入之后触发的事件
*  connect-history-api-fallback  连接历史
* */

const config = require('../config')
if(!process.env.NODE_ENV){
    process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}
//引入express服务
const express = require('express')
const opn  = require('opn')
const path = require('path')
const  webpack =require('webpack')
const proxyMiddleware = require('http-proxy-middleware')
const devWebpack = require('webpack-dev-middleware')
const hotWebpack = require('webpack-hot-middleware')
const devWebpackConfig = require('./webpack.dev.config')
const proxyTable = config.dev.proxyTable
//  &&
// true && 100 结果100
// false && 100 结果 false
//  || 左边有值时，赋值为左边，左边没值时，赋值为右边
//  3306 || 8080 结果 3306
//     null || 8080 结果 8080

const port = process.env.PORT || config.dev.port

//创建服务
const app = express();


const compiler = webpack(devWebpackConfig)
//创建 webpack开发服务中间件
const devMiddleware = devWebpack(compiler,{
    publicPath:devWebpackConfig.output.publicPath,
    quiet:true,
    noInfo:true
})
//创建 webpack热替换中间件
const hotMiddleWare = hotWebpack(compiler)

//webpack 插件监听，当html-webpack-plugin执行之后
//触发action 执行浏览器 reload
compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        hotMiddleWare.publish({ action: 'reload' })
        cb()
    })
})
Object.keys(proxyTable).forEach(function (context) {
    var options = proxyTable[context]
    if (typeof options === 'string') {
        options = { target: options }
    }
    app.use(proxyMiddleware(options.filter || context, options))
})

const static = path.posix.join(config.dev.assetsPublicPath,config.dev.assetSubDirectory)
app.use(static,express.static('./static'))

app.use(devMiddleware)
app.use(hotMiddleWare)

// let a
// console.log(a) undefined
// console.log(!a) true
// console.log(!!a) false

const autoOpenBrowser = !!config.dev.autoOpenBrowser
const url = 'http:localhost:'+ port

let _resolve
let readyPromise = new Promise(resolve => {
    _resolve = resolve
})

console.log('服务器开启中...')

//等待直到服务器启动成功。。。
devMiddleware.waitUntilValid(()=>{
    console.log('服务器监听在 ' + url + '\n')
    if(autoOpenBrowser && process.env.NODE_ENV !== 'testing'){
        opn(url)
    }
    _resolve();
})

let server = app.listen(port)

module.exports = {
    ready:readyPromise,
    close:()=>{
        server.close()
    }
}

