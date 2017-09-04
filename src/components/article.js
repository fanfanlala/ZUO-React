import React, {Component} from 'react'
import HomeHead from '../component/Home_head'
import HomeFotter from '../component/Home_footer'
import ArticleComment from './articleComment'
class Article extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      tags: [],
      author: {}
    }
  }
  componentDidMount () {
    let path = window.location.href.split('=')[1]
    fetch('/api/api/article/' + path, {
      method: 'GET'
    })
    .then(response => {
      return response.json()
    })
    .then(response => {
      this.setState({
        data: response.pgc,
        tags: response.pgc.tags,
        author: response.pgc.author,
        comments: response.pgc.comments
      })
    })
    document.body.onscroll = this.returnTopScroll
  }
  // 返回顶部判断
  returnTopScroll = () => {
    if (document.body.scrollTop > 500) {
      let returnTop = document.getElementById('returnTop')
      returnTop.style.opacity = '0.4'
    } else {
      let returnTop = document.getElementById('returnTop')
      returnTop.style.opacity = '0'
    }
  }
  componentDidUpdate () {
    var content = document.getElementById('article-content').innerText
    document.getElementById('article-content').innerHTML = content
  }
  author = () => {
    document.getElementById('article-author').style.display = 'block'
  }
  closeAuthor = () => {
    document.getElementById('article-author').style.display = 'none'
  }
  render () {
    const tagsArray = this.state.tags.map(function (item, index) {
      return (
        <div id='article-title-tags'>
          <div />
          <div><a href='#'>{item.split(',')}</a></div>
        </div>
      )
    })
    return (
      <div id='article'>
        <HomeHead />
        <div id='article-title'>
          <div id='article-title-img' style={{backgroundImage: 'url(' + this.state.data.banner + ')'}} />
          <div id='article-title-text'>
            <div id='article-title-name'>{this.state.data.title}</div>
            <div id='article-title-label'>
              <div id='article-title-sceneTagName'>
                <div style={{backgroundColor: this.state.data.sceneTagColor}} />
                <div><a href='#'>{this.state.data.sceneTagName}</a></div>
              </div>
              {tagsArray}
            </div>
            <div id='writerMessage'>
              <div id='writerAndTime'>
                <a href='#' onClick={this.author}>
                  <img src={this.state.author.avatar} alt='' />
                  <span>{this.state.author.name}</span>
                  <img src={require('../assets/images/i.png')} alt='' height={25} width={27} />
                </a>
                <span id='writerTime'>
                  {this.state.data.timeAgo}
                </span>
              </div>
              <div id='like-link'>
                <a href='#'>
                  <img src={require('../assets/images/xin.png')} alt='' />
                  <span className='link'>{this.state.data.likesCount}</span>
                  <img src={require('../assets/images/hua.png')} alt='' />
                  <span className='link'>{this.state.data.commentCount}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id='article-content'>
          {this.state.data.content}
        </div>
        <div id="article-like">
          <div id="article-like-left">
            <div><img src={require('../assets/images/xin.png')} alt="" /></div>
            <div><a href="#">{this.state.data.likesCount}人喜欢</a></div>
          </div>
          <div id="article-like-right">
            <div>分享到</div>
            <div><a href="http://service.weibo.com/share/share.php?url=http%3A%2F%2Fzuodesign.cn%2Fzuo%2Fpgc%2F565022e660b2260e5bdf0deb&appkey=550264216&title=%E5%BE%B7%E5%9B%BD%E5%92%8C%E6%97%A5%E6%9C%AC%E7%9A%84%E8%AE%BE%E8%AE%A1%E8%83%8C%E5%90%8E%EF%BC%8C%E4%BD%A0%E4%B8%8D%E7%9F%A5%E9%81%93%E7%9A%84%E4%BA%8B&pic=http%3A%2F%2Fac-llsFhjiU.clouddn.com%2F67a62a071586ef249f63.png&ralateUid=&language=" ><img src={require('../assets/images/xinlang.png')} alt="" target="view_window" /></a></div>
            <div><a href="https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=http%3A%2F%2Fzuodesign.cn%2Fzuo%2Fpgc%2F565022e660b2260e5bdf0deb&pics=http%3A%2F%2Fac-llsFhjiU.clouddn.com%2F67a62a071586ef249f63.png&title=%E5%BE%B7%E5%9B%BD%E5%92%8C%E6%97%A5%E6%9C%AC%E7%9A%84%E8%AE%BE%E8%AE%A1%E8%83%8C%E5%90%8E%EF%BC%8C%E4%BD%A0%E4%B8%8D%E7%9F%A5%E9%81%93%E7%9A%84%E4%BA%8B" target="view_window" ><img src={require('../assets/images/kongjian.png')} alt="" /></a></div>
            <div><a href="https://huaban.com/login/?dialog=1" target="view_window" ><img src={require('../assets/images/huaban.png')} alt="" /></a></div>
            <div><a href="https://www.douban.com/share/service?name=%E5%BE%B7%E5%9B%BD%E5%92%8C%E6%97%A5%E6%9C%AC%E7%9A%84%E8%AE%BE%E8%AE%A1%E8%83%8C%E5%90%8E%EF%BC%8C%E4%BD%A0%E4%B8%8D%E7%9F%A5%E9%81%93%E7%9A%84%E4%BA%8B&href=http%3A%2F%2Fzuodesign.cn%2Fzuo%2Fpgc%2F565022e660b2260e5bdf0deb&image=http%3A%2F%2Fac-llsFhjiU.clouddn.com%2F67a62a071586ef249f63.png&updated=&bm=&title=%E5%BE%B7%E5%9B%BD%E5%92%8C%E6%97%A5%E6%9C%AC%E7%9A%84%E8%AE%BE%E8%AE%A1%E8%83%8C%E5%90%8E%EF%BC%8C%E4%BD%A0%E4%B8%8D%E7%9F%A5%E9%81%93%E7%9A%84%E4%BA%8B&url=http%3A%2F%2Fzuodesign.cn%2Fzuo%2Fpgc%2F565022e660b2260e5bdf0deb&image=http%3A%2F%2Fac-llsFhjiU.clouddn.com%2F67a62a071586ef249f63.png" target="view_window" ><img src={require('../assets/images/douban.png')} alt="" /></a></div>
          </div>
        </div>
        <div id="article-count">
          <div><img src={require('../assets/images/hua.png')} alt="" /></div>
          <div>{this.state.data.commentCount}条评论</div>
        </div>
        <ArticleComment comments={this.state.comments} />
        <HomeFotter />
        <div id="article-author" onClick={this.closeAuthor}>
          <div id="article-author-content">
            <div><img src={this.state.author.avatar} alt="" /></div>
            <div>{this.state.author.name}</div>
            <div><span>{this.state.author.category}</span></div>
            <div>{this.state.author.intro}</div>
            <div>
              <a href='http://weibo.com/zuodesign2015' target="view_window" >
                <img src={require('../assets/images/authorXinLang.png')} alt='' />
                <strong>作者微博</strong>
              </a>
              <a href=''>
                <img src={require('../assets/images/authorWeiXin.png')} alt='' />
                <strong>作者微信</strong>
              </a>
              <a href='http://zuodesign.cn' target="view_window" >
                <img src={require('../assets/images/authorGuanFang.png')} alt='' />
                <strong>官方网站</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Article
