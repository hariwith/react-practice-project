import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      <div className="nav-con">
        <Link to='/'>Home</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/cards'>Cards</Link>
        <Link to='/contact'>Contact</Link>

        
      </div>
    </div>
  )
}

export default Navbar
