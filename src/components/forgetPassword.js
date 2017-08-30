import React, { Component } from 'react'
class ForgetPassword extends Component {
  closeForgetPassword = () => {
    document.getElementById('forgetPassword').style.display = 'none'
  }
  render () {
    return (
      <div id="forgetPassword">
        <div id="forgetPassword-content">
          <div id="forgetPassword-header">
            <strong>忘记密码</strong>
            <a href='#' id='closeForgetPassword' onClick={this.closeForgetPassword}><img src={require('../assets/images/false.png')} alt='' height={30} width={30} /></a>
          </div>
          <div id="forgetPassword-middle">
            <div id="forgetPassword-middle-one">
              <input type="text" placeholder="手机号" />
            </div>
            <div id="forgetPassword-middle-two">
              <input type="text" placeholder="验证码" />
              <button><a href="#">发送验证码</a></button>
            </div>
            <div id="forgetPassword-middle-three">
              <input type="text" placeholder="新密码" />
            </div>
            <div id="forgetPassword-middle-four">
              <input type="text" placeholder="新密码确认" />
            </div>
            <div id="forgetPassword-btn">
              <button><a href="#">确认修改</a></button>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
export default ForgetPassword
