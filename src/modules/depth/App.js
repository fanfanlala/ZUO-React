import React, {Component} from 'react'
import '../../assets/styles/depth.styl'
import '../../assets/styles/Home.styl'
import Read from '../../components/depth-recommend-read'
import Article from '../../components/depth-more-article'
import DownLoadApp from '../../components/nav-downloadAPP'
class All extends Component {
  render () {
    return (
      <div id='all'>
        <Read />
        <DownLoadApp />
        <Article />
      </div>
    )
  }
}
export default All
