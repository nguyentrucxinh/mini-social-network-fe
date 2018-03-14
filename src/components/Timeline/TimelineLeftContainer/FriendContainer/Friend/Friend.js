import React, { Component } from 'react'

class Friend extends Component {
  render () {
    return (
      <div className='user-wrapper'>
        <div className='description'>
          <h3> Friends: </h3>
          <hr />
          <div className='row'>
            <div className='col-md-4'>
              <div className='thumbnail'>
                <a href='#'>
                  <img src='http://api.randomuser.me/portraits/men/49.jpg' alt='Lights' />
                </a>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='thumbnail'>
                <a href='#'>
                  <img src='http://api.randomuser.me/portraits/men/49.jpg' alt='Nature' />
                </a>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='thumbnail'>
                <a href='#'>
                  <img src='http://api.randomuser.me/portraits/men/49.jpg' alt='Fjords' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Friend
