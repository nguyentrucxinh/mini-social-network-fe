import React from 'react'

const MakePost = () => {
  return (
    <div className='user-wrapper'>
      <div className='description'>
        <h3> Make Post </h3>
        <hr />
        <form>
          <div className='form-group'>
            <label htmlFor='comment'>What's on your mind?</label>
            <textarea className='form-control' rows='5' id='comment' />
          </div>
        </form>
        <button type='button' className='btn btn-primary'>Post</button>
      </div>
    </div>
  )
}

export default MakePost
