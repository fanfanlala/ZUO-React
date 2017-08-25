import React, {Component} from 'react'
import '../../assets/styles/depth.styl'
import Read from '../../components/depth-recommend-read'
import '../../assets/styles/Homeright.styl'
import HomeRight from '../../component/homeright'
class App extends Component {
  render () {
    return (
      <div>
        <Read />
        <HomeRight />
      </div>
    )
  }
}
export default App
