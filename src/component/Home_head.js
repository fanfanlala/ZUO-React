import React, {Component} from 'react'
import Login from '../components/Login'
import Register from '../components/loginRegister'
import ForgetPassword from '../components/forgetPassword'
import DownloadApp from '../components/nav-downloadAPP'
class HomeHead extends Component {
  componentDidMount() {
    document.body.onscroll = this.scroll
  }
  scroll = () => {
    if (document.body.scrollTop > 500) {
      let returnTop = document.getElementById('returnTop')
      returnTop.style.opacity = '0.4'
    } else {
      let returnTop = document.getElementById('returnTop')
      returnTop.style.opacity = '0'
    }
  }
  // 返回顶部的点击事件
  returnTop = () => {
    document.body.scrollTop = 0
  }

  goShenDu = (ev) => {
    ev.target.style.color = 'white'
  }
  login = () => {
    document.getElementById('login').style.display = 'block'
  }
  register = () => {
    document.getElementById('register').style.display = 'block'
  }
  downloadApp = () => {
    document.getElementById('downloadApp').style.display = 'block'
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
              <li className='downLoad_app' onClick={this.downloadApp}><a>下载App</a></li>
            </ul>
            <div className='head_control_wrap'>
              <input type='text' placeholder='输入关键字搜索' className='head_control' />
              <img src={require('../assets/images/搜索.png')} />
            </div>
          </div>
          <div className='head_right'>
            <div onClick={this.login}><i className='head_login_logo'><img src={require('../assets/images/登录.png')} /></i>登录</div>
            <div onClick={this.register}>注册</div>
          </div>
        </div>
        <Login />
        <Register />
        <ForgetPassword />
        <DownloadApp />
        <div id="returnTop" onClick={this.returnTop} onScroll={this.scroll}><a href="#"><img
          src={require('../assets/images/返回顶部.png')} alt="" /></a>
        </div>
      </div>
    )
  }
}
export default HomeHead
