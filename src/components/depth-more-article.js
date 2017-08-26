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
      })
      .then(response => {
        this.setState({
          data: response.articles
        })
      })
    document.body.onscroll = this.scroll
  }
  scroll = () => {
    // console.log('页面高度' + document.documentElement.clientHeight)
    // console.log('滚动距离' + document.body.scrollTop)
    // console.log(document.body.scrollHeight)

    if (document.body.scrollHeight * 0.9 < (document.body.scrollTop + document.documentElement.clientHeight)) {
      console.log('已经到底')
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
        <div id="returnTop"><a href="#outTier"><img src={require('../assets/images/返回顶部.png')} alt="" /></a></div>
      </div>
    )
  }
}
export default Article
