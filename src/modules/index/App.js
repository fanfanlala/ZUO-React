import React, {Component} from 'react'
import '../../assets/styles/Homeright.styl'
import '../../assets/styles/App.styl'
import '../../assets/styles/Home.styl'
import '../../assets/styles/HomeBody.styl'
import '../../assets/styles/HomeContent.styl'
import Home from '../../component/Home'
class App extends Component {
  render () {
    return (
      <div>
        <Home />
        <a href='commend.html'>点我测试</a>
      </div>
    )
  }
}
export default App
