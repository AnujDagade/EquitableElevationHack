import React from 'react'
import './Navbar.css'
import Icon from '../../assets/react.svg'
import { Link } from 'react-router-dom'



export default function Navbar() {
  return (
    <header>
      {/* <img src={Icon} alt="" /> */}
      <h2 className='banner'>Hope After Hurt</h2>
      <nav className='navbar'>
        <ul>
          <li><Link className='link' to="/">Home</Link></li>
          <li><Link className='link' to="/about">About</Link></li>
          <li><Link className='link' to="/contact">Contact Us</Link></li>
        </ul>
        {/* <button>Login</button> */}
      </nav>

    </header >
  )
}
