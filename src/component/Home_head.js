import React, {Component} from 'react'
class HomeHead extends Component {
  render () {
    return (
      <div>
        <div className='headWrap'>
          <div className='head_left'>
            <img src={require('../assets/images/zuoLogo.png')} />
          </div>
          <div className='head_middle'>
            <ul>
              <li id='head_firstPage'><a>首页</a></li>
              <li className='head_depth'><a href='depth.html'>深度</a></li>
              <li className='downLoad_app'><a>下载App</a></li>
            </ul>
            <div className='head_control_wrap'>
              <input type='text' placeholder='输入关键字搜索' className='head_control' />
              <img src={require('../assets/images/搜索.png')} />
            </div>
          </div>
          <div className='head_right'>
            <div><i><img src={require('../assets/images/登录.png')} /></i>登录</div>
            <div>注册</div>
          </div>
        </div>
      </div>
    )
  }
}
export default HomeHead
