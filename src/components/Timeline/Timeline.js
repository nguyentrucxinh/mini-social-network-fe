import React, { Component } from 'react'
import Header from '../Header/Header'
import TimelineLeftContainer from './TimelineLeftContainer/TimelineLeftContainer'
import TimelineRightContainer from './TimelineRightContainer/TimelineRightContainer'

class Timeline extends Component {
  render () {
    return (
      <div className='container'>
        <Header />
        <div className='row'>
          <TimelineLeftContainer username={this.props.match.params.username} />
          <TimelineRightContainer />
        </div>
      </div>
    )
  }
}

export default Timeline
