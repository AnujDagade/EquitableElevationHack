import React from 'react'
import './TopBar.css'
import {Link} from "react-router-dom";


export default function TopBar() {
  return (
    <div className='TopBar'>
        <ul className='features'>
            <li><Link to="/ngo">Contact NGOs</Link></li>
            <li><Link to="/victims">contact Survivors</Link></li>
            <li><Link to="/ngo_register">Register as NGO</Link></li>
            <li><Link to="/victim_register">Register as Survivor</Link></li>
        </ul>
    </div>
  )
}
 