import React, {Component} from 'react'
import Login from '../components/Login'
class HomeHead extends Component {
  goShenDu = (ev) => {
    ev.target.style.color = 'white'
  }
  login = () => {
    const btnLogin = document.getElementById('login')
    btnLogin.style.display = 'block'
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
        <Login />
      </div>
    )
  }
}
export default HomeHead
