import React from 'react'
import './Navbar.scss'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="logo">
                <span>ALH PROPERTIES</span>
            </div>
            <div className="links">
                <span>About</span>
                <span>Developer</span>
                <span>Location</span>
                <button>BROCHURE</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar