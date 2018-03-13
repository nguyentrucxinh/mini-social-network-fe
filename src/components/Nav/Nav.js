import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {
  render () {
    return (
      <div>
        <div className='navbar navbar-default'>
          <div className='container'>
            <div className='navbar-header'>
              <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                <span className='icon-bar' />
                <span className='icon-bar' />
                <span className='icon-bar' />
              </button>
              <a className='navbar-brand' href='#'>Design Bootstrap</a>
            </div>
            <div className='navbar-collapse collapse'>
              <ul className='nav navbar-nav navbar-right  '>
                <li>
                  <Link to='/'>HOME</Link>
                </li>
                <li>
                  <Link to='/about'>ABOUT</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Nav
