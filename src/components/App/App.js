import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Nav from '../Nav/Nav'
import Home from '../Home/Home'
import Login from '../Login/Login'
import Timeline from '../Timeline/Timeline'
import 'foundation-icons/foundation-icons.css'
import 'foundation-sites/dist/js/foundation.min.js'

class App extends Component {
  render () {
    return (
      <div>
        <Nav />
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/timeline/:username' component={Timeline} />
        <Footer />
      </div>
    )
  }
}

export default App
