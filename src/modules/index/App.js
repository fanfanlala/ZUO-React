import React, {Component} from 'react'
import '../../assets/styles/App.styl'
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
              console.log(response.topic)
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
        <h1>APP-index</h1>
        <a href='about.html'>关于我们</a>
        <p>{this.state.data.title}</p>
      </div>
    )
  }
}
export default App
