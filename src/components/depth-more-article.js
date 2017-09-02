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
    document.body.onscroll = this.returnTopScroll
  }
  // 滚轮到底部加载新的数据
  returnTopScroll = () => {
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
          <div>
            <a href={'article.html?id=' + item.objectId}><img src={item.banner} alt='' width={219} /></a>
          </div>
          <div>
            <div><a href={'article.html?id=' + item.objectId}>{item.title}</a></div>
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
      </div>
    )
  }
}
export default Article
