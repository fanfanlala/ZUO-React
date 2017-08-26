import React, {Component} from 'react'
import '../assets/styles/Homeright.styl'
import searchImg from '../assets/images/搜索.png'
class HotTags extends Component {
  constructor(props) {
    super(props)
    this.state = {
      emptyDate: [],
      articlesDate: [],
      usersDate: [],
      postsDate: []
    }
  }

  componentDidMount() {
    // 搜索
    fetch('/api/api/search?q=Long+Life+Design+Award', {
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
    fetch('/api/api/search/articles?q=Long+Life+Design+Award', {
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
    fetch('/api/api/search/users?q=Long+Life+Design+Award', {
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
    fetch('/api/api/search/posts?q=Long+Life+Design+Award', {
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

  render() {
    // 搜索的数据解析
    // let empty = this.state.emptyDate.q > 0 ? this.state.emptyDate : false
    let emptyArr = [
      <div className="hotSearch">
        <div className="hotTagsContainer">
          <div className="hotSearch-title">
            <img src={searchImg} width={30} height={30} />
            <span>搜索：{this.state.emptyDate.q}</span>
          </div>
          <div className="hotSearch-content">
            <span />
            <a href="#">{this.state.emptyDate.q}</a>
          </div>
        </div>
      </div>
    ]
    // 相关深度阅读
    let articlesArr = this.state.articlesDate.map(function (item, index) {
      return (
        <div className="hotTagsContainer hotArticle">
          <span className="hotArticle-title">相关深度阅读</span>
          <div className="hotArticle-Img">
            <a href="#">
              <img src={item.banner} width={219} height={334} />
            </a>
            <div className="hotArticle-mask" />
            <a href="#" className="hotArticle-content">{item.title}</a>
            <p>{item.summary}</p>
          </div>
        </div>
      )
    })
    // 相关ZUO
    let postArr = this.state.postsDate.map(function (item, index) {
      return (
        <div />
      )
    })
    return (
      <div>
        <div>
          {emptyArr}
          {articlesArr}
          {postArr}
        </div>
      </div>
    )
  }
}
export default HotTags
