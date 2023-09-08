import React from 'react'

export default function Navbar(props) {
  return (
   
    <nav className={`navbar navbar-expand-lg navbar-${props.bg} bg-${props.bg}`}>
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="#">{props.home}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{props.mode}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{props.effect}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#"></a>
        </li>
      </ul>
      <div className={`form-check form-switch text-${props.bg==="light"?"dark":"light"} `}>
        <input onClick={props.togglemode} type="checkBox" className='form-check-input' id='flexSwitchCheckDefault' />
        <label  className='form-check-label' for="flexSwitchCheckDefault" >Toggle theme </label>
      </div>
     
    </div>
  </nav>
  
  )
}
