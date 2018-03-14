import React from 'react'

const SocialNetwork = ({ profile }) => {
  return (
    <div className='user-wrapper'>
      <div className='description'>
        <h3> Social Links: </h3>
        <hr />
        <a href={profile.website} className='btn btn-sm btn-social btn-facebook' target='_blank'>
          <i className='fa fa-chrome' />&nbsp; Website </a>
        <a href={profile.github} className='btn btn-sm btn-social btn-google' target='_blank'>
          <i className='fa fa-github' />&nbsp; GitHub</a>
        <a href={profile.twitter} className='btn btn-sm btn-social btn-twitter' target='_blank'>
          <i className='fa fa-twitter' />&nbsp; Twitter </a>
        <a href={profile.linkedIn} className='btn btn-sm btn-social btn-linkedin' target='_blank'>
          <i className='fa fa-linkedin' />&nbsp; Linkedin </a>
      </div>
    </div>
  )
}

export default SocialNetwork
