/**
 * Created by dllo on 17/9/4.
 */
import React, {Component} from 'react'
import '../assets/styles/Homeright.styl'
class ClassFollows extends Component {
  constructor (props) {
    super(props)
    this.state = {
      follow: []
    }
  }
  static propTypes = {
    classFollower: React.PropTypes.object
  }
  componentWillReceiveProps (nextProps) {
    this.setState({
      follow: nextProps.classFollower
    })
  }
  render () {
    let follow = this.state.follow
    if (follow.length > 0) {
      var followArr = follow.map(function (item, index) {
        return (
          <div className="classFollow">
            <img src={item.cover} width={219} height={90} alt="" />
            <div className="classFollow-usename"><a href="">{item.username}</a></div>
            <div className="classFollow-userImg">
              <img src={item.avatar} width={70} height={70} alt="" />
            </div>
            <div className="classFollow-bigLine" />
            <div className="clearFloat classFollow-bottom">
              <div className="left classFollow-count">
                <div>{item.all_createposts_count}</div>
                <div>发布</div>
              </div>
              <div className="classFollow-smallLine left" />
              <div className="left classFollow-count">
                <div>{item.allLikesCount}</div>
                <div>被赞</div>
              </div>
              <div className="right classFollow-concat">
                <a href="">关注</a>
              </div>
            </div>
          </div>
        )
      })
    }
    return (
      <div id="classFollows" style={{display: 'none'}}>
        {followArr}
      </div>
    )
  }
}
export default ClassFollows