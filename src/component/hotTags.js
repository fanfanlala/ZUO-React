import React, {Component} from 'react'
import '../assets/styles/Homeright.styl'
import searchImg from '../assets/images/搜索.png'
class HotTags extends Component {
  constructor (props) {
    super(props)
    this.state = {
      emptyDate: [],
      articlesDate: [],
      usersDate: [],
      postsDate: []
    }
  }

  componentDidMount () {
    // 搜索
    let path = window.location.href.split('=')[1]
    fetch('/api/api/search?q=' + path, {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          emptyDate: response.query
        })
      })
    // 相关深度阅读
    fetch('/api/api/search/articles?q=' + path, {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          articlesDate: response.pgcs
        })
      })
    // 相关用户
    fetch('/api/api/search/users?q=' + path, {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          usersDate: response.users
        })
      })
    // 相关ZUO
    fetch('/api/api/search/posts?q=' + path, {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        console.log(response.posts)
        this.setState({
          postsDate: response.posts
        })
      })
  }

  render () {
    // 搜索的数据解析
    // let empty = this.state.emptyDate.q > 0 ? this.state.emptyDate : false
    let emptyArr = [
      <div className='hotSearch'>
        <div className='hotTagsContainer'>
          <div className='hotSearch-title'>
            <img src={searchImg} width={30} height={30} />
            <span>搜索：{this.state.emptyDate.q}</span>
          </div>
          <div className='hotSearch-content'>
            <span />
            <a href='#'>{this.state.emptyDate.q}</a>
          </div>
        </div>
      </div>
    ]
    // 相关用户数据解析
    var userArr = [
      <div className='hotTagsContainer'><span className='hotArticle-title'>相关用户</span></div>,
      this.state.usersDate.map(function (item, index) {
        return (
          <div className='hotTags-user'>
            <div className='hotTags-user-title clearFloat'>
              <a href='#' className='left'>{item.nickname}</a>
              <a href='#' className='right'>关注</a>
            </div>
            <div className='hotTags-user-Img clearFloat'>
              <a href='#' className='left'><img
                src={item.avatar.length > 0 ? item.avatar : require('../assets/images/avatar.jpg')} width={46}
                height={46} /></a>
              <div className='hotTags-user-count left'>
                <a href='#'>{item.all_createposts_count}</a>
                <a href='#'>发布</a>
              </div>
              <div className='hotTags-user-count right'>
                <a href='#'>{item.allLikesCount}</a>
                <a href='#'>被赞</a>
              </div>
            </div>
          </div>
        )
      })]
    userArr = this.state.usersDate.length > 0 ? userArr : ''
    // 相关深度阅读数据解析
    var articlesArr = [<div className='hotTagsContainer'><span className='hotArticle-title'>相关深度阅读</span>
    </div>, this.state.articlesDate.map(function (item, index) {
      return (
        <div className='hotArticle'>
          <div className='hotTagsContainer hotArticle'>
            <span className='hotArticle-title'>相关深度阅读</span>
            <div className='hotArticle-Img'>
              <a href='#'>
                <img src={item.banner} width={219} height={334} />
              </a>
              <div className='hotArticle-mask' />
              <a href='#' className='hotArticle-content'>{item.title}</a>
              <p>{item.summary}</p>
            </div>
          </div>
        </div>
      )
    })]
    articlesArr = this.state.articlesDate > 0 ? articlesArr : ''
    // 相关ZUO数据解析
    let postArr = [
      <div className='hotTagsContainer'><span className='hotArticle-title'>相关ZUO</span></div>, this.state.postsDate.map(function (item, index) {
        const array = item.tags || []
        var tagsArr = array.length !== 0 ? item.tags[0] : ''
        return (
          <div className='hotZuo'>
            <div className='hotZuo-title'>
              <span>来自</span>
              <a href='#'>{item.owner.username}</a>
            </div>
            <div className='hotZuo-Img'>
              <img src={item.postImage.url} width={219} height={219} />
              <div className='hotZuo-mark' />
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
      })]
    return (
      <div>
        <div>
          <div className='hotTagsContainer'>
            {emptyArr}
            {userArr}
            {articlesArr}
            {postArr}
          </div>
        </div>
      </div>
    )
  }
}
export default HotTags
