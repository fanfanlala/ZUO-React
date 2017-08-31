import React, { Component } from 'react'
import LoginMiddleImg from './loginMiddleImg'
import LoginHeader from './loginHeader'
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: false,
      password: ''
    }
  }
  // 点击发送验证码
  codeClick = () => {
    let phone = document.getElementsByClassName('phone')[0]
    let phoneImg = document.getElementById('phoneImg')
    if (phone.value === '') {
      phone.style.border = '1px solid red'
      phoneImg.style.display = 'block'
    } else {
      if (!(/^1[34578]\d{9}$/.test(phone.value))) {
        phone.style.border = '1px solid red'
        phoneImg.src = require('../assets/images/手机号码格式不正确.png')
        phoneImg.style.display = 'block'
      } else {
        console.log('发送验证码啦')
        fetch('/api/api/get_login_code', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            phone: document.getElementsByClassName('phone')[0].value
          })
        })
          .then(response => {
            return response.json()
          })
          .then(response => {
            console.log(response)
            // ----分割线----
            if (response.status === 'ok') {
              document.getElementById('login_yard_btn').style.opacity = '0.4'
              document.getElementById('codeContent').innerHTML = 's后可重发'
              document.getElementById('codeTime').style.display = 'block'
              let time = 6
              let timer = setInterval(function () {
                time--
                document.getElementById('codeTime').innerHTML = time
                if (time === 0) {
                  clearInterval(timer)
                  document.getElementById('codeTime').style.display = 'none'
                  document.getElementById('codeContent').innerHTML = '发送验证码'
                  document.getElementById('login_yard_btn').style.opacity = '1'
                }
              }, 1000)
            }
            if (response.status === 'fail' && response.error.msg === '手机号还没有注册') {
              phone.style.border = '1px solid red'
              phoneImg.src = require('../assets/images/手机号还没有注册.png')
              phoneImg.style.display = 'block'
            }
          })
      }
    }
  }
  // phone的焦点获取事件，取消红色的边框和样式
  phoneFocus = () => {
    document.getElementsByClassName('phone')[0].style.border = ''
    document.getElementById('phoneImg').style.display = 'none'
  }

  // 点击手机密码登录
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
      this.setState({
        password: 'forget'
      })
    } else if (this.state.data === true) {
      oLoginYardInput.placeholder = '验证码'
      oLoginYardBtn.style.display = 'block'
      oRegisterUserNameA.innerHTML = '没有账号? 去注册'
      oPhoneLoginA.innerHTML = '手机密码登录'
      oPhoneLoginImg.src = require('../assets/images/锁.png')
      this.state.data = false
      this.setState({
        password: 'resign'
      })
    }
  }
  render() {
    return (
      <div id="login">
        <div>
          <LoginHeader />
          <div id="login_content">
            <LoginMiddleImg />
            <div id="Login_phoneNumber">
              <input type="text" placeholder="手机号" className="phone" onFocus={this.phoneFocus} />
              <img src={require('../assets/images/请填写手机号.png')} alt="" id="phoneImg" />
            </div>
            <div id="login_yard">
              <input type="text" placeholder="验证码" id="login_yard_input" />
              <button id="login_yard_btn" onClick={this.codeClick}><span id="codeTime">60</span><a href="#" id="codeContent">发送验证码</a></button>
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
