import React from 'react'

const Post = () => {
  return (
    <div className='user-wrapper'>
      <div className='description'>
        <h3> Xinh Nguyen - Feb/12/2018 </h3>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit egestas eros, ut maximus magna blandit ut. Suspendisse
            vel molestie sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce sit amet
            egestas dui, vitae tincidunt justo.
        </p>
        <button type='button' className='btn btn-primary'>Like</button>
        <button type='button' className='btn btn-default'>Comment</button>
      </div>
    </div>
  )
}

export default Post
