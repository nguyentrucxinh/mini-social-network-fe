import React from 'react'

const Friend = ({ friends }) => {
  return (
    <div className='user-wrapper'>
      <div className='description'>
        <h3> Friends: </h3>
        <hr />
        <div className='row'>
          {friends.map((value, index) =>
            <div className='col-md-4'>
              <div className='thumbnail'>
                <a href='#'>
                  <img src='http://placehold.it/100x100' alt='Lights' />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Friend
