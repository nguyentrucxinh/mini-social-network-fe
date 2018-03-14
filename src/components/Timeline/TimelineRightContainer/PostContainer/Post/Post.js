import React from 'react'

const Post = ({ posts, fullName }) => {
  return (
    <div>
      {posts.map((value, index) =>
        <div className='user-wrapper' key={value._id}>
          <div className='description'>
            <h3> {fullName} - {value.updatedAt} </h3>
            <hr />
            <p>{value.content}</p>
            <button type='button' className='btn btn-primary'>
              <span className='badge'>{value.likers.length}</span> Like
            </button>
            <button type='button' className='btn btn-default'>Comment</button>

            <form>
              <div className='form-group'>
                <textarea className='form-control' rows='1' id='comment' placeholder='Write a comment...' />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Post
