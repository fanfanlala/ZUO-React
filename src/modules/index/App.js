import React, {Component} from 'react'
import '../../assets/styles/App.styl'
import '../../assets/styles/Home.styl'
import '../../assets/styles/HomeBody.styl'
import Home from '../../component/Home'
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount () {
    fetch('/api/api/topics', {
      method: 'GET'
    })
            .then(response => {
              return response.json()
            })
            .then(response => {
              // console.log(response.topic)
              this.setState({
                data: response.topic
              })
            })
  }
  render () {
    // const dataArray = this.state.data.map(function (item, index) {
    //   return (
    //     <p key={index.toString()}>{item.title}</p>
    //   )
    // })
    return (
      <div>
        <Home />
      </div>
    )
  }
}
export default App
