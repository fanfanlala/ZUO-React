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
    // console.log('页面滚轮' + document.body.offsetHeight)
    console.log('页面高度' + document.body.scrollHeight)
    console.log('滚动距离' + document.body.scrollTop)
    // console.log(document.body.offsetHeight)
    // console.log(document.body.clientHeight)
    console.log(document.body.scrollHeight)
    // console.log(document.body.offsetHeight - document.body.clientHeight)
    // if (document.body.scrollTop === (document.body.offsetHeight - document.body.clientHeight)) {
    //   console.log('11111111111')
    // }
    if (document.body.scrollTop) {

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
      </div>
    )
  }
}
export default Article
