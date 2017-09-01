import React, {Component} from 'react'
import '../assets/styles/HomeContentCLickLittlePage.styl'
class HomeContentClickLittlePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }
  static propTypes = {
    projectId: React.PropTypes.string
  }
  componentWillReceiveProps () {
    this.setState({
      data: []
    }, () => {
      console.log(this.props.projectId)
      fetch('/api/api/post/' + this.props.projectId, {
        method: 'GET'
      })
        .then(response => {
          return response.json()
        })
        .then(response => {
          this.setState({
            data: response.post
          })
          console.log(response.post)
        })
    })
  }
  render () {
    console.log(this.state.data)
    return (
      <div>
        <div className='zuo-detail-modal' >
          <div className='zuo-detail-body'>
            <div className='icon-iconhomeclose'><img src={require('../assets/images/false.png')} /></div>
            <div className='zuo-detail-content'>/</div>
          </div>
        </div>
      </div>
    )
  }
}
export default HomeContentClickLittlePage
