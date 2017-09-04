import React, {Component} from 'react'
import HomeHead from '../component/Home_head'
class Read extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount () {
    fetch('/api/api/hot_articles', {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          data: response.hot_articles
        })
      })
  }

  render () {
    const dataArray = this.state.data.map(function (item, index) {
      var color = item.sceneTagColor
      return (
        <div className='read'>
          <a href={'article.html?id=' + item.objectId}><img src={item.banner} alt='' /></a>
          <div className='read-content'>
            <div>
              <div><p><a href={'article.html?id=' + item.objectId}>{item.title}</a></p></div>
              <div><p><a href={'article.html?id=' + item.objectId}>{item.summary}</a></p></div>
            </div>
            <div>
              <div style={{background: color}} />
              <div><a href='#'>{item.sceneTagName}</a></div>
              <div><a href={'article.html?id=' + item.objectId}>{item.timeAgo}</a></div>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div id='outTier'>
        <HomeHead />
        <p id='read-headline'>推荐阅读</p>
        <div id='read-headline-img'>
          {dataArray}
        </div>
      </div>
    )
  }
}
export default Read
