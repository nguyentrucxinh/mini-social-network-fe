import React from 'react'

const HomeLeft = ({ userProfile }) => {
  return (
    <div className='col-md-3 col-sm-3'>
      <div className='user-wrapper'>
        <img src={userProfile.avatarUrl} className='img-responsive' />
        <div className='description'>
          <h4> {userProfile.firstName} {userProfile.lastName}</h4>
          <h5>
            <strong> Website Designer </strong>
          </h5>
          <p>
            Pellentesque elementum dapibus convallis.
                            </p>
          <hr />
          <a href='#' className='btn btn-danger btn-sm'>
            <i className='fa fa-user-plus' /> &nbsp;Profile + </a>
        </div>
      </div>
    </div>
  )
}

export default HomeLeft
