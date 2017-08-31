import React, {Component} from 'react'
class Article extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    fetch('/api/api/articles', {
      method: 'GET'
    })
    .then(response => {
      return response.json()
    }).then(response => {
      this.setState({
        data: response.articles
      })
    })
    document.body.onscroll = this.scroll
  }

  // 返回顶部的点击事件
  click = () => {
    document.body.scrollTop = 0
  }
  // 滚轮到底部加载新的数据
  scroll = () => {
    if (document.body.scrollTop > 500) {
      let returnTop = document.getElementById('returnTop')
      returnTop.style.opacity = '0.4'
    } else {
      let returnTop = document.getElementById('returnTop')
      returnTop.style.opacity = '0'
    }
    let scrollH = document.body.scrollHeight
    let allH = document.body.scrollTop + document.documentElement.clientHeight
    if (scrollH === allH) {
      const newNum = this.state.data
      fetch('/api/api/articles?after=' + newNum[newNum.length - 1].createdAt, {
        method: 'GET'
      })
      .then(response => {
        return response.json()
      })
      .then(response => {
        if (response.has_next === 'false') {
          return false
        } else {
          this.setState({
            data: this.state.data.concat(response.articles)
          })
        }
      })
    }
  }

  render() {
    const dataArray = this.state.data.map(function (item, index) {
      return (
        <div className="more-content-every">
          <div><a href='#'><img src={item.banner} alt='' /></a></div>
          <div>
            <div><a href='#'>{item.title}</a></div>
            <div>
              <div>{item.author.name}</div>
              <div>{item.timeAgo}</div>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div id='more-article'>
        <p id='more-headline'>更多文章</p>
        <div id='more-content'>
          {dataArray}
        </div>
        <div id="returnTop" onClick={this.click} onScroll={this.scroll}><a href="#"><img
          src={require('../assets/images/返回顶部.png')} alt="" /></a></div>
      </div>
    )
  }
}
export default Article
