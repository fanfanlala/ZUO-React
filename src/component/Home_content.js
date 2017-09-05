import React, { Component } from 'react'
import HomeContentClickLittlePage from './HomeContentClickLittlePage'
var axios = require('axios')

class HomeContent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      flag: true,
      type: '',
      createAt: '',
      projectId: '',
      projectJson: ''
    }
  }

  componentDidMount () {
    fetch('/api/api/posts?design=&scene=全部', {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          data: response.posts
        })
      })
    document.body.onscroll = this.scroll
  }
  scroll = () => {
    if (document.body.scrollTop + document.documentElement.clientHeight === document.body.scrollHeight) {
      for (let i = 0; i < this.state.data.length; i++) {
        this.setState({
          createAt: this.state.data[i].createdAt
        })
      }
      fetch('/api/api/posts?design=&scene=' + this.state.type + '&after=' + this.state.createAt, {
        method: 'GET'
      })
        .then(response => {
          return response.json()
        })
        .then(response => {
          if (response.has_next === true) {
            this.setState({
              data: this.state.data.concat(response.posts)
            })
          } else {
            return false
          }
        })
    }
  }
  // 评论框
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
    rightDiv.onclick = this.addComment
    commentActions.appendChild(rightDiv)
    ev.target.style.display = 'none'
    leftDiv.onclick = function () {
      input.style.display = 'block'
      commentActions.style.display = 'none'
      textArea.style.display = 'none'
    }
  }

  addComment = (ev) => {
    console.log(ev.target.parentNode.previousSibling.value)
    var comment = ev.target.parentNode.parentNode.parentNode.parentNode.previousSibling.childNodes[2].id
    var url = '/api/api/post/' + comment + '/add_comment'
    axios.defaults.headers.post['Content-Type'] = 'application/json'
    axios.post(url, JSON.stringify({
      isReplay: false,
      text: ev.target.parentNode.previousSibling.value
    })).then(function (response) {
      console.log(response.data)
      // console.log(response.status)
      // console.log(response.statusText)
      // console.log(response.headers)
      // console.log(response.config)
    })
    // ======分割线======
    // ev.target.style.display = 'block'
    // document.createElement('div').style.display = 'none'
    // document.createElement('textarea').style.display = 'none'
  }

  clickMore = () => {
    this.setState({
      flag: !this.state.flag
    })
    if (this.state.flag) {
      var downdrop = document.getElementsByClassName('dropdown-menu-wrap')[0]
      downdrop.style.display = 'block'
    } else {
      downdrop = document.getElementsByClassName('dropdown-menu-wrap')[0]
      downdrop.style.display = 'none'
    }
  }

  clickAll = () => {
    var chooseName = document.getElementById('chooseName')
    chooseName.innerHTML = '全部'
    fetch('/api/api/posts?design=&scene=全部', {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          data: response.posts
        })
      })
  }
  clickRiYong = () => {
    var chooseName = document.getElementById('chooseName')
    chooseName.innerHTML = '日用'
    fetch('/api/api/posts?design=&scene=日用', {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          data: response.posts
        })
      })
  }
  clickPublic = () => {
    var chooseName = document.getElementById('chooseName')
    chooseName.innerHTML = '公共'
    fetch('/api/api/posts?design=&scene=公共', {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          data: response.posts
        })
      })
  }
  clickGuanAi = () => {
    var chooseName = document.getElementById('chooseName')
    chooseName.innerHTML = '关爱'
    fetch('/api/api/posts?design=&scene=关爱', {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          data: response.posts
        })
      })
  }
  clickJiaJu = () => {
    var chooseName = document.getElementById('chooseName')
    chooseName.innerHTML = '家居'
    fetch('/api/api/posts?design=&scene=家居', {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          data: response.posts
        })
      })
  }
  clickShiShang = () => {
    var chooseName = document.getElementById('chooseName')
    chooseName.innerHTML = '时尚'
    fetch('/api/api/posts?design=&scene=时尚', {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          data: response.posts
        })
      })
  }
  clickFood = () => {
    var chooseName = document.getElementById('chooseName')
    chooseName.innerHTML = '美食'
    fetch('/api/api/posts?design=&scene=美食', {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          data: response.posts
        })
      })
  }
  clickShuMa = () => {
    var chooseName = document.getElementById('chooseName')
    chooseName.innerHTML = '数码'
    fetch('/api/api/posts?design=&scene=数码', {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          data: response.posts
        })
      })
  }
  clickShiJue = () => {
    var chooseName = document.getElementById('chooseName')
    chooseName.innerHTML = '视觉'
    fetch('/api/api/posts?design=&scene=视觉', {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          data: response.posts
        })
      })
  }
  clickKongJian = () => {
    var chooseName = document.getElementById('chooseName')
    chooseName.innerHTML = '空间'
    fetch('/api/api/posts?design=&scene=空间', {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          data: response.posts
        })
      })
  }

  clickLittlePage = (ev) => {
    this.setState({
      projectId: ev.target.id
    })
    document.getElementsByClassName('zuo-detail-modal')[0].style.display = 'block'
  }

  render () {
    var arr = []
    var tagArr = []
    var commentArr = []
    for (let i = 0; i < this.state.data.length; i++) {
      tagArr[i] = []
      commentArr[i] = []
      var tagsArr = this.state.data[i].tags || []
      for (let j = 0; j < tagsArr.length; j++) {
        if (this.state.data[i].tags.length === 0) {
          return
        } else {
          tagArr[i].push(
            <a>
              <i className='icon-tag' style={{backgroundColor: 'gray'}} />
              <span className='icon-tag-name'>{this.state.data[i]['tags'][j]}</span>
            </a>
          )
        }
      }
      if (this.state.data[i].comments === 0) {
        return
      } else {
        for (let k = 0; k < this.state.data[i].comments.length; k++) {
          commentArr[i].push(
            <li className='comment-list'>
              <a href='#'>{this.state.data[i].comments[k].author.username}</a>
                -<span>{this.state.data[i].comments[k].text}</span>
              <div className='comment-actions'>
                <div className='time'>{this.state.data[i].comments[k].timeAgo}</div>
                <div className='comment-like'>
                  <div className='liketext'>点亮 {this.state.data[i].comments[k].likeNumber}
                    <img src={require('../assets/images/灯 (1).png')} />
                  </div>
                  <div className='replayComment'>回复</div>
                </div>
              </div>
            </li>
          )
        }
      }
      arr.push(
        <div className='zuo-feed'>
          <div className='zuo-feed_top'>
            <div className='zuo-feed-top-inner'>
              <div className='owner-info'>
                <div className='owner-avatar'><img src={this.state.data[i]['owner'].avatar} /></div>
                <div className='owner-name'>
                  <a href='#'>{this.state.data[i]['owner'].username}</a>
                </div>
              </div>
              <div className='feed-right-actions'>
                <span className='feed-right-actions-icon'><img src={require('../assets/images/选中-实心-圆形.png')} /></span>
                <span className='feed-like-count'>{this.state.data[i]['likeCount']}个赞同</span>
                <span className='feed-share-toggle'><img src={require('../assets/images/转发.png')} /></span>
                <span className='icon-iconhomemore' onClick={this.iconmoreClick}>
                  <img src={require('../assets/images/更多2.png')} />
                  <div className='dropdown-menu'>
                    <div className='cuser-dropdown-item'>
                      <div className='report-link' onClick={this.report}>举报
                        <div className='dropdown-arrow' />
                      </div>
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div className='zuo-feed_body'>
            <div className='feed-body'>
              <a className='feed-halo' style={{
                top: this.state.data[i].haloCenterRatio.height_ratio * 78 + '%',
                left: this.state.data[i].haloCenterRatio.width_ratio * 100 + '%'
              }}>
                <div className='animated-pop' />
                <div className='halo-text-box'>
                  <span className='halo-text-big'>赞同</span><br />
                  <span className='halo-text-small'>这个态度</span>
                </div>
              </a>
              <img className='feed-body-img' src={this.state.data[i]['postImage'].url} />
              <div className='feed-meng' id={this.state.data[i].objectId} onClick={this.clickLittlePage} />
            </div>
            <div className='feed-content'>
              <div className='feed-text'>{this.state.data[i]['postDescription']}</div>
              <div className='feed-tags'>
                <a>
                  <i className='icon-tag' style={{backgroundColor: this.state.data[i]['sceneTag'].color}} />
                  <span className='icon-tag-name'>{this.state.data[i]['sceneTag'].name}</span>
                  {tagArr[i]}
                </a>
              </div>
              <div className='feed-info'>
                <i className='feed-info-icon-message'><img src={require('../assets/images/信息.png')} /></i>
                <span>{this.state.data[i].commentedCount}条评论</span>
                <ul className='comment-list'>
                  {commentArr[i]}
                </ul>
              </div>
              <div className='add-comment'>
                <div className='add-body'>
                  <input type='text' placeholder='写下你的评论...' className='new-comment' onFocus={this.comment} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div>
        <div className='content_wrap'>
          <div className='feed_list_bar'>
            <div className='feed_list_bar_left' onClick={this.clickMore}>
              <span>
                <i className='feed_all_logo'><img src={require('../assets/images/全部.png')} /></i>
                <span id='chooseName'>全部</span>
              </span>
              <i className='feed_down_logo'><img src={require('../assets/images/下.png')} /></i>
              <ul className='dropdown-menu-wrap'>
                <li className='dropdown-menu-jiao' />
                <li className='scene-menu-item'><div className='change-secne-link' onClick={this.clickAll}><span><img className='downloadALl' src={require('../assets/images/全部.png')} /></span>全部</div></li>
                <li className='scene-menu-item'><div className='change-secne-link' onClick={this.clickRiYong}><div className='color1' />日用</div></li>
                <li className='scene-menu-item'><div className='change-secne-link' onClick={this.clickPublic}><div className='color2' />公共</div></li>
                <li className='scene-menu-item'><div className='change-secne-link' onClick={this.clickGuanAi}><div className='color3' />关爱</div></li>
                <li className='scene-menu-item'><div className='change-secne-link' onClick={this.clickJiaJu}><div className='color4' />家居</div></li>
                <li className='scene-menu-item'><div className='change-secne-link' onClick={this.clickShiShang}><div className='color5' />时尚</div></li>
                <li className='scene-menu-item'><div className='change-secne-link' onClick={this.clickFood}><div className='color6' />美食</div></li>
                <li className='scene-menu-item'><div className='change-secne-link' onClick={this.clickShuMa}><div className='color7' />数码</div></li>
                <li className='scene-menu-item'><div className='change-secne-link' onClick={this.clickShiJue}><div className='color8' />视觉</div></li>
                <li className='scene-menu-item'><div className='change-secne-link' onClick={this.clickKongJian}><div className='color9' />空间</div></li>
              </ul>
            </div>
            <div className='feed_list_bar_right'>
              <div className='feed_right_good'>
                <span><i className='feed_right_good_logo' /></span>
                <span className='feed_right_font'>好设计</span>
              </div>
              <div className='feed_right_bad'>
                <span><i className='feed_right_bad_logo' /></span>
                <span className='feed_right_font'>坏设计</span>
              </div>
            </div>
            <div style={{ clear: 'both' }} />
          </div>
          <div className='content_wrap_content'>
            <HomeContentClickLittlePage projectId={this.state.projectId} />
            {arr}
          </div>
        </div>
      </div>
    )
  }
}

export default HomeContent
