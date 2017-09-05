import React, {Component} from 'react'
import HomeHead from '../component/Home_head'
import HomeFooter from '../component/Home_footer'
import '../assets/styles/Home.styl'
import '../assets/styles/foot+downloadApp.styl'
import ClassComment from '../component/hotcomendClassCommend'
import ClassTopic from '../component/hotcommendClassTopic'
import ClassFollows from '../component/hotcommendClassFollows'
import HomeLittlePage from '../component/HomeContentClickLittlePage'
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
      classFollower: [],
      page: 1,
      createID: ''
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
  // 滚轮滚到底部加载数据
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
    document.getElementById('classCommend').style.display = 'none'
    document.getElementById('classTopic').style.display = 'none'
    document.getElementById('classFollows').style.display = 'none'
    document.getElementById('commendContent').style.display = 'none'
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
      case '发布':
        fetch('/api/api/post_by_user?zuoId=' + commentPathClass, {
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
        document.getElementById('commendContent').style.display = 'block'
        document.body.onscroll = this.scroll
        break
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
        document.getElementById('commendContent').style.display = 'block'
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
        document.body.onscroll = this.commendScroll
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
        fetch('/api/api/followee_by_user?zuoId=' + commentPathClass, {
          method: 'Get'
        })
          .then(response => {
            return response.json()
          })
          .then(response => {
            this.setState({
              classFollower: response.follows
            })
          })
        document.getElementById('commendContent').style.display = 'none'
        document.getElementById('classFollows').style.display = 'block'
        document.body.onscroll = this.follweeScroll
        break
      case '粉丝':
        fetch('/api/api/follower_by_user?zuoId=' + commentPathClass, {
          method: 'Get'
        })
          .then(response => {
            return response.json()
          })
          .then(response => {
            this.setState({
              classFollower: response.follows
            })
          })
        document.getElementById('commendContent').style.display = 'none'
        document.getElementById('classFollows').style.display = 'block'
        document.body.onscroll = this.followScroll
        break
    }
  }
  // 点击弹出小页面
  tagClicks = (e) => {
    console.log(e.target)
    this.setState({
      createID: e.target.id
    })
    document.getElementsByClassName('zuo-detail-modal')[0].style.display = 'block'
  }
  // 评论的滚轮事件
  commendScroll = () => {
    if (document.body.scrollTop + document.documentElement.clientHeight === document.body.scrollHeight && document.body.scrollTop > 1000) {
      let commentPaths = window.location.href.split('=')[1]
      const newContentArr = this.state.classCommend
      const newPath = newContentArr[newContentArr.length - 1].createdAt
      fetch('/api/api/comment_by_user?zuoId=' + commentPaths + '&after=' + newPath, {
        method: 'Get'
      })
        .then(response => {
          return response.json()
        })
        .then(response => {
          if (!response.has_text) {
            this.setState({
              classCommend: this.state.classCommend.concat(response.comments)
            })
          }
        })
    }
  }
  // 关注滚轮事件
  follweeScroll = () => {
    if (document.body.scrollTop + document.documentElement.clientHeight === document.body.scrollHeight) {
      this.setState({
        page: this.state.page + 1
      })
      let commentPaths = window.location.href.split('=')[1]
      fetch('/api/api/followee_by_user?zuoId=' + commentPaths + '&page=' + this.state.page, {
        method: 'Get'
      })
        .then(response => {
          return response.json()
        })
        .then(response => {
          console.log(response)
          if (response.has_next) {
            this.setState({
              classFollower: this.state.classFollower.concat(response.follows)
            })
          }
        })
    }
  }
  // 粉丝的滚轮事件
  followScroll = () => {
    if (document.body.scrollTop + document.documentElement.clientHeight === document.body.scrollHeight) {
      this.setState({
        page: this.state.page + 1
      })
      console.log(this.state.page)
      let commentPaths = window.location.href.split('=')[1]
      fetch('/api/api/follower_by_user?zuoId=' + commentPaths + '&page=' + this.state.page, {
        method: 'Get'
      })
        .then(response => {
          return response.json()
        })
        .then(response => {
          console.log(response)
          if (response.has_next) {
            this.setState({
              classFollower: this.state.classFollower.concat(response.follows)
            })
          }
        })
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
                <img src={(this.state.userTitle.userRole === 'professional') ? require('../assets/images/P.png') : require('../assets/images/C.png')} alt="" className="everyCommentUserRole" style={(this.state.userTitle.userRole === 'professional') ? {'left': '110'} : {'left': '-5'}} width={36} height={36} />
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
          <a className="commentTags" onClick={this.commendClass}>发布&nbsp;&nbsp;{this.state.userTitle.all_createposts_count}</a>
          <a className="commentTags" onClick={this.commendClass} >赞同&nbsp;&nbsp;{this.state.userTitle.all_likeposts_count}</a>
          <a className="commentTags" onClick={this.commendClass} >评论&nbsp;&nbsp;{this.state.userTitle.all_comments_count}</a>
          <a className="commentTags" onClick={this.commendClass} >话题&nbsp;&nbsp;{this.state.userTitle.collect_topic_count}</a>
          <a className="commentTags" onClick={this.commendClass} >关注&nbsp;&nbsp;{this.state.userTitle.all_followees_count}</a>
          <a className="commentTags" onClick={this.commendClass} >粉丝&nbsp;&nbsp;{this.state.userTitle.all_followers_count}</a>
        </div>
      </div>
    ]
// 推荐关注二级页面的内容的数据解析
    let contentArr = this.state.postsContent.map((item, index) => {
      var array = item.tags || []
      var tagsArr = array.length !== 0 ? item.tags[0] : ''
      return (
        <div className='hotZuo commendContent'>
          <div className='hotZuo-Img'>
            <img src={item.postImage.url} width={219} height={219} />
            <div className='hotZuo-mark commendContent-mark' onClick={this.tagClicks} id={item.objectId} />
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
          <ClassFollows classFollower={this.state.classFollower} />
        </div>
        <HomeLittlePage projectId={this.state.createID} />
        <HomeFooter />
      </div>
    )
  }
}
export default Hotcommend