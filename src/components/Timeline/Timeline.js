import React, { Component } from 'react'
import Header from '../Header/Header'
import IntroContainer from './TimelineLeftContainer/IntroContainer/IntroContainer'
import SocialNetworkContainer from './TimelineLeftContainer/SocialNetworkContainer/SocialNetworkContainer'
import FriendContainer from './TimelineLeftContainer/FriendContainer/FriendContainer'
import MakePostContainer from './TimelineRightContainer/MakePostContainer/MakePostContainer'
import PostContainer from './TimelineRightContainer/PostContainer/PostContainer'

class Timeline extends Component {
  render () {
    return (
      <div className='container'>
        <Header />
        <div className='row'>
          <div className='col-md-3 col-sm-3'>
            <IntroContainer username={this.props.match.params.username} />
            <br />
            <SocialNetworkContainer />
            <br />
            <FriendContainer />
          </div>
          <div className='col-md-9 col-sm-9'>
            <MakePostContainer />
            <br />
            <PostContainer />
          </div>
        </div>
      </div>
    )
  }
}

export default Timeline
