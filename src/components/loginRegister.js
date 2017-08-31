import React, { Component } from 'react'
import LoginMiddleImg from './loginMiddleImg'
class loginRegister extends Component {
  closeLoginRegister = () => {
    document.getElementById('register').style.display = 'none'
  }
  render () {
    return (
      <div id="register">
        <div id="register-content">
          <div id="register-header">
            <img src={require('../assets/images/avatar.jpg')} alt="" width={32} height={32} />
            <strong>ZUO</strong><span>欢迎你的加入</span>
            <a href='#' id='closeLoginRegister' onClick={this.closeLoginRegister}><img src={require('../assets/images/false.png')} alt='' height={30} width={30} /></a>
          </div>
          <div id="register-middle">
            <LoginMiddleImg />
            <div id="register-middle-one">
              <input type="text" placeholder="手机号" />
            </div>
            <div id="register-middle-two">
              <input type="text" placeholder="验证码" />
              <button><a href="#">发送验证码</a></button>
            </div>
            <div id="register-middle-three">
              <input type="text" placeholder="密码" />
            </div>
            <div id="register-middle-four">
              <input type="text" placeholder="确认密码" />
            </div>
            <div id='userAgreement'>
              <div id="userAgreement-left">
                <input type='checkbox' />
                <span>   我已经认真阅读并同意<strong>ZUO</strong>的</span><a href='http://zuoooodesign.lofter.com/post/1d1a2c6b_6478482' target='_Blank'>《用户协议》</a>
              </div>
              <div id="userAgreement-right">
                <span><a href="#">已有账号, 登录</a></span>
              </div>
            </div>
            <div id="register-btn">
              <button><a href="#">注册账号</a></button>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
export default loginRegister
