/**
 * Created by dllo on 17/8/24.
 */
import React, {Component} from 'react'
class Homeright extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount () {
    fetch('/api/api/web_hot_tags', {
      method: 'GET'
    })
              .then(response => {
                return response.json()
              })
              .then(response => {
                console.log(response.hot_tags)
                this.setState({
                  data: response.hot_tags
                })
              })
    fetch('/api/api/web_hot_tags', {
      method: 'GET'
    })
        .then(response => {
          return response.json()
        })
        .then(response => {
          console.log(response.hot_tags)
          this.setState({
            data: response.hot_tags
          })
        })
  }
  render () {
    var dataArray = this.state.data.map(function (item, index) {
      return (
        <a href='#' key={index.toString()}>{item.content}</a>
      )
    })
    return (
      <div className='hotCommend'>
        <div className='hotTags'>
          <p>热门标签</p>
          {dataArray}
        </div>
        <div className='commend'>
          <p>推荐关注</p>
        </div>
      </div>
    )
  }
}
export default Homeright
