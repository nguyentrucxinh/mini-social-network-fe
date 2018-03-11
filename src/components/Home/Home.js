import React, { Component } from 'react'
import Header from '../Header/Header'
import HomeLeftContainer from './HomeLeftContainer/HomeLeftContainer'
import HomeRightContainer from './HomeRightContainer/HomeRightContainer'

class Home extends Component {
  render () {
    return (
      <div className='container'>
        <Header />
        <div className='row'>
          <HomeLeftContainer />
          <HomeRightContainer />
        </div>
      </div>
    )
  }
}

export default Home