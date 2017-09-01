import React, {Component} from 'react'
class loaderBefore extends Component {
  render () {
    return (
      <div id='loader_bg'>
        <div id='loader_top'>
          <div id='loader_top_left' />
          <div id='loader_top_right' >
            <div id='loader_top_right_one' />
            <div id='loader_top_right_two' />
          </div>
        </div>
        <div id='loader_bottom_one' />
        <div id='loader_bottom_two' />
        <div id='loader_bottom_three' />
      </div>
    )
  }
}
export default loaderBefore
