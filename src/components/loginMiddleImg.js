import React, {Component} from 'react'
class LoginMiddleImg extends Component {
  render () {
    return (
      <div>
        <div id='login_xlANDwx'>
          <a
            href='https://api.weibo.com/oauth2/authorize?client_id=550264216&response_type=code&redirect_uri=http://www.zuodesign.cn/account/weibo/callback'><img
              src={require('../assets/images/新浪.png')} alt='' width={32} height={32} /></a>
          <a
            href='https://open.weixin.qq.com/connect/qrconnect?appid=wx9d75dbd10c851e28&redirect_uri=http://www.zuodesign.cn/account/weixin/callback&response_type=code&scope=snsapi_login&state=undefined'><img
              src={require('../assets/images/微信.png')} alt='' width={32} height={32} /></a>
        </div>
        <div id='login_third'>你可以使用第三方社交账号直接登录</div>
        <div id='login_or'>
          <div />
          <div>或者</div>
          <div />
        </div>
      </div>
    )
  }
}
export default LoginMiddleImg
