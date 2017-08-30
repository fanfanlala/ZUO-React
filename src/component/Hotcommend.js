/**
 * Created by dllo on 17/8/29.
 */
import React, {Component} from 'react'
class Hotcommend extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userTitle: [],
      postsContent: []
    }
  }
  componentDidMount () {
    // 推荐关注二级页面的title接口获取
    let commentPath = window.location.href.split('=')[1]
    fetch('/api/api//user/' + commentPath, {
      method: 'Get'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          userTitle: response.user
        })
      })
    // 推荐关注二级页面的内容接口获取
    fetch('/api/api/post_by_user?zuoId=' + commentPath, {
      method: 'Get'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          postsContent: response.posts
        })
      })
    document.body.onscroll = this.scroll
  }
  scroll = () => {
    console.log(document.body.scrollTop)
    if (document.body.scrollTop >= 1267) {
      console.log('到底了')
      console.log(this.state.postsContent)
    }
  }
  render () {
    // 推荐关注二级页面的title数据解析
    let userArr = [
      <div>
        <div className="commendUser-wrap">
          <div className="commendUser" style={{backgroundImage: 'url(' + this.state.userTitle.cover + ')'}}>
            <div className="commendUser-mark" />
          </div>
          <div className="commendUser-name hotTagsContainer clearFloat">
            <div className="commendUser-nameImg left clearFloat">
              <div className="commendUser-nameImg-mark left">
                <img src={this.state.userTitle.avatar} width={130} height={130} />
              </div>
              <div className="left commendUser-information">
                <span>{this.state.userTitle.username}</span>
                <a href="#">关注</a>
                <div>已获得{this.state.userTitle.allLikesCount}个赞同</div>
              </div>
            </div>
            <div className="commendUser-name-right right">
              <div>ZUO指数</div>
              <div className="commendUser-name-line" />
              <div className="commendUser-name-count">{this.state.userTitle.zuoIndex}</div>
            </div>
          </div>
        </div>
        <div className="commendTags hotTagsContainer">
          <a href="#">发布&nbsp;&nbsp;{this.state.userTitle.all_createposts_count}</a>
          <a href="#">赞同&nbsp;&nbsp;{this.state.userTitle.all_likeposts_count}</a>
          <a href="#">评论&nbsp;&nbsp;{this.state.userTitle.all_comments_count}</a>
          <a href="#">话题&nbsp;&nbsp;{this.state.userTitle.all_topic_count}</a>
          <a href="#">关注&nbsp;&nbsp;{this.state.userTitle.all_followees_count}</a>
          <a href="#">粉丝&nbsp;&nbsp;{this.state.userTitle.all_followers_count}</a>
        </div>
      </div>
    ]
    // 推荐关注二级页面的内容的数据解析
    let contentArr = this.state.postsContent.map(function (item, index) {
      var array = item.tags || []
      var tagsArr = array.length !== 0 ? item.tags[0] : ''
      return (
        <div className='hotZuo commendContent'>
          <div className='hotZuo-Img'>
            <img src={item.postImage.url} width={219} height={219} />
            <div className='hotZuo-mark commendContent-mark' />
          </div>
          <div className='hotZuo-tags'>
            <div style={{background: item.sceneTag.color}} />
            <a href='#'>{item.sceneTag.name}</a>
            <div />
            <a href='#'>{tagsArr}</a>
          </div>
          <div className='hotZuo-line' />
          <div className='hotZuo-icon clearFloat'>
            <a href='#' className='hotZuo-icon-round left'>
              <img src={require('../assets/images/选中-实心-圆形.png')} width={15} height={15} />
            </a>
            <a href='#' className='left'>{item.likeCount}</a>
            <a href='' className='left'>
              <img src={require('../assets/images/信息.png')} width={18} height={18} />
            </a>
            <a href='#' className='left'>{item.commentedCount}</a>
            <a href='#' className='right'>
              <img src={require('../assets/images/转发.png')} alt='' width={18} height={18} />
            </a>
          </div>
        </div>
      )
    })
    return (
      <div>
        <div className="hotTagsContainer">
          {userArr}
          {contentArr}
        </div>
      </div>
    )
  }
}
export default Hotcommend