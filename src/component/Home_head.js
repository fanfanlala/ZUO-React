import React, {Component} from 'react'
class HomeHead extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  goShenDu = (ev) => {
    ev.target.style.color = 'white'
  }
  login = () => {
    const btnLogin = document.getElementById('login')
    btnLogin.style.display = 'block'
  }
  closeLogin = () => {
    const btnLogin = document.getElementById('login')
    btnLogin.style.display = 'none'
  }
  phoneLogin = () => {
    const loginYardInput = document.getElementById('login_yard_input')
    const loginYardBtn = document.getElementById('login_yard_btn')
    loginYardInput.placeholder = '密码'
    loginYardBtn.style.display = 'none'
  }

  render () {
    return (
      <div>
        <div className='headWrap'>
          <div className='head_left'>
            <a href="/">
              <img src={require('../assets/images/zuoLogo.png')} />
            </a>
          </div>
          <div className='head_middle'>
            <ul>
              <li id='head_firstPage'><a href='/'>首页</a></li>
              <li id="head_secondPage"><a href='depth.html' onClick={this.goShenDu}>深度</a></li>
              <li className='downLoad_app'><a>下载App</a></li>
            </ul>
            <div className='head_control_wrap'>
              <input type='text' placeholder='输入关键字搜索' className='head_control' />
              <img src={require('../assets/images/搜索.png')} />
            </div>
          </div>
          <div className='head_right'>
            <div onClick={this.login}><i className='head_login_logo'><img src={require('../assets/images/登录.png')} /></i>登录</div>
            <div>注册</div>
          </div>
        </div>
        <div id="login">
          <div>
            <div id="login_logo">
              <img src={require('../assets/images/avatar.jpg')} alt="" width={32} height={32} />
              <div>欢迎回到 ZUO</div>
              <a href="#" id="closeLogin" onClick={this.closeLogin}><img src={require('../assets/images/false.png')} alt="" height={30} width={30} /></a>
            </div>
            <div id="login_content">
              <div id="login_xlANDwx">
                <a href="https://api.weibo.com/oauth2/authorize?client_id=550264216&response_type=code&redirect_uri=http://www.zuodesign.cn/account/weibo/callback"><img src={require('../assets/images/新浪.png')} alt="" width={32} height={32} /></a>
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
                <div id="registerUserName"><a href="#" >没有账号? 去注册</a></div>
                <div id="phoneLogin" onClick={this.phoneLogin}>
                  <img src={require('../assets/images/锁.png')} alt="" width={18} height={18} />
                  <a href="#">手机密码登录</a>
                </div>
              </div>
              <div id="loginBtn">
                <button><a href="#">登录</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default HomeHead
