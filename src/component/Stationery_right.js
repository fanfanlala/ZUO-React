import React, {Component} from 'react'
import '../assets/styles/stationeryRight.styl'
class StationeryRight extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      starter: {},
      inviters: [],
      flag: false
    }
  }
  componentDidMount () {
    fetch('/api/api/topic/575bb18e6be3ff0069503da2', {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          data: response.topic,
          starter: response.topic.starter,
          inviters: response.topic.inviters
        })
      })
  }
  weiXinShow = () => {
    this.setState({
      flag: !this.state.flag
    })
  }
  componentDidUpdate () {
    var showDiv = document.getElementsByClassName('qrcode')[0]
    if (this.state.flag === true) {
      showDiv.style.top = 40 + 'px'
      showDiv.style.opacity = 1
    } else if (!this.state.flag) {
      showDiv.style.top = 60 + 'px'
      showDiv.style.opacity = 0
    }
  }
  render () {
    var arr = this.state.inviters.map((item, index) => {
      return (
        <div className='topic-user-info'>
          <div className='avatar'><img src={item.avatar} /></div>
          <div className='text-info'>
            <div className='name'>{item.username}</div>
            <div className='intro'>{item.inviter_intro}</div>
          </div>
        </div>
      )
    })
    return (
      <div>
        <div className='topic-comment-link'>
          <button className='zuo-btn-theme'>发表你的观点...</button>
        </div>
        <div className='topic-users'>
          <div className='title'>发起者</div>
          <div className='topic-user-info'>
            <div className='avatar'><img src={this.state.starter.avatar} /></div>
            <div className='text-info'>
              <div className='name'>{this.state.starter.username}</div>
              <div className='intro'>{this.state.starter.starter_intro}</div>
            </div>
          </div>
          <div className='title'>嘉宾</div>
        </div>
        {arr}
        <div className='topic-share'>
          <span className='topic-share-tip'>分享这个话题</span>
          <span>
            <a className='zuo-social-share-link-weixin' onClick={this.weiXinShow} />
            <a className='zuo-social-share-link-weibo' />
          </span>
          <div className='qrcode'><img src={require('../assets/images/weixinErWeiMa.png')} /></div>
        </div>
      </div>
    )
  }
}
export default StationeryRight
