import React, {Component} from 'react'
import '../../assets/styles/article.styl'
import '../../assets/styles/Home.styl'
import '../../assets/styles/foot+downloadApp.styl'
import Article from '../../components/article'
class App extends Component {
  render () {
    return (
      <div>
        <Article />
      </div>
    )
  }
}
export default App
