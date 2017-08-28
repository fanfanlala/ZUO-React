import React, {Component} from 'react'
class HomeContent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount () {
    fetch('api/api/posts?design=&scene=全部', {
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
  render () {
    var arr = []
    var tagArr = []
    for (let i = 0; i < this.state.data.length; i++) {
      tagArr[i] = []
      for (let j = 0; j < this.state.data[i].tags.length; j++) {
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
      arr.push(
        <div className='zuo-feed'>
          <a className='feed-halo' style={{top: this.state.data[i].haloCenterRatio.height_ratio * 78 + '%', left: this.state.data[i].haloCenterRatio.width_ratio * 100 + '%'}}>
            <div className='animated-pop' />
            <div className='halo-text-box'>
              <span className='halo-text-big'>赞同</span><br />
              <span className='halo-text-small'>这个态度</span>
            </div>
          </a>
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
                <span className='icon-iconhomemore'><img src={require('../assets/images/更多2.png')} /></span>
              </div>
            </div>
          </div>
          <div className='zuo-feed_body'>
            <div className='feed-body'><img className='feed-body-img' src={this.state.data[i]['postImage'].url} /><div className='feed-meng' /></div>
            <div className='feed-content'>
              <div className='feed-text'>{this.state.data[i]['postDescription']}</div>
              <div className='feed-tags'>
                <a>
                  <i className='icon-tag' style={{backgroundColor: this.state.data[i]['sceneTag'].color}} />
                  <span className='icon-tag-name'>{this.state.data[i]['sceneTag'].name}</span>
                  { tagArr[i] }
                </a>
              </div>
              <div className='feed-info'>
                <i className='feed-info-icon-message'><img src={require('../assets/images/信息.png')} /></i>
                <span>{this.state.data[i].commentedCount}条评论</span>
                <ul className='comment-list' />
              </div>
              <div className='add-comment'>
                <div className='add-body'>
                  <input type='text' placeholder='写下你的评论...' className='new-comment' />
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
            <div className='feed_list_bar_left'>
              <span>
                <i className='feed_all_logo'><img src={require('../assets/images/全部.png')} /></i>
                <span>全部</span>
              </span>
              <i className='feed_down_logo'><img src={require('../assets/images/下.png')} /></i>
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
          </div>
          <div className='content_wrap_content'>
            { arr }
          </div>
        </div>
      </div>
    )
  }
}
export default HomeContent
