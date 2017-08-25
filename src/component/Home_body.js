import React, {Component} from 'react'
class HomeBody extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      urlStr: '',
      topicCardsTitle: '',
      topicStar: '',
      topicComment: '',
      topCommentsArr: ''
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
                topCommentsArr: response.topic.comments
              })
            })
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
                  { this.createComment }
                </div>
              </div>
            </div>
          </div>
          <div className='right_col'>right</div>
        </div>
      </div>
    )
  }
}

export default HomeBody
