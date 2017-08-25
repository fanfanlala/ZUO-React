import React, {Component} from 'react'
import '../../assets/styles/depth.styl'
import Read from '../../components/depth-recommend-read'
import '../../assets/styles/Homeright.styl'
import HomeRight from '../../component/homeright'
import '../../assets/styles/App.styl'
import '../../assets/styles/Home.styl'
import '../../assets/styles/HomeBody.styl'
import Home from '../../component/Home'
class App extends Component {
  render () {
    return (
      <div>
        <Read />
        <Home />
        <HomeRight />
      </div>
    )
  }
}
export default App
