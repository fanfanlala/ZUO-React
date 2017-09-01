import React, {Component} from 'react'
import HomeHead from '../../component/Home_head'
import HomeFoot from '../../component/Home_footer'
import StationeryRight from '../../component/Stationery_right'
import '../../assets/styles/Home.styl'
import '../../assets/styles/HomeBody.styl'
import '../../assets/styles/foot+downloadApp.styl'
import '../../assets/styles/HomeContent.styl'
import '../../assets/styles/Homeright.styl'
import '../../assets/styles/stationery.styl'

class Stationery extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      hotcommentArr: [],
      comments: []
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
          data: response.topic
        })
      })
    fetch('/api/api/topic/575bb18e6be3ff0069503da2/hot_comments', {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          hotcommentArr: response.hot_comments
        })
      })
    fetch('/api/api/topic/575bb18e6be3ff0069503da2/comments', {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          comments: response.comments
        })
      })
  }
  componentDidUpdate () {
    var topicContent = document.getElementsByClassName('topic-content')[0]
    topicContent.innerHTML = this.state.data.content
    var commentsArr = document.getElementsByClassName('topic-comment-text')
    for (let i = 0; i < commentsArr.length; i++) {
      commentsArr[i].innerHTML = this.state.hotcommentArr[i].text
    }
    var comments = document.getElementsByClassName('topic-comment-text1')
    for (let i = 0; i < comments.length; i++) {
      comments[i].innerHTML = this.state.comments[i].text
    }
    var commentsChild = document.getElementsByClassName('topic-comment-text-child')
    for (let i = 0; i < commentsChild.length; i++) {
      commentsChild[i].innerHTML = commentsChild[i].innerText
    }
  }
  addMoreComments = (ev) => {
    let createAt = ''
    for (let i = 0; i < this.state.comments.length; i++) {
      createAt = this.state.comments[i].createdAt
    }
    fetch('/api/api/topic/575bb18e6be3ff0069503da2/comments?after=' + createAt, {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          comments: this.state.comments.concat(response.comments)
        })
      })
  }
  render () {
    var hotCommentsArr = []
    for (let i = 0; i < this.state.hotcommentArr.length; i++) {
      if (this.state.hotcommentArr[i].attach_imgs.length >= 0) {
        var imgUrl = this.state.hotcommentArr[i].attach_imgs[0]
      }
      hotCommentsArr.push(
        <div className='topic-comment-item'>
          <div className='item-inner'>
            <div className='topic-comment-top'>
              <div className='author-avatar'><img src={this.state.hotcommentArr[i].author.avatar} /></div>
              <div className='right-info'>
                <div className='author-other'>{this.state.hotcommentArr[i].author.username}</div>
                <div className='comment-time'>{this.state.hotcommentArr[i].timeAgo}</div>
              </div>
            </div>
            <div className='topic-comment-body'>
              <div className='body-inner'>
                <div className='topic-comment-content'>
                  <div className='topic-comment-text' />
                  <div className='topic-attach-img-list'>
                    <div className='img-item'><img src={imgUrl} /></div>
                  </div>
                </div>
                <div className='topic-comment-actions'>
                  <div>回复</div>
                  <div><img src={require('../../assets/images/点赞 (1).png')} />{this.state.hotcommentArr[i].upvote_count}</div>
                  <div><img src={require('../../assets/images/点赞.png')} />{this.state.hotcommentArr[i].downvote_count}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
    var comments = []
    var replayComments = []
    for (let i = 0; i < this.state.comments.length; i++) {
      replayComments[i] = this.state.comments[i].child_nodes.length > 0 ? this.state.comments[i].child_nodes : []
      if (replayComments[i].length !== 0) {
        replayComments[i] = <div className='topic-comments-list-child'>
          <div className='topic-comment-item'>
            <div className='item-inner-child'>
              <div className='topic-comment-top'>
                <div className='author-avatar author-avatar-child'>
                  <img src={this.state.comments[i].author.avatar} />
                </div>
                <div className='right-info'>
                  <div className='author-other'>{this.state.comments[i].author.username}</div>
                  <div className='comment-time'>{this.state.comments[i].author.timeAgo}</div>
                </div>
              </div>
              <div className='topic-comment-body-child'>
                <div className='body-inner'>
                  <div className='topic-comment-content'>
                    <div className='topic-comment-text-child'>{this.state.comments[i].child_nodes['0'].text}</div>
                  </div>
                  <div className='topic-comment-actions'>
                    <div>回复</div>
                    <div><img src={require('../../assets/images/点赞 (1).png')} />{this.state.comments[i].child_nodes['0'].upvote_count}</div>
                    <div><img src={require('../../assets/images/点赞.png')} />{this.state.comments[i].child_nodes['0'].downvote_count}</div>
                  </div>
                </div>
                <div className='load-more-child-comments' >加载更多评论...</div>
              </div>
            </div>
          </div>
        </div>
      }
      comments.push(
        <div className='topic-comment-item'>
          <div className='item-inner'>
            <div className='topic-comment-top'>
              <div className='author-avatar'><img src={this.state.comments[i].author.avatar} /></div>
              <div className='right-info'>
                <div className='author-other'>{this.state.comments[i].author.username}</div>
                <div className='comment-time'>{this.state.comments[i].timeAgo}</div>
              </div>
            </div>
            <div className='topic-comment-body'>
              <div className='body-inner'>
                <div className='topic-comment-content'>
                  <div className='topic-comment-text1' />
                  <div className='topic-comment-actions'>
                    <div>回复</div>
                    <div><img src={require('../../assets/images/点赞 (1).png')} />{this.state.comments[i].upvote_count}</div>
                    <div><img src={require('../../assets/images/点赞.png')} />{this.state.comments[i].downvote_count}</div>
                  </div>
                  {replayComments[i]}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div>
        <HomeHead />
        <div style={{marginTop: '70px'}}>
          <div className='topic-page'>
            <div className='topic_left'>
              <div className='topic-detail-info'>
                <div className='tip'>
                  <div className='tip-title'>话题</div>
                  <div className='tip-divider' />
                </div>
                <div className='topic-title'>重新认识文具</div>
                <div className='topic-other-info'>
                  <span>发布于{this.state.data.timeAgo}</span>
                  <span className='vertical-line'>|</span>
                  <span>已有{this.state.data.collect_count}人收藏</span>
                </div>
                <div className='topic-cover'><img src={this.state.data.cover} /></div>
                <div className='topic-content' />
                <div className='star-action'>
                  <div className='star-text'><img src={require('../../assets/images/星.png')} />收藏该话题</div>
                </div>
              </div>
              <div className='topic-detail-comments'>
                <header className='comment-header'>{this.state.data.comment_count}个评论</header>
                <div className='topic-comments-list'>{hotCommentsArr}</div>
                <div>{comments}</div>
                <div className='load-more-topic-comments'><div onClick={this.addMoreComments}>加载更多评论...</div></div>
                <div className='need-login-tip'>
                  <div><img src={require('../../assets/images/登录.png')} />登陆后可参与讨论</div>
                </div>
              </div>
            </div>
            <div className='topic_right'><StationeryRight /></div>
            <div style={{clear: 'both'}} />
          </div>
        </div>
        <HomeFoot />
      </div>
    )
  }
}
export default Stationery
