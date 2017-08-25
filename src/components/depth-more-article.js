import React, {Component} from 'react'
class Article extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount () {
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
  }
  render () {
    const dataArray = this.state.data.map(function (item, index) {
      return (
        <div>
          {item.title}

        </div>
      )
    })
    return (
      <div id='more-article'>
        <p id='more-headline'>更多文章</p>
        <div>
          {dataArray}
        </div>
      </div>
    )
  }
}
export default Article
