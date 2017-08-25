import React, {Component} from 'react'
import '../../assets/styles/depth.styl'
import Read from '../../components/depth-recommend-read'
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
    return (
      <div>
        <Read />
      </div>
    )
  }
}
export default App
