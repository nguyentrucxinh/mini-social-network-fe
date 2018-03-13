import React from 'react'

const TimelineRight = () => {
  return (
    <div className='col-md-9 col-sm-9'>

      <div className='user-wrapper'>
        <div className='description'>
          <h3> Make Post </h3>
          <hr />
          <form>
            <div className='form-group'>
              <label for='comment'>What's on your mind?</label>
              <textarea className='form-control' rows='5' id='comment' />
            </div>
          </form>
          <button type='button' className='btn btn-primary'>Post</button>
        </div>
      </div>

      <br />

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

      <br />

      <div className='user-wrapper'>
        <div className='description'>
          <h3> Xinh Nguyen - Feb/10/2018 </h3>
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

    </div>
  )
}

export default TimelineRight
