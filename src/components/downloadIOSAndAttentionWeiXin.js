import React, {Component} from 'react'
class DownloadIOSAndAttentionWeiXin extends Component {
  IOSOver = () => {
    document.getElementById('IOSImg').src = require('../assets/images/ios2.png')
    document.getElementById('downloadIOS').style.backgroundColor = '#fff'
  }
  IOSOut = () => {
    document.getElementById('IOSImg').src = require('../assets/images/ios1.png')
    document.getElementById('downloadIOS').style.backgroundColor = '#f6f6f6'
  }
  WeiXinOver = () => {
    document.getElementById('WeiXinImg').src = require('../assets/images/weixin2.png')
    document.getElementById('downloadWeiXin').style.backgroundColor = '#fff'
  }
  WeiXinOut = () => {
    document.getElementById('WeiXinImg').src = require('../assets/images/weixin1.png')
    document.getElementById('downloadWeiXin').style.backgroundColor = '#f6f6f6'
  }
  WeiXinClick = () => {
    document.getElementById('WeiXinTwoYard').style.display = 'block'
  }
  CloseWeiXinTwoYard = () => {
    document.getElementById('WeiXinTwoYard').style.display = 'none'
  }
  render() {
    return (
      <div id="downloadIOSAndAttentionWeiXin">
        <div id="downloadIOS" onMouseOver={this.IOSOver} onMouseOut={this.IOSOut}>
          <div><a href="#">下载IOS版 App</a></div>
          <div><img src={require('../assets/images/ios1.png')} alt="" id="IOSImg" /></div>
        </div>
        <div id="downloadWeiXin" onMouseOver={this.WeiXinOver} onMouseOut={this.WeiXinOut}>
          <div onClick={this.WeiXinClick}><a href="#">关注微信公众号</a></div>
          <div><img src={require('../assets/images/weixin1.png')} alt="" id="WeiXinImg" /></div>
        </div>
        <div id="WeiXinTwoYard" onClick={this.CloseWeiXinTwoYard}><img src={require('../assets/images/scan-wechat.png')} alt="" width={440} height={440} /></div>
      </div>
    )
  }
}
export default DownloadIOSAndAttentionWeiXin
