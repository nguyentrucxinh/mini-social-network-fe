import React, { Component } from 'react'

class TimelineLeft extends Component {
  constructor (props) {
    super(props)
    this.props.onGetUserProfile()
  }

  render () {
    return (
      <div className='col-md-3 col-sm-3'>
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

        <br />

        <div className='user-wrapper'>
          <div className='description'>
            <h3> Social Links: </h3>
            <hr />
            <a href='{userProfile.profile.website}' className='btn btn-sm btn-social btn-facebook' target='_blank'>
              <i className='fa fa-chrome' />&nbsp; Website </a>
            <a href='{userProfile.profile.github}' className='btn btn-sm btn-social btn-google' target='_blank'>
              <i className='fa fa-github' />&nbsp; GitHub</a>
            <a href='{userProfile.profile.twitter}' className='btn btn-sm btn-social btn-twitter' target='_blank'>
              <i className='fa fa-twitter' />&nbsp; Twitter </a>
            <a href='{userProfile.profile.linkedIn}' className='btn btn-sm btn-social btn-linkedin' target='_blank'>
              <i className='fa fa-linkedin' />&nbsp; Linkedin </a>
          </div>
        </div>

        <br />

        <div className='user-wrapper'>
          <div className='description'>
            <h3> Friends: </h3>
            <hr />
            <ul className='list-group'>
              <li className='list-group-item'>
                <div className='col-sm-6'>
                  <img src='http://api.randomuser.me/portraits/men/49.jpg' alt='Scott Stevens' className='img-responsive img-circle' />
                </div>
                <div className='col-sm-6'>
                  <img src='http://api.randomuser.me/portraits/men/49.jpg' alt='Scott Stevens' className='img-responsive img-circle' />
                </div>
                <div className='clearfix' />
              </li>
              <li className='list-group-item'>
                <div className='col-sm-6'>
                  <img src='http://api.randomuser.me/portraits/men/49.jpg' alt='Scott Stevens' className='img-responsive img-circle' />
                </div>
                <div className='col-sm-6'>
                  <img src='http://api.randomuser.me/portraits/men/49.jpg' alt='Scott Stevens' className='img-responsive img-circle' />
                </div>
                <div className='clearfix' />
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default TimelineLeft
