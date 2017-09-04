/**
 * Created by dllo on 17/9/4.
 */
import React, {Component} from 'react'
import '../assets/styles/Homeright.styl'
class ClassTopic extends Component {
  constructor (props) {
    super(props)
    this.state = {
      collect: [],
      tall: []
    }
  }
  static propTypes = {
    classTopicCollect: React.PropTypes.object,
    classTopicTall: React.PropTypes.object
  }
  componentWillReceiveProps (nextProps) {
    this.setState({
      collect: nextProps.classTopicCollect,
      tall: nextProps.classTopicTall
    })
  }
  componentDidUpdate () {
    let tallTitleWord = document.getElementsByClassName('tallTitle')[0]
    console.log(tallTitleWord)
    if (tallTitleWord !== undefined) {
      var content = document.getElementsByClassName('tallTitle')[0].innerText
      document.getElementsByClassName('tallTitle')[0].innerHTML = content
    }
  }
  render () {
    let topicCollect = this.state.collect
    let topicTall = this.state.tall
    if (topicCollect.length > 0) {
      var topicCollectArr = [
        <div className="topic">
          <div className="topicMark" />
          <img src={topicCollect[0].cover} width={450} height={166} alt="" />
          <div className="topicContent">
            <div className="topic-smallTitle">话题</div>
            <div className="topic-line" />
            <div className="topic-bigTitle">
              {topicCollect[0].title}
              <img src={require('../assets/images/右 (1).png')} width={24} height={24} alt="" />
            </div>
            <div className="topic-collect">
              <span>{topicCollect[0].collect_count}人收藏</span>
              <span>|</span>
              <span>{topicCollect[0].comment_count}个讨论</span>
            </div>
          </div>
        </div>
      ]
    }
    if (topicTall.length > 0) {
      var topicTallArr = [
        <div className="tall">
          <div className="tallTitle">{topicTall[0].text}</div>
          <div>{topicTall[0].timeAgo}</div>
          <div>来自话题&nbsp;|&nbsp;{topicTall[0].topic.title}</div>
        </div>
      ]
    }
    return (
      <div id="classTopic">
        <div className="classTopic-title">收藏的话题</div>
        {topicCollectArr}
        <div className="classTopic-title">参与讨论的话题</div>
        {topicTallArr}
      </div>
    )
  }
}
export default ClassTopic