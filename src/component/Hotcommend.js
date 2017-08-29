/**
 * Created by dllo on 17/8/29.
 */
import React, {Component} from 'react'
class Hotcommend extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userTitle: [],
      postsContent: []
    }
  }
  componentDidMount () {
    fetch('/api/api//user/maker-Gao', {
      method: 'Get'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        console.log(response.user)
        this.setState({
          userTitle: response.user
        })
      })
  }

  render () {
    let userArr = [
      <div className="commendUser" style={{backgroundImage: 'url(' + this.state.userTitle.cover + ')'}}>
        <div className="commendUser-mark" />
        <div className="commendUser-name">
          <div className="commendUser-nameImg">
            <img src={this.state.userTitle.avatar} width={130} height={130} />
          </div>
        </div>
      </div>
    ]
    return (
      <div>
        {userArr}
      </div>
    )
  }
}
export default Hotcommend