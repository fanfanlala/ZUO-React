import React, {Component} from 'react'
class HotTags extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hotTitle: [],
      hotContent: []
    }
  }
  componentDidMount () {
    // 热门标签二级页面的title接口
    fetch('/api/api/search/articles?q=Long+Life+Design+Award', {
      method: 'Get'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          hotTitle: response.pgcs
        })
      })
  }
  render () {
    // 热门标签二级页面的title数据解析
    var hotTitleArr = this.state.hotTitle.map(function (item, index) {
      return (
        <div>{item.sceneTagName}</div>
      )
    })
    return (
      <div>
        <div>
          {hotTitleArr}
        </div>
      </div>
    )
  }
}
export default HotTags
