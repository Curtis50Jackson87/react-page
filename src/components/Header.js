import React, {Component} from 'react'
import '../App.css'

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


export default class Header extends Component{
  render() {
    return(
      <div className="page-header row">
      <h1>Curtis Jackson<small>Full Stack Developer</small></h1>
          <link to="/" className="col-md-4">Home</link>link>
          <link to="/Projects" className="col-md-4">Projects</link>link>
        <link to="/Contact" className="col-md-4">Contact Me</link>link>

      </div>
    )
  }
}
