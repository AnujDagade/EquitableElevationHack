import React from 'react'
import './TopBar.css'
import {Link} from "react-router-dom";


export default function TopBar() {
  return (
    <div className='TopBar'>
        <ul className='features'>
            <li><Link to="/ngo" className='full-width'>Contact NGOs</Link></li>
            <li><Link to="/victims" className='full-width'>contact Survivors</Link></li>
            <li><Link to="/ngo_register" className='full-width'>Register as NGO</Link></li>
            <li><Link to="/victim_register" className='full-width'>Register as Survivor</Link></li>
        </ul>
    </div>
  )
}
 