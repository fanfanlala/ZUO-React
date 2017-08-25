import React, {Component} from 'react'
import '../../assets/styles/Homeright.styl'
import '../../assets/styles/App.styl'
import '../../assets/styles/Home.styl'
import '../../assets/styles/HomeBody.styl'
import Home from '../../component/Home'
class App extends Component {
  render () {
    return (
      <div>
        <a href='depth.html'>点我跳转</a>
        <Home />
      </div>
    )
  }
}
export default App
