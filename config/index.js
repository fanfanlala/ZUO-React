const path = require('path')
module.exports = {
    // 开发环境配置
  dev: {
    env: require('./dev.env'),
    assetsPublicPath: '/',
    assetSubDirectory: 'static',
    port: 8080,
        // 默认的代理方式
    proxyTable: {
      '/api': {
        // http://www.ibantang.com/search/getData?ot=product&st=0&q=1&page=0&pagesize=20将要访问的完整网址
        // http:localhost:5000/api 转换成如下效果：
        // http://www.ibantang.com/ 与上一个一样
        target: 'http://www.zuodesign.cn/', // 将要访问的域名
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        },
        headers: {
          host: 'www.zuodesign.cn',
          Referer: 'http://www.zuodesign.cn/',
          Cookie: 'zuo_token=; zuo_token.sig=WM8s-puvxz07kkoNh4oRNmTv-DQ; Hm_lvt_683c542d518b09782eca65d69a1e9daf=1503965535,1504051764,1504140914,1504227105; Hm_lpvt_683c542d518b09782eca65d69a1e9daf=1504232110; zuo.sess=; zuo.sess.sig=OubC--l9e9C7M2IMOa5d5VLZT20'
        }
      }
    },
    autoOpenBrowser: true
  },
    // 生产环境配置
  build: {
    env: require('./prod.env'),
    assetsRoot: path.resolve(__dirname, '../src'),
    assetsPublicPath: '',
    assetSubDirectory: 'static'
  }
}
