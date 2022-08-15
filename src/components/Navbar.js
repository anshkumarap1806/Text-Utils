import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'
// import { a } from 'react-router-dom'
export default function Navbar(props) {
  const title=()=>{
    document.title='Text-Utils About'
  }
  const title1=()=>{
    document.title='Text-Utils Home'
  }

  return (
      
<nav className={`navbar navbar-expand-lg bg-${props.mode} text-${props.mode=='light'?'dark':'light'}`} >
  <div className="container-fluid">
    <a href="/" className="navbar-brand " onClick={title1}  >{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a href="/" className="navbar-brand" aria-current="page" onClick={title1} >Home</a>
        </li>
        {/* <li className="nav-item">
          <a href="/about" className="navbar-brand mx-3" onClick={title} >{props.about}</a>
        </li> */}
      </ul>
            <div className={`form-check form-switch text-${props.mode=='light'?'green':'light'}`}>
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"  onClick={props.theme}/>
        <label className="form-check-label mx-3" HTMLfor="flexSwitchCheckDefault">Change Theme</label>
      </div>
    </div>
  </div>
</nav>
  )
}
Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string
}
