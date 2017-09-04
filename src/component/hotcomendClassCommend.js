/**
 * Created by dllo on 17/9/4.
 */
import React, {Component} from 'react'
import '../assets/styles/Homeright.styl'
class ClassCommend extends Component {
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
  render() {
    let classCommendArr = this.props.classCommend.map(function (item, index) {
      return (
        <div className="classCommend-block clearFloat">
          <a href="" className="classCommend-Img left">
            <img src={item.attach_post.postImage.url} width={140} alt="" />
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
      </div>
    )
  }
}
export default ClassCommend