import React from 'react'

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-white">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <img className= 'first-logo' src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt='' />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Product
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Pricing</a>
        </li>
        
      </ul>
      <a href='#' className='for-padding'>
        <button className='btn btn-white ' type='btn'>
            Sign In
        </button>
      </a>
      <a href='#' >
        <button className='btn btn-warning pl-3' type='btn'>
            Sign Up
        </button>
        </a>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar