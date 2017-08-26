/**
 * Created by dllo on 17/8/25.
 */
import React, {Component} from 'react'
class HotTags extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hotDate: []
    }
  }

  componentDidMount() {
    // 热门标签二级页面的title接口
    var portArr = ['', '/ariticles', '/users', '/posts']

    function getData(port) {
      fetch('/api/api/search' + port + '?q=Long+Life+Design+Award', {
        method: 'get'
      })
        .then(response => {
          return response.json()
        })
        .then(response => {
          let hotTitle = response.users
          let articles = response.pgcs
          let posts = response.posts
          let empty = response.query
        })
    }
  }

  render() {
    return (
      <div>
        <div>
          dhfjkh
        </div>
      </div>
    )
  }
}
export default HotTags