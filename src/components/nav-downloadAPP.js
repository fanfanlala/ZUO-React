import React, {Component} from 'react'
class DownloadApp extends Component {
  click = () => {
    document.getElementById('downloadApp').style.display = 'none'
  }
  render() {
    return (
      <div id='downloadApp' onClick={this.click}>
        <img src={require('../assets/images/scan.png')} alt='' width={440} height={440} />
      </div>
    )
  }
}
export default DownloadApp
