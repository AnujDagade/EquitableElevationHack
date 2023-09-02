import React from 'react'
import './TopBar.css'
import {Link} from "react-router-dom";


export default function TopBar() {
  return (
    <div className='TopBar'>
        <ul className='features'>
            <li><Link to="/ngo">Contact NGO</Link></li>
            <li><Link to="/victims">Victims</Link></li>
            <li><Link to="/ngo_register">Register NGO</Link></li>
            <li><Link to="/victim_register">Register Victim</Link></li>
        </ul>
    </div>
  )
}
 