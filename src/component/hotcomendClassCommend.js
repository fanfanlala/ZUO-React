/**
 * Created by dllo on 17/9/4.
 */
import React, {Component} from 'react'
import '../assets/styles/Homeright.styl'
import HomeLittlePage from '../component/HomeContentClickLittlePage'
class ClassCommend extends Component {
  constructor (props) {
    super(props)
    this.state = {
      createID: ''
    }
  }
  static propTypes = {
    classCommend: React.PropTypes.array
  }
  componentDidUpdate () {
    var content = document.getElementsByClassName('classCommend-timeWord')
    for (var i = 0; i < content.length; i++) {
      let contentText = content[i].innerText
      content[i].innerHTML = contentText
    }
  }
  tagClicks = (e) => {
    console.log(e.target.id)
    this.setState({
      createID: e.target.id
    })
    document.getElementsByClassName('zuo-detail-modal')[0].style.display = 'block'
  }
  render() {
    let classCommendArr = this.props.classCommend.map((item, index) => {
      return (
        <div className="classCommend-block clearFloat">
          <a className="classCommend-Img left">
            <img src={item.attach_post.postImage.url} width={140} onClick={this.tagClicks} id={item.objectId} />
          </a>
          <div className="left">
            <div className="classCommend-time">
              <span className="classCommend-timeIcon">「</span>
              <span className="classCommend-timeWord">{item.text}</span>
              <span className="classCommend-timeIcon">」</span>
            </div>
            <div className="classCommend-light clearFloat">
              <span className="classCommend-light-month left">{item.timeAgo}</span>
              <span className="right">点亮0</span>
              <img className="right" src={require('../assets/images/灯 (1).png')} alt="" width={13} height={13} />
            </div>
          </div>
        </div>
      )
    })
    return (
      <div id="classCommend" className="hotTagsContainer clearFloat" style={{display: 'none'}}>
        {classCommendArr}
        <HomeLittlePage projectId={this.state.createID} />
      </div>
    )
  }
}
export default ClassCommend