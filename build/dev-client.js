/**
 *
 * Created by dllo on 17/8/23.
 */

// 热更新
require('eventsource-polyfill')
// 引入 热加载/热更新/热替换 的客户端
// 设置参数 noInfo及reload
const hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true')
hotClient.subscribe(function (event) {
  if (event.action === 'reload') {
    window.location.reload()
  }
})
