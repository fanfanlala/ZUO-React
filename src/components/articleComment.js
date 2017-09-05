import React, { Component } from 'react'
class ArticleComment extends Component {
  constructor (props) {
    super(props)
    this.state = {
      commentsArr: []
    }
  }
  static propTypes = {
    comments: React.PropTypes.object
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      commentsArr: nextProps.comments
    })
  }
  render () {
    const commentsArray = this.state.commentsArr.map(function (item) {
      return (
        <div className="everyComment">
          <div className="everyComment-img">
            <img src={(item.author.avatar === '/static/images/avatar.jpg') ? require('../assets/images/avatar.jpg') : item.author.avatar} />
            <img src={(item.author.userRole === 'professional') ? require('../assets/images/P.png') : require('../assets/images/C.png')} alt="" style={(item.author.userRole === 'professional') ? {'left': '3'} : {'right': '3'}} />
          </div>
          <div className="everyComment-content">
            <div><a href="#">{item.author.username}</a></div>
            <div>{item.text}</div>
            <div>{item.timeAgo}</div>
          </div>
        </div>
      )
    })
    return (
      <div>
        {commentsArray}
      </div>
    )
  }
}
export default ArticleComment