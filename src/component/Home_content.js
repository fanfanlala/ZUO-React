import React, {Component} from 'react'
class HomeContent extends Component {
  render () {
    return (
      <div>
        <div className='content_wrap'>
          <div className='feed_list_bar'>
            <div className='feed_list_bar_left'>
              <span>
                <i className='feed_all_logo'><img src={require('../assets/images/全部.png')} /></i>
                <span>全部</span>
              </span>
              <i className='feed_down_logo'><img src={require('../assets/images/下.png')} /></i>
            </div>
            <div className='feed_list_bar_right'>
              <div className='feed_right_good'>
                <span><i className='feed_right_good_logo' /></span>
                <span className='feed_right_font'>好设计</span>
              </div>
              <div className='feed_right_bad'>
                <span><i className='feed_right_bad_logo' /></span>
                <span className='feed_right_font'>坏设计</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default HomeContent
