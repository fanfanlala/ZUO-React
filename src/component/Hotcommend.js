import React, {Component} from 'react'
import HomeHead from '../component/Home_head'
import HomeFooter from '../component/Home_footer'
import '../assets/styles/Home.styl'
import '../assets/styles/foot+downloadApp.styl'
import ClassComment from '../component/hotcomendClassCommend'
import ClassTopic from '../component/hotcommendClassTopic'
class Hotcommend extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userTitle: [],
      postsContent: [],
      classTags: '',
      classCommend: [],
      classTopicCollect: [],
      classTopicTall: [],
      classFollower: []
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
    if (document.body.scrollTop > 500) {
      let returnTop = document.getElementById('returnTop')
      returnTop.style.opacity = '0.4'
    } else {
      let returnTop = document.getElementById('returnTop')
      returnTop.style.opacity = '0'
    }
    if (document.body.scrollTop + document.documentElement.clientHeight === document.body.scrollHeight && document.body.scrollTop > 1000) {
      let commentPaths = window.location.href.split('=')[1]
      const newContentArr = this.state.postsContent
      const newPath = newContentArr[newContentArr.length - 1].createdAt
      fetch('/api/api/post_by_user?after=' + newPath + '&zuoId=' + commentPaths, {
        method: 'Get'
      })
        .then(response => {
          return response.json()
        })
        .then(response => {
          if (!response.has_text) {
            this.setState({
              postsContent: this.state.postsContent.concat(response.posts)
            })
          }
        })
    }
  }
  // 分类的点击事件
  commendClass = (e) => {
    let commendTags = document.getElementsByClassName('commentTags')
    for (var i = 0; i < commendTags.length; i++) {
      commendTags[i].style.color = '#a0a1a1'
      commendTags[i].style.cursor = 'pointer'
    }
    let reg = /[\u4e00-\u9fa5]+/g
    let classTags = e.target.innerHTML.match(reg)[0]
    e.target.style.color = 'black'
    let commentPathClass = window.location.href.split('=')[1]
    switch (classTags) {
      case '赞同':
        fetch('/api/api/post_by_user/likes?zuoId=' + commentPathClass, {
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
        break
      case '评论':
        fetch('/api/api/comment_by_user?zuoId=' + commentPathClass, {
          method: 'Get'
        })
          .then(response => {
            return response.json()
          })
          .then(response => {
            this.setState({
              classCommend: response.comments
            })
          })
        document.getElementById('commendContent').style.display = 'none'
        document.getElementById('classCommend').style.display = 'block'
        break
      case '话题':
        fetch('/api/api/topic_by_user?zuoId=' + commentPathClass, {
          method: 'Get'
        })
          .then(response => {
            return response.json()
          })
          .then(response => {
            this.setState({
              classTopicCollect: response.topics
            })
          })
        fetch('/api/api/topic_comments_by_user?zuoId=' + commentPathClass, {
          method: 'Get'
        })
          .then(response => {
            return response.json()
          })
          .then(response => {
            this.setState({
              classTopicTall: response.comments
            })
          })
        document.getElementById('commendContent').style.display = 'none'
        document.getElementById('classTopic').style.display = 'block'
        break
      case '关注':
        this.setState({
          classTags: 'followee_by_user'
        })
        break
      case '粉丝':
        this.setState({
          classTags: 'follower_by_user'
        })
        break
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
          <a href="#" >发布&nbsp;&nbsp;{this.state.userTitle.all_createposts_count}</a>
          <a className="commentTags" onClick={this.commendClass} >赞同&nbsp;&nbsp;{this.state.userTitle.all_likeposts_count}</a>
          <a className="commentTags" onClick={this.commendClass} >评论&nbsp;&nbsp;{this.state.userTitle.all_comments_count}</a>
          <a className="commentTags" onClick={this.commendClass} >话题&nbsp;&nbsp;{this.state.userTitle.collect_topic_count}</a>
          <a className="commentTags" onClick={this.commendClass} >关注&nbsp;&nbsp;{this.state.userTitle.all_followees_count}</a>
          <a className="commentTags" onClick={this.commendClass} >粉丝&nbsp;&nbsp;{this.state.userTitle.all_followers_count}</a>
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
        <HomeHead />
        {userArr}
        <div className="hotTagsContainer">
          <div id="commendContent">
            {contentArr}
          </div>
          <ClassComment classCommend={this.state.classCommend} />
          <ClassTopic classTopicCollect={this.state.classTopicCollect} classTopicTall={this.state.classTopicTall} />
        </div>
        <HomeFooter />
      </div>
    )
  }
}
export default Hotcommend