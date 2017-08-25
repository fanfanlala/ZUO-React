import React, {Component} from 'react'
import HomeBody from './Home_body'
class Home extends Component {
  render () {
    return (
      <div>
        <div className='wrap'>
          <div className='headWrap'>
            <div className='head_left'>
              <img src={require('../assets/images/zuoLogo.png')} />
            </div>
            <div className='head_middle'>
              <ul>
                <li id='head_firstPage'><a>首页</a></li>
                <li className='head_depth'><a>深度</a></li>
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
          <div className='zuo-welcome'>
            <div className='welcome_body'>
              <h1>可能是全宇宙最ZUO的图片社区</h1>
              <div className='weclome_subtip'>
                <span className='subtip_1'>和像你一样认真对待生活的人一起</span>
                <br />
                <span className='subtip_2'>从设计的视角，重新认识世界</span>
              </div>
              <button className='createZuo'>创建ZUO账号</button>
              <div className='welcome_close'>
                <img src={require('../assets/images/false.png')} />
              </div>
            </div>
          </div>
          <HomeBody />
        </div>
      </div>
    )
  }
}

export default Home
