import React, {Component} from 'react'
class Article extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      tags: [],
      author: {}
    }
  }
  componentDidMount () {
    let path = window.location.href.split('=')[1]
    console.log(path)
    fetch('/api/api/article/' + path, {
      method: 'GET'
    })
    .then(response => {
      return response.json()
    })
    .then(response => {
      this.setState({
        data: response.pgc,
        tags: response.pgc.tags,
        author: response.pgc.author
      })
    })
  }

  componentDidUpdate () {
    var content = document.getElementById('article-content').innerText
    document.getElementById('article-content').innerHTML = content
  }

  render () {
    const tagsArray = this.state.tags.map(function (item, index) {
      return (
        <div id="article-title-tags">
          <div />
          <div><a href="#">{item.split(',')}</a></div>
        </div>
      )
    })
    return (
      <div id='article'>
        <div id='article-title'>
          <div id='article-title-img' style={{backgroundImage: 'url(' + this.state.data.banner + ')'}} />
          <div id='article-title-text'>
            <div id='article-title-name'>{this.state.data.title}</div>
            <div id='article-title-label'>
              <div id="article-title-sceneTagName">
                <div style={{backgroundColor: this.state.data.sceneTagColor}} />
                <div><a href="#">{this.state.data.sceneTagName}</a></div>
              </div>
              {tagsArray}
            </div>
            <div id="writerMessage">
              <div id="writerAndTime">
                <a href="#">
                  <img src={this.state.author.avatar} alt="" />
                  <span>{this.state.author.name}</span>
                  <img src={require('../assets/images/i.png')} alt="" height={25} width={27} />
                </a>
                <span id="writerTime">
                  {this.state.data.timeAgo}
                </span>
              </div>
              <div id="like-link">
                <a href="#">
                  <img src={require('../assets/images/xin.png')} alt="" />
                  <span className="link">{this.state.data.likesCount}</span>
                  <img src={require('../assets/images/hua.png')} alt="" />
                  <span className="link">{this.state.data.commentCount}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="article-content">
          {this.state.data.content}
        </div>
      </div>
    )
  }
}
export default Article
