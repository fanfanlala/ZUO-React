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
          <div className="everyComment-img"><img src={item.author.avatar} alt="" /></div>
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