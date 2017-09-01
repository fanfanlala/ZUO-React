import React, {Component} from 'react'
import '../../assets/styles/depth.styl'
import '../../assets/styles/Home.styl'
import Read from '../../components/depth-recommend-read'
import Article from '../../components/depth-more-article'
import LoaderBefore from '../../components/loaderBefore'
class All extends Component {
  render () {
    return (
      <div id='all'>
        <LoaderBefore />
        <Read />
        <Article />
      </div>
    )
  }
}
export default All
