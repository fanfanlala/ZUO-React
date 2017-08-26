import React, {Component} from 'react'
import HomeRight from './homeright'
import HomeContent from './Home_content'
class HomeBody extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      urlStr: '',
      topicCardsTitle: '',
      topicStar: '',
      topicComment: '',
      topCommentsArr: '',
      text: '',
      username: ''
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
              this.setState({
                urlStr: response.topic.cover,
                topicCardsTitle: response.topic.title,
                topicStar: response.topic.collect_count,
                topicComment: response.topic.comment_count,
                topCommentsArr: response.topic.comments,
                text: response.topic.comments[0].text,
                username: response.topic.comments[0].author.username
              })
            })
    let i = 0
    setInterval(() => {
      this.setState({
        text: this.state.topCommentsArr[i]['text'],
        username: this.state.topCommentsArr[i]['author']['username']
      })
      i++
      if (i === this.state.topCommentsArr.length) {
        i = 0
      }
    }, 30000)
  }
  componentDidUpdate () {
    console.log(this.state.username)
    // document.getElementsByClassName('topic_cards_body_comments_text')[0].innerHTML = this.state.username + ':' + this.state.text
    document.getElementsByClassName('comments_username')[0].innerHTML = this.state.username + ':'
    document.getElementsByClassName('comments_text')[0].innerHTML = this.state.text
  }
  render () {
    return (
      <div className='zuo_container'>
        <div className='zuo_container_content'>
          <div className='left_col'>
            <div className='left_topic_cards' >
              <div className='topic_cards_body' style={{background: 'url(' + this.state.urlStr + ')'}}>
                <div className='topic_cards_body_mask' />
                <div className='topic_cards_info'>
                  <div className='topic_cards_info_top'>
                    <div className='tip_title'>话题</div>
                    <div className='tip_divider' />
                  </div>
                  <div className='topic_cards_info_middle'>
                    { this.state.topicCardsTitle }<img src={require('../assets/images/右 (1).png')} />
                  </div>
                  <div className='topic_cards_info_mottom'>
                    <span className='topic_stars'>{this.state.topicStar}人收藏</span>
                    <span className='vertical_line'>|</span>
                    <span className='topic_comment'>{this.state.topicComment}个讨论</span>
                  </div>
                </div>
              </div>
              <div className='topic_cards_body_comments'>
                <div className='topic_cards_body_comments_text'>
                  <a href='#' className='comments_username'>{this.state.username}</a>
                  <span className='comments_text'>{this.state.text}</span>
                </div>
              </div>
            </div>
            <HomeContent />
          </div>
          <div className='right_col'>
            <HomeRight />
          </div>
        </div>
      </div>
    )
  }
}

export default HomeBody
