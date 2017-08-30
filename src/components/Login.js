import React, {Component} from 'react'
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: false
    }
  }
  closeLogin = () => {
    const btnLogin = document.getElementById('login')
    btnLogin.style.display = 'none'
  }
  phoneLogin = () => {
    const oLoginYardInput = document.getElementById('login_yard_input')
    const oLoginYardBtn = document.getElementById('login_yard_btn')
    const oRegisterUserNameA = document.getElementById('registerUserNameA')
    const oPhoneLoginA = document.getElementById('phoneLoginA')
    const oPhoneLoginImg = document.getElementById('phoneLoginImg')
    if (this.state.data === false) {
      oLoginYardInput.placeholder = '密码'
      oLoginYardBtn.style.display = 'none'
      oRegisterUserNameA.innerHTML = '忘记密码'
      oPhoneLoginA.innerHTML = '手机验证码登录'
      oPhoneLoginImg.src = require('../assets/images/手机.png')
      this.state.data = true
    } else if (this.state.data === true) {
      oLoginYardInput.placeholder = '验证码'
      oLoginYardBtn.style.display = 'block'
      oRegisterUserNameA.innerHTML = '没有账号? 去注册'
      oPhoneLoginA.innerHTML = '手机密码登录'
      oPhoneLoginImg.src = require('../assets/images/锁.png')
      this.state.data = false
    }
  }
  render() {
    return (
      <div id="login">
        <div>
          <div id="login_logo">
            <img src={require('../assets/images/avatar.jpg')} alt="" width={32} height={32} />
            <div>欢迎回到 ZUO</div>
            <a href="#" id="closeLogin" onClick={this.closeLogin}><img src={require('../assets/images/false.png')} alt="" height={30} width={30} /></a>
          </div>
          <div id="login_content">
            <div id="login_xlANDwx">
              <a
                href="https://api.weibo.com/oauth2/authorize?client_id=550264216&response_type=code&redirect_uri=http://www.zuodesign.cn/account/weibo/callback"><img src={require('../assets/images/新浪.png')} alt="" width={32} height={32} /></a>
              <a href="#"><img src={require('../assets/images/微信.png')} alt="" width={32} height={32} /></a>
            </div>
            <div id="login_third">你可以使用第三方社交账号直接登录</div>
            <div id="login_or">
              <div />
              <div>或者</div>
              <div />
            </div>
            <div id="Login_phoneNumber">
              <input type="text" placeholder="手机号" />
            </div>
            <div id="login_yard">
              <input type="text" placeholder="验证码" id="login_yard_input" />
              <button id="login_yard_btn"><a href="#">发送验证码</a></button>
            </div>
            <div id="login_register">
              <div id="registerUserName"><a href="#" id="registerUserNameA">没有账号? 去注册</a></div>
              <div id="phoneLogin" onClick={this.phoneLogin}>
                <img src={require('../assets/images/锁.png')} alt="" width={16} height={16} id="phoneLoginImg" />
                <a href="#" id="phoneLoginA">手机密码登录</a>
              </div>
            </div>
            <div id="loginBtn">
              <button><a href="#">登录</a></button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Login
