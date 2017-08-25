import React, {Component} from 'react'
import '../../assets/styles/Homeright.styl'
import HomeRight from '../../component/homeright'
class App extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     data: []
  //   }
  // }
  // componentDidMount () {
  //   fetch('/api/api/topics', {
  //     method: 'GET'
  //   })
  //           .then(response => {
  //             return response.json()
  //           })
  //           .then(response => {
  //             console.log(response.topic)
  //             this.setState({
  //               data: response.topic
  //             })
  //           })
  // }
  render () {
    // const dataArray = this.state.data.map(function (item, index) {
    //   return (
    //     <p key={index.toString()}>{item.title}</p>
    //   )
    // })
    return (
      <div>
        <HomeRight />
      </div>
    )
  }
}
export default App
