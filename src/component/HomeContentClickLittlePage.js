import React, {Component} from 'react'
import '../assets/styles/HomeContentCLickLittlePage.styl'
class HomeContentClickLittlePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: {},
      owner: {},
      postImage: {},
      haloCenterRatio: {},
      user1: {},
      user2: {},
      user3: {},
      user4: {},
      sceneTag: {},
      comments: []
    }
  }
  static propTypes = {
    projectId: React.PropTypes.string
  }
  componentWillReceiveProps () {
    this.setState({
      data: {}
    }, () => {
      fetch('/api/api/post/' + this.props.projectId, {
        method: 'GET'
      })
        .then(response => {
          return response.json()
        })
        .then(response => {
          this.setState({
            data: response.post,
            owner: response.post.owner,
            postImage: response.post.postImage,
            haloCenterRatio: response.post.haloCenterRatio,
            user1: response.post.likes[0],
            user2: response.post.likes[1],
            user3: response.post.likes[2],
            user4: response.post.likes[3],
            sceneTag: response.post.sceneTag,
            comments: response.post.comments
          })
        })
    })
  }
  clickClose = () => {
    var oWrap = document.getElementsByClassName('zuo-detail-modal')[0]
    oWrap.style.display = 'none'
  }

  comment = (ev) => {
    var input = ev.target
    var textArea = document.createElement('textarea')
    textArea.placeholder = '写下你的评论...'
    textArea.className = 'comment-textarea'
    ev.target.parentNode.appendChild(textArea)
    var commentActions = document.createElement('div')
    commentActions.className = 'add_comment_actions'
    ev.target.parentNode.appendChild(commentActions)
    var leftDiv = document.createElement('div')
    leftDiv.className = 'cancel-new-comment'
    commentActions.appendChild(leftDiv)
    leftDiv.innerHTML = '取消'
    var rightDiv = document.createElement('div')
    rightDiv.className = 'post-new-comment'
    rightDiv.innerHTML = '评论'
    commentActions.appendChild(rightDiv)
    ev.target.style.display = 'none'
    leftDiv.onclick = function () {
      input.style.display = 'block'
      commentActions.style.display = 'none'
      textArea.style.display = 'none'
    }
  }
  render () {
    var commentsArr = []
    for (let i = 0; i < this.state.comments.length; i++) {
      commentsArr.push(
        <div className='comment-item'>
          <div>{this.state.comments[i].author.username}</div>-
          <div>{this.state.comments[i].text}</div>
          <div className='comment-actions-1'>
            <div className='time-1'>{this.state.comments[i].timeAgo}</div>
            <div className='like-number'>点亮 {this.state.comments[i].likeNumber}<img src={require('../assets/images/灯 (1).png')} /></div>
            <div className='reply-link'>回复</div>
          </div>
        </div>
      )
    }
    return (
      <div>
        <div className='zuo-detail-modal' >
          <div className='zuo-detail-body'>
            <div className='icon-iconhomeclose' onClick={this.clickClose}><img src={require('../assets/images/false.png')} /></div>
            <div className='zuo-detail-content'>
              <div className='zuo-detail-wrap'>
                <div className='zuo-detail-container'>
                  <div className='zuo-detail-overlay' />
                  <div className='detail-left-part'>
                    <div className='feed-top'>
                      <div className='top-inner'>
                        <div className='owner-info'>
                          <div className='owner-avatar'>
                            <img src={this.state.owner.avatar} />
                            <div className='owner-name'>
                              <a>{this.state.owner.username}</a>
                              <div className='time'>发布于{this.state.data.timeAgo}</div>
                            </div>
                          </div>
                          <div className='feed-right-actions'>
                            <div className='share-toggle'><img src={require('../assets/images/转发.png')} /></div>
                            <div className='dropdown'><img src={require('../assets/images/更多2.png')} /></div>
                          </div>
                        </div>
                        <div className='feed-image'>
                          <div className='feed-meng' />
                          <img src={this.state.postImage.url} />
                          <a className='feed-halo' style={{
                            top: this.state.haloCenterRatio.height_ratio * 78 + '%',
                            left: this.state.haloCenterRatio.width_ratio * 100 + '%'
                          }}>
                            <div className='animated-pop' />
                            <div className='halo-text-box'>
                              <span className='halo-text-big'>赞同</span><br />
                              <span className='halo-text-small'>这个态度</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='detail-right-part'>
                    <div className='detail-like'>
                      <div className='like-text-info'>
                        <div className='is-like-tip-wrap'>
                          <div className='is-like-tip'><img src={require('../assets/images/选中-实心-圆形.png')} /></div>
                          <div className='like-tip'>赞同这个态度</div>
                          <div className='like-count-right'>{this.state.data.likeCount}个赞同</div>
                        </div>
                      </div>
                      <div className='like-users-container'>
                        <div className='like-users-wrap'>
                          <div className='arrow-top' />
                          <div className='like-users-wrap-avatar'><img src={this.state.user1.avatar} /></div>
                          <div className='like-users-wrap-avatar'><img src={this.state.user2.avatar} /></div>
                          <div className='like-users-wrap-avatar'><img src={this.state.user3.avatar} /></div>
                          <div className='like-users-wrap-avatar'><img src={this.state.user4.avatar} /></div>
                          <div className='like-users-wrap-addMore'><img src={require('../assets/images/更多2.png')} /></div>
                        </div>
                      </div>
                    </div>
                    <div className='detail-info'>
                      <div className='detail-middle'>
                        <div className='feed-text-1'>{this.state.data.postDescription}</div>
                        <div className='feed-tags-big'><div className='icon-tag-click' style={{backgroundColor: this.state.sceneTag.color}} /><span className='name'>{this.state.sceneTag.name}</span></div>
                      </div>
                      <div className='comment-info'><img src={require('../assets/images/信息.png')} /><div className='comment-count'>{this.state.data.commentedCount}条评论</div></div>
                      <div className='comment-list'>{commentsArr}</div>
                    </div>
                    <div className='add-comment-1'>
                      <div className='add-body-1'>
                        <div className='input-wrap-1'>
                          <input onClick={this.comment} type='text' placeholder='写下你的评论' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{clear: 'both'}} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default HomeContentClickLittlePage
