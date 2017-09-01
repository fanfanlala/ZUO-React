import React, {Component} from 'react'
import HomeBody from './Home_body'
import HomeHead from './Home_head'
import HomeFoot from './Home_footer'
class Home extends Component {
  componentDidMount() {
    document.body.onscroll = this.returnTopScroll
  }
  // 滚轮到底部加载新的数据
  returnTopScroll = () => {
    if (document.body.scrollTop > 500) {
      let returnTop = document.getElementById('returnTop')
      returnTop.style.opacity = '0.4'
    } else {
      let returnTop = document.getElementById('returnTop')
      returnTop.style.opacity = '0'
    }
  }
  closeWelcome = () => {
    var zuoWelcome = document.getElementsByClassName('zuo-welcome')[0]
    var container = document.getElementsByClassName('zuo_container')[0]
    zuoWelcome.style.display = 'none'
    container.style.marginTop = '60px'
  }
  render () {
    return (
      <div>
        <div className='wrap'>
          <HomeHead />
          <div className='zuo-welcome'>
            <div className='welcome_body'>
              <h1>可能是全宇宙最ZUO的图片社区</h1>
              <div className='weclome_subtip'>
                <span className='subtip_1'>和像你一样认真对待生活的人一起</span>
                <br />
                <span className='subtip_2'>从设计的视角，重新认识世界</span>
              </div>
              <button className='createZuo'>创建ZUO账号</button>
              <div className='welcome_close' onClick={this.closeWelcome}>
                <img src={require('../assets/images/false.png')} />
              </div>
            </div>
          </div>
          <HomeBody />
          <HomeFoot />
        </div>
      </div>
    )
  }
}
export default Home
