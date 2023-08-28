import React from 'react'
import './Navbar.css'
import Icon from '../../assets/react.svg'

export default function Navbar() {
  return (
    <header>
      <img src={Icon} alt="" />
      <nav className='navbar'>
        <ul>
          <li><a className='link' href="#">Home</a></li>
          <li><a className='link' href="#">About</a></li>
          <li><a className='link' href="#">Contact Us</a></li>
        </ul>
        <button>Login</button>
      </nav>

    </header >
  )
}
