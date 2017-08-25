/**
 * Created by dllo on 17/8/24.
 */
import React, {Component} from 'react'
class Homeright extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      commends: []
    }
  }
  componentDidMount () {
    // 热门标签接口
    fetch('/api/api/web_hot_tags', {
      method: 'GET'
    })
              .then(response => {
                return response.json()
              })
              .then(response => {
                this.setState({
                  data: response.hot_tags
                })
              })
    // 推荐关注接口
    fetch('/api/api/web_reco_users', {
      method: 'GET'
    })
        .then(response => {
          return response.json()
        })
        .then(response => {
          console.log(response.reco_users)
          this.setState({
            commends: response.reco_users
          })
        })
  }
  render () {
    // 热门标签数据解析
    var hotArray = this.state.data.map(function (item, index) {
      return (
        <a href='#' key={index.toString()}>{item.content}</a>
      )
    })
    // 推荐关注数据解析
    var commendArray = this.state.commends.map(function (item, index) {
      return (
        <div className='commend-introduction' key={index.toString()}>
          <div>
            <a href='#' className='commend-title'>{item.username}</a>
            <a href='#' className='commend-content'>{item.introduction}</a>
          </div>
          <a href='' className='commend-Img'>
            <img src={item.cover} width={40} height={40} />
            <span className='commendImg-mask' />
          </a>
        </div>
      )
    })
    return (
      // 热门标签 && 推荐关注
      <div className='hotCommend'>
        <div className='hotTags'>
          <p>热门标签</p>
          {hotArray}
        </div>
        <div className='commend'>
          <p>推荐关注</p>
          {commendArray}
        </div>
      </div>
    )
  }
}
export default Homeright
