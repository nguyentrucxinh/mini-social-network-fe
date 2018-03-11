import React from 'react'

const HomeRight = () => {
  return (
    <div className='col-md-9 col-sm-9  user-wrapper'>
      <div className='description'>
        <h3> Ramolin's Biography : </h3>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit egestas eros, ut maximus magna blandit ut. Suspendisse
            vel molestie sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce sit amet
            egestas dui, vitae tincidunt justo.
        </p>
        <p>
          Etiam eleifend massa congue magna pretium, id blandit dui pulvinar. Nam et pulvinar risus, vel blandit risus. Maecenas tristique
            volutpat ante, aliquet hendrerit felis aliquet nec. Curabitur rutrum tincidunt erat, ac feugiat libero
            gravida ac. Suspendisse ut varius quam, vitae rutrum metus.
        </p>
        <h3> Social Links: </h3>
        <hr />
        <a href='#' className='btn btn-social btn-facebook'>
          <i className='fa fa-facebook' />&nbsp; Facebook </a>

        <a href='#' className='btn btn-social btn-google'>
          <i className='fa fa-google-plus' />&nbsp; Google</a>
        <a href='#' className='btn btn-social btn-twitter'>
          <i className='fa fa-twitter' />&nbsp; Twitter </a>
        <a href='#' className='btn btn-social btn-linkedin'>
          <i className='fa fa-linkedin' />&nbsp; Linkedin </a>
      </div>

    </div>
  )
}

export default HomeRight
