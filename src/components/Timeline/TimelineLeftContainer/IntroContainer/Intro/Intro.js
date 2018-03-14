import React, { Component } from 'react'

class Intro extends Component {
  constructor (props) {
    super(props)
    this.props.onGetUserProfile()
  }

  render () {
    return (
      <div className='user-wrapper'>
        <img src={this.props.userProfile.avatarUrl} className='img-responsive' />
        <div className='description'>
          <h4> {this.props.userProfile.firstName} {this.props.userProfile.lastName}</h4>
          <h5>
            <strong> Full-stack JavaScript Developer </strong>
          </h5>
          <p>Quote: {this.props.userProfile.profile.quote}</p>
          <p>Studied at: {this.props.userProfile.profile.studiedAt}</p>
          <p>Lives in: {this.props.userProfile.profile.livesIn}</p>
          <p>Marital status: {this.props.userProfile.profile.maritalStatus}</p>
          <p>Followed by: {this.props.userProfile.profile.followedBy}</p>
        </div>
      </div>
    )
  }
}

export default Intro
