import React, { useState } from 'react'
import moon from './865882.png'
import sun from './sun-256.png'
import { Link } from 'react-router-dom';

export default function navbar(props) {
  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" style={{fontSize:30}} to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" style={{fontSize:25}} aria-current="page" to="/about">About</Link>
        </li>
      </ul>
      <div className="d-flex" style={{cursor:'pointer'}} onClick={props.toggleMode}>
        {/* {console.log(props.mode)} */}
        {
           props.mode === 'light'
           ? <img className="mt-1" style={{width: '40px', height: '40px' }} src={moon} alt="" />
           : <img className="mt-1" style={{width: '40px', height: '40px' }} src={sun} alt="" />
        }
      <p className="mt-2 mx-2" style={{ fontSize: 20, color: props.mode === 'light' ? 'black' : 'white' }}>
        {`${props.mode === 'light' ? 'Dark Mode' : 'Light Mode'}`} </p>

      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
