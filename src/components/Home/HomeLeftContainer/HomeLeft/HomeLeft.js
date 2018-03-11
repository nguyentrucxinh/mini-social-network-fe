import React from 'react'

const HomeLeft = () => {
  return (
    <div className='col-md-3 col-sm-3'>
      <div className='user-wrapper'>
        <img src='/img/1.jpg' className='img-responsive' />
        <div className='description'>
          <h4> Ramolin Leomarid</h4>
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
