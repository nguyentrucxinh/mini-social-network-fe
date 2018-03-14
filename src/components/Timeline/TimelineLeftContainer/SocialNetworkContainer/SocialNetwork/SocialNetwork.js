import React, { Component } from 'react'

class SocialNetwork extends Component {
  render () {
    return (
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
    )
  }
}

export default SocialNetwork
