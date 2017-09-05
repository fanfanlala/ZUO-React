import React, { Component } from 'react'
import LoginMiddleImg from './loginMiddleImg'
import Login from './Login'
class loginRegister extends Component {
  // 点击关闭
  closeLoginRegister = () => {
    document.getElementById('register').style.display = 'none'
    document.getElementsByClassName('resignPhone')[0].style.border = ''
    document.getElementsByClassName('resignPhone')[0].value = ''
    document.getElementById('resignPhoneImg').style.display = 'none'
    document.getElementById('inputPass').value = ''
    document.getElementById('informPass').value = ''
    document.getElementById('inputResignCode').value = ''
  }
  // 点击发送验证码
  resignCodeClick = () => {
    let resignPhone = document.getElementsByClassName('resignPhone')[0]
    let resignPhoneImg = document.getElementById('resignPhoneImg')
    if (resignPhone.value === '') {
      resignPhone.style.border = '1px solid red'
      resignPhoneImg.style.display = 'block'
    } else {
      if (!(/^1[34578]\d{9}$/.test(resignPhone.value))) {
        resignPhone.style.border = '1px solid red'
        resignPhoneImg.src = require('../assets/images/手机号码格式不正确.png')
        resignPhoneImg.style.display = 'block'
      } else {
        fetch('/api/api/get_sign_code', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            phone: document.getElementsByClassName('resignPhone')[0].value
          })
        })
          .then(response => {
            return response.json()
          })
          .then(response => {
            // ----分割线----
            if (response.status === 'ok') {
              document.getElementById('register-middle-two').style.opacity = '0.4'
              document.getElementById('resignCode').innerHTML = 's后可重发'
              document.getElementById('resignTime').style.display = 'block'
              let times = 60
              let timer = setInterval(function () {
                times--
                document.getElementById('resignTime').innerHTML = times
                if (times === 0) {
                  clearInterval(timer)
                  document.getElementById('resignTime').style.display = 'none'
                  document.getElementById('resignCode').innerHTML = '发送验证码'
                  document.getElementById('register-middle-two').style.opacity = '1'
                }
              }, 1000)
            }
            if (response.status === 'fail' && response.error.msg === '已经注册，请登录') {
              resignPhone.style.border = '1px solid red'
              resignPhoneImg.src = require('../assets/images/手机号已经注册.png')
              resignPhoneImg.style.display = 'block'
            }
          })
      }
    }
  }
  // phone的焦点获取事件，取消红色的边框和样式
  phoneFocus = () => {
    document.getElementsByClassName('resignPhone')[0].style.border = ''
    document.getElementById('resignPhoneImg').style.display = 'none'
    document.getElementsByClassName('resignPhone')[0].value = ''
  }
  // 协议的点击事件
  checkOnFocus = () => {
    if (document.getElementById('check').checked) {
      document.getElementById('resignSubmit').style.opacity = '1'
    } else {
      document.getElementById('resignSubmit').style.opacity = '0.6'
    }
  }
  // 点击注册
  resignClick = () => {
    let pass = document.getElementById('inputPass')
    let rePass = document.getElementById('informPass')
    let resignPhones = document.getElementsByClassName('resignPhone')[0]
    let resignPhoneImgs = document.getElementById('resignPhoneImg')
    if (resignPhones.value === '') {
      resignPhones.style.border = '1px solid red'
      resignPhoneImgs.style.display = 'block'
    } else {
      if (!(/^1[34578]\d{9}$/.test(resignPhones.value))) {
        resignPhones.style.border = '1px solid red'
        resignPhoneImgs.src = require('../assets/images/手机号码格式不正确.png')
        resignPhoneImgs.style.display = 'block'
      } else {
        if (pass.value.length < 6) {
          pass.style.border = '1px solid red'
          document.getElementById('passImg').style.display = 'block'
        } else {
          if (pass.value !== rePass.value) {
            rePass.style.border = '1px solid red'
            document.getElementById('rePassImg').style.display = 'block'
          } else {
            if (document.getElementById('check').checked) {
              fetch('/api/api/signup', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  phone: document.getElementsByClassName('resignPhone')[0].value,
                  code: document.getElementById('inputResignCode').value,
                  pass: document.getElementById('inputPass').value,
                  repass: document.getElementById('informPass').value
                })
              })
                // .then(response => {
                //   return response.json()
                // })
                .then(response => {
                  console.log(response)
                  alert('注册成功')
                })
            }
          }
        }
      }
    }
  }
  // 输入密码的焦点事件
  passOnFocus = () => {
    document.getElementById('inputPass').style.border = '1px solid white'
    document.getElementById('passImg').style.display = 'none'
  }
  // 确认密码的焦点事件
  rePassOnFocus = () => {
    document.getElementById('informPass').style.border = '1px solid white'
    document.getElementById('rePassImg').style.display = 'none'
  }
  // 点击已注册
  hasAccount = () => {
    document.getElementById('login').style.display = 'block'
    document.getElementById('register').style.display = 'none'
  }
  render () {
    return (
      <div>
        <div id="register">
          <div id="register-content">
            <div id="register-header">
              <img src={require('../assets/images/avatar.jpg')} alt="" width={32} height={32} />
              <strong>ZUO</strong><span>欢迎你的加入</span>
              <a href='#' id='closeLoginRegister' onClick={this.closeLoginRegister}><img
                src={require('../assets/images/false.png')} alt='' height={30} width={30} /></a>
            </div>
            <div id="register-middle">
              <LoginMiddleImg />
              <div id="register-middle-one">
                <input type="text" placeholder="手机号" className="resignPhone" onFocus={this.phoneFocus} />
                <img src={require('../assets/images/请填写手机号.png')} alt="" id="resignPhoneImg" />
              </div>
              <div id="register-middle-two">
                <input type="text" placeholder="验证码" id="inputResignCode" />
                <button id="resignBtn" onClick={this.resignCodeClick}><span id="resignTime">60</span><a href="#" id="resignCode">发送验证码</a>
                </button>
              </div>
              <div id="register-middle-three">
                <input type="password" placeholder="密码" id="inputPass" onFocus={this.passOnFocus} />
                <img src={require('../assets/images/密码长度不小于6.png')} alt="" id="passImg" />
              </div>
              <div id="register-middle-four">
                <input type="password" placeholder="确认密码" id="informPass" onFocus={this.rePassOnFocus} />
                <img src={require('../assets/images/两次密码不一致.png')} alt="" id="rePassImg" />
              </div>
              <div id='userAgreement'>
                <div id="userAgreement-left">
                  <input type='checkbox' id="check" onClick={this.checkOnFocus} />
                  <span>   我已经认真阅读并同意<strong>ZUO</strong>的</span><a href='http://zuoooodesign.lofter.com/post/1d1a2c6b_6478482' target='_Blank'>《用户协议》</a>
                </div>
                <div id="userAgreement-right">
                  <span onClick={this.hasAccount}><a href="#">已有账号, 登录</a></span>
                </div>
              </div>
              <div id="register-btn">
                <button onClick={this.resignClick} id="resignSubmit"><a href="#">注册账号</a></button>
              </div>
            </div>
          </div>
        </div>
        <Login />
      </div>
    )
  }
}
export default loginRegister
